/** @jsxImportSource @woby/three */

import { $, useFrame } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'
import * as THREE from 'three'

import '@woby/three/src/objects/Points'
import '@woby/three/src/geometries/BufferGeometry'
import '@woby/three/src/materials/PointsMaterial'
import '@woby/three/src/materials/AdditiveBlending'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_points_sprites from Three.js examples.
 * Demonstrates sprite-based particle effects with multiple textures.
 *
 * Source: https://threejs.org/examples/webgl_points_sprites.html
 */

export const PointsSprites = () => {
    const timeRef = $(0)

    useFrame((state) => {
        const time = performance.now() * 0.001
        timeRef(time)
    })

    // Generate particles
    const particleCount = 10000
    const vertices: number[] = []

    for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * 2000 - 1000
        const y = Math.random() * 2000 - 1000
        const z = Math.random() * 2000 - 1000
        vertices.push(x, y, z)
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))

    // Define sprite colors and sizes
    const parameters = [
        [[1.0, 0.2, 0.5], 20],
        [[0.95, 0.1, 0.5], 15],
        [[0.90, 0.05, 0.5], 10],
        [[0.85, 0, 0.5], 8],
        [[0.80, 0, 0.5], 5],
    ]

    // Create multiple point clouds with different materials
    const pointClouds = parameters.map((param, i) => {
        const color = param[0] as number[]
        const size = param[1] as number
        return (
            <points key={`cloud-${i}`} rotation={[Math.random() * 6, Math.random() * 6, Math.random() * 6]}>
                <bufferGeometry>
                    <float32BufferAttribute attach="attributes-position" args={[vertices, 3]} />
                </bufferGeometry>
                <pointsMaterial
                    size={size}
                    color={new THREE.Color().setHSL(color[0], color[1], color[2])}
                    blending={THREE.AdditiveBlending}
                    depthTest={false}
                    transparent={true}
                />
            </points>
        )
    })

    return (
        <canvas3D>
            <webGLRenderer setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x000000)} fog={new THREE.FogExp2(0x000000, 0.0008)}>
                {pointClouds}
            </scene>

            <perspectiveCamera fov={75} aspect={window.innerWidth / window.innerHeight} near={1} far={2000} position={[0, 0, 1000]}>
                <OrbitControls />
            </perspectiveCamera>
        </canvas3D>
    )
}

export default PointsSprites
