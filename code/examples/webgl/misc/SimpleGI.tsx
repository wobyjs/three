/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_simple_gi

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const SimpleGI = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Simple global illumination simulation
        const group = new THREE.Group()

        // Room
        const roomGeom = new THREE.BoxGeometry(10, 10, 10)
        const roomMat = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            side: THREE.BackSide,
        })
        const room = new THREE.Mesh(roomGeom, roomMat)
        group.add(room)

        // Objects with color bleeding
        const redGeom = new THREE.SphereGeometry(1, 32, 32)
        const redMat = new THREE.MeshStandardMaterial({ color: 0xff0000 })
        const redSphere = new THREE.Mesh(redGeom, redMat)
        redSphere.position.set(-2, 0, 0)
        group.add(redSphere)

        const blueGeom = new THREE.BoxGeometry(1.5, 1.5, 1.5)
        const blueMat = new THREE.MeshStandardMaterial({ color: 0x0000ff })
        const blueBox = new THREE.Mesh(blueGeom, blueMat)
        blueBox.position.set(2, 0, 0)
        group.add(blueBox)

        // Floor
        const floorGeom = new THREE.PlaneGeometry(10, 10)
        const floorMat = new THREE.MeshStandardMaterial({ color: 0xcccccc })
        const floor = new THREE.Mesh(floorGeom, floorMat)
        floor.rotation.x = -Math.PI / 2
        floor.position.y = -5
        group.add(floor)

        scene.add(group)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            redSphere.position.y = Math.sin(t) * 0.5
            blueBox.rotation.y = t * 0.3
        }
        animate()

        return () => {
            scene.remove(group)
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 0, 15]} />
            <scene>
                <ambientLight intensity={0.3} />
                <pointLight position={[0, 3, 0]} intensity={1} color={0xffffaa} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}