/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_camera_logarithmicdepthbuffer

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const CameraLogarithmicDepthBuffer = () => {
    const { scene } = useThree()

    useEffect(() => {
        const group = new THREE.Group()

        // Create objects at varying distances to test logarithmic depth buffer
        for (let i = 0; i < 50; i++) {
            const distance = Math.pow(2, i * 0.2) // Exponential distances
            const geometry = new THREE.BoxGeometry(1, 1, 1)
            const material = new THREE.MeshStandardMaterial({
                color: new THREE.Color().setHSL(i / 50, 1, 0.5),
            })
            const mesh = new THREE.Mesh(geometry, material)
            mesh.position.set(
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 20,
                -distance
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
            <perspectiveCamera position={[0, 0, 10]} />
            <scene>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
