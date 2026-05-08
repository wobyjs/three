/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, ShaderMaterial, SphereGeometry, Mesh } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_advanced_shader2 from Three.js examples.
 * Demonstrates advanced shader with noise effect.
 *
 * Source: https://threejs.org/examples/webgl_advanced_shader2.html
 *
 * Key features:
 * - Noise-based shader effect
 * - Vertex displacement
 * - Complex shader animation
 */

// Vertex shader with displacement
const vertexShader = `
uniform float time;
varying vec2 vUv;
varying vec3 vNormal;

// Simple noise function
float noise(vec3 p) {
    return fract(sin(dot(p, vec3(12.9898, 78.233, 45.164))) * 43758.5453);
}

void main() {
    vUv = uv;
    vNormal = normal;

    // Displace vertices based on noise
    vec3 pos = position;
    float n = noise(pos * 2.0 + time * 0.5);
    pos += normal * n * 0.3;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`

// Fragment shader
const fragmentShader = `
uniform float time;
varying vec2 vUv;
varying vec3 vNormal;

void main() {
    // Create animated color based on normal and time
    vec3 color = vec3(
        sin(vNormal.x * 5.0 + time) * 0.5 + 0.5,
        sin(vNormal.y * 5.0 + time * 1.5) * 0.5 + 0.5,
        sin(vNormal.z * 5.0 + time * 2.0) * 0.5 + 0.5
    );

    gl_FragColor = vec4(color, 1.0);
}
`

export const Shader2 = () => {
    const meshRef = $<Mesh>()
    const materialRef = $<ShaderMaterial>()

    useFrame(({ clock }) => {
        const material = $$(materialRef)
        if (material) {
            material.uniforms.time.value = clock.getElapsedTime()
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x0a0a0a)}>
                <mesh ref={meshRef}>
                    <sphereGeometry args={[2, 64, 64]} />
                    <shaderMaterial
                        ref={materialRef}
                        uniforms={{
                            time: { value: 0 }
                        }}
                        vertexShader={vertexShader}
                        fragmentShader={fragmentShader}
                    />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 0, 6]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default Shader2