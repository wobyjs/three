/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, Vector3, Mesh, Line, BufferGeometry, LineBasicMaterial, Float32BufferAttribute } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of physics_rapier_joints from Three.js examples.
 * Demonstrates joint constraints with Rapier physics.
 *
 * Source: https://threejs.org/examples/physics_rapier_joints.html
 *
 * Key features:
 * - Revolute joints (hinges)
 * - Distance joints (chains)
 * - Spherical joints (ball sockets)
 *
 * Note: Simplified version without actual Rapier integration.
 * For full physics, use RAPIER.JointData.revolute/spherical.
 */

interface JointBody {
    mesh: THREE.Mesh
    position: Vector3
    velocity: Vector3
    anchor: Vector3
    restLength: number
    stiffness: number
    damping: number
}

interface Chain {
    bodies: JointBody[]
    anchorPosition: Vector3
}

export const Joints = () => {
    const chains: Chain[] = []
    const pendulums: JointBody[] = []
    const gravity = new Vector3(0, -9.81, 0)

    useEffect(() => {
        // Create chains
        for (let c = 0; c < 3; c++) {
            const chainBodies: JointBody[] = []
            const anchorX = -6 + c * 6
            const chainLength = 8 + c * 2
            const linkSize = 0.4

            for (let i = 0; i < chainLength; i++) {
                const mesh = new THREE.Mesh(
                    new THREE.SphereGeometry(linkSize * 0.4, 12, 12),
                    new THREE.MeshStandardMaterial({
                        color: new Color().setHSL(0.05 + c * 0.15, 0.7, 0.5),
                        metalness: 0.5,
                        roughness: 0.3
                    })
                )
                mesh.position.set(anchorX, 10 - i * linkSize * 1.5, 0)
                mesh.castShadow = true

                chainBodies.push({
                    mesh,
                    position: mesh.position.clone(),
                    velocity: new Vector3(),
                    anchor: i === 0 ? new Vector3(anchorX, 10, 0) : chainBodies[i - 1].position.clone(),
                    restLength: linkSize * 1.5,
                    stiffness: 150 + c * 50,
                    damping: 0.95
                })
            }

            chains.push({
                bodies: chainBodies,
                anchorPosition: new Vector3(anchorX, 10, 0)
            })
        }

        // Create pendulums (spherical joints)
        for (let p = 0; p < 4; p++) {
            const anchorX = -8 + p * 5.5
            const length = 3 + p * 1.5

            const mesh = new THREE.Mesh(
                new THREE.SphereGeometry(0.5, 16, 16),
                new THREE.MeshStandardMaterial({
                    color: new Color().setHSL(0.5 + p * 0.1, 0.7, 0.5),
                    metalness: 0.3,
                    roughness: 0.5
                })
            )
            mesh.position.set(anchorX, 8 - length, 0)
            mesh.castShadow = true

            pendulums.push({
                mesh,
                position: mesh.position.clone(),
                velocity: new Vector3(2 + p * 0.5, 0, 0),
                anchor: new Vector3(anchorX, 8, 0),
                restLength: length,
                stiffness: 80,
                damping: 0.99
            })
        }
    })

    useFrame((state) => {
        const delta = Math.min(state.clock?.getDelta() ?? 0.016, 0.02)
        const time = state.clock?.getElapsedTime() ?? 0

        // Update chains
        chains.forEach(chain => {
            chain.bodies.forEach((body, i) => {
                // Apply gravity
                body.velocity.add(gravity.clone().multiplyScalar(delta))

                // Distance constraint
                const anchor = i === 0 ? chain.anchorPosition : chain.bodies[i - 1].position
                const diff = body.position.clone().sub(anchor)
                const distance = diff.length()
                const correction = diff.normalize().multiplyScalar(
                    (distance - body.restLength) * body.stiffness * delta
                )
                body.velocity.sub(correction)

                // Update position
                body.position.add(body.velocity.clone().multiplyScalar(delta))
                body.mesh.position.copy(body.position)

                // Damping
                body.velocity.multiplyScalar(body.damping)
            })
        })

        // Update pendulums
        pendulums.forEach(body => {
            // Apply gravity
            body.velocity.add(gravity.clone().multiplyScalar(delta))

            // Distance constraint (spherical joint)
            const diff = body.position.clone().sub(body.anchor)
            const distance = diff.length()
            const correction = diff.normalize().multiplyScalar(
                (distance - body.restLength) * body.stiffness * delta
            )
            body.velocity.sub(correction)

            // Update position
            body.position.add(body.velocity.clone().multiplyScalar(delta))
            body.mesh.position.copy(body.position)

            // Damping
            body.velocity.multiplyScalar(body.damping)
        })
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[10, 20, 10]} intensity={1} castShadow />

                {/* Chains */}
                {chains.map((chain, ci) => (
                    <group key={`chain-${ci}`}>
                        {chain.bodies.map((body, i) => (
                            <primitive key={i} object={body.mesh} />
                        ))}
                        {/* Anchor point */}
                        <mesh position={chain.anchorPosition}>
                            <boxGeometry args={[0.4, 0.4, 0.4]} />
                            <meshStandardMaterial color={0x666666} metalness={0.8} roughness={0.2} />
                        </mesh>
                    </group>
                ))}

                {/* Pendulums */}
                {pendulums.map((body, i) => (
                    <group key={`pendulum-${i}`}>
                        <primitive object={body.mesh} />
                        {/* Anchor */}
                        <mesh position={body.anchor}>
                            <boxGeometry args={[0.3, 0.3, 0.3]} />
                            <meshStandardMaterial color={0x444444} />
                        </mesh>
                    </group>
                ))}

                {/* Support beam */}
                <mesh position={[0, 10.5, 0]}>
                    <boxGeometry args={[20, 0.3, 0.3]} />
                    <meshStandardMaterial color={0x555555} metalness={0.5} roughness={0.3} />
                </mesh>

                {/* Ground */}
                <mesh position={[0, -5, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                    <boxGeometry args={[25, 25, 0.1]} />
                    <meshStandardMaterial color={0x333344} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 5, 20]} />
            <orbitControls enableDamping target={[0, 2, 0]} />
        </canvas3D>
    )
}

export default Joints
