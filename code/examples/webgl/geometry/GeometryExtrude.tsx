/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_geometry_extrude

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const GeometryExtrude = () => {
    const { scene } = useThree()

    useEffect(() => {
        const group = new THREE.Group()

        // Extruded shapes
        const shapes = [
            new THREE.Shape()
                .moveTo(0, 0)
                .lineTo(1, 0)
                .lineTo(1, 1)
                .lineTo(0, 1)
                .lineTo(0, 0),
            new THREE.Shape()
                .absarc(0.5, 0.5, 0.5, 0, Math.PI * 2),
            new THREE.Shape()
                .moveTo(0.5, 0)
                .lineTo(1, 1)
                .lineTo(0, 0.5)
                .lineTo(1, 0.5)
                .lineTo(0, 1)
                .lineTo(0.5, 0),
        ]

        shapes.forEach((shape, i) => {
            const extrudeSettings = {
                steps: 2,
                depth: 0.5,
                bevelEnabled: true,
                bevelThickness: 0.1,
                bevelSize: 0.1,
                bevelSegments: 3,
            }

            const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings)
            const material = new THREE.MeshStandardMaterial({
                color: new THREE.Color().setHSL(i / shapes.length, 1, 0.5),
            })
            const mesh = new THREE.Mesh(geometry, material)
            mesh.position.x = (i - 1) * 3
            group.add(mesh)
        })

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
            <perspectiveCamera position={[0, 0, 8]} />
            <scene>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
