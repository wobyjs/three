/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, Vector3, CatmullRomCurve3, TubeGeometry, MeshBasicMaterial, DoubleSide } from 'three'
import * as THREE from 'three'
import { XRButton } from 'three/examples/jsm/webxr/XRButton.js'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
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
 * Port of webxr_vr_rollercoaster from Three.js examples.
 * VR rollercoaster experience - ride along a predefined track.
 *
 * Source: https://threejs.org/examples/webxr_vr_rollercoaster.html
 *
 * This example demonstrates:
 * - VR session with seated experience
 * - Camera movement along a predefined path
 * - Motion platform simulation
 * - Environmental scenery
 *
 * Device requirements:
 * - VR headset (Quest, Vive, etc.)
 * - Seated VR experience (no controllers required)
 * - Note: May cause motion sickness - use caution
 */

// Create rollercoaster track curve
function createTrackCurve(): CatmullRomCurve3 {
    const points: Vector3[] = []

    // Create a looping track with hills and turns
    const segments = 50
    for (let i = 0; i < segments; i++) {
        const t = i / segments
        const angle = t * Math.PI * 4 // Two full loops

        // Vary radius for interesting shape
        const radius = 10 + Math.sin(t * Math.PI * 6) * 3

        // Vary height for hills
        const height = 5 + Math.sin(t * Math.PI * 4) * 3 + Math.cos(t * Math.PI * 8) * 2

        const x = Math.cos(angle) * radius
        const z = Math.sin(angle) * radius
        const y = height

        points.push(new Vector3(x, y, z))
    }

    // Close the loop
    points.push(points[0].clone())

    return new CatmullRomCurve3(points, true)
}

// Create track mesh from curve
function createTrackMesh(curve: CatmullRomCurve3): THREE.Mesh {
    const geometry = new TubeGeometry(curve, 500, 0.2, 8, true)
    const material = new THREE.MeshStandardMaterial({
        color: 0x888888,
        roughness: 0.5,
        metalness: 0.8,
        side: DoubleSide
    })
    return new THREE.Mesh(geometry, material)
}

// Create support pillars
function createSupports(curve: CatmullRomCurve3, scene: THREE.Scene) {
    const supports: THREE.Mesh[] = []
    const numSupports = 30

    for (let i = 0; i < numSupports; i++) {
        const t = i / numSupports
        const point = curve.getPointAt(t)

        // Create pillar from ground to track
        const height = point.y
        const geometry = new THREE.CylinderGeometry(0.1, 0.15, height, 8)
        const material = new THREE.MeshStandardMaterial({
            color: 0x444444,
            roughness: 0.7,
            metalness: 0.5
        })
        const pillar = new THREE.Mesh(geometry, material)
        pillar.position.set(point.x, height / 2, point.z)
        scene.add(pillar)
        supports.push(pillar)
    }

    return supports
}

