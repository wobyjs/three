/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_materials_hair

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const MaterialsHair = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Hair/fur simulation
        const group = new THREE.Group()

        // Base sphere
        const baseGeom = new THREE.SphereGeometry(1, 32, 32)
        const baseMat = new THREE.MeshStandardMaterial({ color: 0xffccaa })
        const base = new THREE.Mesh(baseGeom, baseMat)
        group.add(base)

        // Hair strands (simplified)
        const hairCount = 500
        const hairGeom = new THREE.BufferGeometry()
        const positions = new Float32Array(hairCount * 3)
        const colors = new Float32Array(hairCount * 3)

        for (let i = 0; i < hairCount; i++) {
            const theta = Math.random() * Math.PI * 2
            const phi = Math.random() * Math.PI * 0.5

            positions[i * 3] = Math.sin(phi) * Math.cos(theta) * 1.02
            positions[i * 3 + 1] = Math.cos(phi) * 1.02
            positions[i * 3 + 2] = Math.sin(phi) * Math.sin(theta) * 1.02

            colors[i * 3] = 0.3
            colors[i * 3 + 1] = 0.1
            colors[i * 3 + 2] = 0.05
        }

        hairGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3))
        hairGeom.setAttribute('color', new THREE.BufferAttribute(colors, 3))

        const hairMat = new THREE.PointsMaterial({
            size: 0.03,
            vertexColors: true,
        })

        const hair = new THREE.Points(hairGeom, hairMat)
        group.add(hair)

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
            <perspectiveCamera position={[0, 0, 5]} />
            <scene>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
