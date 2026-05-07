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
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webxr_vr_haptics from Three.js examples.
 * VR scene with haptic feedback on controller interaction.
 *
 * Source: https://threejs.org/examples/webxr_vr_haptics.html
 *
 * This example demonstrates:
 * - VR session setup with XRButton
 * - Haptic feedback using gamepad.hapticActuators
 * - Visual feedback synchronized with haptics
 * - Fallback for devices without haptics
 */

export const VRHaptics = () => {
    const rendererRef = $<THREE.WebGLRenderer>()
    const sceneRef = $<THREE.Scene>()
    const cameraRef = $<THREE.PerspectiveCamera>()
    const [xrSupported, setXRSupported] = $(false)
    const [checked, setChecked] = $(false)
    const [hapticsAvailable, setHapticsAvailable] = $(false)

    // Store controllers
    const controllers: THREE.XRTargetRaySpace[] = []
    const raycaster = new THREE.Raycaster()
    const tempMatrix = new THREE.Matrix4()

    // Haptic pulse objects
    const hapticObjects: THREE.Mesh[] = []

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

    // Trigger haptic pulse on controller
    function triggerHaptics(controller: THREE.XRTargetRaySpace, intensity = 1.0, duration = 100) {
        const renderer = $$(rendererRef)
        if (!renderer) return

        // Get the XR session and input source
        const session = renderer.xr.getSession()
        if (!session) return

        // Access input source through the controller's userData or directly
        const inputSource = controller.userData.inputSource

        // Try to trigger haptics
        if (inputSource?.gamepad?.hapticActuators && inputSource.gamepad.hapticActuators.length > 0) {
            inputSource.gamepad.hapticActuators[0].pulse(intensity, duration)
            setHapticsAvailable(true)
        }
    }

    // Setup VR button and controllers with haptic interaction
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

            // Store input source reference when connected
            controller.addEventListener('connected', (event: THREE.Event) => {
                controller.userData.inputSource = event.data
            })

            // Setup select events for haptics
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

    // Handle select start - trigger haptics and highlight
    function onSelectStart(event: THREE.Event) {
        const controller = event.target as THREE.XRTargetRaySpace
        const scene = $$(sceneRef)
        if (!scene) return

        // Get intersections
        const intersections = getIntersections(controller)
        if (intersections.length > 0) {
            const intersection = intersections[0]
            const object = intersection.object as THREE.Mesh

            // Trigger haptics with intensity based on object
            const intensity = object.userData.hapticIntensity ?? 0.5
            const duration = object.userData.hapticDuration ?? 100
            triggerHaptics(controller, intensity, duration)

            // Visual feedback - scale up and change emissive
            object.userData.originalScale = object.scale.clone()
            object.scale.multiplyScalar(1.2)

            if (object.material instanceof THREE.MeshStandardMaterial) {
                object.userData.originalEmissive = object.material.emissive.getHex()
                object.material.emissive.setHex(0x666666)
            }

            controller.userData.selected = object
        }
    }

    // Handle select end - reset visual state
    function onSelectEnd(event: THREE.Event) {
        const controller = event.target as THREE.XRTargetRaySpace

        const selected = controller.userData.selected as THREE.Mesh | undefined
        if (selected) {
            // Reset scale
            if (selected.userData.originalScale) {
                selected.scale.copy(selected.userData.originalScale)
            }

            // Reset emissive
            if (selected.material instanceof THREE.MeshStandardMaterial && selected.userData.originalEmissive !== undefined) {
                selected.material.emissive.setHex(selected.userData.originalEmissive)
            }
        }

        controller.userData.selected = undefined
    }

    // Raycast from controller
    function getIntersections(controller: THREE.XRTargetRaySpace) {
        tempMatrix.identity().extractRotation(controller.matrixWorld)
        raycaster.ray.origin.setFromMatrixPosition(controller.matrixWorld)
        raycaster.ray.direction.set(0, 0, -1).applyMatrix4(tempMatrix)

        return raycaster.intersectObjects(hapticObjects, false)
    }

    // Collect haptic objects from scene
    function collectHapticObjects() {
        const scene = $$(sceneRef)
        if (!scene) return

        hapticObjects.length = 0
        scene.traverse((child) => {
            if (child instanceof THREE.Mesh && child.userData.haptic) {
                hapticObjects.push(child)
            }
        })
    }

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const scene = $$(sceneRef)

        // Collect haptic objects once
        if (hapticObjects.length === 0) {
            collectHapticObjects()
        }

        // Animate objects
        if (scene) {
            scene.children.forEach((child, i) => {
                if (child instanceof THREE.Mesh && child.userData.haptic) {
                    // Gentle pulsing animation
                    const pulse = 1 + Math.sin(time * 3 + i) * 0.05
                    if (!child.userData.selected) {
                        child.scale.setScalar(child.userData.baseScale ?? 1)
                        child.scale.multiplyScalar(pulse)
                    }
                    child.rotation.y = time * 0.5 + i * 0.5
                }
            })
        }
    })

    // Define haptic objects with different intensities
    const hapticItems = [
        { pos: [-1.5, 1, -1], color: 0xff6b6b, intensity: 0.3, duration: 50, name: 'Light' },
        { pos: [0, 1, -1], color: 0x4ecdc4, intensity: 0.6, duration: 100, name: 'Medium' },
        { pos: [1.5, 1, -1], color: 0xffe66d, intensity: 1.0, duration: 200, name: 'Strong' },
        { pos: [-0.75, 1, 0.5], color: 0x95e1d3, intensity: 0.5, duration: 75, name: 'Pulse' },
        { pos: [0.75, 1, 0.5], color: 0xf38181, intensity: 0.8, duration: 150, name: 'Vibrate' },
    ]

    // Loading state
    if (!$$(checked)) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#0f0f23', color: 'white' }}>
                <p>Checking WebXR support...</p>
            </div>
        )
    }

    // Fallback for non-XR browsers
    if (!$$(xrSupported)) {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#0f0f23', color: 'white', textAlign: 'center', padding: '20px' }}>
                <h1>WebXR VR Not Available</h1>
                <p>A VR headset and WebXR-compatible browser are required for haptics demo.</p>
                <p style={{ color: '#888', marginTop: '20px' }}>
                    Haptics provide controller vibration feedback in VR.
                </p>

                <div style={{ width: '100%', height: '400px', marginTop: '20px' }}>
                    <canvas3D>
                        <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[600, 400]} />
                        <scene background={new Color(0x0f0f23)}>
                            <ambientLight intensity={0.3} />
                            <directionalLight position={[5, 10, 5]} intensity={1} />
                            {hapticItems.map((obj, i) => (
                                <mesh key={i} position={obj.pos}>
                                    <sphereGeometry args={[0.2, 32, 32]} />
                                    <meshStandardMaterial color={obj.color} />
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
            <scene ref={sceneRef} background={new Color(0x0f0f23)}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 10, 5]} intensity={1} />

                {/* Floor */}
                <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <cylinderGeometry args={[5, 5, 0.1, 32]} />
                    <meshStandardMaterial color={0x222222} />
                </mesh>

                {/* Haptic trigger spheres */}
                {hapticItems.map((obj, i) => (
                    <mesh
                        key={i}
                        position={obj.pos}
                        userData-haptic={true}
                        userData-hapticIntensity={obj.intensity}
                        userData-hapticDuration={obj.duration}
                        userData-baseScale={0.25}
                    >
                        <sphereGeometry args={[0.25, 32, 32]} />
                        <meshStandardMaterial
                            color={obj.color}
                            roughness={0.3}
                            metalness={0.7}
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

export default VRHaptics
