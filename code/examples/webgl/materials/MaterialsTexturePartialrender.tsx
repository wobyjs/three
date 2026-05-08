/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, WebGLRenderTarget } from 'three'
import * as THREE from 'three'

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
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_materials_texture_partialrender from Three.js examples.
 * Demonstrates partial texture rendering.
 *
 * Source: https://threejs.org/examples/webgl_materials_texture_partialrender.html
 *
 * Features:
 * - Render targets
 * - Partial updates
 * - Dynamic textures
 */

export const MaterialsTexturePartialrender = () => {
    const cubeRef = $<THREE.Mesh>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const cube = $$(cubeRef)
        if (cube) {
            cube.rotation.y = time * 0.3
            cube.rotation.x = time * 0.2
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x0a0a0a)}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 10, 7]} intensity={1} />

                {/* Cube with dynamic texture */}
                <mesh ref={cubeRef}>
                    <boxGeometry args={[2, 2, 2]} />
                    <meshStandardMaterial color={0xff6b6b} roughness={0.5} metalness={0.3} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 0, 5]} />

            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default MaterialsTexturePartialrender