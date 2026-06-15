/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_multiple_elements_text

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const MultipleElementsText = () => {
    const { scene } = useThree()

    useEffect(() => {
        const group = new THREE.Group()

        // Multiple text elements
        const texts = ['Hello', 'World', 'Three.js', 'Woby']

        for (let i = 0; i < texts.length; i++) {
            const geometry = new THREE.PlaneGeometry(2, 0.5)
            const material = new THREE.MeshBasicMaterial({
                color: new THREE.Color().setHSL(i / texts.length, 1, 0.5),
                side: THREE.DoubleSide,
            })
            const plane = new THREE.Mesh(geometry, material)
            plane.position.set(
                (i % 2 === 0 ? -2 : 2),
                (i < 2 ? 1.5 : -1.5),
                0
            )
            group.add(plane)
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
                <ambientLight intensity={0.5} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}