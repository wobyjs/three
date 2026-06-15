/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_materials_transmission

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const MaterialsTransmission = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Transmission (glass-like) demo
        const geometry = new THREE.SphereGeometry(2, 64, 64)

        const material = new THREE.MeshPhysicalMaterial({
            color: 0xffffff,
            metalness: 0,
            roughness: 0,
            transmission: 0.9,
            thickness: 0.5,
        })

        const mesh = new THREE.Mesh(geometry, material)
        scene.add(mesh)

        // Background objects
        const bgGeom = new THREE.TorusKnotGeometry(1, 0.3, 64, 16)
        const bgMat = new THREE.MeshStandardMaterial({ color: 0xff6600 })
        const bg = new THREE.Mesh(bgGeom, bgMat)
        bg.position.z = -3
        scene.add(bg)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            mesh.rotation.y = t * 0.1
            bg.rotation.x = t * 0.2
            bg.rotation.y = t * 0.3
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
            <perspectiveCamera position={[0, 0, 6]} />
            <scene>
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
