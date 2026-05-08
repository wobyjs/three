/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, Vector3, Sphere, Mesh } from 'three'
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
 * Demonstrates physics joints and constraints.
 *
 * Source: https://threejs.org/examples/physics_rapier_joints.html
 *
 * Key features:
 * - Distance constraints (chains)
 * - Hinge joints (pendulums)
 * - Spring-like behavior
 *
 * Note: Simplified simulation without actual Rapier.
 */

interface JointBody {
    mesh: THREE.Mesh
    position: Vector3
    velocity: Vector3
    anchor?: Vector3
    restLength?: number
    stiffness?: number
}

export const PhysicsJoints = () => {
    const chainBodies: JointBody[] = []
    const pendulumBodies: JointBody[] = []

    useEffect(() => {
        // Create chain
        const chainLength = 10
        const linkSize = 0.5
        for (let i = 0; i < chainLength; i++) {
            const mesh = new THREE.Mesh(
                new THREE.SphereGeometry(linkSize * 0.4, 16, 16),
                new THREE.MeshStandardMaterial({ color: 0xff6b6b })
            )
            mesh.position.set(-5, 10 - i * linkSize * 2, 0)

            chainBodies.push({
                mesh,
                position: mesh.position.clone(),
                velocity: new Vector3(),
                anchor: i === 0 ? new Vector3(-5, 10, 0) : undefined,
                restLength: linkSize * 2,
                stiffness: 200
            })
        }

        // Create pendulums
        for (let p = 0; p < 3; p++) {
            const mesh = new THREE.Mesh(
                new THREE.SphereGeometry(0.5, 16, 16),
                new THREE.MeshStandardMaterial({
                    color: new Color().setHSL(p / 3, 0.7, 0.5)
                })
            )
            const anchorY = 8
            const length = 3 + p * 2
            mesh.position.set(5 + p * 2, anchorY - length, 0)

            pendulumBodies.push({
                mesh,
                position: mesh.position.clone(),
                velocity: new Vector3(2, 0, 0),
                anchor: new Vector3(5 + p * 2, anchorY, 0),
                restLength: length,
                stiffness: 100
            })
        }
    })

    useFrame((state) => {
        const delta = Math.min(state.clock?.getDelta() ?? 0.016, 0.02)
        const gravity = new Vector3(0, -9.8, 0)
        const time = state.clock?.getElapsedTime() ?? 0

        // Update chain
        chainBodies.forEach((body, i) => {
            // Apply gravity
            body.velocity.add(gravity.clone().multiplyScalar(delta))

            // Distance constraint to anchor or previous body
            const target = body.anchor ?? (i > 0 ? chainBodies[i - 1].position : null)
            if (target && body.restLength) {
                const diff = body.position.clone().sub(target)
                const distance = diff.length()
                const correction = diff.normalize().multiplyScalar(
                    (distance - body.restLength) * (body.stiffness ?? 100) * delta
                )
                body.velocity.sub(correction)
            }

            // Update position
            body.position.add(body.velocity.clone().multiplyScalar(delta))
            body.mesh.position.copy(body.position)

            // Damping
            body.velocity.multiplyScalar(0.99)
        })

        // Update pendulums
        pendulumBodies.forEach(body => {
            // Apply gravity
            body.velocity.add(gravity.clone().multiplyScalar(delta))

            // Distance constraint to anchor
            if (body.anchor && body.restLength) {
                const diff = body.position.clone().sub(body.anchor)
                const distance = diff.length()
                const correction = diff.normalize().multiplyScalar(
                    (distance - body.restLength) * (body.stiffness ?? 100) * delta
                )
                body.velocity.sub(correction)
            }

            // Update position
            body.position.add(body.velocity.clone().multiplyScalar(delta))
            body.mesh.position.copy(body.position)

            // Damping
            body.velocity.multiplyScalar(0.995)
        })
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[10, 20, 10]} intensity={1} />

                {/* Chain */}
                {chainBodies.map((body, i) => (
                    <primitive key={`chain-${i}`} object={body.mesh} />
                ))}

                {/* Pendulums */}
                {pendulumBodies.map((body, i) => (
                    <primitive key={`pendulum-${i}`} object={body.mesh} />
                ))}

                {/* Anchor points */}
                <mesh position={[-5, 10, 0]}>
                    <boxGeometry args={[0.5, 0.5, 0.5]} />
                    <meshStandardMaterial color={0x666666} />
                </mesh>
                {pendulumBodies.map((body, i) => (
                    <mesh key={`anchor-${i}`} position={body.anchor}>
                        <boxGeometry args={[0.3, 0.3, 0.3]} />
                        <meshStandardMaterial color={0x666666} />
                    </mesh>
                ))}

                {/* Ground */}
                <mesh position={[0, -5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <boxGeometry args={[20, 20, 0.1]} />
                    <meshStandardMaterial color={0x222222} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 5, 20]} />
            <orbitControls enableDamping target={[0, 2, 0]} />
        </canvas3D>
    )
}

export default PhysicsJoints
