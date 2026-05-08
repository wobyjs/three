/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/PlaneGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/materials/MeshBasicMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_camera_logarithmicdepthbuffer from Three.js examples.
 * Demonstrates logarithmic depth buffer for rendering large scenes with
 * both near and far objects without z-fighting.
 *
 * Source: https://threejs.org/examples/webgl_camera_logarithmicdepthbuffer.html
 *
 * Key feature: Uses logarithmic depth buffer to handle extreme depth ranges.
 */

export const CameraLogarithmicDepthBuffer = () => {
    const meshRef = $<THREE.Mesh>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const mesh = $$(meshRef)
        if (mesh) {
            mesh.rotation.y = time * 0.1
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias logarithmicDepthBuffer setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x050505)}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[1, 1, 1]} intensity={0.8} />

                {/* Near objects */}
                <mesh position={[0, 0, 0.5]}>
                    <boxGeometry args={[0.5, 0.5, 0.5]} />
                    <meshStandardMaterial color={0xff0000} />
                </mesh>

                {/* Mid-range objects */}
                <mesh position={[0, 0, -50]}>
                    <sphereGeometry args={[5, 32, 32]} />
                    <meshStandardMaterial color={0x00ff00} />
                </mesh>

                {/* Far objects - demonstrating extreme depth range */}
                {Array.from({ length: 10 }).map((_, i) => {
                    const z = -100 - i * 100
                    const scale = 10 + i * 5
                    return (
                        <mesh key={i} position={[0, 0, z]} scale={[scale, scale, scale]}>
                            <boxGeometry args={[1, 1, 1]} />
                            <meshStandardMaterial
                                color={new Color().setHSL(i / 10, 0.8, 0.5)}
                            />
                        </mesh>
                    )
                })}

                {/* Very far sphere */}
                <mesh position={[0, 0, -1000]}>
                    <sphereGeometry args={[50, 32, 32]} />
                    <meshStandardMaterial color={0x0000ff} />
                </mesh>
            </scene>

            {/* Camera with extreme far plane - enabled by logarithmic depth buffer */}
            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={10000} position={[0, 50, 100]} />

            <orbitControls enableDamping target={[0, 0, -200]} />
        </canvas3D>
    )
}

export default CameraLogarithmicDepthBuffer
