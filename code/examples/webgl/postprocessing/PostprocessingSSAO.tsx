/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_postprocessing_ssao

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const PostprocessingSSAO = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Create scene with ambient occlusion
        const geometry = new THREE.TorusKnotGeometry(1, 0.3, 128, 32)
        const material = new THREE.MeshStandardMaterial({ color: 0xffffff })
        const mesh = new THREE.Mesh(geometry, material)
        mesh.position.y = 1
        scene.add(mesh)

        // Add floor
        const floorGeometry = new THREE.PlaneGeometry(20, 20)
        const floorMaterial = new THREE.MeshStandardMaterial({ color: 0x888888 })
        const floor = new THREE.Mesh(floorGeometry, floorMaterial)
        floor.rotation.x = -Math.PI / 2
        scene.add(floor)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            mesh.rotation.x = t * 0.2
            mesh.rotation.y = t * 0.3
        }
        animate()

        return () => {
            scene.remove(mesh)
            scene.remove(floor)
            geometry.dispose()
            material.dispose()
            floorGeometry.dispose()
            floorMaterial.dispose()
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 3, 8]} />
            <scene>
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 10, 5]} intensity={1} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
