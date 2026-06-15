/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_terrain_dynamic

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const TerrainDynamic = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Dynamic terrain with height updates
        const geometry = new THREE.PlaneGeometry(20, 20, 100, 100)
        const positionAttr = geometry.attributes.position

        const material = new THREE.MeshStandardMaterial({
            color: 0x4a8f29,
            wireframe: false,
            flatShading: true,
        })

        const mesh = new THREE.Mesh(geometry, material)
        mesh.rotation.x = -Math.PI / 2
        scene.add(mesh)

        // Store original heights
        const originalHeights = new Float32Array(positionAttr.count)
        for (let i = 0; i < positionAttr.count; i++) {
            const x = positionAttr.getX(i)
            const y = positionAttr.getY(i)
            originalHeights[i] = Math.sin(x * 0.5) * Math.cos(y * 0.5) * 2
            positionAttr.setZ(i, originalHeights[i])
        }

        geometry.computeVertexNormals()

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()

            // Animate height
            for (let i = 0; i < positionAttr.count; i++) {
                const x = positionAttr.getX(i)
                const y = positionAttr.getY(i)
                const newHeight = originalHeights[i] + Math.sin(t + x * 0.5 + y * 0.5) * 0.5
                positionAttr.setZ(i, newHeight)
            }

            positionAttr.needsUpdate = true
            geometry.computeVertexNormals()
        }
        animate()

        return () => {
            scene.remove(mesh)
            geometry.dispose()
            material.dispose()
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 10, 20]} />
            <scene>
                <ambientLight intensity={0.4} />
                <directionalLight position={[10, 20, 10]} intensity={1} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
