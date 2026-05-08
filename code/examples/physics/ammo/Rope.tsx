/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, Vector3, CylinderGeometry, Mesh } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
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
 * Port of physics_ammo_rope from Three.js examples.
 * Demonstrates rope/chain simulation using soft body physics.
 *
 * Source: https://threejs.org/examples/physics_ammo_rope.html
 *
 * Key features:
 * - Rope soft body simulation
 * - Chain link constraints
 * - Pendulum dynamics
 *
 * Note: Simplified version without actual Ammo.js integration.
 * For full physics, use Ammo.btSoftBodyHelpers.CreateRope.
 */

interface RopeNode {
    position: Vector3
    previous: Vector3
    velocity: Vector3
    mass: number
    pinned: boolean
}

const ROPE_SEGMENTS = 30
const ROPE_LENGTH = 10
const SEGMENT_LENGTH = ROPE_LENGTH / ROPE_SEGMENTS

export const Rope = () => {
    const ropeNodes: RopeNode[] = []
    const ropeMeshes: THREE.Mesh[] = []
    const gravity = new Vector3(0, -9.8, 0)

    useEffect(() => {
        // Create rope nodes
        for (let i = 0; i <= ROPE_SEGMENTS; i++) {
            const t = i / ROPE_SEGMENTS
            const x = Math.sin(t * Math.PI * 0.5) * 3
            const y = 8 - t * ROPE_LENGTH

            ropeNodes.push({
                position: new Vector3(x, y, 0),
                previous: new Vector3(x, y, 0),
                velocity: new Vector3(),
                mass: 1,
                pinned: i === 0
            })

            // Create visual segment
            const mesh = new THREE.Mesh(
                new THREE.SphereGeometry(0.15, 8, 8),
                new THREE.MeshStandardMaterial({
                    color: new Color().setHSL(0.05, 0.7, 0.5),
                    metalness: 0.5,
                    roughness: 0.3
                })
            )
            mesh.position.copy(ropeNodes[i].position)
            ropeMeshes.push(mesh)
        }
    })

    const satisfyConstraints = () => {
        const stiffness = 0.8

        for (let iteration = 0; iteration < 10; iteration++) {
            for (let i = 0; i < ROPE_SEGMENTS; i++) {
                const nodeA = ropeNodes[i]
                const nodeB = ropeNodes[i + 1]

                const diff = nodeB.position.clone().sub(nodeA.position)
                const distance = diff.length()
                const correction = diff.normalize().multiplyScalar((distance - SEGMENT_LENGTH) * stiffness * 0.5)

                if (!nodeA.pinned) {
                    nodeA.position.add(correction)
                }
                if (!nodeB.pinned) {
                    nodeB.position.sub(correction)
                }
            }
        }
    }

    useFrame((state) => {
        const delta = Math.min(state.clock?.getDelta() ?? 0.016, 0.02)
        const time = state.clock?.getElapsedTime() ?? 0

        // Wind force
        const wind = new Vector3(
            Math.sin(time * 1.5) * 2 + Math.sin(time * 3) * 1,
            0,
            Math.cos(time * 2) * 1.5
        )

        // Verlet integration
        ropeNodes.forEach((node, i) => {
            if (node.pinned) return

            // Apply forces
            const acceleration = gravity.clone().add(wind.clone().multiplyScalar(0.3))

            // Verlet integration
            const velocity = node.position.clone().sub(node.previous)
            velocity.multiplyScalar(0.99) // Damping

            node.previous.copy(node.position)
            node.position.add(velocity)
            node.position.add(acceleration.multiplyScalar(delta * delta))
        })

        // Satisfy distance constraints
        satisfyConstraints()

        // Update visual meshes
        ropeNodes.forEach((node, i) => {
            ropeMeshes[i].position.copy(node.position)
        })
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[10, 20, 10]} intensity={1} castShadow />

                {/* Rope segments */}
                {ropeMeshes.map((mesh, i) => (
                    <primitive key={i} object={mesh} />
                ))}

                {/* Anchor point */}
                <mesh position={[0, 8, 0]}>
                    <cylinderGeometry args={[0.3, 0.3, 0.5, 16]} />
                    <meshStandardMaterial color={0x666666} metalness={0.8} roughness={0.2} />
                </mesh>

                {/* Support beam */}
                <mesh position={[0, 8.5, 0]}>
                    <boxGeometry args={[3, 0.3, 0.3]} />
                    <meshStandardMaterial color={0x444444} metalness={0.5} roughness={0.3} />
                </mesh>

                {/* Ground */}
                <mesh position={[0, -5, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                    <boxGeometry args={[20, 20, 0.1]} />
                    <meshStandardMaterial color={0x333333} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[8, 5, 8]} />
            <orbitControls enableDamping target={[0, 2, 0]} />
        </canvas3D>
    )
}

export default Rope
