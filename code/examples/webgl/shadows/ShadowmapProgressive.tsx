/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_shadowmap_progressive

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const ShadowmapProgressive = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Progressive shadow mapping
        const planeGeom = new THREE.PlaneGeometry(30, 30)
        const planeMat = new THREE.MeshStandardMaterial({ color: 0x555555 })
        const plane = new THREE.Mesh(planeGeom, planeMat)
        plane.rotation.x = -Math.PI / 2
        plane.receiveShadow = true
        scene.add(plane)

        // Moving objects
        const objects: THREE.Mesh[] = []

        for (let i = 0; i < 10; i++) {
            const geom = new THREE.SphereGeometry(0.5, 16, 16)
            const mat = new THREE.MeshStandardMaterial({
                color: new THREE.Color().setHSL(Math.random(), 1, 0.5)
            })
            const mesh = new THREE.Mesh(geom, mat)
            mesh.position.set(
                (Math.random() - 0.5) * 20,
                0.5,
                (Math.random() - 0.5) * 20
            )
            mesh.castShadow = true
            scene.add(mesh)
            objects.push(mesh)
        }

        const velocities = objects.map(() => ({
            x: (Math.random() - 0.5) * 0.1,
            z: (Math.random() - 0.5) * 0.1,
        }))

        const animate = () => {
            requestAnimationFrame(animate)

            objects.forEach((obj, i) => {
                obj.position.x += velocities[i].x
                obj.position.z += velocities[i].z

                // Bounce
                if (Math.abs(obj.position.x) > 10) velocities[i].x *= -1
                if (Math.abs(obj.position.z) > 10) velocities[i].z *= -1
            })
        }
        animate()

        return () => {
            scene.remove(plane)
            objects.forEach(obj => scene.remove(obj))
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 10, 20]} />
            <scene>
                <ambientLight intensity={0.2} />
                <directionalLight 
                    position={[10, 20, 10]} 
                    intensity={1}
                    castShadow
                />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}