/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_buffergeometry_custom_attributes

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const BufferGeometryCustomAttributes = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Custom attributes on buffer geometry
        const count = 5000
        const geometry = new THREE.BufferGeometry()
        const positions = new Float32Array(count * 3)
        const randoms = new Float32Array(count)

        for (let i = 0; i < count; i++) {
            const i3 = i * 3

            // Random positions
            positions[i3] = (Math.random() - 0.5) * 20
            positions[i3 + 1] = (Math.random() - 0.5) * 20
            positions[i3 + 2] = (Math.random() - 0.5) * 20

            randoms[i] = Math.random()
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
        geometry.setAttribute('aRandom', new THREE.BufferAttribute(randoms, 1))

        const material = new THREE.ShaderMaterial({
            uniforms: {
                uTime: { value: 0 },
            },
            vertexShader: `
                attribute float aRandom;
                varying float vRandom;
                uniform float uTime;

                void main() {
                    vRandom = aRandom;
                    vec3 pos = position;

                    pos.y += sin(uTime + aRandom * 10.0) * 0.5;

                    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
                    gl_PointSize = (1.0 + aRandom) * (300.0 / -mvPosition.z);
                    gl_Position = projectionMatrix * mvPosition;
                }
            `,
            fragmentShader: `
                varying float vRandom;

                void main() {
                    float dist = length(gl_PointCoord - vec2(0.5));
                    if (dist > 0.5) discard;

                    vec3 color = vec3(vRandom, 1.0 - vRandom, 0.5);
                    gl_FragColor = vec4(color, 1.0);
                }
            `,
            transparent: true,
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
