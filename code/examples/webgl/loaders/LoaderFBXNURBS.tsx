/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_loader_fbx_nurbs

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const LoaderFbxNurbs = () => {
    const { scene } = useThree()

    useEffect(() => {
        // FBX NURBS visualization
        const group = new THREE.Group()

        // NURBS-like curve
        const curve = new THREE.CatmullRomCurve3([
            new THREE.Vector3(-5, 0, 0),
            new THREE.Vector3(-3, 2, 1),
            new THREE.Vector3(0, 1, 2),
            new THREE.Vector3(2, 3, 0),
            new THREE.Vector3(5, 0, 1),
        ])

        const points = curve.getPoints(100)
        const geometry = new THREE.BufferGeometry().setFromPoints(points)
        const material = new THREE.LineBasicMaterial({ color: 0xff6600 })
        const line = new THREE.Line(geometry, material)
        group.add(line)

        // Tube along curve
        const tubeGeom = new THREE.TubeGeometry(curve, 100, 0.2, 8, false)
        const tubeMat = new THREE.MeshStandardMaterial({ color: 0x66aaff })
        const tube = new THREE.Mesh(tubeGeom, tubeMat)
        group.add(tube)

        scene.add(group)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            group.rotation.y = t * 0.1
        }
        animate()

        return () => {
            scene.remove(group)
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 3, 10]} />
            <scene>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}