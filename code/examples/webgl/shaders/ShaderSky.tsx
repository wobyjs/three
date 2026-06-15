/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_shaders_sky

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const ShaderSky = () => {
    const { scene } = useThree()

    useEffect(() => {
        const vertexShader = `
            varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `

        const fragmentShader = `
            uniform vec3 topColor;
            uniform vec3 bottomColor;
            varying vec2 vUv;
            void main() {
                float h = vUv.y;
                gl_FragColor = vec4(mix(bottomColor, topColor, h), 1.0);
            }
        `

        const geometry = new THREE.SphereGeometry(100, 32, 32)
        const material = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            uniforms: {
                topColor: { value: new THREE.Color(0x0077ff) },
                bottomColor: { value: new THREE.Color(0xffffff) },
            },
            side: THREE.BackSide,
        })

        const sky = new THREE.Mesh(geometry, material)
        scene.add(sky)

        // Add a sun
        const sunGeometry = new THREE.SphereGeometry(5, 32, 32)
        const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 })
        const sun = new THREE.Mesh(sunGeometry, sunMaterial)
        sun.position.set(50, 30, -50)
        scene.add(sun)

        return () => {
            scene.remove(sky)
            scene.remove(sun)
            geometry.dispose()
            material.dispose()
            sunGeometry.dispose()
            sunMaterial.dispose()
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 0, 1]} />
            <scene>
                <ambientLight intensity={0.3} />
                <pointLight position={[50, 30, -50]} intensity={1} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
