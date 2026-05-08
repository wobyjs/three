/** @jsxImportSource @woby/three */

import { $, $$, useFrame, useEffect } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/materials/MeshBasicMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_layers from Three.js examples.
 * Demonstrates using camera layers to selectively render objects.
 *
 * Source: https://threejs.org/examples/webgl_layers.html
 *
 * Layers allow you to control which objects are visible to specific cameras.
 * Each object can be assigned to one or more layers (1-32).
 */

export const Layers = () => {
    const sphereRef = $<THREE.Mesh>()
    const activeLayer = $(1)

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const sphere = $$(sphereRef)
        if (sphere) {
            sphere.rotation.y = time * 0.5
        }
    })

    // Keyboard controls for layer switching
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            const key = parseInt(event.key)
            if (key >= 1 && key <= 4) {
                activeLayer(key)
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x0a0a0a)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 10, 7]} intensity={1} />

                {/* Layer 1 - Red objects */}
                <mesh layers={1} position={[-2, 0, 0]}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color={0xff0000} roughness={0.3} metalness={0.7} />
                </mesh>

                {/* Layer 2 - Green objects */}
                <mesh layers={2} position={[0, 0, 0]}>
                    <sphereGeometry args={[0.5, 32, 32]} />
                    <meshStandardMaterial color={0x00ff00} roughness={0.3} metalness={0.7} />
                </mesh>

                {/* Layer 3 - Blue objects */}
                <mesh layers={3} position={[2, 0, 0]}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color={0x0000ff} roughness={0.3} metalness={0.7} />
                </mesh>

                {/* Layer 4 - Yellow objects */}
                <mesh ref={sphereRef} layers={4} position={[0, 2, 0]}>
                    <sphereGeometry args={[0.5, 32, 32]} />
                    <meshStandardMaterial color={0xffff00} roughness={0.3} metalness={0.7} />
                </mesh>

                {/* Layer 0 - Default (always visible) */}
                <mesh layers={0} position={[0, -1, 0]}>
                    <boxGeometry args={[0.2, 0.2, 0.2]} />
                    <meshStandardMaterial color={0xffffff} roughness={0.5} metalness={0.5} />
                </mesh>
            </scene>

            {/* Camera that only sees specific layers */}
            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 3, 8]} />

            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default Layers