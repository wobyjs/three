/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, Points, BufferGeometry, BufferAttribute, ShaderMaterial, TextureLoader } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/objects/Points'
import '@woby/three/src/materials/ShaderMaterial'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_custom_attributes_points from Three.js examples.
 * Demonstrates custom shader attributes on point clouds.
 *
 * Source: https://threejs.org/examples/webgl_custom_attributes_points.html
 *
 * Key features:
 * - Custom vertex attributes on points
 * - ShaderMaterial with custom uniforms
 * - Animated point sizes and positions
 * - Texture-based point sprites
 */

const vertexShader = `
    attribute float size;
    attribute vec3 customColor;
    varying vec3 vColor;
    uniform float uTime;

    void main() {
        vColor = customColor;

        vec3 newPosition = position;
        float wave = sin(position.x * 0.5 + uTime) * cos(position.y * 0.5 + uTime);
        newPosition.z += wave * 2.0;

        vec4 mvPosition = modelViewMatrix * vec4(newPosition, 1.0);
        gl_PointSize = size * (300.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
    }
`

const fragmentShader = `
    varying vec3 vColor;
    uniform sampler2D uTexture;

    void main() {
        vec2 uv = gl_PointCoord;
        float dist = length(uv - vec2(0.5));
        if (dist > 0.5) discard;

        float alpha = 1.0 - smoothstep(0.3, 0.5, dist);
        gl_FragColor = vec4(vColor, alpha);
    }
`

const POINT_COUNT = 10000

export const CustomAttributesPoints = () => {
    const pointsRef = $<Points>()
    const materialRef = $<ShaderMaterial>()

    useEffect(() => {
        const positions = new Float32Array(POINT_COUNT * 3)
        const colors = new Float32Array(POINT_COUNT * 3)
        const sizes = new Float32Array(POINT_COUNT)

        for (let i = 0; i < POINT_COUNT; i++) {
            const i3 = i * 3

            // Random positions in a cube
            positions[i3] = (Math.random() - 0.5) * 40
            positions[i3 + 1] = (Math.random() - 0.5) * 40
            positions[i3 + 2] = (Math.random() - 0.5) * 40

            // Color based on position
            const color = new Color()
            color.setHSL(
                (positions[i3] + 20) / 40,
                0.8,
                0.5 + Math.random() * 0.3
            )
            colors[i3] = color.r
            colors[i3 + 1] = color.g
            colors[i3 + 2] = color.b

            // Random sizes
            sizes[i] = Math.random() * 3 + 1
        }

        const geometry = new BufferGeometry()
        geometry.setAttribute('position', new BufferAttribute(positions, 3))
        geometry.setAttribute('customColor', new BufferAttribute(colors, 3))
        geometry.setAttribute('size', new BufferAttribute(sizes, 1))

        const material = new ShaderMaterial({
            vertexShader,
            fragmentShader,
            uniforms: {
                uTime: { value: 0 },
                uTexture: { value: null }
            },
            transparent: true,
            depthWrite: false
        })

        const points = new Points(geometry, material)
        pointsRef(points)
        materialRef(material)
    })

    useFrame((state) => {
        const material = $$(materialRef)
        if (material && material.uniforms) {
            material.uniforms.uTime.value = state.clock?.getElapsedTime() ?? 0
        }

        const points = $$(pointsRef)
        if (points) {
            points.rotation.y = (state.clock?.getElapsedTime() ?? 0) * 0.05
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x050505)}>
                {() => {
                    const points = $$(pointsRef)
                    if (!points) return null
                    return <primitive object={points} />
                }}
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 0, 30]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default CustomAttributesPoints
