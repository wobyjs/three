/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, Vector3, InstancedMesh, Object3D, Matrix4 } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of physics_ammo_instancing from Three.js examples.
 * Demonstrates instanced rigid bodies with physics simulation.
 *
 * Source: https://threejs.org/examples/physics_ammo_instancing.html
 *
 * Key features:
 * - InstancedMesh for efficient rendering
 * - Per-instance physics simulation
 * - Collision detection with ground and walls
 *
 * Note: Simplified version without actual Ammo.js integration.
 * For full physics, use Ammo.btRigidBody with motion states.
 */

const INSTANCE_COUNT = 300
const dummy = new Object3D()

interface PhysicsBody {
    position: Vector3
    velocity: Vector3
    rotation: THREE.Euler
    angularVelocity: Vector3
    scale: number
    shape: 'box' | 'sphere'
}

export const Instancing = () => {
    const meshRef = $<InstancedMesh>()
    const sphereRef = $<InstancedMesh>()
    const bodies: PhysicsBody[] = []
    const gravity = new Vector3(0, -12, 0)

    useEffect(() => {
        for (let i = 0; i < INSTANCE_COUNT; i++) {
            const isBox = i < INSTANCE_COUNT / 2
            const scale = 0.3 + Math.random() * 0.4

            bodies.push({
                position: new Vector3(
                    (Math.random() - 0.5) * 15,
                    15 + Math.random() * 15,
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
                    (Math.random() - 0.5) * 2,
                    (Math.random() - 0.5) * 2,
                    (Math.random() - 0.5) * 2
                ),
                scale,
                shape: isBox ? 'box' : 'sphere'
            })
        }
    })

    useFrame((state) => {
        const mesh = $$(meshRef)
        const sphereMesh = $$(sphereRef)
        if (!mesh || !sphereMesh) return

        const delta = Math.min(state.clock?.getDelta() ?? 0.016, 0.033)

        let boxIndex = 0
        let sphereIndex = 0

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
            if (body.position.y < -4 + body.scale) {
                body.position.y = -4 + body.scale
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

            // Update instance matrix
            dummy.position.copy(body.position)
            dummy.rotation.copy(body.rotation)
            dummy.scale.setScalar(body.scale)
            dummy.updateMatrix()

            if (body.shape === 'box') {
                mesh.setMatrixAt(boxIndex, dummy.matrix)
                boxIndex++
            } else {
                sphereMesh.setMatrixAt(sphereIndex, dummy.matrix)
                sphereIndex++
            }
        })

        mesh.instanceMatrix.needsUpdate = true
        sphereMesh.instanceMatrix.needsUpdate = true
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x0a0a0a)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[10, 20, 10]} intensity={1} castShadow />

                {/* Instanced boxes */}
                <instancedMesh ref={meshRef} args={[undefined, undefined, INSTANCE_COUNT / 2]} castShadow>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color={0x4ecdc4} metalness={0.3} roughness={0.4} />
                </instancedMesh>

                {/* Instanced spheres */}
                <instancedMesh ref={sphereRef} args={[undefined, undefined, INSTANCE_COUNT / 2]} castShadow>
                    <sphereGeometry args={[0.5, 16, 16]} />
                    <meshStandardMaterial color={0xff6b6b} metalness={0.3} roughness={0.4} />
                </instancedMesh>

                {/* Ground */}
                <mesh position={[0, -4.5, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                    <boxGeometry args={[22, 22, 0.1]} />
                    <meshStandardMaterial color={0x222222} />
                </mesh>

                {/* Walls */}
                <mesh position={[0, 0, -11]}>
                    <boxGeometry args={[22, 20, 0.1]} />
                    <meshStandardMaterial color={0x1a1a1a} />
                </mesh>
                <mesh position={[-11, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
                    <boxGeometry args={[22, 20, 0.1]} />
                    <meshStandardMaterial color={0x1a1a1a} />
                </mesh>
                <mesh position={[11, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
                    <boxGeometry args={[22, 20, 0.1]} />
                    <meshStandardMaterial color={0x1a1a1a} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[18, 12, 18]} />
            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default Instancing
