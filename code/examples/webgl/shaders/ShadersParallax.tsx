/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_shaders_parallax

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const ShadersParallax = () => {
    const { scene } = useThree()

    useEffect(() => {
        const geometry = new THREE.PlaneGeometry(4, 4, 64, 64)

        const material = new THREE.ShaderMaterial({
            uniforms: {
                uTime: { value: 0 },
            },
            vertexShader: `
                varying vec2 vUv;
                varying vec3 vNormal;
                varying vec3 vViewDir;

                void main() {
                    vUv = uv;
                    vNormal = normalMatrix * normal;
                    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                    vViewDir = -mvPosition.xyz;
                    gl_Position = projectionMatrix * mvPosition;
                }
            `,
            fragmentShader: `
                uniform float uTime;
                varying vec2 vUv;
                varying vec3 vNormal;
                varying vec3 vViewDir;

                void main() {
                    // Parallax effect
                    vec2 uv = vUv;

                    float depth = 0.05;
                    vec3 viewDir = normalize(vViewDir);
                    vec2 parallax = viewDir.xy * depth * (1.0 - dot(vNormal, viewDir));

                    uv += parallax;

                    // Brick pattern with parallax
                    vec2 brick = fract(uv * vec2(4.0, 8.0));
                    float mortar = step(0.1, brick.x) * step(0.1, brick.y);

                    vec3 brickColor = vec3(0.8, 0.2, 0.1);
                    vec3 mortarColor = vec3(0.9, 0.9, 0.8);

                    vec3 color = mix(mortarColor, brickColor, mortar);
                    color += vNormal * 0.1;

                    gl_FragColor = vec4(color, 1.0);
                }
            `,
            side: THREE.DoubleSide,
        })

        const mesh = new THREE.Mesh(geometry, material)
        mesh.position.z = -1
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
            <perspectiveCamera position={[0, 0, 3]} />
            <scene>
                <ambientLight intensity={0.5} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
