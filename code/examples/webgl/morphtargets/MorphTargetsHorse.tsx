/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_morphtargets_horse

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const MorphTargetsHorse = () => {
    const { scene } = useThree()

    useEffect(() => {
        const group = new THREE.Group()

        // Horse morph visualization (simplified)
        const bodyGeom = new THREE.CapsuleGeometry(0.5, 2, 8, 16)
        const bodyMat = new THREE.MeshStandardMaterial({ color: 0x8b4513 })
        const body = new THREE.Mesh(bodyGeom, bodyMat)
        body.rotation.z = Math.PI / 2
        body.position.y = 1
        group.add(body)

        // Legs
        const legGeom = new THREE.CylinderGeometry(0.1, 0.1, 1, 8)
        const legMat = new THREE.MeshStandardMaterial({ color: 0x8b4513 })
        for (let i = 0; i < 4; i++) {
            const leg = new THREE.Mesh(legGeom, legMat)
            leg.position.set(
                (i < 2 ? -0.8 : 0.8),
                0,
                (i % 2 === 0 ? -0.3 : 0.3)
            )
            group.add(leg)
        }

        // Head
        const headGeom = new THREE.ConeGeometry(0.3, 0.8, 8)
        const head = new THREE.Mesh(headGeom, bodyMat)
        head.position.set(1.5, 1.5, 0)
        head.rotation.z = -Math.PI / 4
        group.add(head)

        scene.add(group)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            // Running animation
            group.position.y = Math.abs(Math.sin(t * 5)) * 0.2
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