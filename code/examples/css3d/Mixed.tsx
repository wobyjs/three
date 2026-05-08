/** @jsxImportSource @woby/three */

import { $, $$, useFrame, useEffect, useMemo } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer'
import { Color } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/materials/MeshBasicMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of css3d_mixed from Three.js examples.
 * Demonstrates mixed WebGL and CSS3D rendering.
 *
 * Source: https://threejs.org/examples/css3d_mixed.html
 */

export const Mixed = () => {
    const css3dRendererRef = $<CSS3DRenderer>()
    const containerRef = $<HTMLDivElement>()
    const css3dObjectsRef = $<CSS3DObject[]>([])

    // Initialize CSS3D renderer
    useEffect(() => {
        const container = document.createElement('div')
        container.style.position = 'absolute'
        container.style.top = '0'
        container.style.left = '0'
        container.style.pointerEvents = 'none'
        document.body.appendChild(container)
        containerRef(container)

        const css3dRenderer = new CSS3DRenderer()
        css3dRenderer.setSize(window.innerWidth, window.innerHeight)
        css3dRenderer.domElement.style.position = 'absolute'
        css3dRenderer.domElement.style.top = '0px'
        css3dRenderer.domElement.style.pointerEvents = 'none'
        container.appendChild(css3dRenderer.domElement)
        css3dRendererRef(css3dRenderer)

        // Handle resize
        const handleResize = () => {
            css3dRenderer.setSize(window.innerWidth, window.innerHeight)
        }
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
            container.remove()
        }
    }, [])

    // Create CSS3D objects
    const createCSS3DObject = (width: number, height: number, color: string, x: number, y: number, z: number) => {
        const element = document.createElement('div')
        element.style.width = `${width}px`
        element.style.height = `${height}px`
        element.style.background = color
        element.style.border = '1px solid white'
        element.style.opacity = '0.8'
        element.style.boxShadow = '0 0 10px rgba(0,255,255,0.5)'

        const object = new CSS3DObject(element)
        object.position.set(x, y, z)
        return object
    }

    // Create CSS3D panel grid
    useEffect(() => {
        const objects: CSS3DObject[] = []
        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dfe6e9']

        for (let i = 0; i < 6; i++) {
            const angle = (i / 6) * Math.PI * 2
            const radius = 300
            const obj = createCSS3DObject(
                200, 150,
                colors[i],
                Math.cos(angle) * radius,
                0,
                Math.sin(angle) * radius
            )
            obj.rotation.y = -angle + Math.PI / 2
            objects.push(obj)
        }

        css3dObjectsRef(objects)

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

        // Rotate CSS3D objects around center
        const objects = $$(css3dObjectsRef)
        objects.forEach((obj, i) => {
            if (obj) {
                obj.rotation.y = time * 0.5 + (i / 6) * Math.PI * 2
                const angle = time * 0.5 + (i / 6) * Math.PI * 2
                obj.position.x = Math.cos(angle) * 300
                obj.position.z = Math.sin(angle) * 300
            }
        })

        // Render CSS3D
        const css3dRenderer = $$(css3dRendererRef)
        const scene = state.scene
        const camera = state.camera

        if (css3dRenderer && scene && camera) {
            // Add CSS3D objects to scene if not already added
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
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={1} />

                {/* Center sphere (WebGL) */}
                <mesh>
                    <sphereGeometry args={[50, 32, 32]} />
                    <meshStandardMaterial color={0x4fc3f7} metalness={0.5} roughness={0.2} />
                </mesh>

                {/* CSS3D panels are added dynamically */}
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={1} far={2000} position={[0, 100, 600]} />
            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default Mixed
