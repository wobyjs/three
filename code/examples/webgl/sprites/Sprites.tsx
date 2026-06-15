/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_sprites

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const Sprites = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Sprites demo
        const sprites: THREE.Sprite[] = []

        // Create sprite texture
        const canvas = document.createElement('canvas')
        canvas.width = 128
        canvas.height = 128
        const ctx = canvas.getContext('2d')!

        // Draw circle
        const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64)
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)')
        gradient.addColorStop(0.5, 'rgba(255, 200, 100, 1)')
        gradient.addColorStop(1, 'rgba(255, 100, 50, 0)')
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, 128, 128)

        const texture = new THREE.CanvasTexture(canvas)

        // Create sprites
        for (let i = 0; i < 50; i++) {
            const material = new THREE.SpriteMaterial({
                map: texture,
                color: new THREE.Color().setHSL(Math.random(), 1, 0.5),
                transparent: true,
            })

            const sprite = new THREE.Sprite(material)
            sprite.position.set(
                (Math.random() - 0.5) * 20,
                Math.random() * 10,
                (Math.random() - 0.5) * 20
            )
            sprite.scale.setScalar(0.5 + Math.random() * 1.5)
            scene.add(sprite)
            sprites.push(sprite)
        }

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()

            sprites.forEach((sprite, i) => {
                sprite.position.y += Math.sin(t + i) * 0.02
            })
        }
        animate()

        return () => {
            sprites.forEach(sprite => scene.remove(sprite))
            texture.dispose()
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 5, 20]} />
            <scene>
                <ambientLight intensity={0.5} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
