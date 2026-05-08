/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, TextureLoader } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_materials_texture_anisotropy from Three.js examples.
 * Demonstrates anisotropic texture filtering.
 *
 * Source: https://threejs.org/examples/webgl_materials_texture_anisotropy.html
 *
 * Features:
 * - Anisotropic filtering
 * - Texture quality at grazing angles
 * - Mipmap improvements
 */

export const MaterialsTextureAnisotropy = () => {
    const planeRef = $<THREE.Mesh>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        // No animation needed for this demo
    })

    // Create a checkerboard texture
    const size = 512
    const canvas = document.createElement('canvas')
    canvas.width = size
    canvas.height = size
    const ctx = canvas.getContext('2d')!

    const tileSize = 32
    for (let y = 0; y < size; y += tileSize) {
        for (let x = 0; x < size; x += tileSize) {
            ctx.fillStyle = ((x / tileSize + y / tileSize) % 2 === 0) ? '#ffffff' : '#888888'
            ctx.fillRect(x, y, tileSize, tileSize)
        }
    }

    const texture = new THREE.CanvasTexture(canvas)
    texture.anisotropy = 16 // Max anisotropy

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 10, 7]} intensity={1} />

                {/* Floor with anisotropic texture */}
                <mesh ref={planeRef} rotation={[-Math.PI / 2.5, 0, 0]} position={[0, 0, 0]}>
                    <planeGeometry args={[20, 20]} />
                    <meshStandardMaterial map={texture} roughness={0.8} metalness={0.2} />
                </mesh>

                {/* Sphere for reference */}
                <mesh position={[0, 1, 0]}>
                    <sphereGeometry args={[0.5, 32, 32]} />
                    <meshStandardMaterial color={0xff6b6b} roughness={0.3} metalness={0.7} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 3, 8]} />

            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default MaterialsTextureAnisotropy