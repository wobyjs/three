/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_test_memory

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const TestMemory = () => {
    const { scene } = useThree()

    useEffect(() => {
        const group = new THREE.Group()

        // Memory test - many objects
        for (let i = 0; i < 1000; i++) {
            const geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1)
            const material = new THREE.MeshBasicMaterial({
                color: new THREE.Color().setHSL(i / 1000, 1, 0.5),
            })
            const mesh = new THREE.Mesh(geometry, material)
            mesh.position.set(
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 10
            )
            group.add(mesh)
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
            <perspectiveCamera position={[0, 0, 15]} />
            <scene>
                <ambientLight intensity={0.5} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}