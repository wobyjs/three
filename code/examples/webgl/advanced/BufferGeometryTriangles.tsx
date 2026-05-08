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
 * Port of webgl_buffergeometry_triangles from Three.js examples.
 * Demonstrates triangle rendering with buffer geometry.
 *
 * Source: https://threejs.org/examples/webgl_buffergeometry_triangles.html
 *
 * Key features:
 * - Triangle primitives with vertex colors
 * - Custom geometry construction
 * - Basic triangle mesh rendering
 */

// Triangle vertices (multiple triangles)
const triangleCount = 50
const vertices = new Float32Array(triangleCount * 9) // 3 vertices * 3 coords
const colors = new Float32Array(triangleCount * 9)

for (let i = 0; i < triangleCount; i++) {
    const i9 = i * 9

    // Random triangle center
    const cx = (Math.random() - 0.5) * 10
    const cy = (Math.random() - 0.5) * 10
    const cz = (Math.random() - 0.5) * 10
    const size = 0.5 + Math.random() * 1

    // Create triangle vertices
    const angle1 = Math.random() * Math.PI * 2
    const angle2 = angle1 + (Math.PI * 2 / 3)
    const angle3 = angle2 + (Math.PI * 2 / 3)

    // Vertex 1
    vertices[i9] = cx + Math.cos(angle1) * size
    vertices[i9 + 1] = cy + Math.sin(angle1) * size
    vertices[i9 + 2] = cz

    // Vertex 2
    vertices[i9 + 3] = cx + Math.cos(angle2) * size
    vertices[i9 + 4] = cy + Math.sin(angle2) * size
    vertices[i9 + 5] = cz

    // Vertex 3
    vertices[i9 + 6] = cx + Math.cos(angle3) * size
    vertices[i9 + 7] = cy + Math.sin(angle3) * size
    vertices[i9 + 8] = cz

    // Random color for this triangle
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

export const BufferGeometryTriangles = () => {
    const meshRef = $<THREE.Mesh>()

    useFrame(() => {
        const mesh = $$(meshRef)
        if (mesh) {
            mesh.rotation.x += 0.003
            mesh.rotation.y += 0.005
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x000000)}>
                <mesh ref={meshRef}>
                    <bufferGeometry>
                        <bufferAttribute
                            attach="attributes-position"
                            args={[vertices, 3]}
                        />
                        <bufferAttribute
                            attach="attributes-color"
                            args={[colors, 3]}
                        />
                    </bufferGeometry>
                    <meshBasicMaterial vertexColors side={THREE.DoubleSide} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 0, 15]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default BufferGeometryTriangles
