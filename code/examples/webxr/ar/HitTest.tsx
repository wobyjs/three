/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, RingGeometry, Matrix4 } from 'three'
import * as THREE from 'three'
import { ARButton } from 'three/examples/jsm/webxr/ARButton.js'

// Import wrappers for registration
import '@woby/three/src/geometries/ConeGeometry'
import '@woby/three/src/geometries/CylinderGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/materials/MeshNormalMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/lights/HemisphereLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webxr_ar_hittest from Three.js examples.
 * AR scene with hit-test for placing objects on detected surfaces.
 *
 * Source: https://threejs.org/examples/webxr_ar_hittest.html
 *
 * This example demonstrates:
 * - AR session with hit-test feature for surface detection
 * - Hit test source request on session start
 * - Per-frame hit test results processing
 * - Reticle visualization at hit position
 * - Object placement on select/tap
 *
 * Note: Hit-test requires AR-capable device (mobile AR or AR headset).
 */

export const ARHitTest = () => {
    const rendererRef = $<THREE.WebGLRenderer>()
    const sceneRef = $<THREE.Scene>()
    const cameraRef = $<THREE.PerspectiveCamera>()
    const [arSupported, setARSupported] = $(false)
    const [checked, setChecked] = $(false)

    // Hit test state
    let hitTestSource: XRHitTestSource | null = null
    let hitTestSourceRequested = false
    const reticle = new THREE.Mesh(
        new RingGeometry(0.15, 0.2, 32).rotateX(-Math.PI / 2),
        new THREE.MeshBasicMaterial({ color: 0xffffff, opacity: 0.5, transparent: true })
    )
    reticle.matrixAutoUpdate = false
    reticle.visible = false

    // Placed objects
    const placedObjects: THREE.Mesh[] = []

    // Check AR support
    useEffect(() => {
        const checkAR = async () => {
            if ('xr' in navigator) {
                try {
                    const supported = await navigator.xr.isSessionSupported('immersive-ar')
                    setARSupported(supported)
                } catch (e) {
                    console.warn('WebXR AR check failed:', e)
                }
            }
            setChecked(true)
        }
        checkAR()
    })

    // Setup AR button and hit-test
    useEffect(() => {
        const renderer = $$(rendererRef)
        const scene = $$(sceneRef)
        if (!renderer || !$$(arSupported) || !scene) return

        // Add reticle to scene
        scene.add(reticle)

        // Create AR button with hit-test feature
        const arButton = ARButton.createButton(renderer, {
            requiredFeatures: ['hit-test'],
            optionalFeatures: ['dom-overlay', 'local-floor'],
            domOverlay: { root: document.body }
        })
        document.body.appendChild(arButton)

        // Setup controller for placement
        const controller = renderer.xr.getController(0)
        controller.addEventListener('select', onSelect)
        scene.add(controller)

        // Request hit test source on session start
        renderer.xr.addEventListener('sessionstart', () => {
            const session = renderer.xr.getSession()
            if (session) {
                session.requestReferenceSpace('viewer').then((refSpace) => {
                    session.requestHitTestSource({ space: refSpace }).then((source) => {
                        hitTestSource = source
                        hitTestSourceRequested = true
                    })
                })
            }
        })

        // Cleanup on session end
        renderer.xr.addEventListener('sessionend', () => {
            hitTestSource = null
            hitTestSourceRequested = false
            reticle.visible = false
        })

        function onSelect() {
            if (reticle.visible) {
                // Create a new object at reticle position
                const material = new THREE.MeshStandardMaterial({
                    color: new Color().setHSL(Math.random(), 0.7, 0.5),
                    roughness: 0.3,
                    metalness: 0.5
                })
                const geometry = new THREE.ConeGeometry(0.1, 0.2, 32)
                const mesh = new THREE.Mesh(geometry, material)
                mesh.position.setFromMatrixPosition(reticle.matrix)
                mesh.quaternion.setFromRotationMatrix(
                    new Matrix4().extractRotation(reticle.matrix)
                )
                mesh.rotateX(-Math.PI / 2) // Point cone upward
                scene.add(mesh)
                placedObjects.push(mesh)
            }
        }

        return () => {
            arButton.remove()
            scene.remove(reticle)
            // Clean up placed objects
            placedObjects.forEach(obj => {
                scene.remove(obj)
                obj.geometry.dispose()
                if (obj.material instanceof THREE.Material) {
                    obj.material.dispose()
                }
            })
            placedObjects.length = 0
        }
    })

    useFrame((state) => {
        const renderer = $$(rendererRef)
        if (!renderer || !hitTestSource) return

        const frame = state.gl?.xr?.getFrame?.()
        if (!frame) return

        const referenceSpace = renderer.xr.getReferenceSpace()
        if (!referenceSpace) return

        // Get hit test results
        const results = frame.getHitTestResults(hitTestSource)
        if (results.length > 0) {
            const hit = results[0]
            const pose = hit.getPose(referenceSpace)
            if (pose) {
                // Update reticle position
                reticle.visible = true
                reticle.matrix.fromArray(pose.transform.matrix)
            }
        } else {
            reticle.visible = false
        }

        // Animate placed objects
        const scene = $$(sceneRef)
        if (scene) {
            const time = state.clock?.getElapsedTime() ?? 0
            placedObjects.forEach((obj, i) => {
                obj.rotation.y = time * 0.5 + i * 0.3
            })
        }
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
                <h1>WebXR AR Hit-Test Not Available</h1>
                <p style={{ maxWidth: '600px', marginBottom: '20px' }}>
                    Augmented Reality with hit-test requires an AR-capable device with ARCore (Android) or ARKit (iOS).
                </p>
                <h3>Hit-test enables:</h3>
                <ul style={{ textAlign: 'left', marginBottom: '20px' }}>
                    <li>Detecting real-world surfaces</li>
                    <li>Placing virtual objects on surfaces</li>
                    <li>Accurate AR positioning</li>
                </ul>
                <p style={{ color: '#888' }}>
                    Showing fallback scene without AR.
                </p>

                <div style={{ width: '100%', height: '400px', marginTop: '20px' }}>
                    <canvas3D>
                        <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[600, 400]} />
                        <scene background={new Color(0x1a1a2e)}>
                            <ambientLight intensity={0.5} />
                            <directionalLight position={[5, 10, 5]} intensity={1} />
                            {/* Demo cones showing what would be placed */}
                            {[0, 1, 2].map(i => (
                                <mesh key={i} position={[(i - 1) * 0.5, 0.1, -1]} rotation={[-Math.PI / 2, 0, 0]}>
                                    <coneGeometry args={[0.1, 0.2, 32]} />
                                    <meshStandardMaterial color={new Color().setHSL(i / 3, 0.7, 0.5)} />
                                </mesh>
                            ))}
                        </scene>
                        <perspectiveCamera fov={60} aspect={600 / 400} near={0.1} far={100} position={[0, 1, 2]} />
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
                <hemisphereLight args={[0xffffff, 0xbbbbff, 1]} />
                <directionalLight position={[5, 10, 5]} intensity={1} />
            </scene>

            <perspectiveCamera
                ref={cameraRef}
                fov={60}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[0, 1.6, 3]}
            />
            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default ARHitTest
