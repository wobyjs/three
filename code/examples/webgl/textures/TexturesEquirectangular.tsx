/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_textures_equirectangular

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const TexturesEquirectangular = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Create equirectangular projection texture
        const canvas = document.createElement('canvas')
        canvas.width = 1024
        canvas.height = 512
        const ctx = canvas.getContext('2d')!

        // Draw equirectangular map (earth-like)
        const gradient = ctx.createLinearGradient(0, 0, 0, 512)
        gradient.addColorStop(0, '#000033')
        gradient.addColorStop(0.2, '#004488')
        gradient.addColorStop(0.5, '#0088ff')
        gradient.addColorStop(0.8, '#00aa44')
        gradient.addColorStop(1, '#00ff00')
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, 1024, 512)

        // Add some "continents"
        ctx.fillStyle = '#886633'
        for (let i = 0; i < 20; i++) {
            const x = Math.random() * 1024
            const y = 128 + Math.random() * 256
            const w = 50 + Math.random() * 100
            const h = 30 + Math.random() * 50
            ctx.fillRect(x, y, w, h)
        }

        const texture = new THREE.CanvasTexture(canvas)

        // Use as background
        scene.background = texture

        // Add foreground sphere
        const sphereGeom = new THREE.SphereGeometry(1, 64, 64)
        const sphereMat = new THREE.MeshStandardMaterial({ 
            color: 0xffffff,
            metalness: 0.5,
            roughness: 0.5,
        })
        const sphere = new THREE.Mesh(sphereGeom, sphereMat)
        scene.add(sphere)

        return () => {
            scene.background = null
            scene.remove(sphere)
            sphereGeom.dispose()
            sphereMat.dispose()
            texture.dispose()
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 0, 5]} />
            <scene />
            <orbitControls />
        </canvas3D>
    )
}
