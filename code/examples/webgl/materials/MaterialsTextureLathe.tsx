/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_materials_texture_lathe

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const MaterialsTextureLathe = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Lathe geometry with texture
        const points = []
        for (let i = 0; i < 20; i++) {
            const x = Math.sin(i * 0.2) * 2 + 1
            points.push(new THREE.Vector2(x, i * 0.5))
        }

        const geometry = new THREE.LatheGeometry(points, 32)

        // Create procedural texture
        const canvas = document.createElement('canvas')
        canvas.width = 256
        canvas.height = 256
        const ctx = canvas.getContext('2d')!

        // Horizontal stripes
        for (let y = 0; y < 256; y += 16) {
            ctx.fillStyle = y % 32 === 0 ? '#ff6600' : '#ffcc00'
            ctx.fillRect(0, y, 256, 16)
        }

        const texture = new THREE.CanvasTexture(canvas)
        texture.wrapS = THREE.RepeatWrapping
        texture.wrapT = THREE.RepeatWrapping

        const material = new THREE.MeshStandardMaterial({ map: texture })
        const mesh = new THREE.Mesh(geometry, material)
        mesh.position.y = -5
        scene.add(mesh)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            mesh.rotation.y = t * 0.3
        }
        animate()

        return () => {
            scene.remove(mesh)
            geometry.dispose()
            material.dispose()
            texture.dispose()
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 5, 15]} />
            <scene>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 10, 5]} intensity={1} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}