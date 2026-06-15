/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_shadowmap_vsm

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const ShadowmapVSM = () => {
    const { scene } = useThree()

    useEffect(() => {
        // VSM (Variance Shadow Map) - smooth shadows
        const planeGeom = new THREE.PlaneGeometry(20, 20)
        const planeMat = new THREE.MeshStandardMaterial({ color: 0x777777 })
        const plane = new THREE.Mesh(planeGeom, planeMat)
        plane.rotation.x = -Math.PI / 2
        plane.receiveShadow = true
        scene.add(plane)

        // Stack of boxes for shadow test
        const boxGeom = new THREE.BoxGeometry(2, 2, 2)
        const colors = [0xff6666, 0x66ff66, 0x6666ff, 0xffff66]

        colors.forEach((color, i) => {
            const mat = new THREE.MeshStandardMaterial({ color })
            const box = new THREE.Mesh(boxGeom.clone(), mat)
            box.position.set(0, 1 + i * 2.2, 0)
            box.castShadow = true
            scene.add(box)
        })

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
        }
        animate()

        return () => {
            scene.remove(plane)
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[5, 8, 15]} />
            <scene>
                <ambientLight intensity={0.2} />
                <directionalLight 
                    position={[5, 15, 5]} 
                    intensity={1}
                    castShadow
                    shadow-radius={4}
                />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
