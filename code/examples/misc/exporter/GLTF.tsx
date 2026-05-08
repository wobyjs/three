/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useRenderer, useCamera } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'
import * as THREE from 'three'
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js'

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
 * Port of misc_exporter_gltf from Three.js examples.
 * Demonstrates GLTF/GLB export functionality.
 *
 * Source: https://threejs.org/examples/misc_exporter_gltf.html
 *
 * Key features:
 * - Export scene to GLTF format
 * - Binary (GLB) and JSON (GLTF) options
 * - Download exported file
 */

export const GLTF = () => {
    const sceneRef = $<THREE.Scene>()

    // Export function
    const exportGLTF = (binary: boolean = false) => {
        const scene = $$(sceneRef)
        if (!scene) return

        const exporter = new GLTFExporter()
        exporter.parse(
            scene,
            (result) => {
                const output = binary
                    ? result as ArrayBuffer
                    : JSON.stringify(result, null, 2)

                const blob = new Blob(
                    [output],
                    { type: binary ? 'application/octet-stream' : 'application/json' }
                )

                downloadBlob(blob, binary ? 'scene.glb' : 'scene.gltf')
            },
            (error) => {
                console.error('Export error:', error)
            },
            { binary }
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

    // Create export buttons
    useEffect(() => {
        const buttons = document.createElement('div')
        buttons.style.cssText = 'position:fixed;top:20px;right:20px;z-index:100;'
        buttons.innerHTML = `
            <button id="export-gltf" style="margin:5px;padding:10px;background:#4a90d9;color:white;border:none;border-radius:5px;cursor:pointer;">Export GLTF</button>
            <button id="export-glb" style="margin:5px;padding:10px;background:#4a90d9;color:white;border:none;border-radius:5px;cursor:pointer;">Export GLB</button>
        `
        document.body.appendChild(buttons)

        const gltfBtn = document.getElementById('export-gltf')
        const glbBtn = document.getElementById('export-glb')

        if (gltfBtn) gltfBtn.addEventListener('click', () => exportGLTF(false))
        if (glbBtn) glbBtn.addEventListener('click', () => exportGLTF(true))

        return () => {
            buttons.remove()
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene ref={sceneRef} background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 10, 5]} intensity={1} castShadow />

                {/* Central object */}
                <mesh position={[0, 0, 0]}>
                    <boxGeometry args={[2, 2, 2]} />
                    <meshStandardMaterial color={0x4a90d9} roughness={0.3} metalness={0.7} />
                </mesh>

                {/* Sphere */}
                <mesh position={[3, 1, 0]}>
                    <sphereGeometry args={[1, 32, 32]} />
                    <meshStandardMaterial color={0xff6b6b} roughness={0.4} metalness={0.6} />
                </mesh>

                {/* Cylinder */}
                <mesh position={[-3, 1, 0]}>
                    <cylinderGeometry args={[0.5, 0.5, 2, 32]} />
                    <meshStandardMaterial color={0x4ecdc4} roughness={0.5} metalness={0.5} />
                </mesh>

                {/* Floor */}
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
                    <boxGeometry args={[10, 10, 0.1]} />
                    <meshStandardMaterial color={0x2d2d44} />
                </mesh>
            </scene>

            <perspectiveCamera
                fov={60}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[5, 5, 10]}
            />

            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default GLTF