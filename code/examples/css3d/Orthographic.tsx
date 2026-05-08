/** @jsxImportSource @woby/three */

import { $, $$, useFrame, useEffect, useMemo } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer'
import { Color, Group } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/OrthographicCamera'
import '@woby/three/src/scenes/Scene'

/**
 * Port of css3d_orthographic from Three.js examples.
 * Demonstrates orthographic CSS3D camera.
 *
 * Source: https://threejs.org/examples/css3d_orthographic.html
 */

// Create a CSS3D panel
const createPanel = (text: string, color: string, width: number, height: number) => {
    const element = document.createElement('div')
    element.style.width = `${width}px`
    element.style.height = `${height}px`
    element.style.background = color
    element.style.border = '2px solid rgba(255,255,255,0.3)'
    element.style.borderRadius = '8px'
    element.style.display = 'flex'
    element.style.alignItems = 'center'
    element.style.justifyContent = 'center'
    element.style.fontSize = '24px'
    element.style.fontFamily = 'sans-serif'
    element.style.color = '#fff'
    element.style.textShadow = '0 2px 4px rgba(0,0,0,0.5)'
    element.textContent = text
    return element
}

export const Orthographic = () => {
    const css3dRendererRef = $<CSS3DRenderer>()
    const containerRef = $<HTMLDivElement>()
    const panelsRef = $<CSS3DObject[]>([])

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

    // Create panels
    useEffect(() => {
        const panels: CSS3DObject[] = []
        const colors = ['#e74c3c', '#3498db', '#2ecc71', '#f39c12', '#9b59b6', '#1abc9c']
        const labels = ['Panel A', 'Panel B', 'Panel C', 'Panel D', 'Panel E', 'Panel F']

        // Create grid of panels
        for (let i = 0; i < 6; i++) {
            const row = Math.floor(i / 3)
            const col = i % 3

            const element = createPanel(labels[i], colors[i], 200, 150)
            const object = new CSS3DObject(element)
            object.position.set(
                col * 250 - 250,
                row * -200 + 100,
                0
            )
            panels.push(object)
        }

        panelsRef(panels)

        return () => {
            panels.forEach(panel => {
                if (panel.element.parentNode) {
                    panel.element.remove()
                }
            })
        }
    }, [])

    // Animation
    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0

        // Animate panels
        const panels = $$(panelsRef)
        panels.forEach((panel, i) => {
            if (panel) {
                panel.rotation.y = Math.sin(time + i * 0.5) * 0.1
                panel.position.z = Math.sin(time * 2 + i) * 20
            }
        })

        // Render CSS3D
        const css3dRenderer = $$(css3dRendererRef)
        const scene = state.scene
        const camera = state.camera

        if (css3dRenderer && scene && camera) {
            panels.forEach(panel => {
                if (panel && panel.parent !== scene) {
                    scene.add(panel)
                }
            })
            css3dRenderer.render(scene, camera as THREE.Camera)
        }
    })

    // Calculate orthographic camera bounds
    const aspect = window.innerWidth / window.innerHeight
    const frustumSize = 600

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)} />

            <orthographicCamera
                left={frustumSize * aspect / -2}
                right={frustumSize * aspect / 2}
                top={frustumSize / 2}
                bottom={frustumSize / -2}
                near={1}
                far={2000}
                position={[0, 0, 500]}
            />
            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default Orthographic
