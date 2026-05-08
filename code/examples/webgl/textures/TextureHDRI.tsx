/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, RGBELoader, EquirectangularReflectionMapping, ACESFilmicToneMapping } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_texture_hdri from Three.js examples.
 * Demonstrates HDRI environment map loading for realistic lighting.
 *
 * Source: https://threejs.org/examples/webgl_texture_hdri.html
 *
 * Key features:
 * - RGBELoader for HDR image loading
 * - Equirectangular environment mapping
 * - PBR materials with environment reflections
 */

export const TextureHDRI = () => {
    const envMapRef = $<THREE.Texture>()
    const sphereRef = $<THREE.Mesh>()

    useEffect(() => {
        const loader = new RGBELoader()

        // Load HDRI environment
        loader.load(
            'https://threejs.org/examples/textures/equirectangular/venice_sunset_1k.hdr',
            (texture) => {
                texture.mapping = EquirectangularReflectionMapping
                envMapRef(texture)
            },
            undefined,
            (error) => {
                console.error('Error loading HDRI:', error)
            }
        )
    })

    useFrame(() => {
        const sphere = $$(sphereRef)
        if (sphere) {
            sphere.rotation.y += 0.005
        }
    })

    return (
        <canvas3D>
            <webGLRenderer
                antialias
                setPixelRatio={[window.devicePixelRatio]}
                setSize={[window.innerWidth, window.innerHeight]}
                toneMapping={ACESFilmicToneMapping}
                toneMappingExposure={1}
            />
            <scene
                background={$$(envMapRef)}
                environment={$$(envMapRef)}
            >
                {/* Reflective sphere */}
                <mesh ref={sphereRef} position={[0, 0, 0]}>
                    <sphereGeometry args={[1, 64, 64]} />
                    <meshStandardMaterial
                        color={0xffffff}
                        roughness={0.1}
                        metalness={1}
                    />
                </mesh>
            </scene>

            <perspectiveCamera
                fov={50}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[0, 0, 4]}
            />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default TextureHDRI
