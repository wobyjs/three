/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_shaders_tonemapping

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const ShadersTonemapping = () => {
    const { scene } = useThree()

    useEffect(() => {
        // HDR tone mapping demo
        const group = new THREE.Group()

        // Spheres with varying brightness
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                const geometry = new THREE.SphereGeometry(0.4, 16, 16)
                const material = new THREE.MeshStandardMaterial({
                    color: new THREE.Color(i / 4, j / 4, 0.5),
                    emissive: new THREE.Color(i / 4, j / 4, 0.5),
                    emissiveIntensity: (i + j) / 8,
                })
                const mesh = new THREE.Mesh(geometry, material)
                mesh.position.set(i - 2, j - 2, 0)
                group.add(mesh)
            }
        }

        scene.add(group)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            group.rotation.y = t * 0.1
        }
        animate()

        return () => {
            scene.remove(group)
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 0, 8]} />
            <scene>
                <ambientLight intensity={0.2} />
                <pointLight position={[5, 5, 5]} intensity={2} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
