/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'
import * as THREE from 'three'
import { XRButton } from 'three/examples/jsm/webxr/XRButton.js'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/CylinderGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/materials/MeshNormalMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Template for WebXR examples.
 *
 * WebXR enables VR (Virtual Reality) and AR (Augmented Reality) experiences
 * in the browser. It requires:
 * - A VR headset (Oculus, Vive, etc.) or AR-capable device
 * - A WebXR-compatible browser (Chrome, Edge with WebXR enabled)
 *
 * Key patterns for WebXR examples:
 * 1. Check WebXR support with navigator.xr.isSessionSupported()
 * 2. Enable XR on renderer: xr-enabled prop
 * 3. Create VR/AR button with XRButton.createButton()
 * 4. Setup controllers with renderer.xr.getController()
 *
 * Note: WebXR requires HTTPS or localhost to work.
 */

export const WebXRTemplate = () => {
    const rendererRef = $<THREE.WebGLRenderer>()
    const sceneRef = $<THREE.Scene>()
    const cameraRef = $<THREE.PerspectiveCamera>()
    const [xrSupported, setXRSupported] = $(false)
    const [xrSession, setXRSession] = $(null as XRSession | null)
    const [checked, setChecked] = $(false)

    // Check WebXR support
    useEffect(() => {
        const checkXR = async () => {
            if ('xr' in navigator) {
                try {
                    const supported = await navigator.xr.isSessionSupported('immersive-vr')
                    setXRSupported(supported)
                } catch (e) {
                    console.warn('WebXR check failed:', e)
                }
            }
            setChecked(true)
        }
        checkXR()
    })

    // Setup VR button when renderer is ready
    useEffect(() => {
        const renderer = $$(rendererRef)
        if (!renderer || !$$(xrSupported)) return

        // Create VR button
        const vrButton = XRButton.createButton(renderer)
        document.body.appendChild(vrButton)

        return () => {
            vrButton.remove()
        }
    })

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const scene = $$(sceneRef)
        if (scene) {
            scene.traverse((child) => {
                if (child instanceof THREE.Mesh && child.name === 'rotating') {
                    child.rotation.y = time * 0.5
                }
            })
        }
    })

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
                <h1>WebXR Not Available</h1>
                <p style={{ maxWidth: '600px', marginBottom: '20px' }}>
                    WebXR enables VR and AR experiences in the browser.
                    Your device or browser does not support WebXR.
                </p>
                <h3>To use WebXR, you need:</h3>
                <ul style={{ textAlign: 'left', marginBottom: '20px' }}>
                    <li>A VR headset (Oculus, Vive, Windows Mixed Reality)</li>
                    <li>Or an AR-capable device</li>
                    <li>Chrome or Edge with WebXR enabled</li>
                    <li>HTTPS connection or localhost</li>
                </ul>
                <p style={{ color: '#888' }}>
                    This example shows a fallback 3D scene that you can view without VR.
                </p>

                {/* Fallback 3D scene */}
                <div style={{ width: '100%', height: '400px', marginTop: '20px' }}>
                    <canvas3D>
                        <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[600, 400]} />
                        <scene background={new Color(0x1a1a2e)}>
                            <ambientLight intensity={0.3} />
                            <directionalLight position={[5, 10, 5]} intensity={1} />
                            <mesh position={[0, 0, 0]}>
                                <boxGeometry args={[1, 1, 1]} />
                                <meshStandardMaterial color={0xff6b6b} />
                            </mesh>
                        </scene>
                        <perspectiveCamera fov={60} aspect={600 / 400} near={0.1} far={100} position={[0, 2, 5]} />
                        <orbitControls enableDamping />
                    </canvas3D>
                </div>
            </div>
        )
    }

    return (
        <canvas3D>
            {/* Enable XR on renderer */}
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
                <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <cylinderGeometry args={[5, 5, 0.1, 32]} />
                    <meshStandardMaterial color={0x333333} />
                </mesh>

                {/* Central rotating cube */}
                <mesh name="rotating" position={[0, 0, 0]}>
                    <boxGeometry args={[0.5, 0.5, 0.5]} />
                    <meshStandardMaterial color={0xff6b6b} roughness={0.3} metalness={0.7} />
                </mesh>

                {/* Surrounding objects */}
                {[
                    { pos: [1.5, 0, 0], color: 0x4ecdc4 },
                    { pos: [-1.5, 0, 0], color: 0xffe66d },
                    { pos: [0, 0, 1.5], color: 0x95e1d3 },
                    { pos: [0, 0, -1.5], color: 0xf38181 },
                ].map((obj, i) => (
                    <mesh key={i} position={obj.pos as [number, number, number]}>
                        <boxGeometry args={[0.3, 0.3, 0.3]} />
                        <meshStandardMaterial color={obj.color} />
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
            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default WebXRTemplate
