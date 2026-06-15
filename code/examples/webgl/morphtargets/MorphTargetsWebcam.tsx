/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_morphtargets_webcam

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const MorphTargetsWebcam = () => {
    const { scene } = useThree()

    useEffect(() => {
        const group = new THREE.Group()

        // Face mesh for webcam morphing
        const faceGeom = new THREE.SphereGeometry(1.5, 32, 32)
        const faceMat = new THREE.MeshStandardMaterial({
            color: 0xffccaa,
            metalness: 0.1,
            roughness: 0.8,
        })
        const face = new THREE.Mesh(faceGeom, faceMat)
        group.add(face)

        // Eyes
        const eyeGeom = new THREE.SphereGeometry(0.2, 16, 16)
        const eyeMat = new THREE.MeshStandardMaterial({ color: 0x222222 })
        const leftEye = new THREE.Mesh(eyeGeom, eyeMat)
        leftEye.position.set(-0.5, 0.4, 1.3)
        group.add(leftEye)

        const rightEye = new THREE.Mesh(eyeGeom, eyeMat)
        rightEye.position.set(0.5, 0.4, 1.3)
        group.add(rightEye)

        // Mouth
        const mouthGeom = new THREE.TorusGeometry(0.3, 0.05, 8, 16, Math.PI)
        const mouthMat = new THREE.MeshStandardMaterial({ color: 0xaa4444 })
        const mouth = new THREE.Mesh(mouthGeom, mouthMat)
        mouth.position.set(0, -0.4, 1.4)
        mouth.rotation.x = Math.PI
        group.add(mouth)

        scene.add(group)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            // Simulated webcam morph targets
            const blink = Math.sin(t * 2) > 0.95 ? 0.1 : 1
            leftEye.scale.y = blink
            rightEye.scale.y = blink

            const talk = Math.abs(Math.sin(t * 8)) * 0.5 + 0.5
            mouth.scale.y = talk
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