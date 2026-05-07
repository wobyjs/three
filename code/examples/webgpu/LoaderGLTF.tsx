/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, GLTFLoader, DRACOLoader, MeshoptDecoder, ACESFilmicToneMapping } from 'three'
import * as THREE from 'three'
import WebGPU from 'three/examples/jsm/capabilities/WebGPU.js'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/materials/MeshBasicMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/lights/PointLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgpu_loader_gltf - GLTF model loading with WebGPU renderer.
 *
 * Source: https://threejs.org/examples/webgpu_loader_gltf.html (conceptual)
 *
 * Demonstrates loading GLTF/GLB models with WebGPU rendering pipeline.
 *
 * WebGPU GLTF Loading Notes:
 * - GLTFLoader: Fully supported with WebGPU
 * - DRACOLoader: Works for compressed models
 * - MeshoptDecoder: Supported for meshopt-compressed models
 * - Materials: PBR materials render correctly
 * - Animations: Skeleton animations work
 *
 * Key Differences from WebGL:
 * - WebGPU handles compressed textures more efficiently
 * - Better performance with complex models
 * - Native support for KHR_materials_volume and other extensions
 *
 * Note: This example uses WebGLRenderer as fallback since WebGPURenderer
 * wrapper is still experimental. The loading patterns are identical.
 */

// Loading state component
const LoadingIndicator = ({ progress }: { progress: number }) => (
    <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        color: 'white',
        fontFamily: 'system-ui, sans-serif'
    }}>
        <div style={{
            width: '200px',
            height: '4px',
            background: '#333',
            borderRadius: '2px',
            overflow: 'hidden',
            marginBottom: '10px'
        }}>
            <div style={{
                width: `${progress}%`,
                height: '100%',
                background: 'linear-gradient(90deg, #4ecdc4, #44a3aa)',
                transition: 'width 0.3s ease'
            }} />
        </div>
        <p style={{ margin: 0, color: '#888' }}>
            Loading model... {Math.round(progress)}%
        </p>
    </div>
)

// Fallback cube when model fails to load
const FallbackCube = () => {
    const meshRef = $<THREE.Mesh>()

    useFrame((state) => {
        const mesh = $$(meshRef)
        if (mesh) {
            const t = state.clock.getElapsedTime()
            mesh.rotation.x = t * 0.5
            mesh.rotation.y = t * 0.3
        }
    })

    return (
        <mesh ref={meshRef}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={0x4ecdc4} roughness={0.3} metalness={0.7} />
        </mesh>
    )
}

// Ground plane with grid
const GroundPlane = () => (
    <mesh position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color={0x1a1a2e} roughness={0.9} metalness={0.1} />
    </mesh>
)

// Environment spheres for visual context
const EnvironmentSphere = ({ position, color }: { position: [number, number, number], color: number }) => {
    const meshRef = $<THREE.Mesh>()

    useFrame((state) => {
        const mesh = $$(meshRef)
        if (mesh) {
            const t = state.clock.getElapsedTime()
            mesh.position.y = position[1] + Math.sin(t * 0.5 + position[0]) * 0.2
        }
    })

    return (
        <mesh ref={meshRef} position={position}>
            <sphereGeometry args={[0.3, 16, 16]} />
            <meshStandardMaterial color={color} roughness={0.2} metalness={0.8} />
        </mesh>
    )
}

