/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, Vector3 } from 'three'
import * as THREE from 'three'
import { XRButton } from 'three/examples/jsm/webxr/XRButton.js'
import { ARButton } from 'three/examples/jsm/webxr/ARButton.js'

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
import '@woby/three/src/lights/PointLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webxr_sandbox from Three.js examples.
 * General WebXR sandbox for VR and AR experimentation.
 *
 * Source: https://threejs.org/examples/webxr_sandbox.html
 *
 * This example demonstrates:
 * - Dual VR/AR support
 * - Flexible sandbox environment
 * - Object spawning and manipulation
 * - Cross-platform XR support
 *
 * Device requirements:
 * - VR headset OR AR-capable device
 */

export const WebXRSandbox = () => {
    const rendererRef = $<THREE.WebGLRenderer>()
    const sceneRef = $<THREE.Scene>()
    const cameraRef = $<THREE.PerspectiveCamera>()
    const [vrSupported, setVRSupported] = $(false)
    const [arSupported, setARSupported] = $(false)
    const [checked, setChecked] = $(false)
    const [mode, setMode] = $('vr')

    // Controllers
    const controllers: THREE.XRTargetRaySpace[] = []

    // Spawned objects
    const spawnedObjects: THREE.Mesh[] = []

    // Check WebXR support
    useEffect(() => {
        const checkXR = async () => {
            if ('xr' in navigator) {
                try {
                    const vr = await navigator.xr.isSessionSupported('immersive-vr')
                    const ar = await navigator.xr.isSessionSupported('immersive-ar')
                    setVRSupported(vr)
                    setARSupported(ar)

                    // Default to VR if available, otherwise AR
                    if (vr) setMode('vr')
                    else if (ar) setMode('ar')
                } catch (e) {
                    console.warn('WebXR check failed:', e)
                }
            }
            setChecked(true)
        }
        checkXR()
    })

    // Spawn object
    function spawnObject(position: Vector3): THREE.Mesh {
        const types = ['box', 'sphere', 'cylinder']
        const type = types[Math.floor(Math.random() * types.length)]
        const color = new Color().setHSL(Math.random(), 0.7, 0.5)

        let geometry: THREE.BufferGeometry
        switch (type) {
            case 'sphere':
                geometry = new THREE.SphereGeometry(0.08, 16, 16)
                break
            case 'cylinder':
                geometry = new THREE.CylinderGeometry(0.04, 0.04, 0.15, 16)
                break
            default:
                geometry = new THREE.BoxGeometry(0.12, 0.12, 0.12)
        }

        const material = new THREE.MeshStandardMaterial({
            color,
            roughness: 0.3,
            metalness: 0.5
        })

        const mesh = new THREE.Mesh(geometry, material)
        mesh.position.copy(position)
        mesh.userData.velocity = new Vector3(
            (Math.random() - 0.5) * 0.3,
            Math.random() * 0.3,
            (Math.random() - 0.5) * 0.3
        )

        return mesh
    }

    // Setup XR buttons and controllers
    useEffect(() => {
        const renderer = $$(rendererRef)
        const scene = $$(sceneRef)
        if (!renderer || !scene) return

        const xrSupported = $$(vrSupported) || $$(arSupported)
        if (!xrSupported) return

        // Create appropriate button based on mode
        let xrButton: HTMLElement

        if ($$(mode) === 'vr' && $$(vrSupported)) {
            xrButton = XRButton.createButton(renderer)
        } else if ($$(arSupported)) {
            xrButton = ARButton.createButton(renderer, {
                requiredFeatures: ['hit-test'],
                optionalFeatures: ['dom-overlay'],
                domOverlay: { root: document.body }
            })
        } else {
            return
        }

        document.body.appendChild(xrButton)

        // Setup controllers
        for (let i = 0; i < 2; i++) {
            const controller = renderer.xr.getController(i)
            controllers.push(controller)

            // Add visual ray
            const geometry = new THREE.BufferGeometry().setFromPoints([
                new THREE.Vector3(0, 0, 0),
                new THREE.Vector3(0, 0, -1)
            ])
            const material = new THREE.LineBasicMaterial({ color: 0xffffff })
            const line = new THREE.Line(geometry, material)
            line.scale.z = 5
            controller.add(line)

            // Spawn on select
            controller.addEventListener('select', () => {
                const position = new Vector3()
                position.setFromMatrixPosition(controller.matrixWorld)
                position.z -= 0.4

                const newObject = spawnObject(position)
                scene.add(newObject)
                spawnedObjects.push(newObject)

                // Limit objects
                while (spawnedObjects.length > 30) {
                    const old = spawnedObjects.shift()!
                    scene.remove(old)
                    old.geometry.dispose()
                    if (old.material instanceof THREE.Material) {
                        old.material.dispose()
                    }
                }
            })

            scene.add(controller)
        }

        return () => {
            xrButton.remove()
            controllers.length = 0
            spawnedObjects.forEach(obj => {
                scene.remove(obj)
                obj.geometry.dispose()
                if (obj.material instanceof THREE.Material) {
                    obj.material.dispose()
                }
            })
            spawnedObjects.length = 0
        }
    })

    useFrame((state) => {
        const delta = state.clock?.getDelta() ?? 0.016
        const time = state.clock?.getElapsedTime() ?? 0
        const scene = $$(sceneRef)
        if (!scene) return

        // Update spawned objects
        spawnedObjects.forEach((obj) => {
            const velocity = obj.userData.velocity as Vector3

            // Apply gravity (only in VR mode)
            if ($$(mode) === 'vr') {
                velocity.y -= 9.8 * delta
                obj.position.add(velocity.clone().multiplyScalar(delta))

                // Floor collision
                if (obj.position.y < 0.1) {
                    obj.position.y = 0.1
                    velocity.y *= -0.5
                    velocity.x *= 0.9
                    velocity.z *= 0.9
                }
            }

            // Rotate
            obj.rotation.x += delta * 0.5
            obj.rotation.y += delta * 0.3
        })

        // Animate reference objects
        scene.children.forEach((child, i) => {
            if (child instanceof THREE.Mesh && child.userData.animate) {
                child.rotation.y = time * 0.5 + i * 0.2
            }
        })
    })

    // Loading state
    if (!$$(checked)) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#1a1a2e', color: 'white' }}>
                <p>Checking WebXR support...</p>
            </div>
        )
    }

    const hasXR = $$(vrSupported) || $$(arSupported)

    // Fallback for non-XR browsers
    if (!hasXR) {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#1a1a2e', color: 'white', textAlign: 'center', padding: '20px' }}>
                <h1>WebXR Not Available</h1>
                <p style={{ maxWidth: '600px', marginBottom: '20px' }}>
                    WebXR Sandbox requires a VR headset or AR-capable device.
                </p>
                <h3>WebXR Sandbox enables:</h3>
                <ul style={{ textAlign: 'left', marginBottom: '20px' }}>
                    <li>VR mode: Spawn and interact with 3D objects</li>
                    <li>AR mode: Place objects in real world</li>
                    <li>Cross-platform XR support</li>
                </ul>
                <p style={{ color: '#888' }}>
                    Showing fallback scene without XR.
                </p>

                <div style={{ width: '100%', height: '400px', marginTop: '20px' }}>
                    <canvas3D>
                        <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[600, 400]} />
                        <scene background={new Color(0x1a1a2e)}>
                            <ambientLight intensity={0.3} />
                            <directionalLight position={[5, 10, 5]} intensity={1} />
                            {[-0.4, 0, 0.4].map((x, i) => (
                                <mesh key={i} position={[x, 0.5, -1]}>
                                    <boxGeometry args={[0.15, 0.15, 0.15]} />
                                    <meshStandardMaterial color={new Color().setHSL(i / 3, 0.7, 0.5)} />
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
                alpha={$$(mode) === 'ar'}
            />
            <scene ref={sceneRef} background={$$(mode) === 'ar' ? null as unknown as THREE.Color : new Color(0x1a1a2e)}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 10, 5]} intensity={1} />
                <pointLight position={[0, 3, 0]} intensity={0.5} />

                {/* Floor (VR only) */}
                {$$(mode) === 'vr' && (
                    <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                        <cylinderGeometry args={[5, 5, 0.1, 32]} />
                        <meshStandardMaterial color={0x333344} />
                    </mesh>
                )}

                {/* Grid (VR only) */}
                {$$(mode) === 'vr' && (
                    <gridHelper args={[10, 20, 0x444466, 0x333355]} position={[0, 0.01, 0]} />
                )}

                {/* Reference pillar */}
                <mesh position={[0, 0.5, -2]} userData-animate={true}>
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

export default WebXRSandbox
