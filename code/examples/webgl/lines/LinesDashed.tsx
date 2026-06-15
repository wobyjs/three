/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_lines_dashed

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const LinesDashed = () => {
    const { scene } = useThree()

    useEffect(() => {
        const geometry = new THREE.BufferGeometry()
        const vertices = []

        // Spiral
        for (let i = 0; i < 500; i++) {
            const t = i / 500
            const radius = 5 * t
            const x = Math.cos(t * Math.PI * 8) * radius
            const y = Math.sin(t * Math.PI * 8) * radius
            const z = t * 10 - 5
            vertices.push(x, y, z)
        }

        geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))

        const material = new THREE.LineDashedMaterial({
            color: 0x00ff00,
            dashSize: 0.5,
            gapSize: 0.3,
        })

        const line = new THREE.Line(geometry, material)
        line.computeLineDistances()
        scene.add(line)

        return () => {
            scene.remove(line)
            geometry.dispose()
            material.dispose()
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 0, 20]} />
            <scene>
                <ambientLight intensity={0.3} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}