/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_loader_gltf_avif

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const LoaderGltfAvif = () => {
    const { scene } = useThree()

    useEffect(() => {
        // GLTF with AVIF texture visualization
        const group = new THREE.Group()

        const geometry = new THREE.BoxGeometry(2, 2, 2)
        const material = new THREE.MeshStandardMaterial({
            color: 0x66aaff,
            metalness: 0.5,
            roughness: 0.3,
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
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}