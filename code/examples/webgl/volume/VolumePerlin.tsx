/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_volume_perlin

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const VolumePerlin = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Perlin noise volume visualization
        const geometry = new THREE.BoxGeometry(4, 4, 4, 32, 32, 32)

        const material = new THREE.ShaderMaterial({
            uniforms: {
                uTime: { value: 0 },
            },
            vertexShader: `
                varying vec3 vPosition;
                varying vec3 vNormal;

                void main() {
                    vPosition = position;
                    vNormal = normal;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                varying vec3 vPosition;
                varying vec3 vNormal;
                uniform float uTime;

                // Simple noise
                float random(vec3 p) {
                    return fract(sin(dot(p, vec3(12.9898, 78.233, 45.543))) * 43758.5453);
                }

                float noise(vec3 p) {
                    vec3 i = floor(p);
                    vec3 f = fract(p);
                    f = f * f * (3.0 - 2.0 * f);

                    return mix(
                        mix(
                            mix(random(i), random(i + vec3(1,0,0)), f.x),
                            mix(random(i + vec3(0,1,0)), random(i + vec3(1,1,0)), f.x),
                            f.y
                        ),
                        mix(
                            mix(random(i + vec3(0,0,1)), random(i + vec3(1,0,1)), f.x),
                            mix(random(i + vec3(0,1,1)), random(i + vec3(1,1,1)), f.x),
                            f.y
                        ),
                        f.z
                    );
                }

                void main() {
                    vec3 p = vPosition * 0.5 + uTime * 0.2;
                    float n = noise(p);
                    n += noise(p * 2.0) * 0.5;
                    n += noise(p * 4.0) * 0.25;
                    n /= 1.75;

                    vec3 color = mix(
                        vec3(0.1, 0.2, 0.4),
                        vec3(0.9, 0.6, 0.2),
                        n
                    );

                    gl_FragColor = vec4(color, 0.8);
                }
            `,
            transparent: true,
            side: THREE.DoubleSide,
        })

        const mesh = new THREE.Mesh(geometry, material)
        scene.add(mesh)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            material.uniforms.uTime.value = t
            mesh.rotation.y = t * 0.1
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
            <perspectiveCamera position={[0, 0, 8]} />
            <scene>
                <ambientLight intensity={0.5} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
