/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_panorama_cube

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const PanoramaCube = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Cube panorama
        const geometry = new THREE.BoxGeometry(10, 10, 10)
        const material = new THREE.MeshBasicMaterial({
            color: 0x88aaff,
            side: THREE.BackSide,
        })
        const cube = new THREE.Mesh(geometry, material)
        scene.add(cube)

        // Central object
        const sphereGeom = new THREE.SphereGeometry(0.5, 32, 32)
        const sphereMat = new THREE.MeshStandardMaterial({ color: 0xffffff })
        const sphere = new THREE.Mesh(sphereGeom, sphereMat)
        scene.add(sphere)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            sphere.rotation.y = t * 0.2
        }
        animate()

        return () => {
            scene.remove(cube)
            scene.remove(sphere)
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 0, 0.1]} />
            <scene>
                <ambientLight intensity={0.5} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}