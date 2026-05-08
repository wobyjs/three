/** @jsxImportSource @woby/three */

import { $, $$, useFrame, useEffect, useMemo } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer'
import { Color, Group } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/scenes/Scene'

/**
 * Port of css3d_periodictable from Three.js examples.
 * Interactive periodic table in 3D.
 *
 * Source: https://threejs.org/examples/css3d_periodictable.html
 */

// Periodic table data (simplified)
const elements = [
    { number: 1, symbol: 'H', name: 'Hydrogen', category: 'nonmetal', row: 1, col: 1 },
    { number: 2, symbol: 'He', name: 'Helium', category: 'noble', row: 1, col: 18 },
    { number: 3, symbol: 'Li', name: 'Lithium', category: 'alkali', row: 2, col: 1 },
    { number: 4, symbol: 'Be', name: 'Beryllium', category: 'alkaline', row: 2, col: 2 },
    { number: 5, symbol: 'B', name: 'Boron', category: 'metalloid', row: 2, col: 13 },
    { number: 6, symbol: 'C', name: 'Carbon', category: 'nonmetal', row: 2, col: 14 },
    { number: 7, symbol: 'N', name: 'Nitrogen', category: 'nonmetal', row: 2, col: 15 },
    { number: 8, symbol: 'O', name: 'Oxygen', category: 'nonmetal', row: 2, col: 16 },
    { number: 9, symbol: 'F', name: 'Fluorine', category: 'halogen', row: 2, col: 17 },
    { number: 10, symbol: 'Ne', name: 'Neon', category: 'noble', row: 2, col: 18 },
    { number: 11, symbol: 'Na', name: 'Sodium', category: 'alkali', row: 3, col: 1 },
    { number: 12, symbol: 'Mg', name: 'Magnesium', category: 'alkaline', row: 3, col: 2 },
    { number: 13, symbol: 'Al', name: 'Aluminium', category: 'metal', row: 3, col: 13 },
    { number: 14, symbol: 'Si', name: 'Silicon', category: 'metalloid', row: 3, col: 14 },
    { number: 15, symbol: 'P', name: 'Phosphorus', category: 'nonmetal', row: 3, col: 15 },
    { number: 16, symbol: 'S', name: 'Sulfur', category: 'nonmetal', row: 3, col: 16 },
    { number: 17, symbol: 'Cl', name: 'Chlorine', category: 'halogen', row: 3, col: 17 },
    { number: 18, symbol: 'Ar', name: 'Argon', category: 'noble', row: 3, col: 18 },
    { number: 19, symbol: 'K', name: 'Potassium', category: 'alkali', row: 4, col: 1 },
    { number: 20, symbol: 'Ca', name: 'Calcium', category: 'alkaline', row: 4, col: 2 },
    // Add more elements as needed...
    { number: 26, symbol: 'Fe', name: 'Iron', category: 'transition', row: 4, col: 8 },
    { number: 29, symbol: 'Cu', name: 'Copper', category: 'transition', row: 4, col: 11 },
    { number: 30, symbol: 'Zn', name: 'Zinc', category: 'transition', row: 4, col: 12 },
    { number: 79, symbol: 'Au', name: 'Gold', category: 'transition', row: 6, col: 11 },
    { number: 80, symbol: 'Hg', name: 'Mercury', category: 'transition', row: 6, col: 12 },
]

// Category colors
const categoryColors: Record<string, string> = {
    alkali: '#ff6b6b',
    alkaline: '#ffa94d',
    transition: '#ffd43b',
    metal: '#69db7c',
    metalloid: '#4dabf7',
    nonmetal: '#748ffc',
    halogen: '#da77f2',
    noble: '#f06595',
}

// Create element card
const createElementCard = (element: typeof elements[0]) => {
    const color = categoryColors[element.category] || '#666'

    const card = document.createElement('div')
    card.style.width = '100px'
    card.style.height = '100px'
    card.style.background = `linear-gradient(135deg, ${color}, ${adjustColor(color, -30)})`
    card.style.borderRadius = '8px'
    card.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)'
    card.style.display = 'flex'
    card.style.flexDirection = 'column'
    card.style.alignItems = 'center'
    card.style.justifyContent = 'center'
    card.style.cursor = 'pointer'
    card.style.transition = 'transform 0.2s'

    const number = document.createElement('div')
    number.style.fontSize = '12px'
    number.style.color = 'rgba(255,255,255,0.7)'
    number.textContent = String(element.number)
    card.appendChild(number)

    const symbol = document.createElement('div')
    symbol.style.fontSize = '32px'
    symbol.style.fontWeight = 'bold'
    symbol.style.color = '#fff'
    symbol.textContent = element.symbol
    card.appendChild(symbol)

    const name = document.createElement('div')
    name.style.fontSize = '10px'
    name.style.color = 'rgba(255,255,255,0.8)'
    name.textContent = element.name
    card.appendChild(name)

    return card
}

// Adjust color brightness
const adjustColor = (color: string, amount: number) => {
    const hex = color.replace('#', '')
    const r = Math.max(0, Math.min(255, parseInt(hex.slice(0, 2), 16) + amount))
    const g = Math.max(0, Math.min(255, parseInt(hex.slice(2, 4), 16) + amount))
    const b = Math.max(0, Math.min(255, parseInt(hex.slice(4, 6), 16) + amount))
    return `rgb(${r}, ${g}, ${b})`
}

export const Periodictable = () => {
    const css3dRendererRef = $<CSS3DRenderer>()
    const containerRef = $<HTMLDivElement>()
    const tableRef = $<THREE.Group>()

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

    // Create periodic table
    useEffect(() => {
        const group = new Group()
        const cellSize = 120
        const offsetX = -((18 * cellSize) / 2)
        const offsetY = ((7 * cellSize) / 2)

        elements.forEach(element => {
            const card = createElementCard(element)
            const object = new CSS3DObject(card)

            object.position.set(
                offsetX + element.col * cellSize,
                offsetY - element.row * cellSize,
                0
            )

            group.add(object)
        })

        tableRef(group)

        return () => {
            group.traverse((child) => {
                if ((child as CSS3DObject).isCSS3DObject && (child as CSS3DObject).element) {
                    (child as CSS3DObject).element.remove()
                }
            })
        }
    }, [])

    // Animation
    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0

        // Subtle wave animation
        const table = $$(tableRef)
        if (table) {
            table.children.forEach((child, i) => {
                if ((child as CSS3DObject).isCSS3DObject) {
                    child.position.z = Math.sin(time * 2 + i * 0.1) * 20
                }
            })
        }

        // Render CSS3D
        const css3dRenderer = $$(css3dRendererRef)
        const scene = state.scene
        const camera = state.camera

        if (css3dRenderer && scene && camera && table) {
            if (table.parent !== scene) {
                scene.add(table)
            }
            css3dRenderer.render(scene, camera as THREE.Camera)
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x0a0a1a)} />

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={1} far={5000} position={[0, 0, 1500]} />
            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default Periodictable
