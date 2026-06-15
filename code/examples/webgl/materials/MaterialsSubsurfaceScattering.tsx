/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_materials_subsurface_scattering

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const MaterialsSubsurfaceScattering = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Subsurface scattering material
        const geometry = new THREE.TorusKnotGeometry(1, 0.3, 128, 32)

        const material = new THREE.MeshPhysicalMaterial({
            color: 0xff8866,
            metalness: 0,
            roughness: 0.3,
            transmission: 0.2,
            thickness: 1,
            ior: 1.4,
            clearcoat: 0.3,
            clearcoatRoughness: 0.1,
        })

        const mesh = new THREE.Mesh(geometry, material)
        scene.add(mesh)

        // Back light for SSS effect
        const backLight = new THREE.PointLight(0xff6600, 5, 10)
        backLight.position.set(0, 0, -3)
        scene.add(backLight)

        // Front light
        const frontLight = new THREE.DirectionalLight(0xffffff, 1)
        frontLight.position.set(5, 5, 5)
        scene.add(frontLight)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            mesh.rotation.x = t * 0.2
            mesh.rotation.y = t * 0.3
        }
        animate()

        return () => {
            scene.remove(mesh)
            scene.remove(backLight)
            scene.remove(frontLight)
            geometry.dispose()
            material.dispose()
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 0, 8]} />
            <scene>
                <ambientLight intensity={0.2} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}