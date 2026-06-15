/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_postprocessing_glitch

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const PostprocessingGlitch = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Create scene with glitch effect
        const geometry = new THREE.TorusKnotGeometry(1, 0.3, 128, 32)
        const material = new THREE.MeshStandardMaterial({ color: 0x00ffaa })
        const mesh = new THREE.Mesh(geometry, material)
        scene.add(mesh)

        // Add background
        const bgGeometry = new THREE.PlaneGeometry(20, 20)
        const bgMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 })
        const bg = new THREE.Mesh(bgGeometry, bgMaterial)
        bg.position.z = -5
        scene.add(bg)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            mesh.rotation.x = t * 0.2
            mesh.rotation.y = t * 0.3

            // Simulate glitch by random position shifts
            if (Math.random() > 0.95) {
                mesh.position.x = (Math.random() - 0.5) * 0.1
            } else {
                mesh.position.x = 0
            }
        }
        animate()

        return () => {
            scene.remove(mesh)
            scene.remove(bg)
            geometry.dispose()
            material.dispose()
            bgGeometry.dispose()
            bgMaterial.dispose()
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 0, 8]} />
            <scene>
                <ambientLight intensity={0.3} />
                <pointLight position={[5, 5, 5]} intensity={1} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}