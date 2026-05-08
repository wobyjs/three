/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useRenderer, useCamera } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'
import * as THREE from 'three'
import { STLExporter } from 'three/examples/jsm/exporters/STLExporter.js'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/TorusKnotGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of misc_exporter_stl from Three.js examples.
 * Demonstrates STL export for 3D printing.
 *
 * Source: https://threejs.org/examples/misc_exporter_stl.html
 *
 * Key features:
 * - Export mesh to STL format
 * - Binary and ASCII options
 * - Compatible with 3D printers
 */

export const STL = () => {
    const meshRef = $<THREE.Mesh>()

    // Export function
    const exportSTL = (binary: boolean = false) => {
        const mesh = $$(meshRef)
        if (!mesh) return

        const exporter = new STLExporter()
        const result = exporter.parse(mesh, { binary })

        const blob = new Blob(
            [result],
            { type: binary ? 'application/octet-stream' : 'text/plain' }
        )

        downloadBlob(blob, binary ? 'model.stl' : 'model.stl')
    }

    // Download helper
    function downloadBlob(blob: Blob, filename: string) {
        const link = document.createElement('a')
        link.href = URL.createObjectURL(blob)
        link.download = filename
        link.click()
        URL.revokeObjectURL(link.href)
    }

    // Create export buttons
    useEffect(() => {
        const buttons = document.createElement('div')
        buttons.style.cssText = 'position:fixed;top:20px;right:20px;z-index:100;'
        buttons.innerHTML = `
            <button id="export-stl-ascii" style="margin:5px;padding:10px;background:#4a90d9;color:white;border:none;border-radius:5px;cursor:pointer;">Export STL (ASCII)</button>
            <button id="export-stl-binary" style="margin:5px;padding:10px;background:#4a90d9;color:white;border:none;border-radius:5px;cursor:pointer;">Export STL (Binary)</button>
        `
        document.body.appendChild(buttons)

        const asciiBtn = document.getElementById('export-stl-ascii')
        const binaryBtn = document.getElementById('export-stl-binary')

        if (asciiBtn) asciiBtn.addEventListener('click', () => exportSTL(false))
        if (binaryBtn) binaryBtn.addEventListener('click', () => exportSTL(true))

        return () => {
            buttons.remove()
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 10, 5]} intensity={1} />

                {/* Exportable mesh - torus knot suitable for 3D printing */}
                <mesh ref={meshRef} position={[0, 0, 0]}>
                    <torusKnotGeometry args={[1, 0.3, 100, 16]} />
                    <meshStandardMaterial color={0x4a90d9} roughness={0.3} metalness={0.7} />
                </mesh>
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

export default STL