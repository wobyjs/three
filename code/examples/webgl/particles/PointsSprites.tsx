/** @jsxImportSource @woby/three */

import { $, $$, useFrame, useEffect } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, BufferGeometry, Float32BufferAttribute, PointsMaterial, TextureLoader, AdditiveBlending, ACESFilmicToneMapping } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/objects/Points'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_points_sprites from Three.js examples.
 * Demonstrates sprite-based particle rendering.
 *
 * Source: https://threejs.org/examples/webgl_points_sprites.html
 *
 * Key features:
 * - Sprite textures for particles
 * - Additive blending for glow effect
 * - Animated particle positions
 */

const PARTICLE_COUNT = 2000

export const PointsSprites = () => {
    const pointsRef = $<THREE.Points>()
    const velocitiesRef = $<Float32Array>()

    useEffect(() => {
        const geometry = new BufferGeometry()
        const positions = new Float32Array(PARTICLE_COUNT * 3)
        const velocities = new Float32Array(PARTICLE_COUNT * 3)

        for (let i = 0; i < PARTICLE_COUNT; i++) {
            // Random positions
            positions[i * 3] = (Math.random() - 0.5) * 20
            positions[i * 3 + 1] = (Math.random() - 0.5) * 20
            positions[i * 3 + 2] = (Math.random() - 0.5) * 20

            // Random velocities
            velocities[i * 3] = (Math.random() - 0.5) * 0.02
            velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.02
            velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02
        }

        geometry.setAttribute('position', new Float32BufferAttribute(positions, 3))
        velocitiesRef(velocities)

        // Create a simple circular sprite texture
        const canvas = document.createElement('canvas')
        canvas.width = 64
        canvas.height = 64
        const ctx = canvas.getContext('2d')
        if (ctx) {
            const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32)
            gradient.addColorStop(0, 'rgba(255, 255, 255, 1)')
            gradient.addColorStop(0.3, 'rgba(255, 255, 255, 0.8)')
            gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
            ctx.fillStyle = gradient
            ctx.fillRect(0, 0, 64, 64)
        }

        const texture = new THREE.CanvasTexture(canvas)

        const points = new THREE.Points(geometry, new PointsMaterial({
            size: 0.5,
            map: texture,
            transparent: true,
            blending: AdditiveBlending,
            depthWrite: false,
            color: 0x4ecdc4
        }))

        pointsRef(points)
    })

    useFrame(() => {
        const points = $$(pointsRef)
        const velocities = $$(velocitiesRef)

        if (points && velocities) {
            const positions = points.geometry.attributes.position.array as Float32Array

            for (let i = 0; i < PARTICLE_COUNT; i++) {
                positions[i * 3] += velocities[i * 3]
                positions[i * 3 + 1] += velocities[i * 3 + 1]
                positions[i * 3 + 2] += velocities[i * 3 + 2]

                // Wrap around
                if (Math.abs(positions[i * 3]) > 10) positions[i * 3] *= -0.9
                if (Math.abs(positions[i * 3 + 1]) > 10) positions[i * 3 + 1] *= -0.9
                if (Math.abs(positions[i * 3 + 2]) > 10) positions[i * 3 + 2] *= -0.9
            }

            points.geometry.attributes.position.needsUpdate = true
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
            <scene background={new Color(0x050510)}>
                {/* Sprite particles */}
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
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default PointsSprites
