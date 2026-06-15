/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_math_orientation_transform

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const MathOrientationTransform = () => {
    const { scene } = useThree()

    useEffect(() => {
        const group = new THREE.Group()

        // Orientation visualization
        const axes = new THREE.AxesHelper(3)
        group.add(axes)

        const geometry = new THREE.ConeGeometry(0.3, 1, 8)
        const material = new THREE.MeshStandardMaterial({ color: 0xff6600 })
        const cone = new THREE.Mesh(geometry, material)
        cone.position.set(2, 0, 0)
        group.add(cone)

        scene.add(group)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            group.rotation.y = t * 0.3
            group.rotation.x = Math.sin(t) * 0.2
        }
        animate()

        return () => {
            scene.remove(group)
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 0, 6]} />
            <scene>
                <ambientLight intensity={0.4} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}