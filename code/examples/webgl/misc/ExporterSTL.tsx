/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, STLExporter } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
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
 * - STLExporter for 3D printing export
 * - Binary and ASCII formats
 * - Mesh triangulation
 */

export const ExporterSTL = () => {
    const meshRef = $<THREE.Mesh>()

    const exportSTL = (binary: boolean = true) => {
        const mesh = $$(meshRef)
        if (!mesh) return

        const exporter = new STLExporter()
        const result = exporter.parse(mesh, { binary })

        const mimeType = binary ? 'application/octet-stream' : 'text/plain'
        const extension = binary ? 'stl' : 'stl'

        const blob = new Blob([result as BlobPart], { type: mimeType })
        const url = URL.createObjectURL(blob)

        const link = document.createElement('a')
        link.href = url
        link.download = `model.${extension}`
        link.click()

        URL.revokeObjectURL(url)
    }

    useFrame((state) => {
        const mesh = $$(meshRef)
        if (mesh) {
            mesh.rotation.y = (state.clock?.getElapsedTime() ?? 0) * 0.3
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 10, 5]} intensity={1} />

                {/* Exportable mesh */}
                <mesh ref={meshRef} position={[0, 0, 0]}>
                    <torusKnotGeometry args={[1, 0.3, 100, 16]} />
                    <meshStandardMaterial color={0x4ecdc4} metalness={0.5} roughness={0.3} />
                </mesh>

                {/* Export buttons */}
                <mesh position={[-1.5, 3, 0]} onClick={() => exportSTL(true)}>
                    <boxGeometry args={[1.5, 0.4, 0.1]} />
                    <meshStandardMaterial color={0xff6b6b} />
                </mesh>

                <mesh position={[1.5, 3, 0]} onClick={() => exportSTL(false)}>
                    <boxGeometry args={[1.5, 0.4, 0.1]} />
                    <meshStandardMaterial color={0x45b7d1} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 2, 5]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default ExporterSTL