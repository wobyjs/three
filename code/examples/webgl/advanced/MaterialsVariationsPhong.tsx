/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, MeshPhongMaterial, SphereGeometry, Mesh } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/materials/MeshPhongMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/lights/PointLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_advanced_materials_variations_phong from Three.js examples.
 * Demonstrates Phong material variations.
 *
 * Source: https://threejs.org/examples/webgl_advanced_materials_variations_phong.html
 *
 * Key features:
 * - MeshPhongMaterial property variations
 * - Shininess and specular highlights
 * - Classic Phong shading model
 */

export const MaterialsVariationsPhong = () => {
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
        { name: 'Low Shininess', color: 0xff6b6b, shininess: 10 },
        { name: 'Medium Shininess', color: 0x4ecdc4, shininess: 50 },
        { name: 'High Shininess', color: 0x45b7d1, shininess: 100 },
        { name: 'Specular Red', color: 0x333333, shininess: 100, specular: 0xff0000 },
        { name: 'Specular Green', color: 0x333333, shininess: 100, specular: 0x00ff00 },
        { name: 'Specular Blue', color: 0x333333, shininess: 100, specular: 0x0000ff }
    ]

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x111111)}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 10, 7]} intensity={1} />
                <pointLight position={[-5, 5, 5]} intensity={0.5} />

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
                            <meshPhongMaterial
                                color={v.color}
                                shininess={v.shininess}
                                specular={v.specular || 0x111111}
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

export default MaterialsVariationsPhong