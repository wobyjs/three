/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_materials_texture_rotation

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const MaterialsTextureRotation = () => {
    const { scene } = useThree()

    useEffect(() => {
        const geometry = new THREE.PlaneGeometry(4, 4)
        const material = new THREE.MeshBasicMaterial({
            color: 0x88aaff,
            side: THREE.DoubleSide,
        })
        const plane = new THREE.Mesh(geometry, material)
        scene.add(plane)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            plane.rotation.z = t * 0.5
        }
        animate()

        return () => {
            scene.remove(plane)
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 0, 5]} />
            <scene>
                <ambientLight intensity={0.5} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}