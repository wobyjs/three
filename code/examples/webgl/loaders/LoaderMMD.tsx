/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_loader_mmd

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const LoaderMMD = () => {
    const { scene } = useThree()

    useEffect(() => {
        // MMD (MikuMikuDance) format - simplified representation
        const group = new THREE.Group()

        // Simple humanoid-like figure
        const bodyGeom = new THREE.CylinderGeometry(0.3, 0.2, 1.5, 8)
        const bodyMat = new THREE.MeshStandardMaterial({ color: 0xffffff })
        const body = new THREE.Mesh(bodyGeom, bodyMat)
        body.position.y = 1
        group.add(body)

        // Head
        const headGeom = new THREE.SphereGeometry(0.3, 16, 16)
        const headMat = new THREE.MeshStandardMaterial({ color: 0xffccaa })
        const head = new THREE.Mesh(headGeom, headMat)
        head.position.y = 2
        group.add(head)

        // Hair
        const hairGeom = new THREE.ConeGeometry(0.35, 0.5, 8)
        const hairMat = new THREE.MeshStandardMaterial({ color: 0x44aaff })
        const hair = new THREE.Mesh(hairGeom, hairMat)
        hair.position.y = 2.3
        group.add(hair)

        // Legs
        const legGeom = new THREE.CylinderGeometry(0.1, 0.1, 1, 8)
        const legMat = new THREE.MeshStandardMaterial({ color: 0x333333 })
        const leftLeg = new THREE.Mesh(legGeom, legMat)
        leftLeg.position.set(-0.15, 0.5, 0)
        group.add(leftLeg)
        const rightLeg = new THREE.Mesh(legGeom, legMat)
        rightLeg.position.set(0.15, 0.5, 0)
        group.add(rightLeg)

        scene.add(group)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()

            // Simple dance animation
            body.rotation.z = Math.sin(t * 4) * 0.1
            head.rotation.y = Math.sin(t * 2) * 0.3
            leftLeg.rotation.x = Math.sin(t * 4) * 0.3
            rightLeg.rotation.x = Math.sin(t * 4 + Math.PI) * 0.3
        }
        animate()

        return () => {
            scene.remove(group)
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 2, 5]} />
            <scene>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
