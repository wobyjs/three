/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_multiple_scenes_comparison

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const MultipleScenesComparison = () => {
    const { scene } = useThree()

    useEffect(() => {
        const group = new THREE.Group()

        // Two scenes for comparison
        const leftGeom = new THREE.BoxGeometry(1, 1, 1)
        const rightGeom = new THREE.SphereGeometry(0.8, 32, 32)

        const leftMat = new THREE.MeshStandardMaterial({ color: 0xff6666 })
        const rightMat = new THREE.MeshStandardMaterial({ color: 0x66ff66 })

        const leftMesh = new THREE.Mesh(leftGeom, leftMat)
        leftMesh.position.x = -1.5
        group.add(leftMesh)

        const rightMesh = new THREE.Mesh(rightGeom, rightMat)
        rightMesh.position.x = 1.5
        group.add(rightMesh)

        scene.add(group)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            leftMesh.rotation.y = t * 0.3
            rightMesh.rotation.y = t * 0.3
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