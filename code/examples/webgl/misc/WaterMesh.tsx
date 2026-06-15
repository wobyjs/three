/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_watermesh

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const WaterMesh = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Create water surface
        const geometry = new THREE.PlaneGeometry(50, 50, 128, 128)
        const material = new THREE.MeshPhongMaterial({
            color: 0x004488,
            transparent: true,
            opacity: 0.8,
            shininess: 100,
            side: THREE.DoubleSide,
        })

        const water = new THREE.Mesh(geometry, material)
        water.rotation.x = -Math.PI / 2
        scene.add(water)

        // Add skybox
        const skyGeometry = new THREE.SphereGeometry(100, 32, 32)
        const skyMaterial = new THREE.MeshBasicMaterial({
            color: 0x87ceeb,
            side: THREE.BackSide,
        })
        const sky = new THREE.Mesh(skyGeometry, skyMaterial)
        scene.add(sky)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()

            // Animate water vertices
            const posAttr = water.geometry.attributes.position
            for (let i = 0; i < posAttr.count; i++) {
                const x = posAttr.getX(i)
                const y = posAttr.getY(i)
                const z = Math.sin(x * 0.1 + t) * Math.cos(y * 0.1 + t) * 0.5
                posAttr.setZ(i, z)
            }
            posAttr.needsUpdate = true
        }
        animate()

        return () => {
            scene.remove(water)
            scene.remove(sky)
            geometry.dispose()
            material.dispose()
            skyGeometry.dispose()
            skyMaterial.dispose()
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 10, 20]} />
            <scene>
                <ambientLight intensity={0.4} />
                <directionalLight position={[10, 20, 10]} intensity={1} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
