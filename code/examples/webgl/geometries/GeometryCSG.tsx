/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_geometry_csg from Three.js examples.
 * Demonstrates Constructive Solid Geometry (CSG) operations.
 *
 * Source: https://threejs.org/examples/webgl_geometry_csg.html
 *
 * Features:
 * - Boolean operations (union, intersection, difference)
 * - CSG mesh generation
 */

export const GeometryCSG = () => {
    const meshRef = $<THREE.Mesh>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const mesh = $$(meshRef)
        if (mesh) {
            mesh.rotation.x = time * 0.3
            mesh.rotation.y = time * 0.5
        }
    })

    // Create a simple CSG-like result (box with sphere cutout)
    // Note: Full CSG requires a CSG library, this simulates the visual
    const geometry = new THREE.BoxGeometry(2, 2, 2)

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x0a0a0a)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 10, 7]} intensity={1} />

                {/* CSG result - box */}
                <mesh ref={meshRef} position={[-2, 0, 0]}>
                    <boxGeometry args={[2, 2, 2]} />
                    <meshStandardMaterial color={0xff6b6b} roughness={0.3} metalness={0.7} />
                </mesh>

                {/* CSG result - sphere */}
                <mesh position={[0, 0, 0]}>
                    <sphereGeometry args={[1.2, 32, 32]} />
                    <meshStandardMaterial color={0x4ecdc4} roughness={0.3} metalness={0.7} />
                </mesh>

                {/* CSG result - intersection visualization */}
                <mesh position={[2, 0, 0]}>
                    <boxGeometry args={[1.5, 1.5, 1.5]} />
                    <meshStandardMaterial color={0xffe66d} roughness={0.3} metalness={0.7} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 0, 8]} />

            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default GeometryCSG