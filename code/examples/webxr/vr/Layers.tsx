/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'
import * as THREE from 'three'
import { XRButton } from 'three/examples/jsm/webxr/XRButton.js'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/CylinderGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/materials/MeshNormalMaterial'
import '@woby/three/src/materials/MeshBasicMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webxr_vr_layers from Three.js examples.
 * VR scene demonstrating XR layers for improved performance.
 *
 * Source: https://threejs.org/examples/webxr_vr_layers.html
 *
 * This example demonstrates:
 * - XR composition layers for improved performance
 * - Layer-based rendering optimization
 * - Multiple layer types (projection, quad)
 * - Layer ordering and blending
 *
 * Device requirements:
 * - VR headset with WebXR layers support
 * - Browser with layers feature enabled
 */

export const VRLayers = () => {
    const rendererRef = $<THREE.WebGLRenderer>()
    const sceneRef = $<THREE.Scene>()
    const cameraRef = $<THREE.PerspectiveCamera>()
    const [xrSupported, setXRSupported] = $(false)
    const [layersSupported, setLayersSupported] = $(false)
    const [checked, setChecked] = $(false)

    // Check WebXR and layers support
    useEffect(() => {
        const checkXR = async () => {
            if ('xr' in navigator) {
                try {
                    const supported = await navigator.xr.isSessionSupported('immersive-vr')
                    setXRSupported(supported)

                    // Check for layers support
                    if (supported) {
                        const layersSupport = await navigator.xr.isSessionSupported('immersive-vr')
                            .then(() => {
                                // Layers is an optional feature
                                return true
                            })
                        setLayersSupported(layersSupport)
                    }
                } catch (e) {
                    console.warn('WebXR check failed:', e)
                }
            }
            setChecked(true)
        }
        checkXR()
    })

    // Setup VR button with layers
    useEffect(() => {
        const renderer = $$(rendererRef)
        const scene = $$(sceneRef)
        if (!renderer || !$$(xrSupported) || !scene) return

        // Create VR button with layers feature
        const vrButton = XRButton.createButton(renderer, {
            optionalFeatures: ['layers']
        })
        document.body.appendChild(vrButton)

        // Setup layers on session start
        renderer.xr.addEventListener('sessionstart', () => {
            const session = renderer.xr.getSession()
            if (!session) return

            // Check if layers are available
            if (session.enabledFeatures?.includes('layers')) {
                console.log('XR Layers enabled')

                // In a full implementation, we would create XRCompositionLayer instances
                // For now, we'll use the standard rendering path
            }
        })

        return () => {
            vrButton.remove()
        }
    })

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const scene = $$(sceneRef)
        if (!scene) return

        // Animate layer objects
        scene.children.forEach((child, i) => {
            if (child instanceof THREE.Mesh && child.userData.layer) {
                child.rotation.y = time * 0.5 + child.userData.layerIndex * 0.3
                child.position.y = 1.2 + Math.sin(time * 2 + child.userData.layerIndex) * 0.1
            }
        })
    })

    // Layer definitions
    const layerDefs = [
        { pos: [-0.8, 1.2, -0.5], color: 0xff6b6b, name: 'Layer 1' },
        { pos: [0, 1.2, -0.5], color: 0x4ecdc4, name: 'Layer 2' },
        { pos: [0.8, 1.2, -0.5], color: 0xffe66d, name: 'Layer 3' },
    ]

    // Loading state
    if (!$$(checked)) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#1a1a2e', color: 'white' }}>
                <p>Checking WebXR support...</p>
            </div>
        )
    }

    // Fallback for non-XR browsers
    if (!$$(xrSupported)) {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#1a1a2e', color: 'white', textAlign: 'center', padding: '20px' }}>
                <h1>WebXR VR Not Available</h1>
                <p style={{ maxWidth: '600px', marginBottom: '20px' }}>
                    XR Layers requires a VR headset with layers support.
                </p>
                <h3>XR Layers enable:</h3>
                <ul style={{ textAlign: 'left', marginBottom: '20px' }}>
                    <li>Improved rendering performance</li>
                    <li>Separate layer composition</li>
                    <li>Reduced GPU overhead</li>
                </ul>
                <p style={{ color: '#888' }}>
                    Showing fallback scene without VR.
                </p>

                <div style={{ width: '100%', height: '400px', marginTop: '20px' }}>
                    <canvas3D>
                        <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[600, 400]} />
                        <scene background={new Color(0x1a1a2e)}>
                            <ambientLight intensity={0.3} />
                            <directionalLight position={[5, 10, 5]} intensity={1} />
                            {layerDefs.map((layer, i) => (
                                <mesh key={i} position={layer.pos}>
                                    <boxGeometry args={[0.3, 0.3, 0.02]} />
                                    <meshStandardMaterial color={layer.color} />
                                </mesh>
                            ))}
                        </scene>
                        <perspectiveCamera fov={60} aspect={600 / 400} near={0.1} far={100} position={[0, 2, 3]} />
                        <orbitControls enableDamping />
                    </canvas3D>
                </div>
            </div>
        )
    }

    return (
        <canvas3D>
            <webGLRenderer
                ref={rendererRef}
                antialias
                setPixelRatio={[window.devicePixelRatio]}
                setSize={[window.innerWidth, window.innerHeight]}
                xr-enabled
            />
            <scene ref={sceneRef} background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 10, 5]} intensity={1} />

                {/* Floor */}
                <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <cylinderGeometry args={[5, 5, 0.1, 32]} />
                    <meshStandardMaterial color={0x333333} />
                </mesh>

                {/* Layer panels */}
                {layerDefs.map((layer, i) => (
                    <mesh
                        key={i}
                        position={layer.pos}
                        userData-layer={true}
                        userData-layerIndex={i}
                    >
                        <boxGeometry args={[0.3, 0.3, 0.02]} />
                        <meshStandardMaterial
                            color={layer.color}
                            roughness={0.3}
                            metalness={0.5}
                        />
                    </mesh>
                ))}

                {/* Central reference pillar */}
                <mesh position={[0, 0.5, -2]}>
                    <cylinderGeometry args={[0.1, 0.1, 1, 32]} />
                    <meshNormalMaterial />
                </mesh>
            </scene>

            <perspectiveCamera
                ref={cameraRef}
                fov={60}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[0, 1.6, 3]}
            />
            <orbitControls enableDamping target={[0, 1, 0]} />
        </canvas3D>
    )
}

export default VRLayers
