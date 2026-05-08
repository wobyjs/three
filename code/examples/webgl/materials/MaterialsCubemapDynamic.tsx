/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, CubeCamera, WebGLCubeRenderTarget } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_materials_cubemap_dynamic from Three.js examples.
 * Demonstrates dynamic cube map generation for real-time reflections.
 *
 * Source: https://threejs.org/examples/webgl_materials_cubemap_dynamic.html
 *
 * Features:
 * - Dynamic cube map rendering
 * - Real-time environment updates
 * - Reflective objects
 */

export const MaterialsCubemapDynamic = () => {
    const sphereRef = $<THREE.Mesh>()
    const orbitingRef = $<THREE.Mesh>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const sphere = $$(sphereRef)
        const orbiting = $$(orbitingRef)

        if (sphere) {
            sphere.rotation.y = time * 0.2
        }

        if (orbiting) {
            orbiting.position.x = Math.cos(time) * 4
            orbiting.position.z = Math.sin(time) * 4
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 10, 7]} intensity={1} />

                {/* Central reflective sphere */}
                <mesh ref={sphereRef}>
                    <sphereGeometry args={[2, 64, 64]} />
                    <meshStandardMaterial
                        color={0xffffff}
                        roughness={0}
                        metalness={1}
                    />
                </mesh>

                {/* Orbiting colored sphere */}
                <mesh ref={orbitingRef} position={[4, 0, 0]}>
                    <sphereGeometry args={[0.5, 32, 32]} />
                    <meshStandardMaterial color={0xff6b6b} roughness={0.3} metalness={0.7} />
                </mesh>

                {/* Static objects for reflection */}
                {Array.from({ length: 8 }).map((_, i) => {
                    const angle = (i / 8) * Math.PI * 2
                    const x = Math.cos(angle) * 6
                    const z = Math.sin(angle) * 6
                    return (
                        <mesh key={i} position={[x, (Math.random() - 0.5) * 4, z]}>
                            <boxGeometry args={[0.8, 0.8, 0.8]} />
                            <meshStandardMaterial
                                color={new Color().setHSL(i / 8, 0.8, 0.5)}
                                roughness={0.3}
                                metalness={0.5}
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

export default MaterialsCubemapDynamic