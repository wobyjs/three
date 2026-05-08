/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, Mesh, BoxGeometry, SphereGeometry, Group } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/objects/Group'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_advanced_scene_zigzag from Three.js examples.
 * Demonstrates zigzag scene arrangement.
 *
 * Source: https://threejs.org/examples/webgl_advanced_scene_zigzag.html
 *
 * Key features:
 * - Zigzag object arrangement
 * - Dynamic scene composition
 * - Animation patterns
 */

export const SceneZigzag = () => {
    const groupRef = $<THREE.Group>()

    useFrame(({ clock }) => {
        const group = $$(groupRef)
        if (!group) return

        const time = clock.getElapsedTime()

        // Zigzag animation
        group.children.forEach((child, i) => {
            if (child instanceof THREE.Mesh) {
                child.position.y = 0.5 + Math.sin(time * 2 + i * 0.5) * 0.5
                child.rotation.y = time + i * 0.2
            }
        })
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 10, 7]} intensity={1} />

                {/* Zigzag arrangement */}
                <group ref={groupRef}>
                    {Array.from({ length: 20 }, (_, i) => {
                        const x = (i - 10) * 0.8
                        const z = Math.sin(i * 0.5) * 2
                        const hue = i / 20

                        return (
                            <mesh key={i} position={[x, 0.5, z]}>
                                <boxGeometry args={[0.5, 0.5, 0.5]} />
                                <meshStandardMaterial color={new Color().setHSL(hue, 0.7, 0.5)} />
                            </mesh>
                        )
                    })}
                </group>

                {/* Floor */}
                <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <boxGeometry args={[20, 10, 0.1]} />
                    <meshStandardMaterial color={0x333333} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 5, 10]} />
            <orbitControls enableDamping target={[0, 0.5, 0]} />
        </canvas3D>
    )
}

export default SceneZigzag