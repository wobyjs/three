/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, Points, PointsMaterial, InterleavedBuffer, InterleavedBufferAttribute } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/materials/PointsMaterial'
import '@woby/three/src/objects/Points'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_buffergeometry_points_interleaved from Three.js examples.
 * Demonstrates interleaved buffer geometry for point clouds.
 *
 * Source: https://threejs.org/examples/webgl_buffergeometry_points_interleaved.html
 *
 * Key features:
 * - Interleaved buffer for position and color data
 * - Better memory locality for GPU
 * - Efficient point cloud rendering
 */

const POINT_COUNT = 3000

export const BufferGeometryPointsInterleaved = () => {
    const pointsRef = $<Points>()

    // Create interleaved buffer: position (x, y, z) + color (r, g, b) = 6 floats per point
    const stride = 6
    const interleavedData = new Float32Array(POINT_COUNT * stride)

    // Initialize interleaved data
    useEffect(() => {
        for (let i = 0; i < POINT_COUNT; i++) {
            const offset = i * stride

            // Random positions in a cube
            interleavedData[offset] = (Math.random() - 0.5) * 20
            interleavedData[offset + 1] = (Math.random() - 0.5) * 20
            interleavedData[offset + 2] = (Math.random() - 0.5) * 20

            // Random colors
            interleavedData[offset + 3] = Math.random()
            interleavedData[offset + 4] = Math.random()
            interleavedData[offset + 5] = Math.random()
        }
    })

    useFrame(({ clock }) => {
        const points = $$(pointsRef)
        if (points) {
            points.rotation.x = clock.getElapsedTime() * 0.05
            points.rotation.y = clock.getElapsedTime() * 0.1
        }
    })

    // Create interleaved buffer
    const interleavedBuffer = new InterleavedBuffer(interleavedData, stride)

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x0a0a0a)}>
                <points ref={pointsRef}>
                    <bufferGeometry>
                        <interleavedBufferAttribute
                            attach="attributes-position"
                            args={[interleavedBuffer, 3, 0]}
                        />
                        <interleavedBufferAttribute
                            attach="attributes-color"
                            args={[interleavedBuffer, 3, 3]}
                        />
                    </bufferGeometry>
                    <pointsMaterial size={0.15} vertexColors sizeAttenuation />
                </points>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 0, 25]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default BufferGeometryPointsInterleaved
