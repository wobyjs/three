/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_custom_attributes_points

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const CustomAttributesPoints = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Custom attributes on points
        const count = 10000
        const geometry = new THREE.BufferGeometry()
        const positions = new Float32Array(count * 3)
        const colors = new Float32Array(count * 3)
        const sizes = new Float32Array(count)

        for (let i = 0; i < count; i++) {
            const i3 = i * 3

            // Galaxy shape
            const angle = Math.random() * Math.PI * 2
            const radius = Math.pow(Math.random(), 0.5) * 10
            const height = (Math.random() - 0.5) * 2

            positions[i3] = Math.cos(angle) * radius
            positions[i3 + 1] = height
            positions[i3 + 2] = Math.sin(angle) * radius

            // Color gradient
            const t = radius / 10
            colors[i3] = 0.5 + t * 0.5
            colors[i3 + 1] = 0.3 * (1 - t)
            colors[i3 + 2] = 0.8 + t * 0.2

            sizes[i] = Math.random() * 2
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
        geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1))

        const material = new THREE.ShaderMaterial({
            uniforms: {
                uTime: { value: 0 },
            },
            vertexShader: `
                attribute float size;
                attribute vec3 color;
                varying vec3 vColor;
                uniform float uTime;

                void main() {
                    vColor = color;
                    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                    gl_PointSize = size * (300.0 / -mvPosition.z);
                    gl_Position = projectionMatrix * mvPosition;
                }
            `,
            fragmentShader: `
                varying vec3 vColor;

                void main() {
                    float dist = length(gl_PointCoord - vec2(0.5));
                    if (dist > 0.5) discard;

                    gl_FragColor = vec4(vColor, 1.0 - dist * 2.0);
                }
            `,
            transparent: true,
            vertexColors: true,
        })

        const points = new THREE.Points(geometry, material)
        scene.add(points)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            material.uniforms.uTime.value = t
            points.rotation.y = t * 0.05
        }
        animate()

        return () => {
            scene.remove(points)
            geometry.dispose()
            material.dispose()
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 0, 20]} />
            <scene>
                <ambientLight intensity={0.5} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
