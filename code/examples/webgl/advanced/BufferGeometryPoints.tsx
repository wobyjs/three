/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, Points, PointsMaterial, BufferGeometry, BufferAttribute } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/materials/PointsMaterial'
import '@woby/three/src/objects/Points'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_buffergeometry_points from Three.js examples.
 * Demonstrates point cloud rendering with buffer geometry.
 *
 * Source: https://threejs.org/examples/webgl_buffergeometry_points.html
 *
 * Key features:
 * - Points object for efficient point cloud rendering
 * - BufferGeometry with position and color attributes
 * - Custom point sizes via PointsMaterial
 */

const POINT_COUNT = 5000

export const BufferGeometryPoints = () => {
    const pointsRef = $<Points>()
    const positions = new Float32Array(POINT_COUNT * 3)
    const colors = new Float32Array(POINT_COUNT * 3)

    // Initialize point data
    useEffect(() => {
        for (let i = 0; i < POINT_COUNT; i++) {
            const i3 = i * 3

            // Random positions in a sphere
            const radius = 10 + Math.random() * 10
            const theta = Math.random() * Math.PI * 2
            const phi = Math.acos(2 * Math.random() - 1)

            positions[i3] = radius * Math.sin(phi) * Math.cos(theta)
            positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
            positions[i3 + 2] = radius * Math.cos(phi)

            // Random colors
            colors[i3] = Math.random()
            colors[i3 + 1] = Math.random()
            colors[i3 + 2] = Math.random()
        }
    })

    useFrame(({ clock }) => {
        const points = $$(pointsRef)
        if (points) {
            points.rotation.y = clock.getElapsedTime() * 0.1
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x050505)}>
                <points ref={pointsRef}>
                    <bufferGeometry>
                        <bufferAttribute
                            attach="attributes-position"
                            args={[positions, 3]}
                        />
                        <bufferAttribute
                            attach="attributes-color"
                            args={[colors, 3]}
                        />
                    </bufferGeometry>
                    <pointsMaterial size={0.1} vertexColors sizeAttenuation />
                </points>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 0, 30]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default BufferGeometryPoints
