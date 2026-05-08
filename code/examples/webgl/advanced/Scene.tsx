/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, Scene, Mesh, BoxGeometry, SphereGeometry } from 'three'
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
 * Port of webgl_advanced_scene from Three.js examples.
 * Demonstrates scene management and organization.
 *
 * Source: https://threejs.org/examples/webgl_advanced_scene.html
 *
 * Key features:
 * - Scene hierarchy and organization
 * - Object grouping
 * - Scene properties and methods
 */

export const SceneExample = () => {
    const sceneRef = $<Scene>()

    useFrame(({ clock }) => {
        // Scene-level animation could go here
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene ref={sceneRef} background={new Color(0x222222)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 10, 7]} intensity={1} />

                {/* Main scene objects */}
                <mesh position={[0, 0.5, 0]}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color={0xff6b6b} />
                </mesh>

                {/* Nested group */}
                <group position={[2, 0, 0]}>
                    <mesh position={[0, 0.5, 0]}>
                        <sphereGeometry args={[0.5, 32, 32]} />
                        <meshStandardMaterial color={0x4ecdc4} />
                    </mesh>
                    <mesh position={[1, 0.5, 0]}>
                        <boxGeometry args={[0.5, 0.5, 0.5]} />
                        <meshStandardMaterial color={0x45b7d1} />
                    </mesh>
                </group>

                {/* Another group */}
                <group position={[-2, 0, 0]}>
                    <mesh position={[0, 0.5, 0]}>
                        <sphereGeometry args={[0.5, 32, 32]} />
                        <meshStandardMaterial color={0xffeaa7} />
                    </mesh>
                    <mesh position={[-1, 0.5, 0]}>
                        <boxGeometry args={[0.5, 0.5, 0.5]} />
                        <meshStandardMaterial color={0xa55eea} />
                    </mesh>
                </group>

                {/* Floor */}
                <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <boxGeometry args={[10, 10, 0.1]} />
                    <meshStandardMaterial color={0x333333} />
                </mesh>

                {/* Grid */}
                <gridHelper args={[20, 20, 0x666666, 0x444444]} />
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[5, 5, 5]} />
            <orbitControls enableDamping target={[0, 0.5, 0]} />
        </canvas3D>
    )
}

export default SceneExample