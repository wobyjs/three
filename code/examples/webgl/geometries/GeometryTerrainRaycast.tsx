/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, PlaneGeometry, Raycaster, Vector2, Vector3 } from 'three'
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
 * Port of webgl_geometry_terrain_raycast from Three.js examples.
 * Demonstrates terrain with raycasting for mouse interaction.
 *
 * Source: https://threejs.org/examples/webgl_geometry_terrain_raycast.html
 *
 * Features:
 * - Terrain raycasting
 * - Mouse interaction
 * - Height detection
 */

// Simple noise function
const noise = (x: number, y: number) => {
    const n = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453
    return n - Math.floor(n)
}

export const GeometryTerrainRaycast = () => {
    const terrainRef = $<THREE.Mesh>()
    const markerRef = $<THREE.Mesh>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const terrain = $$(terrainRef)
        if (terrain) {
            terrain.rotation.y = time * 0.02
        }
    })

    // Create terrain geometry
    const size = 100
    const segments = 50
    const geometry = new THREE.PlaneGeometry(size, size, segments, segments)

    const positions = geometry.attributes.position.array as Float32Array

    for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i]
        const y = positions[i + 1]
        const height = noise(x * 0.1, y * 0.1) * 10 + noise(x * 0.05, y * 0.05) * 5
        positions[i + 2] = height
    }

    geometry.computeVertexNormals()

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x87ceeb)}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[50, 100, 50]} intensity={1} />

                {/* Terrain */}
                <mesh ref={terrainRef} geometry={geometry} rotation={[-Math.PI / 2, 0, 0]}>
                    <meshStandardMaterial color={0x3d9140} roughness={0.8} metalness={0.1} />
                </mesh>

                {/* Raycast marker */}
                <mesh ref={markerRef} position={[0, 10, 0]}>
                    <sphereGeometry args={[1, 16, 16]} />
                    <meshStandardMaterial color={0xff0000} roughness={0.3} metalness={0.7} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={500} position={[0, 50, 80]} />

            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default GeometryTerrainRaycast