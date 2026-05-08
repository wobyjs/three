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
 * Port of physics_ammo_instancing from Three.js examples.
 * Demonstrates instanced physics simulation (simplified).
 *
 * Source: https://threejs.org/examples/physics_ammo_instancing.html
 *
 * Key features:
 * - InstancedMesh for many physics objects
 * - Efficient rendering of many bodies
 * - Simple collision response
 *
 * Note: This is a simplified version without actual Ammo.js integration.
 */

const INSTANCE_COUNT = 500

export const AmmoInstancing = () => {
    const meshRef = $<THREE.InstancedMesh>()
    const velocitiesRef = $<Float32Array>()

    useEffect(() => {
        const geometry = new THREE.SphereGeometry(0.15, 8, 8)
        const material = new THREE.MeshStandardMaterial({
            color: 0x4ecdc4,
            roughness: 0.3,
            metalness: 0.7
        })

        const mesh = new THREE.InstancedMesh(geometry, material, INSTANCE_COUNT)
        mesh.castShadow = true
        mesh.receiveShadow = true

        const matrix = new THREE.Matrix4()
        const velocities = new Float32Array(INSTANCE_COUNT * 3)

        for (let i = 0; i < INSTANCE_COUNT; i++) {
            // Random initial positions
            const x = (Math.random() - 0.5) * 10
            const y = Math.random() * 10 + 5
            const z = (Math.random() - 0.5) * 10

            matrix.setPosition(x, y, z)
            mesh.setMatrixAt(i, matrix)

            // Random colors
            const color = new THREE.Color().setHSL(Math.random(), 0.7, 0.5)
            mesh.setColorAt(i, color)

            // Initial velocities
            velocities[i * 3] = (Math.random() - 0.5) * 0.05
            velocities[i * 3 + 1] = 0
            velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.05
        }

        mesh.instanceMatrix.needsUpdate = true
        if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true

        meshRef(mesh)
        velocitiesRef(velocities)
    })

    useFrame(() => {
        const mesh = $$(meshRef)
        const velocities = $$(velocitiesRef)
        if (!mesh || !velocities) return

        const matrix = new THREE.Matrix4()
        const position = new THREE.Vector3()
        const gravity = -0.005
        const groundY = -2
        const bounce = 0.6
        const damping = 0.99

        for (let i = 0; i < INSTANCE_COUNT; i++) {
            mesh.getMatrixAt(i, matrix)
            position.setFromMatrixPosition(matrix)

            // Apply gravity
            velocities[i * 3 + 1] += gravity

            // Update position
            position.x += velocities[i * 3]
            position.y += velocities[i * 3 + 1]
            position.z += velocities[i * 3 + 2]

            // Ground collision
            if (position.y < groundY + 0.15) {
                position.y = groundY + 0.15
                velocities[i * 3 + 1] *= -bounce
                velocities[i * 3] *= damping
                velocities[i * 3 + 2] *= damping
            }

            // Wall collisions
            const wallLimit = 5
            if (Math.abs(position.x) > wallLimit) {
                position.x = Math.sign(position.x) * wallLimit
                velocities[i * 3] *= -bounce
            }
            if (Math.abs(position.z) > wallLimit) {
                position.z = Math.sign(position.z) * wallLimit
                velocities[i * 3 + 2] *= -bounce
            }

            matrix.setPosition(position)
            mesh.setMatrixAt(i, matrix)
        }

        mesh.instanceMatrix.needsUpdate = true
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
                    <planeGeometry args={[12, 12]} />
                    <meshStandardMaterial color={0x333344} roughness={0.9} />
                </mesh>

                {/* Instanced mesh */}
                {() => {
                    const mesh = $$(meshRef)
                    return mesh ? <primitive object={mesh} /> : null
                }}
            </scene>

            <perspectiveCamera
                fov={50}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[10, 8, 10]}
            />
            <orbitControls target={[0, 0, 0]} enableDamping />
        </canvas3D>
    )
}

export default AmmoInstancing
