/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_buffergeometry_drawrange

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const BufferGeometryDrawRange = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Draw range - partial geometry rendering
        const count = 1000
        const geometry = new THREE.BufferGeometry()
        const positions = new Float32Array(count * 3)
        const colors = new Float32Array(count * 3)

        for (let i = 0; i < count; i++) {
            const i3 = i * 3
            const t = i / count

            // Create path
            positions[i3] = Math.cos(t * Math.PI * 10) * t * 10
            positions[i3 + 1] = (t - 0.5) * 10
            positions[i3 + 2] = Math.sin(t * Math.PI * 10) * t * 10

            // Color
            colors[i3] = t
            colors[i3 + 1] = 1 - t
            colors[i3 + 2] = 0.5
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

        const material = new THREE.PointsMaterial({
            size: 0.1,
            vertexColors: true,
        })

        const points = new THREE.Points(geometry, material)
        scene.add(points)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()

            // Animate draw range
            const drawCount = (Math.sin(t) * 0.5 + 0.5) * count
            geometry.setDrawRange(0, Math.floor(drawCount))
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
            <perspectiveCamera position={[0, 0, 15]} />
            <scene>
                <ambientLight intensity={0.5} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
