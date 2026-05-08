/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, Mesh, ShaderMaterial, BoxGeometry, Vector2 } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_tsl_shader_node from Three.js examples.
 * Demonstrates TSL shader nodes.
 *
 * Source: https://threejs.org/examples/webgl_tsl_shader_node.html
 *
 * Key features:
 * - Node-based shader construction
 * - TSL shader graph
 * - Modular shader composition
 *
 * Note: Full TSL shader nodes require WebGPU. This is a WebGL fallback
 * using traditional ShaderMaterial with similar visual output.
 */

// Vertex shader
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

// Fragment shader - simulates TSL node-based shading
const fragmentShader = `
uniform float time;
uniform vec3 baseColor;
uniform vec3 accentColor;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;

// Noise function
float noise(vec3 p) {
    return fract(sin(dot(p, vec3(12.9898, 78.233, 45.164))) * 43758.5453);
}

void main() {
    // Fresnel effect (simulating TSL fresnel node)
    vec3 viewDir = normalize(cameraPosition - vPosition);
    float fresnel = pow(1.0 - max(dot(vNormal, viewDir), 0.0), 3.0);

    // Noise pattern (simulating TSL noise node)
    float n = noise(vPosition * 2.0 + time * 0.5);

    // Mix colors (simulating TSL mix node)
    vec3 color = mix(baseColor, accentColor, n * 0.5 + fresnel * 0.5);

    // Add time-based variation
    color += vec3(sin(time + vUv.x * 10.0) * 0.1, cos(time + vUv.y * 10.0) * 0.1, 0.0);

    gl_FragColor = vec4(color, 1.0);
}
`

export const TSLShaderNode = () => {
    const meshRef = $<Mesh>()
    const materialRef = $<ShaderMaterial>()

    useFrame(({ clock }) => {
        const material = $$(materialRef)
        if (material) {
            material.uniforms.time.value = clock.getElapsedTime()
        }

        const mesh = $$(meshRef)
        if (mesh) {
            mesh.rotation.x += 0.005
            mesh.rotation.y += 0.01
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x111111)}>
                <mesh ref={meshRef}>
                    <boxGeometry args={[2, 2, 2, 10, 10, 10]} />
                    <shaderMaterial
                        ref={materialRef}
                        uniforms={{
                            time: { value: 0 },
                            baseColor: { value: new Color(0x4ecdc4) },
                            accentColor: { value: new Color(0xff6b6b) }
                        }}
                        vertexShader={vertexShader}
                        fragmentShader={fragmentShader}
                    />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 0, 5]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default TSLShaderNode