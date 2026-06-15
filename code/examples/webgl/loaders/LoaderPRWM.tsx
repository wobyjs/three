/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_loader_prwm

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const LoaderPRWM = () => {
    const { scene } = useThree()

    useEffect(() => {
        // PRWM (Packed Raw Mesh) format visualization
        const count = 10000
        const geometry = new THREE.BufferGeometry()
        const positions = new Float32Array(count * 3)
        const colors = new Float32Array(count * 3)

        for (let i = 0; i < count; i++) {
            const i3 = i * 3

            // Concentric circles
            const angle = (i / count) * Math.PI * 40
            const radius = (i / count) * 5

            positions[i3] = Math.cos(angle) * radius
            positions[i3 + 1] = Math.sin(angle) * radius
            positions[i3 + 2] = Math.sin(angle * 0.1) * 0.5

            const t = i / count
            colors[i3] = t
            colors[i3 + 1] = 1 - t
            colors[i3 + 2] = 0.5
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

        const material = new THREE.PointsMaterial({
            size: 0.02,
            vertexColors: true,
        })

        const points = new THREE.Points(geometry, material)
        scene.add(points)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            points.rotation.z = t * 0.1
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
            <perspectiveCamera position={[0, 0, 10]} />
            <scene>
                <ambientLight intensity={0.5} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
