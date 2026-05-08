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
 * Port of webxr_vr_handinput_pointerclick from Three.js examples.
 * VR hand tracking with pointer ray and click gesture detection.
 *
 * Source: https://threejs.org/examples/webxr_vr_handinput_pointerclick.html
 *
 * This example demonstrates:
 * - Hand tracking with pointer ray visualization
 * - Pinch gesture for click/select action
 * - Interactive objects that respond to hand gestures
 * - Visual feedback on selection
 *
 * Device requirements:
 * - VR headset with hand tracking support (Meta Quest, etc.)
 * - Hand tracking enabled in browser
 */

export const VRHandInputPointerClick = () => {
    const rendererRef = $<THREE.WebGLRenderer>()
    const sceneRef = $<THREE.Scene>()
    const cameraRef = $<THREE.PerspectiveCamera>()
    const [xrSupported, setXRSupported] = $(false)
    const [checked, setChecked] = $(false)

    // Hand references
    const hands: THREE.Group[] = []
    const pointers: THREE.Line[] = []

    // Interactive objects
    const interactiveObjects: THREE.Mesh[] = []
    const selectedObjects = new Map<THREE.Group, THREE.Mesh>()

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

                // Create pointer ray for each hand
                const geometry = new THREE.BufferGeometry().setFromPoints([
                    new THREE.Vector3(0, 0, 0),
                    new THREE.Vector3(0, 0, -1)
                ])
                const material = new THREE.LineBasicMaterial({
                    color: i === 0 ? 0xff6b6b : 0x4ecdc4,
                    linewidth: 2
                })
                const pointer = new THREE.Line(geometry, material)
                pointer.scale.z = 5
                hand.add(pointer)
                pointers.push(pointer)

                // Add small sphere at hand position
                const sphereGeom = new THREE.SphereGeometry(0.02, 16, 16)
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
            pointers.length = 0
            selectedObjects.clear()
        })

        return () => {
            vrButton.remove()
        }
    })

    // Detect pinch gesture
    function detectPinch(hand: THREE.Group): boolean {
        // Check if thumb and index finger are close together
        // Joint indices: 0-4 = thumb, 5-9 = index finger
        if (hand.children.length < 10) return false

        const thumbTip = hand.children[4] as THREE.Object3D
        const indexTip = hand.children[9] as THREE.Object3D

        if (!thumbTip || !indexTip) return false

        const distance = thumbTip.position.distanceTo(indexTip.position)
        return distance < 0.02
    }

    // Get pointer intersection
    function getPointerIntersection(hand: THREE.Group): THREE.Mesh | null {
        const direction = new THREE.Vector3(0, 0, -1)
        direction.applyQuaternion(hand.quaternion)

        const origin = new THREE.Vector3()
        hand.getWorldPosition(origin)

        const raycaster = new THREE.Raycaster(origin, direction, 0, 5)

        const intersects = raycaster.intersectObjects(interactiveObjects)
        if (intersects.length > 0) {
            return intersects[0].object as THREE.Mesh
        }
        return null
    }

    // Handle selection
    function handleSelection(hand: THREE.Group, object: THREE.Mesh) {
        // Highlight selected object
        if (object.material instanceof THREE.MeshStandardMaterial) {
            object.material.emissive.setHex(0x444444)
        }
        object.scale.multiplyScalar(1.2)
        selectedObjects.set(hand, object)
    }

    // Handle release
    function handleRelease(hand: THREE.Group) {
        const object = selectedObjects.get(hand)
        if (object) {
            if (object.material instanceof THREE.MeshStandardMaterial) {
                object.material.emissive.setHex(0x000000)
            }
            object.scale.multiplyScalar(1 / 1.2)
            selectedObjects.delete(hand)
        }
    }

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const scene = $$(sceneRef)
        if (!scene) return

        // Collect interactive objects once
        if (interactiveObjects.length === 0) {
            scene.traverse((child) => {
                if (child instanceof THREE.Mesh && child.userData.interactive) {
                    interactiveObjects.push(child)
                }
            })
        }

        // Animate interactive objects
        interactiveObjects.forEach((obj, i) => {
            if (!selectedObjects.has(hands[0]) && !selectedObjects.has(hands[1])) {
                // Gentle floating animation when not selected
                const baseY = obj.userData.baseY ?? obj.position.y
                obj.userData.baseY = baseY
                obj.position.y = baseY + Math.sin(time * 2 + i) * 0.05
                obj.rotation.y = time * 0.3 + i * 0.2
            }
        })

        // Check for pinch gestures on each hand
        hands.forEach((hand, index) => {
            const isPinching = detectPinch(hand)
            const pointer = pointers[index]

            if (pointer) {
                // Change pointer color when pinching
                if (pointer.material instanceof THREE.LineBasicMaterial) {
                    pointer.material.color.setHex(isPinching ? 0xffff00 : (index === 0 ? 0xff6b6b : 0x4ecdc4))
                }
            }

            if (isPinching) {
                const intersected = getPointerIntersection(hand)
                if (intersected && !selectedObjects.has(hand)) {
                    handleSelection(hand, intersected)
                }
            } else {
                handleRelease(hand)
            }
        })
    })

    // Interactive items
    const interactiveItems = [
        { pos: [-0.6, 1.2, -0.5], color: 0xff6b6b, name: 'cube-red' },
        { pos: [0, 1.2, -0.5], color: 0x4ecdc4, name: 'cube-teal' },
        { pos: [0.6, 1.2, -0.5], color: 0xffe66d, name: 'cube-yellow' },
        { pos: [-0.3, 1.2, 0.2], color: 0x95e1d3, name: 'cube-mint' },
        { pos: [0.3, 1.2, 0.2], color: 0xf38181, name: 'cube-coral' },
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
                    Hand tracking with pointer click requires a VR headset with hand tracking support.
                </p>
                <h3>Hand pointer click enables:</h3>
                <ul style={{ textAlign: 'left', marginBottom: '20px' }}>
                    <li>Point at objects with your hand</li>
                    <li>Pinch gesture to select/click</li>
                    <li>Natural hand-based interaction</li>
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
                            {interactiveItems.map((item, i) => (
                                <mesh key={i} position={item.pos}>
                                    <boxGeometry args={[0.15, 0.15, 0.15]} />
                                    <meshStandardMaterial color={item.color} />
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

                {/* Interactive cubes */}
                {interactiveItems.map((item, i) => (
                    <mesh
                        key={i}
                        name={item.name}
                        position={item.pos}
                        userData-interactive={true}
                    >
                        <boxGeometry args={[0.15, 0.15, 0.15]} />
                        <meshStandardMaterial
                            color={item.color}
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

export default VRHandInputPointerClick
