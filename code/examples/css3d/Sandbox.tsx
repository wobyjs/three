/** @jsxImportSource @woby/three */

import { $, $$, useFrame, useEffect, useMemo } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { CSS3DRenderer, CSS3DObject, CSS3DSprite } from 'three/examples/jsm/renderers/CSS3DRenderer'
import { Color, Group } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/scenes/Scene'

/**
 * Port of css3d_sandbox from Three.js examples.
 * CSS3D playground demonstrating various CSS3D features.
 *
 * Source: https://threejs.org/examples/css3d_sandbox.html
 */

// Create a CSS3D card
const createCard = (text: string, color: string, width: number, height: number) => {
    const element = document.createElement('div')
    element.style.width = `${width}px`
    element.style.height = `${height}px`
    element.style.background = `linear-gradient(135deg, ${color}, ${adjustColor(color, -30)})`
    element.style.borderRadius = '12px'
    element.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)'
    element.style.display = 'flex'
    element.style.flexDirection = 'column'
    element.style.alignItems = 'center'
    element.style.justifyContent = 'center'
    element.style.padding = '20px'
    element.style.cursor = 'pointer'

    const title = document.createElement('div')
    title.style.fontSize = '18px'
    title.style.fontWeight = 'bold'
    title.style.color = '#fff'
    title.style.textShadow = '0 2px 4px rgba(0,0,0,0.3)'
    title.textContent = text
    element.appendChild(title)

    return element
}

// Create a CSS3D sprite
const createSprite = (emoji: string) => {
    const element = document.createElement('div')
    element.style.fontSize = '48px'
    element.textContent = emoji
    return element
}

// Adjust color brightness
const adjustColor = (color: string, amount: number) => {
    const hex = color.replace('#', '')
    const r = Math.max(0, Math.min(255, parseInt(hex.slice(0, 2), 16) + amount))
    const g = Math.max(0, Math.min(255, parseInt(hex.slice(2, 4), 16) + amount))
    const b = Math.max(0, Math.min(255, parseInt(hex.slice(4, 6), 16) + amount))
    return `rgb(${r}, ${g}, ${b})`
}

export const Sandbox = () => {
    const css3dRendererRef = $<CSS3DRenderer>()
    const containerRef = $<HTMLDivElement>()
    const objectsRef = $<(CSS3DObject | CSS3DSprite)[]>([])

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

    // Create objects
    useEffect(() => {
        const objects: (CSS3DObject | CSS3DSprite)[] = []

        // Create rotating cards
        const cardColors = ['#e74c3c', '#3498db', '#2ecc71', '#f39c12', '#9b59b6', '#1abc9c']
        const cardLabels = ['HTML', 'CSS', 'JS', 'WebGL', 'Three.js', 'CSS3D']

        for (let i = 0; i < 6; i++) {
            const angle = (i / 6) * Math.PI * 2
            const radius = 250

            const element = createCard(cardLabels[i], cardColors[i], 120, 80)
            const object = new CSS3DObject(element)
            object.position.set(
                Math.cos(angle) * radius,
                Math.sin(i * 0.5) * 50,
                Math.sin(angle) * radius
            )
            object.rotation.y = -angle + Math.PI / 2
            objects.push(object)
        }

        // Create sprites (billboards)
        const emojis = ['🚀', '⭐', '🎯', '💡', '🎨', '🔥']
        for (let i = 0; i < 6; i++) {
            const angle = (i / 6) * Math.PI * 2 + Math.PI / 6
            const radius = 350

            const element = createSprite(emojis[i])
            const sprite = new CSS3DSprite(element)
            sprite.position.set(
                Math.cos(angle) * radius,
                100,
                Math.sin(angle) * radius
            )
            objects.push(sprite)
        }

        objectsRef(objects)

        return () => {
            objects.forEach(obj => {
                if (obj.element.parentNode) {
                    obj.element.remove()
                }
            })
        }
    }, [])

    // Animation
    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0

        // Animate objects
        const objects = $$(objectsRef)
        objects.forEach((obj, i) => {
            if (obj) {
                // Rotate around center
                const baseAngle = (i % 6) / 6 * Math.PI * 2
                const angle = time * 0.3 + baseAngle
                const radius = i < 6 ? 250 : 350
                const yOffset = i < 6 ? Math.sin(i * 0.5) * 50 : 100

                obj.position.x = Math.cos(angle) * radius
                obj.position.z = Math.sin(angle) * radius
                obj.position.y = yOffset + Math.sin(time * 2 + i) * 20

                // Face camera for objects, sprites auto-face
                if (obj instanceof CSS3DObject && !(obj instanceof CSS3DSprite)) {
                    obj.rotation.y = -angle + Math.PI / 2
                }
            }
        })

        // Render CSS3D
        const css3dRenderer = $$(css3dRendererRef)
        const scene = state.scene
        const camera = state.camera

        if (css3dRenderer && scene && camera) {
            objects.forEach(obj => {
                if (obj && obj.parent !== scene) {
                    scene.add(obj)
                }
            })
            css3dRenderer.render(scene, camera as THREE.Camera)
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x0d0d1a)} />

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={1} far={2000} position={[0, 200, 600]} />
            <orbitControls enableDamping target={[0, 50, 0]} />
        </canvas3D>
    )
}

export default Sandbox
