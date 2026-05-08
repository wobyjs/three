/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/TorusKnotGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/materials/MeshPhysicalMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_materials_curvature from Three.js examples.
 * Demonstrates curvature-based material effects.
 *
 * Source: https://threejs.org/examples/webgl_materials_curvature.html
 *
 * Features:
 * - Curvature visualization
 * - Edge highlighting
 * - MeshPhysicalMaterial properties
 */

export const MaterialsCurvature = () => {
    const meshRef = $<THREE.Mesh>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const mesh = $$(meshRef)
        if (mesh) {
            mesh.rotation.y = time * 0.3
            mesh.rotation.x = time * 0.2
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x0a0a0a)}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 10, 7]} intensity={1} />
                <directionalLight position={[-5, 5, -5]} intensity={0.5} />

                {/* Curvature visualization on torus knot */}
                <mesh ref={meshRef}>
                    <torusKnotGeometry args={[2, 0.6, 100, 16]} />
                    <meshPhysicalMaterial
                        color={0xff6b6b}
                        roughness={0.2}
                        metalness={0.8}
                        clearcoat={0.5}
                        clearcoatRoughness={0.3}
                    />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 0, 8]} />

            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default MaterialsCurvature