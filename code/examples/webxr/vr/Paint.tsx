/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, BufferGeometry, Float32BufferAttribute, LineBasicMaterial, TubeGeometry, CatmullRomCurve3, Vector3, Group } from 'three'
import * as THREE from 'three'
import { XRButton } from 'three/examples/jsm/webxr/XRButton.js'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
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
 * Port of webxr_vr_paint from Three.js examples.
 * VR painting - draw strokes in 3D space.
 *
 * Source: https://threejs.org/examples/webxr_vr_paint.html
 *
 * This example demonstrates:
 * - VR session setup with XRButton
 * - Controller select events for drawing
 * - Creating 3D strokes using TubeGeometry
 * - Color picker for different brush colors
 * - Clear button to remove all strokes
 */

// Stroke class to manage drawing
class Stroke {
    points: Vector3[] = []
    geometry: TubeGeometry | null = null
    mesh: THREE.Mesh | null = null
    color: Color

    constructor(color: Color) {
        this.color = color
    }

    addPoint(point: Vector3) {
        this.points.push(point.clone())
        this.updateGeometry()
    }

    updateGeometry() {
        if (this.points.length < 2) return

        // Create curve from points
        const curve = new CatmullRomCurve3(this.points)

        // Dispose old geometry
        if (this.geometry) {
            this.geometry.dispose()
        }

        // Create tube geometry
        const tubeRadius = 0.01
        this.geometry = new TubeGeometry(curve, this.points.length * 2, tubeRadius, 8, false)

        if (this.mesh) {
            this.mesh.geometry = this.geometry
        }
    }

    finish() {
        // Finalize the stroke
        this.updateGeometry()
    }

    dispose() {
        if (this.geometry) {
            this.geometry.dispose()
        }
        if (this.mesh?.material) {
            (this.mesh.material as THREE.Material).dispose()
        }
    }
}

