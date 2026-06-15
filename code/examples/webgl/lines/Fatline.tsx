/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_fatline

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'
import { Line2 } from 'three/examples/jsm/lines/Line2.js'
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js'
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js'

export const Fatline = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Fat lines with variable width
        const group = new THREE.Group()

        for (let i = 0; i < 10; i++) {
            const points: THREE.Vector3[] = []
            const colors: number[] = []

            for (let j = 0; j <= 100; j++) {
                const t = j / 100
                const angle = t * Math.PI * 4 + i

                points.push(new THREE.Vector3(
                    Math.cos(angle) * (2 + i * 0.5),
                    (t - 0.5) * 10,
                    Math.sin(angle) * (2 + i * 0.5)
                ))

                colors.push(
                    (i + 1) / 10,
                    0.5,
                    1 - i / 10
                )
            }

            const geometry = new LineGeometry()
            geometry.setPositions(points.map(p => [p.x, p.y, p.z]).flat())
            geometry.setColors(colors)

            const material = new LineMaterial({
                color: 0xffffff,
                linewidth: 2 + i,
                vertexColors: true,
                resolution: new THREE.Vector2(window.innerWidth, window.innerHeight),
            })

            const line = new Line2(geometry, material)
            group.add(line)
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
            <perspectiveCamera position={[0, 0, 15]} />
            <scene>
                <ambientLight intensity={0.5} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
