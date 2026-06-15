/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_geometry_minecraft

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const GeometryMinecraft = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Minecraft-style voxel terrain
        const group = new THREE.Group()

        // Simple terrain generator
        const heightMap: number[][] = []
        const size = 20

        for (let x = 0; x < size; x++) {
            heightMap[x] = []
            for (let z = 0; z < size; z++) {
                // Simple height variation
                heightMap[x][z] = Math.floor(
                    Math.sin(x * 0.3) * Math.cos(z * 0.3) * 3 + 3
                )
            }
        }

        // Create blocks
        const blockGeom = new THREE.BoxGeometry(1, 1, 1)
        const grassColors = [0x4a8f29, 0x3d7a23, 0x5ca636]

        for (let x = 0; x < size; x++) {
            for (let z = 0; z < size; z++) {
                const height = heightMap[x][z]

                for (let y = 0; y <= height; y++) {
                    const blockMat = new THREE.MeshLambertMaterial({
                        color: y === height ? grassColors[Math.floor(Math.random() * grassColors.length)] : 0x8b6914
                    })
                    const block = new THREE.Mesh(blockGeom, blockMat)
                    block.position.set(x - size / 2, y, z - size / 2)
                    group.add(block)
                }
            }
        }

        scene.add(group)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            group.rotation.y = t * 0.05
        }
        animate()

        return () => {
            scene.remove(group)
            blockGeom.dispose()
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 15, 20]} />
            <scene>
                <ambientLight intensity={0.4} />
                <directionalLight position={[10, 20, 10]} intensity={1} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
