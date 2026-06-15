/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_materials_envmaps_hdr

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const MaterialsEnvmapsHdr = () => {
    const { scene } = useThree()

    useEffect(() => {
        const geometry = new THREE.SphereGeometry(2, 64, 64)
        const material = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            metalness: 1,
            roughness: 0,
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