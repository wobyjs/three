/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_materials_roughness

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const MaterialsRoughness = () => {
    const { scene } = useThree()

    useEffect(() => {
        const group = new THREE.Group()

        // Spheres with varying roughness
        for (let i = 0; i < 10; i++) {
            const geometry = new THREE.SphereGeometry(0.5, 32, 32)
            const material = new THREE.MeshStandardMaterial({
                color: 0xffffff,
                metalness: 0.5,
                roughness: i / 9,
            })
            const mesh = new THREE.Mesh(geometry, material)
            mesh.position.x = (i - 4.5) * 1.2
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
                <pointLight position={[0, 5, 5]} intensity={2} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
