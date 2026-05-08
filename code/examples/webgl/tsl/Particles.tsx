/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, Points, BufferGeometry, BufferAttribute, PointsMaterial } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/materials/PointsMaterial'
import '@woby/three/src/objects/Points'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_tsl_particles from Three.js examples.
 * Demonstrates TSL particle systems.
 *
 * Source: https://threejs.org/examples/webgl_tsl_particles.html
 *
 * Key features:
 * - GPU particle simulation
 * - Large particle counts
 * - Node-based particle behavior
 *
 * Note: Full TSL particles require WebGPU. This is a WebGL fallback.
 */

const PARTICLE_COUNT = 10000

export const TSLParticles = () => {
    const pointsRef = $<Points>()
    const positions = new Float32Array(PARTICLE_COUNT * 3)
    const colors = new Float32Array(PARTICLE_COUNT * 3)
    const velocities = new Float32Array(PARTICLE_COUNT * 3)

    useEffect(() => {
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            const i3 = i * 3

            // Initial positions in a sphere
            const radius = 5 + Math.random() * 5
            const theta = Math.random() * Math.PI * 2
            const phi = Math.acos(2 * Math.random() - 1)

            positions[i3] = radius * Math.sin(phi) * Math.cos(theta)
            positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
            positions[i3 + 2] = radius * Math.cos(phi)

            // Random colors
            colors[i3] = Math.random()
            colors[i3 + 1] = Math.random()
            colors[i3 + 2] = Math.random()

            // Velocities
            velocities[i3] = (Math.random() - 0.5) * 0.02
            velocities[i3 + 1] = (Math.random() - 0.5) * 0.02
            velocities[i3 + 2] = (Math.random() - 0.5) * 0.02
        }
    })

    useFrame(({ clock }) => {
        const points = $$(pointsRef)
        if (!points) return

        const time = clock.getElapsedTime()
        const posAttr = points.geometry.attributes.position as BufferAttribute

        for (let i = 0; i < PARTICLE_COUNT; i++) {
            const i3 = i * 3

            // Update positions
            positions[i3] += velocities[i3]
            positions[i3 + 1] += velocities[i3 + 1]
            positions[i3 + 2] += velocities[i3 + 2]

            // Add swirl motion
            const x = positions[i3]
            const z = positions[i3 + 2]
            positions[i3] = x * Math.cos(0.01) - z * Math.sin(0.01)
            positions[i3 + 2] = x * Math.sin(0.01) + z * Math.cos(0.01)

            // Keep particles in bounds
            const dist = Math.sqrt(positions[i3] ** 2 + positions[i3 + 1] ** 2 + positions[i3 + 2] ** 2)
            if (dist > 10 || dist < 1) {
                velocities[i3] *= -1
                velocities[i3 + 1] *= -1
                velocities[i3 + 2] *= -1
            }
        }

        posAttr.needsUpdate = true
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
                    <pointsMaterial size={0.05} vertexColors sizeAttenuation />
                </points>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 0, 15]} />
            <orbitControls enableDamping autoRotate autoRotateSpeed={0.5} />
        </canvas3D>
    )
}

export default TSLParticles