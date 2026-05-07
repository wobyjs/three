/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, BufferGeometry, Float32BufferAttribute, ShaderMaterial, AdditiveBlending, ACESFilmicToneMapping } from 'three'
import * as THREE from 'three'
import WebGPU from 'three/examples/jsm/capabilities/WebGPU.js'

// Import wrappers for registration
import '@woby/three/src/objects/Points'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgpu_particles - WebGPU-optimized particle system.
 *
 * Source: https://threejs.org/examples/webgpu_particles.html (conceptual)
 *
 * WebGPU Particle Advantages:
 * 1. Compute Shaders: GPU can update particle positions without CPU roundtrip
 * 2. Higher particle counts: 10,000+ particles with smooth performance
 * 3. Better memory management: Direct GPU buffer access
 * 4. Parallel processing: All particles updated simultaneously
 *
 * WebGL vs WebGPU Performance Notes:
 * - WebGL: CPU updates particle positions, uploads to GPU each frame
 *   - Bottleneck: CPU-GPU data transfer
 *   - Typical limit: ~50,000 particles at 60fps
 *
 * - WebGPU: Compute shaders update particles entirely on GPU
 *   - No CPU-GPU transfer bottleneck
 *   - Typical limit: 100,000+ particles at 60fps
 *   - Can use GPU-only buffers (no CPU readback)
 *
 * Note: This example uses WebGLRenderer as fallback since WebGPURenderer
 * wrapper is still experimental. The particle patterns are identical,
 * but true GPU compute requires WebGPU.
 */

const PARTICLE_COUNT = 15000 // WebGPU can handle 100k+, using 15k for WebGL compatibility

// Custom shader for particle rendering
// This shader provides smooth, glowing particles with per-particle colors
const particleVertexShader = `
    attribute float aSize;
    attribute vec3 aColor;
    attribute float aPhase;

    varying vec3 vColor;
    varying float vAlpha;

    uniform float uTime;
    uniform float uPixelRatio;

    void main() {
        vColor = aColor;

        vec3 pos = position;

        // Wave animation - each particle has unique phase
        float wave = sin(uTime * 2.0 + aPhase) * 0.5;
        pos.y += wave;

        // Spiral motion
        float angle = uTime * 0.5 + aPhase;
        float radius = length(pos.xz);
        pos.x = cos(angle + atan(pos.z, pos.x)) * radius;
        pos.z = sin(angle + atan(pos.z, pos.x)) * radius;

        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);

        // Size attenuation with distance
        float sizeAttenuation = 300.0 / -mvPosition.z;
        gl_PointSize = aSize * uPixelRatio * sizeAttenuation;

        // Fade based on distance
        vAlpha = clamp(1.0 - (-mvPosition.z / 50.0), 0.1, 1.0);

        gl_Position = projectionMatrix * mvPosition;
    }
`

const particleFragmentShader = `
    varying vec3 vColor;
    varying float vAlpha;

    void main() {
        // Create circular particle with soft edge
        vec2 center = gl_PointCoord - vec2(0.5);
        float dist = length(center);

        // Discard pixels outside circle
        if (dist > 0.5) discard;

        // Soft glow effect
        float glow = 1.0 - smoothstep(0.0, 0.5, dist);
        float alpha = glow * vAlpha;

        // Additive blending for bright particles
        gl_FragColor = vec4(vColor * glow, alpha);
    }
`

