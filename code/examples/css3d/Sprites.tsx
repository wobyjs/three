/** @jsxImportSource @woby/three */

import { $, $$, useFrame, useEffect, useMemo } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { CSS3DRenderer, CSS3DSprite } from 'three/examples/jsm/renderers/CSS3DRenderer'
import { Color, Group } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/scenes/Scene'

/**
 * Port of css3d_sprites from Three.js examples.
 * CSS3D sprites that always face the camera.
 *
 * Source: https://threejs.org/examples/css3d_sprites.html
 */

// Create sprite element
const createSpriteElement = (emoji: string, size: number) => {
    const element = document.createElement('div')
    element.style.fontSize = `${size}px`
    element.style.lineHeight = '1'
    element.style.textShadow = '0 2px 10px rgba(0,0,0,0.5)'
    element.style.cursor = 'pointer'
    element.textContent = emoji
    return element
}

// Sprite data
const spriteData = [
    { emoji: '🌟', size: 64 },
    { emoji: '🚀', size: 72 },
    { emoji: '🎯', size: 56 },
    { emoji: '💡', size: 68 },
    { emoji: '🎨', size: 60 },
    { emoji: '🔥', size: 64 },
    { emoji: '⭐', size: 52 },
    { emoji: '🎪', size: 58 },
    { emoji: '🎭', size: 66 },
    { emoji: '🎸', size: 62 },
    { emoji: '🎮', size: 70 },
    { emoji: '🌈', size: 54 },
]

export const Sprites = () => {
    const css3dRendererRef = $<CSS3DRenderer>()
    const containerRef = $<HTMLDivElement>()
    const spritesRef = $<CSS3DSprite[]>([])

    // Initialize CSS3D renderer
    useEffect(() => {
        const container = document.createElement('div')
        container.style.position = 'absolute'
        container.style.top = '0'
        container.style.left = '0'
        document.body.appendChild(container)
        containerRef(container)

        const css3dRenderer = new CSS3DRenderer()
        css3dRenderer.setSize(window.innerWidth, window.innerHeight)
        css3dRenderer.domElement.style.position = 'absolute'
        css3dRenderer.domElement.style.top = '0px'
        container.appendChild(css3dRenderer.domElement)
        css3dRendererRef(css3dRenderer)

        const handleResize = () => {
            css3dRenderer.setSize(window.innerWidth, window.innerHeight)
        }
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
            container.remove()
        }
    }, [])

    // Create sprites
    useEffect(() => {
        const sprites: CSS3DSprite[] = []

        spriteData.forEach((data, i) => {
            const element = createSpriteElement(data.emoji, data.size)
            const sprite = new CSS3DSprite(element)

            // Arrange in a sphere
            const phi = Math.acos(-1 + (2 * i) / spriteData.length)
            const theta = Math.sqrt(spriteData.length * Math.PI) * phi
            const radius = 400

            sprite.position.set(
                radius * Math.cos(theta) * Math.sin(phi),
                radius * Math.sin(theta) * Math.sin(phi),
                radius * Math.cos(phi)
            )

            sprites.push(sprite)
        })

        spritesRef(sprites)

        return () => {
            sprites.forEach(sprite => {
                if (sprite.element.parentNode) {
                    sprite.element.remove()
                }
            })
        }
    }, [])

    // Animation
    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0

        // Animate sprites
        const sprites = $$(spritesRef)
        sprites.forEach((sprite, i) => {
            if (sprite) {
                // Gentle floating motion
                sprite.position.y += Math.sin(time * 2 + i) * 0.5

                // Optional: rotate sprites
                sprite.rotation2D = time * 0.5 + i * 0.1
            }
        })

        // Render CSS3D
        const css3dRenderer = $$(css3dRendererRef)
        const scene = state.scene
        const camera = state.camera

        if (css3dRenderer && scene && camera) {
            sprites.forEach(sprite => {
                if (sprite && sprite.parent !== scene) {
                    scene.add(sprite)
                }
            })
            css3dRenderer.render(scene, camera as THREE.Camera)
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x0d0d1a)} />

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={1} far={2000} position={[0, 0, 600]} />
            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default Sprites
