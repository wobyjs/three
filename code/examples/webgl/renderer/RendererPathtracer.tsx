/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_renderer_pathtracer

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const RendererPathtracer = () => {
    const { scene } = useThree()

    useEffect(() => {
        const group = new THREE.Group()

        // Path tracer scene (simplified)
        const geometry = new THREE.SphereGeometry(2, 64, 64)
        const material = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            metalness: 1,
            roughness: 0,
        })
        const mesh = new THREE.Mesh(geometry, material)
        group.add(mesh)

        // Ground
        const groundGeom = new THREE.PlaneGeometry(20, 20)
        const groundMat = new THREE.MeshStandardMaterial({ color: 0x444444 })
        const ground = new THREE.Mesh(groundGeom, groundMat)
        ground.rotation.x = -Math.PI / 2
        ground.position.y = -2
        group.add(ground)

        scene.add(group)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            mesh.rotation.y = t * 0.1
        }
        animate()

        return () => {
            scene.remove(group)
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 2, 8]} />
            <scene>
                <ambientLight intensity={0.2} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}