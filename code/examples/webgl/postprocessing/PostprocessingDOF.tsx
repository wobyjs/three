/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_postprocessing_dof

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const PostprocessingDOF = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Create scene with multiple objects at different depths
        const createSphere = (x: number, y: number, z: number, color: number) => {
            const geometry = new THREE.SphereGeometry(0.5, 32, 32)
            const material = new THREE.MeshStandardMaterial({ color })
            const mesh = new THREE.Mesh(geometry, material)
            mesh.position.set(x, y, z)
            scene.add(mesh)
            return mesh
        }

        const spheres = [
            createSphere(-3, 0, -5, 0xff0000),
            createSphere(0, 0, -10, 0x00ff00),
            createSphere(3, 0, -15, 0x0000ff),
            createSphere(0, 2, -8, 0xffff00),
            createSphere(-2, -1, -12, 0xff00ff),
        ]

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            spheres.forEach((sphere, i) => {
                sphere.position.y = Math.sin(t + i) * 0.5
            })
        }
        animate()

        return () => {
            spheres.forEach(sphere => {
                scene.remove(sphere)
                sphere.geometry.dispose()
                sphere.material.dispose()
            })
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 0, 5]} fov={50} />
            <scene>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
