/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_shadowmap_pointlight

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const ShadowmapPointlight = () => {
    const { scene } = useThree()

    useEffect(() => {
        const group = new THREE.Group()

        // Sphere with shadows
        const geometry = new THREE.SphereGeometry(2, 32, 32)
        const material = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            metalness: 0.5,
            roughness: 0.5,
        })
        const mesh = new THREE.Mesh(geometry, material)
        mesh.castShadow = true
        mesh.receiveShadow = true
        group.add(mesh)

        // Ground
        const groundGeom = new THREE.PlaneGeometry(10, 10)
        const groundMat = new THREE.MeshStandardMaterial({ color: 0x444444 })
        const ground = new THREE.Mesh(groundGeom, groundMat)
        ground.rotation.x = -Math.PI / 2
        ground.position.y = -2
        ground.receiveShadow = true
        group.add(ground)

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
            <perspectiveCamera position={[0, 2, 8]} />
            <scene>
                <ambientLight intensity={0.2} />
                <pointLight position={[5, 5, 5]} intensity={1} castShadow />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}