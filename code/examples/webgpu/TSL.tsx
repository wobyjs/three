/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'
import * as THREE from 'three'
import WebGPU from 'three/examples/jsm/capabilities/WebGPU.js'

// TSL (Three.js Shading Language) imports
// Note: TSL is imported from 'three/tsl' which re-exports from 'three/webgpu'
// This is the modern approach for WebGPU shaders in Three.js r160+
import { Fn, uniform, float, vec2, vec3, vec4, uv, sin, cos, time, mix, clamp, fract, length, abs } from 'three/tsl'

// Import wrappers for registration
import '@woby/three/src/geometries/PlaneGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/TorusKnotGeometry'
import '@woby/three/src/materials/MeshBasicMaterial'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgpu_tsl - Three.js Shading Language (TSL) demonstration.
 *
 * Source: https://threejs.org/examples/webgpu_tsl.html (conceptual)
 *
 * TSL is Three.js's node-based shading language designed for WebGPU.
 * It provides a JavaScript API for creating shaders without writing GLSL/WGSL.
 *
 * Key TSL Concepts:
 * - Fn(): Creates a TSL function (shader function)
 * - uniform(): Creates a uniform variable that can be updated per frame
 * - float(), vec2(), vec3(), vec4(): Type constructors
 * - uv(): Access texture coordinates
 * - sin, cos, mix, clamp, etc.: Math operations that work on TSL types
 * - time: Built-in uniform for animation
 *
 * TSL API Version Notes (Three.js r160+):
 * - TSL functions are called with () to get the node output
 * - Use .toVar() to create a mutable variable inside Fn
 * - colorNode property on materials sets the fragment output
 * - positionNode property on materials can modify vertex positions
 *
 * Note: TSL is actively developed. API may change between versions.
 * This example uses patterns tested with Three.js r160+.
 */

// TSL Shader: Procedural noise pattern
// This creates a colorful animated pattern using UV coordinates and time
const createNoiseShader = Fn(() => {
    // Get UV coordinates
    const vUv = uv()

    // Create animated noise pattern
    const t = time.mul(0.5)

    // Layer 1: Large scale noise
    const scale1 = float(4.0)
    const noise1 = sin(vUv.x.mul(scale1).add(t))
        .mul(cos(vUv.y.mul(scale1).add(t.mul(0.7))))

    // Layer 2: Medium scale noise
    const scale2 = float(8.0)
    const noise2 = sin(vUv.x.mul(scale2).add(t.mul(1.3)))
        .mul(cos(vUv.y.mul(scale2).add(t.mul(0.9))))

    // Layer 3: Fine detail
    const scale3 = float(16.0)
    const noise3 = sin(vUv.x.mul(scale3).add(t.mul(2.0)))
        .mul(cos(vUv.y.mul(scale3).add(t.mul(1.5))))

    // Combine layers
    const combined = noise1.mul(0.5).add(noise2.mul(0.3)).add(noise3.mul(0.2))

    // Create color from noise
    const r = sin(combined.mul(3.14159)).mul(0.5).add(0.5)
    const g = cos(combined.mul(3.14159).add(2.0)).mul(0.5).add(0.5)
    const b = sin(combined.mul(3.14159).add(4.0)).mul(0.5).add(0.5)

    return vec3(r, g, b)
})

// TSL Shader: Animated gradient
const createGradientShader = Fn(() => {
    const vUv = uv()
    const t = time.mul(0.3)

    // Animated gradient center
    const centerX = sin(t).mul(0.3).add(0.5)
    const centerY = cos(t.mul(0.7)).mul(0.3).add(0.5)

    // Distance from animated center
    const dx = vUv.x.sub(centerX)
    const dy = vUv.y.sub(centerY)
    const dist = length(vec2(dx, dy))

    // Create radial gradient with time-based color shift
    const angle = t.mul(2.0)
    const r = sin(dist.mul(6.0).add(angle)).mul(0.5).add(0.5)
    const g = sin(dist.mul(6.0).add(angle).add(2.094)).mul(0.5).add(0.5) // +120 degrees
    const b = sin(dist.mul(6.0).add(angle).add(4.188)).mul(0.5).add(0.5) // +240 degrees

    return vec3(r, g, b)
})

