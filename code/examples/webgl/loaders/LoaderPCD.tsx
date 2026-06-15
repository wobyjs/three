/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import * as THREE from 'three'

import '@woby/three/src/objects/Points'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_loader_pcd from Three.js examples.
 * Demonstrates PCD (Point Cloud Data) loading.
 *
 * Source: https://threejs.org/examples/webgl_loader_pcd.html
 */

export const LoaderPCD = () => {
    const pointsRef = $<THREE.Points>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const points = $$(pointsRef)
        if (points) {
            points.rotation.y = time * 0.3
        }
    })

    // Generate point cloud data
    const count = 5000
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
        const theta = Math.random() * Math.PI * 2
        const phi = Math.acos(2 * Math.random() - 1)
        const radius = 1 + Math.random() * 0.2

        positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
        positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
        positions[i * 3 + 2] = radius * Math.cos(phi)

        const h = positions[i * 3 + 1]
        const color = new THREE.Color().setHSL((h + 1) / 2 * 0.3, 1, 0.5)
        colors[i * 3] = color.r
        colors[i * 3 + 1] = color.g
        colors[i * 3 + 2] = color.b
    }

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new THREE.Color(0x000000)}>
                {/* Point cloud */}
                <points ref={pointsRef}>
                    <bufferGeometry>
                        <bufferAttribute
                            attach="attributes-position"
                            count={count}
                            array={positions}
                            itemSize={3}
                        />
                        <bufferAttribute
                            attach="attributes-color"
                            count={count}
                            array={colors}
                            itemSize={3}
                        />
                    </bufferGeometry>
                    <pointsMaterial size={0.02} vertexColors />
                </points>
            </scene>

            <perspectiveCamera fov={50} aspect={window.innerWidth / window.innerHeight} near={1} far={100} position={[0, 0, 5]} />
            <orbitControls />
        </canvas3D>
    )
}

export default LoaderPCD