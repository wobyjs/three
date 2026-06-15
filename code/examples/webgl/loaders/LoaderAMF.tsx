/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_loader_amf

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import { AMFLoader } from 'three/examples/jsm/loaders/AMFLoader'
import * as THREE from 'three'

export const LoaderAmf = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Additive Manufacturing File Format loader example
        const loader = new AMFLoader()
        // loader.setPath('/models/')

        // Placeholder geometry since no actual AMF model available
        const geometry = new THREE.TorusGeometry(1.5, 0.5, 16, 100)
        const material = new THREE.MeshStandardMaterial({
            color: 0x66ff66,
            metalness: 0.5,
            roughness: 0.4,
        })
        const mesh = new THREE.Mesh(geometry, material)
        const group = new THREE.Group()
        group.add(mesh)
        scene.add(group)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            mesh.rotation.x = t * 0.3
        }
        animate()

        // Example loading actual AMF file:
        // loader.load('model.amf', (object) => {
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