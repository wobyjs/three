/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_lightprobe

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const Lightprobe = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Light probe visualization
        const group = new THREE.Group()

        const geometry = new THREE.SphereGeometry(2, 32, 32)
        const material = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            metalness: 1,
            roughness: 0.2,
        })
        const sphere = new THREE.Mesh(geometry, material)
        group.add(sphere)

        // Light probe sphere indicator
        const probeGeom = new THREE.SphereGeometry(0.2, 16, 16)
        const probeMat = new THREE.MeshBasicMaterial({ color: 0xffff00 })
        const probe = new THREE.Mesh(probeGeom, probeMat)
        probe.position.set(3, 2, 3)
        group.add(probe)

        scene.add(group)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            sphere.rotation.y = t * 0.2
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
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
