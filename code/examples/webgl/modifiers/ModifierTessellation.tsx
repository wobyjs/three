/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_modifier_tessellation

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const ModifierTessellation = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Tessellation demo
        const group = new THREE.Group()

        // Triangle with tessellation
        const triangleGeom = new THREE.CircleGeometry(2, 3)
        const triangleMat = new THREE.MeshStandardMaterial({
            color: 0xff0000,
            wireframe: true,
            side: THREE.DoubleSide,
        })
        const triangle = new THREE.Mesh(triangleGeom, triangleMat)
        triangle.position.x = -4
        group.add(triangle)

        // Square
        const squareGeom = new THREE.PlaneGeometry(3, 3, 1, 1)
        const squareMat = new THREE.MeshStandardMaterial({
            color: 0x00ff00,
            wireframe: true,
            side: THREE.DoubleSide,
        })
        const square = new THREE.Mesh(squareGeom, squareMat)
        square.position.x = 0
        group.add(square)

        // Pentagon
        const pentagonGeom = new THREE.CircleGeometry(2, 5)
        const pentagonMat = new THREE.MeshStandardMaterial({
            color: 0x0000ff,
            wireframe: true,
            side: THREE.DoubleSide,
        })
        const pentagon = new THREE.Mesh(pentagonGeom, pentagonMat)
        pentagon.position.x = 4
        group.add(pentagon)

        // Circle with many segments
        const circleGeom = new THREE.CircleGeometry(2, 64)
        const circleMat = new THREE.MeshStandardMaterial({
            color: 0xffff00,
            wireframe: true,
            side: THREE.DoubleSide,
        })
        const circle = new THREE.Mesh(circleGeom, circleMat)
        circle.position.x = 8
        group.add(circle)

        scene.add(group)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            group.rotation.x = Math.sin(t * 0.2) * 0.3
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
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
