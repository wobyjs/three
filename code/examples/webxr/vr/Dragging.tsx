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
import '@woby/three/src/geometries/ConeGeometry'
import '@woby/three/src/geometries/CylinderGeometry'
import '@woby/three/src/geometries/TorusGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/materials/MeshNormalMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/lights/PointLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webxr_vr_dragging from Three.js examples.
 * VR scene with grabbable objects using squeeze (grip) interaction.
 *
 * Source: https://threejs.org/examples/webxr_vr_dragging.html
 *
 * This example demonstrates:
 * - VR session setup with XRButton
 * - Controller squeeze events for grabbing
 * - Object attachment/detachment with controller.attach()
 * - Proper transform handling when grabbing/releasing objects
 */

export const VRDragging = () => {
    const rendererRef = $<THREE.WebGLRenderer>()
    const sceneRef = $<THREE.Scene>()
    const cameraRef = $<THREE.PerspectiveCamera>()
    const [xrSupported, setXRSupported] = $(false)
    const [checked, setChecked] = $(false)

    // Store controllers
    const controllers: THREE.XRTargetRaySpace[] = []
    const raycaster = new THREE.Raycaster()
    const tempMatrix = new THREE.Matrix4()

    // Objects that can be grabbed
    const grabbableObjects: THREE.Mesh[] = []

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

    // Setup VR button and controllers with grab interaction
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
            const material = new THREE.LineBasicMaterial({ color: 0xffffff, opacity: 0.5, transparent: true })
            const line = new THREE.Line(geometry, material)
            line.scale.z = 5
            controller.add(line)

            // Setup squeeze events for grabbing
            controller.addEventListener('squeezestart', onSqueezeStart)
            controller.addEventListener('squeezeend', onSqueezeEnd)

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

    // Handle squeeze start - grab object
    function onSqueezeStart(event: THREE.Event) {
        const controller = event.target as THREE.XRTargetRaySpace
        const scene = $$(sceneRef)
        if (!scene) return

        // Get intersections with grabbable objects
        const intersections = getIntersections(controller)
        if (intersections.length > 0) {
            const intersection = intersections[0]
            const object = intersection.object as THREE.Mesh

            // Attach object to controller (parents it to controller)
            // This makes the object follow the controller
            controller.attach(object)

            // Store reference for release
            controller.userData.selected = object

            // Change material to show it's grabbed
            if (object.material instanceof THREE.MeshStandardMaterial) {
                object.material.emissive.setHex(0x444444)
            }
        }
    }

    // Handle squeeze end - release object
    function onSqueezeEnd(event: THREE.Event) {
        const controller = event.target as THREE.XRTargetRaySpace
        const scene = $$(sceneRef)
        if (!scene) return

        const selected = controller.userData.selected as THREE.Mesh | undefined
        if (selected) {
            // Attach back to scene (removes from controller, keeps world transform)
            scene.attach(selected)

            // Reset material
            if (selected.material instanceof THREE.MeshStandardMaterial) {
                selected.material.emissive.setHex(0x000000)
            }
        }

        controller.userData.selected = undefined
    }

    // Raycast from controller
    function getIntersections(controller: THREE.XRTargetRaySpace) {
        tempMatrix.identity().extractRotation(controller.matrixWorld)
        raycaster.ray.origin.setFromMatrixPosition(controller.matrixWorld)
        raycaster.ray.direction.set(0, 0, -1).applyMatrix4(tempMatrix)

        return raycaster.intersectObjects(grabbableObjects, false)
    }

    // Collect grabbable objects from scene
    function collectGrabbables() {
        const scene = $$(sceneRef)
        if (!scene) return

        grabbableObjects.length = 0
        scene.traverse((child) => {
            if (child instanceof THREE.Mesh && child.userData.grabbable) {
                grabbableObjects.push(child)
            }
        })
    }

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const scene = $$(sceneRef)

        // Collect grabbable objects once
        if (grabbableObjects.length === 0) {
            collectGrabbables()
        }

        // Animate non-grabbed objects slightly
        if (scene) {
            scene.children.forEach((child) => {
                if (child instanceof THREE.Mesh && child.userData.grabbable && !child.parent?.isXRController) {
                    // Gentle floating animation
                    const baseY = child.userData.baseY ?? child.position.y
                    child.userData.baseY = baseY
                    child.position.y = baseY + Math.sin(time * 2 + child.position.x) * 0.05
                    child.rotation.y += 0.002
                }
            })
        }
    })

    // Define grabbable objects
    const grabbables = [
        { type: 'box', pos: [-1, 1, -1] as [number, number, number], color: 0xff6b6b, scale: 0.3 },
        { type: 'box', pos: [1, 1, -1] as [number, number, number], color: 0x4ecdc4, scale: 0.25 },
        { type: 'sphere', pos: [0, 1, -2] as [number, number, number], color: 0xffe66d, scale: 0.25 },
        { type: 'sphere', pos: [-1.5, 1, 0] as [number, number, number], color: 0x95e1d3, scale: 0.2 },
        { type: 'cone', pos: [1.5, 1, 0] as [number, number, number], color: 0xf38181, scale: 0.25 },
        { type: 'cone', pos: [0, 1, 1] as [number, number, number], color: 0xaa96da, scale: 0.3 },
        { type: 'torus', pos: [-1, 1, 1] as [number, number, number], color: 0xfcbad3, scale: 0.2 },
        { type: 'torus', pos: [1, 1, 1] as [number, number, number], color: 0xa8d8ea, scale: 0.25 },
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
                <p>A VR headset and WebXR-compatible browser are required for this dragging demo.</p>
                <p style={{ color: '#888', marginTop: '20px' }}>
                    Showing fallback scene without VR interaction.
                </p>

                <div style={{ width: '100%', height: '400px', marginTop: '20px' }}>
                    <canvas3D>
                        <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[600, 400]} />
                        <scene background={new Color(0x1a1a2e)}>
                            <ambientLight intensity={0.3} />
                            <directionalLight position={[5, 10, 5]} intensity={1} />
                            {grabbables.map((obj, i) => (
                                <mesh key={i} position={obj.pos} scale={[obj.scale, obj.scale, obj.scale]}>
                                    {obj.type === 'box' && <boxGeometry args={[1, 1, 1]} />}
                                    {obj.type === 'sphere' && <sphereGeometry args={[0.5, 32, 32]} />}
                                    {obj.type === 'cone' && <coneGeometry args={[0.5, 1, 32]} />}
                                    {obj.type === 'torus' && <torusGeometry args={[0.5, 0.2, 16, 32]} />}
                                    <meshStandardMaterial color={obj.color} />
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
            <scene ref={sceneRef} background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 10, 5]} intensity={1} />
                <pointLight position={[0, 5, 0]} intensity={0.5} />

                {/* Floor */}
                <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <cylinderGeometry args={[5, 5, 0.1, 32]} />
                    <meshStandardMaterial color={0x333333} />
                </mesh>

                {/* Grabbable objects */}
                {grabbables.map((obj, i) => (
                    <mesh
                        key={i}
                        position={obj.pos}
                        scale={[obj.scale, obj.scale, obj.scale]}
                        userData-grabbable={true}
                    >
                        {obj.type === 'box' && <boxGeometry args={[1, 1, 1]} />}
                        {obj.type === 'sphere' && <sphereGeometry args={[0.5, 32, 32]} />}
                        {obj.type === 'cone' && <coneGeometry args={[0.5, 1, 32]} />}
                        {obj.type === 'torus' && <torusGeometry args={[0.5, 0.2, 16, 32]} />}
                        <meshStandardMaterial
                            color={obj.color}
                            roughness={0.3}
                            metalness={0.5}
                        />
                    </mesh>
                ))}

                {/* Central reference object (not grabbable) */}
                <mesh position={[0, 0.5, 0]}>
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

export default VRDragging
