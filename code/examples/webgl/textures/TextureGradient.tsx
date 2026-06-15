/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/PlaneGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_textures_gradient from Three.js examples.
 * Demonstrates gradient texture generation and usage.
 *
 * Source: https://threejs.org/examples/webgl_texturegradient.html
 */

export const TextureGradient = () => {
    const meshRef = $<THREE.Mesh>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const mesh = $$(meshRef)
        if (mesh) mesh.rotation.z = time * 0.1
    })

    // Create gradient texture
    const canvas = document.createElement('canvas')
    canvas.width = 256
    canvas.height = 256
    const ctx = canvas.getContext('2d')!
    const gradient = ctx.createLinearGradient(0, 0, 256, 0)
    gradient.addColorStop(0, '#ff6b6b')
    gradient.addColorStop(0.5, '#4ecdc4')
    gradient.addColorStop(1, '#ffe66d')
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, 256, 256)
    const gradientTexture = new THREE.CanvasTexture(canvas)

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 10, 5]} intensity={1} />

                {/* Sphere with gradient texture */}
                <mesh ref={meshRef}>
                    <sphereGeometry args={[2, 64, 64]} />
                    <meshStandardMaterial map={gradientTexture} roughness={0.5} />
                </mesh>

                {/* Plane with gradient */}
                <mesh position={[5, 0, 0]} rotation={[0, -Math.PI / 4, 0]}>
                    <planeGeometry args={[3, 3]} />
                    <meshStandardMaterial map={gradientTexture} />
                </mesh>

                {/* Floor */}
                <mesh position={[0, -3, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <planeGeometry args={[20, 20]} />
                    <meshStandardMaterial color={0x222222} roughness={0.8} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 2, 8]} />
            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default TextureGradient