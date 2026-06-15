/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_points_waves

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const PointsWaves = () => {
    const { scene } = useThree()

    useEffect(() => {
        const count = 5000
        const geometry = new THREE.BufferGeometry()
        const positions = new Float32Array(count * 3)
        const colors = new Float32Array(count * 3)

        const gridSize = 100
        const spacing = 0.5
        let idx = 0

        for (let i = 0; i < gridSize && idx < count; i++) {
            for (let j = 0; j < gridSize && idx < count; j++) {
                positions[idx * 3] = (i - gridSize / 2) * spacing
                positions[idx * 3 + 1] = 0
                positions[idx * 3 + 2] = (j - gridSize / 2) * spacing

                const color = new THREE.Color().setHSL((i + j) / (gridSize * 2), 0.7, 0.5)
                colors[idx * 3] = color.r
                colors[idx * 3 + 1] = color.g
                colors[idx * 3 + 2] = color.b

                idx++
            }
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

        const material = new THREE.PointsMaterial({
            size: 0.1,
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

            const posAttr = points.geometry.attributes.position
            for (let i = 0; i < count; i++) {
                const x = posAttr.getX(i)
                const z = posAttr.getZ(i)
                const distance = Math.sqrt(x * x + z * z)
                const y = Math.sin(distance * 0.5 - t * 2) * 2
                posAttr.setY(i, y)
            }
            posAttr.needsUpdate = true
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
            <perspectiveCamera position={[0, 30, 50]} />
            <scene>
                <ambientLight intensity={0.3} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
