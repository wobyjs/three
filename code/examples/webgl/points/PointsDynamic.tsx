/** @jsxImportSource @woby/three */

import { $, useFrame } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'
import * as THREE from 'three'

import '@woby/three/src/objects/Points'
import '@woby/three/src/geometries/BufferGeometry'
import '@woby/three/src/materials/PointsMaterial'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/PointLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_points_dynamic from Three.js examples.
 * Demonstrates dynamic point cloud with post-processing.
 *
 * Source: https://threejs.org/examples/webgl_points_dynamic.html
 */

export const PointsDynamic = () => {
    const timeRef = $(0)

    useFrame((state) => {
        const time = performance.now() * 0.001
        timeRef(time)
    })

    // Create grid of points
    const gridSize = 64
    const spacing = 10
    const vertices: number[] = []

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            vertices.push(i * spacing - (gridSize * spacing) / 2, 0, j * spacing - (gridSize * spacing) / 2)
        }
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))

    return (
        <canvas3D>
            <webGLRenderer setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x000104)} fog={new THREE.FogExp2(0x000104, 0.0000675)}>
                <pointLight color={0xff0000} intensity={1} position={[0, 0, 0]} />
                <points geometry={geometry}>
                    <pointsMaterial color={0xff0000} size={10} sizeAttenuation={true} />
                </points>
            </scene>

            <perspectiveCamera fov={20} aspect={window.innerWidth / window.innerHeight} near={1} far={50000} position={[0, 700, 7000]}>
                <OrbitControls />
            </perspectiveCamera>
        </canvas3D>
    )
}

export default PointsDynamic