export const VRRollercoaster = () => {
    const rendererRef = $<THREE.WebGLRenderer>()
    const sceneRef = $<THREE.Scene>()
    const cameraRef = $<THREE.PerspectiveCamera>()
    const [xrSupported, setXRSupported] = $(false)
    const [checked, setChecked] = $(false)

    // Track state
    let trackCurve: CatmullRomCurve3 | null = null
    let trackMesh: THREE.Mesh | null = null
    let supports: THREE.Mesh[] = []
    let progress = 0
    const speed = 0.0002 // Speed along track

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

    // Setup VR button and track
    useEffect(() => {
        const renderer = $$(rendererRef)
        const scene = $$(sceneRef)
        if (!renderer || !$$(xrSupported) || !scene) return

        // Create track
        trackCurve = createTrackCurve()
        trackMesh = createTrackMesh(trackCurve)
        scene.add(trackMesh)

        // Create supports
        supports = createSupports(trackCurve, scene)

        // Create VR button for seated experience
        const vrButton = XRButton.createButton(renderer, {
            optionalFeatures: ['local-floor', 'bounded-floor']
        })
        document.body.appendChild(vrButton)

        // Add scenery elements
        addScenery(scene)

        return () => {
            vrButton.remove()
            if (trackMesh) {
                scene.remove(trackMesh)
                trackMesh.geometry.dispose()
                if (trackMesh.material instanceof THREE.Material) {
                    trackMesh.material.dispose()
                }
            }
            supports.forEach(s => {
                scene.remove(s)
                s.geometry.dispose()
                if (s.material instanceof THREE.Material) {
                    s.material.dispose()
                }
            })
        }
    })

    // Add scenery elements
    function addScenery(scene: THREE.Scene) {
        // Ground plane
        const groundGeom = new THREE.PlaneGeometry(100, 100)
        const groundMat = new THREE.MeshStandardMaterial({
            color: 0x1a3a1a,
            roughness: 0.9
        })
        const ground = new THREE.Mesh(groundGeom, groundMat)
        ground.rotation.x = -Math.PI / 2
        ground.position.y = 0
        scene.add(ground)

        // Add some trees
        for (let i = 0; i < 50; i++) {
            const angle = Math.random() * Math.PI * 2
            const radius = 15 + Math.random() * 30
            const x = Math.cos(angle) * radius
            const z = Math.sin(angle) * radius

            // Tree trunk
            const trunkGeom = new THREE.CylinderGeometry(0.2, 0.3, 2, 8)
            const trunkMat = new THREE.MeshStandardMaterial({ color: 0x4a3728 })
            const trunk = new THREE.Mesh(trunkGeom, trunkMat)
            trunk.position.set(x, 1, z)
            scene.add(trunk)

            // Tree foliage
            const foliageGeom = new THREE.ConeGeometry(1.5, 3, 8)
            const foliageMat = new THREE.MeshStandardMaterial({ color: 0x2d5a27 })
            const foliage = new THREE.Mesh(foliageGeom, foliageMat)
            foliage.position.set(x, 3.5, z)
            scene.add(foliage)
        }
    }

    useFrame((state) => {
        const delta = state.clock?.getDelta() ?? 0.016
        const renderer = $$(rendererRef)
        const camera = $$(cameraRef)
        const scene = $$(sceneRef)

        if (!renderer || !camera || !scene || !trackCurve) return

        // Check if in VR session
        const session = renderer.xr.getSession()
        if (session) {
            // Move along track in VR
            progress += speed * delta * 60
            if (progress > 1) progress -= 1

            // Get position on track
            const position = trackCurve.getPointAt(progress)
            const tangent = trackCurve.getTangentAt(progress)

            // Get look-ahead point for orientation
            const lookAhead = trackCurve.getPointAt((progress + 0.01) % 1)

            // Update camera position (in VR, this moves the user)
            // Note: In actual VR, we'd use a dolly/group to move the user
            const cameraGroup = camera.parent
            if (cameraGroup) {
                cameraGroup.position.copy(position)
                cameraGroup.lookAt(lookAhead)
            }
        } else {
            // Non-VR: Animate camera to follow track
            progress += speed * delta * 60
            if (progress > 1) progress -= 1

            const position = trackCurve!.getPointAt(progress)
            const lookAhead = trackCurve!.getPointAt((progress + 0.01) % 1)

            camera.position.copy(position)
            camera.lookAt(lookAhead)
        }

        // Animate scenery (gentle tree sway)
        const time = state.clock?.getElapsedTime() ?? 0
        scene.traverse((child) => {
            if (child instanceof THREE.Mesh && child.userData.sway) {
                child.rotation.z = Math.sin(time + child.userData.swayOffset) * 0.05
            }
        })
    })

    // Loading state
    if (!$$(checked)) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#0a1628', color: 'white' }}>
                <p>Checking WebXR support...</p>
            </div>
        )
    }

    // Fallback for non-XR browsers
    if (!$$(xrSupported)) {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#0a1628', color: 'white', textAlign: 'center', padding: '20px' }}>
                <h1>WebXR VR Not Available</h1>
                <p>A VR headset is required for the rollercoaster experience.</p>
                <p style={{ color: '#ff6b6b', marginTop: '20px' }}>
                    Warning: VR rollercoasters may cause motion sickness.
                </p>
                <p style={{ color: '#888', marginTop: '10px' }}>
                    Showing a preview of the track without VR.
                </p>

                <div style={{ width: '100%', height: '400px', marginTop: '20px' }}>
                    <canvas3D>
                        <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[600, 400]} />
                        <scene background={new Color(0x0a1628)}>
                            <ambientLight intensity={0.4} />
                            <directionalLight position={[10, 20, 10]} intensity={1} />
                            {/* Preview track */}
                            <mesh position={[0, 5, 0]}>
                                <torusGeometry args={[10, 0.2, 8, 100]} />
                                <meshStandardMaterial color={0x888888} />
                            </mesh>
                            {/* Ground */}
                            <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                                <cylinderGeometry args={[30, 30, 0.1, 32]} />
                                <meshStandardMaterial color={0x1a3a1a} />
                            </mesh>
                        </scene>
                        <perspectiveCamera fov={75} aspect={600 / 400} near={0.1} far={100} position={[15, 15, 15]} />
                        <orbitControls enableDamping target={[0, 5, 0]} />
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
            <scene ref={sceneRef} background={new Color(0x0a1628)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[10, 20, 10]} intensity={1} />
                <directionalLight position={[-10, 10, -10]} intensity={0.3} color={0x6688ff} />
            </scene>

            <perspectiveCamera
                ref={cameraRef}
                fov={75}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={200}
                position={[0, 5, 15]}
            />
            <orbitControls enableDamping target={[0, 5, 0]} />
        </canvas3D>
    )
}

export default VRRollercoaster
