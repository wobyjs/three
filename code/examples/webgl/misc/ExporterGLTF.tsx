/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, GLTFExporter } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of misc_exporter_gltf from Three.js examples.
 * Demonstrates GLTF export functionality.
 *
 * Source: https://threejs.org/examples/misc_exporter_gltf.html
 *
 * Key features:
 * - GLTFExporter for scene export
 * - Download functionality
 * - Scene preparation for export
 */

export const ExporterGLTF = () => {
    const sceneRef = $<THREE.Scene>()

    const exportGLTF = () => {
        const scene = $$(sceneRef)
        if (!scene) return

        const exporter = new GLTFExporter()

        exporter.parse(
            scene,
            (result) => {
                const output = JSON.stringify(result, null, 2)
                const blob = new Blob([output], { type: 'application/json' })
                const url = URL.createObjectURL(blob)

                const link = document.createElement('a')
                link.href = url
                link.download = 'scene.gltf'
                link.click()

                URL.revokeObjectURL(url)
            },
            (error) => {
                console.error('Export error:', error)
            },
            { binary: false }
        )
    }

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene ref={sceneRef} background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 10, 5]} intensity={1} castShadow />

                {/* Exportable objects */}
                <mesh position={[0, 0.5, 0]} castShadow>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color={0xff6b6b} />
                </mesh>

                <mesh position={[-2, 0.5, 0]} castShadow>
                    <sphereGeometry args={[0.5, 32, 32]} />
                    <meshStandardMaterial color={0x4ecdc4} />
                </mesh>

                <mesh position={[2, 0.5, 0]} castShadow>
                    <boxGeometry args={[0.5, 1, 0.5]} />
                    <meshStandardMaterial color={0x45b7d1} />
                </mesh>

                {/* Ground */}
                <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                    <boxGeometry args={[10, 10, 0.1]} />
                    <meshStandardMaterial color={0x333333} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[5, 5, 5]} />
            <orbitControls enableDamping />

            {/* Export button - would be a UI component in real app */}
            <mesh position={[0, 3, 0]} onClick={exportGLTF}>
                <boxGeometry args={[2, 0.5, 0.1]} />
                <meshStandardMaterial color={0x4ecdc4} />
            </mesh>
        </canvas3D>
    )
}

export default ExporterGLTF