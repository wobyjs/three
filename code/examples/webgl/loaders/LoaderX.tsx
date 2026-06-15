/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_loader_x

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const LoaderX = () => {
    const { scene } = useThree()

    useEffect(() => {
        // X3D format visualization
        const group = new THREE.Group()

        // Scene geometry
        const sphereGeom = new THREE.SphereGeometry(1, 32, 32)
        const sphereMat = new THREE.MeshStandardMaterial({ color: 0x66ff66 })
        const sphere = new THREE.Mesh(sphereGeom, sphereMat)
        sphere.position.y = 1
        group.add(sphere)

        // Base
        const baseGeom = new THREE.CylinderGeometry(2, 2.5, 0.5, 32)
        const baseMat = new THREE.MeshStandardMaterial({ color: 0x666666 })
        const base = new THREE.Mesh(baseGeom, baseMat)
        group.add(base)

        scene.add(group)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            sphere.rotation.y = t * 0.3
        }
        animate()

        return () => {
            scene.remove(group)
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 2, 6]} />
            <scene>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
