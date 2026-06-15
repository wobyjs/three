/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/materials/MeshPhysicalMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_materials_variations_physical from Three.js examples.
 * Demonstrates MeshPhysicalMaterial with advanced properties.
 *
 * Source: https://threejs.org/examples/webgl_materials_variations_physical.html
 *
 * Features:
 * - Clearcoat
 * - Transmission
 * - Sheen
 * - IOR
 */

const materialVariations = [
    { name: 'Glass', color: 0xffffff, metalness: 0, roughness: 0, transmission: 0.9, ior: 1.5 },
    { name: 'Clearcoat', color: 0xff6b6b, metalness: 0.5, roughness: 0.1, clearcoat: 1 },
    { name: 'Sheen', color: 0x4ecdc4, metalness: 0, roughness: 0.5, sheen: 1, sheenColor: 0x00ffff },
    { name: 'Polished', color: 0xffd93d, metalness: 1, roughness: 0.1, clearcoat: 0.5 },
    { name: 'Transmissive', color: 0x6bcb77, metalness: 0, roughness: 0.1, transmission: 0.7, ior: 1.2 },
    { name: 'Metallic', color: 0xaaaaaa, metalness: 1, roughness: 0.2 },
    { name: 'Diamond', color: 0xffffff, metalness: 0, roughness: 0, transmission: 1, ior: 2.4 },
    { name: 'Ceramic', color: 0xff9f43, metalness: 0, roughness: 0.3, clearcoat: 0.8 },
    { name: 'Plastic', color: 0xb87333, metalness: 0, roughness: 0.4 },
]

export const MaterialsVariationsPhysical = () => {
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
                            <meshPhysicalMaterial
                                color={mat.color}
                                metalness={mat.metalness ?? 0}
                                roughness={mat.roughness ?? 0.5}
                                clearcoat={mat.clearcoat ?? 0}
                                transmission={mat.transmission ?? 0}
                                ior={mat.ior ?? 1.5}
                                sheen={mat.sheen ?? 0}
                                sheenColor={mat.sheenColor ? new THREE.Color(mat.sheenColor) : new THREE.Color(0xffffff)}
                            />
                        </mesh>
                    )
                })}
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 5, 12]} />
            <orbitControls enableDamping target={[0, 0, 3]} />
        </canvas3D>
    )
}

export default MaterialsVariationsPhysical
