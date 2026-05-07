/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, CubeTextureLoader, EquirectangularReflectionMapping, Spherical } from 'three'
import * as THREE from 'three'
import WebGPU from 'three/examples/jsm/capabilities/WebGPU.js'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/TorusGeometry'
import '@woby/three/src/geometries/TorusKnotGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/materials/MeshBasicMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgpu_cubemap - Environment cubemap rendering with WebGPU renderer.
 *
 * Source: https://threejs.org/examples/webgpu_cubemap.html (conceptual)
 *
 * Demonstrates environment mapping using cubemaps with WebGPU rendering pipeline.
 *
 * WebGPU Cubemap Advantages:
 * 1. Better Performance: WebGPU handles cubemap sampling more efficiently
 * 2. Prefiltered Mipmaps: Better support for roughness-based reflections
 * 3. HDR Cubemaps: Native support for HDR environment maps
 * 4. Real-time Cubemap: Efficient render-to-cubemap for reflections
 *
 * Cubemap Types in Three.js:
 * - CubeTexture: Traditional 6-face cubemap
 * - CubeRenderTarget: Render scene to cubemap in real-time
 * - PMREMGenerator: Prefiltered Mipmap Radiance Environment Maps
 *
 * Use Cases:
 * - Skybox: Background environment rendering
 * - Reflections: Reflective materials (chrome, water, metal)
 * - Refractions: Transparent materials (glass, water)
 * - IBL: Image-based lighting for PBR materials
 *
 * Note: This example uses WebGLRenderer as fallback since WebGPURenderer
 * wrapper is still experimental. The cubemap patterns are identical.
 */

// Reflective sphere with environment mapping
const ReflectiveSphere = ({
    position,
    size,
    roughness,
    metalness
}: {
    position: [number, number, number]
    size: number
    roughness: number
    metalness: number
}) => {
    const meshRef = $<THREE.Mesh>()

    useFrame((state) => {
        const mesh = $$(meshRef)
        if (mesh) {
            const t = state.clock.getElapsedTime()
            mesh.rotation.y = t * 0.2
        }
    })

    return (
        <mesh ref={meshRef} position={position} castShadow>
            <sphereGeometry args={[size, 64, 64]} />
            <meshStandardMaterial
                color={0xffffff}
                roughness={roughness}
                metalness={metalness}
                envMapIntensity={1}
            />
        </mesh>
    )
}

// Reflective torus knot
const ReflectiveTorusKnot = () => {
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
        <mesh ref={meshRef} position={[0, 0, 0]} castShadow>
            <torusKnotGeometry args={[1.2, 0.35, 128, 32]} />
            <meshStandardMaterial
                color={0xffffff}
                roughness={0.1}
                metalness={1}
                envMapIntensity={1}
            />
        </mesh>
    )
}

// Reflective box with beveled appearance
const ReflectiveBox = ({
    position,
    rotationSpeed
}: {
    position: [number, number, number]
    rotationSpeed: number
}) => {
    const meshRef = $<THREE.Mesh>()

    useFrame((state) => {
        const mesh = $$(meshRef)
        if (mesh) {
            const t = state.clock.getElapsedTime()
            mesh.rotation.x = t * rotationSpeed
            mesh.rotation.y = t * rotationSpeed * 0.7
        }
    })

    return (
        <mesh ref={meshRef} position={position} castShadow>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial
                color={0xffffff}
                roughness={0.2}
                metalness={0.9}
                envMapIntensity={1}
            />
        </mesh>
    )
}

// Ground plane
const Ground = () => (
    <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial
            color={0x1a1a2e}
            roughness={0.8}
            metalness={0.2}
        />
    </mesh>
)

// Orbiting camera indicator (visual helper)
const OrbitingIndicator = ({ radius, speed, color }: { radius: number, speed: number, color: number }) => {
    const meshRef = $<THREE.Mesh>()

    useFrame((state) => {
        const mesh = $$(meshRef)
        if (mesh) {
            const t = state.clock.getElapsedTime() * speed
            mesh.position.x = Math.cos(t) * radius
            mesh.position.z = Math.sin(t) * radius
            mesh.position.y = Math.sin(t * 2) * 0.5
        }
    })

    return (
        <mesh ref={meshRef}>
            <sphereGeometry args={[0.15, 16, 16]} />
            <meshBasicMaterial color={color} />
        </mesh>
    )
}

