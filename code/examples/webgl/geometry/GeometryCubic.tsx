/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_geometry_cubic

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const GeometryCubic = () => {
    const { scene } = useThree()

    useEffect(() => {
        const group = new THREE.Group()

        // Various cubic geometries
        const geometries = [
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.TetrahedronGeometry(0.8),
            new THREE.OctahedronGeometry(0.7),
            new THREE.DodecahedronGeometry(0.6),
            new THREE.IcosahedronGeometry(0.7),
        ]

        geometries.forEach((geom, i) => {
            const material = new THREE.MeshStandardMaterial({
                color: new THREE.Color().setHSL(i / geometries.length, 1, 0.5),
                wireframe: false,
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
            group.rotation.y = t * 0.2
        }
        animate()

        return () => {
            scene.remove(group)
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 0, 8]} />
            <scene>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
