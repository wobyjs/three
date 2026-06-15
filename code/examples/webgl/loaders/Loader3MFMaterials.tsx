/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_loader_3mf_materials

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import { ThreeMFLoader } from 'three/examples/jsm/loaders/ThreeMFLoader'
import * as THREE from 'three'

export const Loader3mfMaterials = () => {
    const { scene } = useThree()

    useEffect(() => {
        // 3MF with materials - multiple colored boxes demo
        const loader = new ThreeMFLoader()
        // loader.setPath('/models/')

        const group = new THREE.Group()

        // Simulate materials by using multiple colored boxes
        const materials = [
            new THREE.MeshStandardMaterial({ color: 0xff0000 }),
            new THREE.MeshStandardMaterial({ color: 0x00ff00 }),
            new THREE.MeshStandardMaterial({ color: 0x0000ff }),
            new THREE.MeshStandardMaterial({ color: 0xffff00 }),
        ]

        materials.forEach((mat, i) => {
            const geometry = new THREE.BoxGeometry(1, 1, 1)
            const mesh = new THREE.Mesh(geometry, mat)
            mesh.position.x = (i - 1.5) * 2
            group.add(mesh)
        })

        scene.add(group)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            group.rotation.y = t * 0.2
        }
        animate()

        // Example loading actual 3MF with materials:
        // loader.load('model.3mf', (object) => {
        //     scene.add(object)
        // })

        return () => {
            scene.remove(group)
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 0, 8]} />
            <scene>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}