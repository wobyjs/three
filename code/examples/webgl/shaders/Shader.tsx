/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, ShaderMaterial, Vector2 } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/PlaneGeometry'
import '@woby/three/src/materials/ShaderMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_shader from Three.js examples.
 * Demonstrates custom shader materials with uniforms and attributes.
 *
 * Source: https://threejs.org/examples/webgl_shader.html
 *
 * Key features:
 * - Custom vertex and fragment shaders
 * - Uniform animation
 * - Procedural noise pattern
 */

const vertexShader = `
    varying vec2 vUv;

    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`

const fragmentShader = `
    uniform float uTime;
    uniform vec2 uResolution;
    varying vec2 vUv;

    // Simple noise function
    float noise(vec2 p) {
        return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
    }

    void main() {
        vec2 uv = vUv;

        // Animated pattern
        float n = noise(uv * 10.0 + uTime * 0.5);
        float pattern = sin(uv.x * 20.0 + uTime) * sin(uv.y * 20.0 + uTime);

        vec3 color = vec3(n * 0.5 + 0.5);
        color += vec3(pattern * 0.2);

        // Gradient
        color = mix(vec3(0.1, 0.2, 0.4), vec3(0.9, 0.4, 0.2), uv.y);

        gl_FragColor = vec4(color, 1.0);
    }
`

export const Shader = () => {
    const materialRef = $<ShaderMaterial>()

    useFrame((state) => {
        const material = $$(materialRef)
        if (material && material.uniforms) {
            material.uniforms.uTime.value = state.clock?.getElapsedTime() ?? 0
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x000000)}>
                {/* Shader plane */}
                <mesh position={[0, 0, 0]}>
                    <planeGeometry args={[10, 10, 1, 1]} />
                    <shaderMaterial
                        ref={materialRef}
                        vertexShader={vertexShader}
                        fragmentShader={fragmentShader}
                        uniforms={{
                            uTime: { value: 0 },
                            uResolution: { value: new Vector2(window.innerWidth, window.innerHeight) }
                        }}
                    />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 0, 5]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default Shader
