/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_loader_3dtiles

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const Loader3dtiles = () => {
    const { scene } = useThree()

    useEffect(() => {
        // 3D Tiles format visualization
        const group = new THREE.Group()

        // Simulated tile hierarchy
        for (let x = -2; x <= 2; x++) {
            for (let z = -2; z <= 2; z++) {
                const geometry = new THREE.BoxGeometry(1, 1, 1)
                const material = new THREE.MeshStandardMaterial({
                    color: new THREE.Color().setHSL((x + z + 4) / 8, 1, 0.5),
                })
                const mesh = new THREE.Mesh(geometry, material)
                mesh.position.set(x * 2, 0.5, z * 2)
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
            <perspectiveCamera position={[0, 8, 12]} />
            <scene>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
