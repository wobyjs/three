/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_tonemapping

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const Tonemapping = () => {
    const { scene } = useThree()

    useEffect(() => {
        const group = new THREE.Group()

        // Bright spheres
        for (let i = 0; i < 6; i++) {
            const geometry = new THREE.SphereGeometry(0.5 + i * 0.3, 32, 32)
            const material = new THREE.MeshStandardMaterial({
                color: 0xffffff,
                emissive: 0xffffaa,
                emissiveIntensity: (i + 1) * 2,
            })
            const mesh = new THREE.Mesh(geometry, material)
            mesh.position.x = i * 2 - 5
            group.add(mesh)
        }

        scene.add(group)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            group.rotation.y = t * 0.2
        }
        animate()

        return () => {
            scene.remove(group)
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 2, 10]} />
            <scene>
                <ambientLight intensity={0.2} />
                <pointLight position={[0, 5, 0]} intensity={10} color={0xffffaa} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
