/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_random_uv

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const RandomUv = () => {
    const { scene } = useThree()

    useEffect(() => {
        const group = new THREE.Group()

        const geometry = new THREE.PlaneGeometry(4, 4, 20, 20)
        const positions = geometry.attributes.position

        for (let i = 0; i < positions.count; i++) {
            const x = positions.getX(i)
            const y = positions.getY(i)
            const z = (Math.random() - 0.5) * 0.5
            positions.setZ(i, z)
        }

        geometry.computeVertexNormals()

        const material = new THREE.MeshStandardMaterial({
            color: 0x88aaff,
            wireframe: false,
            flatShading: true,
        })

        const mesh = new THREE.Mesh(geometry, material)
        group.add(mesh)

        scene.add(group)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            group.rotation.x = -Math.PI / 2 + Math.sin(t * 0.2) * 0.1
            group.rotation.z = Math.cos(t * 0.1) * 0.1
        }
        animate()

        return () => {
            scene.remove(group)
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 5, 8]} />
            <scene>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}