/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_points_dynamic

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const PointsDynamic = () => {
    const pointsRef = $<THREE.Points>()
    const { scene } = useThree()

    useEffect(() => {
        const count = 2000
        const geometry = new THREE.BufferGeometry()
        const positions = new Float32Array(count * 3)
        const velocities = new Float32Array(count * 3)
        const colors = new Float32Array(count * 3)

        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 20
            positions[i * 3 + 1] = (Math.random() - 0.5) * 20
            positions[i * 3 + 2] = (Math.random() - 0.5) * 20

            velocities[i * 3] = (Math.random() - 0.5) * 0.1
            velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.1
            velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.1

            const color = new THREE.Color().setHSL(Math.random(), 1, 0.5)
            colors[i * 3] = color.r
            colors[i * 3 + 1] = color.g
            colors[i * 3 + 2] = color.b
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
            const delta = clock.getDelta()

            const posAttr = points.geometry.attributes.position
            for (let i = 0; i < count; i++) {
                let x = posAttr.getX(i) + velocities[i * 3]
                let y = posAttr.getY(i) + velocities[i * 3 + 1]
                let z = posAttr.getZ(i) + velocities[i * 3 + 2]

                // Bounce off boundaries
                if (Math.abs(x) > 10) velocities[i * 3] *= -1
                if (Math.abs(y) > 10) velocities[i * 3 + 1] *= -1
                if (Math.abs(z) > 10) velocities[i * 3 + 2] *= -1

                posAttr.setXYZ(i, x, y, z)
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
            <perspectiveCamera position={[0, 0, 20]} />
            <scene>
                <ambientLight intensity={0.3} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
