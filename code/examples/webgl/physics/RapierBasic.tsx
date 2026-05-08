/** @jsxImportSource @woby/three */

import { $, $$, useFrame, useEffect } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, PCFSoftShadowMap, ACESFilmicToneMapping } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/PlaneGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of physics_rapier_basic from Three.js examples.
 * Demonstrates basic physics simulation (simplified without external physics engine).
 *
 * Source: https://threejs.org/examples/physics_rapier_basic.html
 *
 * Key features:
 * - Simple gravity simulation
 * - Collision detection (basic)
 * - Bouncing objects
 *
 * Note: This is a simplified version without actual Rapier integration.
 * For full physics, install @dimforge/rapier3d
 */

interface PhysicsBody {
    mesh: THREE.Mesh
    velocity: THREE.Vector3
    radius: number
}

export const RapierBasic = () => {
    const bodiesRef = $<PhysicsBody[]>()

    useEffect(() => {
        const bodies: PhysicsBody[] = []

        // Create falling spheres
        for (let i = 0; i < 20; i++) {
            const geometry = new THREE.SphereGeometry(0.3, 16, 16)
            const material = new THREE.MeshStandardMaterial({
                color: new THREE.Color().setHSL(Math.random(), 0.7, 0.5),
                roughness: 0.3,
                metalness: 0.7
            })

            const mesh = new THREE.Mesh(geometry, material)
            mesh.position.set(
                (Math.random() - 0.5) * 6,
                5 + Math.random() * 5,
                (Math.random() - 0.5) * 6
            )
            mesh.castShadow = true
            mesh.receiveShadow = true

            bodies.push({
                mesh,
                velocity: new THREE.Vector3(
                    (Math.random() - 0.5) * 0.1,
                    0,
                    (Math.random() - 0.5) * 0.1
                ),
                radius: 0.3
            })
        }

        // Create falling boxes
        for (let i = 0; i < 10; i++) {
            const geometry = new THREE.BoxGeometry(0.4, 0.4, 0.4)
            const material = new THREE.MeshStandardMaterial({
                color: new THREE.Color().setHSL(Math.random(), 0.7, 0.5),
                roughness: 0.5,
                metalness: 0.5
            })

            const mesh = new THREE.Mesh(geometry, material)
            mesh.position.set(
                (Math.random() - 0.5) * 6,
                8 + Math.random() * 5,
                (Math.random() - 0.5) * 6
            )
            mesh.castShadow = true
            mesh.receiveShadow = true

            bodies.push({
                mesh,
                velocity: new THREE.Vector3(
                    (Math.random() - 0.5) * 0.1,
                    0,
                    (Math.random() - 0.5) * 0.1
                ),
                radius: 0.2
            })
        }

        bodiesRef(bodies)
    })

    useFrame(() => {
        const bodies = $$(bodiesRef)
        if (!bodies) return

        const gravity = -0.01
        const groundY = -2
        const damping = 0.98
        const bounce = 0.7

        bodies.forEach((body) => {
            // Apply gravity
            body.velocity.y += gravity

            // Update position
            body.mesh.position.add(body.velocity)

            // Ground collision
            if (body.mesh.position.y - body.radius < groundY) {
                body.mesh.position.y = groundY + body.radius
                body.velocity.y *= -bounce
                body.velocity.x *= damping
                body.velocity.z *= damping
            }

            // Wall collisions
            const wallLimit = 4
            if (Math.abs(body.mesh.position.x) > wallLimit) {
                body.mesh.position.x = Math.sign(body.mesh.position.x) * wallLimit
                body.velocity.x *= -bounce
            }
            if (Math.abs(body.mesh.position.z) > wallLimit) {
                body.mesh.position.z = Math.sign(body.mesh.position.z) * wallLimit
                body.velocity.z *= -bounce
            }

            // Rotation based on velocity
            body.mesh.rotation.x += body.velocity.z * 0.5
            body.mesh.rotation.z -= body.velocity.x * 0.5
        })
    })

    return (
        <canvas3D>
            <webGLRenderer
                antialias
                setPixelRatio={[window.devicePixelRatio]}
                setSize={[window.innerWidth, window.innerHeight]}
                toneMapping={ACESFilmicToneMapping}
                shadowMap-enabled
                shadowMap-type={PCFSoftShadowMap}
            />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.3} />
                <directionalLight
                    position={[5, 10, 5]}
                    intensity={1.5}
                    castShadow
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                />

                {/* Ground plane */}
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
                    <planeGeometry args={[10, 10]} />
                    <meshStandardMaterial color={0x333344} roughness={0.9} />
                </mesh>

                {/* Physics objects */}
                {() => {
                    const bodies = $$(bodiesRef)
                    if (!bodies) return null
                    return bodies.map((body, i) => (
                        <primitive key={i} object={body.mesh} />
                    ))
                }}
            </scene>

            <perspectiveCamera
                fov={50}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[8, 6, 8]}
            />
            <orbitControls target={[0, 0, 0]} enableDamping />
        </canvas3D>
    )
}

export default RapierBasic
