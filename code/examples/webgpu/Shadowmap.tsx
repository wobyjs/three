/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, PCFSoftShadowMap, Vector3 } from 'three'
import * as THREE from 'three'
import WebGPU from 'three/examples/jsm/capabilities/WebGPU.js'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/PlaneGeometry'
import '@woby/three/src/geometries/TorusGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/materials/MeshPhongMaterial'
import '@woby/three/src/materials/ShadowMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/lights/SpotLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgpu_shadowmap - Shadow mapping demonstration with WebGPU renderer.
 *
 * Source: https://threejs.org/examples/webgpu_shadowmap.html (conceptual)
 *
 * Demonstrates real-time shadow mapping using WebGPU rendering pipeline.
 *
 * WebGPU Shadow Advantages:
 * 1. Better Performance: WebGPU handles shadow map rendering more efficiently
 * 2. Higher Resolution: Can support larger shadow maps without performance hit
 * 3. VSM (Variance Shadow Maps): Native support in WebGPU
 * 4. PCF Filtering: Better quality soft shadows
 *
 * Shadow Types in Three.js:
 * - BasicShadowMap: Fastest, aliased shadows
 * - PCFShadowMap: Percentage-closer filtering (default)
 * - PCFSoftShadowMap: Soft shadows with PCF
 * - VSMShadowMap: Variance shadow maps (best quality)
 *
 * WebGPU-Specific Features:
 * - Native compute shader support for shadow filtering
 * - Better memory management for shadow buffers
 * - Efficient cascaded shadow maps for large scenes
 *
 * Note: This example uses WebGLRenderer as fallback since WebGPURenderer
 * wrapper is still experimental. The shadow patterns are identical.
 */

// Animated object that casts shadows
const ShadowCaster = ({
    position,
    geometry,
    color,
    animationType
}: {
    position: [number, number, number]
    geometry: 'box' | 'sphere' | 'torus'
    color: number
    animationType: 'rotate' | 'bounce' | 'orbit'
}) => {
    const meshRef = $<THREE.Mesh>()
    const initialY = position[1]

    useFrame((state) => {
        const mesh = $$(meshRef)
        if (!mesh) return

        const t = state.clock.getElapsedTime()

        switch (animationType) {
            case 'rotate':
                mesh.rotation.x = t * 0.5
                mesh.rotation.y = t * 0.7
                break
            case 'bounce':
                mesh.position.y = initialY + Math.abs(Math.sin(t * 2)) * 1.5
                mesh.rotation.x = t * 0.3
                break
            case 'orbit':
                mesh.position.x = position[0] + Math.cos(t) * 1.5
                mesh.position.z = position[2] + Math.sin(t) * 1.5
                break
        }
    })

    return (
        <mesh ref={meshRef} position={position} castShadow>
            {geometry === 'box' && <boxGeometry args={[0.8, 0.8, 0.8]} />}
            {geometry === 'sphere' && <sphereGeometry args={[0.5, 32, 32]} />}
            {geometry === 'torus' && <torusGeometry args={[0.4, 0.15, 16, 32]} />}
            <meshStandardMaterial color={color} roughness={0.3} metalness={0.7} />
        </mesh>
    )
}

// Ground plane that receives shadows
const ShadowReceiver = () => (
    <mesh
        position={[0, -1, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
    >
        <planeGeometry args={[20, 20]} />
        <shadowMaterial opacity={0.3} />
    </mesh>
)

// Colored ground for better visual
const ColoredGround = () => (
    <mesh
        position={[0, -1.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
    >
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color={0x1a1a2e} roughness={0.9} />
    </mesh>
)

// Light helper visualization (optional)
const LightIndicator = ({ position, color }: { position: [number, number, number], color: number }) => (
    <mesh position={position}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshBasicMaterial color={color} />
    </mesh>
)

// Animated spotlight
const AnimatedSpotlight = ({
    ref_,
    color,
    intensity,
    initialPosition
}: {
    ref_?: any
    color: number
    intensity: number
    initialPosition: [number, number, number]
}) => {
    const lightRef = $<THREE.SpotLight>()

    useFrame((state) => {
        const light = $$(lightRef)
        if (light) {
            const t = state.clock.getElapsedTime()
            // Slight movement for dynamic shadows
            light.position.x = initialPosition[0] + Math.sin(t * 0.5) * 2
            light.position.z = initialPosition[2] + Math.cos(t * 0.5) * 2
        }
    })

    return (
        <spotLight
            ref={lightRef}
            color={color}
            intensity={intensity}
            position={initialPosition}
            angle={Math.PI / 5}
            penumbra={0.3}
            decay={2}
            distance={30}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={1}
            shadow-camera-far={30}
        />
    )
}

export const Shadowmap = () => {
    const rendererRef = $<THREE.WebGLRenderer>()
    const sceneRef = $<THREE.Scene>()
    const cameraRef = $<THREE.PerspectiveCamera>()
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
                    This example demonstrates real-time shadow mapping.
                    Using WebGL fallback with PCF soft shadows.
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
                shadowMap-enabled={true}
                shadowMap-type={PCFSoftShadowMap}
            />
            <scene ref={sceneRef} background={new Color(0x0a0a0a)}>
                {/* Ambient light for base illumination */}
                <ambientLight intensity={0.1} />

                {/* Main directional light with shadows */}
                <directionalLight
                    position={[5, 10, 5]}
                    intensity={0.8}
                    castShadow
                    shadow-mapSize-width={2048}
                    shadow-mapSize-height={2048}
                    shadow-camera-near={0.5}
                    shadow-camera-far={50}
                    shadow-camera-left={-10}
                    shadow-camera-right={10}
                    shadow-camera-top={10}
                    shadow-camera-bottom={-10}
                />
                <LightIndicator position={[5, 10, 5]} color={0xffffff} />

                {/* Animated spotlights for dynamic shadows */}
                <AnimatedSpotlight
                    color={0xff6b6b}
                    intensity={100}
                    initialPosition={[-4, 6, 2]}
                />
                <AnimatedSpotlight
                    color={0x4ecdc4}
                    intensity={100}
                    initialPosition={[4, 6, -2]}
                />

                {/* Shadow casting objects */}
                <ShadowCaster
                    position={[0, 0, 0]}
                    geometry="box"
                    color={0xffe66d}
                    animationType="rotate"
                />
                <ShadowCaster
                    position={[-2, 0, 1]}
                    geometry="sphere"
                    color={0xff6b6b}
                    animationType="bounce"
                />
                <ShadowCaster
                    position={[2, 0, 1]}
                    geometry="torus"
                    color={0x4ecdc4}
                    animationType="orbit"
                />
                <ShadowCaster
                    position={[0, 0, -2]}
                    geometry="box"
                    color={0xa8e6cf}
                    animationType="bounce"
                />
                <ShadowCaster
                    position={[-3, 0, -1]}
                    geometry="sphere"
                    color={0xff8b94}
                    animationType="rotate"
                />
                <ShadowCaster
                    position={[3, 0, -1]}
                    geometry="torus"
                    color={0x7c3aed}
                    animationType="orbit"
                />

                {/* Ground */}
                <ColoredGround />
                <ShadowReceiver />
            </scene>

            <perspectiveCamera
                ref={cameraRef}
                fov={60}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[5, 5, 8]}
            />
            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default Shadowmap
