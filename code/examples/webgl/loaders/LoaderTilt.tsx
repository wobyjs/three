/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_loader_tilt

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const LoaderTilt = () => {
    const { scene } = useThree()

    useEffect(() => {
        // 3D photo / tilt-shift effect visualization
        const group = new THREE.Group()

        // Simulated 3D photo stack
        for (let i = 0; i < 20; i++) {
            const geometry = new THREE.PlaneGeometry(4, 3)
            const material = new THREE.MeshBasicMaterial({
                color: new THREE.Color().setHSL(i / 20, 0.3, 0.5),
                transparent: true,
                opacity: 0.8,
                side: THREE.DoubleSide,
            })
            const plane = new THREE.Mesh(geometry, material)
            plane.position.z = -i * 0.1
            plane.position.y = i * 0.05 - 0.5
            group.add(plane)
        }

        scene.add(group)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            group.rotation.y = t * 0.1
        }
        animate()

        return () => {
            scene.remove(group)
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 0, 5]} />
            <scene>
                <ambientLight intensity={0.5} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
