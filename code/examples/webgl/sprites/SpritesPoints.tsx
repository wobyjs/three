/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_sprites_points

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const SpritesPoints = () => {
    const { scene } = useThree()

    useEffect(() => {
        const count = 5000
        const geometry = new THREE.BufferGeometry()
        const positions = new Float32Array(count * 3)
        const colors = new Float32Array(count * 3)

        for (let i = 0; i < count; i++) {
            const i3 = i * 3

            // Galaxy
            const angle = Math.random() * Math.PI * 2
            const radius = Math.pow(Math.random(), 0.5) * 15
            const arm = Math.floor(Math.random() * 3)

            positions[i3] = Math.cos(angle + arm * Math.PI * 2 / 3) * radius
            positions[i3 + 1] = (Math.random() - 0.5) * 1
            positions[i3 + 2] = Math.sin(angle + arm * Math.PI * 2 / 3) * radius

            const t = radius / 15
            colors[i3] = 0.5 + t * 0.5
            colors[i3 + 1] = 0.3
            colors[i3 + 2] = 0.8 - t * 0.3
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

        const material = new THREE.PointsMaterial({
            size: 0.15,
            vertexColors: true,
            transparent: true,
            opacity: 0.8,
        })

        const points = new THREE.Points(geometry, material)
        scene.add(points)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            points.rotation.y = t * 0.05
        }
        animate()

        return () => {
            scene.remove(points)
            geometry.dispose()
            material.dispose()
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 10, 20]} />
            <scene />
            <orbitControls />
        </canvas3D>
    )
}
