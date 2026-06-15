/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_shaders_matrix

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const ShadersMatrix = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Matrix transformation shader
        const geometry = new THREE.PlaneGeometry(4, 4, 64, 64)

        const material = new THREE.ShaderMaterial({
            uniforms: {
                uTime: { value: 0 },
                uMatrix: { value: new THREE.Matrix4() },
            },
            vertexShader: `
                uniform float uTime;
                uniform mat4 uMatrix;
                varying vec2 vUv;
                varying vec3 vPosition;

                void main() {
                    vUv = uv;
                    vec3 pos = position;

                    // Apply matrix transformation
                    vec4 transformed = uMatrix * vec4(pos, 1.0);
                    pos = transformed.xyz;

                    // Wave
                    pos.z += sin(pos.x * 3.0 + uTime) * 0.2;

                    vPosition = pos;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
                }
            `,
            fragmentShader: `
                varying vec2 vUv;
                varying vec3 vPosition;
                void main() {
                    vec3 color = vec3(vUv, 0.5);
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

            // Rotate matrix
            const matrix = new THREE.Matrix4()
            matrix.makeRotationZ(t * 0.2)
            material.uniforms.uMatrix.value = matrix
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
            <perspectiveCamera position={[0, 5, 8]} />
            <scene>
                <ambientLight intensity={0.5} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
