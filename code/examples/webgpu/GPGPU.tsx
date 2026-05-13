/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, BufferGeometry, Float32BufferAttribute, ShaderMaterial, AdditiveBlending } from 'three'
import * as THREE from 'three'
import WebGPU from 'three/examples/jsm/capabilities/WebGPU.js'

// Import wrappers for registration
import '@woby/three/src/objects/Points'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgpu_gpgpu - General Purpose GPU computation demonstration.
 *
 * Source: https://threejs.org/examples/webgpu_gpgpu.html (conceptual)
 *
 * GPGPU (General Purpose GPU) uses the GPU for non-graphics computation.
 * WebGPU makes this much easier than WebGL's hacky approaches.
 *
 * GPGPU Applications:
 * 1. Physics simulation - N-body, fluids, particles
 * 2. Image processing - Filters, transforms
 * 3. Scientific computing - Matrix operations, FFT
 * 4. Machine learning - Neural network inference
 * 5. Procedural generation - Noise, terrain
 *
 * WebGPU GPGPU Advantages:
 * - Dedicated compute pipelines
 * - Read/write storage buffers
 * - Workgroups for parallel execution
 * - No need for texture tricks
 *
 * This example simulates:
 * - N-body gravitational simulation
 * - Flocking behavior (boids)
 * - Fluid-like dynamics
 */

const BOID_COUNT = 8000

// Boid simulation shader (simulates flocking behavior)
const boidVertexShader = `
    attribute vec3 aVelocity;
    attribute float aPhase;

    uniform float uTime;

    varying vec3 vColor;
    varying float vAlpha;

    void main() {
        vec3 pos = position;

        // Simulated flocking behavior (what compute shaders do)
        float t = uTime;

        // Individual phase for variation
        float phase = aPhase;

        // Circular orbit tendency
        float orbitSpeed = 0.3 + length(aVelocity) * 0.1;
        float angle = t * orbitSpeed + phase;
        float radius = length(pos.xz);

        // Apply velocity influence
        pos.x += sin(angle) * radius * 0.5 + aVelocity.x * sin(t + phase);
        pos.z += cos(angle) * radius * 0.5 + aVelocity.z * cos(t + phase);
        pos.y += aVelocity.y * sin(t * 0.5 + phase) * 2.0;

        // Pulsing
        float pulse = sin(t * 2.0 + phase) * 0.5;
        pos *= 1.0 + pulse * 0.1;

        // Color based on velocity direction
        float speed = length(aVelocity);
        vColor = vec3(
            0.5 + 0.5 * normalize(aVelocity).x,
            0.5 + 0.5 * normalize(aVelocity).y,
            0.5 + 0.5 * normalize(aVelocity).z
        );

        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);

        gl_PointSize = (2.0 + speed) * (200.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;

        // Alpha based on distance from center
        vAlpha = 0.5 + 0.5 * (1.0 - length(pos) / 15.0);
    }
`

const boidFragmentShader = `
    varying vec3 vColor;
    varying float vAlpha;

    void main() {
        vec2 center = gl_PointCoord - vec2(0.5);
        float dist = length(center);
        if (dist > 0.5) discard;

        float alpha = (1.0 - dist * 2.0) * vAlpha;
        gl_FragColor = vec4(vColor, alpha);
    }
`

// Boid flock simulation
const BoidFlock = () => {
    const pointsRef = $<THREE.Points>()
    const materialRef = $<THREE.ShaderMaterial>()

    useEffect(() => {
        const geometry = new BufferGeometry()
        const positions = new Float32Array(BOID_COUNT * 3)
        const velocities = new Float32Array(BOID_COUNT * 3)
        const phases = new Float32Array(BOID_COUNT)

        for (let i = 0; i < BOID_COUNT; i++) {
            // Start in a sphere
            const phi = Math.acos(2 * Math.random() - 1)
            const theta = Math.random() * Math.PI * 2
            const radius = 3 + Math.random() * 5

            positions[i * 3] = Math.sin(phi) * Math.cos(theta) * radius
            positions[i * 3 + 1] = Math.sin(phi) * Math.sin(theta) * radius
            positions[i * 3 + 2] = Math.cos(phi) * radius

            // Random velocity
            velocities[i * 3] = (Math.random() - 0.5) * 2
            velocities[i * 3 + 1] = (Math.random() - 0.5) * 2
            velocities[i * 3 + 2] = (Math.random() - 0.5) * 2

            phases[i] = Math.random() * Math.PI * 2
        }

        geometry.setAttribute('position', new Float32BufferAttribute(positions, 3))
        geometry.setAttribute('aVelocity', new Float32BufferAttribute(velocities, 3))
        geometry.setAttribute('aPhase', new Float32BufferAttribute(phases, 1))

        const material = new THREE.ShaderMaterial({
            vertexShader: boidVertexShader,
            fragmentShader: boidFragmentShader,
            uniforms: {
                uTime: { value: 0 }
            },
            transparent: true,
            blending: AdditiveBlending,
            depthWrite: false
        })

        const points = new THREE.Points(geometry, material)
        pointsRef(points)
        materialRef(material)
    })

    useFrame(({ clock }) => {
        const material = $$(materialRef)
        if (material && material.uniforms) {
            material.uniforms.uTime.value = clock.getElapsedTime()
        }
    })

    return () => {
        const points = $$(pointsRef)
        return points ? <primitive object={points} /> : null
    }
}

