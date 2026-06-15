/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_multiple_elements

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const MultipleElements = () => {
    const { scene } = useThree()

    useEffect(() => {
        const group = new THREE.Group()

        // Multiple viewports
        const colors = [0xff0000, 0x00ff00, 0x0000ff, 0xffff00]

        for (let i = 0; i < 4; i++) {
            const geometry = new THREE.SphereGeometry(0.8, 32, 32)
            const material = new THREE.MeshStandardMaterial({
                color: colors[i],
                metalness: 0.5,
                roughness: 0.5,
            })
            const mesh = new THREE.Mesh(geometry, material)
            mesh.position.set(
                (i % 2 === 0 ? -2 : 2),
                (i < 2 ? 2 : -2),
                0
            )
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
            <perspectiveCamera position={[0, 0, 8]} />
            <scene>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}