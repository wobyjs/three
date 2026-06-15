/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_loader_gcode

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const LoaderGcode = () => {
    const { scene } = useThree()

    useEffect(() => {
        // G-code path visualization
        const group = new THREE.Group()

        // Simulated G-code path
        const points: THREE.Vector3[] = []
        let x = 0, y = 0, z = 0

        for (let i = 0; i < 1000; i++) {
            points.push(new THREE.Vector3(x, y, z))
            x += (Math.random() - 0.5) * 0.2
            y += 0.01
            z += (Math.random() - 0.5) * 0.2
        }

        const geometry = new THREE.BufferGeometry().setFromPoints(points)
        const material = new THREE.LineBasicMaterial({ color: 0x00ff00 })
        const line = new THREE.Line(geometry, material)
        group.add(line)

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
            <perspectiveCamera position={[0, 5, 10]} />
            <scene>
                <ambientLight intensity={0.5} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}