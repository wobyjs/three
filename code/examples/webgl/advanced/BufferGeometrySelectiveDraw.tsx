/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame, useThree, useRenderer } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, BufferGeometry, BufferAttribute, MeshBasicMaterial, WebGLRenderer } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/materials/MeshBasicMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_buffergeometry_selective_draw from Three.js examples.
 * Demonstrates selective draw calls with buffer geometry.
 *
 * Source: https://threejs.org/examples/webgl_buffergeometry_selective_draw.html
 *
 * Key features:
 * - Multiple meshes sharing the same geometry
 * - Selective rendering based on visibility
 * - Efficient draw call management
 */

// Shared geometry data
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

const indices = new Uint16Array([
    0, 1, 2,    0, 2, 3,
    4, 6, 5,    4, 7, 6,
    0, 4, 5,    0, 5, 1,
    2, 6, 7,    2, 7, 3,
    0, 3, 7,    0, 7, 4,
    1, 5, 6,    1, 6, 2
])

const colors = new Float32Array([
    1.0, 0.0, 0.0,
    0.0, 1.0, 0.0,
    0.0, 0.0, 1.0,
    1.0, 1.0, 0.0,

    1.0, 0.0, 1.0,
    0.0, 1.0, 1.0,
    1.0, 1.0, 1.0,
    0.5, 0.5, 0.5
])

export const BufferGeometrySelectiveDraw = () => {
    const meshRefs = $<THREE.Mesh[]>([])
    const visibleIndex = $(0)

    useFrame(({ clock }) => {
        const time = clock.getElapsedTime()
        const idx = Math.floor(time * 2) % 5
        visibleIndex(idx)

        // Rotate all meshes
        const meshes = $$(meshRefs)
        if (meshes) {
            meshes.forEach((mesh, i) => {
                if (mesh) {
                    mesh.rotation.x += 0.01
                    mesh.rotation.y += 0.02
                }
            })
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x0a0a0a)}>
                {/* Multiple cubes at different positions */}
                {[-4, -2, 0, 2, 4].map((x, i) => (
                    <mesh
                        key={i}
                        ref={(el: THREE.Mesh) => {
                            const meshes = $$(meshRefs) || []
                            meshes[i] = el
                            meshRefs(meshes)
                        }}
                        position={[x, 0, 0]}
                        visible={() => $$(visibleIndex) === i}
                    >
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
                ))}

                {/* Info text */}
                <mesh position={[0, -3, 0]}>
                    <planeGeometry args={[10, 1]} />
                    <meshBasicMaterial color={0x333333} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 5, 15]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default BufferGeometrySelectiveDraw
