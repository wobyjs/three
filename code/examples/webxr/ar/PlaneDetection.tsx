/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, Matrix4, RingGeometry } from 'three'
import * as THREE from 'three'
import { ARButton } from 'three/examples/jsm/webxr/ARButton.js'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/PlaneGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/materials/MeshBasicMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/lights/HemisphereLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webxr_ar_plane_detection from Three.js examples.
 * AR scene with plane detection for placing objects on detected surfaces.
 *
 * Source: https://threejs.org/examples/webxr_ar_plane_detection.html
 *
 * This example demonstrates:
 * - AR plane detection feature
 * - Visualizing detected planes
 * - Placing objects on planes
 * - Real-world surface interaction
 *
 * Device requirements:
 * - AR-capable device with ARCore (Android) or ARKit (iOS)
 */

export const ARPlaneDetection = () => {
    const rendererRef = $<THREE.WebGLRenderer>()
    const sceneRef = $<THREE.Scene>()
    const cameraRef = $<THREE.PerspectiveCamera>()
    const [arSupported, setARSupported] = $(false)
    const [checked, setChecked] = $(false)
    const [planeCount, setPlaneCount] = $(0)

    // Detected planes
    const detectedPlanes: THREE.Mesh[] = []
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

    // Setup AR button and plane detection
    useEffect(() => {
        const renderer = $$(rendererRef)
        const scene = $$(sceneRef)
        if (!renderer || !$$(arSupported) || !scene) return

        // Create AR button with plane detection
        const arButton = ARButton.createButton(renderer, {
            requiredFeatures: ['plane-detection'],
            optionalFeatures: ['dom-overlay', 'local-floor'],
            domOverlay: { root: document.body }
        })
        document.body.appendChild(arButton)

        // Setup controller for placement
        const controller = renderer.xr.getController(0)
        controller.addEventListener('select', onSelect)
        scene.add(controller)

        // Handle session start
        renderer.xr.addEventListener('sessionstart', () => {
            const session = renderer.xr.getSession()
            if (!session) return

            // Listen for detected planes
            session.addEventListener('planesdetected', (event: any) => {
                const planes = event.detectedPlanes
                setPlaneCount(planes.size)

                // Visualize detected planes
                planes.forEach((plane: XRPlane) => {
                    visualizePlane(plane)
                })
            })
        })

        // Handle session end
        renderer.xr.addEventListener('sessionend', () => {
            detectedPlanes.forEach(p => {
                scene.remove(p)
                p.geometry.dispose()
                if (p.material instanceof THREE.Material) {
                    p.material.dispose()
                }
            })
            detectedPlanes.length = 0
            setPlaneCount(0)
        })

        function onSelect() {
            // Place object at controller position
            const position = new THREE.Vector3()
            position.setFromMatrixPosition(controller.matrixWorld)

            const geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1)
            const material = new THREE.MeshStandardMaterial({
                color: new Color().setHSL(Math.random(), 0.7, 0.5),
                roughness: 0.3,
                metalness: 0.5
            })

            const mesh = new THREE.Mesh(geometry, material)
            mesh.position.copy(position)
            mesh.position.y += 0.05 // Raise slightly above surface
            scene.add(mesh)
            placedObjects.push(mesh)
        }

        function visualizePlane(plane: XRPlane) {
            // Create visualization for detected plane
            const polygon = plane.polygon
            if (!polygon || polygon.length < 3) return

            // Create shape from polygon
            const shape = new THREE.Shape()
            shape.moveTo(polygon[0].x, polygon[0].z)

            for (let i = 1; i < polygon.length; i++) {
                shape.lineTo(polygon[i].x, polygon[i].z)
            }
            shape.lineTo(polygon[0].x, polygon[0].z)

            const geometry = new THREE.ShapeGeometry(shape)
            geometry.rotateX(-Math.PI / 2)

            const material = new THREE.MeshBasicMaterial({
                color: 0x4ecdc4,
                transparent: true,
                opacity: 0.3,
                side: THREE.DoubleSide
            })

            const mesh = new THREE.Mesh(geometry, material)

            // Set position from plane pose
            const pose = plane.pose
            if (pose) {
                const matrix = new Matrix4().fromArray(pose.transform.matrix)
                mesh.position.setFromMatrixPosition(matrix)
            }

            mesh.userData.isPlane = true
            scene.add(mesh)
            detectedPlanes.push(mesh)
        }

        return () => {
            arButton.remove()
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
        const time = state.clock?.getElapsedTime() ?? 0
        const scene = $$(sceneRef)
        if (!scene) return

        // Animate placed objects
        placedObjects.forEach((obj, i) => {
            obj.rotation.y = time * 0.5 + i * 0.3
        })

        // Pulse plane visualizations
        detectedPlanes.forEach((plane, i) => {
            if (plane.material instanceof THREE.MeshBasicMaterial) {
                plane.material.opacity = 0.2 + Math.sin(time * 2 + i) * 0.1
            }
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
                <h1>WebXR AR Plane Detection Not Available</h1>
                <p style={{ maxWidth: '600px', marginBottom: '20px' }}>
                    AR Plane Detection requires an AR-capable device with ARCore (Android) or ARKit (iOS).
                </p>
                <h3>Plane Detection enables:</h3>
                <ul style={{ textAlign: 'left', marginBottom: '20px' }}>
                    <li>Detect floors, walls, and tables</li>
                    <li>Visualize detected surfaces</li>
                    <li>Place objects on real-world surfaces</li>
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
                            {/* Demo floor plane */}
                            <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                                <planeGeometry args={[4, 4]} />
                                <meshBasicMaterial color={0x4ecdc4} transparent opacity={0.3} side={THREE.DoubleSide} />
                            </mesh>
                            {/* Demo placed boxes */}
                            {[-0.3, 0, 0.3].map((x, i) => (
                                <mesh key={i} position={[x, 0.05, -0.5]}>
                                    <boxGeometry args={[0.1, 0.1, 0.1]} />
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

export default ARPlaneDetection
