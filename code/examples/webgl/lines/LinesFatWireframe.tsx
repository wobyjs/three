/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_lines_fat_wireframe

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'
import { Line2 } from 'three/examples/jsm/lines/Line2.js'
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js'
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js'

export const LinesFatWireframe = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Create fat wireframe lines
        const geometry = new THREE.IcosahedronGeometry(2, 1)
        const edges = new THREE.EdgesGeometry(geometry)
        const positions = geometry.attributes.position

        // Create fat lines from edges
        const linePositions: number[] = []
        const colors: number[] = []

        for (let i = 0; i < positions.count; i++) {
            linePositions.push(
                positions.getX(i),
                positions.getY(i),
                positions.getZ(i)
            )

            const color = new THREE.Color().setHSL(i / positions.count, 1, 0.5)
            colors.push(color.r, color.g, color.b)
        }

        const lineGeometry = new LineGeometry()
        lineGeometry.setPositions(linePositions)
        lineGeometry.setColors(colors)

        const material = new LineMaterial({
            color: 0xffffff,
            linewidth: 4,
            vertexColors: true,
            resolution: new THREE.Vector2(window.innerWidth, window.innerHeight),
        })

        const line = new Line2(lineGeometry, material)
        line.computeLineDistances()
        scene.add(line)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            line.rotation.x = t * 0.2
            line.rotation.y = t * 0.3
        }
        animate()

        return () => {
            scene.remove(line)
            lineGeometry.dispose()
            material.dispose()
            geometry.dispose()
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 0, 8]} />
            <scene>
                <ambientLight intensity={0.3} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
