/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_postprocessing_crossfade

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const PostprocessingCrossfade = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Scene 1
        const geometry1 = new THREE.SphereGeometry(2, 32, 32)
        const material1 = new THREE.MeshStandardMaterial({ color: 0xff6600 })
        const sphere1 = new THREE.Mesh(geometry1, material1)
        sphere1.position.x = -2
        scene.add(sphere1)

        // Scene 2
        const geometry2 = new THREE.BoxGeometry(3, 3, 3)
        const material2 = new THREE.MeshStandardMaterial({ color: 0x0066ff })
        const box2 = new THREE.Mesh(geometry2, material2)
        box2.position.x = 2
        scene.add(box2)

        // Crossfade visualization
        const fadeGeometry = new THREE.PlaneGeometry(10, 10)
        const fadeMaterial = new THREE.ShaderMaterial({
            uniforms: {
                uMix: { value: 0 },
            },
            vertexShader: `
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                varying vec2 vUv;
                uniform float uMix;
                void main() {
                    float alpha = sin(vUv.x * 3.14159) * uMix;
                    gl_FragColor = vec4(alpha);
                }
            `,
            transparent: true,
        })
        const fade = new THREE.Mesh(fadeGeometry, fadeMaterial)
        scene.add(fade)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()

            sphere1.rotation.y = t * 0.2
            box2.rotation.y = t * 0.3

            // Crossfade
            fadeMaterial.uniforms.uMix.value = (Math.sin(t) * 0.5 + 0.5)
        }
        animate()

        return () => {
            scene.remove(sphere1)
            scene.remove(box2)
            scene.remove(fade)
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 0, 8]} />
            <scene>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
