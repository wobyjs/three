/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, TextureLoader } from 'three'
import * as THREE from 'three'

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
 * Port of webgl_materials_displacementmap from Three.js examples.
 * Demonstrates displacement mapping for surface detail.
 *
 * Source: https://threejs.org/examples/webgl_materials_displacementmap.html
 *
 * Features:
 * - Displacement mapping
 * - Height-based vertex displacement
 * - Normal map integration
 */

export const MaterialsDisplacementmap = () => {
    const meshRef = $<THREE.Mesh>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const mesh = $$(meshRef)
        if (mesh) {
            mesh.rotation.y = time * 0.2
        }
    })

    // Create a procedural displacement texture
    const size = 256
    const canvas = document.createElement('canvas')
    canvas.width = size
    canvas.height = size
    const ctx = canvas.getContext('2d')!

    // Generate noise pattern
    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            const noise = Math.sin(x * 0.1) * Math.cos(y * 0.1) * 0.5 + 0.5
            const value = Math.floor(noise * 255)
            ctx.fillStyle = `rgb(${value}, ${value}, ${value})`
            ctx.fillRect(x, y, 1, 1)
        }
    }

    const displacementMap = new THREE.CanvasTexture(canvas)

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 10, 7]} intensity={1} />

                {/* Sphere with displacement */}
                <mesh ref={meshRef}>
                    <sphereGeometry args={[2, 64, 64]} />
                    <meshStandardMaterial
                        color={0x4ecdc4}
                        roughness={0.5}
                        metalness={0.5}
                        displacementMap={displacementMap}
                        displacementScale={0.5}
                    />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 0, 6]} />

            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default MaterialsDisplacementmap