/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, Vector3 } from 'three'
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
import '@woby/three/src/lights/PointLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webxr_vr_sandbox from Three.js examples.
 * VR sandbox environment for experimenting with objects.
 *
 * Source: https://threejs.org/examples/webxr_vr_sandbox.html
 *
 * This example demonstrates:
 * - Free-form object manipulation in VR
 * - Spawn and interact with various objects
 * - Physics-like behavior
 * - Creative sandbox environment
 *
 * Device requirements:
 * - VR headset with controllers (Quest, Vive, etc.)
 */

export const VRSandbox = () => {
    const rendererRef = $<THREE.WebGLRenderer>()
    const sceneRef = $<THREE.Scene>()
    const cameraRef = $<THREE.PerspectiveCamera>()
    const [xrSupported, setXRSupported] = $(false)
    const [checked, setChecked] = $(false)
    const [objectCount, setObjectCount] = $(0)

    // Controllers
    const controllers: THREE.XRTargetRaySpace[] = []

    // Spawned objects
    const spawnedObjects: THREE.Mesh[] = []
    const maxObjects = 50

    // Object types to spawn
    const objectTypes = ['box', 'sphere', 'cylinder']

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

    // Spawn a random object
    function spawnObject(position: Vector3): THREE.Mesh {
        const type = objectTypes[Math.floor(Math.random() * objectTypes.length)]
        const color = new Color().setHSL(Math.random(), 0.7, 0.5)

        let geometry: THREE.BufferGeometry
        switch (type) {
            case 'sphere':
                geometry = new THREE.SphereGeometry(0.1, 16, 16)
                break
            case 'cylinder':
                geometry = new THREE.CylinderGeometry(0.05, 0.05, 0.2, 16)
                break
            default:
                geometry = new THREE.BoxGeometry(0.15, 0.15, 0.15)
        }

        const material = new THREE.MeshStandardMaterial({
            color,
            roughness: 0.3,
            metalness: 0.5
        })

        const mesh = new THREE.Mesh(geometry, material)
        mesh.position.copy(position)
        mesh.userData.velocity = new Vector3(
            (Math.random() - 0.5) * 0.5,
            Math.random() * 0.5,
            (Math.random() - 0.5) * 0.5
        )
        mesh.userData.type = type

        return mesh
    }

    // Setup VR button and controllers
    useEffect(() => {
        const renderer = $$(rendererRef)
        const scene = $$(sceneRef)
        if (!renderer || !$$(xrSupported) || !scene) return

        // Create VR button
        const vrButton = XRButton.createButton(renderer)
        document.body.appendChild(vrButton)

        // Setup controllers
        for (let i = 0; i < 2; i++) {
            const controller = renderer.xr.getController(i)
            controllers.push(controller)

            // Add visual ray line
            const geometry = new THREE.BufferGeometry().setFromPoints([
                new THREE.Vector3(0, 0, 0),
                new THREE.Vector3(0, 0, -1)
            ])
            const material = new THREE.LineBasicMaterial({ color: 0xffffff })
            const line = new THREE.Line(geometry, material)
            line.scale.z = 5
            controller.add(line)

            // Spawn object on select
            controller.addEventListener('select', () => {
                const position = new Vector3()
                position.setFromMatrixPosition(controller.matrixWorld)
                position.z -= 0.5 // Spawn in front of controller

                const newObject = spawnObject(position)
                scene.add(newObject)
                spawnedObjects.push(newObject)

                // Remove old objects if too many
                while (spawnedObjects.length > maxObjects) {
                    const oldObject = spawnedObjects.shift()!
                    scene.remove(oldObject)
                    oldObject.geometry.dispose()
                    if (oldObject.material instanceof THREE.Material) {
                        oldObject.material.dispose()
                    }
                }

                setObjectCount(spawnedObjects.length)
            })

            scene.add(controller)
        }

        return () => {
            vrButton.remove()
            controllers.length = 0
            // Clean up spawned objects
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
        const scene = $$(sceneRef)
        if (!scene) return

        // Update spawned objects with simple physics
        spawnedObjects.forEach((obj) => {
            const velocity = obj.userData.velocity as Vector3

            // Apply gravity
            velocity.y -= 9.8 * delta

            // Update position
            obj.position.add(velocity.clone().multiplyScalar(delta))

            // Floor collision
            if (obj.position.y < 0.1) {
                obj.position.y = 0.1
                velocity.y *= -0.5
                velocity.x *= 0.9
                velocity.z *= 0.9
            }

            // Rotate
            obj.rotation.x += delta * 0.5
            obj.rotation.y += delta * 0.3
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

    // Fallback for non-XR browsers
    if (!$$(xrSupported)) {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#1a1a2e', color: 'white', textAlign: 'center', padding: '20px' }}>
                <h1>WebXR VR Not Available</h1>
                <p style={{ maxWidth: '600px', marginBottom: '20px' }}>
                    VR Sandbox requires a VR headset with controllers.
                </p>
                <h3>VR Sandbox enables:</h3>
                <ul style={{ textAlign: 'left', marginBottom: '20px' }}>
                    <li>Spawn various 3D objects</li>
                    <li>Physics-like interactions</li>
                    <li>Creative experimentation</li>
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
                            {/* Demo objects */}
                            {[0, 1, 2].map(i => (
                                <mesh key={i} position={[(i - 1) * 0.5, 0.5, -1]}>
                                    <boxGeometry args={[0.2, 0.2, 0.2]} />
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
            />
            <scene ref={sceneRef} background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 10, 5]} intensity={1} />
                <pointLight position={[0, 3, 0]} intensity={0.5} />

                {/* Floor */}
                <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <cylinderGeometry args={[5, 5, 0.1, 32]} />
                    <meshStandardMaterial color={0x333344} />
                </mesh>

                {/* Grid */}
                <gridHelper args={[10, 20, 0x444466, 0x333355]} position={[0, 0.01, 0]} />

                {/* Spawn platform */}
                <mesh position={[0, 0.05, -0.5]}>
                    <boxGeometry args={[1, 0.1, 1]} />
                    <meshStandardMaterial color={0x4ecdc4} />
                </mesh>

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

export default VRSandbox
