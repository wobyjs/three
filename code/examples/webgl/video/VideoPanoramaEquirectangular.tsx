/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_video_panorama_equirectangular

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const VideoPanoramaEquirectangular = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Equirectangular video panorama
        const geometry = new THREE.SphereGeometry(50, 64, 64)
        const material = new THREE.MeshBasicMaterial({
            color: 0x88aaff,
            side: THREE.BackSide,
        })
        const sphere = new THREE.Mesh(geometry, material)
        scene.add(sphere)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            sphere.rotation.y = t * 0.05
        }
        animate()

        return () => {
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