/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_camera_cinematic

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const CameraCinematic = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Cinematic camera with shake/dolly
        const group = new THREE.Group()

        // Scene with depth
        for (let i = 0; i < 10; i++) {
            const geometry = new THREE.BoxGeometry(1, 1, 1)
            const material = new THREE.MeshStandardMaterial({
                color: new THREE.Color().setHSL(i / 10, 1, 0.5)
            })
            const mesh = new THREE.Mesh(geometry, material)
            mesh.position.z = -i * 5
            mesh.position.x = (i % 2 === 0 ? 1 : -1) * 3
            group.add(mesh)
        }

        scene.add(group)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()

            // Cinematic shake
            group.rotation.x = Math.sin(t * 2) * 0.02
            group.rotation.y = Math.cos(t * 1.5) * 0.02
        }
        animate()

        return () => {
            scene.remove(group)
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 0, 5]} fov={35} />
            <scene>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
