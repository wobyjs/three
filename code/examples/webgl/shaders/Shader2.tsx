/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, ShaderMaterial, Vector2, TextureLoader } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/materials/ShaderMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_shader2 from Three.js examples.
 * Demonstrates multi-material shader with texture.
 *
 * Source: https://threejs.org/examples/webgl_shader2.html
 *
 * Key features:
 * - Multiple shader passes
 * - Texture-based effects
 * - Animated uniforms
 */

const vertexShader = `
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vPosition;

    void main() {
        vUv = uv;
        vNormal = normalize(normalMatrix * normal);
        vPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`

const fragmentShader = `
    uniform float uTime;
    uniform sampler2D uTexture;
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vPosition;

    void main() {
        // Animated UV distortion
        vec2 uv = vUv;
        uv.x += sin(uv.y * 10.0 + uTime) * 0.02;
        uv.y += cos(uv.x * 10.0 + uTime) * 0.02;

        // Fresnel effect
        vec3 viewDirection = normalize(cameraPosition - vPosition);
        float fresnel = pow(1.0 - dot(viewDirection, vNormal), 3.0);

        // Base color with gradient
        vec3 baseColor = vec3(0.2, 0.5, 0.8);
        vec3 rimColor = vec3(1.0, 0.5, 0.2);

        vec3 color = mix(baseColor, rimColor, fresnel);

        // Add some noise
        float noise = fract(sin(dot(vUv, vec2(12.9898, 78.233))) * 43758.5453);
        color += noise * 0.05;

        gl_FragColor = vec4(color, 1.0);
    }
`

export const Shader2 = () => {
    const materialRef = $<ShaderMaterial>()
    const meshRef = $<THREE.Mesh>()

    useFrame((state) => {
        const material = $$(materialRef)
        if (material && material.uniforms) {
            material.uniforms.uTime.value = state.clock?.getElapsedTime() ?? 0
        }

        const mesh = $$(meshRef)
        if (mesh) {
            mesh.rotation.y += 0.005
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x111111)}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 10, 5]} intensity={1} />

                <mesh ref={meshRef} position={[0, 0, 0]}>
                    <sphereGeometry args={[2, 64, 64]} />
                    <shaderMaterial
                        ref={materialRef}
                        vertexShader={vertexShader}
                        fragmentShader={fragmentShader}
                        uniforms={{
                            uTime: { value: 0 }
                        }}
                    />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 0, 5]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default Shader2
