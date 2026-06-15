/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_postprocessing_chromatic

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const PostprocessingChromatic = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Chromatic aberration effect (simulated)
        const group = new THREE.Group()

        // Create RGB-shifted spheres
        const geometry = new THREE.SphereGeometry(1, 32, 32)

        const redMesh = new THREE.Mesh(
            geometry.clone(),
            new THREE.MeshBasicMaterial({ color: 0xff0000, transparent: true, opacity: 0.5 })
        )
        redMesh.position.x = -0.1
        group.add(redMesh)

        const greenMesh = new THREE.Mesh(
            geometry.clone(),
            new THREE.MeshBasicMaterial({ color: 0x00ff00, transparent: true, opacity: 0.5 })
        )
        greenMesh.position.x = 0
        group.add(greenMesh)

        const blueMesh = new THREE.Mesh(
            geometry.clone(),
            new THREE.MeshBasicMaterial({ color: 0x0000ff, transparent: true, opacity: 0.5 })
        )
        blueMesh.position.x = 0.1
        group.add(blueMesh)

        scene.add(group)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            group.rotation.x = t * 0.2
            group.rotation.y = t * 0.3

            // Animate chromatic shift
            const shift = Math.sin(t * 2) * 0.1 + 0.1
            redMesh.position.x = -shift
            blueMesh.position.x = shift
        }
        animate()

        return () => {
            scene.remove(group)
            geometry.dispose()
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 0, 8]} />
            <scene>
                <ambientLight intensity={0.3} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
