/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, Vector3, Quaternion, Matrix4 } from 'three'
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
 * Demonstrates basic physics simulation using Rapier physics engine.
 *
 * Source: https://threejs.org/examples/physics_rapier_basic.html
 *
 * Key features:
 * - Rigid body dynamics
 * - Collision detection
 * - Gravity simulation
 *
 * Note: This is a simplified version without actual Rapier integration.
 * For full physics, install @dimforge/rapier3d-compat
 */

interface PhysicsBody {
    mesh: THREE.Mesh
    velocity: Vector3
    angularVelocity: Vector3
    mass: number
}

export const PhysicsBasic = () => {
    const bodies: PhysicsBody[] = []
    const gravity = new Vector3(0, -9.8, 0)
    const ground = { y: -5, restitution: 0.7 }

    useEffect(() => {
        // Create falling objects
        for (let i = 0; i < 20; i++) {
            const mesh = new THREE.Mesh(
                new THREE.BoxGeometry(1, 1, 1),
                new THREE.MeshStandardMaterial({
                    color: new Color().setHSL(Math.random(), 0.7, 0.5)
                })
            )
            mesh.position.set(
                (Math.random() - 0.5) * 10,
                10 + Math.random() * 10,
                (Math.random() - 0.5) * 10
            )
            mesh.rotation.set(
                Math.random() * Math.PI,
                Math.random() * Math.PI,
                Math.random() * Math.PI
            )

            bodies.push({
                mesh,
                velocity: new Vector3(
                    (Math.random() - 0.5) * 2,
                    0,
                    (Math.random() - 0.5) * 2
                ),
                angularVelocity: new Vector3(
                    (Math.random() - 0.5) * 2,
                    (Math.random() - 0.5) * 2,
                    (Math.random() - 0.5) * 2
                ),
                mass: 1
            })
        }
    })

    useFrame((state) => {
        const delta = Math.min(state.clock?.getDelta() ?? 0.016, 0.05)

        bodies.forEach(body => {
            // Apply gravity
            body.velocity.add(gravity.clone().multiplyScalar(delta))

            // Update position
            body.mesh.position.add(body.velocity.clone().multiplyScalar(delta))

            // Update rotation
            body.mesh.rotation.x += body.angularVelocity.x * delta
            body.mesh.rotation.y += body.angularVelocity.y * delta
            body.mesh.rotation.z += body.angularVelocity.z * delta

            // Ground collision
            if (body.mesh.position.y < ground.y + 0.5) {
                body.mesh.position.y = ground.y + 0.5
                body.velocity.y *= -ground.restitution
                body.velocity.x *= 0.95
                body.velocity.z *= 0.95
                body.angularVelocity.multiplyScalar(0.9)
            }

            // Wall collisions
            if (Math.abs(body.mesh.position.x) > 10) {
                body.mesh.position.x = Math.sign(body.mesh.position.x) * 10
                body.velocity.x *= -ground.restitution
            }
            if (Math.abs(body.mesh.position.z) > 10) {
                body.mesh.position.z = Math.sign(body.mesh.position.z) * 10
                body.velocity.z *= -ground.restitution
            }
        })
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[10, 20, 10]} intensity={1} castShadow />

                {/* Physics objects */}
                {bodies.map((body, i) => (
                    <primitive key={i} object={body.mesh} />
                ))}

                {/* Ground */}
                <mesh position={[0, ground.y, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                    <boxGeometry args={[20, 20, 0.1]} />
                    <meshStandardMaterial color={0x333333} />
                </mesh>

                {/* Walls */}
                <mesh position={[0, 0, -10]}>
                    <boxGeometry args={[20, 20, 0.1]} />
                    <meshStandardMaterial color={0x222222} />
                </mesh>
                <mesh position={[-10, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
                    <boxGeometry args={[20, 20, 0.1]} />
                    <meshStandardMaterial color={0x222222} />
                </mesh>
                <mesh position={[10, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
                    <boxGeometry args={[20, 20, 0.1]} />
                    <meshStandardMaterial color={0x222222} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[15, 15, 15]} />
            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default PhysicsBasic
