/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_postprocessing_shaders

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const PostprocessingShaders = () => {
    const { scene } = useThree()

    useEffect(() => {
        const group = new THREE.Group()

        for (let i = 0; i < 5; i++) {
            const geometry = new THREE.SphereGeometry(0.8, 32, 32)
            const material = new THREE.MeshStandardMaterial({
                color: new THREE.Color().setHSL(i / 5, 1, 0.5),
                emissive: new THREE.Color().setHSL(i / 5, 1, 0.3),
                emissiveIntensity: 0.5,
            })
            const sphere = new THREE.Mesh(geometry, material)
            sphere.position.x = (i - 2) * 2
            group.add(sphere)
        }

        scene.add(group)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()

            group.children.forEach((child, i) => {
                if (child instanceof THREE.Mesh) {
                    child.position.y = Math.sin(t * 2 + i) * 0.5
                }
            })

            group.rotation.y = t * 0.1
        }
        animate()

        return () => {
            scene.remove(group)
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 0, 10]} />
            <scene>
                <ambientLight intensity={0.3} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
