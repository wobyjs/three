/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, TextureLoader } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/PlaneGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_materials_lightmap from Three.js examples.
 * Demonstrates lightmap (baked lighting) textures.
 *
 * Source: https://threejs.org/examples/webgl_materials_lightmap.html
 *
 * Features:
 * - Lightmap textures
 * - Baked lighting
 * - Precomputed illumination
 */

export const MaterialsLightmap = () => {
    const meshRef = $<THREE.Mesh>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const mesh = $$(meshRef)
        if (mesh) {
            mesh.rotation.y = time * 0.1
        }
    })

    // Create a procedural lightmap
    const size = 128
    const canvas = document.createElement('canvas')
    canvas.width = size
    canvas.height = size
    const ctx = canvas.getContext('2d')!

    // Create gradient lightmap
    const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
    gradient.addColorStop(0, 'white')
    gradient.addColorStop(1, 'black')
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, size, size)

    const lightMap = new THREE.CanvasTexture(canvas)

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a1a)}>
                <ambientLight intensity={0.2} />
                <directionalLight position={[5, 10, 7]} intensity={0.3} />

                {/* Room with lightmap */}
                <mesh ref={meshRef} position={[0, 0, 0]}>
                    <boxGeometry args={[4, 4, 4]} />
                    <meshStandardMaterial
                        color={0x888888}
                        lightMap={lightMap}
                        lightMapIntensity={2}
                        side={THREE.BackSide}
                    />
                </mesh>

                {/* Light source visualization */}
                <mesh position={[0, 0, 0]}>
                    <sphereGeometry args={[0.2, 16, 16]} />
                    <meshStandardMaterial color={0xffff00} emissive={0xffff00} emissiveIntensity={2} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 0, 8]} />

            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default MaterialsLightmap