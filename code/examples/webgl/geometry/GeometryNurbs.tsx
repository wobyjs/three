/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_geometry_nurbs

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const GeometryNurbs = () => {
    const { scene } = useThree()

    useEffect(() => {
        // NURBS surface
        const controlPoints = [
            [
                new THREE.Vector4(-2, -2, 0, 1),
                new THREE.Vector4(-2, 0, 2, 1),
                new THREE.Vector4(-2, 2, 0, 1),
            ],
            [
                new THREE.Vector4(0, -2, 2, 1),
                new THREE.Vector4(0, 0, 4, 1),
                new THREE.Vector4(0, 2, 2, 1),
            ],
            [
                new THREE.Vector4(2, -2, 0, 1),
                new THREE.Vector4(2, 0, 2, 1),
                new THREE.Vector4(2, 2, 0, 1),
            ],
        ]

        const degree1 = 2
        const degree2 = 2

        // Create NURBS surface (simplified - using parametric geometry)
        const knots1 = [0, 0, 0, 1, 1, 1]
        const knots2 = [0, 0, 0, 1, 1, 1]

        // Create a surface using parametric geometry
        const geometry = new THREE.ParametricGeometry((u, v, target) => {
            const x = u * 4 - 2
            const y = v * 4 - 2
            const z = Math.sin(u * Math.PI) * Math.cos(v * Math.PI) * 2
            target.set(x, z, y)
        }, 50, 50)

        const material = new THREE.MeshStandardMaterial({
            color: 0x00aaff,
            side: THREE.DoubleSide,
            wireframe: false,
        })

        const mesh = new THREE.Mesh(geometry, material)
        scene.add(mesh)

        // Wireframe overlay
        const wireframeMat = new THREE.MeshBasicMaterial({
            color: 0x000000,
            wireframe: true,
        })
        const wireframe = new THREE.Mesh(geometry.clone(), wireframeMat)
        scene.add(wireframe)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            mesh.rotation.y = t * 0.2
            wireframe.rotation.y = t * 0.2
        }
        animate()

        return () => {
            scene.remove(mesh)
            scene.remove(wireframe)
            geometry.dispose()
            material.dispose()
            wireframeMat.dispose()
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

/*
Example usage with actual NURBS:
import { NURBSSurface } from 'three/examples/jsm/curves/NURBSSurface.js'
import { NURBSGeometry } from 'three/examples/jsm/curves/NURBSGeometry.js'

const nurbsSurface = new NURBSSurface(degree1, degree2, knots1, knots2, controlPoints)
const geometry = new NURBSGeometry(nurbsSurface, 50, 50)
*/