/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_loader_usd

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const LoaderUSD = () => {
    const { scene } = useThree()

    useEffect(() => {
        // USD format visualization
        const group = new THREE.Group()

        // Simulated USD scene hierarchy
        const geometry = new THREE.TorusKnotGeometry(1, 0.3, 100, 16)
        const material = new THREE.MeshStandardMaterial({ color: 0x88ccff })
        const mesh = new THREE.Mesh(geometry, material)
        group.add(mesh)

        // Ground
        const groundGeom = new THREE.PlaneGeometry(20, 20)
        const groundMat = new THREE.MeshStandardMaterial({ color: 0x444444 })
        const ground = new THREE.Mesh(groundGeom, groundMat)
        ground.rotation.x = -Math.PI / 2
        ground.position.y = -1
        group.add(ground)

        scene.add(group)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            mesh.rotation.y = t * 0.2
            mesh.rotation.x = t * 0.1
        }
        animate()

        return () => {
            scene.remove(group)
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 2, 6]} />
            <scene>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
