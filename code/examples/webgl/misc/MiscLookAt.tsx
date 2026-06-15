/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_misc_lookat

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const MiscLookAt = () => {
    const { scene } = useThree()

    useEffect(() => {
        // LookAt demo - objects looking at target
        const group = new THREE.Group()

        // Create several objects
        for (let i = 0; i < 8; i++) {
            const angle = (i / 8) * Math.PI * 2
            const radius = 5

            const geometry = new THREE.ConeGeometry(0.5, 1, 8)
            const material = new THREE.MeshStandardMaterial({
                color: new THREE.Color().setHSL(i / 8, 1, 0.5)
            })
            const mesh = new THREE.Mesh(geometry, material)

            mesh.position.x = Math.cos(angle) * radius
            mesh.position.z = Math.sin(angle) * radius

            group.add(mesh)
        }

        // Target
        const targetGeom = new THREE.SphereGeometry(0.3, 16, 16)
        const targetMat = new THREE.MeshBasicMaterial({ color: 0xffffff })
        const target = new THREE.Mesh(targetGeom, targetMat)
        scene.add(target)

        scene.add(group)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()

            // Move target
            target.position.x = Math.cos(t * 0.5) * 2
            target.position.y = Math.sin(t) * 2 + 3
            target.position.z = Math.sin(t * 0.5) * 2

            // Make all cones look at target
            group.children.forEach((child, i) => {
                if (child instanceof THREE.Mesh) {
                    child.lookAt(target.position)
                }
            })
        }
        animate()

        return () => {
            scene.remove(group)
            scene.remove(target)
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 5, 12]} />
            <scene>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
