/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_materials_cubemap

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const MaterialsCubemap = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Cubemap demo
        const geometry = new THREE.SphereGeometry(1.5, 64, 64)

        const material = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            metalness: 1,
            roughness: 0,
        })

        const mesh = new THREE.Mesh(geometry, material)
        scene.add(mesh)

        // Background cube
        const bgGeom = new THREE.BoxGeometry(20, 20, 20)
        const bgMat = new THREE.MeshBasicMaterial({
            color: 0x111111,
            side: THREE.BackSide,
        })
        const bg = new THREE.Mesh(bgGeom, bgMat)
        scene.add(bg)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            mesh.rotation.y = t * 0.2
        }
        animate()

        return () => {
            scene.remove(mesh)
            scene.remove(bg)
            geometry.dispose()
            material.dispose()
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 0, 5]} />
            <scene>
                <ambientLight intensity={0.3} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
