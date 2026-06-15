/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_test_memory2

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const TestMemory2 = () => {
    const { scene } = useThree()

    useEffect(() => {
        const group = new THREE.Group()

        // Memory test 2 - different geometry
        for (let i = 0; i < 500; i++) {
            const geometries = [
                new THREE.SphereGeometry(0.05, 8, 8),
                new THREE.BoxGeometry(0.1, 0.1, 0.1),
                new THREE.ConeGeometry(0.05, 0.1, 8),
            ]
            const geometry = geometries[i % 3]
            const material = new THREE.MeshBasicMaterial({
                color: new THREE.Color().setHSL(i / 500, 1, 0.5),
            })
            const mesh = new THREE.Mesh(geometry, material)
            mesh.position.set(
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 20
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
            <perspectiveCamera position={[0, 0, 20]} />
            <scene>
                <ambientLight intensity={0.5} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}