/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_shaders_fsi

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const ShadersFSI = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Fluid-Structure Interaction shader demo
        const geometry = new THREE.PlaneGeometry(10, 10, 100, 100)

        const material = new THREE.ShaderMaterial({
            uniforms: {
                uTime: { value: 0 },
                uResolution: { value: new THREE.Vector2(100, 100) },
            },
            vertexShader: `
                varying vec2 vUv;
                varying float vElevation;
                uniform float uTime;

                void main() {
                    vUv = uv;
                    vec3 pos = position;

                    // Wave simulation
                    float elevation = sin(pos.x * 2.0 + uTime) * 0.3;
                    elevation += sin(pos.y * 3.0 + uTime * 1.5) * 0.2;
                    elevation += sin((pos.x + pos.y) * 2.0 + uTime * 0.5) * 0.1;

                    pos.z = elevation;
                    vElevation = elevation;

                    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
                }
            `,
            fragmentShader: `
                varying vec2 vUv;
                varying float vElevation;
                uniform float uTime;

                void main() {
                    vec3 color = vec3(
                        0.2 + vElevation,
                        0.4 + vElevation * 0.5,
                        0.8 - vElevation
                    );
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
