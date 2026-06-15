/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_materials_metalness

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const MaterialsMetalness = () => {
    const { scene } = useThree()

    useEffect(() => {
        const group = new THREE.Group()

        // Spheres with varying metalness
        for (let i = 0; i < 10; i++) {
            const geometry = new THREE.SphereGeometry(0.5, 32, 32)
            const material = new THREE.MeshStandardMaterial({
                color: 0x88ccff,
                roughness: 0.2,
                metalness: i / 9,
            })
            const mesh = new THREE.Mesh(geometry, material)
            mesh.position.y = (i - 4.5) * 1.2
            group.add(mesh)
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
            <perspectiveCamera position={[0, 0, 10]} />
            <scene>
                <ambientLight intensity={0.2} />
                <pointLight position={[5, 5, 5]} intensity={2} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