export const VRPaint = () => {
    const rendererRef = $<THREE.WebGLRenderer>()
    const sceneRef = $<THREE.Scene>()
    const cameraRef = $<THREE.PerspectiveCamera>()
    const [xrSupported, setXRSupported] = $(false)
    const [checked, setChecked] = $(false)

    // Store controllers
    const controllers: THREE.XRTargetRaySpace[] = []

    // Painting state
    const strokes: Stroke[] = []
    const strokesGroup = new Group()
    let currentStroke: Stroke | null = null

    // Current brush color
    const brushColors = [
        new Color(0xff6b6b), // Red
        new Color(0x4ecdc4), // Teal
        new Color(0xffe66d), // Yellow
        new Color(0x95e1d3), // Mint
        new Color(0xf38181), // Coral
        new Color(0xaa96da), // Purple
        new Color(0xffffff), // White
    ]
    let currentColorIndex = 0
    let currentColor = brushColors[0]

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

    // Setup VR button and controllers for painting
    useEffect(() => {
        const renderer = $$(rendererRef)
        const scene = $$(sceneRef)
        if (!renderer || !$$(xrSupported) || !scene) return

        // Add strokes group to scene
        scene.add(strokesGroup)

        // Create VR button
        const vrButton = XRButton.createButton(renderer)
        document.body.appendChild(vrButton)

        // Setup controllers
        for (let i = 0; i < 2; i++) {
            const controller = renderer.xr.getController(i)
            controllers.push(controller)

            // Add small sphere at controller tip for visual feedback
            const sphereGeometry = new THREE.SphereGeometry(0.02, 16, 16)
            const sphereMaterial = new THREE.MeshBasicMaterial({ color: currentColor })
            const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
            controller.add(sphere)
            controller.userData.cursor = sphere

            // Add visual ray line (fainter for paint mode)
            const geometry = new THREE.BufferGeometry().setFromPoints([
                new THREE.Vector3(0, 0, 0),
                new THREE.Vector3(0, 0, -1)
            ])
            const material = new THREE.LineBasicMaterial({ color: 0xffffff, opacity: 0.3, transparent: true })
            const line = new THREE.Line(geometry, material)
            line.scale.z = 3
            controller.add(line)

            // Setup select events for painting
            controller.addEventListener('selectstart', onSelectStart)
            controller.addEventListener('selectend', onSelectEnd)

            // Setup squeeze for color change
            controller.addEventListener('squeezestart', onChangeColor)

            scene.add(controller)
        }

        return () => {
            vrButton.remove()
            scene.remove(strokesGroup)
            controllers.length = 0
            // Clean up strokes
            strokes.forEach(s => s.dispose())
            strokes.length = 0
        }
    })

    // Handle select start - begin stroke
    function onSelectStart(event: THREE.Event) {
        const controller = event.target as THREE.XRTargetRaySpace

        // Create new stroke
        currentStroke = new Stroke(currentColor)

        // Create mesh for the stroke
        const material = new THREE.MeshBasicMaterial({ color: currentColor })
        const mesh = new THREE.Mesh(new THREE.BufferGeometry(), material)
        currentStroke.mesh = mesh
        strokesGroup.add(mesh)

        // Add initial point
        const position = new THREE.Vector3()
        position.setFromMatrixPosition(controller.matrixWorld)
        currentStroke.addPoint(position)

        controller.userData.painting = true
    }

    // Handle select end - finish stroke
    function onSelectEnd(event: THREE.Event) {
        const controller = event.target as THREE.XRTargetRaySpace

        if (currentStroke) {
            currentStroke.finish()
            strokes.push(currentStroke)
            currentStroke = null
        }

        controller.userData.painting = false
    }

    // Change brush color
    function onChangeColor(event: THREE.Event) {
        const controller = event.target as THREE.XRTargetRaySpace

        currentColorIndex = (currentColorIndex + 1) % brushColors.length
        currentColor = brushColors[currentColorIndex]

        // Update cursor color
        if (controller.userData.cursor) {
            (controller.userData.cursor.material as THREE.MeshBasicMaterial).color.copy(currentColor)
        }

        // Update all controller cursors
        controllers.forEach(c => {
            if (c.userData.cursor) {
                (c.userData.cursor.material as THREE.MeshBasicMaterial).color.copy(currentColor)
            }
        })
    }

    // Clear all strokes
    function clearStrokes() {
        strokes.forEach(s => {
            s.dispose()
            if (s.mesh) {
                strokesGroup.remove(s.mesh)
            }
        })
        strokes.length = 0
    }

    useFrame(() => {
        const scene = $$(sceneRef)
        if (!scene) return

        // Add points to current stroke while painting
        controllers.forEach(controller => {
            if (controller.userData.painting && currentStroke) {
                const position = new THREE.Vector3()
                position.setFromMatrixPosition(controller.matrixWorld)

                // Only add point if it's far enough from last point
                const lastPoint = currentStroke.points[currentStroke.points.length - 1]
                if (!lastPoint || position.distanceTo(lastPoint) > 0.02) {
                    currentStroke.addPoint(position)
                }
            }
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
                <p>A VR headset and WebXR-compatible browser are required for VR painting.</p>
                <p style={{ color: '#888', marginTop: '20px' }}>
                    VR Paint lets you draw strokes in 3D space using VR controllers.
                </p>

                <div style={{ width: '100%', height: '400px', marginTop: '20px' }}>
                    <canvas3D>
                        <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[600, 400]} />
                        <scene background={new Color(0x1a1a2e)}>
                            <ambientLight intensity={0.3} />
                            <directionalLight position={[5, 10, 5]} intensity={1} />
                            <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                                <cylinderGeometry args={[5, 5, 0.1, 32]} />
                                <meshStandardMaterial color={0x333333} />
                            </mesh>
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

                {/* Floor */}
                <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <cylinderGeometry args={[5, 5, 0.1, 32]} />
                    <meshStandardMaterial color={0x333333} />
                </mesh>

                {/* Reference grid on floor */}
                <gridHelper args={[10, 20, 0x444444, 0x333333]} position={[0, 0.01, 0]} />

                {/* Central reference pillar */}
                <mesh position={[0, 0.5, -2]}>
                    <cylinderGeometry args={[0.05, 0.05, 1, 32]} />
                    <meshNormalMaterial />
                </mesh>

                {/* Color indicator spheres at corners */}
                {brushColors.map((color, i) => (
                    <mesh
                        key={i}
                        position={[-2 + i * 0.3, 0.1, -2]}
                        userData-colorIndex={i}
                    >
                        <sphereGeometry args={[0.08, 16, 16]} />
                        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={i === currentColorIndex ? 0.5 : 0} />
                    </mesh>
                ))}
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

export default VRPaint
