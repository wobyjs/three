/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_materials_texture_guid

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const MaterialsTextureGUID = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Texture with unique GUID/uuid
        const geometry = new THREE.BoxGeometry(2, 2, 2)

        // Create texture
        const canvas = document.createElement('canvas')
        canvas.width = 256
        canvas.height = 256
        const ctx = canvas.getContext('2d')!
        ctx.fillStyle = '#4488ff'
        ctx.fillRect(0, 0, 256, 256)
        ctx.fillStyle = '#ffffff'
        ctx.font = '24px monospace'
        ctx.fillText('Texture ID:', 20, 50)
        ctx.fillText('GUID Demo', 20, 100)

        const texture = new THREE.CanvasTexture(canvas)
        const textureId = texture.uuid // Unique ID for this texture

        const material = new THREE.MeshStandardMaterial({ map: texture })
        const mesh = new THREE.Mesh(geometry, material)
        scene.add(mesh)

        // Display texture ID
        console.log('Texture GUID:', textureId)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            mesh.rotation.x = t * 0.2
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
            <perspectiveCamera position={[0, 0, 8]} />
            <scene>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}