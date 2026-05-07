/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, EffectComposer, RenderPass, UnrealBloomPass, ShaderPass, ACESFilmicToneMapping, OutputPass } from 'three'
import * as THREE from 'three'
import WebGPU from 'three/examples/jsm/capabilities/WebGPU.js'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/TorusKnotGeometry'
import '@woby/three/src/materials/MeshBasicMaterial'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/lights/PointLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgpu_postprocessing - WebGPU postprocessing demonstration.
 *
 * Source: https://threejs.org/examples/webgpu_postprocessing.html (conceptual)
 *
 * WebGPU Postprocessing Status (Three.js r160+):
 * ===============================================
 *
 * As of Three.js r160, WebGPU postprocessing is under active development.
 * The traditional EffectComposer from WebGL is being replaced with a new
 * WebGPU-native approach using TSL (Three.js Shading Language).
 *
 * Current Options:
 * 1. WebGL EffectComposer: Works with WebGLRenderer (used here as fallback)
 * 2. WebGPU Postprocessing: Requires WebGPURenderer (experimental)
 * 3. TSL-based effects: New approach, still maturing
 *
 * WebGPU Postprocessing Advantages (when fully available):
 * - Better performance: Native GPU compute for effects
 * - TSL integration: Write effects in JavaScript, not GLSL
 * - Modern features: Access to compute shaders for complex effects
 *
 * This Example:
 * - Uses WebGL EffectComposer as fallback
 * - Demonstrates bloom effect (common in WebGPU demos)
 * - Shows custom postprocessing shader
 * - Documents the current state of WebGPU postprocessing
 *
 * Note: When WebGPU postprocessing matures, this example should be updated
 * to use the native WebGPU approach with TSL-based effects.
 */

// Custom vignette shader for postprocessing
const VignetteShader = {
    uniforms: {
        tDiffuse: { value: null },
        uDarkness: { value: 0.5 },
        uOffset: { value: 1.0 }
    },
    vertexShader: `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
    fragmentShader: `
        uniform sampler2D tDiffuse;
        uniform float uDarkness;
        uniform float uOffset;
        varying vec2 vUv;

        void main() {
            vec4 texel = texture2D(tDiffuse, vUv);

            // Calculate vignette
            vec2 uv = (vUv - vec2(0.5)) * vec2(uOffset);
            float vignette = 1.0 - dot(uv, uv);
            vignette = clamp(pow(vignette, uDarkness), 0.0, 1.0);

            // Apply vignette
            gl_FragColor = vec4(texel.rgb * vignette, texel.a);
        }
    `
}

// Custom color grading shader
const ColorGradingShader = {
    uniforms: {
        tDiffuse: { value: null },
        uContrast: { value: 1.1 },
        uSaturation: { value: 1.2 },
        uBrightness: { value: 1.0 }
    },
    vertexShader: `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
    fragmentShader: `
        uniform sampler2D tDiffuse;
        uniform float uContrast;
        uniform float uSaturation;
        uniform float uBrightness;
        varying vec2 vUv;

        void main() {
            vec4 texel = texture2D(tDiffuse, vUv);

            // Brightness
            vec3 color = texel.rgb * uBrightness;

            // Contrast
            color = (color - 0.5) * uContrast + 0.5;

            // Saturation
            float gray = dot(color, vec3(0.299, 0.587, 0.114));
            color = mix(vec3(gray), color, uSaturation);

            gl_FragColor = vec4(clamp(color, 0.0, 1.0), texel.a);
        }
    `
}

// Glowing torus knot for bloom demonstration
const GlowingTorusKnot = () => {
    const meshRef = $<THREE.Mesh>()

    useFrame((state) => {
        const mesh = $$(meshRef)
        if (mesh) {
            const t = state.clock.getElapsedTime()
            mesh.rotation.x = t * 0.3
            mesh.rotation.y = t * 0.5
        }
    })

    return (
        <mesh ref={meshRef} position={[0, 0, 0]}>
            <torusKnotGeometry args={[1.5, 0.4, 128, 32]} />
            <meshStandardMaterial
                color={0xff6b6b}
                emissive={0xff3333}
                emissiveIntensity={0.5}
                roughness={0.2}
                metalness={0.8}
            />
        </mesh>
    )
}

// Glowing spheres
const GlowingSphere = ({ position, color, emissive }: {
    position: [number, number, number]
    color: number
    emissive: number
}) => {
    const meshRef = $<THREE.Mesh>()

    useFrame((state) => {
        const mesh = $$(meshRef)
        if (mesh) {
            const t = state.clock.getElapsedTime()
            mesh.position.y = position[1] + Math.sin(t * 2 + position[0]) * 0.3
        }
    })

    return (
        <mesh ref={meshRef} position={position}>
            <sphereGeometry args={[0.4, 32, 32]} />
            <meshStandardMaterial
                color={color}
                emissive={emissive}
                emissiveIntensity={0.8}
                roughness={0.1}
                metalness={0.9}
            />
        </mesh>
    )
}

