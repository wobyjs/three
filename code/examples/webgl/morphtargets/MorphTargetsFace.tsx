/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_morphtargets_face

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const MorphTargetsFace = () => {
    const { scene } = useThree()

    useEffect(() => {
        const group = new THREE.Group()

        // Face morph visualization
        const headGeom = new THREE.SphereGeometry(1, 32, 32)
        const headMat = new THREE.MeshStandardMaterial({ color: 0xffccaa })
        const head = new THREE.Mesh(headGeom, headMat)
        group.add(head)

        // Eyes
        const eyeGeom = new THREE.SphereGeometry(0.15, 16, 16)
        const eyeMat = new THREE.MeshStandardMaterial({ color: 0x222222 })
        const leftEye = new THREE.Mesh(eyeGeom, eyeMat)
        leftEye.position.set(-0.35, 0.3, 0.9)
        group.add(leftEye)

        const rightEye = new THREE.Mesh(eyeGeom, eyeMat)
        rightEye.position.set(0.35, 0.3, 0.9)
        group.add(rightEye)

        scene.add(group)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            // Blink effect
            const blink = Math.sin(t * 3) > 0.9 ? 0.1 : 1
            leftEye.scale.y = blink
            rightEye.scale.y = blink
        }
        animate()

        return () => {
            scene.remove(group)
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 0, 4]} />
            <scene>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}