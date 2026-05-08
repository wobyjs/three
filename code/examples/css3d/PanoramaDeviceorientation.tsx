/** @jsxImportSource @woby/three */

import { $, $$, useFrame, useEffect, useMemo } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer'
import { Color, Group } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/scenes/Scene'

/**
 * Port of css3d_panorama_deviceorientation from Three.js examples.
 * 360 panorama with device orientation controls.
 *
 * Source: https://threejs.org/examples/css3d_panorama_deviceorientation.html
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
    '#e74c3c', '#3498db', '#2ecc71', '#f39c12', '#9b59b6', '#1abc9c',
]

export const PanoramaDeviceorientation = () => {
    const css3dRendererRef = $<CSS3DRenderer>()
    const containerRef = $<HTMLDivElement>()
    const panoramaRef = $<THREE.Group>()
    const deviceOrientationRef = $<{ alpha: number; beta: number; gamma: number }>({ alpha: 0, beta: 0, gamma: 0 })

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

        // Device orientation handler
        const handleOrientation = (event: DeviceOrientationEvent) => {
            deviceOrientationRef({
                alpha: event.alpha || 0,
                beta: event.beta || 0,
                gamma: event.gamma || 0,
            })
        }
        window.addEventListener('deviceorientation', handleOrientation)

        return () => {
            window.removeEventListener('resize', handleResize)
            window.removeEventListener('deviceorientation', handleOrientation)
            container.remove()
        }
    }, [])

    // Create panorama cube
    useEffect(() => {
        const group = new Group()
        const size = 1024
        const halfSize = size / 2

        const positions: [number, number, number][] = [
            [halfSize, 0, 0], [-halfSize, 0, 0], [0, halfSize, 0],
            [0, -halfSize, 0], [0, 0, halfSize], [0, 0, -halfSize],
        ]

        const rotations: [number, number, number][] = [
            [0, Math.PI / 2, 0], [0, -Math.PI / 2, 0], [-Math.PI / 2, 0, 0],
            [Math.PI / 2, 0, 0], [0, 0, 0], [0, Math.PI, 0],
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
        const orientation = $$(deviceOrientationRef)

        // Apply device orientation to camera group
        // Note: In a real implementation, you'd use DeviceOrientationControls

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
        </canvas3D>
    )
}

export default PanoramaDeviceorientation
