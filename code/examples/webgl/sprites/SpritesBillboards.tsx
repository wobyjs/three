/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_sprites_billboards

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const SpritesBillboards = () => {
    const { scene, camera } = useThree()

    useEffect(() => {
        const sprites: THREE.Sprite[] = []

        for (let i = 0; i < 100; i++) {
            const canvas = document.createElement('canvas')
            canvas.width = 64
            canvas.height = 64
            const ctx = canvas.getContext('2d')!

            ctx.fillStyle = `hsl(${Math.random() * 360}, 80%, 60%)`
            ctx.beginPath()
            ctx.arc(32, 32, 30, 0, Math.PI * 2)
            ctx.fill()

            const texture = new THREE.CanvasTexture(canvas)
            const material = new THREE.SpriteMaterial({ map: texture })
            const sprite = new THREE.Sprite(material)

            sprite.position.set(
                (Math.random() - 0.5) * 30,
                Math.random() * 15,
                (Math.random() - 0.5) * 30
            )
            sprite.scale.setScalar(1 + Math.random() * 2)

            scene.add(sprite)
            sprites.push(sprite)
        }

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()

            sprites.forEach((sprite, i) => {
                sprite.position.y += Math.sin(t + i * 0.1) * 0.01
                sprite.material.opacity = 0.6 + Math.sin(t * 2 + i) * 0.2
            })

            // Billboard effect - sprites always face camera
            camera.updateMatrixWorld()
        }
        animate()

        return () => {
            sprites.forEach(sprite => {
                scene.remove(sprite)
                ;(sprite.material as THREE.SpriteMaterial).map?.dispose()
                sprite.material.dispose()
            })
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 5, 20]} />
            <scene />
            <orbitControls />
        </canvas3D>
    )
}
