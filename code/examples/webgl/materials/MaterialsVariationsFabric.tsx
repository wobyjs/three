/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_materials_variations_fabric

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const MaterialsVariationsFabric = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Fabric material variations
        const geometries = [
            new THREE.SphereGeometry(0.8, 32, 32),
            new THREE.TorusKnotGeometry(0.5, 0.2, 64, 16),
            new THREE.DodecahedronGeometry(0.7),
        ]

        const materials = [
            new THREE.MeshStandardMaterial({
                color: 0x8b4513,
                roughness: 0.9,
                metalness: 0,
            }),
            new THREE.MeshStandardMaterial({
                color: 0x8b4513,
                roughness: 0.7,
                metalness: 0.1,
                bumpScale: 0.05,
            }),
            new THREE.MeshStandardMaterial({
                color: 0x8b4513,
                roughness: 0.5,
                metalness: 0.2,
                normalScale: new THREE.Vector2(0.5, 0.5),
            }),
        ]

        const meshes: THREE.Mesh[] = []
        geometries.forEach((geom, i) => {
            const mesh = new THREE.Mesh(geom, materials[i])
            mesh.position.x = (i - 1) * 2.5
            mesh.position.y = 1
            scene.add(mesh)
            meshes.push(mesh)
        })

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            meshes.forEach((mesh, i) => {
                mesh.rotation.x = t * 0.2 + i
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
