/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_portal

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const Portal = () => {
    const { scene } = useThree()

    useEffect(() => {
        const group = new THREE.Group()

        // Portal frame
        const frameGeom = new THREE.TorusGeometry(2, 0.2, 16, 100)
        const frameMat = new THREE.MeshStandardMaterial({
            color: 0x666666,
            metalness: 0.8,
            roughness: 0.2,
        })
        const frame = new THREE.Mesh(frameGeom, frameMat)
        group.add(frame)

        // Portal surface
        const portalGeom = new THREE.CircleGeometry(1.8, 64)
        const portalMat = new THREE.MeshBasicMaterial({
            color: 0x4488ff,
            transparent: true,
            opacity: 0.8,
            side: THREE.DoubleSide,
        })
        const portal = new THREE.Mesh(portalGeom, portalMat)
        group.add(portal)

        scene.add(group)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            portal.material.opacity = 0.5 + Math.sin(t * 2) * 0.3
        }
        animate()

        return () => {
            scene.remove(group)
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 0, 6]} />
            <scene>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}