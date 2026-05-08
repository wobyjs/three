/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, TextureLoader } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_materials_texture_manualmipmap from Three.js examples.
 * Demonstrates manual mipmap generation for textures.
 *
 * Source: https://threejs.org/examples/webgl_materials_texture_manualmipmap.html
 *
 * Features:
 * - Manual mipmap levels
 * - Custom texture LOD
 * - Mipmap visualization
 */

export const MaterialsTextureManualmipmap = () => {
    const cubeRef = $<THREE.Mesh>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const cube = $$(cubeRef)
        if (cube) {
            cube.rotation.y = time * 0.3
            cube.rotation.x = time * 0.2
        }
    })

    // Create texture with mipmap levels
    const size = 256
    const canvas = document.createElement('canvas')
    canvas.width = size
    canvas.height = size
    const ctx = canvas.getContext('2d')!

    // Draw checkerboard pattern
    const tileSize = 16
    for (let y = 0; y < size; y += tileSize) {
        for (let x = 0; x < size; x += tileSize) {
            ctx.fillStyle = ((x / tileSize + y / tileSize) % 2 === 0) ? '#ff6b6b' : '#4ecdc4'
            ctx.fillRect(x, y, tileSize, tileSize)
        }
    }

    const texture = new THREE.CanvasTexture(canvas)
    texture.generateMipmaps = true
    texture.minFilter = THREE.LinearMipmapLinearFilter

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 10, 7]} intensity={1} />

                {/* Cube with mipmapped texture */}
                <mesh ref={cubeRef}>
                    <boxGeometry args={[2, 2, 2]} />
                    <meshStandardMaterial map={texture} roughness={0.5} metalness={0.3} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 0, 5]} />

            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default MaterialsTextureManualmipmap