/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'
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
 * Port of webgl_geometry_colors_lookuptable from Three.js examples.
 * Demonstrates using a lookup table (LUT) for color mapping on geometry.
 *
 * Source: https://threejs.org/examples/webgl_geometry_colors_lookuptable.html
 *
 * Features:
 * - LUT-based color mapping
 * - Data visualization coloring
 */

export const GeometryColorsLookupTable = () => {
    const meshRef = $<THREE.Mesh>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const mesh = $$(meshRef)
        if (mesh) {
            mesh.rotation.y = time * 0.2
        }
    })

    // Create sphere with height-based coloring (simulating LUT)
    const geometry = new THREE.SphereGeometry(2, 64, 64)
    const count = geometry.attributes.position.count
    const colors = new Float32Array(count * 3)

    const positions = geometry.attributes.position.array as Float32Array
    for (let i = 0; i < count; i++) {
        const y = positions[i * 3 + 1]
        const normalizedY = (y + 2) / 4 // Normalize to 0-1 range

        // Rainbow LUT mapping
        const color = new THREE.Color()
        color.setHSL(0.7 - normalizedY * 0.7, 0.9, 0.5)
        colors[i * 3] = color.r
        colors[i * 3 + 1] = color.g
        colors[i * 3 + 2] = color.b
    }

    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x0a0a0a)}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 10, 7]} intensity={1} />

                {/* Sphere with LUT-colored vertices */}
                <mesh ref={meshRef} geometry={geometry}>
                    <meshStandardMaterial vertexColors roughness={0.3} metalness={0.5} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 0, 5]} />

            <orbitControls enableDamping autoRotate autoRotateSpeed={0.5} />
        </canvas3D>
    )
}

export default GeometryColorsLookupTable