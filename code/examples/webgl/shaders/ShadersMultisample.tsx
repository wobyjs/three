/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_shaders_multisample

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const ShadersMultisample = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Multisample anti-aliasing demo
        const group = new THREE.Group()

        // High contrast edges to show aliasing
        const geometry = new THREE.TorusKnotGeometry(1.5, 0.5, 128, 32)
        const material = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            wireframe: true,
        })
        const mesh = new THREE.Mesh(geometry, material)
        group.add(mesh)

        scene.add(group)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            mesh.rotation.x = t * 0.2
            mesh.rotation.y = t * 0.3
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
                <ambientLight intensity={0.5} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
