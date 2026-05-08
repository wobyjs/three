/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, Vector3, PlaneGeometry, Mesh } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/PlaneGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of physics_ammo_cloth from Three.js examples.
 * Demonstrates cloth simulation using soft body physics.
 *
 * Source: https://threejs.org/examples/physics_ammo_cloth.html
 *
 * Key features:
 * - Cloth soft body simulation
 * - Wind forces
 * - Gravity and constraints
 *
 * Note: Simplified version without actual Ammo.js integration.
 * For full physics, use Ammo.btSoftBodyHelpers.CreatePatch.
 */

interface ClothNode {
    position: Vector3
    previous: Vector3
    original: Vector3
    acceleration: Vector3
    mass: number
    pinned: boolean
}

const CLOTH_WIDTH = 20
const CLOTH_HEIGHT = 20
const CLOTH_SIZE = 10
const DAMPING = 0.03
const MASS = 0.1

export const Cloth = () => {
    const clothMesh = $<THREE.Mesh>()
    const clothGeometry = $<THREE.PlaneGeometry>()
    const nodes: ClothNode[] = []
    const restLengths: number[][] = []

    useEffect(() => {
        const geometry = new THREE.PlaneGeometry(CLOTH_SIZE, CLOTH_SIZE, CLOTH_WIDTH - 1, CLOTH_HEIGHT - 1)
        geometry.rotateX(-Math.PI / 2)

        const positions = geometry.attributes.position.array as Float32Array

        // Initialize cloth nodes
        for (let i = 0; i < CLOTH_HEIGHT; i++) {
            for (let j = 0; j < CLOTH_WIDTH; j++) {
                const index = i * CLOTH_WIDTH + j
                const x = positions[index * 3]
                const y = positions[index * 3 + 1]
                const z = positions[index * 3 + 2]

                nodes.push({
                    position: new Vector3(x, y, z),
                    previous: new Vector3(x, y, z),
                    original: new Vector3(x, y, z),
                    acceleration: new Vector3(0, 0, 0),
                    mass: MASS,
                    pinned: i === 0 // Pin top row
                })
            }
        }

        // Calculate rest lengths for structural springs
        for (let i = 0; i < CLOTH_HEIGHT; i++) {
            restLengths[i] = []
            for (let j = 0; j < CLOTH_WIDTH; j++) {
                const index = i * CLOTH_WIDTH + j
                let restLength = CLOTH_SIZE / (CLOTH_WIDTH - 1)

                // Diagonal springs have longer rest length
                if (i > 0 && j > 0) {
                    restLength = Math.sqrt(2) * CLOTH_SIZE / (CLOTH_WIDTH - 1)
                }

                restLengths[i][j] = restLength
            }
        }

        $$(clothGeometry)?.copy(geometry)
    })

    const satisfyConstraints = () => {
        const structuralStiffness = 50
        const shearStiffness = 30

        for (let iteration = 0; iteration < 5; iteration++) {
            // Structural constraints (horizontal and vertical)
            for (let i = 0; i < CLOTH_HEIGHT; i++) {
                for (let j = 0; j < CLOTH_WIDTH; j++) {
                    const index = i * CLOTH_WIDTH + j
                    const node = nodes[index]

                    // Horizontal neighbor
                    if (j < CLOTH_WIDTH - 1) {
                        const neighbor = nodes[index + 1]
                        const diff = neighbor.position.clone().sub(node.position)
                        const distance = diff.length()
                        const correction = diff.normalize().multiplyScalar((distance - restLengths[i][j]) * structuralStiffness * 0.01)

                        if (!node.pinned) node.position.add(correction.clone().multiplyScalar(-0.5))
                        if (!neighbor.pinned) neighbor.position.add(correction.clone().multiplyScalar(0.5))
                    }

                    // Vertical neighbor
                    if (i < CLOTH_HEIGHT - 1) {
                        const neighbor = nodes[index + CLOTH_WIDTH]
                        const diff = neighbor.position.clone().sub(node.position)
                        const distance = diff.length()
                        const correction = diff.normalize().multiplyScalar((distance - restLengths[i][j]) * structuralStiffness * 0.01)

                        if (!node.pinned) node.position.add(correction.clone().multiplyScalar(-0.5))
                        if (!neighbor.pinned) neighbor.position.add(correction.clone().multiplyScalar(0.5))
                    }
                }
            }
        }
    }

    useFrame((state) => {
        const delta = Math.min(state.clock?.getDelta() ?? 0.016, 0.033)
        const time = state.clock?.getElapsedTime() ?? 0

        const gravity = new Vector3(0, -9.8, 0)
        const wind = new Vector3(
            Math.sin(time * 0.5) * 2,
            0,
            Math.cos(time * 0.3) * 1.5
        )

        // Verlet integration
        nodes.forEach(node => {
            if (node.pinned) return

            // Apply forces
            node.acceleration.copy(gravity)
            node.acceleration.add(wind.clone().multiplyScalar(0.5 + Math.random() * 0.5))

            // Verlet integration
            const velocity = node.position.clone().sub(node.previous)
            velocity.multiplyScalar(1 - DAMPING)

            node.previous.copy(node.position)
            node.position.add(velocity)
            node.position.add(node.acceleration.clone().multiplyScalar(delta * delta))
        })

        // Satisfy constraints
        satisfyConstraints()

        // Update geometry
        const geometry = $$(clothGeometry)
        const mesh = $$(clothMesh)
        if (!geometry || !mesh) return

        const positions = geometry.attributes.position.array as Float32Array
        nodes.forEach((node, i) => {
            positions[i * 3] = node.position.x
            positions[i * 3 + 1] = node.position.y
            positions[i * 3 + 2] = node.position.z
        })
        geometry.attributes.position.needsUpdate = true
        geometry.computeVertexNormals()
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[10, 20, 10]} intensity={1} castShadow />

                {/* Cloth */}
                <mesh ref={clothMesh} castShadow receiveShadow>
                    <planeGeometry ref={clothGeometry} args={[CLOTH_SIZE, CLOTH_SIZE, CLOTH_WIDTH - 1, CLOTH_HEIGHT - 1]} />
                    <meshStandardMaterial color={0x4ecdc4} side={THREE.DoubleSide} metalness={0.1} roughness={0.8} />
                </mesh>

                {/* Pinned points (poles) */}
                <mesh position={[-CLOTH_SIZE / 2, CLOTH_SIZE / 2 + 5, 0]}>
                    <sphereGeometry args={[0.2, 16, 16]} />
                    <meshStandardMaterial color={0xff6b6b} />
                </mesh>
                <mesh position={[CLOTH_SIZE / 2, CLOTH_SIZE / 2 + 5, 0]}>
                    <sphereGeometry args={[0.2, 16, 16]} />
                    <meshStandardMaterial color={0xff6b6b} />
                </mesh>

                {/* Pole */}
                <mesh position={[0, 0, 0]}>
                    <boxGeometry args={[0.2, CLOTH_SIZE + 10, 0.2]} />
                    <meshStandardMaterial color={0x666666} />
                </mesh>

                {/* Ground */}
                <mesh position={[0, -CLOTH_SIZE / 2 - 3, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                    <boxGeometry args={[20, 20, 0.1]} />
                    <meshStandardMaterial color={0x333333} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 5, 15]} />
            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default Cloth
