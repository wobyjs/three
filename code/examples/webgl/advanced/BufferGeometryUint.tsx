/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, BufferGeometry, BufferAttribute, MeshBasicMaterial } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/materials/MeshBasicMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_buffergeometry_uint from Three.js examples.
 * Demonstrates using Uint32 indices for large meshes.
 *
 * Source: https://threejs.org/examples/webgl_buffergeometry_uint.html
 *
 * Key features:
 * - Uint32BufferAttribute for indices > 65535
 * - Support for large meshes with many vertices
 * - Efficient indexed geometry
 */

// Create a large mesh that requires Uint32 indices
const segments = 200
const vertices: number[] = []
const indices: number[] = []
const colors: number[] = []

// Generate grid vertices
for (let i = 0; i <= segments; i++) {
    for (let j = 0; j <= segments; j++) {
        const x = (i / segments - 0.5) * 20
        const z = (j / segments - 0.5) * 20
        const y = Math.sin(x * 0.5) * Math.cos(z * 0.5) * 2

        vertices.push(x, y, z)

        // Color based on position
        colors.push(
            0.5 + Math.sin(x * 0.3) * 0.5,
            0.5 + Math.sin(z * 0.3) * 0.5,
            0.5 + Math.cos(y * 0.5) * 0.5
        )
    }
}

// Generate indices for triangles
for (let i = 0; i < segments; i++) {
    for (let j = 0; j < segments; j++) {
        const a = i * (segments + 1) + j
        const b = a + 1
        const c = a + (segments + 1)
        const d = c + 1

        indices.push(a, c, b)
        indices.push(b, c, d)
    }
}

export const BufferGeometryUint = () => {
    const meshRef = $<THREE.Mesh>()

    useFrame(({ clock }) => {
        const mesh = $$(meshRef)
        if (mesh) {
            mesh.rotation.y = clock.getElapsedTime() * 0.1
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x111111)}>
                <mesh ref={meshRef}>
                    <bufferGeometry>
                        <bufferAttribute
                            attach="attributes-position"
                            args={[new Float32Array(vertices), 3]}
                        />
                        <bufferAttribute
                            attach="attributes-color"
                            args={[new Float32Array(colors), 3]}
                        />
                        <bufferAttribute
                            attach="index"
                            args={[new Uint32Array(indices), 1]}
                        />
                    </bufferGeometry>
                    <meshBasicMaterial vertexColors side={THREE.DoubleSide} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 15, 20]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default BufferGeometryUint
