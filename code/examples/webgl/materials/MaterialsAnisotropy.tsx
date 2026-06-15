/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_materials_anisotropy

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const MaterialsAnisotropy = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Anisotropy (brushed metal) demo
        const geometry = new THREE.SphereGeometry(2, 64, 64)

        const material = new THREE.MeshPhysicalMaterial({
            color: 0x888888,
            metalness: 1,
            roughness: 0.5,
            anisotropy: 1,
            anisotropyRotation: Math.PI / 4,
        })

        const mesh = new THREE.Mesh(geometry, material)
        scene.add(mesh)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            mesh.rotation.y = t * 0.2
        }
        animate()

        return () => {
            scene.remove(mesh)
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
