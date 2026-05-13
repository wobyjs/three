/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, BufferGeometry, BufferAttribute, Line, LineBasicMaterial, ShaderMaterial } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/objects/Line'
import '@woby/three/src/materials/LineBasicMaterial'
import '@woby/three/src/materials/ShaderMaterial'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_custom_attributes_lines from Three.js examples.
 * Demonstrates custom shader attributes on lines.
 *
 * Source: https://threejs.org/examples/webgl_custom_attributes_lines.html
 *
 * Key features:
 * - Custom vertex attributes on lines
 * - ShaderMaterial with custom uniforms
 * - Animated line displacement
 */

const vertexShader = `
    attribute float displacement;
    varying vec3 vColor;
    uniform float uTime;

    void main() {
        vColor = color;

        vec3 newPosition = position;
        newPosition.y += sin(position.x * 2.0 + uTime) * displacement * 0.5;
        newPosition.x += cos(position.y * 2.0 + uTime) * displacement * 0.3;

        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
    }
`

const fragmentShader = `
    varying vec3 vColor;

    void main() {
        gl_FragColor = vec4(vColor, 1.0);
    }
`

const LINE_COUNT = 50
const POINTS_PER_LINE = 100

export const CustomAttributesLines = () => {
    const linesRef = $<THREE.Group>()

    useEffect(() => {
        const group = new THREE.Group()

        for (let i = 0; i < LINE_COUNT; i++) {
            const positions = new Float32Array(POINTS_PER_LINE * 3)
            const colors = new Float32Array(POINTS_PER_LINE * 3)
            const displacements = new Float32Array(POINTS_PER_LINE)

            const baseY = (i - LINE_COUNT / 2) * 0.5
            const hue = i / LINE_COUNT

            for (let j = 0; j < POINTS_PER_LINE; j++) {
                const j3 = j * 3

                positions[j3] = (j / POINTS_PER_LINE - 0.5) * 20
                positions[j3 + 1] = baseY
                positions[j3 + 2] = 0

                const color = new Color().setHSL(hue, 1, 0.5)
                colors[j3] = color.r
                colors[j3 + 1] = color.g
                colors[j3 + 2] = color.b

                displacements[j] = Math.random() * 2
            }

            const geometry = new BufferGeometry()
            geometry.setAttribute('position', new BufferAttribute(positions, 3))
            geometry.setAttribute('color', new BufferAttribute(colors, 3))
            geometry.setAttribute('displacement', new BufferAttribute(displacements, 1))

            const material = new ShaderMaterial({
                vertexShader,
                fragmentShader,
                uniforms: {
                    uTime: { value: 0 }
                },
                vertexColors: true
            })

            const line = new Line(geometry, material)
            group.add(line)
        }

        linesRef(group as THREE.Group)
    })

    useFrame((state) => {
        const group = $$(linesRef)
        if (!group) return

        const time = state.clock?.getElapsedTime() ?? 0

        group.children.forEach((line) => {
            const material = (line as Line).material as ShaderMaterial
            if (material && material.uniforms) {
                material.uniforms.uTime.value = time
            }
        })
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x0a0a0a)}>
                {() => {
                    const group = $$(linesRef)
                    if (!group) return null
                    return <primitive object={group} />
                }}
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 0, 15]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default CustomAttributesLines
