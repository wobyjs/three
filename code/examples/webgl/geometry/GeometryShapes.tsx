/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_geometry_shapes

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const GeometryShapes = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Various 2D shapes extruded to 3D
        const shapes: THREE.Shape[] = []

        // Circle
        const circle = new THREE.Shape()
        circle.absarc(0, 0, 1, 0, Math.PI * 2, false)
        shapes.push(circle)

        // Rectangle
        const rect = new THREE.Shape()
        rect.moveTo(-1, -0.5)
        rect.lineTo(1, -0.5)
        rect.lineTo(1, 0.5)
        rect.lineTo(-1, 0.5)
        rect.closePath()
        shapes.push(rect)

        // Triangle
        const triangle = new THREE.Shape()
        triangle.moveTo(0, 1)
        triangle.lineTo(-1, -1)
        triangle.lineTo(1, -1)
        triangle.closePath()
        shapes.push(triangle)

        // Star
        const star = new THREE.Shape()
        const outerRadius = 1
        const innerRadius = 0.4
        const spikes = 5
        for (let i = 0; i < spikes * 2; i++) {
            const radius = i % 2 === 0 ? outerRadius : innerRadius
            const angle = (i / (spikes * 2)) * Math.PI * 2 - Math.PI / 2
            const x = Math.cos(angle) * radius
            const y = Math.sin(angle) * radius
            if (i === 0) star.moveTo(x, y)
            else star.lineTo(x, y)
        }
        star.closePath()
        shapes.push(star)

        // Extrude shapes
        const extrudeSettings = { depth: 0.3, bevelEnabled: false }
        const colors = [0xff0000, 0x00ff00, 0x0000ff, 0xffff00]

        shapes.forEach((shape, i) => {
            const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings)
            const material = new THREE.MeshStandardMaterial({ color: colors[i] })
            const mesh = new THREE.Mesh(geometry, material)
            mesh.position.x = (i - 1.5) * 3
            mesh.position.y = 1
            scene.add(mesh)
        })

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            scene.children.forEach((child, i) => {
                if (child instanceof THREE.Mesh) {
                    child.rotation.y = t * (0.2 + i * 0.1)
                }
            })
        }
        animate()

        return () => {
            scene.children.forEach(child => {
                if (child instanceof THREE.Mesh) {
                    scene.remove(child)
                    child.geometry.dispose()
                    ;(child.material as THREE.Material).dispose()
                }
            })
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 3, 12]} />
            <scene>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
