/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_multiple_views

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const MultipleViews = () => {
    const { scene } = useThree()

    useEffect(() => {
        const group = new THREE.Group()

        // Central object
        const geometry = new THREE.TorusKnotGeometry(1, 0.3, 100, 16)
        const material = new THREE.MeshStandardMaterial({
            color: 0x66aaff,
            metalness: 0.5,
            roughness: 0.5,
        })
        const mesh = new THREE.Mesh(geometry, material)
        group.add(mesh)

        // View indicators
        const views = [
            { pos: [3, 0, 0], color: 0xff0000 },
            { pos: [-3, 0, 0], color: 0x00ff00 },
            { pos: [0, 3, 0], color: 0x0000ff },
            { pos: [0, -3, 0], color: 0xffff00 },
        ]

        views.forEach(view => {
            const indicator = new THREE.Mesh(
                new THREE.SphereGeometry(0.1, 8, 8),
                new THREE.MeshBasicMaterial({ color: view.color })
            )
            indicator.position.set(view.pos[0], view.pos[1], view.pos[2])
            group.add(indicator)
        })

        scene.add(group)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            mesh.rotation.x = t * 0.2
            mesh.rotation.y = t * 0.3
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
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}