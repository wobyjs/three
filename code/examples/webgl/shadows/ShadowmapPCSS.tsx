/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_shadowmap_pcss

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const ShadowmapPCSS = () => {
    const { scene } = useThree()

    useEffect(() => {
        // PCSS (Percentage Closer Soft Shadows) - soft shadow simulation
        // Floor
        const planeGeom = new THREE.PlaneGeometry(20, 20)
        const planeMat = new THREE.MeshStandardMaterial({ color: 0x666666 })
        const plane = new THREE.Mesh(planeGeom, planeMat)
        plane.rotation.x = -Math.PI / 2
        plane.receiveShadow = true
        scene.add(plane)

        // Objects
        for (let i = 0; i < 5; i++) {
            const geom = i % 2 === 0 
                ? new THREE.CylinderGeometry(0.5, 0.5, 2, 32)
                : new THREE.BoxGeometry(1, 2, 1)
            const mat = new THREE.MeshStandardMaterial({
                color: new THREE.Color().setHSL(i / 5, 1, 0.5)
            })
            const mesh = new THREE.Mesh(geom, mat)
            mesh.position.set(i * 3 - 6, 1, 0)
            mesh.castShadow = true
            scene.add(mesh)
        }

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
        }
        animate()

        return () => {
            scene.remove(plane)
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 5, 15]} />
            <scene>
                <ambientLight intensity={0.2} />
                <directionalLight 
                    position={[10, 20, 10]} 
                    intensity={1}
                    castShadow
                    shadow-radius={8}
                />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
