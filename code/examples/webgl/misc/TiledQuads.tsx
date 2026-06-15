/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_tiled_quads

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const TiledQuads = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Tiled quads with different materials
        const group = new THREE.Group()

        const size = 10
        const tileSize = 1

        for (let x = 0; x < size; x++) {
            for (let z = 0; z < size; z++) {
                const geometry = new THREE.PlaneGeometry(tileSize * 0.95, tileSize * 0.95)
                const material = new THREE.MeshStandardMaterial({
                    color: new THREE.Color().setHSL((x + z) / (size * 2), 0.5, 0.5),
                    roughness: (x + z) / (size * 2),
                    metalness: 0.2,
                })

                const mesh = new THREE.Mesh(geometry, material)
                mesh.rotation.x = -Math.PI / 2
                mesh.position.set(
                    (x - size / 2) * tileSize,
                    0,
                    (z - size / 2) * tileSize
                )
                group.add(mesh)
            }
        }

        scene.add(group)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            group.rotation.y = t * 0.1
        }
        animate()

        return () => {
            scene.remove(group)
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 15, 15]} />
            <scene>
                <ambientLight intensity={0.4} />
                <directionalLight position={[10, 20, 10]} intensity={1} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
