/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_lights_point

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const LightsPoint = () => {
    const { scene } = useThree()

    useEffect(() => {
        const group = new THREE.Group()

        // Objects
        for (let i = 0; i < 5; i++) {
            const geometry = new THREE.SphereGeometry(0.5, 16, 16)
            const material = new THREE.MeshStandardMaterial({
                color: new THREE.Color().setHSL(i / 5, 1, 0.5),
            })
            const sphere = new THREE.Mesh(geometry, material)
            sphere.position.x = (i - 2) * 2
            group.add(sphere)
        }

        scene.add(group)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()

            group.children.forEach((child, i) => {
                if (child instanceof THREE.Mesh) {
                    child.position.y = Math.sin(t * 2 + i) * 0.5
                }
            })
        }
        animate()

        return () => {
            scene.remove(group)
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 2, 8]} />
            <scene>
                <ambientLight intensity={0.2} />
                <pointLight position={[0, 3, 0]} intensity={2} color={0xffffaa} />
                <pointLight position={[-4, 2, 0]} intensity={1} color={0xff6600} />
                <pointLight position={[4, 2, 0]} intensity={1} color={0x0066ff} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
