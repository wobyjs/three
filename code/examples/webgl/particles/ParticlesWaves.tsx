/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_particles_waves

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const ParticlesWaves = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Wave particles
        const count = 5000
        const geometry = new THREE.BufferGeometry()
        const positions = new Float32Array(count * 3)
        const colors = new Float32Array(count * 3)

        for (let i = 0; i < count; i++) {
            const i3 = i * 3
            const x = (Math.random() - 0.5) * 20
            const z = (Math.random() - 0.5) * 20

            positions[i3] = x
            positions[i3 + 1] = 0
            positions[i3 + 2] = z

            colors[i3] = 0.5
            colors[i3 + 1] = 0.8
            colors[i3 + 2] = 1
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

            const positions = geometry.attributes.position.array as Float32Array
            for (let i = 0; i < count; i++) {
                const i3 = i * 3
                const x = positions[i3]
                const z = positions[i3 + 2]
                positions[i3 + 1] = Math.sin(x * 0.5 + t) * Math.cos(z * 0.5 + t) * 0.5
            }
            geometry.attributes.position.needsUpdate = true
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
            <perspectiveCamera position={[0, 5, 15]} />
            <scene>
                <ambientLight intensity={0.5} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
