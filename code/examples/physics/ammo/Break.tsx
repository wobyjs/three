/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, Vector3, Mesh, BufferGeometry, Float32BufferAttribute, BufferAttribute } from 'three'
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
 * Port of physics_ammo_break from Three.js examples.
 * Demonstrates breakable objects with fracture simulation.
 *
 * Source: https://threejs.org/examples/physics_ammo_break.html
 *
 * Key features:
 * - Object fracturing on impact
 * - Debris physics
 * - Collision-triggered breakage
 *
 * Note: Simplified version without actual Ammo.js integration.
 * For full physics, install ammo.js and use Ammo.btDiscreteDynamicsWorld.
 */

interface Fragment {
    mesh: THREE.Mesh
    velocity: Vector3
    angularVelocity: Vector3
    active: boolean
    breakTime: number
}

export const Break = () => {
    const fragments: Fragment[] = []
    const gravity = new Vector3(0, -15, 0)
    const groundY = -5
    let broken = false

    useEffect(() => {
        // Create initial unbroken object (a tower of blocks)
        const blockSize = 1
        const towerHeight = 8
        const towerWidth = 3

        for (let y = 0; y < towerHeight; y++) {
            for (let x = 0; x < towerWidth; x++) {
                for (let z = 0; z < towerWidth; z++) {
                    const mesh = new THREE.Mesh(
                        new THREE.BoxGeometry(blockSize * 0.95, blockSize * 0.95, blockSize * 0.95),
                        new THREE.MeshStandardMaterial({
                            color: new Color().setHSL(0.05 + y * 0.05, 0.7, 0.5),
                            metalness: 0.1,
                            roughness: 0.8
                        })
                    )
                    mesh.position.set(
                        (x - 1) * blockSize,
                        groundY + 0.5 + y * blockSize,
                        (z - 1) * blockSize
                    )
                    mesh.castShadow = true
                    mesh.receiveShadow = true

                    fragments.push({
                        mesh,
                        velocity: new Vector3(0, 0, 0),
                        angularVelocity: new Vector3(0, 0, 0),
                        active: false,
                        breakTime: 0
                    })
                }
            }
        }
    })

    // Simulate impact after delay
    useEffect(() => {
        const timer = setTimeout(() => {
            broken = true
            fragments.forEach((frag, i) => {
                frag.active = true
                frag.velocity = new Vector3(
                    (Math.random() - 0.5) * 8,
                    Math.random() * 5,
                    (Math.random() - 0.5) * 8
                )
                frag.angularVelocity = new Vector3(
                    (Math.random() - 0.5) * 5,
                    (Math.random() - 0.5) * 5,
                    (Math.random() - 0.5) * 5
                )
                frag.breakTime = Date.now()
            })
        }, 2000)

        return () => clearTimeout(timer)
    })

    useFrame((state) => {
        const delta = Math.min(state.clock?.getDelta() ?? 0.016, 0.033)

        fragments.forEach(frag => {
            if (!frag.active) return

            // Apply gravity
            frag.velocity.add(gravity.clone().multiplyScalar(delta))

            // Update position
            frag.mesh.position.add(frag.velocity.clone().multiplyScalar(delta))

            // Update rotation
            frag.mesh.rotation.x += frag.angularVelocity.x * delta
            frag.mesh.rotation.y += frag.angularVelocity.y * delta
            frag.mesh.rotation.z += frag.angularVelocity.z * delta

            // Ground collision
            if (frag.mesh.position.y < groundY + 0.5) {
                frag.mesh.position.y = groundY + 0.5
                frag.velocity.y *= -0.4
                frag.velocity.x *= 0.7
                frag.velocity.z *= 0.7
                frag.angularVelocity.multiplyScalar(0.7)
            }

            // Wall collisions
            if (Math.abs(frag.mesh.position.x) > 10) {
                frag.mesh.position.x = Math.sign(frag.mesh.position.x) * 10
                frag.velocity.x *= -0.5
            }
            if (Math.abs(frag.mesh.position.z) > 10) {
                frag.mesh.position.z = Math.sign(frag.mesh.position.z) * 10
                frag.velocity.z *= -0.5
            }

            // Damping
            frag.velocity.multiplyScalar(0.998)
            frag.angularVelocity.multiplyScalar(0.995)
        })
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[10, 20, 10]} intensity={1} castShadow />

                {/* Tower fragments */}
                {fragments.map((frag, i) => (
                    <primitive key={i} object={frag.mesh} />
                ))}

                {/* Ground */}
                <mesh position={[0, groundY, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                    <boxGeometry args={[25, 25, 0.1]} />
                    <meshStandardMaterial color={0x333333} />
                </mesh>

                {/* Impact indicator */}
                {!broken && (
                    <mesh position={[0, groundY + towerHeight + 2, 0]}>
                        <sphereGeometry args={[0.3, 16, 16]} />
                        <meshStandardMaterial color={0xff4444} emissive={0xff0000} emissiveIntensity={0.5} />
                    </mesh>
                )}
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[15, 10, 15]} />
            <orbitControls enableDamping target={[0, 2, 0]} />
        </canvas3D>
    )
}

export default Break
