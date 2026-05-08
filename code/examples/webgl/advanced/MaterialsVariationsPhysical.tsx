/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, MeshPhysicalMaterial, SphereGeometry, Mesh } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/materials/MeshPhysicalMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/lights/PointLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_advanced_materials_variations_physical from Three.js examples.
 * Demonstrates Physical material variations.
 *
 * Source: https://threejs.org/examples/webgl_advanced_materials_variations_physical.html
 *
 * Key features:
 * - MeshPhysicalMaterial advanced properties
 * - Clearcoat, sheen, transmission
 * - Most realistic material rendering
 */

export const MaterialsVariationsPhysical = () => {
    const spheresRef = $<THREE.Mesh[]>([])

    useFrame(({ clock }) => {
        const spheres = $$(spheresRef)
        if (!spheres) return

        spheres.forEach((sphere, i) => {
            if (sphere) {
                sphere.rotation.y = clock.getElapsedTime() * (0.2 + i * 0.05)
            }
        })
    })

    const variations = [
        { name: 'Clearcoat', clearcoat: 1, clearcoatRoughness: 0.1, color: 0xff0000 },
        { name: 'Sheen', sheen: 1, sheenRoughness: 0.5, sheenColor: 0xff0000, color: 0x333333 },
        { name: 'Transmission', transmission: 0.9, thickness: 0.5, color: 0xffffff },
        { name: 'IOR Low', transmission: 0.9, ior: 1.0, color: 0xffffff },
        { name: 'IOR High', transmission: 0.9, ior: 2.5, color: 0xffffff },
        { name: 'Standard', metalness: 0.5, roughness: 0.5, color: 0x4ecdc4 }
    ]

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x222222)}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 10, 7]} intensity={1} />
                <pointLight position={[-5, 5, 5]} intensity={0.5} color={0xff9999} />
                <pointLight position={[5, 5, -5]} intensity={0.5} color={0x9999ff} />

                {/* Background objects for transmission visibility */}
                <mesh position={[-2, 0, -3]}>
                    <boxGeometry args={[0.5, 0.5, 0.5]} />
                    <meshPhysicalMaterial color={0xff0000} />
                </mesh>
                <mesh position={[2, 0, -3]}>
                    <boxGeometry args={[0.5, 0.5, 0.5]} />
                    <meshPhysicalMaterial color={0x00ff00} />
                </mesh>

                {variations.map((v, i) => {
                    const x = (i % 3 - 1) * 3
                    const z = Math.floor(i / 3) * 3 - 1.5

                    return (
                        <mesh
                            key={v.name}
                            ref={(el: THREE.Mesh) => {
                                const spheres = $$(spheresRef) || []
                                spheres[i] = el
                                spheresRef(spheres)
                            }}
                            position={[x, 0, z]}
                        >
                            <sphereGeometry args={[1, 32, 32]} />
                            <meshPhysicalMaterial
                                color={v.color}
                                metalness={v.metalness ?? 0}
                                roughness={v.roughness ?? 0}
                                clearcoat={v.clearcoat ?? 0}
                                clearcoatRoughness={v.clearcoatRoughness ?? 0}
                                sheen={v.sheen ?? 0}
                                sheenRoughness={v.sheenRoughness ?? 0}
                                sheenColor={v.sheenColor ?? 0x000000}
                                transmission={v.transmission ?? 0}
                                thickness={v.thickness ?? 0}
                                ior={v.ior ?? 1.5}
                            />
                        </mesh>
                    )
                })}
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 2, 8]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default MaterialsVariationsPhysical