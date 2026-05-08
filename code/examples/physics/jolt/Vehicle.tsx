/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, Vector3, Group, Mesh, Quaternion, Euler } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/CylinderGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of physics_jolt_vehicle from Three.js examples.
 * Demonstrates vehicle physics with wheel simulation.
 *
 * Source: https://threejs.org/examples/physics_jolt_vehicle.html
 *
 * Key features:
 * - Multi-wheel vehicle dynamics
 * - Suspension simulation
 * - Steering and traction
 *
 * Note: Simplified version without actual Jolt.js integration.
 * For full physics, use Jolt.VehicleConstraint with wheel settings.
 */

interface Wheel {
    mesh: THREE.Mesh
    suspensionOffset: number
    suspensionVelocity: number
    rotationSpeed: number
}

interface VehicleState {
    position: Vector3
    velocity: Vector3
    rotation: number
    angularVelocity: number
    pitch: number
    roll: number
}

export const Vehicle = () => {
    const vehicleGroup = $<THREE.Group>()
    const wheels: Wheel[] = []
    const state: VehicleState = {
        position: new Vector3(0, 2, 0),
        velocity: new Vector3(),
        rotation: 0,
        angularVelocity: 0,
        pitch: 0,
        roll: 0
    }

    const keys: { [key: string]: boolean } = {}

    useEffect(() => {
        // Create vehicle chassis
        const chassis = new THREE.Mesh(
            new THREE.BoxGeometry(2.5, 0.6, 5),
            new THREE.MeshStandardMaterial({ color: 0xe74c3c, metalness: 0.5, roughness: 0.4 })
        )
        chassis.position.y = 0.8
        chassis.castShadow = true
        $$(vehicleGroup)?.add(chassis)

        // Cabin
        const cabin = new THREE.Mesh(
            new THREE.BoxGeometry(2.2, 0.8, 2.5),
            new THREE.MeshStandardMaterial({ color: 0x2c3e50, metalness: 0.3, roughness: 0.5 })
        )
        cabin.position.set(0, 1.5, -0.5)
        cabin.castShadow = true
        $$(vehicleGroup)?.add(cabin)

        // Headlights
        const headlightL = new THREE.Mesh(
            new THREE.SphereGeometry(0.15, 16, 16),
            new THREE.MeshStandardMaterial({ color: 0xffffcc, emissive: 0xffffcc, emissiveIntensity: 0.5 })
        )
        headlightL.position.set(-0.9, 0.8, 2.5)
        $$(vehicleGroup)?.add(headlightL)

        const headlightR = new THREE.Mesh(
            new THREE.SphereGeometry(0.15, 16, 16),
            new THREE.MeshStandardMaterial({ color: 0xffffcc, emissive: 0xffffcc, emissiveIntensity: 0.5 })
        )
        headlightR.position.set(0.9, 0.8, 2.5)
        $$(vehicleGroup)?.add(headlightR)

        // Create wheels with suspension
        const wheelPositions = [
            { x: -1.2, z: 1.8 },   // Front left
            { x: 1.2, z: 1.8 },    // Front right
            { x: -1.2, z: -1.8 },  // Rear left
            { x: 1.2, z: -1.8 }    // Rear right
        ]

        wheelPositions.forEach((pos) => {
            const wheelMesh = new THREE.Mesh(
                new THREE.CylinderGeometry(0.45, 0.45, 0.35, 16),
                new THREE.MeshStandardMaterial({ color: 0x1a1a1a, metalness: 0.2, roughness: 0.8 })
            )
            wheelMesh.rotation.z = Math.PI / 2
            wheelMesh.position.set(pos.x, 0.45, pos.z)
            wheelMesh.castShadow = true
            $$(vehicleGroup)?.add(wheelMesh)

            wheels.push({
                mesh: wheelMesh,
                suspensionOffset: 0,
                suspensionVelocity: 0,
                rotationSpeed: 0
            })
        })

        // Keyboard controls
        const handleKeyDown = (e: KeyboardEvent) => {
            keys[e.key.toLowerCase()] = true
        }
        const handleKeyUp = (e: KeyboardEvent) => {
            keys[e.key.toLowerCase()] = false
        }

        window.addEventListener('keydown', handleKeyDown)
        window.addEventListener('keyup', handleKeyUp)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
            window.removeEventListener('keyup', handleKeyUp)
        }
    })

    useFrame((state) => {
        const delta = Math.min(state.clock?.getDelta() ?? 0.016, 0.033)
        const time = state.clock?.getElapsedTime() ?? 0

        // Input
        let steering = 0
        let throttle = 0
        let brake = false

        if (keys['a'] || keys['arrowleft']) steering = 0.4
        if (keys['d'] || keys['arrowright']) steering = -0.4
        if (keys['w'] || keys['arrowup']) throttle = 25
        if (keys['s'] || keys['arrowdown']) throttle = -18
        if (keys[' ']) brake = true

        // Vehicle physics
        const speed = state.velocity.length()

        // Steering affects angular velocity based on speed
        state.angularVelocity += steering * speed * 0.015 * delta

        // Apply throttle
        const forward = new Vector3(0, 0, -1).applyAxisAngle(new Vector3(0, 1, 0), state.rotation)
        state.velocity.add(forward.multiplyScalar(throttle * delta))

        // Braking
        if (brake) {
            state.velocity.multiplyScalar(0.92)
        }

        // Update position and rotation
        state.position.add(state.velocity.clone().multiplyScalar(delta))
        state.rotation += state.angularVelocity * delta

        // Ground friction
        state.velocity.multiplyScalar(0.995)
        state.angularVelocity *= 0.96

        // Boundary
        const boundary = 30
        if (Math.abs(state.position.x) > boundary) {
            state.position.x = Math.sign(state.position.x) * boundary
            state.velocity.x *= -0.5
        }
        if (Math.abs(state.position.z) > boundary) {
            state.position.z = Math.sign(state.position.z) * boundary
            state.velocity.z *= -0.5
        }

        // Simulate body roll and pitch
        state.roll = -steering * speed * 0.02
        state.pitch = throttle > 0 ? -0.05 : throttle < 0 ? 0.05 : 0

        // Update vehicle group
        const group = $$(vehicleGroup)
        if (group) {
            group.position.copy(state.position)
            group.rotation.y = state.rotation
            group.rotation.z = state.roll
            group.rotation.x = state.pitch
        }

        // Update wheels
        const wheelRotationSpeed = speed * 0.3
        wheels.forEach((wheel, i) => {
            // Wheel rotation
            wheel.rotationSpeed = wheelRotationSpeed
            wheel.mesh.rotation.x += wheel.rotationSpeed * delta

            // Suspension simulation
            const suspensionTarget = Math.sin(time * 3 + i) * 0.02 * speed * 0.1
            wheel.suspensionVelocity += (suspensionTarget - wheel.suspensionOffset) * 0.1
            wheel.suspensionVelocity *= 0.9
            wheel.suspensionOffset += wheel.suspensionVelocity * delta

            wheel.mesh.position.y = 0.45 + wheel.suspensionOffset

            // Front wheel steering
            if (i < 2) {
                wheel.mesh.rotation.y = steering * 0.5
            }
        })
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x87ceeb)}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[25, 50, 25]} intensity={1} castShadow />

                {/* Vehicle */}
                <group ref={vehicleGroup} />

                {/* Ground with ramps */}
                <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                    <boxGeometry args={[70, 70, 0.1]} />
                    <meshStandardMaterial color={0x3d9140} />
                </mesh>

                {/* Ramp */}
                <mesh position={[15, 1, 0]} rotation={[0, 0, -0.2]}>
                    <boxGeometry args={[8, 0.2, 6]} />
                    <meshStandardMaterial color={0x666666} />
                </mesh>

                {/* Obstacles */}
                <mesh position={[-20, 1, -20]}>
                    <boxGeometry args={[4, 2, 4]} />
                    <meshStandardMaterial color={0x8b4513} />
                </mesh>
                <mesh position={[20, 1.5, 20]}>
                    <boxGeometry args={[6, 3, 6]} />
                    <meshStandardMaterial color={0x8b4513} />
                </mesh>

                {/* Trees */}
                {[
                    [-15, 0, 15],
                    [25, 0, -10],
                    [-25, 0, -25],
                    [10, 0, 25]
                ].map((pos, i) => (
                    <group key={i} position={pos as [number, number, number]}>
                        <mesh position={[0, 2, 0]}>
                            <cylinderGeometry args={[0.3, 0.5, 4, 8]} />
                            <meshStandardMaterial color={0x8b4513} />
                        </mesh>
                        <mesh position={[0, 4.5, 0]}>
                            <sphereGeometry args={[2, 8, 8]} />
                            <meshStandardMaterial color={0x228b22} />
                        </mesh>
                    </group>
                ))}
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={200} position={[0, 10, 15]} />
            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default Vehicle
