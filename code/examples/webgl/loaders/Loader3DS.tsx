/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_loader_3ds

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import { TDSLoader } from 'three/examples/jsm/loaders/TDSLoader'
import * as THREE from 'three'

export const Loader3ds = () => {
    const { scene } = useThree()
    const modelRef = $<THREE.Group>()

    useEffect(() => {
        // 3D Studio Max model loader example
        const loader = new TDSLoader()
        // loader.setPath('/models/')

        // Placeholder geometry since no actual 3DS model available
        const geometry = new THREE.SphereGeometry(2, 32, 32)
        const material = new THREE.MeshStandardMaterial({
            color: 0x66aaff,
            metalness: 0.3,
            roughness: 0.5,
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
        }
        animate()

        // Example loading actual 3DS file:
        // loader.load('model.3ds', (object) => {
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