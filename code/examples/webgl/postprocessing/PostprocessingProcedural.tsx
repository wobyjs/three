/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_postprocessing_procedural

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const PostprocessingProcedural = () => {
    const { scene } = useThree()

    useEffect(() => {
        const geometry = new THREE.PlaneGeometry(8, 8)

        const material = new THREE.ShaderMaterial({
            uniforms: {
                uTime: { value: 0 },
                uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
            },
            vertexShader: `
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform float uTime;
                uniform vec2 uResolution;
                varying vec2 vUv;

                void main() {
                    vec2 uv = vUv;

                    // Procedural pattern
                    float pattern = 0.0;
                    for (float i = 1.0; i < 10.0; i++) {
                        pattern += sin(uv.x * i * 10.0 + uTime) * sin(uv.y * i * 10.0 + uTime) / i;
                    }

                    vec3 color = vec3(pattern * 0.5 + 0.5);
                    color.r += sin(uTime + uv.x * 5.0) * 0.2;
                    color.g += cos(uTime + uv.y * 5.0) * 0.2;
                    color.b += sin(uTime + (uv.x + uv.y) * 5.0) * 0.2;

                    gl_FragColor = vec4(color, 1.0);
                }
            `,
        })

        const mesh = new THREE.Mesh(geometry, material)
        scene.add(mesh)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            material.uniforms.uTime.value = t
        }
        animate()

        return () => {
            scene.remove(mesh)
            geometry.dispose()
            material.dispose()
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 0, 5]} />
            <scene>
                <ambientLight intensity={0.5} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
