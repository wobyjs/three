/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, PlaneGeometry } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_geometry_terrain from Three.js examples.
 * Demonstrates procedural terrain generation using noise.
 *
 * Source: https://threejs.org/examples/webgl_geometry_terrain.html
 *
 * Features:
 * - Heightmap-based terrain
 * - Procedural noise generation
 * - Vertex colors for terrain shading
 */

// Simple noise function
const noise = (x: number, y: number) => {
    const n = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453
    return n - Math.floor(n)
}

const fbm = (x: number, y: number, octaves: number) => {
    let value = 0
    let amplitude = 1
    let frequency = 1

    for (let i = 0; i < octaves; i++) {
        value += amplitude * (noise(x * frequency, y * frequency) * 2 - 1)
        amplitude *= 0.5
        frequency *= 2
    }

    return value
}

export const GeometryTerrain = () => {
    const meshRef = $<THREE.Mesh>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const mesh = $$(meshRef)
        if (mesh) {
            mesh.rotation.y = time * 0.05
        }
    })

    // Create terrain geometry
    const size = 100
    const segments = 100
    const geometry = new THREE.PlaneGeometry(size, size, segments, segments)

    const positions = geometry.attributes.position.array as Float32Array
    const colors = new Float32Array(positions.length)

    for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i]
        const y = positions[i + 1]

        // Generate height using fractal Brownian motion
        const height = fbm(x * 0.05, y * 0.05, 5) * 10
        positions[i + 2] = height

        // Color based on height
        const normalizedHeight = (height + 10) / 20
        const color = new THREE.Color()

        if (normalizedHeight < 0.3) {
            color.setHSL(0.6, 0.7, 0.3) // Water blue
        } else if (normalizedHeight < 0.5) {
            color.setHSL(0.3, 0.7, 0.4) // Grass green
        } else if (normalizedHeight < 0.7) {
            color.setHSL(0.1, 0.5, 0.4) // Mountain brown
        } else {
            color.setHSL(0, 0, 0.9) // Snow white
        }

        colors[i] = color.r
        colors[i + 1] = color.g
        colors[i + 2] = color.b
    }

    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    geometry.computeVertexNormals()

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x87ceeb)}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[50, 100, 50]} intensity={1} />

                <mesh ref={meshRef} geometry={geometry} rotation={[-Math.PI / 2, 0, 0]}>
                    <meshStandardMaterial vertexColors roughness={0.8} metalness={0.1} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={500} position={[0, 50, 80]} />

            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default GeometryTerrain