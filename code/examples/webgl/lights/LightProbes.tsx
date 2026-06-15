/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_lightprobes

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const Lightprobes = () => {
    const { scene } = useThree()

    useEffect(() => {
        const group = new THREE.Group()

        // Multiple light probes visualization
        const probePositions = [
            { pos: [0, 3, 0], color: 0xff0000 },
            { pos: [5, 3, 0], color: 0x00ff00 },
            { pos: [-5, 3, 0], color: 0x0000ff },
            { pos: [0, 3, 5], color: 0xffff00 },
        ]

        probePositions.forEach(probe => {
            const geom = new THREE.SphereGeometry(0.3, 16, 16)
            const mat = new THREE.MeshBasicMaterial({ color: probe.color })
            const mesh = new THREE.Mesh(geom, mat)
            mesh.position.set(probe.pos[0], probe.pos[1], probe.pos[2])
            group.add(mesh)
        })

        // Central object
        const geometry = new THREE.TorusKnotGeometry(1.5, 0.5, 64, 16)
        const material = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            metalness: 0.8,
            roughness: 0.2,
        })
        const knot = new THREE.Mesh(geometry, material)
        group.add(knot)

        scene.add(group)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            knot.rotation.x = t * 0.2
            knot.rotation.y = t * 0.3
        }
        animate()

        return () => {
            scene.remove(group)
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 3, 10]} />
            <scene>
                <ambientLight intensity={0.2} />
                <directionalLight position={[5, 5, 5]} intensity={0.5} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
