/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_watch

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const Watch = () => {
    const { scene } = useThree()

    useEffect(() => {
        const group = new THREE.Group()

        // Watch face
        const faceGeom = new THREE.CylinderGeometry(2, 2, 0.3, 64)
        const faceMat = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            metalness: 0.8,
            roughness: 0.2,
        })
        const face = new THREE.Mesh(faceGeom, faceMat)
        face.rotation.x = Math.PI / 2
        group.add(face)

        // Watch bezel
        const bezelGeom = new THREE.TorusGeometry(2, 0.1, 16, 64)
        const bezelMat = new THREE.MeshStandardMaterial({
            color: 0x888888,
            metalness: 0.9,
            roughness: 0.1,
        })
        const bezel = new THREE.Mesh(bezelGeom, bezelMat)
        group.add(bezel)

        // Hour hand
        const hourHandGeom = new THREE.BoxGeometry(0.1, 1, 0.05)
        const handMat = new THREE.MeshStandardMaterial({ color: 0x333333 })
        const hourHand = new THREE.Mesh(hourHandGeom, handMat)
        hourHand.position.y = 0.5
        group.add(hourHand)

        // Minute hand
        const minHandGeom = new THREE.BoxGeometry(0.05, 1.5, 0.05)
        const minHand = new THREE.Mesh(minHandGeom, handMat)
        minHand.position.y = 0.75
        group.add(minHand)

        // Second hand
        const secHandGeom = new THREE.BoxGeometry(0.02, 1.8, 0.02)
        const secHandMat = new THREE.MeshBasicMaterial({ color: 0xff0000 })
        const secHand = new THREE.Mesh(secHandGeom, secHandMat)
        secHand.position.y = 0.9
        group.add(secHand)

        scene.add(group)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()

            const now = new Date()
            const hours = now.getHours() % 12
            const minutes = now.getMinutes()
            const seconds = now.getSeconds()

            hourHand.rotation.z = -(hours + minutes / 60) * (Math.PI / 6)
            minHand.rotation.z = -(minutes + seconds / 60) * (Math.PI / 30)
            secHand.rotation.z = -seconds * (Math.PI / 30)
        }
        animate()

        return () => {
            scene.remove(group)
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 0, 8]} />
            <scene>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}