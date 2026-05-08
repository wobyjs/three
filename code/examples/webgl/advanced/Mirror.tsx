/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, Reflector, Water, TextureLoader, Vector2 } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/PlaneGeometry'
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_mirror from Three.js examples.
 * Demonstrates real-time planar reflections using Reflector.
 *
 * Source: https://threejs.org/examples/webgl_mirror.html
 *
 * Key features:
 * - Reflector for mirror surface
 * - Real-time reflection rendering
 * - Multiple reflective surfaces
 */

export const Mirror = () => {
    const mirrorRef = $<Reflector>()

    useEffect(() => {
        // Reflector is created via geometry and options
        const geometry = new THREE.PlaneGeometry(10, 10)
        const mirror = new Reflector(geometry, {
            clipBias: 0.003,
            textureWidth: window.innerWidth * window.devicePixelRatio,
            textureHeight: window.innerHeight * window.devicePixelRatio,
            color: 0x889999
        })
        mirrorRef(mirror as unknown as Reflector)
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x111111)}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 10, 5]} intensity={1} castShadow />

                {/* Mirror floor */}
                {() => {
                    const mirror = $$(mirrorRef)
                    if (!mirror) return null
                    mirror.rotation.x = -Math.PI / 2
                    mirror.position.y = -1
                    return <primitive object={mirror} />
                }}

                {/* Reflected objects */}
                <mesh position={[0, 1, 0]} castShadow>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color={0xff6b6b} metalness={0.5} roughness={0.3} />
                </mesh>

                <mesh position={[-2, 0.5, -2]} castShadow>
                    <boxGeometry args={[0.5, 1, 0.5]} />
                    <meshStandardMaterial color={0x4ecdc4} metalness={0.5} roughness={0.3} />
                </mesh>

                <mesh position={[2, 0.5, -2]} castShadow>
                    <boxGeometry args={[0.5, 1, 0.5]} />
                    <meshStandardMaterial color={0x45b7d1} metalness={0.5} roughness={0.3} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 3, 5]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default Mirror