// Particle system component
const ParticleSystem = () => {
    const pointsRef = $<THREE.Points>()
    const materialRef = $<THREE.ShaderMaterial>()

    useEffect(() => {
        const geometry = new BufferGeometry()
        const positions = new Float32Array(PARTICLE_COUNT * 3)
        const sizes = new Float32Array(PARTICLE_COUNT)
        const colors = new Float32Array(PARTICLE_COUNT * 3)
        const phases = new Float32Array(PARTICLE_COUNT)

        for (let i = 0; i < PARTICLE_COUNT; i++) {
            // Spherical distribution with varying density
            const radius = 2 + Math.random() * 8
            const theta = Math.random() * Math.PI * 2
            const phi = Math.acos(2 * Math.random() - 1)

            positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
            positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
            positions[i * 3 + 2] = radius * Math.cos(phi)

            // Varied sizes for depth perception
            sizes[i] = Math.random() * 3 + 1

            // Color based on position (creates nebula-like effect)
            const hue = (theta / (Math.PI * 2) + radius * 0.05) % 1
            const saturation = 0.6 + Math.random() * 0.4
            const lightness = 0.4 + Math.random() * 0.3

            const color = new THREE.Color().setHSL(hue, saturation, lightness)
            colors[i * 3] = color.r
            colors[i * 3 + 1] = color.g
            colors[i * 3 + 2] = color.b

            // Random phase for wave animation
            phases[i] = Math.random() * Math.PI * 2
        }

        geometry.setAttribute('position', new Float32BufferAttribute(positions, 3))
        geometry.setAttribute('aSize', new Float32BufferAttribute(sizes, 1))
        geometry.setAttribute('aColor', new Float32BufferAttribute(colors, 3))
        geometry.setAttribute('aPhase', new Float32BufferAttribute(phases, 1))

        const material = new THREE.ShaderMaterial({
            vertexShader: particleVertexShader,
            fragmentShader: particleFragmentShader,
            uniforms: {
                uTime: { value: 0 },
                uPixelRatio: { value: window.devicePixelRatio }
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

        // Slow rotation of entire particle system
        const points = $$(pointsRef)
        if (points) {
            points.rotation.y = clock.getElapsedTime() * 0.05
        }
    })

    return () => {
        const points = $$(pointsRef)
        return points ? <primitive object={points} /> : null
    }
}

// Secondary particle layer for depth
const BackgroundParticles = () => {
    const pointsRef = $<THREE.Points>()

    useEffect(() => {
        const PARTICLE_COUNT_BG = 3000
        const geometry = new BufferGeometry()
        const positions = new Float32Array(PARTICLE_COUNT_BG * 3)
        const colors = new Float32Array(PARTICLE_COUNT_BG * 3)

        for (let i = 0; i < PARTICLE_COUNT_BG; i++) {
            // Wider distribution for background
            const radius = 15 + Math.random() * 20
            const theta = Math.random() * Math.PI * 2
            const phi = Math.acos(2 * Math.random() - 1)

            positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
            positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
            positions[i * 3 + 2] = radius * Math.cos(phi)

            // Dimmer, cooler colors for background
            colors[i * 3] = 0.2 + Math.random() * 0.2
            colors[i * 3 + 1] = 0.3 + Math.random() * 0.3
            colors[i * 3 + 2] = 0.5 + Math.random() * 0.3
        }

        geometry.setAttribute('position', new Float32BufferAttribute(positions, 3))
        geometry.setAttribute('color', new Float32BufferAttribute(colors, 3))

        const points = new THREE.Points(geometry, new THREE.PointsMaterial({
            size: 0.15,
            vertexColors: true,
            transparent: true,
            opacity: 0.6,
            blending: AdditiveBlending
        }))

        pointsRef(points)
    })

    useFrame(({ clock }) => {
        const points = $$(pointsRef)
        if (points) {
            points.rotation.y = -clock.getElapsedTime() * 0.02
            points.rotation.x = Math.sin(clock.getElapsedTime() * 0.01) * 0.1
        }
    })

    return () => {
        const points = $$(pointsRef)
        return points ? <primitive object={points} /> : null
    }
}

export const Particles = () => {
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
                    This example demonstrates {PARTICLE_COUNT.toLocaleString()} animated particles.
                    Using WebGL fallback with custom shaders.
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
                toneMapping={ACESFilmicToneMapping}
            />
            <scene background={new Color(0x000008)}>
                {/* Main particle system */}
                <ParticleSystem />

                {/* Background particles for depth */}
                <BackgroundParticles />
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

export default Particles
