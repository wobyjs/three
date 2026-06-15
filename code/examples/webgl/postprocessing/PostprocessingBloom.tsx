/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_postprocessing_bloom

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const PostprocessingBloom = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Create bright emissive spheres
        const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32)

        const spheres: THREE.Mesh[] = []
        const positions = [
            { x: -3, color: 0xff0000 },
            { x: 0, color: 0x00ff00 },
            { x: 3, color: 0x0000ff },
        ]

        positions.forEach(pos => {
            const material = new THREE.MeshBasicMaterial({ color: pos.color })
            const sphere = new THREE.Mesh(sphereGeometry.clone(), material)
            sphere.position.x = pos.x
            sphere.position.y = 2
            scene.add(sphere)
            spheres.push(sphere)
        })

        // Add floor
        const floorGeometry = new THREE.PlaneGeometry(20, 20)
        const floorMaterial = new THREE.MeshStandardMaterial({ color: 0x333333 })
        const floor = new THREE.Mesh(floorGeometry, floorMaterial)
        floor.rotation.x = -Math.PI / 2
        floor.position.y = -1
        scene.add(floor)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            spheres.forEach((sphere, i) => {
                sphere.position.y = 2 + Math.sin(t + i) * 0.5
            })
        }
        animate()

        return () => {
            spheres.forEach(sphere => {
                scene.remove(sphere)
                sphere.geometry.dispose()
                sphere.material.dispose()
            })
            scene.remove(floor)
            floorGeometry.dispose()
            floorMaterial.dispose()
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 5, 15]} />
            <scene>
                <ambientLight intensity={0.2} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
