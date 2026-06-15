/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_volume_light

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const VolumeLight = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Volumetric light shaft effect
        const group = new THREE.Group()

        // Light cone
        const coneGeom = new THREE.ConeGeometry(3, 10, 32, 1, true)
        const coneMat = new THREE.ShaderMaterial({
            uniforms: {
                uTime: { value: 0 },
            },
            vertexShader: `
                varying vec2 vUv;
                varying vec3 vPosition;

                void main() {
                    vUv = uv;
                    vPosition = position;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                varying vec2 vUv;
                varying vec3 vPosition;
                uniform float uTime;

                void main() {
                    float intensity = 1.0 - vUv.y;
                    intensity *= smoothstep(0.0, 0.3, vUv.y);

                    // Add noise
                    float noise = fract(sin(dot(vUv, vec2(12.9898, 78.233))) * 43758.5453);
                    intensity += noise * 0.1;

                    gl_FragColor = vec4(1.0, 0.95, 0.8, intensity * 0.3);
                }
            `,
            transparent: true,
            side: THREE.DoubleSide,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
        })

        const cone = new THREE.Mesh(coneGeom, coneMat)
        cone.rotation.x = Math.PI
        cone.position.y = 5
        group.add(cone)

        // Floor
        const floorGeom = new THREE.PlaneGeometry(20, 20)
        const floorMat = new THREE.MeshStandardMaterial({ color: 0x333333 })
        const floor = new THREE.Mesh(floorGeom, floorMat)
        floor.rotation.x = -Math.PI / 2
        group.add(floor)

        scene.add(group)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            coneMat.uniforms.uTime.value = t
        }
        animate()

        return () => {
            scene.remove(group)
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 2, 10]} />
            <scene>
                <ambientLight intensity={0.1} />
                <pointLight position={[0, 10, 0]} intensity={2} color={0xffffaa} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
