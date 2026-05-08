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
 * Port of css3d_youtube from Three.js examples.
 * YouTube video embedded in 3D space.
 *
 * Source: https://threejs.org/examples/css3d_youtube.html
 */

// Create YouTube iframe element
const createYouTubeElement = (videoId: string, width: number, height: number) => {
    const container = document.createElement('div')
    container.style.width = `${width}px`
    container.style.height = `${height}px`
    container.style.background = '#000'
    container.style.borderRadius = '12px'
    container.style.overflow = 'hidden'
    container.style.boxShadow = '0 20px 60px rgba(0,0,0,0.5)'

    const iframe = document.createElement('iframe')
    iframe.style.width = '100%'
    iframe.style.height = '100%'
    iframe.src = `https://www.youtube.com/embed/${videoId}`
    iframe.frameBorder = '0'
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
    iframe.allowFullscreen = true

    container.appendChild(iframe)
    return container
}

// Create placeholder for demo (since actual YouTube requires network)
const createVideoPlaceholder = (title: string, width: number, height: number) => {
    const container = document.createElement('div')
    container.style.width = `${width}px`
    container.style.height = `${height}px`
    container.style.background = 'linear-gradient(135deg, #1a1a2e, #16213e)'
    container.style.borderRadius = '12px'
    container.style.overflow = 'hidden'
    container.style.boxShadow = '0 20px 60px rgba(0,0,0,0.5)'
    container.style.display = 'flex'
    container.style.flexDirection = 'column'
    container.style.alignItems = 'center'
    container.style.justifyContent = 'center'
    container.style.cursor = 'pointer'

    const playButton = document.createElement('div')
    playButton.style.width = '80px'
    playButton.style.height = '80px'
    playButton.style.background = 'rgba(255,0,0,0.9)'
    playButton.style.borderRadius = '50%'
    playButton.style.display = 'flex'
    playButton.style.alignItems = 'center'
    playButton.style.justifyContent = 'center'
    playButton.style.marginBottom = '20px'

    const triangle = document.createElement('div')
    triangle.style.width = '0'
    triangle.style.height = '0'
    triangle.style.borderLeft = '30px solid white'
    triangle.style.borderTop = '20px solid transparent'
    triangle.style.borderBottom = '20px solid transparent'
    triangle.style.marginLeft = '8px'
    playButton.appendChild(triangle)

    container.appendChild(playButton)

    const label = document.createElement('div')
    label.style.color = '#fff'
    label.style.fontSize = '18px'
    label.style.fontFamily = 'sans-serif'
    label.textContent = title
    container.appendChild(label)

    return container
}

// Video data
const videos = [
    { id: 'dQw4w9WgXcQ', title: 'Video 1', x: -300, y: 0, z: 0, ry: Math.PI / 4 },
    { id: 'jNQXAC9IVRw', title: 'Video 2', x: 300, y: 0, z: 0, ry: -Math.PI / 4 },
    { id: '9bZkp7q19f0', title: 'Video 3', x: 0, y: 0, z: -400, ry: 0 },
]

export const Youtube = () => {
    const css3dRendererRef = $<CSS3DRenderer>()
    const containerRef = $<HTMLDivElement>()
    const videoObjectsRef = $<CSS3DObject[]>([])

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

    // Create video objects
    useEffect(() => {
        const objects: CSS3DObject[] = []
        const width = 480
        const height = 270

        videos.forEach(video => {
            // Use placeholder for demo (replace with createYouTubeElement for real videos)
            const element = createVideoPlaceholder(video.title, width, height)
            const object = new CSS3DObject(element)
            object.position.set(video.x, video.y, video.z)
            object.rotation.y = video.ry
            objects.push(object)
        })

        videoObjectsRef(objects)

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

        // Subtle floating animation
        const objects = $$(videoObjectsRef)
        objects.forEach((obj, i) => {
            if (obj) {
                obj.position.y = Math.sin(time + i * 2) * 20
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
            <scene background={new Color(0x0a0a1a)} />

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={1} far={2000} position={[0, 100, 600]} />
            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default Youtube
