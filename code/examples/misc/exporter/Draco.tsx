/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useRenderer, useCamera } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'
import * as THREE from 'three'
import { DRACOExporter } from 'three/examples/jsm/exporters/DRACOExporter.js'

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
 * Port of misc_exporter_draco from Three.js examples.
 * Demonstrates Draco compression for efficient geometry transfer.
 *
 * Source: https://threejs.org/examples/misc_exporter_draco.html
 *
 * Key features:
 * - Export geometry with Draco compression
 * - Significantly smaller file sizes
 * - Ideal for web delivery
 */

export const Draco = () => {
    const meshRef = $<THREE.Mesh>()

    // Export function
    const exportDraco = () => {
        const mesh = $$(meshRef)
        if (!mesh) return

        const exporter = new DRACOExporter()
        exporter.parse(
            mesh,
            (result) => {
                const blob = new Blob([result], { type: 'application/octet-stream' })
                downloadBlob(blob, 'model.drc')
            },
            (error) => {
                console.error('Export error:', error)
            },
            {
                decodeSpeed: 5,
                encodeSpeed: 5,
                encoderMethod: DRACOExporter.MESH_EDGEBREAKER_ENCODING,
                quantization: [16, 8, 8, 8, 8]
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
        button.id = 'export-draco'
        button.style.cssText = 'position:fixed;top:20px;right:20px;padding:10px;background:#4a90d9;color:white;border:none;border-radius:5px;cursor:pointer;z-index:100;'
        button.textContent = 'Export Draco'
        document.body.appendChild(button)

        button.addEventListener('click', exportDraco)

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
                    <torusGeometry args={[1, 0.4, 64, 100]} />
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

export default Draco