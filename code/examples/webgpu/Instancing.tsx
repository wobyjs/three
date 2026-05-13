/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, InstancedMesh, DynamicDrawUsage, Matrix4, Vector3, Quaternion, Spherical } from 'three'
import * as THREE from 'three'
import WebGPU from 'three/examples/jsm/capabilities/WebGPU.js'

// Import wrappers for registration
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgpu_instancing - GPU Instancing demonstration.
 *
 * Source: https://threejs.org/examples/webgpu_instancing.html (conceptual)
 *
 * GPU Instancing renders many copies of the same geometry with a single draw call.
 * WebGPU enhances instancing with better performance and more flexibility.
 *
 * Instancing Advantages:
 * 1. Single draw call for thousands of objects
 * 2. GPU updates instance transforms
 * 3. Per-instance colors and properties
 * 4. Massive performance improvement for repeated geometry
 *
 * WebGPU Instancing Improvements:
 * - More instance attributes supported
 * - Better buffer management
 * - Compute shader can update instances
 * - Indirect drawing support
 *
 * Use Cases:
 * - Forests (thousands of trees)
 * - Grass fields
 * - Particle effects with meshes
 * - Crowds/armies
 * - Architectural repetition
 */

const INSTANCE_COUNT = 5000

// Instanced spheres component
const InstancedSpheres = () => {
    const meshRef = $<THREE.InstancedMesh>()
    const dummy = new Matrix4()
    const positions = new Vector3()
    const quaternions = new Quaternion()
    const scales = new Vector3()

    useEffect(() => {
        const mesh = $$(meshRef)
        if (!mesh) return

        // Initialize instance matrices and colors
        const colors = new Float32Array(INSTANCE_COUNT * 3)

        for (let i = 0; i < INSTANCE_COUNT; i++) {
            // Random position in sphere
            const phi = Math.acos(2 * Math.random() - 1)
            const theta = Math.random() * Math.PI * 2
            const radius = 2 + Math.random() * 8

            positions.setFromSpherical(new Spherical(radius, phi, theta))

            // Random rotation
            quaternions.setFromEuler(new THREE.Euler(
                Math.random() * Math.PI,
                Math.random() * Math.PI,
                Math.random() * Math.PI
            ))

            // Random scale
            const s = 0.05 + Math.random() * 0.15
            scales.set(s, s, s)

            // Compose matrix
            dummy.compose(positions, quaternions, scales)
            mesh.setMatrixAt(i, dummy)

            // Random color based on position
            const hue = (theta / (Math.PI * 2) + radius * 0.05) % 1
            const color = new THREE.Color().setHSL(hue, 0.7, 0.5)
            colors[i * 3] = color.r
            colors[i * 3 + 1] = color.g
            colors[i * 3 + 2] = color.b
        }

        // Set instance colors
        mesh.instanceColor = new THREE.InstancedBufferAttribute(colors, 3)
        mesh.instanceMatrix.setUsage(DynamicDrawUsage)
        mesh.instanceMatrix.needsUpdate = true
    })

    // Animate instances
    useFrame(({ clock }) => {
        const mesh = $$(meshRef)
        if (!mesh) return

        const time = clock.getElapsedTime()

        for (let i = 0; i < INSTANCE_COUNT; i++) {
            mesh.getMatrixAt(i, dummy)

            // Extract position from matrix
            const pos = new THREE.Vector3()
            pos.setFromMatrixPosition(dummy)

            // Animate - subtle pulsing
            const scale = 1 + Math.sin(time * 2 + i * 0.01) * 0.1
            const s = pos.length() * 0.02 * scale

            // Apply rotation
            const rot = new THREE.Euler(0, time * 0.1 + i * 0.001, 0)
            quaternions.setFromEuler(rot)

            scales.set(s, s, s)
            dummy.compose(pos, quaternions, scales)
            mesh.setMatrixAt(i, dummy)
        }

        mesh.instanceMatrix.needsUpdate = true
    })

    return (
        <instancedMesh ref={meshRef} args={[undefined, undefined, INSTANCE_COUNT]}>
            <sphereGeometry args={[1, 16, 16]} />
            <meshStandardMaterial roughness={0.3} metalness={0.7} />
        </instancedMesh>
    )
}

