/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_loader_3dm

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import { Rhino3dmLoader } from 'three/examples/jsm/loaders/Rhino3dmLoader'
import * as THREE from 'three'

export const Loader3dm = () => {
    const { scene } = useThree()
    const modelRef = $<THREE.Group>()

    useEffect(() => {
        // Rhino 3D Model loader example
        const loader = new Rhino3dmLoader()
        // loader.setPath('/models/')

        // Placeholder geometry since no actual 3DM model available
        const geometry = new THREE.TorusKnotGeometry(1.5, 0.5, 100, 16)
        const material = new THREE.MeshStandardMaterial({
            color: 0x88aaff,
            metalness: 0.5,
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
            mesh.rotation.x = t * 0.2
            mesh.rotation.y = t * 0.3
        }
        animate()

        // Example loading actual 3DM file:
        // loader.load('model.3dm', (object) => {
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