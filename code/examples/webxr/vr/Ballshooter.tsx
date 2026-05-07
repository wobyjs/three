/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, Vector3, SphereGeometry, MeshBasicMaterial } from 'three'
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
 * Port of webxr_vr_ballshooter from Three.js examples.
 * VR ball shooting game - spawn and throw balls at targets.
 *
 * Source: https://threejs.org/examples/webxr_vr_ballshooter.html
 *
 * This example demonstrates:
 * - VR session setup with XRButton
 * - Spawning physics-based objects from controllers
 * - Simple collision detection
 * - Target objects to hit
 * - Score tracking
 *
 * Device requirements:
 * - VR headset with controllers (Quest, Vive, etc.)
 * - Controllers with trigger for shooting
 */

// Simple physics ball
class Ball {
    mesh: THREE.Mesh
    velocity: Vector3
    radius: number
    active: boolean = true

    constructor(position: Vector3, velocity: Vector3, color: Color) {
        this.radius = 0.05
        this.velocity = velocity.clone()

        const geometry = new SphereGeometry(this.radius, 16, 16)
        const material = new THREE.MeshStandardMaterial({
            color: color,
            roughness: 0.3,
            metalness: 0.7
        })
        this.mesh = new THREE.Mesh(geometry, material)
        this.mesh.position.copy(position)
        this.mesh.castShadow = true
    }

    update(delta: number, gravity: number = -9.8) {
        if (!this.active) return

        // Apply gravity
        this.velocity.y += gravity * delta

        // Update position
        this.mesh.position.add(this.velocity.clone().multiplyScalar(delta))

        // Check floor collision
        if (this.mesh.position.y < this.radius) {
            this.mesh.position.y = this.radius
            this.velocity.y *= -0.5 // Bounce
            this.velocity.x *= 0.9 // Friction
            this.velocity.z *= 0.9

            // Deactivate if moving too slow
            if (this.velocity.length() < 0.1) {
                this.active = false
            }
        }
    }

    dispose() {
        this.mesh.geometry.dispose()
        if (this.mesh.material instanceof THREE.Material) {
            this.mesh.material.dispose()
        }
    }
}

// Target object
class Target {
    mesh: THREE.Mesh
    active: boolean = true
    points: number

    constructor(position: Vector3, size: number, points: number) {
        this.points = points

        const geometry = new THREE.BoxGeometry(size, size, size)
        const material = new THREE.MeshStandardMaterial({
            color: new Color().setHSL(Math.random(), 0.7, 0.5),
            roughness: 0.5,
            metalness: 0.3
        })
        this.mesh = new THREE.Mesh(geometry, material)
        this.mesh.position.copy(position)
        this.mesh.userData.target = this
    }

    hit() {
        this.active = false
        this.mesh.visible = false
        return this.points
    }

    dispose() {
        this.mesh.geometry.dispose()
        if (this.mesh.material instanceof THREE.Material) {
            this.mesh.material.dispose()
        }
    }
}

