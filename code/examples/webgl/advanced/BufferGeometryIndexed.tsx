/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, BufferGeometry, BufferAttribute, Uint16BufferAttribute, Float32BufferAttribute } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/materials/MeshBasicMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_buffergeometry_indexed from Three.js examples.
 * Demonstrates indexed buffer geometry for efficient rendering.
 *
 * Source: https://threejs.org/examples/webgl_buffergeometry_indexed.html
 *
 * Key features:
 * - Indexed geometry using Uint16BufferAttribute
 * - Shared vertices reduce memory usage
 * - Wireframe overlay for visualization
 */

// Vertices for a cube (8 vertices)
const vertices = new Float32Array([
    -1.0, -1.0,  1.0,
     1.0, -1.0,  1.0,
     1.0,  1.0,  1.0,
    -1.0,  1.0,  1.0,

    -1.0, -1.0, -1.0,
     1.0, -1.0, -1.0,
     1.0,  1.0, -1.0,
    -1.0,  1.0, -1.0
])

// Indices for triangles (2 triangles per face, 6 faces)
const indices = new Uint16Array([
    0, 1, 2,    0, 2, 3,    // front
    4, 6, 5,    4, 7, 6,    // back
    0, 4, 5,    0, 5, 1,    // bottom
    2, 6, 7,    2, 7, 3,    // top
    0, 3, 7,    0, 7, 4,    // left
    1, 5, 6,    1, 6, 2     // right
])

// Vertex colors
const colors = new Float32Array([
    1.0, 0.0, 0.0,  // 0
    0.0, 1.0, 0.0,  // 1
    0.0, 0.0, 1.0,  // 2
    1.0, 1.0, 0.0,  // 3

    1.0, 0.0, 1.0,  // 4
    0.0, 1.0, 1.0,  // 5
    1.0, 1.0, 1.0,  // 6
    0.5, 0.5, 0.5   // 7
])

export const BufferGeometryIndexed = () => {
    const meshRef = $<THREE.Mesh>()

    useFrame(() => {
        const mesh = $$(meshRef)
        if (mesh) {
            mesh.rotation.x += 0.005
            mesh.rotation.y += 0.01
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
                            args={[vertices, 3]}
                        />
                        <bufferAttribute
                            attach="attributes-color"
                            args={[colors, 3]}
                        />
                        <bufferAttribute
                            attach="index"
                            args={[indices, 1]}
                        />
                    </bufferGeometry>
                    <meshBasicMaterial vertexColors side={THREE.DoubleSide} />
                </mesh>

                {/* Wireframe overlay */}
                <mesh>
                    <bufferGeometry>
                        <bufferAttribute
                            attach="attributes-position"
                            args={[vertices, 3]}
                        />
                        <bufferAttribute
                            attach="index"
                            args={[indices, 1]}
                        />
                    </bufferGeometry>
                    <meshBasicMaterial color={0xffffff} wireframe />
                </mesh>
            </scene>

            <perspectiveCamera fov={70} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 0, 5]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default BufferGeometryIndexed
