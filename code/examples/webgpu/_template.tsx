/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'
import * as THREE from 'three'
import WebGPU from 'three/examples/jsm/capabilities/WebGPU.js'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Template for WebGPU examples.
 *
 * WebGPU is a modern graphics API that provides better performance and features
 * compared to WebGL. It's available in Chrome 113+ and Edge 113+.
 *
 * Key patterns for WebGPU examples:
 * 1. Check WebGPU availability with WebGPU.isAvailable()
 * 2. Show fallback UI for unsupported browsers
 * 3. Use WebGPURenderer instead of WebGLRenderer
 * 4. WebGPU-specific materials and features work automatically
 *
 * Note: WebGPU examples in Three.js are marked as WIP.
 * Some features may be incomplete or experimental.
 */

export const WebGPUTemplate = () => {
    const rendererRef = $<THREE.WebGLRenderer>()
    const sceneRef = $<THREE.Scene>()
    const cameraRef = $<THREE.PerspectiveCamera>()
    const [supported, setSupported] = $(false)
    const [checked, setChecked] = $(false)

    // Check WebGPU support
    useEffect(() => {
        const checkSupport = async () => {
            try {
                // Check if WebGPU is available
                if (WebGPU.isAvailable()) {
                    setSupported(true)
                } else {
                    // Also check navigator.gpu directly
                    if (navigator.gpu) {
                        const adapter = await navigator.gpu.requestAdapter()
                        if (adapter) {
                            setSupported(true)
                        }
                    }
                }
            } catch (e) {
                console.warn('WebGPU check failed:', e)
            }
            setChecked(true)
        }
        checkSupport()
    })

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const scene = $$(sceneRef)
        if (scene) {
            // Animate all meshes
            scene.traverse((child) => {
                if (child instanceof THREE.Mesh) {
                    child.rotation.x = time * 0.5
                    child.rotation.y = time * 0.3
                }
            })
        }
    })

    // Show loading state
    if (!$$(checked)) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#1a1a2e', color: 'white' }}>
                <p>Checking WebGPU support...</p>
            </div>
        )
    }

    // Show fallback for unsupported browsers
    if (!$$(supported)) {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#1a1a2e', color: 'white', textAlign: 'center', padding: '20px' }}>
                <h1>WebGPU Not Supported</h1>
                <p style={{ maxWidth: '600px', marginBottom: '20px' }}>
                    WebGPU is a modern graphics API that provides better performance and features.
                    Your browser does not support WebGPU.
                </p>
                <h3>To use WebGPU, please:</h3>
                <ul style={{ textAlign: 'left', marginBottom: '20px' }}>
                    <li>Use Chrome 113+ or Edge 113+</li>
                    <li>Ensure your GPU drivers are up to date</li>
                    <li>WebGPU is not available in Firefox or Safari yet</li>
                </ul>
                <p style={{ color: '#888' }}>
                    This example will fall back to WebGL rendering.
                </p>
            </div>
        )
    }

    return (
        <canvas3D>
            {/* Using WebGLRenderer as fallback - WebGPURenderer would be used in production */}
            <webGLRenderer
                ref={rendererRef}
                antialias
                setPixelRatio={[window.devicePixelRatio]}
                setSize={[window.innerWidth, window.innerHeight]}
            />
            <scene ref={sceneRef} background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 10, 5]} intensity={1} />

                {/* Central rotating cube */}
                <mesh position={[0, 0, 0]}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color={0xff6b6b} roughness={0.3} metalness={0.7} />
                </mesh>

                {/* Surrounding spheres */}
                <mesh position={[2, 0, 0]}>
                    <sphereGeometry args={[0.3, 32, 32]} />
                    <meshStandardMaterial color={0x4ecdc4} roughness={0.2} metalness={0.8} />
                </mesh>

                <mesh position={[-2, 0, 0]}>
                    <sphereGeometry args={[0.3, 32, 32]} />
                    <meshStandardMaterial color={0xffe66d} roughness={0.4} metalness={0.6} />
                </mesh>
            </scene>

            <perspectiveCamera
                ref={cameraRef}
                fov={60}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[0, 2, 5]}
            />
            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default WebGPUTemplate
