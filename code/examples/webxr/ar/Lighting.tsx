/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, Vector3, HemisphereLight, DirectionalLight, AmbientLight } from 'three'
import * as THREE from 'three'
import { ARButton } from 'three/examples/jsm/webxr/ARButton.js'

// Import wrappers for registration
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/CylinderGeometry'
import '@woby/three/src/geometries/PlaneGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/materials/MeshNormalMaterial'
import '@woby/three/src/materials/MeshBasicMaterial'
import '@woby/three/src/materials/MeshPhysicalMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/lights/HemisphereLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webxr_ar_lighting from Three.js examples.
 * AR scene with estimated lighting from the environment.
 *
 * Source: https://threejs.org/examples/webxr_ar_lighting.html
 *
 * This example demonstrates:
 * - AR session with light estimation
 * - Using WebXR Light Probe for realistic lighting
 * - Placing virtual objects with environment-matched lighting
 * - Real-time lighting updates as device moves
 *
 * Device requirements:
 * - AR-capable device (ARCore on Android, ARKit on iOS)
 * - Light estimation support (not all devices support this)
 * - Camera access for AR
 *
 * Note: Light estimation provides realistic lighting for virtual objects
 * by analyzing the camera feed and estimating light direction, intensity,
 * and color temperature.
 */

