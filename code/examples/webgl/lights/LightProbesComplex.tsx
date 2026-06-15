/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_lightprobes_complex

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const LightprobesComplex = () => {
    const { scene } = useThree()

    useEffect(() => {
        const group = new THREE.Group()

        // Complex light probe setup
        for (let x = -5; x <= 5; x += 2.5) {
            for (let z = -5; z <= 5; z += 2.5) {
                const geom = new THREE.SphereGeometry(0.2, 8, 8)
                const mat = new THREE.MeshBasicMaterial({
                    color: new THREE.Color().setHSL(Math.random(), 1, 0.5),
                })
                const mesh = new THREE.Mesh(geom, mat)
                mesh.position.set(x, 2, z)
                group.add(mesh)
            }
        }

        // Central object
        const geometry = new THREE.SphereGeometry(1.5, 32, 32)
        const material = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            metalness: 1,
            roughness: 0,
        })
        const sphere = new THREE.Mesh(geometry, material)
        group.add(sphere)

        scene.add(group)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            sphere.rotation.y = t * 0.2
        }
        animate()

        return () => {
            scene.remove(group)
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 5, 12]} />
            <scene>
                <ambientLight intensity={0.2} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