// Instanced boxes - second instance group
const InstancedBoxes = () => {
    const meshRef = $<THREE.InstancedMesh>()
    const dummy = new Matrix4()

    useEffect(() => {
        const mesh = $$(meshRef)
        if (!mesh) return

        const colors = new Float32Array(1000 * 3)

        for (let i = 0; i < 1000; i++) {
            // Grid layout
            const x = ((i % 10) - 5) * 0.8
            const y = (Math.floor(i / 100) - 5) * 0.8
            const z = (Math.floor((i % 100) / 10) - 5) * 0.8

            dummy.setPosition(x, y - 5, z)
            dummy.scale(new THREE.Vector3(0.2, 0.2, 0.2))
            mesh.setMatrixAt(i, dummy)

            // Color based on position
            const color = new THREE.Color().setHSL(
                (x + 5) / 10,
                0.6,
                0.4 + (z + 5) / 20
            )
            colors[i * 3] = color.r
            colors[i * 3 + 1] = color.g
            colors[i * 3 + 2] = color.b
        }

        mesh.instanceColor = new THREE.InstancedBufferAttribute(colors, 3)
        mesh.instanceMatrix.needsUpdate = true
    })

    useFrame(({ clock }) => {
        const mesh = $$(meshRef)
        if (!mesh) return

        const time = clock.getElapsedTime()

        for (let i = 0; i < 1000; i++) {
            mesh.getMatrixAt(i, dummy)

            const pos = new THREE.Vector3()
            pos.setFromMatrixPosition(dummy)

            // Wave animation
            const wave = Math.sin(time * 2 + pos.x + pos.z) * 0.3
            pos.y = wave - 5

            dummy.setPosition(pos)

            // Rotation
            const rot = new THREE.Euler(time * 0.5, time * 0.3, 0)
            const quat = new THREE.Quaternion().setFromEuler(rot)
            const scale = new THREE.Vector3(0.2, 0.2, 0.2)
            dummy.compose(pos, quat, scale)

            mesh.setMatrixAt(i, dummy)
        }

        mesh.instanceMatrix.needsUpdate = true
    })

    return (
        <instancedMesh ref={meshRef} args={[undefined, undefined, 1000]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial roughness={0.5} metalness={0.5} />
        </instancedMesh>
    )
}

export const Instancing = () => {
    const [supported, setSupported] = $(false)
    const [checked, setChecked] = $(false)

    // Check WebGPU support
    useEffect(() => {
        const checkSupport = async () => {
            try {
                if (WebGPU.isAvailable()) {
                    setSupported(true)
                } else if (navigator.gpu) {
                    const adapter = await navigator.gpu.requestAdapter()
                    if (adapter) {
                        setSupported(true)
                    }
                }
            } catch (e) {
                console.warn('WebGPU check failed:', e)
            }
            setChecked(true)
        }
        checkSupport()
    })

    // Loading state
    if (!$$(checked)) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#0a0a1a', color: 'white' }}>
                <p>Checking WebGPU support...</p>
            </div>
        )
    }

    // Fallback UI
    if (!$$(supported)) {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#0a0a1a', color: 'white', textAlign: 'center', padding: '20px' }}>
                <h1>WebGPU Not Available</h1>
                <p>Please use Chrome 113+ or Edge 113+ for WebGPU support.</p>
                <p style={{ color: '#888', marginTop: '20px' }}>
                    This example demonstrates GPU instancing with {(INSTANCE_COUNT + 1000).toLocaleString()} instances.
                    Using WebGL fallback.
                </p>
            </div>
        )
    }

    return (
        <canvas3D>
            <webGLRenderer
                antialias
                setPixelRatio={[window.devicePixelRatio]}
                setSize={[window.innerWidth, window.innerHeight]}
            />
            <scene background={new Color(0x0a0a1a)}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 10, 5]} intensity={1} />

                {/* Main instanced spheres */}
                <InstancedSpheres />

                {/* Secondary instanced boxes */}
                <InstancedBoxes />
            </scene>

            <perspectiveCamera
                fov={60}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[0, 5, 20]}
            />
            <orbitControls enableDamping autoRotate autoRotateSpeed={0.2} />
        </canvas3D>
    )
}

export default Instancing
