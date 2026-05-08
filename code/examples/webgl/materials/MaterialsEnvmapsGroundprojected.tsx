/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/materials/MeshPhysicalMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_materials_envmaps_groundprojected from Three.js examples.
 * Demonstrates ground-projected environment maps.
 *
 * Source: https://threejs.org/examples/webgl_materials_envmaps_groundprojected.html
 *
 * Features:
 * - Ground projection
 * - Skybox with ground
 * - Realistic outdoor lighting
 */

export const MaterialsEnvmapsGroundprojected = () => {
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

                {/* Reflective sphere */}
                <mesh ref={sphereRef} position={[0, 1, 0]}>
                    <sphereGeometry args={[1, 64, 64]} />
                    <meshPhysicalMaterial
                        color={0xffffff}
                        roughness={0}
                        metalness={1}
                    />
                </mesh>

                {/* Ground plane */}
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
                    <planeGeometry args={[50, 50]} />
                    <meshStandardMaterial color={0x3d9140} roughness={0.9} metalness={0.1} />
                </mesh>

                {/* Trees/objects */}
                {Array.from({ length: 10 }).map((_, i) => {
                    const x = (Math.random() - 0.5) * 30
                    const z = (Math.random() - 0.5) * 30
                    return (
                        <mesh key={i} position={[x, 1, z]}>
                            <sphereGeometry args={[0.5 + Math.random() * 0.5, 16, 16]} />
                            <meshStandardMaterial color={0x228b22} roughness={0.8} metalness={0.1} />
                        </mesh>
                    )
                })}
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 3, 8]} />

            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default MaterialsEnvmapsGroundprojected