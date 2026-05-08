/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, Line2, LineGeometry, LineMaterial } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_lines_fat from Three.js examples.
 * Demonstrates wide/fat lines with Line2, LineGeometry, LineMaterial.
 *
 * Source: https://threejs.org/examples/webgl_lines_fat.html
 *
 * Key features:
 * - Line2 for wide lines
 * - LineMaterial with configurable width
 * - Per-vertex colors
 */

export const FatLines = () => {
    const lineRef = $<Line2>()

    useEffect(() => {
        // Generate line points in a helix pattern
        const positions: number[] = []
        const colors: number[] = []

        for (let i = 0; i < 1000; i++) {
            const t = i / 100
            const x = Math.cos(t * Math.PI * 4) * (5 + t)
            const y = t * 2 - 10
            const z = Math.sin(t * Math.PI * 4) * (5 + t)

            positions.push(x, y, z)

            const color = new Color().setHSL(t / 20, 1, 0.5)
            colors.push(color.r, color.g, color.b)
        }

        const geometry = new LineGeometry()
        geometry.setPositions(positions)
        geometry.setColors(colors)

        const material = new LineMaterial({
            color: 0xffffff,
            linewidth: 5,
            vertexColors: true,
            dashed: false,
            alphaToCoverage: true,
            worldUnits: false
        })
        material.resolution.set(window.innerWidth, window.innerHeight)

        const line = new Line2(geometry, material)
        line.computeLineDistances()
        lineRef(line as unknown as Line2)

        // Handle resize
        const onResize = () => {
            const line = $$(lineRef)
            if (line && line.material) {
                (line.material as LineMaterial).resolution.set(window.innerWidth, window.innerHeight)
            }
        }
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    })

    useFrame((state) => {
        const line = $$(lineRef)
        if (line) {
            line.rotation.y = (state.clock?.getElapsedTime() ?? 0) * 0.1
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x111111)}>
                <ambientLight intensity={0.5} />

                {/* Fat line */}
                {() => {
                    const line = $$(lineRef)
                    if (!line) return null
                    return <primitive object={line} />
                }}
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 0, 20]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default FatLines
