/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_lines_fat

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'
import { Line2 } from 'three/examples/jsm/lines/Line2.js'
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js'
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js'

export const LinesFat = () => {
    const { scene } = useThree()

    useEffect(() => {
        const positions = []
        const colors = []

        for (let i = 0; i < 100; i++) {
            const t = i / 100
            const x = Math.cos(t * Math.PI * 4) * 5
            const y = Math.sin(t * Math.PI * 4) * 5
            const z = t * 10 - 5
            positions.push(x, y, z)

            const r = (Math.sin(t * Math.PI) + 1) / 2
            const g = (Math.cos(t * Math.PI * 2) + 1) / 2
            const b = (Math.sin(t * Math.PI * 4) + 1) / 2
            colors.push(r, g, b)
        }

        const geometry = new LineGeometry()
        geometry.setPositions(positions)
        geometry.setColors(colors)

        const material = new LineMaterial({
            color: 0xffffff,
            linewidth: 5,
            vertexColors: true,
            resolution: new THREE.Vector2(window.innerWidth, window.innerHeight),
        })

        const line = new Line2(geometry, material)
        line.computeLineDistances()
        scene.add(line)

        const handleResize = () => {
            material.resolution.set(window.innerWidth, window.innerHeight)
        }
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
            scene.remove(line)
            geometry.dispose()
            material.dispose()
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 0, 15]} />
            <scene>
                <ambientLight intensity={0.3} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
