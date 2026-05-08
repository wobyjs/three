/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, MeshBasicMaterial, SphereGeometry, Mesh } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/materials/MeshBasicMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_advanced_materials_variations_basic from Three.js examples.
 * Demonstrates basic material variations.
 *
 * Source: https://threejs.org/examples/webgl_advanced_materials_variations_basic.html
 *
 * Key features:
 * - MeshBasicMaterial property variations
 * - Color, wireframe, opacity
 * - Non-lit material showcase
 */

export const MaterialsVariationsBasic = () => {
    const spheresRef = $<THREE.Mesh[]>([])

    useFrame(({ clock }) => {
        const spheres = $$(spheresRef)
        if (!spheres) return

        spheres.forEach((sphere, i) => {
            if (sphere) {
                sphere.rotation.y = clock.getElapsedTime() * (0.2 + i * 0.1)
            }
        })
    })

    const variations = [
        { name: 'Solid', color: 0xff6b6b, wireframe: false, opacity: 1 },
        { name: 'Wireframe', color: 0x4ecdc4, wireframe: true, opacity: 1 },
        { name: 'Transparent', color: 0x45b7d1, wireframe: false, opacity: 0.5 },
        { name: 'Yellow', color: 0xffeaa7, wireframe: false, opacity: 1 },
        { name: 'Green', color: 0x96ceb4, wireframe: false, opacity: 1 },
        { name: 'Purple', color: 0xa55eea, wireframe: false, opacity: 1 }
    ]

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x111111)}>
                {/* Basic material spheres - no lighting needed */}
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
                            <meshBasicMaterial
                                color={v.color}
                                wireframe={v.wireframe}
                                transparent={v.opacity < 1}
                                opacity={v.opacity}
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

export default MaterialsVariationsBasic