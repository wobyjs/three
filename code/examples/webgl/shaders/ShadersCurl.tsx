/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_shaders_curl

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const ShadersCurl = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Curl noise shader
        const geometry = new THREE.PlaneGeometry(10, 10, 100, 100)

        const material = new THREE.ShaderMaterial({
            uniforms: {
                uTime: { value: 0 },
            },
            vertexShader: `
                varying vec2 vUv;
                varying vec3 vPosition;

                void main() {
                    vUv = uv;
                    vPosition = position;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform float uTime;
                varying vec2 vUv;
                varying vec3 vPosition;

                vec3 curlNoise(vec2 p) {
                    float e = 0.01;
                    vec2 dx = vec2(e, 0.0);
                    vec2 dy = vec2(0.0, e);

                    float n1 = sin(p.y + e + uTime);
                    float n2 = sin(p.y - e + uTime);
                    float n3 = sin(p.x + e + uTime);
                    float n4 = sin(p.x - e + uTime);

                    float curlX = (n1 - n2) / (2.0 * e);
                    float curlY = -(n3 - n4) / (2.0 * e);

                    return vec3(curlX, curlY, 0.0);
                }

                void main() {
                    vec2 p = vUv * 5.0;
                    vec3 curl = curlNoise(p);

                    vec3 color = vec3(curl * 0.5 + 0.5, 0.5);
                    gl_FragColor = vec4(color, 1.0);
                }
            `,
            side: THREE.DoubleSide,
        })

        const mesh = new THREE.Mesh(geometry, material)
        mesh.rotation.x = -Math.PI / 2
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
            <perspectiveCamera position={[0, 5, 10]} />
            <scene>
                <ambientLight intensity={0.5} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
