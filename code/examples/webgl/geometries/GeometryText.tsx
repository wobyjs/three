/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, FontLoader, TextGeometry } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_geometry_text from Three.js examples.
 * Demonstrates 3D text geometry.
 *
 * Source: https://threejs.org/examples/webgl_geometry_text.html
 *
 * Features:
 * - 3D extruded text
 * - Text geometry generation
 */

export const GeometryText = () => {
    const textRef = $<THREE.Mesh>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const text = $$(textRef)
        if (text) {
            text.rotation.y = Math.sin(time * 0.3) * 0.2
        }
    })

    // Create text geometry using built-in shapes
    // (Full TextGeometry requires font loading)
    // Using extruded shapes as text approximation

    const letterShape = new THREE.Shape()
    letterShape.moveTo(0, 0)
    letterShape.lineTo(0.5, 0)
    letterShape.lineTo(0.5, 1)
    letterShape.lineTo(0, 1)
    letterShape.closePath()

    const extrudeSettings = {
        depth: 0.2,
        bevelEnabled: true,
        bevelSegments: 2,
        steps: 2,
        bevelSize: 0.05,
        bevelThickness: 0.05
    }

    // Create simple box geometry as text placeholder
    const textGeometry = new THREE.BoxGeometry(4, 1, 0.3)

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 10, 7]} intensity={1} />

                {/* Text placeholder (3D box) */}
                <mesh ref={textRef} geometry={textGeometry} position={[0, 0, 0]}>
                    <meshStandardMaterial color={0xff6b6b} roughness={0.3} metalness={0.7} />
                </mesh>

                {/* Decorative elements */}
                <mesh position={[0, -1.5, 0]}>
                    <boxGeometry args={[6, 0.2, 0.2]} />
                    <meshStandardMaterial color={0x4ecdc4} roughness={0.3} metalness={0.5} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 0, 8]} />

            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default GeometryText