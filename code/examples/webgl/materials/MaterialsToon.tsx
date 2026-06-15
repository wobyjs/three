/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_materials_toon

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const MaterialsToon = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Toon shading demo
        const group = new THREE.Group()

        for (let i = 0; i < 5; i++) {
            const geometry = new THREE.SphereGeometry(0.8, 32, 32)
            const material = new THREE.MeshToonMaterial({
                color: new THREE.Color().setHSL(i / 5, 1, 0.5),
            })
            const mesh = new THREE.Mesh(geometry, material)
            mesh.position.x = (i - 2) * 2
            group.add(mesh)
        }

        scene.add(group)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            group.rotation.y = t * 0.1
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
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
