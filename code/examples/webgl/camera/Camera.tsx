/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_camera

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const Camera = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Camera types comparison
        const group = new THREE.Group()

        // Objects at different distances
        const distances = [5, 10, 20, 40]

        distances.forEach((dist, i) => {
            const geometry = new THREE.BoxGeometry(2, 2, 2)
            const material = new THREE.MeshStandardMaterial({
                color: new THREE.Color().setHSL(i / distances.length, 1, 0.5)
            })
            const mesh = new THREE.Mesh(geometry, material)
            mesh.position.z = -dist
            mesh.position.y = (i - 1.5) * 4
            group.add(mesh)
        })

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
            <perspectiveCamera position={[0, 0, 10]} fov={60} />
            <scene>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
