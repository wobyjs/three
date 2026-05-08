/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, InstancedMesh, Object3D, Matrix4, DynamicDrawUsage } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/IcosahedronGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_buffergeometry_instanced from Three.js examples.
 * Demonstrates instanced buffer geometry for efficient rendering of many objects.
 *
 * Source: https://threejs.org/examples/webgl_buffergeometry_instanced.html
 *
 * Key features:
 * - InstancedMesh for rendering thousands of instances
 * - Per-instance transformation matrices
 * - GPU-accelerated rendering
 */

const INSTANCE_COUNT = 1000
const dummy = new Object3D()

export const BufferGeometryInstanced = () => {
    const meshRef = $<InstancedMesh>()
    const data: { position: THREE.Vector3; rotation: THREE.Euler; scale: number }[] = []

    // Initialize instance data
    useEffect(() => {
        for (let i = 0; i < INSTANCE_COUNT; i++) {
            data.push({
                position: new THREE.Vector3(
                    (Math.random() - 0.5) * 20,
                    (Math.random() - 0.5) * 20,
                    (Math.random() - 0.5) * 20
                ),
                rotation: new THREE.Euler(
                    Math.random() * Math.PI * 2,
                    Math.random() * Math.PI * 2,
                    Math.random() * Math.PI * 2
                ),
                scale: 0.1 + Math.random() * 0.4
            })
        }
    })

    useFrame(({ clock }) => {
        const mesh = $$(meshRef)
        if (!mesh) return

        const time = clock.getElapsedTime()

        for (let i = 0; i < INSTANCE_COUNT; i++) {
            const item = data[i]
            if (!item) continue

            // Animate rotation
            item.rotation.x += 0.01
            item.rotation.y += 0.02

            // Update instance matrix
            dummy.position.copy(item.position)
            dummy.rotation.copy(item.rotation)
            dummy.scale.setScalar(item.scale * (1 + Math.sin(time + i) * 0.2))
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
                <directionalLight position={[10, 20, 10]} intensity={1} castShadow />

                {/* Instanced mesh - 1000 icosahedrons */}
                <instancedMesh ref={meshRef} args={[undefined, undefined, INSTANCE_COUNT]}>
                    <icosahedronGeometry args={[1, 0]} />
                    <meshStandardMaterial color={0x00ff88} metalness={0.6} roughness={0.2} />
                </instancedMesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[15, 15, 15]} />
            <orbitControls enableDamping autoRotate autoRotateSpeed={0.5} />
        </canvas3D>
    )
}

export default BufferGeometryInstanced
