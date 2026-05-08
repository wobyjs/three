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
 * Port of webxr_vr_cubes from Three.js examples.
 * Basic VR scene with interactive cubes.
 *
 * Source: https://threejs.org/examples/webxr_vr_cubes.html
 *
 * This example demonstrates:
 * - VR session setup with XRButton
 * - Controller input handling
 * - Interactive objects in VR
 */

export const VRCubes = () => {
    const rendererRef = $<THREE.WebGLRenderer>()
    const sceneRef = $<THREE.Scene>()
    const cameraRef = $<THREE.PerspectiveCamera>()
    const [xrSupported, setXRSupported] = $(false)
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

    // Setup VR button and controllers
    useEffect(() => {
        const renderer = $$(rendererRef)
        if (!renderer || !$$(xrSupported)) return

        // Create VR button
        const vrButton = XRButton.createButton(renderer)
        document.body.appendChild(vrButton)

        // Setup controllers
        const controller1 = renderer.xr.getController(0)
        const controller2 = renderer.xr.getController(1)

        const scene = $$(sceneRef)
        if (scene) {
            scene.add(controller1)
            scene.add(controller2)

            // Add visual markers for controllers
            const geometry = new THREE.BufferGeometry().setFromPoints([
                new THREE.Vector3(0, 0, 0),
                new THREE.Vector3(0, 0, -1)
            ])
            const line = new THREE.Line(geometry)
            line.scale.z = 5

            controller1.add(line.clone())
            controller2.add(line.clone())
        }

        return () => {
            vrButton.remove()
        }
    })

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const scene = $$(sceneRef)
        if (scene) {
            // Animate cubes
            scene.children.forEach((child, i) => {
                if (child instanceof THREE.Mesh && child.name.startsWith('cube')) {
                    child.rotation.x = time * 0.5 + i * 0.1
                    child.rotation.y = time * 0.3 + i * 0.1
                    child.position.y = Math.sin(time + i * 0.5) * 0.2 + 1
                }
            })
        }
    })

    // Generate cube positions in a circle
    const cubePositions: [number, number, number][] = []
    for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2
        cubePositions.push([
            Math.cos(angle) * 2,
            1,
            Math.sin(angle) * 2
        ])
    }

    // Loading state
    if (!$$(checked)) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#000', color: 'white' }}>
                <p>Checking WebXR support...</p>
            </div>
        )
    }

    // Fallback for non-XR browsers
    if (!$$(xrSupported)) {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#000', color: 'white', textAlign: 'center', padding: '20px' }}>
                <h1>WebXR VR Not Available</h1>
                <p>A VR headset and WebXR-compatible browser are required.</p>
                <p style={{ color: '#888', marginTop: '20px' }}>
                    Showing fallback scene without VR.
                </p>

                <div style={{ width: '100%', height: '400px', marginTop: '20px' }}>
                    <canvas3D>
                        <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[600, 400]} />
                        <scene background={new Color(0x000000)}>
                            <ambientLight intensity={0.3} />
                            <directionalLight position={[5, 10, 5]} intensity={1} />
                            {cubePositions.map((pos, i) => (
                                <mesh key={i} position={pos}>
                                    <boxGeometry args={[0.3, 0.3, 0.3]} />
                                    <meshStandardMaterial color={new Color().setHSL(i / 8, 0.7, 0.5)} />
                                </mesh>
                            ))}
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
            <webGLRenderer
                ref={rendererRef}
                antialias
                setPixelRatio={[window.devicePixelRatio]}
                setSize={[window.innerWidth, window.innerHeight]}
                xr-enabled
            />
            <scene ref={sceneRef} background={new Color(0x000000)}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 10, 5]} intensity={1} />

                {/* Floor */}
                <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <cylinderGeometry args={[5, 5, 0.1, 32]} />
                    <meshStandardMaterial color={0x222222} />
                </mesh>

                {/* Cubes in a circle */}
                {cubePositions.map((pos, i) => (
                    <mesh key={i} name={`cube-${i}`} position={pos}>
                        <boxGeometry args={[0.3, 0.3, 0.3]} />
                        <meshStandardMaterial
                            color={new Color().setHSL(i / 8, 0.7, 0.5)}
                            roughness={0.3}
                            metalness={0.7}
                        />
                    </mesh>
                ))}

                {/* Central larger cube */}
                <mesh name="cube-center" position={[0, 1, 0]}>
                    <boxGeometry args={[0.5, 0.5, 0.5]} />
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

export default VRCubes
