/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_wireframes

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const Wireframes = () => {
    const { scene } = useThree()

    useEffect(() => {
        const geometries = [
            new THREE.BoxGeometry(2, 2, 2),
            new THREE.SphereGeometry(1, 16, 16),
            new THREE.TorusGeometry(1, 0.5, 16, 32),
            new THREE.TorusKnotGeometry(1, 0.3, 64, 8),
        ]

        const meshes = geometries.map((geom, i) => {
            const material = new THREE.MeshBasicMaterial({
                color: new THREE.Color().setHSL(i / geometries.length, 1, 0.5),
                wireframe: true,
            })
            const mesh = new THREE.Mesh(geom, material)
            mesh.position.x = (i - 1.5) * 4
            scene.add(mesh)
            return mesh
        })

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            meshes.forEach(mesh => {
                mesh.rotation.x = t * 0.5
                mesh.rotation.y = t * 0.3
            })
        }
        animate()

        return () => {
            meshes.forEach(mesh => {
                scene.remove(mesh)
                mesh.geometry.dispose()
                mesh.material.dispose()
            })
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 0, 12]} />
            <scene>
                <ambientLight intensity={0.5} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}