/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useRenderer, useCamera } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, BufferGeometry, Float32BufferAttribute, PointsMaterial, Points } from 'three'
import * as THREE from 'three'
import { PLYExporter } from 'three/examples/jsm/exporters/PLYExporter.js'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of misc_exporter_ply from Three.js examples.
 * Demonstrates PLY export for point clouds.
 *
 * Source: https://threejs.org/examples/misc_exporter_ply.html
 *
 * Key features:
 * - Export mesh/points to PLY format
 * - Point cloud support
 * - Compatible with point cloud viewers
 */

export const PLY = () => {
    const meshRef = $<THREE.Mesh>()
    const pointsRef = $<THREE.Points>()

    // Create point cloud
    useEffect(() => {
        const numPoints = 5000
        const positions = new Float32Array(numPoints * 3)

        for (let i = 0; i < numPoints; i++) {
            // Random points in a sphere
            const theta = Math.random() * Math.PI * 2
            const phi = Math.acos(2 * Math.random() - 1)
            const r = Math.pow(Math.random(), 0.33) * 2

            positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
            positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
            positions[i * 3 + 2] = r * Math.cos(phi)
        }

        const geometry = new BufferGeometry()
        geometry.setAttribute('position', new Float32BufferAttribute(positions, 3))

        const material = new PointsMaterial({
            color: 0x4a90d9,
            size: 0.05
        })

        const points = new Points(geometry, material)
        pointsRef(points)
    })

    // Export function
    const exportPLY = () => {
        const points = $$(pointsRef)
        if (!points) return

        const exporter = new PLYExporter()
        exporter.parse(
            points,
            (result) => {
                const blob = new Blob([result as ArrayBuffer], { type: 'application/octet-stream' })
                downloadBlob(blob, 'pointcloud.ply')
            },
            (error) => {
                console.error('Export error:', error)
            }
        )
    }

    // Download helper
    function downloadBlob(blob: Blob, filename: string) {
        const link = document.createElement('a')
        link.href = URL.createObjectURL(blob)
        link.download = filename
        link.click()
        URL.revokeObjectURL(link.href)
    }

    // Create export button
    useEffect(() => {
        const button = document.createElement('button')
        button.id = 'export-ply'
        button.style.cssText = 'position:fixed;top:20px;right:20px;padding:10px;background:#4a90d9;color:white;border:none;border-radius:5px;cursor:pointer;z-index:100;'
        button.textContent = 'Export PLY'
        document.body.appendChild(button)

        button.addEventListener('click', exportPLY)

        return () => {
            button.remove()
        }
    })

    // Get points for rendering
    const points = $$(pointsRef)

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 10, 5]} intensity={1} />

                {/* Point cloud will be added dynamically */}
            </scene>

            <perspectiveCamera
                fov={60}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[3, 3, 5]}
            />

            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default PLY