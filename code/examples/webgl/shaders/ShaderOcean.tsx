/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_shader_ocean

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const ShaderOcean = () => {
    const { scene } = useThree()

    useEffect(() => {
        const vertexShader = `
            uniform float uTime;
            varying vec2 vUv;
            varying float vElevation;

            void main() {
                vUv = uv;
                vec3 pos = position;
                
                float elevation = sin(pos.x * 2.0 + uTime) * 0.3 
                               + sin(pos.y * 3.0 + uTime * 1.5) * 0.2;
                pos.z += elevation;
                vElevation = elevation;
                
                gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
            }
        `

        const fragmentShader = `
            uniform float uTime;
            varying vec2 vUv;
            varying float vElevation;

            void main() {
                vec3 colorDeep = vec3(0.0, 0.2, 0.5);
                vec3 colorShallow = vec3(0.0, 0.6, 0.8);
                float mixFactor = (vElevation + 0.5) * 0.5;
                vec3 color = mix(colorDeep, colorShallow, mixFactor);
                
                gl_FragColor = vec4(color, 1.0);
            }
        `

        const geometry = new THREE.PlaneGeometry(20, 20, 64, 64)
        const material = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            uniforms: {
                uTime: { value: 0 },
            },
            side: THREE.DoubleSide,
        })

        const plane = new THREE.Mesh(geometry, material)
        plane.rotation.x = -Math.PI / 2
        scene.add(plane)

        // Add boat
        const boatGeom = new THREE.ConeGeometry(0.5, 1.5, 8)
        boatGeom.rotateX(Math.PI / 2)
        const boatMat = new THREE.MeshStandardMaterial({ color: 0x884422 })
        const boat = new THREE.Mesh(boatGeom, boatMat)
        boat.position.set(0, 1, 0)
        scene.add(boat)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            material.uniforms.uTime.value = t
            boat.position.y = 0.5 + Math.sin(t * 2) * 0.2
            boat.rotation.x = Math.sin(t * 2) * 0.1
        }
        animate()

        return () => {
            scene.remove(plane)
            scene.remove(boat)
            geometry.dispose()
            material.dispose()
            boatGeom.dispose()
            boatMat.dispose()
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 5, 15]} />
            <scene>
                <ambientLight intensity={0.4} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
