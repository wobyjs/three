/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_terrain_stitch

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const TerrainStitch = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Stitched terrain chunks
        const chunks: THREE.Mesh[] = []
        const chunkSize = 10
        const chunksPerSide = 3

        for (let cx = 0; cx < chunksPerSide; cx++) {
            for (let cz = 0; cz < chunksPerSide; cz++) {
                const geometry = new THREE.PlaneGeometry(chunkSize, chunkSize, 32, 32)
                const positionAttr = geometry.attributes.position

                for (let i = 0; i < positionAttr.count; i++) {
                    const x = positionAttr.getX(i) + cx * chunkSize
                    const y = positionAttr.getY(i) + cz * chunkSize
                    const h = Math.sin(x * 0.3) * Math.cos(y * 0.3) * 2
                    positionAttr.setZ(i, h)
                }

                geometry.computeVertexNormals()

                const material = new THREE.MeshStandardMaterial({
                    color: new THREE.Color().setHSL((cx + cz) / (chunksPerSide * 2), 0.5, 0.5),
                    wireframe: false,
                    flatShading: true,
                })

                const mesh = new THREE.Mesh(geometry, material)
                mesh.rotation.x = -Math.PI / 2
                mesh.position.set(cx * chunkSize, 0, cz * chunkSize)
                scene.add(mesh)
                chunks.push(mesh)
            }
        }

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
        }
        animate()

        return () => {
            chunks.forEach(chunk => {
                scene.remove(chunk)
                chunk.geometry.dispose()
                ;(chunk.material as THREE.Material).dispose()
            })
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[15, 15, 15]} />
            <scene>
                <ambientLight intensity={0.4} />
                <directionalLight position={[10, 20, 10]} intensity={1} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
