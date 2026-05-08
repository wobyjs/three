/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, ShaderMaterial, PlaneGeometry, Mesh, Vector2 } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/PlaneGeometry'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_advanced_shader3 from Three.js examples.
 * Demonstrates complex shader with raymarching effect.
 *
 * Source: https://threejs.org/examples/webgl_advanced_shader3.html
 *
 * Key features:
 * - Full-screen shader effect
 * - Raymarching technique
 * - Complex procedural rendering
 */

// Vertex shader for full-screen quad
const vertexShader = `
varying vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`

// Fragment shader with raymarching
const fragmentShader = `
uniform float time;
uniform vec2 resolution;

varying vec2 vUv;

// Sphere distance function
float sphere(vec3 p, float r) {
    return length(p) - r;
}

// Box distance function
float box(vec3 p, vec3 b) {
    vec3 d = abs(p) - b;
    return min(max(d.x, max(d.y, d.z)), 0.0) + length(max(d, 0.0));
}

// Scene distance function
float scene(vec3 p) {
    // Animated sphere
    vec3 spherePos = vec3(sin(time) * 2.0, cos(time * 0.7) * 2.0, 0.0);
    float d1 = sphere(p - spherePos, 1.0);

    // Animated box
    vec3 boxPos = vec3(cos(time * 1.5) * 2.0, sin(time * 0.8) * 2.0, 0.0);
    float d2 = box(p - boxPos, vec3(0.8, 0.8, 0.8));

    return min(d1, d2);
}

// Raymarching
vec3 raymarch(vec3 ro, vec3 rd) {
    float t = 0.0;
    float d;

    for (int i = 0; i < 64; i++) {
        vec3 p = ro + rd * t;
        d = scene(p);

        if (d < 0.01) break;
        if (t > 20.0) break;

        t += d;
    }

    // Return color based on distance
    if (d < 0.01) {
        return vec3(0.5 + 0.5 * sin(time), 0.5, 0.5 + 0.5 * cos(time));
    }

    return vec3(0.05, 0.05, 0.1);
}

void main() {
    vec2 uv = (vUv - 0.5) * 2.0;

    // Camera setup
    vec3 ro = vec3(0.0, 0.0, 5.0);
    vec3 rd = normalize(vec3(uv, -1.0));

    vec3 color = raymarch(ro, rd);

    gl_FragColor = vec4(color, 1.0);
}
`

export const Shader3 = () => {
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
            <scene background={new Color(0x000000)}>
                {/* Full-screen plane for shader */}
                <mesh ref={meshRef}>
                    <planeGeometry args={[10, 10]} />
                    <shaderMaterial
                        ref={materialRef}
                        uniforms={{
                            time: { value: 0 },
                            resolution: { value: new Vector2(window.innerWidth, window.innerHeight) }
                        }}
                        vertexShader={vertexShader}
                        fragmentShader={fragmentShader}
                    />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 0, 5]} />
            <orbitControls enableDamping={false} />
        </canvas3D>
    )
}

export default Shader3