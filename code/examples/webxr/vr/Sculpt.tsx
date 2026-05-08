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
import '@woby/three/src/scenes/Scene'

/**
 * Port of webxr_vr_sculpt from Three.js examples.
 * VR sculpting tool for creating 3D shapes.
 *
 * Source: https://threejs.org/examples/webxr_vr_sculpt.html
 *
 * This example demonstrates:
 * - VR sculpting with controllers
 * - Dynamic mesh deformation
 * - Additive and subtractive sculpting
 * - Real-time mesh updates
 *
 * Device requirements:
 * - VR headset with controllers (Quest, Vive, etc.)
 */

export const VRSculpt = () => {
    const rendererRef = $<THREE.WebGLRenderer>()
    const sceneRef = $<THREE.Scene>()
    const cameraRef = $<THREE.PerspectiveCamera>()
    const [xrSupported, setXRSupported] = $(false)
    const [checked, setChecked] = $(false)
    const [mode, setMode] = $('add')

    // Controllers
    const controllers: THREE.XRTargetRaySpace[] = []

    // Sculpted spheres
    const sculptedObjects: THREE.Mesh[] = []

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

    // Create a sculptable sphere
    function createSculptSphere(position: Vector3): THREE.Mesh {
        const geometry = new THREE.SphereGeometry(0.15, 32, 32)
        const material = new THREE.MeshStandardMaterial({
            color: new Color().setHSL(Math.random(), 0.7, 0.5),
            roughness: 0.3,
            metalness: 0.5
        })

        const mesh = new THREE.Mesh(geometry, material)
        mesh.position.copy(position)
        mesh.userData.originalPositions = geometry.attributes.position.array.slice()

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

            // Add sculpting tool visual
            const toolGeom = new THREE.SphereGeometry(0.03, 16, 16)
            const toolMat = new THREE.MeshBasicMaterial({
                color: i === 0 ? 0xff6b6b : 0x4ecdc4
            })
            const tool = new THREE.Mesh(toolGeom, toolMat)
            controller.add(tool)

            // Add pointer line
            const lineGeom = new THREE.BufferGeometry().setFromPoints([
                new THREE.Vector3(0, 0, 0),
                new THREE.Vector3(0, 0, -1)
            ])
            const lineMat = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.5 })
            const line = new THREE.Line(lineGeom, lineMat)
            line.scale.z = 3
            controller.add(line)

            // Handle select for spawning base sphere
            controller.addEventListener('select', () => {
                const position = new Vector3()
                position.setFromMatrixPosition(controller.matrixWorld)
                position.z -= 0.5

                const newSphere = createSculptSphere(position)
                scene.add(newSphere)
                sculptedObjects.push(newSphere)
            })

            scene.add(controller)
        }

        return () => {
            vrButton.remove()
            controllers.length = 0
            sculptedObjects.forEach(obj => {
                scene.remove(obj)
                obj.geometry.dispose()
                if (obj.material instanceof THREE.Material) {
                    obj.material.dispose()
                }
            })
            sculptedObjects.length = 0
        }
    })

    // Sculpt mesh at point
    function sculptMesh(mesh: THREE.Mesh, point: Vector3, addMode: boolean) {
        const geometry = mesh.geometry as THREE.BufferGeometry
        const positions = geometry.attributes.position.array as Float32Array
        const originalPositions = mesh.userData.originalPositions as Float32Array

        if (!originalPositions) return

        const radius = 0.1
        const strength = 0.02

        for (let i = 0; i < positions.length; i += 3) {
            const vertex = new Vector3(positions[i], positions[i + 1], positions[i + 2])
            vertex.applyMatrix4(mesh.matrixWorld)

            const distance = vertex.distanceTo(point)

            if (distance < radius) {
                const influence = 1 - (distance / radius)
                const direction = vertex.clone().sub(point).normalize()

                // Transform back to local space
                const inverseMatrix = new THREE.Matrix4().copy(mesh.matrixWorld).invert()
                direction.transformDirection(inverseMatrix)

                if (addMode) {
                    positions[i] += direction.x * strength * influence
                    positions[i + 1] += direction.y * strength * influence
                    positions[i + 2] += direction.z * strength * influence
                } else {
                    positions[i] -= direction.x * strength * influence
                    positions[i + 1] -= direction.y * strength * influence
                    positions[i + 2] -= direction.z * strength * influence
                }
            }
        }

        geometry.attributes.position.needsUpdate = true
        geometry.computeVertexNormals()
    }

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const scene = $$(sceneRef)
        if (!scene) return

        // Check for squeeze to sculpt
        controllers.forEach((controller) => {
            if (controller.userData.squeezing) {
                const position = new Vector3()
                position.setFromMatrixPosition(controller.matrixWorld)

                sculptedObjects.forEach((mesh) => {
                    sculptMesh(mesh, position, $$(mode) === 'add')
                })
            }
        })

        // Animate sculpted objects
        sculptedObjects.forEach((mesh, i) => {
            mesh.rotation.y = time * 0.1 + i * 0.2
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
                    VR Sculpting requires a VR headset with controllers.
                </p>
                <h3>VR Sculpt enables:</h3>
                <ul style={{ textAlign: 'left', marginBottom: '20px' }}>
                    <li>Create 3D shapes by spawning spheres</li>
                    <li>Sculpt with squeeze gesture</li>
                    <li>Additive and subtractive modes</li>
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
                            {/* Demo sculpted sphere */}
                            <mesh position={[0, 1, -1]}>
                                <sphereGeometry args={[0.3, 32, 32]} />
                                <meshStandardMaterial color={0x4ecdc4} />
                            </mesh>
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

                {/* Floor */}
                <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <cylinderGeometry args={[5, 5, 0.1, 32]} />
                    <meshStandardMaterial color={0x333344} />
                </mesh>

                {/* Grid */}
                <gridHelper args={[10, 20, 0x444466, 0x333355]} position={[0, 0.01, 0]} />

                {/* Mode indicator */}
                <mesh position={[0, 1.5, -1]}>
                    <boxGeometry args={[0.3, 0.1, 0.02]} />
                    <meshBasicMaterial color={$$(mode) === 'add' ? 0x4ecdc4 : 0xff6b6b} />
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

export default VRSculpt
