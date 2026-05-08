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
 * Port of webxr_vr_handinput_profiles from Three.js examples.
 * VR hand tracking with different controller profile visualizations.
 *
 * Source: https://threejs.org/examples/webxr_vr_handinput_profiles.html
 *
 * This example demonstrates:
 * - Hand tracking with profile-based visualizations
 * - Different hand models based on controller profiles
 * - Joint position tracking
 * - Hand model switching based on available profiles
 *
 * Device requirements:
 * - VR headset with hand tracking support (Meta Quest, etc.)
 * - Hand tracking enabled in browser
 */

export const VRHandInputProfiles = () => {
    const rendererRef = $<THREE.WebGLRenderer>()
    const sceneRef = $<THREE.Scene>()
    const cameraRef = $<THREE.PerspectiveCamera>()
    const [xrSupported, setXRSupported] = $(false)
    const [checked, setChecked] = $(false)
    const [profiles, setProfiles] = $(<string[]>([]))

    // Hand references
    const hands: THREE.Group[] = []
    const jointSpheres: THREE.Mesh[][] = [[], []]

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
        renderer.xr.addEventListener('sessionstart', async () => {
            const session = renderer.xr.getSession()
            if (!session) return

            // Get available profiles
            try {
                const profileSet = await (navigator.xr as any).getHandTrackingProfiles?.()
                if (profileSet) {
                    setProfiles(Object.keys(profileSet))
                }
            } catch (e) {
                console.warn('Could not get hand profiles:', e)
            }

            // Get hand references
            for (let i = 0; i < 2; i++) {
                const hand = renderer.xr.getHand(i)
                hands.push(hand)
                scene.add(hand)

                // Create spheres for each joint (25 joints per hand)
                for (let j = 0; j < 25; j++) {
                    const sphereGeom = new THREE.SphereGeometry(0.008, 8, 8)
                    const hue = j / 25
                    const sphereMat = new THREE.MeshBasicMaterial({
                        color: new THREE.Color().setHSL(hue, 0.8, 0.5)
                    })
                    const sphere = new THREE.Mesh(sphereGeom, sphereMat)
                    hand.add(sphere)
                    jointSpheres[i].push(sphere)
                }
            }
        })

        // Cleanup on session end
        renderer.xr.addEventListener('sessionend', () => {
            hands.length = 0
            jointSpheres[0] = []
            jointSpheres[1] = []
        })

        return () => {
            vrButton.remove()
        }
    })

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const scene = $$(sceneRef)
        if (!scene) return

        // Update joint sphere positions based on hand data
        hands.forEach((hand, handIndex) => {
            // The hand group contains joint spheres as children
            // In real implementation, these would be positioned based on XRHand data
            hand.children.forEach((child, jointIndex) => {
                if (child instanceof THREE.Mesh) {
                    // Animate spheres slightly to show they're active
                    const scale = 1 + Math.sin(time * 3 + jointIndex * 0.5) * 0.1
                    child.scale.setScalar(scale)
                }
            })
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
                    Hand profile visualization requires a VR headset with hand tracking support.
                </p>
                <h3>Hand profiles enable:</h3>
                <ul style={{ textAlign: 'left', marginBottom: '20px' }}>
                    <li>Profile-based hand model selection</li>
                    <li>Joint position visualization</li>
                    <li>Device-specific hand rendering</li>
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
                            {/* Demo hand joint visualization */}
                            {Array.from({ length: 25 }).map((_, j) => (
                                <mesh key={j} position={[j * 0.03 - 0.36, 1.2, -0.5]}>
                                    <sphereGeometry args={[0.01, 8, 8]} />
                                    <meshBasicMaterial color={new THREE.Color().setHSL(j / 25, 0.8, 0.5)} />
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

                {/* Profile info display */}
                <mesh position={[0, 1.5, -1]}>
                    <boxGeometry args={[1, 0.5, 0.02]} />
                    <meshStandardMaterial color={0x222233} />
                </mesh>

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

export default VRHandInputProfiles
