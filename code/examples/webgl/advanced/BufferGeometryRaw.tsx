/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, Mesh, BufferGeometry, BufferAttribute, Float32BufferAttribute, MeshBasicMaterial } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/materials/MeshBasicMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_buffergeometry_raw from Three.js examples.
 * Demonstrates raw buffer geometry construction.
 *
 * Source: https://threejs.org/examples/webgl_buffergeometry_raw.html
 *
 * Key features:
 * - Raw buffer geometry construction from arrays
 * - Direct buffer manipulation
 * - Custom geometry without predefined structure
 */

// Create raw geometry data
const vertexCount = 100

// Generate random triangle positions
const positions = new Float32Array(vertexCount * 9) // 3 vertices * 3 coords per triangle
const colors = new Float32Array(vertexCount * 9)

for (let i = 0; i < vertexCount; i++) {
    const i9 = i * 9

    // Triangle center
    const cx = (Math.random() - 0.5) * 10
    const cy = (Math.random() - 0.5) * 10
    const cz = (Math.random() - 0.5) * 10
    const size = 0.1 + Math.random() * 0.3

    // Vertex 1
    positions[i9] = cx + (Math.random() - 0.5) * size
    positions[i9 + 1] = cy + (Math.random() - 0.5) * size
    positions[i9 + 2] = cz + (Math.random() - 0.5) * size

    // Vertex 2
    positions[i9 + 3] = cx + (Math.random() - 0.5) * size
    positions[i9 + 4] = cy + (Math.random() - 0.5) * size
    positions[i9 + 5] = cz + (Math.random() - 0.5) * size

    // Vertex 3
    positions[i9 + 6] = cx + (Math.random() - 0.5) * size
    positions[i9 + 7] = cy + (Math.random() - 0.5) * size
    positions[i9 + 8] = cz + (Math.random() - 0.5) * size

    // Random colors for each vertex
    const r = Math.random()
    const g = Math.random()
    const b = Math.random()

    colors[i9] = r
    colors[i9 + 1] = g
    colors[i9 + 2] = b
    colors[i9 + 3] = r
    colors[i9 + 4] = g
    colors[i9 + 5] = b
    colors[i9 + 6] = r
    colors[i9 + 7] = g
    colors[i9 + 8] = b
}

export const BufferGeometryRaw = () => {
    const meshRef = $<Mesh>()

    useFrame(() => {
        const mesh = $$(meshRef)
        if (mesh) {
            mesh.rotation.x += 0.002
            mesh.rotation.y += 0.003
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
                            args={[positions, 3]}
                        />
                        <bufferAttribute
                            attach="attributes-color"
                            args={[colors, 3]}
                        />
                    </bufferGeometry>
                    <meshBasicMaterial vertexColors side={THREE.DoubleSide} transparent opacity={0.8} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 0, 15]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default BufferGeometryRaw
