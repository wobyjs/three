/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, EXRLoader, EquirectangularReflectionMapping, ACESFilmicToneMapping, HalfFloatType } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_textures_exr from Three.js examples.
 * Demonstrates EXR texture loading for HDR content.
 *
 * Source: https://threejs.org/examples/webgl_textures_exr.html
 *
 * Key features:
 * - EXRLoader for OpenEXR format
 * - High dynamic range textures
 * - Float texture handling
 */

export const TexturesEXR = () => {
    const envMapRef = $<THREE.Texture>()
    const sphereRef = $<THREE.Mesh>()

    useEffect(() => {
        const loader = new EXRLoader()

        loader.load(
            'https://threejs.org/examples/textures/exr/piz_compressed.exr',
            (texture) => {
                texture.mapping = EquirectangularReflectionMapping
                envMapRef(texture)
            },
            undefined,
            (error) => {
                console.error('Error loading EXR:', error)
            }
        )
    })

    useFrame(() => {
        const sphere = $$(sphereRef)
        if (sphere) {
            sphere.rotation.y += 0.003
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
                {/* Multiple spheres with different roughness */}
                <mesh ref={sphereRef} position={[-2, 0, 0]}>
                    <sphereGeometry args={[0.8, 64, 64]} />
                    <meshStandardMaterial
                        color={0xffffff}
                        roughness={0}
                        metalness={1}
                    />
                </mesh>

                <mesh position={[0, 0, 0]}>
                    <sphereGeometry args={[0.8, 64, 64]} />
                    <meshStandardMaterial
                        color={0xffffff}
                        roughness={0.3}
                        metalness={0.8}
                    />
                </mesh>

                <mesh position={[2, 0, 0]}>
                    <sphereGeometry args={[0.8, 64, 64]} />
                    <meshStandardMaterial
                        color={0xffffff}
                        roughness={0.6}
                        metalness={0.5}
                    />
                </mesh>
            </scene>

            <perspectiveCamera
                fov={50}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[0, 0, 6]}
            />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default TexturesEXR
