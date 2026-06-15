/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_shaders_material

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const ShadersMaterial = () => {
    const { scene } = useThree()

    useEffect(() => {
        const geometry = new THREE.TorusKnotGeometry(1.5, 0.5, 128, 32)

        const material = new THREE.ShaderMaterial({
            uniforms: {
                uTime: { value: 0 },
                uColor1: { value: new THREE.Color(0xff6600) },
                uColor2: { value: new THREE.Color(0x0066ff) },
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
                uniform vec3 uColor1;
                uniform vec3 uColor2;
                varying vec2 vUv;
                varying vec3 vNormal;
                varying vec3 vPosition;

                void main() {
                    float pattern = sin(vPosition.x * 10.0 + uTime) * sin(vPosition.y * 10.0 + uTime) * sin(vPosition.z * 10.0 + uTime);
                    pattern = pattern * 0.5 + 0.5;

                    vec3 color = mix(uColor1, uColor2, pattern);

                    // Add lighting
                    vec3 lightDir = normalize(vec3(1.0, 1.0, 1.0));
                    float diff = max(dot(vNormal, lightDir), 0.0);
                    color *= diff * 0.5 + 0.5;

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
            <perspectiveCamera position={[0, 0, 8]} />
            <scene>
                <ambientLight intensity={0.3} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
