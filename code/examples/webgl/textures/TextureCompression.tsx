/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_texture_compression

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const TextureCompression = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Create procedural textures
        const createTexture = (color: number, label: string) => {
            const canvas = document.createElement('canvas')
            canvas.width = 256
            canvas.height = 256
            const ctx = canvas.getContext('2d')!
            ctx.fillStyle = `#${color.toString(16).padStart(6, '0')}`
            ctx.fillRect(0, 0, 256, 256)
            ctx.fillStyle = '#ffffff'
            ctx.font = '48px Arial'
            ctx.textAlign = 'center'
            ctx.fillText(label, 128, 140)
            return new THREE.CanvasTexture(canvas)
        }

        const textures = [
            createTexture(0xff0000, 'No Compress'),
        ]

        const geometry = new THREE.BoxGeometry(2, 2, 2)
        const materials = textures.map(tex => new THREE.MeshBasicMaterial({ map: tex }))

        const mesh = new THREE.Mesh(geometry, materials[0])
        scene.add(mesh)

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
            materials.forEach(m => m.dispose())
            textures.forEach(t => t.dispose())
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 0, 8]} />
            <scene>
                <ambientLight intensity={0.5} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}