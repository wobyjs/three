/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_loader_3mf

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import { ThreeMFLoader } from 'three/examples/jsm/loaders/ThreeMFLoader'
import * as THREE from 'three'

export const Loader3mf = () => {
    const { scene } = useThree()
    const modelRef = $<THREE.Group>()

    useEffect(() => {
        // 3D Manufacturing Format loader example
        const loader = new ThreeMFLoader()
        // loader.setPath('/models/')

        // Placeholder geometry since no actual 3MF model available
        const geometry = new THREE.OctahedronGeometry(2, 0)
        const material = new THREE.MeshStandardMaterial({
            color: 0xff66aa,
            metalness: 0.7,
            roughness: 0.3,
        })
        const mesh = new THREE.Mesh(geometry, material)
        const group = new THREE.Group()
        group.add(mesh)
        scene.add(group)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            mesh.rotation.y = t * 0.2
            mesh.rotation.x = t * 0.1
        }
        animate()

        // Example loading actual 3MF file:
        // loader.load('model.3mf', (object) => {
        //     scene.add(object)
        // })

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