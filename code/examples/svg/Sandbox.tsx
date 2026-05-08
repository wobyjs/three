/** @jsxImportSource @woby/three */

import { $, $$, useFrame, useEffect, useMemo } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { SVGRenderer, SVGObject } from 'three/examples/jsm/renderers/SVGRenderer'
import { Color, Group, Mesh, BoxGeometry, MeshBasicMaterial, SphereGeometry, TorusGeometry } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/scenes/Scene'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/TorusGeometry'
import '@woby/three/src/materials/MeshBasicMaterial'

/**
 * Port of svg_sandbox from Three.js examples.
 * SVG playground demonstrating various SVG rendering features.
 *
 * Source: https://threejs.org/examples/svg_sandbox.html
 */

// Shape colors
const shapeColors = [
    0xff6b6b, 0x4ecdc4, 0x45b7d1, 0x96ceb4, 0xffeaa7,
    0xe74c3c, 0x3498db, 0x2ecc71, 0xf39c12, 0x9b59b6,
]

export const Sandbox = () => {
    const svgRendererRef = $<SVGRenderer>()
    const containerRef = $<HTMLDivElement>()
    const shapesRef = $<THREE.Mesh[]>([])

    // Initialize SVG renderer
    useEffect(() => {
        const container = document.createElement('div')
        container.style.position = 'absolute'
        container.style.top = '0'
        container.style.left = '0'
        document.body.appendChild(container)
        containerRef(container)

        const svgRenderer = new SVGRenderer()
        svgRenderer.setSize(window.innerWidth, window.innerHeight)
        svgRenderer.setQuality('high')
        container.appendChild(svgRenderer.domElement)
        svgRendererRef(svgRenderer)

        const handleResize = () => {
            svgRenderer.setSize(window.innerWidth, window.innerHeight)
        }
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
            container.remove()
        }
    }, [])

    // Create shapes
    useEffect(() => {
        const shapes: THREE.Mesh[] = []

        // Create boxes
        for (let i = 0; i < 3; i++) {
            const geometry = new BoxGeometry(50, 50, 50)
            const material = new MeshBasicMaterial({
                color: shapeColors[i],
                wireframe: i % 2 === 0,
            })
            const mesh = new Mesh(geometry, material)
            mesh.position.set(-100 + i * 100, 50, 0)
            shapes.push(mesh)
        }

        // Create spheres
        for (let i = 0; i < 3; i++) {
            const geometry = new SphereGeometry(30, 16, 16)
            const material = new MeshBasicMaterial({
                color: shapeColors[i + 3],
                wireframe: i % 2 === 0,
            })
            const mesh = new Mesh(geometry, material)
            mesh.position.set(-100 + i * 100, -50, 0)
            shapes.push(mesh)
        }

        // Create torus
        for (let i = 0; i < 3; i++) {
            const geometry = new TorusGeometry(25, 10, 8, 24)
            const material = new MeshBasicMaterial({
                color: shapeColors[i + 6],
                wireframe: i % 2 === 0,
            })
            const mesh = new Mesh(geometry, material)
            mesh.position.set(-100 + i * 100, 0, 100)
            shapes.push(mesh)
        }

        shapesRef(shapes)

        return () => {
            shapes.forEach(mesh => {
                mesh.geometry.dispose()
                ;(mesh.material as THREE.Material).dispose()
            })
        }
    }, [])

    // Animation
    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0

        // Animate shapes
        const shapes = $$(shapesRef)
        shapes.forEach((mesh, i) => {
            if (mesh) {
                mesh.rotation.x = time * 0.5 + i * 0.1
                mesh.rotation.y = time * 0.3 + i * 0.2
            }
        })

        // Render SVG
        const svgRenderer = $$(svgRendererRef)
        const scene = state.scene
        const camera = state.camera

        if (svgRenderer && scene && camera) {
            shapes.forEach(mesh => {
                if (mesh && mesh.parent !== scene) {
                    scene.add(mesh)
                }
            })
            svgRenderer.render(scene, camera as THREE.Camera)
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)} />

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={1} far={2000} position={[0, 0, 400]} />
            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default Sandbox