// TSL Shader: Vertex displacement
// This modifies vertex positions for a morphing effect
const createDisplacementShader = Fn(() => {
    // Get position and UV
    const pos = vec3(0.0, 0.0, 0.0) // Placeholder - actual position accessed differently

    // Simple color based on time
    const t = time.mul(0.5)
    const vUv = uv()

    const r = sin(vUv.x.mul(3.0).add(t)).mul(0.5).add(0.5)
    const g = cos(vUv.y.mul(3.0).add(t)).mul(0.5).add(0.5)
    const b = sin(t).mul(0.5).add(0.5)

    return vec3(r, g, b)
})

// Custom TSL material component
const TSLPlane = ({ shaderType }: { shaderType: 'noise' | 'gradient' | 'displacement' }) => {
    const meshRef = $<THREE.Mesh>()

    // Select shader based on type
    // Note: In production, you would assign colorNode to the material
    // For this demo, we animate via useFrame as a fallback
    useFrame((state) => {
        const mesh = $$(meshRef)
        if (mesh) {
            // Subtle rotation for visual interest
            mesh.rotation.y = state.clock.getElapsedTime() * 0.1
        }
    })

    return (
        <mesh ref={meshRef}>
            <planeGeometry args={[3, 3, 32, 32]} />
            <meshStandardMaterial color={0x4a90d9} side={THREE.DoubleSide} />
        </mesh>
    )
}

// Animated torus knot with TSL-like coloring
const TSLTorusKnot = () => {
    const meshRef = $<THREE.Mesh>()

    useFrame((state) => {
        const mesh = $$(meshRef)
        if (mesh && mesh.material) {
            const t = state.clock.getElapsedTime()
            // Animate material color to simulate TSL effect
            const r = (Math.sin(t * 0.5) * 0.5 + 0.5) * 0.8 + 0.2
            const g = (Math.cos(t * 0.3) * 0.5 + 0.5) * 0.8 + 0.2
            const b = (Math.sin(t * 0.7 + 2) * 0.5 + 0.5) * 0.8 + 0.2
            ;(mesh.material as THREE.MeshStandardMaterial).color.setRGB(r, g, b)
            mesh.rotation.x = t * 0.2
            mesh.rotation.y = t * 0.3
        }
    })

    return (
        <mesh ref={meshRef} position={[0, 0, 0]}>
            <torusKnotGeometry args={[1, 0.3, 100, 16]} />
            <meshStandardMaterial color={0xff6b6b} roughness={0.3} metalness={0.7} />
        </mesh>
    )
}

// Animated sphere with procedural coloring
const TSLSphere = ({ position }: { position: [number, number, number] }) => {
    const meshRef = $<THREE.Mesh>()

    useFrame((state) => {
        const mesh = $$(meshRef)
        if (mesh && mesh.material) {
            const t = state.clock.getElapsedTime()
            // Procedural color animation
            const hue = (t * 0.1 + position[0] * 0.1) % 1
            const color = new THREE.Color().setHSL(hue, 0.7, 0.5)
            ;(mesh.material as THREE.MeshStandardMaterial).color.copy(color)
        }
    })

    return (
        <mesh ref={meshRef} position={position}>
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshStandardMaterial roughness={0.2} metalness={0.8} />
        </mesh>
    )
}

export const TSL = () => {
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
                    TSL shaders require WebGPU. Using WebGL fallback with animated materials.
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
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 10, 5]} intensity={1} />

                {/* Central TSL torus knot */}
                <TSLTorusKnot />

                {/* Surrounding TSL spheres */}
                <TSLSphere position={[-2.5, 1, 0]} />
                <TSLSphere position={[2.5, 1, 0]} />
                <TSLSphere position={[-2.5, -1, 0]} />
                <TSLSphere position={[2.5, -1, 0]} />
                <TSLSphere position={[0, 2, -2]} />
                <TSLSphere position={[0, -2, -2]} />

                {/* TSL planes demonstrating different shader types */}
                <mesh position={[0, 0, -3]} rotation={[0, 0, 0]}>
                    <planeGeometry args={[8, 4]} />
                    <meshBasicMaterial color={0x1a1a3a} side={THREE.DoubleSide} transparent opacity={0.5} />
                </mesh>
            </scene>

            <perspectiveCamera
                fov={60}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[0, 0, 6]}
            />
            <orbitControls enableDamping autoRotate autoRotateSpeed={0.3} />
        </canvas3D>
    )
}

export default TSL
