/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_reflection

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const Reflection = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Create reflective sphere
        const geometry = new THREE.SphereGeometry(2, 64, 64)
        const material = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            metalness: 1,
            roughness: 0,
        })

        const sphere = new THREE.Mesh(geometry, material)
        sphere.position.set(0, 2, 0)
        scene.add(sphere)

        // Create environment cube
        const cubeGeometry = new THREE.BoxGeometry(20, 20, 20)
        const cubeMaterials = [
            new THREE.MeshBasicMaterial({ color: 0xff0000, side: THREE.BackSide }),
            new THREE.MeshBasicMaterial({ color: 0x00ff00, side: THREE.BackSide }),
            new THREE.MeshBasicMaterial({ color: 0x0000ff, side: THREE.BackSide }),
            new THREE.MeshBasicMaterial({ color: 0xffff00, side: THREE.BackSide }),
            new THREE.MeshBasicMaterial({ color: 0xff00ff, side: THREE.BackSide }),
            new THREE.MeshBasicMaterial({ color: 0x00ffff, side: THREE.BackSide }),
        ]

        const cube = new THREE.Mesh(cubeGeometry, cubeMaterials)
        scene.add(cube)

        // Add floor
        const floorGeometry = new THREE.PlaneGeometry(20, 20)
        const floorMaterial = new THREE.MeshStandardMaterial({
            color: 0x888888,
            metalness: 0.5,
            roughness: 0.5,
        })
        const floor = new THREE.Mesh(floorGeometry, floorMaterial)
        floor.rotation.x = -Math.PI / 2
        floor.position.y = -2
        scene.add(floor)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            sphere.rotation.y = t * 0.5
        }
        animate()

        return () => {
            scene.remove(sphere)
            scene.remove(cube)
            scene.remove(floor)
            geometry.dispose()
            material.dispose()
            cubeGeometry.dispose()
            cubeMaterials.forEach(m => m.dispose())
            floorGeometry.dispose()
            floorMaterial.dispose()
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 5, 15]} />
            <scene>
                <ambientLight intensity={0.3} />
                <pointLight position={[10, 10, 10]} intensity={1} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}