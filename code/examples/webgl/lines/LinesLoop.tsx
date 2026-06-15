/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_lines_loop

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const LinesLoop = () => {
    const { scene } = useThree()

    useEffect(() => {
        const group = new THREE.Group()

        for (let i = 0; i < 10; i++) {
            const points: THREE.Vector3[] = []

            for (let j = 0; j <= 100; j++) {
                const t = j / 100
                const angle = t * Math.PI * 2

                points.push(new THREE.Vector3(
                    Math.cos(angle) * (1 + i * 0.3),
                    Math.sin(angle * 3 + i) * 0.5,
                    Math.sin(angle) * (1 + i * 0.3)
                ))
            }

            const geometry = new THREE.BufferGeometry().setFromPoints(points)

            const material = new THREE.LineBasicMaterial({
                color: new THREE.Color().setHSL(i / 10, 1, 0.5),
            })

            const line = new THREE.LineLoop(geometry, material)
            group.add(line)
        }

        scene.add(group)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            group.rotation.y = t * 0.2
        }
        animate()

        return () => {
            scene.remove(group)
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 0, 10]} />
            <scene>
                <ambientLight intensity={0.5} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