// Central bright object
const CentralOrb = () => {
    const meshRef = $<THREE.Mesh>()

    useFrame((state) => {
        const mesh = $$(meshRef)
        if (mesh && mesh.material) {
            const t = state.clock.getElapsedTime()
            const intensity = 0.5 + Math.sin(t * 3) * 0.3
            ;(mesh.material as THREE.MeshStandardMaterial).emissiveIntensity = intensity
        }
    })

    return (
        <mesh ref={meshRef} position={[0, 0, 0]}>
            <sphereGeometry args={[0.3, 32, 32]} />
            <meshStandardMaterial
                color={0xffffff}
                emissive={0xffffff}
                emissiveIntensity={1}
            />
        </mesh>
    )
}

export const Postprocessing = () => {
    const rendererRef = $<THREE.WebGLRenderer>()
    const sceneRef = $<THREE.Scene>()
    const cameraRef = $<THREE.PerspectiveCamera>()
    const composerRef = $<EffectComposer>()
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

    // Setup postprocessing
    useEffect(() => {
        const renderer = $$(rendererRef)
        const scene = $$(sceneRef)
        const camera = $$(cameraRef)

        if (!renderer || !scene || !camera) return

        // Create effect composer
        const composer = new EffectComposer(renderer)
        composerRef(composer)

        // Render pass - renders the scene
        const renderPass = new RenderPass(scene, camera)
        composer.addPass(renderPass)

        // Bloom pass - creates glow effect on bright areas
        const bloomPass = new UnrealBloomPass(
            new THREE.Vector2(window.innerWidth, window.innerHeight),
            1.5,  // strength
            0.4,  // radius
            0.85  // threshold
        )
        composer.addPass(bloomPass)

        // Custom vignette pass
        const vignettePass = new ShaderPass(VignetteShader)
        vignettePass.uniforms.uDarkness.value = 0.8
        vignettePass.uniforms.uOffset.value = 1.2
        composer.addPass(vignettePass)

        // Custom color grading pass
        const colorGradingPass = new ShaderPass(ColorGradingShader)
        composer.addPass(colorGradingPass)

        // Output pass for correct color space
        const outputPass = new OutputPass()
        composer.addPass(outputPass)

        // Handle resize
        const handleResize = () => {
            const width = window.innerWidth
            const height = window.innerHeight
            composer.setSize(width, height)
            bloomPass.resolution.set(width, height)
        }
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
            composer.dispose()
        }
    })

    // Use composer for rendering instead of renderer
    useFrame(() => {
        const composer = $$(composerRef)
        if (composer) {
            composer.render()
        }
    })

    // Loading state
    if (!$$(checked)) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#0a0a0a', color: 'white' }}>
                <p>Checking WebGPU support...</p>
            </div>
        )
    }

    // Fallback UI
    if (!$$(supported)) {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#0a0a0a', color: 'white', textAlign: 'center', padding: '20px' }}>
                <h1>WebGPU Not Available</h1>
                <p>Please use Chrome 113+ or Edge 113+ for WebGPU support.</p>
                <p style={{ color: '#888', marginTop: '20px' }}>
                    This example demonstrates postprocessing with bloom and custom shaders.
                    Using WebGL fallback with EffectComposer.
                </p>
            </div>
        )
    }

    return (
        <canvas3D>
            <webGLRenderer
                ref={rendererRef}
                antialias
                setPixelRatio={[window.devicePixelRatio]}
                setSize={[window.innerWidth, window.innerHeight]}
                toneMapping={ACESFilmicToneMapping}
                toneMappingExposure={1.0}
            />
            <scene ref={sceneRef} background={new Color(0x050505)}>
                <ambientLight intensity={0.1} />
                <directionalLight position={[5, 10, 5]} intensity={0.3} />

                {/* Point lights for bloom effect */}
                <pointLight position={[0, 3, 0]} intensity={2} color={0xff6b6b} distance={10} />
                <pointLight position={[-3, 1, 2]} intensity={1.5} color={0x4ecdc4} distance={8} />
                <pointLight position={[3, 1, -2]} intensity={1.5} color={0xffe66d} distance={8} />

                {/* Central glowing torus knot */}
                <GlowingTorusKnot />

                {/* Glowing spheres */}
                <GlowingSphere position={[-3, 0, 0]} color={0x4ecdc4} emissive={0x00ffff} />
                <GlowingSphere position={[3, 0, 0]} color={0xffe66d} emissive={0xffff00} />
                <GlowingSphere position={[0, 0, -3]} color={0xff6b6b} emissive={0xff0000} />
                <GlowingSphere position={[0, 0, 3]} color={0xa8e6cf} emissive={0x00ff88} />

                {/* Central bright orb */}
                <CentralOrb />

                {/* Ground plane for reflections */}
                <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <planeGeometry args={[20, 20]} />
                    <meshStandardMaterial
                        color={0x111111}
                        roughness={0.8}
                        metalness={0.2}
                    />
                </mesh>
            </scene>

            <perspectiveCamera
                ref={cameraRef}
                fov={60}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[0, 2, 8]}
            />
            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default Postprocessing
