/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_sprites_nodes

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const SpritesNodes = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Sprites with custom shader
        const sprites: THREE.Sprite[] = []

        for (let i = 0; i < 30; i++) {
            const material = new THREE.SpriteMaterial({
                color: new THREE.Color().setHSL(i / 30, 1, 0.5),
                transparent: true,
                opacity: 0.8,
            })

            const sprite = new THREE.Sprite(material)
            sprite.position.set(
                (Math.random() - 0.5) * 15,
                Math.random() * 10,
                (Math.random() - 0.5) * 15
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
                sprite.position.y = 5 + Math.sin(t + i * 0.5) * 3
                sprite.material.opacity = 0.5 + Math.sin(t * 2 + i) * 0.3
            })
        }
        animate()

        return () => {
            sprites.forEach(sprite => {
                scene.remove(sprite)
                sprite.material.dispose()
            })
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
