/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_marchingcubes

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const Marchingcubes = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Marching cubes metaballs
        const group = new THREE.Group()

        const count = 5000
        const geometry = new THREE.BufferGeometry()
        const positions = new Float32Array(count * 3)

        // Create metaball-like structure
        for (let i = 0; i < count; i++) {
            const i3 = i * 3
            const theta = Math.random() * Math.PI * 2
            const phi = Math.random() * Math.PI
            const r = 2 + Math.sin(phi * 3) * 0.5

            positions[i3] = r * Math.sin(phi) * Math.cos(theta)
            positions[i3 + 1] = r * Math.sin(phi) * Math.sin(theta)
            positions[i3 + 2] = r * Math.cos(phi)
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

        const material = new THREE.PointsMaterial({
            size: 0.05,
            color: 0x66aaff,
        })

        const points = new THREE.Points(geometry, material)
        group.add(points)

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
            <perspectiveCamera position={[0, 0, 8]} />
            <scene>
                <ambientLight intensity={0.5} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}