/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, Mesh, InstancedMesh, Object3D, IcosahedronGeometry } from 'three'
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
 * Port of webgl_tsl_compute from Three.js examples.
 * Demonstrates TSL compute shaders.
 *
 * Source: https://threejs.org/examples/webgl_tsl_compute.html
 *
 * Key features:
 * - GPU compute shaders
 * - Parallel processing
 * - Data-driven animation
 *
 * Note: Full TSL compute requires WebGPU. This is a WebGL fallback.
 */

const INSTANCE_COUNT = 1000
const dummy = new Object3D()

export const TSLCompute = () => {
    const meshRef = $<InstancedMesh>()
    const data: { position: THREE.Vector3; velocity: THREE.Vector3 }[] = []

    useEffect(() => {
        for (let i = 0; i < INSTANCE_COUNT; i++) {
            data.push({
                position: new THREE.Vector3(
                    (Math.random() - 0.5) * 20,
                    (Math.random() - 0.5) * 20,
                    (Math.random() - 0.5) * 20
                ),
                velocity: new THREE.Vector3(
                    (Math.random() - 0.5) * 0.1,
                    (Math.random() - 0.5) * 0.1,
                    (Math.random() - 0.5) * 0.1
                )
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

            // Simulate compute shader behavior
            item.position.add(item.velocity)

            // Bounce
            if (Math.abs(item.position.x) > 10) item.velocity.x *= -1
            if (Math.abs(item.position.y) > 10) item.velocity.y *= -1
            if (Math.abs(item.position.z) > 10) item.velocity.z *= -1

            // Update instance
            dummy.position.copy(item.position)
            dummy.scale.setScalar(0.1 + Math.sin(time + i) * 0.05)
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

                {/* Instanced mesh simulating compute output */}
                <instancedMesh ref={meshRef} args={[undefined, undefined, INSTANCE_COUNT]}>
                    <icosahedronGeometry args={[0.2, 0]} />
                    <meshStandardMaterial color={0x00ff88} metalness={0.5} roughness={0.3} />
                </instancedMesh>

                {/* Boundary */}
                <mesh>
                    <boxGeometry args={[20, 20, 20]} />
                    <meshStandardMaterial color={0x333333} wireframe />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[15, 15, 15]} />
            <orbitControls enableDamping autoRotate autoRotateSpeed={0.3} />
        </canvas3D>
    )
}

export default TSLCompute