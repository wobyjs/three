/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, TextureLoader, SRGBColorSpace } from 'three'
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
 * Port of webgl_materials_variations from Three.js examples.
 * Demonstrates various material property combinations.
 *
 * Source: https://threejs.org/examples/webgl_materials_variations.html
 *
 * Key features:
 * - MeshStandardMaterial variations
 * - Metalness and roughness exploration
 * - Normal map effects
 */

const materialVariations = [
    { name: 'Basic', color: 0xff6b6b, metalness: 0, roughness: 1 },
    { name: 'Glossy', color: 0x4ecdc4, metalness: 0.5, roughness: 0.1 },
    { name: 'Metallic', color: 0xffd93d, metalness: 1, roughness: 0.2 },
    { name: 'Rough', color: 0x6bcb77, metalness: 0, roughness: 0.9 },
    { name: 'Chrome', color: 0xaaaaaa, metalness: 1, roughness: 0 },
    { name: 'Plastic', color: 0xff9f43, metalness: 0, roughness: 0.3 },
    { name: 'Gold', color: 0xffd700, metalness: 1, roughness: 0.3 },
    { name: 'Copper', color: 0xb87333, metalness: 1, roughness: 0.4 },
    { name: 'Ceramic', color: 0xffffff, metalness: 0, roughness: 0.5 },
]

export const MaterialsVariations = () => {
    const meshes: THREE.Mesh[] = []

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        meshes.forEach((mesh, i) => {
            mesh.rotation.y = time * 0.5 + i * 0.2
        })
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 10, 5]} intensity={1} />
                <directionalLight position={[-5, 5, -5]} intensity={0.5} />

                {/* Material variations grid */}
                {materialVariations.map((mat, i) => {
                    const row = Math.floor(i / 3)
                    const col = i % 3
                    const x = (col - 1) * 3
                    const z = row * 3

                    return (
                        <mesh
                            key={i}
                            position={[x, 0, z]}
                            ref={(el: THREE.Mesh) => { if (el) meshes.push(el) }}
                        >
                            <sphereGeometry args={[1, 32, 32]} />
                            <meshStandardMaterial
                                color={mat.color}
                                metalness={mat.metalness}
                                roughness={mat.roughness}
                            />
                        </mesh>
                    )
                })}

                {/* Floor */}
                <mesh position={[0, -1.5, 3]} rotation={[-Math.PI / 2, 0, 0]}>
                    <sphereGeometry args={[0.1, 16, 16]} />
                    <meshStandardMaterial color={0x333333} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 5, 12]} />
            <orbitControls enableDamping target={[0, 0, 3]} />
        </canvas3D>
    )
}

export default MaterialsVariations
