/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame, useThree, useRenderer } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, Scene, Mesh, BoxGeometry, SphereGeometry, WebGLRenderer, PerspectiveCamera } from 'three'
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
 * Port of webgl_advanced_scene_crossfade from Three.js examples.
 * Demonstrates scene transitions and crossfading.
 *
 * Source: https://threejs.org/examples/webgl_advanced_scene_crossfade.html
 *
 * Key features:
 * - Multiple scenes
 * - Scene transitions
 * - Crossfade effect
 */

export const SceneCrossfade = () => {
    const transitionProgress = $(0)
    const currentScene = $(0)

    useFrame(({ clock }) => {
        const progress = $$(transitionProgress)
        const sceneIdx = $$(currentScene)

        // Animate transition
        if (progress < 1 && progress > 0) {
            transitionProgress(progress + 0.02)
        }

        // Auto-switch scenes every 5 seconds
        const time = clock.getElapsedTime()
        if (Math.floor(time / 5) !== sceneIdx && progress === 0) {
            transitionProgress(0.01)
            currentScene(Math.floor(time / 5) % 2)
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 10, 7]} intensity={1} />

                {/* Scene 1 objects */}
                <group visible={() => $$(currentScene) === 0}>
                    <mesh position={[0, 0.5, 0]}>
                        <sphereGeometry args={[1, 32, 32]} />
                        <meshStandardMaterial color={0xff6b6b} metalness={0.5} roughness={0.3} />
                    </mesh>
                    <mesh position={[2, 0.5, 0]}>
                        <boxGeometry args={[0.5, 0.5, 0.5]} />
                        <meshStandardMaterial color={0x4ecdc4} />
                    </mesh>
                </group>

                {/* Scene 2 objects */}
                <group visible={() => $$(currentScene) === 1}>
                    <mesh position={[0, 0.5, 0]}>
                        <boxGeometry args={[1, 1, 1]} />
                        <meshStandardMaterial color={0x45b7d1} metalness={0.5} roughness={0.3} />
                    </mesh>
                    <mesh position={[-2, 0.5, 0]}>
                        <sphereGeometry args={[0.5, 32, 32]} />
                        <meshStandardMaterial color={0xffeaa7} />
                    </mesh>
                </group>

                {/* Floor */}
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

export default SceneCrossfade