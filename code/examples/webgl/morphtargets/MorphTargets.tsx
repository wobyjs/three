/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_morphtargets

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const MorphTargets = () => {
    const { scene } = useThree()

    useEffect(() => {
        const group = new THREE.Group()

        const geometry = new THREE.SphereGeometry(1.5, 32, 32)
        const material = new THREE.MeshStandardMaterial({
            color: 0x66aaff,
            metalness: 0.5,
            roughness: 0.5,
        })
        const mesh = new THREE.Mesh(geometry, material)
        group.add(mesh)

        scene.add(group)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            const scale = 1 + Math.sin(t * 2) * 0.2
            mesh.scale.set(scale, scale, scale)
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
                <directionalLight position={[5, 5, 5]} intensity={1} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}