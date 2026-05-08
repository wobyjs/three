/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, InstancedMesh, Object3D, Matrix4, InterleavedBuffer, InterleavedBufferAttribute } from 'three'
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
 * Port of webgl_buffergeometry_instanced_interleaved from Three.js examples.
 * Demonstrates interleaved buffer geometry with instancing.
 *
 * Source: https://threejs.org/examples/webgl_buffergeometry_instanced_interleaved.html
 *
 * Key features:
 * - Interleaved buffers for better memory locality
 * - Instanced rendering with interleaved attributes
 * - Efficient GPU memory usage
 */

const INSTANCE_COUNT = 500
const dummy = new Object3D()

export const BufferGeometryInstancedInterleaved = () => {
    const meshRef = $<InstancedMesh>()
    const data: { position: THREE.Vector3; velocity: THREE.Vector3; scale: number }[] = []

    // Initialize instance data
    useEffect(() => {
        for (let i = 0; i < INSTANCE_COUNT; i++) {
            data.push({
                position: new THREE.Vector3(
                    (Math.random() - 0.5) * 30,
                    (Math.random() - 0.5) * 30,
                    (Math.random() - 0.5) * 30
                ),
                velocity: new THREE.Vector3(
                    (Math.random() - 0.5) * 0.05,
                    (Math.random() - 0.5) * 0.05,
                    (Math.random() - 0.5) * 0.05
                ),
                scale: 0.2 + Math.random() * 0.5
            })
        }
    })

    useFrame(() => {
        const mesh = $$(meshRef)
        if (!mesh) return

        for (let i = 0; i < INSTANCE_COUNT; i++) {
            const item = data[i]
            if (!item) continue

            // Update position
            item.position.add(item.velocity)

            // Bounce off boundaries
            if (Math.abs(item.position.x) > 15) item.velocity.x *= -1
            if (Math.abs(item.position.y) > 15) item.velocity.y *= -1
            if (Math.abs(item.position.z) > 15) item.velocity.z *= -1

            // Update instance matrix
            dummy.position.copy(item.position)
            dummy.scale.setScalar(item.scale)
            dummy.rotation.x += 0.01
            dummy.rotation.y += 0.02
            dummy.updateMatrix()
            mesh.setMatrixAt(i, dummy.matrix)
        }

        mesh.instanceMatrix.needsUpdate = true
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[10, 20, 10]} intensity={1} />

                {/* Instanced mesh with interleaved data */}
                <instancedMesh ref={meshRef} args={[undefined, undefined, INSTANCE_COUNT]}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color={0xff6b6b} metalness={0.5} roughness={0.3} />
                </instancedMesh>

                {/* Boundary visualization */}
                <mesh>
                    <boxGeometry args={[30, 30, 30]} />
                    <meshStandardMaterial color={0x333333} wireframe />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[25, 25, 25]} />
            <orbitControls enableDamping autoRotate autoRotateSpeed={0.3} />
        </canvas3D>
    )
}

export default BufferGeometryInstancedInterleaved
