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
 * Port of webgl_shader_lava from Three.js examples.
 * Demonstrates procedural lava shader with animated noise.
 *
 * Source: https://threejs.org/examples/webgl_shader_lava.html
 *
 * Key features:
 * - Procedural lava texture
 * - Animated noise patterns
 * - Color gradient based on temperature
 */

const vertexShader = `
    varying vec2 vUv;
    uniform float uTime;

    void main() {
        vUv = uv;

        vec3 pos = position;
        // Subtle vertex displacement
        pos.z += sin(pos.x * 5.0 + uTime) * 0.1;
        pos.z += cos(pos.y * 5.0 + uTime) * 0.1;

        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
`

const fragmentShader = `
    uniform float uTime;
    varying vec2 vUv;

    // Simplex noise functions
    vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

    float snoise(vec2 v) {
        const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                           -0.577350269189626, 0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy));
        vec2 x0 = v - i + dot(i, C.xx);
        vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod289(i);
        vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
            + i.x + vec3(0.0, i1.x, 1.0));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
            dot(x12.zw,x12.zw)), 0.0);
        m = m*m;
        m = m*m;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
        vec3 g;
        g.x = a0.x * x0.x + h.x * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
    }

    void main() {
        vec2 uv = vUv * 3.0;

        // Multi-octave noise
        float noise = 0.0;
        float amplitude = 1.0;
        float frequency = 1.0;

        for (int i = 0; i < 4; i++) {
            noise += amplitude * snoise(uv * frequency + uTime * 0.3);
            amplitude *= 0.5;
            frequency *= 2.0;
        }

        // Normalize
        noise = noise * 0.5 + 0.5;

        // Lava color gradient
        vec3 coolColor = vec3(0.1, 0.0, 0.0);
        vec3 hotColor = vec3(1.0, 0.3, 0.0);
        vec3 glowColor = vec3(1.0, 0.8, 0.2);

        vec3 color = mix(coolColor, hotColor, noise);
        color = mix(color, glowColor, pow(noise, 3.0));

        gl_FragColor = vec4(color, 1.0);
    }
`

export const ShaderLava = () => {
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
                <mesh position={[0, 0, 0]}>
                    <planeGeometry args={[10, 10, 32, 32]} />
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

export default ShaderLava
