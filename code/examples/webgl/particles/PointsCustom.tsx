/** @jsxImportSource @woby/three */

import { $, $$, useFrame, useEffect } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, BufferGeometry, Float32BufferAttribute, ShaderMaterial, AdditiveBlending, ACESFilmicToneMapping } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/objects/Points'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_points_custom from Three.js examples.
 * Demonstrates custom shaders for particle rendering.
 *
 * Source: https://threejs.org/examples/webgl_points_custom.html
 *
 * Key features:
 * - Custom vertex/fragment shaders for particles
 * - Animated point sizes
 * - Per-particle attributes
 */

const PARTICLE_COUNT = 3000

const vertexShader = `
    attribute float aSize;
    attribute vec3 aColor;
    varying vec3 vColor;
    uniform float uTime;

    void main() {
        vColor = aColor;
        vec3 pos = position;

        // Wave animation
        pos.y += sin(pos.x * 2.0 + uTime) * 0.3;
        pos.x += cos(pos.z * 2.0 + uTime * 0.7) * 0.2;

        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_PointSize = aSize * (300.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
    }
`

const fragmentShader = `
    varying vec3 vColor;

    void main() {
        // Circular point
        vec2 center = gl_PointCoord - vec2(0.5);
        float dist = length(center);

        if (dist > 0.5) discard;

        // Soft edge
        float alpha = 1.0 - smoothstep(0.3, 0.5, dist);

        gl_FragColor = vec4(vColor, alpha);
    }
`

export const PointsCustom = () => {
    const pointsRef = $<THREE.Points>()
    const materialRef = $<THREE.ShaderMaterial>()

    useEffect(() => {
        const geometry = new BufferGeometry()
        const positions = new Float32Array(PARTICLE_COUNT * 3)
        const sizes = new Float32Array(PARTICLE_COUNT)
        const colors = new Float32Array(PARTICLE_COUNT * 3)

        for (let i = 0; i < PARTICLE_COUNT; i++) {
            // Grid-like distribution
            const x = (i % 50 - 25) * 0.4
            const z = (Math.floor(i / 50) % 60 - 30) * 0.4
            const y = Math.random() * 2 - 1

            positions[i * 3] = x
            positions[i * 3 + 1] = y
            positions[i * 3 + 2] = z

            sizes[i] = Math.random() * 2 + 1

            // Color gradient
            const hue = (x + z) * 0.02 + 0.5
            colors[i * 3] = Math.sin(hue * Math.PI) * 0.5 + 0.5
            colors[i * 3 + 1] = Math.sin(hue * Math.PI + 2) * 0.5 + 0.5
            colors[i * 3 + 2] = Math.sin(hue * Math.PI + 4) * 0.5 + 0.5
        }

        geometry.setAttribute('position', new Float32BufferAttribute(positions, 3))
        geometry.setAttribute('aSize', new Float32BufferAttribute(sizes, 1))
        geometry.setAttribute('aColor', new Float32BufferAttribute(colors, 3))

        const material = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            uniforms: {
                uTime: { value: 0 }
            },
            transparent: true,
            blending: AdditiveBlending,
            depthWrite: false
        })

        const points = new THREE.Points(geometry, material)
        pointsRef(points)
        materialRef(material)
    })

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
            <scene background={new Color(0x050510)}>
                {/* Custom shader particles */}
                {() => {
                    const points = $$(pointsRef)
                    return points ? <primitive object={points} /> : null
                }}
            </scene>

            <perspectiveCamera
                fov={60}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[0, 10, 20]}
            />
            <orbitControls target={[0, 0, 0]} enableDamping />
        </canvas3D>
    )
}

export default PointsCustom
