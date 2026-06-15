/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_postprocessing_bokeh

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const PostprocessingBokeh = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Bokeh (depth of field) effect
        const spheres: THREE.Mesh[] = []

        for (let i = 0; i < 20; i++) {
            const geometry = new THREE.SphereGeometry(0.5, 32, 32)
            const material = new THREE.MeshStandardMaterial({ 
                color: new THREE.Color().setHSL(Math.random(), 1, 0.5) 
            })
            const sphere = new THREE.Mesh(geometry, material)
            sphere.position.set(
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 20
            )
            scene.add(sphere)
            spheres.push(sphere)
        }

        // Floor
        const floorGeom = new THREE.PlaneGeometry(30, 30)
        const floorMat = new THREE.MeshStandardMaterial({ color: 0x333333 })
        const floor = new THREE.Mesh(floorGeom, floorMat)
        floor.rotation.x = -Math.PI / 2
        floor.position.y = -5
        scene.add(floor)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            spheres.forEach((sphere, i) => {
                sphere.position.y = Math.sin(t + i) * 2
            })
        }
        animate()

        return () => {
            spheres.forEach(sphere => {
                scene.remove(sphere)
                sphere.geometry.dispose()
                ;(sphere.material as THREE.Material).dispose()
            })
            scene.remove(floor)
            floorGeom.dispose()
            floorMat.dispose()
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 0, 15]} fov={50} />
            <scene>
                <ambientLight intensity={0.4} />
                <directionalLight position={[10, 10, 10]} intensity={1} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}