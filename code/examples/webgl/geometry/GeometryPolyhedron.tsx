/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_geometry_polyhedron

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const GeometryPolyhedron = () => {
    const { scene } = useThree()

    useEffect(() => {
        const group = new THREE.Group()

        // Platonic solids
        const solids = [
            { geom: new THREE.TetrahedronGeometry(1), name: 'Tetrahedron' },
            { geom: new THREE.OctahedronGeometry(1), name: 'Octahedron' },
            { geom: new THREE.IcosahedronGeometry(1), name: 'Icosahedron' },
            { geom: new THREE.DodecahedronGeometry(1), name: 'Dodecahedron' },
        ]

        solids.forEach((solid, i) => {
            const material = new THREE.MeshStandardMaterial({
                color: new THREE.Color().setHSL(i / solids.length, 1, 0.5),
                wireframe: true,
            })
            const mesh = new THREE.Mesh(solid.geom, material)
            mesh.position.x = (i - 1.5) * 3
            group.add(mesh)
        })

        scene.add(group)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            group.children.forEach((child, i) => {
                if (child instanceof THREE.Mesh) {
                    child.rotation.x = t * 0.3 + i
                    child.rotation.y = t * 0.2 + i
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
            <perspectiveCamera position={[0, 0, 10]} />
            <scene>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
