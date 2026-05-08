/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, Vector3, InstancedMesh, Object3D, Matrix4 } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of physics_rapier_instancing from Three.js examples.
 * Demonstrates instanced physics objects with Rapier.
 *
 * Source: https://threejs.org/examples/physics_rapier_instancing.html
 *
 * Key features:
 * - High-performance instanced rendering
 * - Per-instance rigid body simulation
 * - Collision response
 *
 * Note: Simplified version without actual Rapier integration.
 * For full physics, use RAPIER.World with RAPIER.RigidBodyDesc.
 */

const INSTANCE_COUNT = 600
const dummy = new Object3D()

interface PhysicsBody {
    position: Vector3
    velocity: Vector3
    rotation: THREE.Euler
    angularVelocity: Vector3
    scale: number
}

export const Instancing = () => {
    const meshRef = $<InstancedMesh>()
    const bodies: PhysicsBody[] = []
    const gravity = new Vector3(0, -9.81, 0)

    useEffect(() => {
        for (let i = 0; i < INSTANCE_COUNT; i++) {
            const scale = 0.2 + Math.random() * 0.4

            bodies.push({
                position: new Vector3(
                    (Math.random() - 0.5) * 15,
                    20 + Math.random() * 20,
                    (Math.random() - 0.5) * 15
                ),
                velocity: new Vector3(
                    (Math.random() - 0.5) * 3,
                    0,
                    (Math.random() - 0.5) * 3
                ),
                rotation: new THREE.Euler(
                    Math.random() * Math.PI,
                    Math.random() * Math.PI,
                    Math.random() * Math.PI
                ),
                angularVelocity: new Vector3(
                    (Math.random() - 0.5) * 3,
                    (Math.random() - 0.5) * 3,
                    (Math.random() - 0.5) * 3
                ),
                scale
            })
        }
    })

    useFrame((state) => {
        const mesh = $$(meshRef)
        if (!mesh) return

        const delta = Math.min(state.clock?.getDelta() ?? 0.016, 0.033)

        bodies.forEach((body, i) => {
            // Apply gravity
            body.velocity.add(gravity.clone().multiplyScalar(delta))

            // Update position
            body.position.add(body.velocity.clone().multiplyScalar(delta))

            // Update rotation
            body.rotation.x += body.angularVelocity.x * delta
            body.rotation.y += body.angularVelocity.y * delta
            body.rotation.z += body.angularVelocity.z * delta

            // Ground collision
            if (body.position.y < -5 + body.scale) {
                body.position.y = -5 + body.scale
                body.velocity.y *= -0.5
                body.velocity.x *= 0.85
                body.velocity.z *= 0.85
                body.angularVelocity.multiplyScalar(0.8)
            }

            // Wall collisions
            if (Math.abs(body.position.x) > 10) {
                body.position.x = Math.sign(body.position.x) * 10
                body.velocity.x *= -0.5
            }
            if (Math.abs(body.position.z) > 10) {
                body.position.z = Math.sign(body.position.z) * 10
                body.velocity.z *= -0.5
            }

            // Damping
            body.velocity.multiplyScalar(0.999)
            body.angularVelocity.multiplyScalar(0.998)

            // Update instance matrix
            dummy.position.copy(body.position)
            dummy.rotation.copy(body.rotation)
            dummy.scale.setScalar(body.scale)
            dummy.updateMatrix()
            mesh.setMatrixAt(i, dummy.matrix)
        })

        mesh.instanceMatrix.needsUpdate = true
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x0a0a0a)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[15, 25, 15]} intensity={1} castShadow />

                {/* Instanced physics objects */}
                <instancedMesh ref={meshRef} args={[undefined, undefined, INSTANCE_COUNT]} castShadow>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color={0x4ecdc4} metalness={0.3} roughness={0.4} />
                </instancedMesh>

                {/* Ground */}
                <mesh position={[0, -5.5, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                    <boxGeometry args={[22, 22, 0.1]} />
                    <meshStandardMaterial color={0x222222} />
                </mesh>

                {/* Walls */}
                <mesh position={[0, 0, -11]}>
                    <boxGeometry args={[22, 25, 0.1]} />
                    <meshStandardMaterial color={0x1a1a1a} />
                </mesh>
                <mesh position={[-11, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
                    <boxGeometry args={[22, 25, 0.1]} />
                    <meshStandardMaterial color={0x1a1a1a} />
                </mesh>
                <mesh position={[11, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
                    <boxGeometry args={[22, 25, 0.1]} />
                    <meshStandardMaterial color={0x1a1a1a} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[18, 12, 18]} />
            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default Instancing
