/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_lightprobes_sponza

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const LightprobesSponza = () => {
    const { scene } = useThree()

    useEffect(() => {
        const group = new THREE.Group()

        // Sponza-like architecture (simplified)
        const pillarGeom = new THREE.CylinderGeometry(0.3, 0.3, 8, 16)
        const pillarMat = new THREE.MeshStandardMaterial({ color: 0xccccaa })

        for (let i = 0; i < 6; i++) {
            const pillar = new THREE.Mesh(pillarGeom, pillarMat)
            pillar.position.set(-5 + i * 2, 4, -5)
            group.add(pillar)

            const pillar2 = new THREE.Mesh(pillarGeom, pillarMat)
            pillar2.position.set(-5 + i * 2, 4, 5)
            group.add(pillar2)
        }

        // Floor
        const floorGeom = new THREE.PlaneGeometry(15, 15)
        const floorMat = new THREE.MeshStandardMaterial({ color: 0x886644 })
        const floor = new THREE.Mesh(floorGeom, floorMat)
        floor.rotation.x = -Math.PI / 2
        group.add(floor)

        // Ceiling
        const ceiling = new THREE.Mesh(floorGeom, floorMat)
        ceiling.rotation.x = Math.PI / 2
        ceiling.position.y = 8
        group.add(ceiling)

        scene.add(group)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            group.rotation.y = t * 0.05
        }
        animate()

        return () => {
            scene.remove(group)
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 4, 10]} />
            <scene>
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 10, 5]} intensity={1} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
