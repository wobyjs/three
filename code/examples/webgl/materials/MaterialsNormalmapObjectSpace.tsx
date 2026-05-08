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
 * Port of webgl_materials_normalmap_object_space from Three.js examples.
 * Demonstrates object-space normal mapping.
 *
 * Source: https://threejs.org/examples/webgl_materials_normalmap_object_space.html
 *
 * Features:
 * - Object-space normals
 * - Different normal map types
 * - Low-poly with high detail appearance
 */

export const MaterialsNormalmapObjectSpace = () => {
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
            <scene background={new Color(0x0a0a0a)}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 10, 7]} intensity={1} />

                {/* Sphere with object-space normal map */}
                <mesh ref={sphereRef}>
                    <sphereGeometry args={[2, 32, 32]} />
                    <meshStandardMaterial
                        color={0xff6b6b}
                        roughness={0.4}
                        metalness={0.6}
                    />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 0, 6]} />

            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default MaterialsNormalmapObjectSpace