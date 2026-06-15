/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_postprocessing_godrays

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const PostprocessingGodRays = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Create sun
        const sunGeometry = new THREE.SphereGeometry(2, 32, 32)
        const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 })
        const sun = new THREE.Mesh(sunGeometry, sunMaterial)
        sun.position.set(10, 10, -20)
        scene.add(sun)

        // Create floor
        const floorGeometry = new THREE.PlaneGeometry(100, 100)
        const floorMaterial = new THREE.MeshStandardMaterial({ color: 0x333333 })
        const floor = new THREE.Mesh(floorGeometry, floorMaterial)
        floor.rotation.x = -Math.PI / 2
        floor.position.y = -5
        scene.add(floor)

        // Create pillars
        const pillarGeometry = new THREE.CylinderGeometry(0.5, 0.5, 10, 16)
        const pillarMaterial = new THREE.MeshStandardMaterial({ color: 0x444444 })

        for (let i = 0; i < 10; i++) {
            const pillar = new THREE.Mesh(pillarGeometry, pillarMaterial)
            pillar.position.x = (Math.random() - 0.5) * 40
            pillar.position.z = (Math.random() - 0.5) * 40
            pillar.position.y = 0
            scene.add(pillar)
        }

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            sun.position.x = Math.sin(t * 0.2) * 20
        }
        animate()

        return () => {
            scene.remove(sun)
            scene.remove(floor)
            sunGeometry.dispose()
            sunMaterial.dispose()
            floorGeometry.dispose()
            floorMaterial.dispose()
            pillarGeometry.dispose()
            pillarMaterial.dispose()
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 5, 20]} />
            <scene>
                <ambientLight intensity={0.2} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
