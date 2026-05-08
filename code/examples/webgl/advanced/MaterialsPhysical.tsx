/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, MeshPhysicalMaterial, SphereGeometry, Mesh, RectAreaLight, RectAreaLightHelper } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/materials/MeshPhysicalMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/RectAreaLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_advanced_materials_physical from Three.js examples.
 * Demonstrates physically-based materials.
 *
 * Source: https://threejs.org/examples/webgl_advanced_materials_physical.html
 *
 * Key features:
 * - MeshPhysicalMaterial properties
 * - Metalness, roughness, clearcoat
 * - Realistic material rendering
 */

export const MaterialsPhysical = () => {
    const spheresRef = $<THREE.Mesh[]>([])

    useFrame(({ clock }) => {
        const spheres = $$(spheresRef)
        if (!spheres) return

        spheres.forEach((sphere, i) => {
            if (sphere) {
                sphere.position.y = Math.sin(clock.getElapsedTime() + i * 0.5) * 0.3
            }
        })
    })

    // Material configurations
    const materials = [
        { name: 'Gold', color: 0xffd700, metalness: 1, roughness: 0.3 },
        { name: 'Chrome', color: 0xcccccc, metalness: 1, roughness: 0.1 },
        { name: 'Copper', color: 0xb87333, metalness: 1, roughness: 0.4 },
        { name: 'Plastic', color: 0xff6b6b, metalness: 0, roughness: 0.3 },
        { name: 'Rubber', color: 0x333333, metalness: 0, roughness: 0.9 },
        { name: 'Glass', color: 0xffffff, metalness: 0, roughness: 0, transmission: 0.9 }
    ]

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.2} />
                <directionalLight position={[5, 10, 7]} intensity={1} />
                <pointLight position={[-5, 5, 5]} intensity={0.5} color={0xff9999} />
                <pointLight position={[5, 5, -5]} intensity={0.5} color={0x9999ff} />

                {/* Material spheres */}
                {materials.map((mat, i) => {
                    const x = (i % 3 - 1) * 3
                    const z = Math.floor(i / 3) * 3 - 1.5

                    return (
                        <mesh
                            key={mat.name}
                            ref={(el: THREE.Mesh) => {
                                const spheres = $$(spheresRef) || []
                                spheres[i] = el
                                spheresRef(spheres)
                            }}
                            position={[x, 0, z]}
                        >
                            <sphereGeometry args={[1, 64, 64]} />
                            <meshPhysicalMaterial
                                color={mat.color}
                                metalness={mat.metalness}
                                roughness={mat.roughness}
                                transmission={mat.transmission || 0}
                                thickness={mat.transmission ? 0.5 : 0}
                            />
                        </mesh>
                    )
                })}

                {/* Floor */}
                <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <boxGeometry args={[15, 15, 0.1]} />
                    <meshPhysicalMaterial color={0x333333} metalness={0.5} roughness={0.5} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 3, 8]} />
            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default MaterialsPhysical