/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_shadowmesh

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const Shadowmesh = () => {
    const { scene } = useThree()

    useEffect(() => {
        const group = new THREE.Group()

        // Shadow mesh visualization
        const geometry = new THREE.TorusKnotGeometry(1, 0.3, 100, 16)
        const material = new THREE.MeshStandardMaterial({
            color: 0xff6600,
            metalness: 0.5,
            roughness: 0.5,
        })
        const mesh = new THREE.Mesh(geometry, material)
        mesh.position.y = 2
        mesh.castShadow = true
        group.add(mesh)

        // Shadow mesh
        const shadowGeom = new THREE.PlaneGeometry(4, 4)
        const shadowMat = new THREE.MeshBasicMaterial({
            color: 0x000000,
            transparent: true,
            opacity: 0.3,
        })
        const shadow = new THREE.Mesh(shadowGeom, shadowMat)
        shadow.rotation.x = -Math.PI / 2
        shadow.position.y = -1
        group.add(shadow)

        scene.add(group)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            mesh.rotation.x = t * 0.2
            mesh.rotation.y = t * 0.3
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