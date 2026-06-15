/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_lines_colors

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const LinesColors = () => {
    const { scene } = useThree()

    useEffect(() => {
        const geometry = new THREE.BufferGeometry()
        const vertices = []
        const colors = []

        const segments = 200
        for (let i = 0; i < segments; i++) {
            const t = i / segments
            const x = Math.cos(t * Math.PI * 4) * 5
            const y = Math.sin(t * Math.PI * 4) * 5
            const z = t * 10 - 5
            
            vertices.push(x, y, z)

            // Color gradient
            const r = (Math.sin(t * Math.PI) + 1) / 2
            const g = (Math.cos(t * Math.PI * 2) + 1) / 2
            const b = (Math.sin(t * Math.PI * 4) + 1) / 2
            colors.push(r, g, b)
        }

        geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))
        geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))

        const material = new THREE.LineBasicMaterial({ vertexColors: true })
        const line = new THREE.Line(geometry, material)
        scene.add(line)

        return () => {
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
