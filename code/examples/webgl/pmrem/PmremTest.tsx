/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_pmrem_test

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const PmremTest = () => {
    const { scene } = useThree()

    useEffect(() => {
        const group = new THREE.Group()

        const geometry = new THREE.SphereGeometry(2, 64, 64)
        const material = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            metalness: 1,
            roughness: 0,
        })
        const mesh = new THREE.Mesh(geometry, material)
        group.add(mesh)

        scene.add(group)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            mesh.rotation.y = t * 0.2
        }
        animate()

        return () => {
            scene.remove(group)
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