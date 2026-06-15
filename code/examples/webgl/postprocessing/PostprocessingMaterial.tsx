/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_postprocessing_material

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const PostprocessingMaterial = () => {
    const { scene } = useThree()

    useEffect(() => {
        const geometry = new THREE.TorusKnotGeometry(1.5, 0.5, 128, 32)

        const material = new THREE.ShaderMaterial({
            uniforms: {
                uTime: { value: 0 },
            },
            vertexShader: `
                varying vec2 vUv;
                varying vec3 vNormal;
                varying vec3 vPosition;

                void main() {
                    vUv = uv;
                    vNormal = normal;
                    vPosition = position;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform float uTime;
                varying vec2 vUv;
                varying vec3 vNormal;
                varying vec3 vPosition;

                void main() {
                    // Post-processing style effect
                    vec3 color = vec3(vUv, 0.5);

                    // Scanlines
                    float scanline = sin(vUv.y * 100.0 + uTime * 5.0) * 0.1;
                    color -= scanline;

                    // Vignette
                    float vignette = 1.0 - length(vUv - 0.5) * 0.5;
                    color *= vignette;

                    // Chromatic aberration
                    color.r += sin(vUv.x * 50.0 + uTime) * 0.1;
                    color.b += cos(vUv.y * 50.0 + uTime) * 0.1;

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
            mesh.rotation.y = t * 0.2
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
            <perspectiveCamera position={[0, 0, 6]} />
            <scene>
                <ambientLight intensity={0.5} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
