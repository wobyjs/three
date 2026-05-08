/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, ShaderMaterial, Vector2, ACESFilmicToneMapping } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/PlaneGeometry'
import '@woby/three/src/materials/ShaderMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_shader_water from Three.js examples.
 * Demonstrates water shader with animated waves.
 *
 * Source: https://threejs.org/examples/webgl_shader_water.html
 *
 * Key features:
 * - Animated water surface
 * - Normal-based lighting
 * - Fresnel effect
 */

const waterVertexShader = `
uniform float uTime;
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;

void main() {
    vUv = uv;

    vec3 pos = position;

    // Wave animation
    float wave1 = sin(pos.x * 2.0 + uTime * 2.0) * 0.1;
    float wave2 = sin(pos.y * 3.0 + uTime * 1.5) * 0.08;
    float wave3 = cos((pos.x + pos.y) * 1.5 + uTime) * 0.05;

    pos.z += wave1 + wave2 + wave3;

    // Calculate normal from waves
    float dx = cos(pos.x * 2.0 + uTime * 2.0) * 2.0 * 0.1;
    float dy = cos(pos.y * 3.0 + uTime * 1.5) * 3.0 * 0.08;
    vNormal = normalize(vec3(-dx, -dy, 1.0));

    vPosition = pos;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`

const waterFragmentShader = `
uniform float uTime;
uniform vec3 uColor;
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;

void main() {
    vec3 lightDir = normalize(vec3(1.0, 1.0, 1.0));
    vec3 viewDir = normalize(-vPosition);

    // Diffuse lighting
    float diff = max(dot(vNormal, lightDir), 0.0);

    // Specular highlight
    vec3 reflectDir = reflect(-lightDir, vNormal);
    float spec = pow(max(dot(viewDir, reflectDir), 0.0), 32.0);

    // Fresnel effect
    float fresnel = pow(1.0 - max(dot(viewDir, vNormal), 0.0), 3.0);

    // Water color with depth
    vec3 shallowColor = vec3(0.3, 0.7, 0.8);
    vec3 deepColor = vec3(0.0, 0.2, 0.4);
    vec3 waterColor = mix(shallowColor, deepColor, fresnel * 0.5);

    // Final color
    vec3 color = waterColor * (0.3 + diff * 0.7) + vec3(1.0) * spec * 0.5;

    gl_FragColor = vec4(color, 0.9);
}
`

export const ShaderWater = () => {
    const materialRef = $<THREE.ShaderMaterial>()

    useFrame(({ clock }) => {
        const material = $$(materialRef)
        if (material && material.uniforms) {
            material.uniforms.uTime.value = clock.getElapsedTime()
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
            <scene background={new Color(0x87CEEB)}>
                {/* Water plane with custom shader */}
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
                    <planeGeometry args={[10, 10, 64, 64]} />
                    <shaderMaterial
                        ref={materialRef}
                        vertexShader={waterVertexShader}
                        fragmentShader={waterFragmentShader}
                        uniforms={{
                            uTime: { value: 0 },
                            uColor: { value: new Color(0x0066aa) }
                        }}
                        transparent
                        side={THREE.DoubleSide}
                    />
                </mesh>
            </scene>

            <perspectiveCamera
                fov={60}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[0, 5, 8]}
            />
            <orbitControls target={[0, 0, 0]} enableDamping />
        </canvas3D>
    )
}

export default ShaderWater
