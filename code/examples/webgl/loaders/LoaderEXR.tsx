/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_loader_exr

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const LoaderEXR = () => {
    const { scene } = useThree()

    useEffect(() => {
        // EXR (HDR) format visualization
        const geometry = new THREE.SphereGeometry(2, 64, 64)

        const material = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            metalness: 1,
            roughness: 0,
            envMapIntensity: 1,
        })

        const mesh = new THREE.Mesh(geometry, material)
        scene.add(mesh)

        // Simulated HDR environment
        const envGeometry = new THREE.SphereGeometry(50, 32, 32)
        const envMaterial = new THREE.ShaderMaterial({
            uniforms: {
                uTime: { value: 0 },
            },
            vertexShader: `
                varying vec3 vPosition;
                void main() {
                    vPosition = position;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                varying vec3 vPosition;
                uniform float uTime;
                void main() {
                    float intensity = 10.0 + sin(vPosition.y * 0.1 + uTime) * 5.0;
                    vec3 color = vec3(0.5, 0.3, 0.8) * intensity;
                    gl_FragColor = vec4(color, 1.0);
                }
            `,
            side: THREE.BackSide,
        })

        const env = new THREE.Mesh(envGeometry, envMaterial)
        scene.add(env)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            envMaterial.uniforms.uTime.value = t
            mesh.rotation.y = t * 0.2
        }
        animate()

        return () => {
            scene.remove(mesh)
            scene.remove(env)
            geometry.dispose()
            material.dispose()
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 0, 6]} />
            <scene>
                <ambientLight intensity={0.2} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}