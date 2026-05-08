/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'
import * as THREE from 'three'
import { ARButton } from 'three/examples/jsm/webxr/ARButton.js'

// Import wrappers for registration
import '@woby/three/src/geometries/ConeGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/materials/MeshNormalMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webxr_ar_cones from Three.js examples.
 * AR scene with cones placed in real world.
 *
 * Source: https://threejs.org/examples/webxr_ar_cones.html
 *
 * This example demonstrates:
 * - AR session setup with ARButton
 * - Hit testing for placing objects
 * - Real-world integration
 *
 * Note: AR requires a compatible device (phone with ARCore/ARKit).
 */

export const ARCones = () => {
    const rendererRef = $<THREE.WebGLRenderer>()
    const sceneRef = $<THREE.Scene>()
    const cameraRef = $<THREE.PerspectiveCamera>()
    const [arSupported, setARSupported] = $(false)
    const [checked, setChecked] = $(false)

    // Check AR support
    useEffect(() => {
        const checkAR = async () => {
            if ('xr' in navigator) {
                try {
                    const supported = await navigator.xr.isSessionSupported('immersive-ar')
                    setARSupported(supported)
                } catch (e) {
                    console.warn('WebXR AR check failed:', e)
                }
            }
            setChecked(true)
        }
        checkAR()
    })

    // Setup AR button
    useEffect(() => {
        const renderer = $$(rendererRef)
        if (!renderer || !$$(arSupported)) return

        // Create AR button with hit-test feature
        const arButton = ARButton.createButton(renderer, {
            requiredFeatures: ['hit-test']
        })
        document.body.appendChild(arButton)

        // Setup controller for hit testing
        const controller = renderer.xr.getController(0)
        const scene = $$(sceneRef)
        if (scene) {
            scene.add(controller)
        }

        return () => {
            arButton.remove()
        }
    })

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const scene = $$(sceneRef)
        if (scene) {
            scene.children.forEach((child, i) => {
                if (child instanceof THREE.Mesh && child.name.startsWith('cone')) {
                    child.rotation.y = time * 0.5 + i * 0.2
                }
            })
        }
    })

    // Generate cone positions
    const conePositions: { pos: [number, number, number]; scale: number; color: number }[] = [
        { pos: [0, 0.5, 0], scale: 1, color: 0xff6b6b },
        { pos: [-1, 0.3, -1], scale: 0.6, color: 0x4ecdc4 },
        { pos: [1, 0.4, -0.5], scale: 0.8, color: 0xffe66d },
        { pos: [-0.5, 0.25, 1], scale: 0.5, color: 0x95e1d3 },
        { pos: [0.5, 0.35, 1.5], scale: 0.7, color: 0xf38181 },
    ]

    // Loading state
    if (!$$(checked)) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#1a1a2e', color: 'white' }}>
                <p>Checking WebXR AR support...</p>
            </div>
        )
    }

    // Fallback for non-AR browsers
    if (!$$(arSupported)) {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#1a1a2e', color: 'white', textAlign: 'center', padding: '20px' }}>
                <h1>WebXR AR Not Available</h1>
                <p style={{ maxWidth: '600px', marginBottom: '20px' }}>
                    Augmented Reality requires an AR-capable device with ARCore (Android) or ARKit (iOS).
                </p>
                <h3>To use AR, you need:</h3>
                <ul style={{ textAlign: 'left', marginBottom: '20px' }}>
                    <li>An AR-capable smartphone</li>
                    <li>Chrome on Android or Safari on iOS</li>
                    <li>HTTPS connection or localhost</li>
                </ul>
                <p style={{ color: '#888' }}>
                    Showing fallback scene without AR.
                </p>

                <div style={{ width: '100%', height: '400px', marginTop: '20px' }}>
                    <canvas3D>
                        <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[600, 400]} />
                        <scene background={new Color(0x1a1a2e)}>
                            <ambientLight intensity={0.5} />
                            <directionalLight position={[5, 10, 5]} intensity={1} />
                            {conePositions.map((cone, i) => (
                                <mesh key={i} position={cone.pos} scale={[cone.scale, cone.scale, cone.scale]}>
                                    <coneGeometry args={[0.3, 1, 32]} />
                                    <meshStandardMaterial color={cone.color} />
                                </mesh>
                            ))}
                        </scene>
                        <perspectiveCamera fov={60} aspect={600 / 400} near={0.1} far={100} position={[0, 2, 4]} />
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
                alpha
            />
            <scene ref={sceneRef} background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 10, 5]} intensity={1} />

                {/* Cones at various positions */}
                {conePositions.map((cone, i) => (
                    <mesh
                        key={i}
                        name={`cone-${i}`}
                        position={cone.pos}
                        scale={[cone.scale, cone.scale, cone.scale]}
                    >
                        <coneGeometry args={[0.3, 1, 32]} />
                        <meshStandardMaterial
                            color={cone.color}
                            roughness={0.3}
                            metalness={0.5}
                        />
                    </mesh>
                ))}
            </scene>

            <perspectiveCamera
                ref={cameraRef}
                fov={60}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[0, 1.6, 3]}
            />
            <orbitControls enableDamping target={[0, 0.5, 0]} />
        </canvas3D>
    )
}

export default ARCones