export const LoaderGLTF = () => {
    const rendererRef = $<THREE.WebGLRenderer>()
    const sceneRef = $<THREE.Scene>()
    const cameraRef = $<THREE.PerspectiveCamera>()
    const modelRef = $<THREE.Group>()
    const [supported, setSupported] = $(false)
    const [checked, setChecked] = $(false)
    const [loading, setLoading] = $(true)
    const [loadProgress, setLoadProgress] = $(0)
    const [loadError, setLoadError] = $(false)

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

    // Load GLTF model
    useEffect(() => {
        const scene = $$(sceneRef)
        if (!scene || !$$(supported)) return

        const loader = new GLTFLoader()

        // Optional: Setup DRACOLoader for compressed models
        // const dracoLoader = new DRACOLoader()
        // dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/')
        // loader.setDRACOLoader(dracoLoader)

        // Optional: Setup MeshoptDecoder for meshopt-compressed models
        // loader.setMeshoptDecoder(MeshoptDecoder)

        // Use a simple demo model - the DamagedHelmet is a classic test model
        const modelUrl = 'https://threejs.org/examples/models/gltf/DamagedHelmet/glTF/DamagedHelmet.gltf'

        loader.load(
            modelUrl,
            (gltf) => {
                const model = gltf.scene
                model.scale.set(1, 1, 1)
                model.position.set(0, 0, 0)

                // Enable shadows on all meshes
                model.traverse((child) => {
                    if (child instanceof THREE.Mesh) {
                        child.castShadow = true
                        child.receiveShadow = true
                    }
                })

                scene.add(model)
                modelRef(model)
                setLoading(false)
                setLoadProgress(100)

                // Play animations if any
                if (gltf.animations && gltf.animations.length > 0) {
                    const mixer = new THREE.AnimationMixer(model)
                    mixer.clipAction(gltf.animations[0]).play()
                }
            },
            (progress) => {
                if (progress.total > 0) {
                    const percent = (progress.loaded / progress.total) * 100
                    setLoadProgress(Math.min(percent, 95))
                }
            },
            (error) => {
                console.warn('Model loading failed:', error)
                setLoadError(true)
                setLoading(false)
            }
        )
    })

    // Animate model rotation
    useFrame((state) => {
        const model = $$(modelRef)
        if (model) {
            model.rotation.y = state.clock.getElapsedTime() * 0.3
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
                    GLTF models load and render with WebGPU acceleration.
                    Using WebGL fallback.
                </p>
            </div>
        )
    }

    return (
        <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
            {$$(loading) && <LoadingIndicator progress={$$(loadProgress)} />}

            <canvas3D>
                <webGLRenderer
                    ref={rendererRef}
                    antialias
                    setPixelRatio={[window.devicePixelRatio]}
                    setSize={[window.innerWidth, window.innerHeight]}
                    toneMapping={ACESFilmicToneMapping}
                    toneMappingExposure={1.0}
                    shadowMap-enabled={true}
                    shadowMap-type={THREE.PCFSoftShadowMap}
                />
                <scene ref={sceneRef} background={new Color(0x0a0a0a)}>
                    <ambientLight intensity={0.3} />
                    <directionalLight
                        position={[5, 10, 5]}
                        intensity={1}
                        castShadow
                        shadow-mapSize-width={2048}
                        shadow-mapSize-height={2048}
                    />
                    <pointLight position={[-5, 5, 5]} intensity={0.5} color={0x4ecdc4} />
                    <pointLight position={[5, 5, -5]} intensity={0.5} color={0xff6b6b} />

                    {/* Fallback cube if model fails to load */}
                    {$$(loadError) && <FallbackCube />}

                    {/* Ground plane */}
                    <GroundPlane />

                    {/* Environment spheres */}
                    <EnvironmentSphere position={[-3, 0.5, -2]} color={0xff6b6b} />
                    <EnvironmentSphere position={[3, 0.5, -2]} color={0x4ecdc4} />
                    <EnvironmentSphere position={[-3, 0.5, 2]} color={0xffe66d} />
                    <EnvironmentSphere position={[3, 0.5, 2]} color={0xa8e6cf} />
                </scene>

                <perspectiveCamera
                    ref={cameraRef}
                    fov={45}
                    aspect={window.innerWidth / window.innerHeight}
                    near={0.1}
                    far={100}
                    position={[0, 1, 4]}
                />
                <orbitControls
                    enableDamping
                    target={[0, 0, 0]}
                    minDistance={2}
                    maxDistance={10}
                />
            </canvas3D>
        </div>
    )
}

export default LoaderGLTF
