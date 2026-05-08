/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, MeshPhysicalMaterial, SphereGeometry, Mesh } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/materials/MeshPhysicalMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_advanced_materials_physical_clearcoat from Three.js examples.
 * Demonstrates clearcoat material property.
 *
 * Source: https://threejs.org/examples/webgl_advanced_materials_physical_clearcoat.html
 *
 * Key features:
 * - Clearcoat layer on materials
 * - Clearcoat roughness
 * - Simulates car paint, lacquered surfaces
 */

export const MaterialsPhysicalClearcoat = () => {
    const sphereRef = $<Mesh>()

    useFrame(({ clock }) => {
        const sphere = $$(sphereRef)
        if (sphere) {
            sphere.rotation.y = clock.getElapsedTime() * 0.2
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x111111)}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 10, 7]} intensity={1} />
                <pointLight position={[-5, 5, 5]} intensity={0.5} color={0xff6666} />
                <pointLight position={[5, 5, -5]} intensity={0.5} color={0x6666ff} />

                {/* Clearcoat sphere - car paint effect */}
                <mesh ref={sphereRef} position={[0, 0, 0]}>
                    <sphereGeometry args={[2, 64, 64]} />
                    <meshPhysicalMaterial
                        color={0xff0000}
                        metalness={0.1}
                        roughness={0.5}
                        clearcoat={1}
                        clearcoatRoughness={0.1}
                    />
                </mesh>

                {/* Comparison spheres */}
                <mesh position={[-4, 0, 0]}>
                    <sphereGeometry args={[1, 32, 32]} />
                    <meshPhysicalMaterial
                        color={0x00ff00}
                        metalness={0.1}
                        roughness={0.5}
                        clearcoat={0}
                    />
                </mesh>

                <mesh position={[4, 0, 0]}>
                    <sphereGeometry args={[1, 32, 32]} />
                    <meshPhysicalMaterial
                        color={0x0000ff}
                        metalness={0.1}
                        roughness={0.5}
                        clearcoat={0.5}
                        clearcoatRoughness={0.5}
                    />
                </mesh>

                {/* Floor */}
                <mesh position={[0, -3, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <boxGeometry args={[20, 20, 0.1]} />
                    <meshPhysicalMaterial color={0x222222} metalness={0.8} roughness={0.2} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 2, 8]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default MaterialsPhysicalClearcoat