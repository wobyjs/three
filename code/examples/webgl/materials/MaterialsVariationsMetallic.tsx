/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_materials_variations_metallic

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const MaterialsVariationsMetallic = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Metallic material variations
        const geometry = new THREE.SphereGeometry(0.8, 64, 64)

        const metals = [
            { color: 0xffd700, name: 'Gold' },
            { color: 0xc0c0c0, name: 'Silver' },
            { color: 0xb87333, name: 'Copper' },
            { color: 0x848884, name: 'Iron' },
        ]

        const meshes: THREE.Mesh[] = []

        metals.forEach((metal, i) => {
            const material = new THREE.MeshStandardMaterial({
                color: metal.color,
                metalness: 1,
                roughness: 0.2,
            })

            const mesh = new THREE.Mesh(geometry.clone(), material)
            mesh.position.x = (i - 1.5) * 2.5
            mesh.position.y = 1
            scene.add(mesh)
            meshes.push(mesh)
        })

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            meshes.forEach((mesh, i) => {
                mesh.rotation.y = t * 0.3 + i
            })
        }
        animate()

        return () => {
            meshes.forEach(mesh => {
                scene.remove(mesh)
                mesh.geometry.dispose()
                ;(mesh.material as THREE.Material).dispose()
            })
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 1, 10]} />
            <scene>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
