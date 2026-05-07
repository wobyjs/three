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
 * Basic VR scene with interactive cubes that change color on selection.
 *
 * Source: https://threejs.org/examples/webxr_vr_cubes.html
 *
 * This example demonstrates:
 * - VR session setup with XRButton
 * - Controller input handling (select events)
 * - Raycasting from controllers
 * - Interactive objects in VR with color change
 */

export const VRCubesInteractive = () => {
    const rendererRef = $<THREE.WebGLRenderer>()
    const sceneRef = $<THREE.Scene>()
    const cameraRef = $<THREE.PerspectiveCamera>()
    const [xrSupported, setXRSupported] = $(false)
    const [checked, setChecked] = $(false)

    // Store controllers for raycasting
    const controllers: THREE.XRTargetRaySpace[] = []
    const raycaster = new THREE.Raycaster()
    const tempMatrix = new THREE.Matrix4()

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

    // Setup VR button and controllers with ray visualization
    useEffect(() => {
        const renderer = $$(rendererRef)
        if (!renderer || !$$(xrSupported)) return

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

            // Setup select event for color change
            controller.addEventListener('selectstart', onSelectStart)
            controller.addEventListener('selectend', onSelectEnd)

            const scene = $$(sceneRef)
            if (scene) {
                scene.add(controller)
            }
        }

        return () => {
            vrButton.remove()
            controllers.length = 0
        }
    })

    // Handle select start - raycast and highlight
    function onSelectStart(event: THREE.Event) {
        const controller = event.target as THREE.XRTargetRaySpace
        const scene = $$(sceneRef)
        if (!scene) return

        // Get intersections
        const intersections = getIntersections(controller, scene)
        if (intersections.length > 0) {
            const intersection = intersections[0]
            const object = intersection.object as THREE.Mesh

            // Store original color and highlight
            if (object.material && object.material instanceof THREE.MeshStandardMaterial) {
                object.userData.originalColor = object.material.color.getHex()
                object.material.emissive.setHex(0x444444)
            }

            // Store reference for select end
            controller.userData.selected = object
        }
    }

    // Handle select end - change color permanently
    function onSelectEnd(event: THREE.Event) {
        const controller = event.target as THREE.XRTargetRaySpace
        const scene = $$(sceneRef)
        if (!scene) return

        const selected = controller.userData.selected as THREE.Mesh | undefined
        if (selected && selected.material instanceof THREE.MeshStandardMaterial) {
            // Reset emissive
            selected.material.emissive.setHex(0x000000)

            // Change to a random color
            const newColor = new Color().setHSL(Math.random(), 0.7, 0.5)
            selected.material.color.copy(newColor)
        }

        controller.userData.selected = undefined
    }

    // Raycast from controller
    function getIntersections(controller: THREE.XRTargetRaySpace, scene: THREE.Scene) {
        tempMatrix.identity().extractRotation(controller.matrixWorld)
        raycaster.ray.origin.setFromMatrixPosition(controller.matrixWorld)
        raycaster.ray.direction.set(0, 0, -1).applyMatrix4(tempMatrix)

        // Get all cubes
        const cubes: THREE.Object3D[] = []
        scene.traverse((child) => {
            if (child instanceof THREE.Mesh && child.name.startsWith('cube')) {
                cubes.push(child)
            }
        })

        return raycaster.intersectObjects(cubes, false)
    }

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const scene = $$(sceneRef)
        if (scene) {
            // Animate cubes - gentle floating motion
            scene.children.forEach((child, i) => {
                if (child instanceof THREE.Mesh && child.name.startsWith('cube')) {
                    const idx = parseInt(child.name.split('-')[1]) || 0
                    child.rotation.x = time * 0.5 + idx * 0.1
                    child.rotation.y = time * 0.3 + idx * 0.1
                    child.position.y = Math.sin(time + idx * 0.5) * 0.2 + 1
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
                    Showing fallback scene without VR interaction.
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

                {/* Interactive cubes in a circle */}
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

export default VRCubesInteractive
