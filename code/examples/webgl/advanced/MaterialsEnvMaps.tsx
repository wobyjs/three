/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, CubeTextureLoader, MeshStandardMaterial, SphereGeometry, Mesh } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_advanced_materials_envmaps from Three.js examples.
 * Demonstrates environment mapping for reflections.
 *
 * Source: https://threejs.org/examples/webgl_advanced_materials_envmaps.html
 *
 * Key features:
 * - Cube texture environment maps
 * - Reflective materials
 * - Environment-based lighting
 */

export const MaterialsEnvMaps = () => {
    const sphereRef = $<Mesh>()
    const envMap = $<THREE.CubeTexture>()

    // Load environment map
    useEffect(() => {
        const loader = new CubeTextureLoader()
        const urls = [
            'https://threejs.org/examples/textures/cube/Bridge2/posx.jpg',
            'https://threejs.org/examples/textures/cube/Bridge2/negx.jpg',
            'https://threejs.org/examples/textures/cube/Bridge2/posy.jpg',
            'https://threejs.org/examples/textures/cube/Bridge2/negy.jpg',
            'https://threejs.org/examples/textures/cube/Bridge2/posz.jpg',
            'https://threejs.org/examples/textures/cube/Bridge2/negz.jpg'
        ]

        loader.load(urls, (texture) => {
            envMap(texture)
        })
    })

    useFrame(({ clock }) => {
        const sphere = $$(sphereRef)
        if (sphere) {
            sphere.rotation.y = clock.getElapsedTime() * 0.2
        }
    })

    const currentEnvMap = $$(envMap)

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={currentEnvMap || new Color(0x333333)}>
                <ambientLight intensity={0.3} />

                {/* Reflective sphere */}
                <mesh ref={sphereRef} position={[0, 0, 0]}>
                    <sphereGeometry args={[2, 64, 64]} />
                    <meshStandardMaterial
                        envMap={currentEnvMap}
                        metalness={1}
                        roughness={0}
                    />
                </mesh>

                {/* Additional reflective objects */}
                <mesh position={[-4, 0, 0]}>
                    <sphereGeometry args={[1, 32, 32]} />
                    <meshStandardMaterial
                        envMap={currentEnvMap}
                        metalness={0.9}
                        roughness={0.1}
                    />
                </mesh>

                <mesh position={[4, 0, 0]}>
                    <sphereGeometry args={[1, 32, 32]} />
                    <meshStandardMaterial
                        envMap={currentEnvMap}
                        metalness={0.5}
                        roughness={0.5}
                    />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 2, 8]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default MaterialsEnvMaps