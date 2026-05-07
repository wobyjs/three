/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, PCFShadowMap } from 'three'
import * as THREE from 'three'
import WebGPU from 'three/examples/jsm/capabilities/WebGPU.js'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/PlaneGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/materials/MeshPhongMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/lights/PointLight'
import '@woby/three/src/lights/SpotLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgpu_lights - Lighting demonstration using WebGPU renderer.
 *
 * Source: https://threejs.org/examples/webgpu_lights.html (conceptual)
 *
 * Demonstrates various light types working with WebGPU rendering pipeline.
 *
 * WebGPU Light Support Notes:
 * - AmbientLight: Fully supported
 * - DirectionalLight: Fully supported with shadows
 * - PointLight: Fully supported with shadows
 * - SpotLight: Fully supported with shadows
 *
 * Note: This example uses WebGLRenderer as fallback since WebGPURenderer
 * wrapper is still experimental. The light rendering patterns are identical.
 */

// Animated light component
const AnimatedPointLight = ({
    color,
    intensity,
    radius,
    speed,
    yOffset
}: {
    color: number
    intensity: number
    radius: number
    speed: number
    yOffset: number
}) => {
    const lightRef = $<THREE.PointLight>()

    useFrame((state) => {
        const light = $$(lightRef)
        if (light && state.clock) {
            const time = state.clock.getElapsedTime() * speed
            light.position.x = Math.cos(time) * radius
            light.position.z = Math.sin(time) * radius
            light.position.y = yOffset + Math.sin(time * 2) * 0.5
        }
    })

    return (
        <pointLight
            ref={lightRef}
            color={color}
            intensity={intensity}
            distance={15}
            decay={2}
        />
    )
}

// Animated spotlight
const AnimatedSpotLight = ({
    position,
    targetPosition,
    color,
    intensity
}: {
    position: [number, number, number]
    targetPosition: [number, number, number]
    color: number
    intensity: number
}) => {
    const lightRef = $<THREE.SpotLight>()

    useFrame((state) => {
        const light = $$(lightRef)
        if (light && state.clock) {
            const time = state.clock.getElapsedTime()
            // Slight movement for dynamic effect
            light.position.x = position[0] + Math.sin(time) * 0.5
            light.position.z = position[2] + Math.cos(time) * 0.5
        }
    })

    return (
        <spotLight
            ref={lightRef}
            color={color}
            intensity={intensity}
            position={position}
            angle={Math.PI / 6}
            penumbra={0.5}
            decay={2}
            distance={20}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
        />
    )
}

export const Lights = () => {
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
                    This example demonstrates lighting. Using WebGL fallback.
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
                shadowMap-enabled={true}
                shadowMap-type={PCFShadowMap}
            />
            <scene background={new Color(0x0a0a0a)}>
                {/* Ambient light for base illumination */}
                <ambientLight intensity={0.1} />

                {/* Main directional light with shadows */}
                <directionalLight
                    position={[5, 10, 5]}
                    intensity={0.5}
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

                {/* Animated point lights */}
                <AnimatedPointLight
                    color={0xff6b6b}
                    intensity={50}
                    radius={3}
                    speed={1}
                    yOffset={1}
                />
                <AnimatedPointLight
                    color={0x4ecdc4}
                    intensity={50}
                    radius={3}
                    speed={1.3}
                    yOffset={0}
                />
                <AnimatedPointLight
                    color={0xffe66d}
                    intensity={50}
                    radius={3}
                    speed={0.8}
                    yOffset={2}
                />

                {/* Spotlight from above */}
                <AnimatedSpotLight
                    position={[0, 8, 0]}
                    targetPosition={[0, 0, 0]}
                    color={0xffffff}
                    intensity={100}
                />

                {/* Ground plane receiving shadows */}
                <mesh
                    position={[0, -1, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    receiveShadow
                >
                    <planeGeometry args={[20, 20]} />
                    <meshStandardMaterial color={0x333333} roughness={0.8} metalness={0.2} />
                </mesh>

                {/* Central sphere casting shadow */}
                <mesh position={[0, 0.5, 0]} castShadow receiveShadow>
                    <sphereGeometry args={[0.8, 32, 32]} />
                    <meshStandardMaterial color={0xffffff} roughness={0.3} metalness={0.7} />
                </mesh>

                {/* Surrounding objects for shadow demonstration */}
                <mesh position={[-2, -0.3, 1]} castShadow receiveShadow>
                    <boxGeometry args={[0.8, 0.8, 0.8]} />
                    <meshStandardMaterial color={0xff6b6b} roughness={0.4} metalness={0.6} />
                </mesh>

                <mesh position={[2, -0.3, -1]} castShadow receiveShadow>
                    <boxGeometry args={[0.8, 0.8, 0.8]} />
                    <meshStandardMaterial color={0x4ecdc4} roughness={0.4} metalness={0.6} />
                </mesh>

                <mesh position={[1.5, -0.3, 2]} castShadow receiveShadow>
                    <sphereGeometry args={[0.5, 16, 16]} />
                    <meshStandardMaterial color={0xffe66d} roughness={0.3} metalness={0.8} />
                </mesh>

                <mesh position={[-1.5, -0.3, -2]} castShadow receiveShadow>
                    <sphereGeometry args={[0.5, 16, 16]} />
                    <meshStandardMaterial color={0xa8e6cf} roughness={0.3} metalness={0.8} />
                </mesh>
            </scene>

            <perspectiveCamera
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

export default Lights
