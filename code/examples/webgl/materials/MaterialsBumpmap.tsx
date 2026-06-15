/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_materials_bumpmap

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const MaterialsBumpmap = () => {
    const { scene } = useThree()

    useEffect(() => {
        const group = new THREE.Group()

        // Sphere with bump
        const sphereGeom = new THREE.SphereGeometry(1.5, 64, 64)
        const sphereMat = new THREE.MeshStandardMaterial({
            color: 0xcc8844,
            roughness: 0.7,
        })
        const sphere = new THREE.Mesh(sphereGeom, sphereMat)
        sphere.position.x = -2
        group.add(sphere)

        // Plane with bump
        const planeGeom = new THREE.PlaneGeometry(4, 4)
        const planeMat = new THREE.MeshStandardMaterial({
            color: 0x4488cc,
            roughness: 0.7,
        })
        const plane = new THREE.Mesh(planeGeom, planeMat)
        plane.rotation.x = -Math.PI / 2
        plane.position.x = 2
        group.add(plane)

        scene.add(group)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            sphere.rotation.y = t * 0.2
        }
        animate()

        return () => {
            scene.remove(group)
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 3, 8]} />
            <scene>
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
