/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, ShaderMaterial, BoxGeometry, Mesh, Clock } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_advanced_shader from Three.js examples.
 * Demonstrates custom shader materials.
 *
 * Source: https://threejs.org/examples/webgl_advanced_shader.html
 *
 * Key features:
 * - Custom ShaderMaterial with uniforms
 * - Vertex and fragment shader code
 * - Time-based animation
 */

// Vertex shader
const vertexShader = `
varying vec2 vUv;
varying vec3 vPosition;

void main() {
    vUv = uv;
    vPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`

// Fragment shader - animated gradient
const fragmentShader = `
uniform float time;
uniform vec3 colorA;
uniform vec3 colorB;

varying vec2 vUv;
varying vec3 vPosition;

void main() {
    float t = sin(vUv.x * 10.0 + time) * 0.5 + 0.5;
    vec3 color = mix(colorA, colorB, t);
    gl_FragColor = vec4(color, 1.0);
}
`

export const Shader = () => {
    const meshRef = $<Mesh>()
    const materialRef = $<ShaderMaterial>()

    useFrame(({ clock }) => {
        const material = $$(materialRef)
        if (material) {
            material.uniforms.time.value = clock.getElapsedTime()
        }

        const mesh = $$(meshRef)
        if (mesh) {
            mesh.rotation.x += 0.01
            mesh.rotation.y += 0.02
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x111111)}>
                <mesh ref={meshRef}>
                    <boxGeometry args={[2, 2, 2]} />
                    <shaderMaterial
                        ref={materialRef}
                        uniforms={{
                            time: { value: 0 },
                            colorA: { value: new Color(0xff6b6b) },
                            colorB: { value: new Color(0x4ecdc4) }
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

export default Shader