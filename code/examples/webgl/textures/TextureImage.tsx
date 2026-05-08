/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, TextureLoader, SRGBColorSpace, ACESFilmicToneMapping } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_texture_image from Three.js examples.
 * Demonstrates basic image texture loading and application.
 *
 * Source: https://threejs.org/examples/webgl_texture_image.html
 *
 * Key features:
 * - TextureLoader for image loading
 * - Texture properties (wrap, filter, colorSpace)
 * - PBR material with texture maps
 */

export const TextureImage = () => {
    const textureRef = $<THREE.Texture>()
    const meshRef = $<THREE.Mesh>()

    useEffect(() => {
        const loader = new TextureLoader()

        // Load a texture from threejs.org
        loader.load(
            'https://threejs.org/examples/textures/uv_grid_opengl.jpg',
            (texture) => {
                texture.colorSpace = SRGBColorSpace
                texture.wrapS = THREE.RepeatWrapping
                texture.wrapT = THREE.RepeatWrapping
                texture.repeat.set(2, 2)
                textureRef(texture)
            },
            undefined,
            (error) => {
                console.error('Error loading texture:', error)
            }
        )
    })

    useFrame(() => {
        const mesh = $$(meshRef)
        if (mesh) {
            mesh.rotation.y += 0.003
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
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 10, 5]} intensity={1.5} />

                {/* Box with texture */}
                <mesh ref={meshRef} position={[0, 0.5, 0]}>
                    <boxGeometry args={[2, 2, 2]} />
                    <meshStandardMaterial
                        map={$$(textureRef)}
                        roughness={0.5}
                        metalness={0.3}
                    />
                </mesh>

                {/* Ground plane */}
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
                    <planeGeometry args={[10, 10]} />
                    <meshStandardMaterial color={0x333344} roughness={0.9} />
                </mesh>
            </scene>

            <perspectiveCamera
                fov={50}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[4, 3, 4]}
            />
            <orbitControls target={[0, 0.5, 0]} enableDamping />
        </canvas3D>
    )
}

export default TextureImage
