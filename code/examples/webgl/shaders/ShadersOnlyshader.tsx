/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_shaders_onlyshader

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const ShadersOnlyshader = () => {
    const { scene } = useThree()

    useEffect(() => {
        const geometry = new THREE.IcosahedronGeometry(2, 4)

        const material = new THREE.ShaderMaterial({
            uniforms: {
                uTime: { value: 0 },
            },
            vertexShader: `
                varying vec3 vNormal;
                varying vec3 vPosition;

                void main() {
                    vNormal = normal;
                    vPosition = position;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform float uTime;
                varying vec3 vNormal;
                varying vec3 vPosition;

                void main() {
                    vec3 color = vNormal * 0.5 + 0.5;
                    color.r += sin(uTime + vPosition.x * 5.0) * 0.2;
                    color.g += cos(uTime + vPosition.y * 5.0) * 0.2;
                    color.b += sin(uTime + vPosition.z * 5.0) * 0.2;
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
            mesh.rotation.x = t * 0.1
            mesh.rotation.y = t * 0.15
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
            <scene />
            <orbitControls />
        </canvas3D>
    )
}
