/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useRenderer, useCamera } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'
import * as THREE from 'three'
import { OBJExporter } from 'three/examples/jsm/exporters/OBJExporter.js'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/TorusGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of misc_exporter_obj from Three.js examples.
 * Demonstrates OBJ format export functionality.
 *
 * Source: https://threejs.org/examples/misc_exporter_obj.html
 *
 * Key features:
 * - Export mesh to OBJ format
 * - Simple text-based format
 * - Compatible with most 3D software
 */

export const OBJ = () => {
    const meshRef = $<THREE.Mesh>()

    // Export function
    const exportOBJ = () => {
        const mesh = $$(meshRef)
        if (!mesh) return

        const exporter = new OBJExporter()
        const result = exporter.parse(mesh)

        const blob = new Blob([result], { type: 'text/plain' })
        downloadBlob(blob, 'model.obj')
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
        button.id = 'export-obj'
        button.style.cssText = 'position:fixed;top:20px;right:20px;padding:10px;background:#4a90d9;color:white;border:none;border-radius:5px;cursor:pointer;z-index:100;'
        button.textContent = 'Export OBJ'
        document.body.appendChild(button)

        button.addEventListener('click', exportOBJ)

        return () => {
            button.remove()
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 10, 5]} intensity={1} />

                {/* Exportable mesh */}
                <mesh ref={meshRef} position={[0, 0, 0]}>
                    <torusGeometry args={[1, 0.4, 16, 100]} />
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

export default OBJ