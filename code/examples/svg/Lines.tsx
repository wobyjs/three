/** @jsxImportSource @woby/three */

import { $, $$, useFrame, useEffect, useMemo } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { SVGRenderer, SVGObject } from 'three/examples/jsm/renderers/SVGRenderer'
import { Color, Group, Line, BufferGeometry, LineBasicMaterial, Vector3 } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/scenes/Scene'
import '@woby/three/src/objects/Line'
import '@woby/three/src/materials/LineBasicMaterial'

/**
 * Port of svg_lines from Three.js examples.
 * SVG line rendering demonstrating vector graphics output.
 *
 * Source: https://threejs.org/examples/svg_lines.html
 */

// Line colors
const lineColors = [
    0xff6b6b, 0x4ecdc4, 0x45b7d1, 0x96ceb4, 0xffeaa7,
    0xdfe6e9, 0xe74c3c, 0x3498db, 0x2ecc71, 0xf39c12,
]

export const Lines = () => {
    const svgRendererRef = $<SVGRenderer>()
    const containerRef = $<HTMLDivElement>()
    const linesRef = $<THREE.Line[]>([])

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

    // Create animated lines
    useEffect(() => {
        const lines: THREE.Line[] = []
        const lineCount = 10

        for (let i = 0; i < lineCount; i++) {
            const points: Vector3[] = []
            const segments = 50
            const radius = 100 + i * 30

            for (let j = 0; j <= segments; j++) {
                const angle = (j / segments) * Math.PI * 2
                const x = Math.cos(angle) * radius
                const y = Math.sin(angle) * radius
                const z = Math.sin(angle * 3 + i) * 50
                points.push(new Vector3(x, y, z))
            }

            const geometry = new BufferGeometry().setFromPoints(points)
            const material = new LineBasicMaterial({
                color: lineColors[i % lineColors.length],
                linewidth: 2,
            })

            const line = new Line(geometry, material)
            lines.push(line)
        }

        linesRef(lines)

        return () => {
            lines.forEach(line => {
                line.geometry.dispose()
                ;(line.material as THREE.Material).dispose()
            })
        }
    }, [])

    // Animation
    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0

        // Animate lines
        const lines = $$(linesRef)
        lines.forEach((line, i) => {
            if (line) {
                line.rotation.z = time * 0.2 * (i % 2 === 0 ? 1 : -1)
                line.rotation.x = Math.sin(time * 0.5 + i) * 0.2
            }
        })

        // Render SVG
        const svgRenderer = $$(svgRendererRef)
        const scene = state.scene
        const camera = state.camera

        if (svgRenderer && scene && camera) {
            lines.forEach(line => {
                if (line && line.parent !== scene) {
                    scene.add(line)
                }
            })
            svgRenderer.render(scene, camera as THREE.Camera)
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)} />

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={1} far={2000} position={[0, 0, 500]} />
            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default Lines
