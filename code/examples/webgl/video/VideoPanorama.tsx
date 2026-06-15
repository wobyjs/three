/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_video_panorama

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const VideoPanorama = () => {
    const { scene } = useThree()

    useEffect(() => {
        // 360 panorama viewer
        // Create gradient panorama
        const canvas = document.createElement('canvas')
        canvas.width = 2048
        canvas.height = 1024
        const ctx = canvas.getContext('2d')!

        // Sky gradient
        const skyGradient = ctx.createLinearGradient(0, 0, 0, 512)
        skyGradient.addColorStop(0, '#1a0a2e')
        skyGradient.addColorStop(0.5, '#4a2c6a')
        skyGradient.addColorStop(1, '#ff6b6b')
        ctx.fillStyle = skyGradient
        ctx.fillRect(0, 0, 2048, 512)

        // Ground
        ctx.fillStyle = '#2d4a3e'
        ctx.fillRect(0, 512, 2048, 512)

        // Add stars
        ctx.fillStyle = '#ffffff'
        for (let i = 0; i < 200; i++) {
            ctx.beginPath()
            ctx.arc(Math.random() * 2048, Math.random() * 400, Math.random() * 2, 0, Math.PI * 2)
            ctx.fill()
        }

        // Add some landscape elements
        ctx.fillStyle = '#1a332a'
        for (let i = 0; i < 10; i++) {
            const x = i * 200 + 100
            const h = 100 + Math.random() * 200
            ctx.beginPath()
            ctx.moveTo(x - 80, 512)
            ctx.lineTo(x, 512 - h)
            ctx.lineTo(x + 80, 512)
            ctx.fill()
        }

        const texture = new THREE.CanvasTexture(canvas)
        texture.mapping = THREE.EquirectangularReflectionMapping

        const geometry = new THREE.SphereGeometry(50, 32, 32)
        const material = new THREE.MeshBasicMaterial({
            map: texture,
            side: THREE.BackSide,
        })

        const sphere = new THREE.Mesh(geometry, material)
        scene.add(sphere)

        // Center object
        const objGeom = new THREE.TorusKnotGeometry(2, 0.5, 64, 16)
        const objMat = new THREE.MeshStandardMaterial({ color: 0xff6600 })
        const obj = new THREE.Mesh(objGeom, objMat)
        scene.add(obj)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            obj.rotation.x = t * 0.2
            obj.rotation.y = t * 0.3
        }
        animate()

        return () => {
            scene.remove(sphere)
            scene.remove(obj)
            geometry.dispose()
            material.dispose()
            texture.dispose()
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 0, 0.1]} />
            <scene>
                <ambientLight intensity={0.3} />
            </scene>
            <orbitControls enableZoom={false} />
        </canvas3D>
    )
}
