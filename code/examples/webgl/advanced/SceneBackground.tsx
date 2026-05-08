/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, TextureLoader, Mesh, SphereGeometry, BoxGeometry } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/materials/MeshBasicMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_advanced_scene_background from Three.js examples.
 * Demonstrates scene background options.
 *
 * Source: https://threejs.org/examples/webgl_advanced_scene_background.html
 *
 * Key features:
 * - Color background
 * - Texture background
 * - Cube texture background
 */

export const SceneBackground = () => {
    const backgroundTexture = $<THREE.Texture>()
    const backgroundType = $(0) // 0: color, 1: gradient, 2: texture

    useEffect(() => {
        const loader = new TextureLoader()
        loader.load('https://threejs.org/examples/textures/uv_grid_opengl.jpg', (texture) => {
            backgroundTexture(texture)
        })
    })

    useFrame(({ clock }) => {
        // Animation could go here
    })

    const currentBgType = $$(backgroundType)
    const texture = $$(backgroundTexture)

    // Different background options
    const backgrounds = [
        new Color(0x1a1a2e),
        new Color(0xff6b6b),
        texture
    ]

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={backgrounds[currentBgType] || new Color(0x1a1a2e)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 10, 7]} intensity={1} />

                {/* Main objects */}
                <mesh position={[0, 0.5, 0]}>
                    <sphereGeometry args={[1, 32, 32]} />
                    <meshStandardMaterial color={0x4ecdc4} metalness={0.5} roughness={0.3} />
                </mesh>

                {/* Floor */}
                <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <boxGeometry args={[10, 10, 0.1]} />
                    <meshStandardMaterial color={0x333333} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 3, 5]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default SceneBackground