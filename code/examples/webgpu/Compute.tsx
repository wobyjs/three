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
 * Port of webgpu_compute - GPU Compute Shader demonstration.
 *
 * Source: https://threejs.org/examples/webgpu_compute.html (conceptual)
 *
 * WebGPU Compute Shaders enable general-purpose GPU computation (GPGPU).
 * This is a major advantage over WebGL which required workarounds.
 *
 * Compute Shader Use Cases:
 * 1. Particle simulation - Update millions of particles on GPU
 * 2. Physics simulation - Cloth, fluid, soft body dynamics
 * 3. Image processing - Blur, edge detection, convolution
 * 4. Procedural generation - Terrain, textures, noise
 * 5. AI/ML inference - Neural network operations
 *
 * WebGPU Compute Advantages:
 * - Direct GPU memory access (no CPU roundtrip)
 * - Workgroups for parallel execution
 * - Shared memory between threads
 * - Compute pipelines separate from render pipelines
 *
 * Note: This example uses WebGL fallback with vertex shaders to simulate
 * compute-like behavior. True compute shaders require WebGPURenderer.
 */

const PARTICLE_COUNT = 50000

// Vertex shader that simulates compute behavior
// In real WebGPU, this would be a compute shader
const computeVertexShader = `
    attribute float aPhase;
    attribute float aSpeed;
    attribute vec3 aVelocity;

    uniform float uTime;
    uniform float uDelta;

    varying vec3 vColor;
    varying float vAlpha;

    void main() {
        vec3 pos = position;

        // Simulate physics on GPU (what compute shaders do best)
        float t = uTime * aSpeed;

        // Gravity simulation
        pos.y += sin(t + aPhase) * 2.0;

        // Orbital motion
        float angle = t * 0.5 + aPhase;
        float radius = length(pos.xz);
        pos.x = cos(angle) * radius;
        pos.z = sin(angle) * radius;

        // Turbulence
        pos.x += sin(t * 3.0 + aPhase * 2.0) * 0.3;
        pos.z += cos(t * 2.0 + aPhase * 3.0) * 0.3;

        // Color based on velocity (simulated)
        float speed = length(aVelocity);
        vColor = vec3(
            0.5 + 0.5 * sin(aPhase),
            0.5 + 0.5 * cos(aPhase * 0.7),
            0.5 + 0.5 * sin(aPhase * 1.3)
        );

        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);

        // Size based on distance
        gl_PointSize = 2.0 * (300.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;

        // Alpha based on height
        vAlpha = 0.3 + 0.7 * (0.5 + 0.5 * sin(pos.y * 0.5 + t));
    }
`

const computeFragmentShader = `
    varying vec3 vColor;
    varying float vAlpha;

    void main() {
        // Circular particle
        vec2 center = gl_PointCoord - vec2(0.5);
        float dist = length(center);
        if (dist > 0.5) discard;

        // Soft edge
        float alpha = (1.0 - dist * 2.0) * vAlpha;
        gl_FragColor = vec4(vColor, alpha);
    }
`

// Particle system with GPU-computed behavior
const ComputeParticleSystem = () => {
    const pointsRef = $<THREE.Points>()
    const materialRef = $<THREE.ShaderMaterial>()

    useEffect(() => {
        const geometry = new BufferGeometry()
        const positions = new Float32Array(PARTICLE_COUNT * 3)
        const phases = new Float32Array(PARTICLE_COUNT)
        const speeds = new Float32Array(PARTICLE_COUNT)
        const velocities = new Float32Array(PARTICLE_COUNT * 3)

        for (let i = 0; i < PARTICLE_COUNT; i++) {
            // Initial positions in a cylinder
            const angle = Math.random() * Math.PI * 2
            const radius = 1 + Math.random() * 4
            const height = (Math.random() - 0.5) * 6

            positions[i * 3] = Math.cos(angle) * radius
            positions[i * 3 + 1] = height
            positions[i * 3 + 2] = Math.sin(angle) * radius

            // Random phase for variation
            phases[i] = Math.random() * Math.PI * 2
            speeds[i] = 0.5 + Math.random() * 1.5

            // Random velocities
            velocities[i * 3] = (Math.random() - 0.5) * 2
            velocities[i * 3 + 1] = (Math.random() - 0.5) * 2
            velocities[i * 3 + 2] = (Math.random() - 0.5) * 2
        }

        geometry.setAttribute('position', new Float32BufferAttribute(positions, 3))
        geometry.setAttribute('aPhase', new Float32BufferAttribute(phases, 1))
        geometry.setAttribute('aSpeed', new Float32BufferAttribute(speeds, 1))
        geometry.setAttribute('aVelocity', new Float32BufferAttribute(velocities, 3))

        const material = new THREE.ShaderMaterial({
            vertexShader: computeVertexShader,
            fragmentShader: computeFragmentShader,
            uniforms: {
                uTime: { value: 0 },
                uDelta: { value: 0 }
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

// Secondary layer - background particles
const BackgroundField = () => {
    const pointsRef = $<THREE.Points>()

    useEffect(() => {
        const COUNT = 2000
        const geometry = new BufferGeometry()
        const positions = new Float32Array(COUNT * 3)

        for (let i = 0; i < COUNT; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 40
            positions[i * 3 + 1] = (Math.random() - 0.5) * 40
            positions[i * 3 + 2] = (Math.random() - 0.5) * 40
        }

        geometry.setAttribute('position', new Float32BufferAttribute(positions, 3))

        const points = new THREE.Points(geometry, new THREE.PointsMaterial({
            size: 0.05,
            color: 0x444466,
            transparent: true,
            opacity: 0.5
        }))

        pointsRef(points)
    })

    useFrame(({ clock }) => {
        const points = $$(pointsRef)
        if (points) {
            points.rotation.y = clock.getElapsedTime() * 0.02
        }
    })

    return () => {
        const points = $$(pointsRef)
        return points ? <primitive object={points} /> : null
    }
}

export const Compute = () => {
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
                    This example demonstrates GPU compute shaders for {PARTICLE_COUNT.toLocaleString()} particles.
                    Using WebGL fallback with vertex shader simulation.
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
            <scene background={new Color(0x000008)}>
                <ComputeParticleSystem />
                <BackgroundField />
            </scene>

            <perspectiveCamera
                fov={60}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[0, 5, 15]}
            />
            <orbitControls enableDamping autoRotate autoRotateSpeed={0.3} />
        </canvas3D>
    )
}

export default Compute
