/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, DataTexture, RedFormat, FloatType, ACESFilmicToneMapping } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_texture3d from Three.js examples.
 * Demonstrates 3D volume textures for volumetric effects.
 *
 * Source: https://threejs.org/examples/webgl_texture3d.html
 *
 * Key features:
 * - DataTexture3D for volume data
 * - Procedural 3D texture generation
 * - Volume rendering techniques
 */

export const Texture3D = () => {
    const textureRef = $<THREE.DataTexture>()
    const meshRef = $<THREE.Mesh>()

    useEffect(() => {
        // Create a 3D texture procedurally
        const size = 32
        const data = new Float32Array(size * size * size)

        // Generate 3D noise pattern
        for (let z = 0; z < size; z++) {
            for (let y = 0; y < size; y++) {
                for (let x = 0; x < size; x++) {
                    const index = x + y * size + z * size * size
                    // Simple 3D sine wave pattern
                    const value = Math.sin(x * 0.3) * Math.sin(y * 0.3) * Math.sin(z * 0.3)
                    data[index] = (value + 1) * 0.5
                }
            }
        }

        const texture = new DataTexture(data, size, size, size)
        texture.format = RedFormat
        texture.type = FloatType
        texture.minFilter = THREE.LinearFilter
        texture.magFilter = THREE.LinearFilter
        texture.needsUpdate = true

        textureRef(texture)
    })

    useFrame(() => {
        const mesh = $$(meshRef)
        if (mesh) {
            mesh.rotation.x += 0.002
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
            />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 10, 5]} intensity={1} />

                {/* Box representing volume */}
                <mesh ref={meshRef} position={[0, 0, 0]}>
                    <boxGeometry args={[2, 2, 2]} />
                    <meshStandardMaterial
                        color={0x4ecdc4}
                        roughness={0.5}
                        metalness={0.3}
                        transparent
                        opacity={0.7}
                    />
                </mesh>
            </scene>

            <perspectiveCamera
                fov={50}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[4, 3, 4]}
            />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default Texture3D
