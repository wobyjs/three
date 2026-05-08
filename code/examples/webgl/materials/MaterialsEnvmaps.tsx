/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/TorusGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_materials_envmaps from Three.js examples.
 * Demonstrates environment map reflections on materials.
 *
 * Source: https://threejs.org/examples/webgl_materials_envmaps.html
 *
 * Features:
 * - Environment mapping
 * - HDR-like reflections
 * - Multiple reflective objects
 */

export const MaterialsEnvmaps = () => {
    const sphereRef = $<THREE.Mesh>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const sphere = $$(sphereRef)
        if (sphere) {
            sphere.rotation.y = time * 0.3
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.3} />
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

                {/* Surrounding torus */}
                <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
                    <torusGeometry args={[4, 0.3, 16, 100]} />
                    <meshStandardMaterial
                        color={0xff6b6b}
                        roughness={0.2}
                        metalness={0.8}
                    />
                </mesh>

                {/* Small reflective spheres */}
                {Array.from({ length: 8 }).map((_, i) => {
                    const angle = (i / 8) * Math.PI * 2
                    const x = Math.cos(angle) * 5
                    const z = Math.sin(angle) * 5
                    return (
                        <mesh key={i} position={[x, 0, z]}>
                            <sphereGeometry args={[0.5, 32, 32]} />
                            <meshStandardMaterial
                                color={new Color().setHSL(i / 8, 0.7, 0.5)}
                                roughness={0.1}
                                metalness={0.9}
                            />
                        </mesh>
                    )
                })}
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 3, 10]} />

            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default MaterialsEnvmaps