/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from "@woby/three"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/IcosahedronGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_geometry_colors from Three.js examples.
 * Demonstrates vertex colors on geometry.
 *
 * Source: https://threejs.org/examples/webgl_geometry_colors.html
 *
 * Features:
 * - Per-vertex coloring
 * - Color interpolation across faces
 */

export const WebglGeometryColors = () => {
    const meshRef = $<THREE.Mesh>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const mesh = $$(meshRef)
        if (mesh) {
            mesh.rotation.x = time * 0.3
            mesh.rotation.y = time * 0.5
        }
    })

    // Create icosahedron with vertex colors
    const geometry = new THREE.IcosahedronGeometry(2, 3)
    const count = geometry.attributes.position.count
    const colors = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
        const color = new THREE.Color()
        color.setHSL((i / count) * 0.8, 0.8, 0.5)
        colors[i * 3] = color.r
        colors[i * 3 + 1] = color.g
        colors[i * 3 + 2] = color.b
    }

    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 10, 7]} intensity={1} />

                {/* Icosahedron with vertex colors */}
                <mesh ref={meshRef} geometry={geometry}>
                    <meshStandardMaterial vertexColors roughness={0.3} metalness={0.7} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 0, 5]} />

            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default WebglGeometryColors