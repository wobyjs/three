/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_video_kinect

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const VideoKinect = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Kinect-style point cloud visualization
        const count = 10000
        const geometry = new THREE.BufferGeometry()
        const positions = new Float32Array(count * 3)
        const colors = new Float32Array(count * 3)

        for (let i = 0; i < count; i++) {
            // Create human-like silhouette
            const t = i / count
            const angle = t * Math.PI * 20
            const radius = 0.5 + Math.random() * 0.3

            const x = Math.cos(angle) * radius * (1 + Math.sin(t * Math.PI))
            const y = t * 3 - 1.5
            const z = Math.sin(angle) * radius * (1 + Math.sin(t * Math.PI))

            positions[i * 3] = x
            positions[i * 3 + 1] = y
            positions[i * 3 + 2] = z

            // Color based on depth
            const depth = Math.random()
            colors[i * 3] = depth
            colors[i * 3 + 1] = 1 - depth
            colors[i * 3 + 2] = 0.5
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
            points.rotation.y = t * 0.2
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
            <perspectiveCamera position={[0, 0, 5]} />
            <scene>
                <ambientLight intensity={0.5} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
