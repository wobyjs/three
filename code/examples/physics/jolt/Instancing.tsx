/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, Vector3, InstancedMesh, Object3D, Matrix4 } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/CylinderGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of physics_jolt_instancing from Three.js examples.
 * Demonstrates instanced physics objects with Jolt.js.
 *
 * Source: https://threejs.org/examples/physics_jolt_instancing.html
 *
 * Key features:
 * - High-performance instanced rendering
 * - Per-instance physics simulation
 * - Sleep state optimization
 *
 * Note: Simplified version without actual Jolt.js integration.
 * For full physics, use Jolt.BodyInterface and Jolt.BodyCreationSettings.
 */

const INSTANCE_COUNT = 400
const dummy = new Object3D()

interface PhysicsBody {
    position: Vector3
    velocity: Vector3
    rotation: THREE.Euler
    angularVelocity: Vector3
    scale: number
    sleepTimer: number
    isSleeping: boolean
}

export const Instancing = () => {
    const boxMeshRef = $<InstancedMesh>()
    const cylMeshRef = $<InstancedMesh>()
    const bodies: PhysicsBody[] = []
    const gravity = new Vector3(0, -10, 0)

    useEffect(() => {
        for (let i = 0; i < INSTANCE_COUNT; i++) {
            const isBox = i % 2 === 0
            const scale = 0.3 + Math.random() * 0.5

            bodies.push({
                position: new Vector3(
                    (Math.random() - 0.5) * 20,
                    20 + Math.random() * 20,
                    (Math.random() - 0.5) * 20
                ),
                velocity: new Vector3(
                    (Math.random() - 0.5) * 2,
                    0,
                    (Math.random() - 0.5) * 2
                ),
                rotation: new THREE.Euler(
                    Math.random() * Math.PI,
                    Math.random() * Math.PI,
                    Math.random() * Math.PI
                ),
                angularVelocity: new Vector3(
                    (Math.random() - 0.5) * 2,
                    (Math.random() - 0.5) * 2,
                    (Math.random() - 0.5) * 2
                ),
                scale,
                sleepTimer: 0,
                isSleeping: false
            })
        }
    })

    useFrame((state) => {
        const boxMesh = $$(boxMeshRef)
        const cylMesh = $$(cylMeshRef)
        if (!boxMesh || !cylMesh) return

        const delta = Math.min(state.clock?.getDelta() ?? 0.016, 0.033)

        let boxIndex = 0
        let cylIndex = 0

        bodies.forEach((body, i) => {
            // Sleep optimization - skip physics for resting objects
            if (body.isSleeping) {
                if (i % 2 === 0) {
                    dummy.position.copy(body.position)
                    dummy.rotation.copy(body.rotation)
                    dummy.scale.setScalar(body.scale)
                    dummy.updateMatrix()
                    boxMesh.setMatrixAt(boxIndex++, dummy.matrix)
                } else {
                    dummy.position.copy(body.position)
                    dummy.rotation.copy(body.rotation)
                    dummy.scale.setScalar(body.scale)
                    dummy.updateMatrix()
                    cylMesh.setMatrixAt(cylIndex++, dummy.matrix)
                }
                return
            }

            // Apply gravity
            body.velocity.add(gravity.clone().multiplyScalar(delta))

            // Update position
            body.position.add(body.velocity.clone().multiplyScalar(delta))

            // Update rotation
            body.rotation.x += body.angularVelocity.x * delta
            body.rotation.y += body.angularVelocity.y * delta
            body.rotation.z += body.angularVelocity.z * delta

            // Ground collision
            if (body.position.y < -4 + body.scale) {
                body.position.y = -4 + body.scale
                body.velocity.y *= -0.3
                body.velocity.x *= 0.8
                body.velocity.z *= 0.8
                body.angularVelocity.multiplyScalar(0.7)
            }

            // Wall collisions
            if (Math.abs(body.position.x) > 12) {
                body.position.x = Math.sign(body.position.x) * 12
                body.velocity.x *= -0.4
            }
            if (Math.abs(body.position.z) > 12) {
                body.position.z = Math.sign(body.position.z) * 12
                body.velocity.z *= -0.4
            }

            // Check for sleep state
            const speed = body.velocity.length()
            if (speed < 0.1 && body.position.y < -3.5) {
                body.sleepTimer += delta
                if (body.sleepTimer > 2) {
                    body.isSleeping = true
                }
            } else {
                body.sleepTimer = 0
            }

            // Damping
            body.velocity.multiplyScalar(0.998)
            body.angularVelocity.multiplyScalar(0.995)

            // Update instance matrix
            dummy.position.copy(body.position)
            dummy.rotation.copy(body.rotation)
            dummy.scale.setScalar(body.scale)
            dummy.updateMatrix()

            if (i % 2 === 0) {
                boxMesh.setMatrixAt(boxIndex++, dummy.matrix)
            } else {
                cylMesh.setMatrixAt(cylIndex++, dummy.matrix)
            }
        })

        boxMesh.instanceMatrix.needsUpdate = true
        cylMesh.instanceMatrix.needsUpdate = true
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x0a0a0a)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[15, 25, 15]} intensity={1} castShadow />

                {/* Instanced boxes */}
                <instancedMesh ref={boxMeshRef} args={[undefined, undefined, INSTANCE_COUNT / 2]} castShadow>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color={0x45b7d1} metalness={0.4} roughness={0.3} />
                </instancedMesh>

                {/* Instanced cylinders */}
                <instancedMesh ref={cylMeshRef} args={[undefined, undefined, INSTANCE_COUNT / 2]} castShadow>
                    <cylinderGeometry args={[0.4, 0.4, 1, 8]} />
                    <meshStandardMaterial color={0xf7dc6f} metalness={0.4} roughness={0.3} />
                </instancedMesh>

                {/* Ground */}
                <mesh position={[0, -4.5, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                    <boxGeometry args={[26, 26, 0.1]} />
                    <meshStandardMaterial color={0x222222} />
                </mesh>

                {/* Walls */}
                <mesh position={[0, 0, -13]}>
                    <boxGeometry args={[26, 15, 0.1]} />
                    <meshStandardMaterial color={0x1a1a1a} />
                </mesh>
                <mesh position={[-13, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
                    <boxGeometry args={[26, 15, 0.1]} />
                    <meshStandardMaterial color={0x1a1a1a} />
                </mesh>
                <mesh position={[13, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
                    <boxGeometry args={[26, 15, 0.1]} />
                    <meshStandardMaterial color={0x1a1a1a} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[20, 15, 20]} />
            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default Instancing
