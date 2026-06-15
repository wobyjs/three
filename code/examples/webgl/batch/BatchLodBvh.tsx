/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_batch_lod_bvh

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const BatchLodBvh = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Batched LOD with BVH optimization
        const group = new THREE.Group()

        // Create multiple LOD objects
        for (let i = 0; i < 100; i++) {
            const lod = new THREE.LOD()

            // High detail
            const highGeom = new THREE.SphereGeometry(1, 32, 32)
            const highMat = new THREE.MeshStandardMaterial({ color: 0xff6600 })
            const highMesh = new THREE.Mesh(highGeom, highMat)
            lod.addLevel(highMesh, 0)

            // Medium detail
            const medGeom = new THREE.SphereGeometry(1, 16, 16)
            const medMat = new THREE.MeshStandardMaterial({ color: 0xff6600 })
            const medMesh = new THREE.Mesh(medGeom, medMat)
            lod.addLevel(medMesh, 10)

            // Low detail
            const lowGeom = new THREE.SphereGeometry(1, 8, 8)
            const lowMat = new THREE.MeshStandardMaterial({ color: 0xff6600 })
            const lowMesh = new THREE.Mesh(lowGeom, lowMat)
            lod.addLevel(lowMesh, 20)

            lod.position.set(
                (Math.random() - 0.5) * 100,
                (Math.random() - 0.5) * 100,
                (Math.random() - 0.5) * 100
            )

            group.add(lod)
        }

        scene.add(group)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            group.rotation.y = t * 0.05
        }
        animate()

        return () => {
            scene.remove(group)
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 0, 50]} far={200} />
            <scene>
                <ambientLight intensity={0.4} />
                <directionalLight position={[50, 50, 50]} intensity={1} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
