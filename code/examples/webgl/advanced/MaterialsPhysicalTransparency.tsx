/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, MeshPhysicalMaterial, SphereGeometry, Mesh, BoxGeometry } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/materials/MeshPhysicalMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_advanced_materials_physical_transparency from Three.js examples.
 * Demonstrates transparent physical materials.
 *
 * Source: https://threejs.org/examples/webgl_advanced_materials_physical_transparency.html
 *
 * Key features:
 * - Transmission property for glass-like materials
 * - IOR (Index of Refraction)
 * - Thickness for volumetric effects
 */

export const MaterialsPhysicalTransparency = () => {
    const sphereRef = $<Mesh>()

    useFrame(({ clock }) => {
        const sphere = $$(sphereRef)
        if (sphere) {
            sphere.rotation.y = clock.getElapsedTime() * 0.3
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x222222)}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 10, 7]} intensity={1} />
                <pointLight position={[-5, 5, 5]} intensity={0.8} color={0xff9999} />
                <pointLight position={[5, 5, -5]} intensity={0.8} color={0x9999ff} />

                {/* Background objects for refraction visibility */}
                <mesh position={[-3, 0, -2]}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshPhysicalMaterial color={0xff0000} />
                </mesh>
                <mesh position={[3, 0, -2]}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshPhysicalMaterial color={0x00ff00} />
                </mesh>
                <mesh position={[0, 0, -3]}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshPhysicalMaterial color={0x0000ff} />
                </mesh>

                {/* Glass sphere with transmission */}
                <mesh ref={sphereRef} position={[0, 0, 0]}>
                    <sphereGeometry args={[1.5, 64, 64]} />
                    <meshPhysicalMaterial
                        color={0xffffff}
                        metalness={0}
                        roughness={0}
                        transmission={0.95}
                        thickness={0.5}
                        ior={1.5}
                    />
                </mesh>

                {/* Comparison: different IOR values */}
                <mesh position={[-3, 0, 2]}>
                    <sphereGeometry args={[0.8, 32, 32]} />
                    <meshPhysicalMaterial
                        color={0xffffff}
                        metalness={0}
                        roughness={0}
                        transmission={0.9}
                        thickness={0.5}
                        ior={1.0}
                    />
                </mesh>

                <mesh position={[3, 0, 2]}>
                    <sphereGeometry args={[0.8, 32, 32]} />
                    <meshPhysicalMaterial
                        color={0xffffff}
                        metalness={0}
                        roughness={0}
                        transmission={0.9}
                        thickness={0.5}
                        ior={2.0}
                    />
                </mesh>

                {/* Floor */}
                <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <boxGeometry args={[15, 15, 0.1]} />
                    <meshPhysicalMaterial color={0x444444} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 2, 6]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default MaterialsPhysicalTransparency