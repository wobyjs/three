/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, Mesh, BoxGeometry, SphereGeometry, Layers } from 'three'
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
 * Port of webgl_advanced_scene_layers from Three.js examples.
 * Demonstrates render layers for selective rendering.
 *
 * Source: https://threejs.org/examples/webgl_advanced_scene_layers.html
 *
 * Key features:
 * - Layer system for selective visibility
 * - Multiple render passes
 * - Layer-based object grouping
 */

// Create layers
const LAYER_0 = new Layers()
LAYER_0.set(0)

const LAYER_1 = new Layers()
LAYER_1.set(1)

const LAYER_2 = new Layers()
LAYER_2.set(2)

export const SceneLayers = () => {
    const activeLayer = $(0)

    useFrame(({ clock }) => {
        // Cycle through layers
        const time = clock.getElapsedTime()
        const layer = Math.floor(time / 2) % 3
        activeLayer(layer)
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x111111)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 10, 7]} intensity={1} />

                {/* Layer 0 - Red objects */}
                <mesh position={[0, 0.5, 0]} layers={LAYER_0}>
                    <sphereGeometry args={[1, 32, 32]} />
                    <meshStandardMaterial color={0xff6b6b} />
                </mesh>

                {/* Layer 1 - Green objects */}
                <mesh position={[2, 0.5, 0]} layers={LAYER_1}>
                    <boxGeometry args={[0.5, 0.5, 0.5]} />
                    <meshStandardMaterial color={0x4ecdc4} />
                </mesh>

                {/* Layer 2 - Blue objects */}
                <mesh position={[-2, 0.5, 0]} layers={LAYER_2}>
                    <sphereGeometry args={[0.5, 32, 32]} />
                    <meshStandardMaterial color={0x45b7d1} />
                </mesh>

                {/* Floor - visible on all layers */}
                <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <boxGeometry args={[10, 10, 0.1]} />
                    <meshStandardMaterial color={0x333333} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 3, 5]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default SceneLayers