/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_shaders_water

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const ShadersWater = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Water shader effect
        const geometry = new THREE.PlaneGeometry(20, 20, 100, 100)

        const material = new THREE.ShaderMaterial({
            uniforms: {
                uTime: { value: 0 },
                uWaterColor: { value: new THREE.Color(0x0066aa) },
                uDeepColor: { value: new THREE.Color(0x001133) },
            },
            vertexShader: `
                uniform float uTime;
                varying vec2 vUv;
                varying float vElevation;

                void main() {
                    vUv = uv;
                    vec3 pos = position;

                    // Wave simulation
                    float wave1 = sin(pos.x * 0.5 + uTime * 2.0) * 0.3;
                    float wave2 = sin(pos.y * 0.3 + uTime * 1.5) * 0.2;
                    float wave3 = sin((pos.x + pos.y) * 0.4 + uTime) * 0.1;

                    pos.z = wave1 + wave2 + wave3;
                    vElevation = pos.z;

                    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
                }
            `,
            fragmentShader: `
                uniform vec3 uWaterColor;
                uniform vec3 uDeepColor;
                uniform float uTime;
                varying vec2 vUv;
                varying float vElevation;

                void main() {
                    // Mix colors based on elevation
                    float depth = 0.5 - vElevation;
                    vec3 color = mix(uWaterColor, uDeepColor, depth);

                    // Add foam at peaks
                    if (vElevation > 0.4) {
                        color = mix(color, vec3(1.0), (vElevation - 0.4) * 2.0);
                    }

                    // Add caustics
                    float caustic = sin(vUv.x * 20.0 + uTime) * sin(vUv.y * 20.0 + uTime);
                    color += caustic * 0.05;

                    gl_FragColor = vec4(color, 0.9);
                }
            `,
            transparent: true,
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
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 10, 5]} intensity={1} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}