/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_shadow_contact

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const ShadowContact = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Create a sphere
        const geometry = new THREE.SphereGeometry(1, 32, 32)
        const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 })
        const sphere = new THREE.Mesh(geometry, material)
        sphere.position.y = 2
        sphere.castShadow = true
        scene.add(sphere)

        // Create floor
        const floorGeometry = new THREE.PlaneGeometry(20, 20)
        const floorMaterial = new THREE.MeshStandardMaterial({ color: 0x888888 })
        const floor = new THREE.Mesh(floorGeometry, floorMaterial)
        floor.rotation.x = -Math.PI / 2
        floor.receiveShadow = true
        scene.add(floor)

        // Add light
        const light = new THREE.DirectionalLight(0xffffff, 1)
        light.position.set(5, 10, 5)
        light.castShadow = true
        light.shadow.mapSize.width = 2048
        light.shadow.mapSize.height = 2048
        scene.add(light)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            sphere.position.x = Math.sin(t) * 3
            sphere.position.z = Math.cos(t) * 3
        }
        animate()

        return () => {
            scene.remove(sphere)
            scene.remove(floor)
            scene.remove(light)
            geometry.dispose()
            material.dispose()
            floorGeometry.dispose()
            floorMaterial.dispose()
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 5, 10]} />
            <scene>
                <ambientLight intensity={0.3} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
