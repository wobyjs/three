/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_materials_texture_anisotropy

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const MaterialsTextureAnisotropy = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Anisotropic filtering demo
        const group = new THREE.Group()

        // Floor with texture
        const floorGeom = new THREE.PlaneGeometry(20, 20)
        const floorMat = new THREE.MeshStandardMaterial({ color: 0x888888 })
        const floor = new THREE.Mesh(floorGeom, floorMat)
        floor.rotation.x = -Math.PI / 2
        group.add(floor)

        // Objects at different angles
        for (let i = 0; i < 5; i++) {
            const geometry = new THREE.BoxGeometry(1, 1, 1)
            const material = new THREE.MeshStandardMaterial({
                color: new THREE.Color().setHSL(i / 5, 1, 0.5),
            })
            const mesh = new THREE.Mesh(geometry, material)
            mesh.position.set(i * 3 - 6, 0.5, -5)
            mesh.rotation.y = i * 0.2
            group.add(mesh)
        }

        scene.add(group)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            group.children.forEach((child, i) => {
                if (child instanceof THREE.Mesh && i > 0) {
                    child.rotation.y = t * 0.3 + i
                }
            })
        }
        animate()

        return () => {
            scene.remove(group)
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 2, 10]} fov={30} />
            <scene>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
