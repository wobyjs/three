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
 * Port of webxr_vr_handinput_press from Three.js examples.
 * VR hand tracking with press gesture for button-like interactions.
 *
 * Source: https://threejs.org/examples/webxr_vr_handinput_press.html
 *
 * This example demonstrates:
 * - Hand tracking with press gesture detection
 * - Virtual buttons that respond to hand press
 * - Visual feedback on button press
 * - Depth-based interaction (push into surface)
 *
 * Device requirements:
 * - VR headset with hand tracking support (Meta Quest, etc.)
 * - Hand tracking enabled in browser
 */

export const VRHandInputPress = () => {
    const rendererRef = $<THREE.WebGLRenderer>()
    const sceneRef = $<THREE.Scene>()
    const cameraRef = $<THREE.PerspectiveCamera>()
    const [xrSupported, setXRSupported] = $(false)
    const [checked, setChecked] = $(false)
    const [buttonStates, setButtonStates] = $<boolean[]>([false, false, false, false])

    // Hand references
    const hands: THREE.Group[] = []

    // Button objects
    const buttons: THREE.Mesh[] = []

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

    // Setup VR button and hand tracking
    useEffect(() => {
        const renderer = $$(rendererRef)
        const scene = $$(sceneRef)
        if (!renderer || !$$(xrSupported) || !scene) return

        // Create VR button with hand tracking
        const vrButton = XRButton.createButton(renderer, {
            optionalFeatures: ['hand-tracking']
        })
        document.body.appendChild(vrButton)

        // Setup hands on session start
        renderer.xr.addEventListener('sessionstart', () => {
            const session = renderer.xr.getSession()
            if (!session) return

            // Get hand references
            for (let i = 0; i < 2; i++) {
                const hand = renderer.xr.getHand(i)
                hands.push(hand)
                scene.add(hand)

                // Add small sphere at index finger tip position
                const sphereGeom = new THREE.SphereGeometry(0.015, 16, 16)
                const sphereMat = new THREE.MeshBasicMaterial({
                    color: i === 0 ? 0xff6b6b : 0x4ecdc4
                })
                const sphere = new THREE.Mesh(sphereGeom, sphereMat)
                hand.add(sphere)
            }
        })

        // Cleanup on session end
        renderer.xr.addEventListener('sessionend', () => {
            hands.length = 0
        })

        return () => {
            vrButton.remove()
        }
    })

    // Get index finger tip world position
    function getIndexFingerTip(hand: THREE.Group): Vector3 | null {
        // Index finger tip is joint index 9
        if (hand.children.length < 10) return null

        const indexTip = hand.children[9] as THREE.Object3D
        if (!indexTip) return null

        const position = new THREE.Vector3()
        indexTip.getWorldPosition(position)
        return position
    }

    // Check if finger is pressing a button
    function checkButtonPress(button: THREE.Mesh, fingerPos: Vector3): { pressed: boolean, depth: number } {
        const buttonBox = new THREE.Box3().setFromObject(button)
        const closestPoint = new THREE.Vector3()
        buttonBox.clampPoint(fingerPos, closestPoint)

        const distance = fingerPos.distanceTo(closestPoint)
        const isInside = buttonBox.containsPoint(fingerPos)

        // Calculate press depth (how far finger has pressed into button)
        const buttonCenter = new THREE.Vector3()
        buttonBox.getCenter(buttonCenter)
        const pressDepth = Math.max(0, buttonCenter.z - fingerPos.z)

        return {
            pressed: isInside && pressDepth > 0.01,
            depth: pressDepth
        }
    }

    useFrame((state) => {
        const scene = $$(sceneRef)
        if (!scene) return

        // Collect buttons once
        if (buttons.length === 0) {
            scene.traverse((child) => {
                if (child instanceof THREE.Mesh && child.userData.isButton) {
                    buttons.push(child)
                }
            })
        }

        // Check each hand for button presses
        const newButtonStates = [...$$(buttonStates)]

        hands.forEach((hand) => {
            const fingerPos = getIndexFingerTip(hand)
            if (!fingerPos) return

            buttons.forEach((button, index) => {
                const result = checkButtonPress(button, fingerPos)

                if (result.pressed && !newButtonStates[index]) {
                    // Button just pressed
                    newButtonStates[index] = true

                    // Visual feedback - push button in
                    button.position.z = (button.userData.baseZ ?? button.position.z) - 0.02

                    // Change color
                    if (button.material instanceof THREE.MeshStandardMaterial) {
                        button.material.emissive.setHex(0x333333)
                    }
                } else if (!result.pressed && newButtonStates[index]) {
                    // Button released
                    newButtonStates[index] = false

                    // Reset position
                    button.position.z = button.userData.baseZ ?? button.position.z

                    // Reset color
                    if (button.material instanceof THREE.MeshStandardMaterial) {
                        button.material.emissive.setHex(0x000000)
                    }
                }
            })
        })

        // Update state if changed
        const currentStates = $$(buttonStates)
        if (JSON.stringify(newButtonStates) !== JSON.stringify(currentStates)) {
            setButtonStates(newButtonStates)
        }
    })

    // Button definitions
    const buttonDefs = [
        { pos: [-0.4, 1.2, -0.3], color: 0xff6b6b, label: 'A' },
        { pos: [-0.13, 1.2, -0.3], color: 0x4ecdc4, label: 'B' },
        { pos: [0.13, 1.2, -0.3], color: 0xffe66d, label: 'C' },
        { pos: [0.4, 1.2, -0.3], color: 0x95e1d3, label: 'D' },
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
                <p style={{ maxWidth: '600px', marginBottom: '20px' }}>
                    Hand press interaction requires a VR headset with hand tracking support.
                </p>
                <h3>Hand press enables:</h3>
                <ul style={{ textAlign: 'left', marginBottom: '20px' }}>
                    <li>Virtual button pressing with fingers</li>
                    <li>Depth-based interaction</li>
                    <li>Natural push gestures</li>
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
                            {buttonDefs.map((btn, i) => (
                                <mesh key={i} position={btn.pos}>
                                    <boxGeometry args={[0.2, 0.2, 0.05]} />
                                    <meshStandardMaterial color={btn.color} />
                                </mesh>
                            ))}
                        </scene>
                        <perspectiveCamera fov={60} aspect={600 / 400} near={0.1} far={100} position={[0, 2, 3]} />
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
                    <cylinderGeometry args={[3, 3, 0.1, 32]} />
                    <meshStandardMaterial color={0x333333} />
                </mesh>

                {/* Button panel */}
                <mesh position={[0, 1.2, -0.35]}>
                    <boxGeometry args={[1.2, 0.4, 0.02]} />
                    <meshStandardMaterial color={0x222233} />
                </mesh>

                {/* Interactive buttons */}
                {buttonDefs.map((btn, i) => (
                    <mesh
                        key={i}
                        position={[btn.pos[0], btn.pos[1], btn.pos[2]]}
                        userData-isButton={true}
                        userData-baseZ={btn.pos[2]}
                    >
                        <boxGeometry args={[0.2, 0.2, 0.05]} />
                        <meshStandardMaterial
                            color={btn.color}
                            roughness={0.3}
                            metalness={0.5}
                        />
                    </mesh>
                ))}

                {/* Central reference pillar */}
                <mesh position={[0, 0.5, -1]}>
                    <cylinderGeometry args={[0.05, 0.05, 1, 32]} />
                    <meshNormalMaterial />
                </mesh>
            </scene>

            <perspectiveCamera
                ref={cameraRef}
                fov={60}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[0, 1.6, 2]}
            />
            <orbitControls enableDamping target={[0, 1, 0]} />
        </canvas3D>
    )
}

export default VRHandInputPress