export const ARLighting = () => {
    const rendererRef = $<THREE.WebGLRenderer>()
    const sceneRef = $<THREE.Scene>()
    const cameraRef = $<THREE.PerspectiveCamera>()
    const [arSupported, setARSupported] = $(false)
    const [lightEstimationSupported, setLightEstimationSupported] = $(false)
    const [checked, setChecked] = $(false)

    // Light probe reference
    let xrLightProbe: XRLightProbe | null = null
    let lightProbe: THREE.LightProbe | null = null

    // Virtual objects to place
    const virtualObjects: THREE.Mesh[] = []

    // Check AR and light estimation support
    useEffect(() => {
        const checkAR = async () => {
            if ('xr' in navigator) {
                try {
                    const supported = await navigator.xr.isSessionSupported('immersive-ar')
                    setARSupported(supported)

                    // Check for light estimation support
                    if (supported && 'getLightEstimateSupport' in navigator.xr) {
                        // @ts-ignore - experimental API
                        const lightSupport = await navigator.xr.getLightEstimateSupport?.()
                        setLightEstimationSupported(lightSupport === 'supported')
                    }
                } catch (e) {
                    console.warn('WebXR AR check failed:', e)
                }
            }
            setChecked(true)
        }
        checkAR()
    })

    // Setup AR button and light estimation
    useEffect(() => {
        const renderer = $$(rendererRef)
        const scene = $$(sceneRef)
        if (!renderer || !$$(arSupported) || !scene) return

        // Create AR button with light estimation
        const arButton = ARButton.createButton(renderer, {
            requiredFeatures: ['local-floor'],
            optionalFeatures: ['light-estimation', 'hit-test', 'dom-overlay'],
            domOverlay: { root: document.body }
        })
        document.body.appendChild(arButton)

        // Setup light probe for light estimation
        renderer.xr.addEventListener('sessionstart', async () => {
            const session = renderer.xr.getSession()
            if (!session) return

            // Try to get light probe
            try {
                // @ts-ignore - experimental API
                if (session.requestLightProbe) {
                    // @ts-ignore - experimental API
                    xrLightProbe = await session.requestLightProbe()

                    // Create Three.js light probe
                    lightProbe = new THREE.LightProbe()
                    scene.add(lightProbe)

                    // Add directional light that will be updated
                    const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
                    directionalLight.position.set(0, 5, 5)
                    directionalLight.castShadow = true
                    scene.add(directionalLight)

                    // Store reference for updates
                    scene.userData.directionalLight = directionalLight
                }
            } catch (e) {
                console.warn('Light probe setup failed:', e)
            }
        })

        // Cleanup on session end
        renderer.xr.addEventListener('sessionend', () => {
            xrLightProbe = null
            if (lightProbe) {
                scene.remove(lightProbe)
                lightProbe = null
            }
        })

        // Add sample virtual objects
        addVirtualObjects(scene)

        return () => {
            arButton.remove()
            virtualObjects.forEach(obj => {
                scene.remove(obj)
                obj.geometry.dispose()
                if (obj.material instanceof THREE.Material) {
                    obj.material.dispose()
                }
            })
            virtualObjects.length = 0
        }
    })

    // Add virtual objects that will receive estimated lighting
    function addVirtualObjects(scene: THREE.Scene) {
        // Metallic sphere - shows reflections well
        const sphereGeom = new THREE.SphereGeometry(0.1, 32, 32)
        const sphereMat = new THREE.MeshPhysicalMaterial({
            color: 0xffffff,
            roughness: 0.1,
            metalness: 0.9,
            clearcoat: 1.0,
            clearcoatRoughness: 0.1
        })
        const sphere = new THREE.Mesh(sphereGeom, sphereMat)
        sphere.position.set(-0.2, 0.1, -0.5)
        scene.add(sphere)
        virtualObjects.push(sphere)

        // Matte box - shows diffuse lighting
        const boxGeom = new THREE.BoxGeometry(0.15, 0.15, 0.15)
        const boxMat = new THREE.MeshStandardMaterial({
            color: 0xff6b6b,
            roughness: 0.8,
            metalness: 0.1
        })
        const box = new THREE.Mesh(boxGeom, boxMat)
        box.position.set(0, 0.075, -0.5)
        scene.add(box)
        virtualObjects.push(box)

        // Glossy cylinder - shows specular highlights
        const cylinderGeom = new THREE.CylinderGeometry(0.05, 0.05, 0.2, 32)
        const cylinderMat = new THREE.MeshPhysicalMaterial({
            color: 0x4ecdc4,
            roughness: 0.2,
            metalness: 0.5,
            clearcoat: 0.5
        })
        const cylinder = new THREE.Mesh(cylinderGeom, cylinderMat)
        cylinder.position.set(0.2, 0.1, -0.5)
        scene.add(cylinder)
        virtualObjects.push(cylinder)
    }

    useFrame((state) => {
        const renderer = $$(rendererRef)
        const scene = $$(sceneRef)
        if (!renderer || !scene) return

        const frame = state.gl?.xr?.getFrame?.()
        if (!frame || !xrLightProbe) return

        // Get light estimate from the frame
        // @ts-ignore - experimental API
        const lightEstimate = frame.getLightEstimate?.(xrLightProbe)
        if (!lightEstimate) return

        // Update scene lighting based on estimate
        // @ts-ignore - experimental API
        const intensity = lightEstimate.primaryLightIntensity?.[0] ?? 1.0

        // Update directional light if we have one
        const directionalLight = scene.userData.directionalLight as THREE.DirectionalLight | undefined
        if (directionalLight) {
            directionalLight.intensity = Math.min(intensity, 3)

            // Update light direction if available
            // @ts-ignore - experimental API
            if (lightEstimate.primaryLightDirection) {
                // @ts-ignore - experimental API
                const dir = lightEstimate.primaryLightDirection
                directionalLight.position.set(dir[0], dir[1], dir[2])
            }
        }

        // Update light probe
        if (lightProbe) {
            // @ts-ignore - experimental API
            const sphericalHarmonics = lightEstimate.sphericalHarmonicsCoefficients
            if (sphericalHarmonics) {
                // Apply spherical harmonics to light probe
                // This provides ambient lighting from all directions
                // @ts-ignore
                lightProbe.sh.coefficients = sphericalHarmonics
            }
        }

        // Animate virtual objects
        const time = state.clock?.getElapsedTime() ?? 0
        virtualObjects.forEach((obj, i) => {
            obj.rotation.y = time * 0.5 + i * 0.5
        })
    })

    // Loading state
    if (!$$(checked)) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#1a1a2e', color: 'white' }}>
                <p>Checking WebXR AR support...</p>
            </div>
        )
    }

    // Fallback for non-AR browsers
    if (!$$(arSupported)) {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#1a1a2e', color: 'white', textAlign: 'center', padding: '20px' }}>
                <h1>WebXR AR Not Available</h1>
                <p style={{ maxWidth: '600px', marginBottom: '20px' }}>
                    AR lighting estimation requires an AR-capable device with ARCore (Android) or ARKit (iOS).
                </p>
                <h3>Light estimation enables:</h3>
                <ul style={{ textAlign: 'left', marginBottom: '20px' }}>
                    <li>Realistic lighting for virtual objects</li>
                    <li>Shadows that match the environment</li>
                    <li>Dynamic light updates as you move</li>
                    <li>Color temperature matching</li>
                </ul>
                <p style={{ color: '#888' }}>
                    Showing fallback scene with static lighting.
                </p>

                <div style={{ width: '100%', height: '400px', marginTop: '20px' }}>
                    <canvas3D>
                        <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[600, 400]} />
                        <scene background={new Color(0x1a1a2e)}>
                            <ambientLight intensity={0.5} />
                            <directionalLight position={[5, 10, 5]} intensity={1} />
                            {/* Demo objects */}
                            <mesh position={[-0.5, 0, -1]}>
                                <sphereGeometry args={[0.2, 32, 32]} />
                                <meshStandardMaterial color={0xffffff} roughness={0.1} metalness={0.9} />
                            </mesh>
                            <mesh position={[0, 0, -1]}>
                                <boxGeometry args={[0.3, 0.3, 0.3]} />
                                <meshStandardMaterial color={0xff6b6b} roughness={0.8} />
                            </mesh>
                            <mesh position={[0.5, 0, -1]}>
                                <cylinderGeometry args={[0.1, 0.1, 0.4, 32]} />
                                <meshStandardMaterial color={0x4ecdc4} roughness={0.2} metalness={0.5} />
                            </mesh>
                        </scene>
                        <perspectiveCamera fov={60} aspect={600 / 400} near={0.1} far={100} position={[0, 0.5, 1]} />
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
                alpha
            />
            <scene ref={sceneRef} background={null as unknown as THREE.Color}>
                <ambientLight intensity={0.5} />
                <hemisphereLight args={[0xffffff, 0x444444, 0.5]} />
            </scene>

            <perspectiveCamera
                ref={cameraRef}
                fov={60}
                aspect={window.innerWidth / window.innerHeight}
                near={0.01}
                far={100}
                position={[0, 0, 0]}
            />
            <orbitControls enableDamping target={[0, 0, -0.5]} />
        </canvas3D>
    )
}

export default ARLighting
