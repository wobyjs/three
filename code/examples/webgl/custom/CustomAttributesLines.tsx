/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_custom_attributes_lines

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const CustomAttributesLines = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Custom attributes on lines
        const count = 100
        const geometry = new THREE.BufferGeometry()
        const positions = new Float32Array(count * 3)
        const colors = new Float32Array(count * 3)

        for (let i = 0; i < count; i++) {
            const i3 = i * 3
            const t = i / count

            // Spiral
            const angle = t * Math.PI * 8
            const radius = t * 5

            positions[i3] = Math.cos(angle) * radius
            positions[i3 + 1] = (t - 0.5) * 10
            positions[i3 + 2] = Math.sin(angle) * radius

            // Color
            colors[i3] = t
            colors[i3 + 1] = 1 - t
            colors[i3 + 2] = 0.5
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

        const material = new THREE.LineBasicMaterial({
            vertexColors: true,
            linewidth: 2,
        })

        const line = new THREE.Line(geometry, material)
        scene.add(line)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            line.rotation.y = t * 0.2
        }
        animate()

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
                <ambientLight intensity={0.5} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
