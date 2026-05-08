/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, Vector3, SphereGeometry, Mesh } from 'three'
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
 * Port of physics_ammo_volume from Three.js examples.
 * Demonstrates volume/soft body physics simulation.
 *
 * Source: https://threejs.org/examples/physics_ammo_volume.html
 *
 * Key features:
 * - Soft body volume simulation
 * - Deformable objects
 * - Pressure constraints
 *
 * Note: Simplified version without actual Ammo.js integration.
 * For full physics, use Ammo.btSoftBodyHelpers.CreateEllipsoid.
 */

interface SoftBodyNode {
    position: Vector3
    velocity: Vector3
    force: Vector3
    mass: number
}

interface SoftBody {
    nodes: SoftBodyNode[]
    mesh: THREE.Mesh
    restVolume: number
    pressure: number
}

const NODE_COUNT = 100
const RADIUS = 2

export const Volume = () => {
    const softBodies: SoftBody[] = []
    const gravity = new Vector3(0, -5, 0)
    const groundY = -5

    useEffect(() => {
        // Create soft bodies
        for (let b = 0; b < 3; b++) {
            const nodes: SoftBodyNode[] = []
            const centerOffset = new Vector3((b - 1) * 6, 8, 0)

            // Create nodes distributed on sphere surface
            for (let i = 0; i < NODE_COUNT; i++) {
                const phi = Math.acos(1 - 2 * (i + 0.5) / NODE_COUNT)
                const theta = Math.PI * (1 + Math.sqrt(5)) * i

                const x = RADIUS * Math.sin(phi) * Math.cos(theta)
                const y = RADIUS * Math.sin(phi) * Math.sin(theta)
                const z = RADIUS * Math.cos(phi)

                nodes.push({
                    position: new Vector3(x, y, z).add(centerOffset),
                    velocity: new Vector3(),
                    force: new Vector3(),
                    mass: 0.1
                })
            }

            // Create visual mesh (icosahedron for soft body look)
            const mesh = new THREE.Mesh(
                new THREE.IcosahedronGeometry(RADIUS, 2),
                new THREE.MeshStandardMaterial({
                    color: new Color().setHSL(b * 0.33, 0.7, 0.5),
                    metalness: 0.1,
                    roughness: 0.6,
                    transparent: true,
                    opacity: 0.8,
                    side: THREE.DoubleSide
                })
            )
            mesh.position.copy(centerOffset)
            mesh.castShadow = true

            softBodies.push({
                nodes,
                mesh,
                restVolume: (4 / 3) * Math.PI * Math.pow(RADIUS, 3),
                pressure: 100
            })
        }
    })

    const calculateVolume = (nodes: SoftBodyNode[]): number => {
        // Approximate volume using convex hull (simplified)
        let volume = 0
        const center = new Vector3()

        nodes.forEach(n => center.add(n.position))
        center.divideScalar(nodes.length)

        nodes.forEach(n => {
            const r = n.position.distanceTo(center)
            volume += (4 / 3) * Math.PI * Math.pow(r / 2, 3) / nodes.length
        })

        return volume
    }

    useFrame((state) => {
        const delta = Math.min(state.clock?.getDelta() ?? 0.016, 0.02)
        const time = state.clock?.getElapsedTime() ?? 0

        softBodies.forEach(body => {
            const center = new Vector3()
            body.nodes.forEach(n => center.add(n.position))
            center.divideScalar(body.nodes.length)

            // Calculate current volume
            const currentVolume = calculateVolume(body.nodes)
            const pressureForce = (body.restVolume - currentVolume) * body.pressure

            // Apply forces to each node
            body.nodes.forEach(node => {
                // Gravity
                node.force.copy(gravity)

                // Pressure (outward from center)
                const toNode = node.position.clone().sub(center)
                const distance = toNode.length()
                if (distance > 0.01) {
                    node.force.add(toNode.normalize().multiplyScalar(pressureForce * 0.1))
                }

                // Wind
                const wind = new Vector3(
                    Math.sin(time + center.x) * 2,
                    0,
                    Math.cos(time * 0.7 + center.z) * 1.5
                )
                node.force.add(wind.multiplyScalar(0.5))

                // Update velocity and position
                node.velocity.add(node.force.clone().multiplyScalar(delta / node.mass))
                node.position.add(node.velocity.clone().multiplyScalar(delta))

                // Ground collision
                if (node.position.y < groundY + 0.3) {
                    node.position.y = groundY + 0.3
                    node.velocity.y *= -0.4
                    node.velocity.x *= 0.8
                    node.velocity.z *= 0.8
                }

                // Damping
                node.velocity.multiplyScalar(0.98)
            })

            // Update mesh to approximate node positions
            const scale = 1 + Math.sin(time * 2) * 0.05
            body.mesh.scale.setScalar(scale)
            body.mesh.position.copy(center)
            body.mesh.rotation.y += delta * 0.5
        })
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[10, 20, 10]} intensity={1} castShadow />

                {/* Soft bodies */}
                {softBodies.map((body, i) => (
                    <primitive key={i} object={body.mesh} />
                ))}

                {/* Ground */}
                <mesh position={[0, groundY, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                    <boxGeometry args={[20, 20, 0.1]} />
                    <meshStandardMaterial color={0x333333} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[12, 8, 12]} />
            <orbitControls enableDamping target={[0, 2, 0]} />
        </canvas3D>
    )
}

export default Volume
