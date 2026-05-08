/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, RGBELoader, MeshStandardMaterial, SphereGeometry, Mesh, PMREMGenerator, WebGLRenderer } from 'three'
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
 * Port of webgl_advanced_materials_envmaps_hdr from Three.js examples.
 * Demonstrates HDR environment mapping.
 *
 * Source: https://threejs.org/examples/webgl_advanced_materials_envmaps_hdr.html
 *
 * Key features:
 * - HDR (High Dynamic Range) environment maps
 * - PMREMGenerator for prefiltered mipmaps
 * - Realistic lighting and reflections
 */

export const MaterialsEnvMapsHDR = () => {
    const sphereRef = $<Mesh>()
    const envMap = $<THREE.Texture>()
    const pmremGenerator = $<PMREMGenerator>()

    useEffect(() => {
        const loader = new RGBELoader()
        loader.load(
            'https://threejs.org/examples/textures/equirectangular/venice_sunset_1k.hdr',
            (texture) => {
                texture.mapping = THREE.EquirectangularReflectionMapping
                envMap(texture)
            }
        )
    })

    useFrame(({ clock }) => {
        const sphere = $$(sphereRef)
        if (sphere) {
            sphere.rotation.y = clock.getElapsedTime() * 0.1
        }
    })

    const currentEnvMap = $$(envMap)

    return (
        <canvas3D>
            <webGLRenderer
                antialias
                setPixelRatio={[window.devicePixelRatio]}
                setSize={[window.innerWidth, window.innerHeight]}
                toneMapping={THREE.ACESFilmicToneMapping}
                toneMappingExposure={1}
            />
            <scene background={currentEnvMap || new Color(0x333333)} environment={currentEnvMap}>
                <ambientLight intensity={0.1} />

                {/* Central sphere with full metalness */}
                <mesh ref={sphereRef} position={[0, 0, 0]}>
                    <sphereGeometry args={[1.5, 64, 64]} />
                    <meshStandardMaterial
                        metalness={1}
                        roughness={0}
                    />
                </mesh>

                {/* Spheres with varying roughness */}
                {[-3, -1.5, 0, 1.5, 3].map((x, i) => (
                    <mesh key={i} position={[x, -2, 0]}>
                        <sphereGeometry args={[0.5, 32, 32]} />
                        <meshStandardMaterial
                            metalness={0.9}
                            roughness={i / 4}
                        />
                    </mesh>
                ))}
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 0, 6]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default MaterialsEnvMapsHDR