/** @jsxImportSource @woby/three */

import { $, $$, useFrame, useEffect } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, BufferGeometry, Float32BufferAttribute, PointsMaterial, ACESFilmicToneMapping } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/objects/Points'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_points from Three.js examples.
 * Demonstrates basic point cloud rendering.
 *
 * Source: https://threejs.org/examples/webgl_points.html
 *
 * Key features:
 * - Points geometry
 * - PointsMaterial for particle rendering
 * - Custom point sizes and colors
 */

const PARTICLE_COUNT = 5000

export const Points = () => {
    const pointsRef = $<THREE.Points>()

    useEffect(() => {
        const geometry = new BufferGeometry()
        const positions = new Float32Array(PARTICLE_COUNT * 3)
        const colors = new Float32Array(PARTICLE_COUNT * 3)

        for (let i = 0; i < PARTICLE_COUNT; i++) {
            // Random positions in a sphere
            const radius = 5 + Math.random() * 5
            const theta = Math.random() * Math.PI * 2
            const phi = Math.acos(2 * Math.random() - 1)

            positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
            positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
            positions[i * 3 + 2] = radius * Math.cos(phi)

            // Random colors
            colors[i * 3] = Math.random() * 0.5 + 0.5
            colors[i * 3 + 1] = Math.random() * 0.5 + 0.5
            colors[i * 3 + 2] = Math.random() * 0.5 + 0.5
        }

        geometry.setAttribute('position', new Float32BufferAttribute(positions, 3))
        geometry.setAttribute('color', new Float32BufferAttribute(colors, 3))

        const points = new THREE.Points(geometry, new PointsMaterial({
            size: 0.1,
            vertexColors: true,
            transparent: true,
            opacity: 0.8
        }))

        pointsRef(points)
    })

    useFrame(({ clock }) => {
        const points = $$(pointsRef)
        if (points) {
            points.rotation.y = clock.getElapsedTime() * 0.1
            points.rotation.x = Math.sin(clock.getElapsedTime() * 0.05) * 0.2
        }
    })

    return (
        <canvas3D>
            <webGLRenderer
                antialias
                setPixelRatio={[window.devicePixelRatio]}
                setSize={[window.innerWidth, window.innerHeight]}
                toneMapping={ACESFilmicToneMapping}
            />
            <scene background={new Color(0x0a0a1a)}>
                {/* Point cloud */}
                {() => {
                    const points = $$(pointsRef)
                    return points ? <primitive object={points} /> : null
                }}
            </scene>

            <perspectiveCamera
                fov={60}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[0, 0, 15]}
            />
            <orbitControls enableDamping autoRotate autoRotateSpeed={0.5} />
        </canvas3D>
    )
}

export default Points
