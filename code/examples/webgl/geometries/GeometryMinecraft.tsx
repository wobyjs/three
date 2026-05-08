/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_geometry_minecraft from Three.js examples.
 * Demonstrates Minecraft-style voxel/block geometry.
 *
 * Source: https://threejs.org/examples/webgl_geometry_minecraft.html
 *
 * Features:
 * - Voxel-style terrain
 * - Multiple block types
 * - Simple procedural generation
 */

export const GeometryMinecraft = () => {
    const groupRef = $<THREE.Group>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const group = $$(groupRef)
        if (group) {
            group.rotation.y = time * 0.1
        }
    })

    // Generate Minecraft-style terrain
    const blocks: { position: [number, number, number], color: number }[] = []
    const size = 16

    for (let x = -size; x <= size; x++) {
        for (let z = -size; z <= size; z++) {
            // Simple height function
            const height = Math.floor(
                Math.sin(x * 0.3) * 2 +
                Math.cos(z * 0.3) * 2 +
                Math.sin((x + z) * 0.2) * 1.5 + 3
            )

            // Determine block type based on height
            let color: number
            if (height < 2) {
                color = 0x3b82f6 // Water blue
            } else if (height < 4) {
                color = 0x22c55e // Grass green
            } else if (height < 6) {
                color = 0x84cc16 // Light green
            } else {
                color = 0xffffff // Snow white
            }

            blocks.push({ position: [x, height, z], color })

            // Add some depth
            for (let y = height - 1; y >= height - 2; y--) {
                blocks.push({ position: [x, y, z], color: 0x8b4513 }) // Dirt brown
            }
        }
    }

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x87ceeb)}>
                <ambientLight intensity={0.6} />
                <directionalLight position={[5, 10, 7]} intensity={0.8} />

                <group ref={groupRef}>
                    {blocks.slice(0, 500).map((block, i) => (
                        <mesh key={i} position={block.position}>
                            <boxGeometry args={[1, 1, 1]} />
                            <meshStandardMaterial color={block.color} roughness={0.8} metalness={0.1} />
                        </mesh>
                    ))}
                </group>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[20, 20, 20]} />

            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default GeometryMinecraft