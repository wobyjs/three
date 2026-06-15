/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_materials_physical_transmission_alpha

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const MaterialsPhysicalTransmissionAlpha = () => {
    const { scene } = useThree()

    useEffect(() => {
        const geometry = new THREE.SphereGeometry(2, 64, 64)
        const material = new THREE.MeshPhysicalMaterial({
            color: 0xffffff,
            metalness: 0,
            roughness: 0,
            transmission: 0.95,
            thickness: 0.5,
        })
        const mesh = new THREE.Mesh(geometry, material)
        scene.add(mesh)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            mesh.rotation.y = t * 0.1
        }
        animate()

        return () => {
            scene.remove(mesh)
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 0, 6]} />
            <scene>
                <ambientLight intensity={0.3} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}