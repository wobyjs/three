/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, CubeTextureLoader } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_materials_cubemap from Three.js examples.
 * Demonstrates cube map environment reflection.
 *
 * Source: https://threejs.org/examples/webgl_materials_cubemap.html
 *
 * Features:
 * - Cube map environment
 * - Reflective materials
 * - Skybox rendering
 */

export const MaterialsCubemap = () => {
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
            <scene background={new Color(0x87ceeb)}>
                <ambientLight intensity={0.5} />

                {/* Reflective sphere */}
                <mesh ref={sphereRef}>
                    <sphereGeometry args={[2, 64, 64]} />
                    <meshStandardMaterial
                        color={0xffffff}
                        roughness={0}
                        metalness={1}
                        envMapIntensity={1}
                    />
                </mesh>

                {/* Surrounding objects for reflection */}
                {Array.from({ length: 20 }).map((_, i) => {
                    const theta = (i / 20) * Math.PI * 2
                    const phi = Math.random() * Math.PI
                    const r = 8 + Math.random() * 4
                    const x = r * Math.sin(phi) * Math.cos(theta)
                    const y = r * Math.cos(phi)
                    const z = r * Math.sin(phi) * Math.sin(theta)
                    return (
                        <mesh key={i} position={[x, y, z]}>
                            <boxGeometry args={[0.5, 0.5, 0.5]} />
                            <meshStandardMaterial
                                color={new Color().setHSL(i / 20, 0.8, 0.5)}
                                roughness={0.3}
                                metalness={0.5}
                            />
                        </mesh>
                    )
                })}
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 0, 8]} />

            <orbitControls enableDamping autoRotate autoRotateSpeed={0.5} />
        </canvas3D>
    )
}

export default MaterialsCubemap