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
 * Port of css3d_panorama from Three.js examples.
 * 360 panorama using CSS3D cube faces.
 *
 * Source: https://threejs.org/examples/css3d_panorama.html
 */

// Create panorama face
const createPanoramaFace = (color: string, size: number) => {
    const element = document.createElement('div')
    element.style.width = `${size}px`
    element.style.height = `${size}px`
    element.style.background = `linear-gradient(135deg, ${color}, ${adjustColor(color, -50)})`
    element.style.opacity = '0.9'
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

// Face colors for the panorama cube
const faceColors = [
    '#e74c3c', // right - red
    '#3498db', // left - blue
    '#2ecc71', // top - green
    '#f39c12', // bottom - orange
    '#9b59b6', // front - purple
    '#1abc9c', // back - teal
]

export const Panorama = () => {
    const css3dRendererRef = $<CSS3DRenderer>()
    const containerRef = $<HTMLDivElement>()
    const panoramaRef = $<THREE.Group>()

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

    // Create panorama cube
    useEffect(() => {
        const group = new Group()
        const size = 1024
        const halfSize = size / 2

        // Create 6 faces of the cube
        const positions: [number, number, number][] = [
            [halfSize, 0, 0],      // right
            [-halfSize, 0, 0],     // left
            [0, halfSize, 0],      // top
            [0, -halfSize, 0],     // bottom
            [0, 0, halfSize],      // front
            [0, 0, -halfSize],     // back
        ]

        const rotations: [number, number, number][] = [
            [0, Math.PI / 2, 0],   // right
            [0, -Math.PI / 2, 0],  // left
            [-Math.PI / 2, 0, 0],  // top
            [Math.PI / 2, 0, 0],   // bottom
            [0, 0, 0],             // front
            [0, Math.PI, 0],       // back
        ]

        for (let i = 0; i < 6; i++) {
            const element = createPanoramaFace(faceColors[i], size)
            const object = new CSS3DObject(element)
            object.position.set(...positions[i])
            object.rotation.set(...rotations[i])
            group.add(object)
        }

        panoramaRef(group)

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
        // Render CSS3D
        const css3dRenderer = $$(css3dRendererRef)
        const scene = state.scene
        const camera = state.camera
        const panorama = $$(panoramaRef)

        if (css3dRenderer && scene && camera && panorama) {
            if (panorama.parent !== scene) {
                scene.add(panorama)
            }
            css3dRenderer.render(scene, camera as THREE.Camera)
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x000000)} />

            <perspectiveCamera fov={75} aspect={window.innerWidth / window.innerHeight} near={1} far={5000} position={[0, 0, 0.1]} />
            <orbitControls enableDamping target={[0, 0, -0.1]} enableZoom={false} />
        </canvas3D>
    )
}

export default Panorama
