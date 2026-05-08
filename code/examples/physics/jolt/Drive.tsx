/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, Vector3, Group, Mesh, Quaternion } from 'three'
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
 * Port of physics_jolt_drive from Three.js examples.
 * Demonstrates vehicle driving simulation with physics.
 *
 * Source: https://threejs.org/examples/physics_jolt_drive.html
 *
 * Key features:
 * - Vehicle dynamics
 * - Wheel physics
 * - Steering and throttle control
 *
 * Note: Simplified version without actual Jolt.js integration.
 * For full physics, use Jolt.VehicleConstraint and Jolt.VehicleCollisionTester.
 */

interface Wheel {
    mesh: THREE.Mesh
    rotation: number
    steeringAngle: number
}

interface Vehicle {
    body: THREE.Group
    wheels: Wheel[]
    position: Vector3
    velocity: Vector3
    rotation: number
    angularVelocity: number
    steering: number
    throttle: number
    brake: number
}

export const Drive = () => {
    const vehicleRef = $<THREE.Group>()
    const vehicle: Vehicle = {
        body: new THREE.Group(),
        wheels: [],
        position: new Vector3(0, 1, 0),
        velocity: new Vector3(),
        rotation: 0,
        angularVelocity: 0,
        steering: 0,
        throttle: 0,
        brake: 0
    }

    const keys: { [key: string]: boolean } = {}

    useEffect(() => {
        // Create vehicle body
        const bodyMesh = new THREE.Mesh(
            new THREE.BoxGeometry(2, 0.8, 4),
            new THREE.MeshStandardMaterial({ color: 0x4ecdc4, metalness: 0.6, roughness: 0.4 })
        )
        bodyMesh.position.y = 0.5
        bodyMesh.castShadow = true
        vehicle.body.add(bodyMesh)

        // Cabin
        const cabin = new THREE.Mesh(
            new THREE.BoxGeometry(1.8, 0.6, 2),
            new THREE.MeshStandardMaterial({ color: 0x333333, metalness: 0.3, roughness: 0.5 })
        )
        cabin.position.set(0, 1.1, -0.3)
        cabin.castShadow = true
        vehicle.body.add(cabin)

        // Create wheels
        const wheelPositions = [
            { x: -1, y: 0, z: 1.3 },   // Front left
            { x: 1, y: 0, z: 1.3 },    // Front right
            { x: -1, y: 0, z: -1.3 },  // Rear left
            { x: 1, y: 0, z: -1.3 }    // Rear right
        ]

        wheelPositions.forEach((pos, i) => {
            const wheelMesh = new THREE.Mesh(
                new THREE.CylinderGeometry(0.4, 0.4, 0.3, 16),
                new THREE.MeshStandardMaterial({ color: 0x222222, metalness: 0.2, roughness: 0.8 })
            )
            wheelMesh.rotation.z = Math.PI / 2
            wheelMesh.position.set(pos.x, pos.y, pos.z)
            wheelMesh.castShadow = true
            vehicle.body.add(wheelMesh)

            vehicle.wheels.push({
                mesh: wheelMesh,
                rotation: 0,
                steeringAngle: 0
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

        // Input handling
        vehicle.steering = 0
        vehicle.throttle = 0
        vehicle.brake = 0

        if (keys['a'] || keys['arrowleft']) vehicle.steering = 0.5
        if (keys['d'] || keys['arrowright']) vehicle.steering = -0.5
        if (keys['w'] || keys['arrowup']) vehicle.throttle = 20
        if (keys['s'] || keys['arrowdown']) vehicle.throttle = -15
        if (keys[' ']) vehicle.brake = 1

        // Apply steering
        const speed = vehicle.velocity.length()
        vehicle.angularVelocity += vehicle.steering * speed * 0.01 * delta

        // Apply throttle
        const forward = new Vector3(0, 0, -1).applyAxisAngle(new Vector3(0, 1, 0), vehicle.rotation)
        vehicle.velocity.add(forward.multiplyScalar(vehicle.throttle * delta))

        // Apply braking
        if (vehicle.brake > 0) {
            vehicle.velocity.multiplyScalar(0.95)
        }

        // Update position
        vehicle.position.add(vehicle.velocity.clone().multiplyScalar(delta))
        vehicle.rotation += vehicle.angularVelocity * delta

        // Ground friction
        vehicle.velocity.multiplyScalar(0.99)
        vehicle.angularVelocity *= 0.95

        // Boundary check
        const boundary = 25
        if (Math.abs(vehicle.position.x) > boundary) {
            vehicle.position.x = Math.sign(vehicle.position.x) * boundary
            vehicle.velocity.x *= -0.5
        }
        if (Math.abs(vehicle.position.z) > boundary) {
            vehicle.position.z = Math.sign(vehicle.position.z) * boundary
            vehicle.velocity.z *= -0.5
        }

        // Update vehicle body
        vehicle.body.position.copy(vehicle.position)
        vehicle.body.rotation.y = vehicle.rotation

        // Update wheel rotation based on speed
        const wheelRotationSpeed = speed * 0.5
        vehicle.wheels.forEach((wheel, i) => {
            wheel.rotation += wheelRotationSpeed * delta
            wheel.mesh.rotation.x = wheel.rotation

            // Front wheel steering
            if (i < 2) {
                wheel.mesh.rotation.y = vehicle.steering * 0.3
            }
        })
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x87ceeb)}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[20, 40, 20]} intensity={1} castShadow />

                {/* Vehicle */}
                <primitive ref={vehicleRef} object={vehicle.body} />

                {/* Ground - track */}
                <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                    <boxGeometry args={[60, 60, 0.1]} />
                    <meshStandardMaterial color={0x3d9140} />
                </mesh>

                {/* Track barriers */}
                <mesh position={[0, 0.5, -28]}>
                    <boxGeometry args={[60, 1, 0.5]} />
                    <meshStandardMaterial color={0xff6b6b} />
                </mesh>
                <mesh position={[0, 0.5, 28]}>
                    <boxGeometry args={[60, 1, 0.5]} />
                    <meshStandardMaterial color={0xff6b6b} />
                </mesh>
                <mesh position={[-28, 0.5, 0]} rotation={[0, Math.PI / 2, 0]}>
                    <boxGeometry args={[60, 1, 0.5]} />
                    <meshStandardMaterial color={0xff6b6b} />
                </mesh>
                <mesh position={[28, 0.5, 0]} rotation={[0, Math.PI / 2, 0]}>
                    <boxGeometry args={[60, 1, 0.5]} />
                    <meshStandardMaterial color={0xff6b6b} />
                </mesh>

                {/* Obstacles */}
                <mesh position={[10, 0.75, 10]}>
                    <boxGeometry args={[2, 1.5, 2]} />
                    <meshStandardMaterial color={0x666666} />
                </mesh>
                <mesh position={[-10, 0.75, -10]}>
                    <boxGeometry args={[2, 1.5, 2]} />
                    <meshStandardMaterial color={0x666666} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={200} position={[0, 15, 20]} />
            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default Drive
