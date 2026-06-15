/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_materials_physical_clearcoat

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const MaterialsPhysicalClearcoat = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Physical material with clearcoat (car paint)
        const geometry = new THREE.SphereGeometry(1.5, 64, 64)

        const material = new THREE.MeshPhysicalMaterial({
            color: 0xff0000,
            metalness: 0.9,
            roughness: 0.2,
            clearcoat: 1,
            clearcoatRoughness: 0.1,
        })

        const mesh = new THREE.Mesh(geometry, material)
        scene.add(mesh)

        // Floor for reflections
        const floorGeom = new THREE.PlaneGeometry(20, 20)
        const floorMat = new THREE.MeshStandardMaterial({
            color: 0x333333,
            metalness: 0.8,
            roughness: 0.3,
        })
        const floor = new THREE.Mesh(floorGeom, floorMat)
        floor.rotation.x = -Math.PI / 2
        floor.position.y = -2
        scene.add(floor)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            mesh.rotation.y = t * 0.3
        }
        animate()

        return () => {
            scene.remove(mesh)
            scene.remove(floor)
            geometry.dispose()
            material.dispose()
            floorGeom.dispose()
            floorMat.dispose()
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 0, 8]} />
            <scene>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
