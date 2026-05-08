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
 * Port of webxr_vr_haptics_controller from Three.js examples.
 * VR haptic feedback with controller intensity visualization.
 *
 * Source: https://threejs.org/examples/webxr_vr_haptics_controller.html
 *
 * This example demonstrates:
 * - Controller-based haptic feedback
 * - Intensity control via trigger pressure
 * - Visual feedback synchronized with haptics
 * - Multiple haptic patterns
 *
 * Device requirements:
 * - VR headset with controllers that support haptics
 * - Controllers with vibration/haptic actuators
 */

export const VRHapticsController = () => {
    const rendererRef = $<THREE.WebGLRenderer>()
    const sceneRef = $<THREE.Scene>()
    const cameraRef = $<THREE.PerspectiveCamera>()
    const [xrSupported, setXRSupported] = $(false)
    const [checked, setChecked] = $(false)
    const [leftIntensity, setLeftIntensity] = $(0)
    const [rightIntensity, setRightIntensity] = $(0)

    // Store controllers
    const controllers: THREE.XRTargetRaySpace[] = []

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

    // Trigger haptic pulse with intensity
    function triggerHaptics(controller: THREE.XRTargetRaySpace, intensity: number, duration: number = 100) {
        const inputSource = controller.userData.inputSource
        if (inputSource?.gamepad?.hapticActuators && inputSource.gamepad.hapticActuators.length > 0) {
            inputSource.gamepad.hapticActuators[0].pulse(intensity, duration)
        }
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
            const material = new THREE.LineBasicMaterial({
                color: i === 0 ? 0xff6b6b : 0x4ecdc4
            })
            const line = new THREE.Line(geometry, material)
            line.scale.z = 5
            controller.add(line)

            // Add controller model indicator
            const sphereGeom = new THREE.SphereGeometry(0.03, 16, 16)
            const sphereMat = new THREE.MeshBasicMaterial({
                color: i === 0 ? 0xff6b6b : 0x4ecdc4
            })
            const sphere = new THREE.Mesh(sphereGeom, sphereMat)
            controller.add(sphere)

            // Store input source reference when connected
            controller.addEventListener('connected', (event: THREE.Event) => {
                controller.userData.inputSource = event.data
            })

            // Handle squeeze for continuous haptics
            controller.addEventListener('squeezestart', () => {
                controller.userData.squeezing = true
            })

            controller.addEventListener('squeezeend', () => {
                controller.userData.squeezing = false
                if (i === 0) setLeftIntensity(0)
                else setRightIntensity(0)
            })

            scene.add(controller)
        }

        return () => {
            vrButton.remove()
            controllers.length = 0
        }
    })

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const scene = $$(sceneRef)
        if (!scene) return

        // Check squeeze pressure and trigger haptics
        controllers.forEach((controller, i) => {
            if (controller.userData.squeezing) {
                // Get squeeze pressure from gamepad
                const inputSource = controller.userData.inputSource
                if (inputSource?.gamepad) {
                    const buttons = inputSource.gamepad.buttons
                    // Squeeze button is typically button 1
                    const pressure = buttons[1]?.value ?? 0

                    // Trigger haptics based on pressure
                    if (pressure > 0) {
                        triggerHaptics(controller, pressure, 16) // Short pulse

                        // Update intensity display
                        if (i === 0) setLeftIntensity(pressure)
                        else setRightIntensity(pressure)

                        // Visual feedback on controller sphere
                        const sphere = controller.children[1] as THREE.Mesh
                        if (sphere && sphere.material instanceof THREE.MeshBasicMaterial) {
                            sphere.scale.setScalar(1 + pressure * 0.5)
                            sphere.material.color.setHSL(0.1 - pressure * 0.1, 0.8, 0.5)
                        }
                    }
                }
            }
        })

        // Animate haptic pads
        scene.children.forEach((child) => {
            if (child instanceof THREE.Mesh && child.userData.hapticPad) {
                const baseY = child.userData.baseY ?? child.position.y
                child.userData.baseY = baseY
                child.position.y = baseY + Math.sin(time * 2 + child.userData.padIndex) * 0.02
            }
        })
    })

    // Haptic pad definitions
    const hapticPads = [
        { pos: [-0.5, 0.8, -0.5], color: 0xff6b6b, name: 'Left Pad' },
        { pos: [0.5, 0.8, -0.5], color: 0x4ecdc4, name: 'Right Pad' },
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
                <p>A VR headset with haptic controllers is required for this demo.</p>
                <p style={{ color: '#888', marginTop: '20px' }}>
                    Controller haptics provide vibration feedback based on trigger pressure.
                </p>

                <div style={{ width: '100%', height: '400px', marginTop: '20px' }}>
                    <canvas3D>
                        <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[600, 400]} />
                        <scene background={new Color(0x0f0f23)}>
                            <ambientLight intensity={0.3} />
                            <directionalLight position={[5, 10, 5]} intensity={1} />
                            {hapticPads.map((pad, i) => (
                                <mesh key={i} position={pad.pos}>
                                    <cylinderGeometry args={[0.2, 0.2, 0.05, 32]} />
                                    <meshStandardMaterial color={pad.color} />
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

                {/* Haptic intensity pads */}
                {hapticPads.map((pad, i) => (
                    <mesh
                        key={i}
                        position={pad.pos}
                        userData-hapticPad={true}
                        userData-padIndex={i}
                    >
                        <cylinderGeometry args={[0.2, 0.2, 0.05, 32]} />
                        <meshStandardMaterial
                            color={pad.color}
                            roughness={0.3}
                            metalness={0.7}
                        />
                    </mesh>
                ))}

                {/* Intensity display */}
                <mesh position={[-0.5, 1.2, -1]}>
                    <boxGeometry args={[0.3, 0.1 * $$(leftIntensity) + 0.01, 0.05]} />
                    <meshBasicMaterial color={0xff6b6b} />
                </mesh>
                <mesh position={[0.5, 1.2, -1]}>
                    <boxGeometry args={[0.3, 0.1 * $$(rightIntensity) + 0.01, 0.05]} />
                    <meshBasicMaterial color={0x4ecdc4} />
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

export default VRHapticsController
