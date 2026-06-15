/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_loader_log

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const LoaderLog = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Loading logger demo
        const group = new THREE.Group()

        // Various geometries
        const geometries = [
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.SphereGeometry(0.6, 16, 16),
            new THREE.ConeGeometry(0.5, 1, 16),
            new THREE.CylinderGeometry(0.4, 0.4, 1, 16),
            new THREE.TorusGeometry(0.5, 0.2, 8, 16),
        ]

        geometries.forEach((geom, i) => {
            const material = new THREE.MeshStandardMaterial({
                color: new THREE.Color().setHSL(i / geometries.length, 1, 0.5),
            })
            const mesh = new THREE.Mesh(geom, material)
            mesh.position.x = (i - 2) * 2
            group.add(mesh)
        })

        scene.add(group)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            group.children.forEach((child, i) => {
                if (child instanceof THREE.Mesh) {
                    child.rotation.y = t * 0.3 + i
                    child.position.y = Math.sin(t + i) * 0.3
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
            <perspectiveCamera position={[0, 2, 8]} />
            <scene>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
