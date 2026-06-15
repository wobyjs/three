/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_test_wide_gamut

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const TestWideGamut = () => {
    const { scene } = useThree()

    useEffect(() => {
        const group = new THREE.Group()

        // Wide gamut color test
        const colors = [
            0xff0000, 0x00ff00, 0x0000ff,
            0xffff00, 0xff00ff, 0x00ffff,
            0xffffff, 0x888888,
        ]

        colors.forEach((color, i) => {
            const geometry = new THREE.SphereGeometry(0.5, 32, 32)
            const material = new THREE.MeshBasicMaterial({ color })
            const mesh = new THREE.Mesh(geometry, material)
            const angle = (i / colors.length) * Math.PI * 2
            mesh.position.set(
                Math.cos(angle) * 2,
                Math.sin(angle) * 2,
                0
            )
            group.add(mesh)
        })

        scene.add(group)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            group.rotation.z = t * 0.1
        }
        animate()

        return () => {
            scene.remove(group)
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 0, 6]} />
            <scene>
                <ambientLight intensity={0.5} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}