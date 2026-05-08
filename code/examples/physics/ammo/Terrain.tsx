/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, Vector3, PlaneGeometry, Mesh, Float32BufferAttribute } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/PlaneGeometry'
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
 * Port of physics_ammo_terrain from Three.js examples.
 * Demonstrates terrain collision with physics objects.
 *
 * Source: https://threejs.org/examples/physics_ammo_terrain.html
 *
 * Key features:
 * - Heightfield terrain collision
 * - Rolling objects on terrain
 * - Dynamic collision response
 *
 * Note: Simplified version without actual Ammo.js integration.
 * For full physics, use Ammo.btHeightfieldTerrainShape.
 */

interface PhysicsBall {
    mesh: THREE.Mesh
    velocity: Vector3
    radius: number
}

const TERRAIN_SIZE = 50
const TERRAIN_SEGMENTS = 64

export const Terrain = () => {
    const terrainMesh = $<THREE.Mesh>()
    const balls: PhysicsBall[] = []
    const heightData: number[][] = []
    const gravity = new Vector3(0, -15, 0)

    useEffect(() => {
        // Generate terrain height data
        for (let i = 0; i <= TERRAIN_SEGMENTS; i++) {
            heightData[i] = []
            for (let j = 0; j <= TERRAIN_SEGMENTS; j++) {
                const x = (i / TERRAIN_SEGMENTS - 0.5) * TERRAIN_SIZE
                const z = (j / TERRAIN_SEGMENTS - 0.5) * TERRAIN_SIZE
                // Create rolling hills
                heightData[i][j] = Math.sin(x * 0.1) * Math.cos(z * 0.1) * 3 +
                    Math.sin(x * 0.05 + z * 0.05) * 2
            }
        }

        // Create terrain geometry
        const geometry = new THREE.PlaneGeometry(
            TERRAIN_SIZE, TERRAIN_SIZE,
            TERRAIN_SEGMENTS, TERRAIN_SEGMENTS
        )
        geometry.rotateX(-Math.PI / 2)

        const positions = geometry.attributes.position.array as Float32Array
        for (let i = 0; i <= TERRAIN_SEGMENTS; i++) {
            for (let j = 0; j <= TERRAIN_SEGMENTS; j++) {
                const index = (i * (TERRAIN_SEGMENTS + 1) + j) * 3
                positions[index + 1] = heightData[i][j]
            }
        }

        geometry.computeVertexNormals()
        $$(terrainMesh)?.geometry.copy(geometry)

        // Create falling balls
        for (let i = 0; i < 30; i++) {
            const radius = 0.3 + Math.random() * 0.4
            const mesh = new THREE.Mesh(
                new THREE.SphereGeometry(radius, 16, 16),
                new THREE.MeshStandardMaterial({
                    color: new Color().setHSL(Math.random(), 0.7, 0.5),
                    metalness: 0.3,
                    roughness: 0.4
                })
            )
            mesh.position.set(
                (Math.random() - 0.5) * 20,
                15 + Math.random() * 10,
                (Math.random() - 0.5) * 20
            )
            mesh.castShadow = true

            balls.push({
                mesh,
                velocity: new Vector3(
                    (Math.random() - 0.5) * 2,
                    0,
                    (Math.random() - 0.5) * 2
                ),
                radius
            })
        }
    })

    const getTerrainHeight = (x: number, z: number): number => {
        const i = Math.floor((x / TERRAIN_SIZE + 0.5) * TERRAIN_SEGMENTS)
        const j = Math.floor((z / TERRAIN_SIZE + 0.5) * TERRAIN_SEGMENTS)

        if (i < 0 || i >= TERRAIN_SEGMENTS || j < 0 || j >= TERRAIN_SEGMENTS) {
            return 0
        }

        // Bilinear interpolation
        const fi = (x / TERRAIN_SIZE + 0.5) * TERRAIN_SEGMENTS - i
        const fj = (z / TERRAIN_SIZE + 0.5) * TERRAIN_SEGMENTS - j

        const h00 = heightData[i]?.[j] ?? 0
        const h10 = heightData[i + 1]?.[j] ?? 0
        const h01 = heightData[i]?.[j + 1] ?? 0
        const h11 = heightData[i + 1]?.[j + 1] ?? 0

        return h00 * (1 - fi) * (1 - fj) +
            h10 * fi * (1 - fj) +
            h01 * (1 - fi) * fj +
            h11 * fi * fj
    }

    const getTerrainNormal = (x: number, z: number): Vector3 => {
        const eps = 0.1
        const hL = getTerrainHeight(x - eps, z)
        const hR = getTerrainHeight(x + eps, z)
        const hD = getTerrainHeight(x, z - eps)
        const hU = getTerrainHeight(x, z + eps)

        return new Vector3(hL - hR, 2 * eps, hD - hU).normalize()
    }

    useFrame((state) => {
        const delta = Math.min(state.clock?.getDelta() ?? 0.016, 0.033)

        balls.forEach(ball => {
            // Apply gravity
            ball.velocity.add(gravity.clone().multiplyScalar(delta))

            // Update position
            ball.mesh.position.add(ball.velocity.clone().multiplyScalar(delta))

            // Terrain collision
            const terrainH = getTerrainHeight(ball.mesh.position.x, ball.mesh.position.z)
            if (ball.mesh.position.y < terrainH + ball.radius) {
                ball.mesh.position.y = terrainH + ball.radius

                const normal = getTerrainNormal(ball.mesh.position.x, ball.mesh.position.z)

                // Reflect velocity
                const dot = ball.velocity.dot(normal)
                ball.velocity.sub(normal.clone().multiplyScalar(2 * dot))
                ball.velocity.multiplyScalar(0.6) // Energy loss

                // Roll along terrain
                const rollForce = new Vector3(-normal.x, 0, -normal.z).multiplyScalar(5)
                ball.velocity.add(rollForce.multiplyScalar(delta))
            }

            // Bounds check
            if (Math.abs(ball.mesh.position.x) > TERRAIN_SIZE / 2 ||
                Math.abs(ball.mesh.position.z) > TERRAIN_SIZE / 2) {
                ball.mesh.position.set(
                    (Math.random() - 0.5) * 10,
                    20,
                    (Math.random() - 0.5) * 10
                )
                ball.velocity.set(0, 0, 0)
            }

            // Damping
            ball.velocity.multiplyScalar(0.999)
        })
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x87ceeb)}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[20, 40, 20]} intensity={1} castShadow />

                {/* Terrain */}
                <mesh ref={terrainMesh} receiveShadow>
                    <planeGeometry args={[TERRAIN_SIZE, TERRAIN_SIZE, TERRAIN_SEGMENTS, TERRAIN_SEGMENTS]} />
                    <meshStandardMaterial color={0x3d9140} flatShading side={THREE.DoubleSide} />
                </mesh>

                {/* Balls */}
                {balls.map((ball, i) => (
                    <primitive key={i} object={ball.mesh} />
                ))}
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={200} position={[30, 25, 30]} />
            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default Terrain
