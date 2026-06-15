/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_morphtargets_sphere

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const MorphTargetsSphere = () => {
    const { scene } = useThree()

    useEffect(() => {
        const group = new THREE.Group()

        const geometry = new THREE.SphereGeometry(2, 64, 64)
        const material = new THREE.MeshStandardMaterial({
            color: 0x66aaff,
            metalness: 0.3,
            roughness: 0.5,
        })
        const mesh = new THREE.Mesh(geometry, material)
        group.add(mesh)

        scene.add(group)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            mesh.scale.x = 1 + Math.sin(t) * 0.3
            mesh.scale.y = 1 + Math.cos(t * 1.5) * 0.2
            mesh.scale.z = 1 + Math.sin(t * 0.7) * 0.3
        }
        animate()

        return () => {
            scene.remove(group)
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 0, 7]} />
            <scene>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}