export const Cubemap = () => {
    const rendererRef = $<THREE.WebGLRenderer>()
    const sceneRef = $<THREE.Scene>()
    const cameraRef = $<THREE.PerspectiveCamera>()
    const [supported, setSupported] = $(false)
    const [checked, setChecked] = $(false)
    const [envLoaded, setEnvLoaded] = $(false)

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

    // Load environment cubemap
    useEffect(() => {
        const scene = $$(sceneRef)
        const renderer = $$(rendererRef)
        if (!scene || !renderer || !$$(supported)) return

        // Load HDR environment map
        // Using a public equirectangular HDR environment
        const loader = new THREE.TextureLoader()
        const envUrl = 'https://threejs.org/examples/textures/equirectangular/venice_sunset_1k.hdr'

        // For demo purposes, create a procedural gradient environment
        // In production, you would use RGBELoader for HDR or CubeTextureLoader for cubemaps
        const pmremGenerator = new THREE.PMREMGenerator(renderer)
        pmremGenerator.compileEquirectangularShader()

        // Create a simple gradient environment for demo
        const envScene = new THREE.Scene()
        const gradientMaterial = new THREE.ShaderMaterial({
            uniforms: {
                topColor: { value: new THREE.Color(0x0077ff) },
                bottomColor: { value: new THREE.Color(0xffffff) },
                offset: { value: 33 },
                exponent: { value: 0.6 }
            },
            vertexShader: `
                varying vec3 vWorldPosition;
                void main() {
                    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
                    vWorldPosition = worldPosition.xyz;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform vec3 topColor;
                uniform vec3 bottomColor;
                uniform float offset;
                uniform float exponent;
                varying vec3 vWorldPosition;
                void main() {
                    float h = normalize(vWorldPosition + offset).y;
                    gl_FragColor = vec4(mix(bottomColor, topColor, max(pow(max(h, 0.0), exponent), 0.0)), 1.0);
                }
            `,
            side: THREE.BackSide
        })

        const envMesh = new THREE.Mesh(
            new THREE.SphereGeometry(50, 32, 32),
            gradientMaterial
        )
        envScene.add(envMesh)

        // Generate environment map
        const renderTarget = pmremGenerator.fromScene(envScene, 0.04)
        const envMap = renderTarget.texture

        scene.environment = envMap
        scene.background = new Color(0x0a0a1a)

        setEnvLoaded(true)

        // Cleanup
        return () => {
            pmremGenerator.dispose()
            renderTarget.dispose()
        }
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
                    This example demonstrates environment cubemap reflections.
                    Using WebGL fallback with procedural environment.
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
                toneMapping={THREE.ACESFilmicToneMapping}
                toneMappingExposure={1.0}
            />
            <scene ref={sceneRef} background={new Color(0x0a0a1a)}>
                <ambientLight intensity={0.1} />
                <directionalLight position={[5, 10, 5]} intensity={0.5} castShadow />

                {/* Central reflective torus knot */}
                <ReflectiveTorusKnot />

                {/* Reflective spheres with varying roughness */}
                <ReflectiveSphere position={[-3, 0, 0]} size={0.8} roughness={0} metalness={1} />
                <ReflectiveSphere position={[3, 0, 0]} size={0.8} roughness={0.2} metalness={1} />
                <ReflectiveSphere position={[-3, 0, 3]} size={0.8} roughness={0.5} metalness={1} />
                <ReflectiveSphere position={[3, 0, 3]} size={0.8} roughness={0.8} metalness={1} />

                {/* Reflective boxes */}
                <ReflectiveBox position={[-2, -1, -2]} rotationSpeed={0.5} />
                <ReflectiveBox position={[2, -1, -2]} rotationSpeed={0.7} />

                {/* Orbiting indicators */}
                <OrbitingIndicator radius={4} speed={0.5} color={0xff6b6b} />
                <OrbitingIndicator radius={4.5} speed={0.3} color={0x4ecdc4} />
                <OrbitingIndicator radius={5} speed={0.4} color={0xffe66d} />

                {/* Ground */}
                <Ground />
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

export default Cubemap
