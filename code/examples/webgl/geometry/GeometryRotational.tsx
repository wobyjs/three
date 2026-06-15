/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_geometry_rotational

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const GeometryRotational = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Rotational geometry demo
        const group = new THREE.Group()

        // Lathe geometry
        const points = []
        for (let i = 0; i < 20; i++) {
            points.push(new THREE.Vector2(
                Math.sin(i / 20 * Math.PI) * 0.5 + 0.5,
                (i - 10) / 10 * 2
            ))
        }

        const latheGeom = new THREE.LatheGeometry(points, 32)
        const latheMat = new THREE.MeshStandardMaterial({
            color: 0x66aaff,
            wireframe: false,
        })
        const lathe = new THREE.Mesh(latheGeom, latheMat)
        group.add(lathe)

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
