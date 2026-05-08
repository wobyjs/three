/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, MeshStandardMaterial, SphereGeometry, Mesh } from 'three'
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
 * Port of webgl_advanced_materials_variations_standard from Three.js examples.
 * Demonstrates Standard material variations.
 *
 * Source: https://threejs.org/examples/webgl_advanced_materials_variations_standard.html
 *
 * Key features:
 * - MeshStandardMaterial property variations
 * - Metalness and roughness combinations
 * - PBR (Physically Based Rendering) showcase
 */

export const MaterialsVariationsStandard = () => {
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
        { name: 'Metal Low Rough', metalness: 1, roughness: 0.1, color: 0xffd700 },
        { name: 'Metal High Rough', metalness: 1, roughness: 0.8, color: 0xffd700 },
        { name: 'Non-Metal Low Rough', metalness: 0, roughness: 0.1, color: 0xff6b6b },
        { name: 'Non-Metal High Rough', metalness: 0, roughness: 0.8, color: 0x4ecdc4 },
        { name: 'Half Metal', metalness: 0.5, roughness: 0.5, color: 0x45b7d1 },
        { name: 'Chrome', metalness: 1, roughness: 0, color: 0xcccccc }
    ]

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 10, 7]} intensity={1} />
                <pointLight position={[-5, 5, 5]} intensity={0.5} color={0xff9999} />
                <pointLight position={[5, 5, -5]} intensity={0.5} color={0x9999ff} />

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
                            <meshStandardMaterial
                                color={v.color}
                                metalness={v.metalness}
                                roughness={v.roughness}
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

export default MaterialsVariationsStandard