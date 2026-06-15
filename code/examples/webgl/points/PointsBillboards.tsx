/** @jsxImportSource @woby/three */

import { $, useFrame } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'
import * as THREE from 'three'

import '@woby/three/src/objects/Points'
import '@woby/three/src/objects/Points'
import '@woby/three/src/geometries/BufferGeometry'
import '@woby/three/src/materials/PointsMaterial'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/PointLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_points_billboards from Three.js examples.
 * Demonstrates point-based particle rendering with size attenuation.
 *
 * Source: https://threejs.org/examples/webgl_points_billboards.html
 */

export const PointsBillboards = () => {
    const mouseRef = { x: 0, y: 0 }
    const timeRef = $(0)

    useFrame((state) => {
        const time = performance.now() * 0.00005
        timeRef(time)
    })

    // Generate 10000 particles
    const particleCount = 10000
    const vertices: number[] = []

    for (let i = 0; i < particleCount; i++) {
        const x = 2000 * Math.random() - 1000
        const y = 2000 * Math.random() - 1000
        const z = 2000 * Math.random() - 1000
        vertices.push(x, y, z)
    }

    // Create buffer geometry with positions
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))

    return (
        <canvas3D>
            <webGLRenderer setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x000000)} fog={new THREE.FogExp2(0x000000, 0.001)}>
                <points geometry={geometry}>
                    <pointsMaterial size={35} sizeAttenuation={true} alphaTest={0.5} transparent={true} />
                </points>
            </scene>

            <perspectiveCamera fov={55} aspect={window.innerWidth / window.innerHeight} near={2} far={2000} position={[0, 0, 1000]}>
                <OrbitControls />
            </perspectiveCamera>
        </canvas3D>
    )
}

export default PointsBillboards
