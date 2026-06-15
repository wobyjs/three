/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_custom_attributes

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const CustomAttributes = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Custom shader attributes
        const geometry = new THREE.PlaneGeometry(10, 10, 50, 50)

        // Custom attribute
        const randoms = new Float32Array(geometry.attributes.position.count)
        for (let i = 0; i < randoms.length; i++) {
            randoms[i] = Math.random()
        }
        geometry.setAttribute('aRandom', new THREE.BufferAttribute(randoms, 1))

        const material = new THREE.ShaderMaterial({
            uniforms: {
                uTime: { value: 0 },
            },
            vertexShader: `
                attribute float aRandom;
                varying float vRandom;
                varying vec2 vUv;
                uniform float uTime;

                void main() {
                    vRandom = aRandom;
                    vUv = uv;
                    vec3 pos = position;

                    pos.z = sin(pos.x * 0.5 + uTime) * cos(pos.y * 0.5 + uTime) * aRandom;

                    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
                }
            `,
            fragmentShader: `
                varying float vRandom;
                varying vec2 vUv;
                uniform float uTime;

                void main() {
                    vec3 color = vec3(vUv.x, vUv.y, vRandom);
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