export const VRBallshooter = () => {
    const rendererRef = $<THREE.WebGLRenderer>()
    const sceneRef = $<THREE.Scene>()
    const cameraRef = $<THREE.PerspectiveCamera>()
    const [xrSupported, setXRSupported] = $(false)
    const [checked, setChecked] = $(false)
    const [score, setScore] = $(0)

    // Store controllers
    const controllers: THREE.XRTargetRaySpace[] = []

    // Game objects
    const balls: Ball[] = []
    const targets: Target[] = []
    const maxBalls = 50
    const ballColor = new Color(0xff6b6b)

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

    // Create initial targets
    function createTargets(scene: THREE.Scene) {
        // Clear existing targets
        targets.forEach(t => {
            scene.remove(t.mesh)
            t.dispose()
        })
        targets.length = 0

        // Create new targets in a grid
        const positions: [number, number, number][] = [
            [-1.5, 1.5, -3], [0, 1.5, -3], [1.5, 1.5, -3],
            [-1, 2, -3], [1, 2, -3],
            [0, 2.5, -3],
        ]

        positions.forEach((pos, i) => {
            const target = new Target(new Vector3(...pos), 0.3, 10 * (i + 1))
            scene.add(target.mesh)
            targets.push(target)
        })
    }

    // Setup VR button and controllers
    useEffect(() => {
        const renderer = $$(rendererRef)
        const scene = $$(sceneRef)
        if (!renderer || !$$(xrSupported) || !scene) return

        // Create initial targets
        createTargets(scene)

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

            // Add small sphere at controller tip
            const sphereGeom = new SphereGeometry(0.02, 16, 16)
            const sphereMat = new MeshBasicMaterial({ color: 0xff6b6b })
            const sphere = new THREE.Mesh(sphereGeom, sphereMat)
            controller.add(sphere)

            // Setup select event for shooting
            controller.addEventListener('selectstart', onSelectStart)

            scene.add(controller)
        }

        function onSelectStart(event: THREE.Event) {
            const controller = event.target as THREE.XRTargetRaySpace

            // Get controller position and direction
            const position = new Vector3()
            position.setFromMatrixPosition(controller.matrixWorld)

            const direction = new Vector3(0, 0, -1)
            direction.applyQuaternion(controller.quaternion)

            // Create ball with velocity in controller direction
            const velocity = direction.multiplyScalar(15) // Shoot speed
            const ball = new Ball(position, velocity, ballColor.clone())

            // Add to scene
            scene.add(ball.mesh)
            balls.push(ball)

            // Remove old balls if too many
            while (balls.length > maxBalls) {
                const oldBall = balls.shift()!
                scene.remove(oldBall.mesh)
                oldBall.dispose()
            }
        }

        return () => {
            vrButton.remove()
            controllers.length = 0
            // Clean up balls
            balls.forEach(b => {
                scene.remove(b.mesh)
                b.dispose()
            })
            balls.length = 0
            // Clean up targets
            targets.forEach(t => {
                scene.remove(t.mesh)
                t.dispose()
            })
            targets.length = 0
        }
    })

    // Check ball-target collisions
    function checkCollisions() {
        const scene = $$(sceneRef)
        if (!scene) return

        balls.forEach(ball => {
            if (!ball.active) return

            targets.forEach(target => {
                if (!target.active) return

                const distance = ball.mesh.position.distanceTo(target.mesh.position)
                const hitDistance = ball.radius + 0.15 // Target half-size

                if (distance < hitDistance) {
                    const points = target.hit()
                    setScore($$(score) + points)
                }
            })
        })
    }

    useFrame((state) => {
        const delta = state.clock?.getDelta() ?? 0.016
        const scene = $$(sceneRef)
        if (!scene) return

        // Update balls
        balls.forEach(ball => {
            ball.update(delta)
        })

        // Check collisions
        checkCollisions()

        // Animate targets
        const time = state.clock?.getElapsedTime() ?? 0
        targets.forEach((target, i) => {
            if (target.active) {
                target.mesh.rotation.y = time * 0.5 + i * 0.3
                target.mesh.position.y = 1.5 + Math.sin(time * 2 + i) * 0.1
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
                <p>A VR headset with controllers is required for the ball shooter game.</p>
                <p style={{ color: '#888', marginTop: '20px' }}>
                    Shoot balls at targets in VR using your controllers.
                </p>

                <div style={{ width: '100%', height: '400px', marginTop: '20px' }}>
                    <canvas3D>
                        <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[600, 400]} />
                        <scene background={new Color(0x1a1a2e)}>
                            <ambientLight intensity={0.3} />
                            <directionalLight position={[5, 10, 5]} intensity={1} />
                            {/* Demo targets */}
                            {[-1.5, 0, 1.5].map((x, i) => (
                                <mesh key={i} position={[x, 1.5, -3]}>
                                    <boxGeometry args={[0.3, 0.3, 0.3]} />
                                    <meshStandardMaterial color={new Color().setHSL(i / 3, 0.7, 0.5)} />
                                </mesh>
                            ))}
                            {/* Floor */}
                            <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                                <cylinderGeometry args={[5, 5, 0.1, 32]} />
                                <meshStandardMaterial color={0x333333} />
                            </mesh>
                        </scene>
                        <perspectiveCamera fov={60} aspect={600 / 400} near={0.1} far={100} position={[0, 2, 2]} />
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

                {/* Reference grid */}
                <gridHelper args={[10, 20, 0x444444, 0x333333]} position={[0, 0.01, 0]} />

                {/* Back wall */}
                <mesh position={[0, 2, -4]}>
                    <boxGeometry args={[8, 4, 0.1]} />
                    <meshStandardMaterial color={0x222233} />
                </mesh>

                {/* Central pillar */}
                <mesh position={[0, 0.5, -2]}>
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
                position={[0, 1.6, 3]}
            />
            <orbitControls enableDamping target={[0, 1, 0]} />
        </canvas3D>
    )
}

export default VRBallshooter
