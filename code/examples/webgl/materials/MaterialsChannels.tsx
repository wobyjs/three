/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_materials_channels

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const MaterialsChannels = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Create texture with channel visualization
        const geometry = new THREE.BoxGeometry(2, 2, 2)

        // Create a simple texture
        const canvas = document.createElement('canvas')
        canvas.width = 256
        canvas.height = 256
        const ctx = canvas.getContext('2d')!

        // Draw gradient
        const gradient = ctx.createLinearGradient(0, 0, 256, 256)
        gradient.addColorStop(0, 'red')
        gradient.addColorStop(0.5, 'green')
        gradient.addColorStop(1, 'blue')
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, 256, 256)

        const texture = new THREE.CanvasTexture(canvas)

        // Create materials for each channel
        const materials = [
            new THREE.MeshBasicMaterial({ color: 0xff0000 }), // Red channel
            new THREE.MeshBasicMaterial({ color: 0x00ff00 }), // Green channel
            new THREE.MeshBasicMaterial({ color: 0x0000ff }), // Blue channel
            new THREE.MeshBasicMaterial({ map: texture }), // Full texture
        ]

        const meshes = materials.map((mat, i) => {
            const mesh = new THREE.Mesh(geometry.clone(), mat)
            mesh.position.x = (i - 1.5) * 3
            scene.add(mesh)
            return mesh
        })

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            meshes.forEach((mesh, i) => {
                mesh.rotation.x = t * 0.5
                mesh.rotation.y = t * 0.3
            })
        }
        animate()

        return () => {
            meshes.forEach(mesh => {
                scene.remove(mesh)
                mesh.geometry.dispose()
                mesh.material.dispose()
            })
            texture.dispose()
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 0, 10]} />
            <scene>
                <ambientLight intensity={0.5} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}