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
 * Port of webgl_materials_cubemap_refraction from Three.js examples.
 * Demonstrates cube map refraction through transparent materials.
 *
 * Source: https://threejs.org/examples/webgl_materials_cubemap_refraction.html
 *
 * Features:
 * - Refraction mapping
 * - Glass-like materials
 * - Index of refraction (IOR)
 */

export const MaterialsCubemapRefraction = () => {
    const sphereRef = $<THREE.Mesh>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const sphere = $$(sphereRef)
        if (sphere) {
            sphere.rotation.y = time * 0.2
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x87ceeb)}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 10, 7]} intensity={1} />

                {/* Glass sphere with refraction */}
                <mesh ref={sphereRef}>
                    <sphereGeometry args={[2, 64, 64]} />
                    <meshPhysicalMaterial
                        color={0xffffff}
                        roughness={0}
                        metalness={0}
                        transmission={0.9}
                        thickness={2}
                        ior={1.5}
                    />
                </mesh>

                {/* Background objects to refract */}
                {Array.from({ length: 15 }).map((_, i) => {
                    const theta = (i / 15) * Math.PI * 2
                    const r = 6
                    const x = Math.cos(theta) * r
                    const z = Math.sin(theta) * r
                    return (
                        <mesh key={i} position={[x, (Math.random() - 0.5) * 4, z]}>
                            <boxGeometry args={[0.6, 0.6, 0.6]} />
                            <meshStandardMaterial
                                color={new Color().setHSL(i / 15, 0.8, 0.5)}
                                roughness={0.3}
                                metalness={0.5}
                            />
                        </mesh>
                    )
                })}
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 0, 8]} />

            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default MaterialsCubemapRefraction