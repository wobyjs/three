/** @jsxImportSource @woby/three */

import { $, $$, useFrame, useRenderer, useCamera, useEffect } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, Data3DTexture, RedFormat, UnsignedByteType } from 'three'
import * as THREE from 'three'
import { ImprovedNoise } from 'three/examples/jsm/math/ImprovedNoise.js'

// Import wrappers for registration
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of misc_volume_perlin from Three.js examples.
 * Demonstrates Perlin noise volume rendering.
 *
 * Source: https://threejs.org/examples/misc_volume_perlin.html
 *
 * Key features:
 * - 3D Perlin noise generation
 * - Volume texture creation
 * - Procedural content generation
 */

export const Perlin = () => {
    const meshRef = $<THREE.Mesh>()

    useEffect(() => {
        const size = 32
        const data = new Uint8Array(size * size * size)

        const perlin = new ImprovedNoise()
        const quality = 1
        const z = []

        // Generate 3D noise data
        for (let k = 0; k < size; k++) {
            for (let j = 0; j < size; j++) {
                for (let i = 0; i < size; i++) {
                    const x = i / size
                    const y = j / size
                    const w = k / size

                    // Multi-octave noise
                    let noise = perlin.noise(x * quality, y * quality, w * quality)
                    noise += 0.5 * perlin.noise(x * 2 * quality, y * 2 * quality, w * 2 * quality)
                    noise += 0.25 * perlin.noise(x * 4 * quality, y * 4 * quality, w * 4 * quality)

                    // Normalize to 0-255
                    const value = Math.floor((noise + 1) * 127)
                    data[i + j * size + k * size * size] = value
                }
            }
        }

        // Create 3D texture
        const texture = new THREE.Data3DTexture(data, size, size, size)
        texture.format = THREE.RedFormat
        texture.type = THREE.UnsignedByteType
        texture.minFilter = THREE.LinearFilter
        texture.magFilter = THREE.LinearFilter
        texture.needsUpdate = true

        // Create custom shader material for volume rendering
        const material = new THREE.ShaderMaterial({
            uniforms: {
                uTexture: { value: texture },
                uTime: { value: 0 }
            },
            vertexShader: `
                varying vec3 vPosition;
                void main() {
                    vPosition = position;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform sampler3D uTexture;
                uniform float uTime;
                varying vec3 vPosition;

                void main() {
                    vec3 uv = (vPosition + 1.0) * 0.5;
                    float value = texture(uTexture, uv).r;

                    // Color based on value
                    vec3 color = mix(
                        vec3(0.1, 0.1, 0.2),
                        vec3(0.3, 0.6, 1.0),
                        value / 255.0
                    );

                    gl_FragColor = vec4(color, 0.8);
                }
            `,
            transparent: true,
            side: THREE.DoubleSide
        })

        // Create box geometry for volume visualization
        const geometry = new THREE.BoxGeometry(4, 4, 4)
        const mesh = new THREE.Mesh(geometry, material)
        meshRef(mesh)

        return () => {
            geometry.dispose()
            material.dispose()
            texture.dispose()
        }
    })

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const mesh = $$(meshRef)
        if (mesh) {
            mesh.rotation.y = time * 0.2
            mesh.rotation.x = time * 0.1

            // Update shader time
            if (mesh.material instanceof THREE.ShaderMaterial) {
                mesh.material.uniforms.uTime.value = time
            }
        }
    })

    const mesh = $$(meshRef)

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 10, 5]} intensity={1} />

                {/* Volume mesh will be added dynamically */}
            </scene>

            <perspectiveCamera
                fov={60}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[5, 5, 5]}
            />

            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default Perlin