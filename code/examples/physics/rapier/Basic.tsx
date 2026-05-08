/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, Vector3, Mesh } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of physics_rapier_basic from Three.js examples.
 * Demonstrates basic rigid body simulation with Rapier physics.
 *
 * Source: https://threejs.org/examples/physics_rapier_basic.html
 *
 * Key features:
 * - Rigid body dynamics
 * - Collision detection
 * - Gravity simulation
 *
 * Note: Simplified version without actual Rapier integration.
 * For full physics, install @dimforge/rapier3d-compat and use RAPIER.World.
 */

interface RigidBody {
    mesh: THREE.Mesh
    position: Vector3
    velocity: Vector3
    rotation: THREE.Euler
    angularVelocity: Vector3
    mass: number
    restitution: number
    shape: 'box' | 'sphere'
    size: number
}

export const Basic = () => {
    const bodies: RigidBody[] = []
    const gravity = new Vector3(0, -9.81, 0)
    const groundY = -5

    useEffect(() => {
        // Create variety of rigid bodies
        for (let i = 0; i < 25; i++) {
            const isBox = Math.random() > 0.5
            const size = 0.5 + Math.random() * 0.5

            const geometry = isBox
                ? new THREE.BoxGeometry(size, size, size)
                : new THREE.SphereGeometry(size * 0.5, 16, 16)

            const material = new THREE.MeshStandardMaterial({
                color: new Color().setHSL(Math.random(), 0.7, 0.5),
                metalness: 0.2,
                roughness: 0.6
            })

            const mesh = new THREE.Mesh(geometry, material)
            mesh.position.set(
                (Math.random() - 0.5) * 8,
                10 + Math.random() * 10,
                (Math.random() - 0.5) * 8
            )
            mesh.rotation.set(
                Math.random() * Math.PI,
                Math.random() * Math.PI,
                Math.random() * Math.PI
            )
            mesh.castShadow = true
            mesh.receiveShadow = true

            bodies.push({
                mesh,
                position: mesh.position.clone(),
                velocity: new Vector3(
                    (Math.random() - 0.5) * 2,
                    0,
                    (Math.random() - 0.5) * 2
                ),
                rotation: mesh.rotation.clone() as THREE.Euler,
                angularVelocity: new Vector3(
                    (Math.random() - 0.5) * 2,
                    (Math.random() - 0.5) * 2,
                    (Math.random() - 0.5) * 2
                ),
                mass: size * 2,
                restitution: 0.3 + Math.random() * 0.4,
                shape: isBox ? 'box' : 'sphere',
                size
            })
        }
    })

    useFrame((state) => {
        const delta = Math.min(state.clock?.getDelta() ?? 0.016, 0.033)

        bodies.forEach(body => {
            // Apply gravity
            body.velocity.add(gravity.clone().multiplyScalar(delta))

            // Update position
            body.position.add(body.velocity.clone().multiplyScalar(delta))

            // Update rotation
            body.rotation.x += body.angularVelocity.x * delta
            body.rotation.y += body.angularVelocity.y * delta
            body.rotation.z += body.angularVelocity.z * delta

            // Ground collision
            const groundThreshold = groundY + body.size * 0.5
            if (body.position.y < groundThreshold) {
                body.position.y = groundThreshold
                body.velocity.y *= -body.restitution
                body.velocity.x *= 0.9
                body.velocity.z *= 0.9
                body.angularVelocity.multiplyScalar(0.85)
            }

            // Wall collisions
            const wallDist = 8
            if (Math.abs(body.position.x) > wallDist) {
                body.position.x = Math.sign(body.position.x) * wallDist
                body.velocity.x *= -body.restitution
            }
            if (Math.abs(body.position.z) > wallDist) {
                body.position.z = Math.sign(body.position.z) * wallDist
                body.velocity.z *= -body.restitution
            }

            // Update mesh
            body.mesh.position.copy(body.position)
            body.mesh.rotation.copy(body.rotation)

            // Air resistance
            body.velocity.multiplyScalar(0.999)
            body.angularVelocity.multiplyScalar(0.998)
        })
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[10, 20, 10]} intensity={1} castShadow />

                {/* Physics objects */}
                {bodies.map((body, i) => (
                    <primitive key={i} object={body.mesh} />
                ))}

                {/* Ground */}
                <mesh position={[0, groundY, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                    <boxGeometry args={[18, 18, 0.1]} />
                    <meshStandardMaterial color={0x333344} />
                </mesh>

                {/* Walls */}
                <mesh position={[0, 0, -9]}>
                    <boxGeometry args={[18, 20, 0.1]} />
                    <meshStandardMaterial color={0x222233} />
                </mesh>
                <mesh position={[-9, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
                    <boxGeometry args={[18, 20, 0.1]} />
                    <meshStandardMaterial color={0x222233} />
                </mesh>
                <mesh position={[9, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
                    <boxGeometry args={[18, 20, 0.1]} />
                    <meshStandardMaterial color={0x222233} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[15, 12, 15]} />
            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default Basic