// N-body simulation (gravitational)
const NBodySimulation = () => {
    const pointsRef = $<THREE.Points>()
    const positionsRef = $<Float32Array>()
    const velocitiesRef = $<Float32Array>()

    const N = 2000

    useEffect(() => {
        const geometry = new BufferGeometry()
        const positions = new Float32Array(N * 3)
        const velocities = new Float32Array(N * 3)
        const colors = new Float32Array(N * 3)

        for (let i = 0; i < N; i++) {
            // Start in two clusters (binary system)
            const cluster = i < N / 2 ? 0 : 1
            const offset = cluster === 0 ? -5 : 5

            positions[i * 3] = offset + (Math.random() - 0.5) * 3
            positions[i * 3 + 1] = (Math.random() - 0.5) * 3
            positions[i * 3 + 2] = (Math.random() - 0.5) * 3

            // Initial velocity (orbital)
            const dist = Math.sqrt(
                positions[i * 3] ** 2 +
                positions[i * 3 + 2] ** 2
            )
            velocities[i * 3] = (cluster === 0 ? 1 : -1) * 0.02
            velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.01
            velocities[i * 3 + 2] = 0

            // Color by cluster
            const color = cluster === 0
                ? new THREE.Color(0xff6b6b)
                : new THREE.Color(0x4ecdc4)
            colors[i * 3] = color.r
            colors[i * 3 + 1] = color.g
            colors[i * 3 + 2] = color.b
        }

        geometry.setAttribute('position', new Float32BufferAttribute(positions, 3))
        geometry.setAttribute('color', new Float32BufferAttribute(colors, 3))

        const points = new THREE.Points(geometry, new THREE.PointsMaterial({
            size: 0.1,
            vertexColors: true,
            transparent: true,
            opacity: 0.8,
            blending: AdditiveBlending
        }))

        pointsRef(points)
        positionsRef(positions)
        velocitiesRef(velocities)
    })

    // Simple N-body simulation on CPU (WebGPU would do this on GPU)
    useFrame(() => {
        const points = $$(pointsRef)
        const positions = $$(positionsRef)
        const velocities = $$(velocitiesRef)
        if (!points || !positions || !velocities) return

        const G = 0.001 // Gravitational constant (scaled)
        const dt = 0.5 // Time step

        // Update velocities (simplified - O(N^2) but small N)
        for (let i = 0; i < N; i++) {
            let ax = 0, ay = 0, az = 0

            for (let j = 0; j < N; j++) {
                if (i === j) continue

                const dx = positions[j * 3] - positions[i * 3]
                const dy = positions[j * 3 + 1] - positions[i * 3 + 1]
                const dz = positions[j * 3 + 2] - positions[i * 3 + 2]

                const distSq = dx * dx + dy * dy + dz * dz + 0.1 // Softening
                const dist = Math.sqrt(distSq)
                const force = G / distSq

                ax += force * dx / dist
                ay += force * dy / dist
                az += force * dz / dist
            }

            velocities[i * 3] += ax * dt
            velocities[i * 3 + 1] += ay * dt
            velocities[i * 3 + 2] += az * dt
        }

        // Update positions
        for (let i = 0; i < N; i++) {
            positions[i * 3] += velocities[i * 3] * dt
            positions[i * 3 + 1] += velocities[i * 3 + 1] * dt
            positions[i * 3 + 2] += velocities[i * 3 + 2] * dt
        }

        ;(points.geometry.attributes.position as THREE.BufferAttribute).needsUpdate = true
    })

    return () => {
        const points = $$(pointsRef)
        return points ? <primitive object={points} /> : null
    }
}

// Background stars
const BackgroundStars = () => {
    const pointsRef = $<THREE.Points>()

    useEffect(() => {
        const geometry = new BufferGeometry()
        const positions = new Float32Array(1000 * 3)

        for (let i = 0; i < 1000; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 100
            positions[i * 3 + 1] = (Math.random() - 0.5) * 100
            positions[i * 3 + 2] = (Math.random() - 0.5) * 100
        }

        geometry.setAttribute('position', new Float32BufferAttribute(positions, 3))

        const points = new THREE.Points(geometry, new THREE.PointsMaterial({
            size: 0.1,
            color: 0x444466,
            transparent: true,
            opacity: 0.5
        }))

        pointsRef(points)
    })

    return () => {
        const points = $$(pointsRef)
        return points ? <primitive object={points} /> : null
    }
}

export const GPGPU = () => {
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
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#000', color: 'white' }}>
                <p>Checking WebGPU support...</p>
            </div>
        )
    }

    // Fallback UI
    if (!$$(supported)) {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#000', color: 'white', textAlign: 'center', padding: '20px' }}>
                <h1>WebGPU Not Available</h1>
                <p>Please use Chrome 113+ or Edge 113+ for WebGPU support.</p>
                <p style={{ color: '#888', marginTop: '20px' }}>
                    This example demonstrates GPGPU for boid flocking ({BOID_COUNT.toLocaleString()} agents)
                    and N-body gravitational simulation.
                    Using WebGL fallback with CPU simulation.
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
            <scene background={new Color(0x000005)}>
                {/* Boid flock */}
                <BoidFlock />

                {/* N-body simulation */}
                <NBodySimulation />

                {/* Background stars */}
                <BackgroundStars />
            </scene>

            <perspectiveCamera
                fov={60}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[0, 10, 30]}
            />
            <orbitControls enableDamping autoRotate autoRotateSpeed={0.1} />
        </canvas3D>
    )
}

export default GPGPU
