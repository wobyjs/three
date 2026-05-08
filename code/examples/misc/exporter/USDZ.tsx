/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useRenderer, useCamera } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'
import * as THREE from 'three'
import { USDZExporter } from 'three/examples/jsm/exporters/USDZExporter.js'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/CylinderGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of misc_exporter_usdz from Three.js examples.
 * Demonstrates USDZ export for Apple AR Quick Look.
 *
 * Source: https://threejs.org/examples/misc_exporter_usdz.html
 *
 * Key features:
 * - Export scene to USDZ format
 * - Compatible with iOS AR Quick Look
 * - Open in AR on iOS devices
 */

export const USDZ = () => {
    const sceneRef = $<THREE.Scene>()

    // Export function
    const exportUSDZ = async () => {
        const scene = $$(sceneRef)
        if (!scene) return

        try {
            const exporter = new USDZExporter()
            const result = await exporter.parse(scene)

            const blob = new Blob([result], { type: 'model/vnd.usdz+zip' })
            downloadBlob(blob, 'model.usdz')
        } catch (error) {
            console.error('Export error:', error)
        }
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
        button.id = 'export-usdz'
        button.style.cssText = 'position:fixed;top:20px;right:20px;padding:10px;background:#4a90d9;color:white;border:none;border-radius:5px;cursor:pointer;z-index:100;'
        button.textContent = 'Export USDZ (AR)'
        document.body.appendChild(button)

        button.addEventListener('click', exportUSDZ)

        return () => {
            button.remove()
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene ref={sceneRef} background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 10, 5]} intensity={1} />

                {/* Simple object suitable for AR */}
                <mesh position={[0, 0, 0]}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color={0xff6b6b} roughness={0.3} metalness={0.7} />
                </mesh>

                {/* Base */}
                <mesh position={[0, -0.6, 0]}>
                    <cylinderGeometry args={[0.8, 0.8, 0.1, 32]} />
                    <meshStandardMaterial color={0x2d2d44} roughness={0.5} />
                </mesh>
            </scene>

            <perspectiveCamera
                fov={60}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[2, 2, 3]}
            />

            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default USDZ