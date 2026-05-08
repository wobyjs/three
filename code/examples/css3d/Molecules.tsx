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
 * Port of css3d_molecules from Three.js examples.
 * Demonstrates 3D molecule visualization using CSS3D.
 *
 * Source: https://threejs.org/examples/css3d_molecules.html
 */

// Atom data for a simple molecule (water-like)
const atoms = [
    { element: 'O', color: '#ff4444', radius: 60, x: 0, y: 0, z: 0 },
    { element: 'H', color: '#ffffff', radius: 40, x: -80, y: 60, z: 0 },
    { element: 'H', color: '#ffffff', radius: 40, x: 80, y: 60, z: 0 },
]

const bonds = [
    { from: 0, to: 1 },
    { from: 0, to: 2 },
]

// Create atom element
const createAtomElement = (element: string, color: string, radius: number) => {
    const div = document.createElement('div')
    div.style.width = `${radius * 2}px`
    div.style.height = `${radius * 2}px`
    div.style.borderRadius = '50%'
    div.style.background = `radial-gradient(circle at 30% 30%, ${color}, ${adjustColor(color, -40)})`
    div.style.boxShadow = `0 0 ${radius / 2}px ${color}, inset -${radius / 4}px -${radius / 4}px ${radius / 2}px rgba(0,0,0,0.3)`
    div.style.display = 'flex'
    div.style.alignItems = 'center'
    div.style.justifyContent = 'center'
    div.style.fontSize = `${radius / 2}px`
    div.style.fontWeight = 'bold'
    div.style.color = element === 'H' ? '#333' : '#fff'
    div.textContent = element
    return div
}

// Create bond element
const createBondElement = () => {
    const div = document.createElement('div')
    div.style.width = '20px'
    div.style.height = '100px'
    div.style.background = 'linear-gradient(90deg, #888, #ccc, #888)'
    div.style.borderRadius = '10px'
    return div
}

// Adjust color brightness
const adjustColor = (color: string, amount: number) => {
    const hex = color.replace('#', '')
    const r = Math.max(0, Math.min(255, parseInt(hex.slice(0, 2), 16) + amount))
    const g = Math.max(0, Math.min(255, parseInt(hex.slice(2, 4), 16) + amount))
    const b = Math.max(0, Math.min(255, parseInt(hex.slice(4, 6), 16) + amount))
    return `rgb(${r}, ${g}, ${b})`
}

export const Molecules = () => {
    const css3dRendererRef = $<CSS3DRenderer>()
    const containerRef = $<HTMLDivElement>()
    const moleculeGroupRef = $<THREE.Group>()

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

    // Create molecule
    useEffect(() => {
        const group = new Group()

        // Create atoms
        atoms.forEach(atom => {
            const element = createAtomElement(atom.element, atom.color, atom.radius)
            const object = new CSS3DObject(element)
            object.position.set(atom.x, atom.y, atom.z)
            group.add(object)
        })

        // Create bonds
        bonds.forEach(bond => {
            const fromAtom = atoms[bond.from]
            const toAtom = atoms[bond.to]

            const element = createBondElement()
            const object = new CSS3DObject(element)

            // Position bond between atoms
            const midX = (fromAtom.x + toAtom.x) / 2
            const midY = (fromAtom.y + toAtom.y) / 2
            const midZ = (fromAtom.z + toAtom.z) / 2
            object.position.set(midX, midY, midZ)

            // Rotate bond to connect atoms
            const dx = toAtom.x - fromAtom.x
            const dy = toAtom.y - fromAtom.y
            const dz = toAtom.z - fromAtom.z
            const length = Math.sqrt(dx * dx + dy * dy + dz * dz)
            object.scale.y = length / 100

            // Calculate rotation
            object.rotation.z = Math.atan2(dx, dy)

            group.add(object)
        })

        moleculeGroupRef(group)

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

        const group = $$(moleculeGroupRef)
        if (group) {
            group.rotation.y = time * 0.3
            group.rotation.x = Math.sin(time * 0.2) * 0.3
        }

        // Render CSS3D
        const css3dRenderer = $$(css3dRendererRef)
        const scene = state.scene
        const camera = state.camera

        if (css3dRenderer && scene && camera && group) {
            if (group.parent !== scene) {
                scene.add(group)
            }
            css3dRenderer.render(scene, camera as THREE.Camera)
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x0a0a1a)} />

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={1} far={2000} position={[0, 0, 400]} />
            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default Molecules
