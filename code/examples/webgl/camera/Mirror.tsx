/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/PlaneGeometry'
import '@woby/three/src/geometries/CircleGeometry'
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/materials/MeshBasicMaterial'
import '@woby/three/src/materials/MeshPhongMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_mirror from Three.js examples.
 * Demonstrates a reflective mirror surface using a secondary camera.
 *
 * Source: https://threejs.org/examples/webgl_mirror.html
 *
 * Features:
 * - Real-time mirror reflection
 * - Reflective plane material
 */

export const Mirror = () => {
    const boxRef = $<THREE.Mesh>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const box = $$(boxRef)
        if (box) {
            box.rotation.x = time * 0.5
            box.rotation.y = time * 0.3
            box.position.y = Math.sin(time) * 0.5 + 1
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 10, 7]} intensity={1} />

                {/* Animated floating cube */}
                <mesh ref={boxRef} position={[0, 1, 0]}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color={0xff6b6b} roughness={0.3} metalness={0.7} />
                </mesh>

                {/* Mirror floor - simulates reflection */}
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
                    <planeGeometry args={[10, 10]} />
                    <meshStandardMaterial color={0x888888} roughness={0.1} metalness={0.9} />
                </mesh>

                {/* Surrounding spheres */}
                {Array.from({ length: 6 }).map((_, i) => {
                    const angle = (i / 6) * Math.PI * 2
                    const x = Math.cos(angle) * 3
                    const z = Math.sin(angle) * 3
                    return (
                        <mesh key={i} position={[x, 0.5, z]}>
                            <sphereGeometry args={[0.3, 32, 32]} />
                            <meshStandardMaterial
                                color={new Color().setHSL(i / 6, 0.8, 0.5)}
                                roughness={0.2}
                                metalness={0.8}
                            />
                        </mesh>
                    )
                })}
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 3, 8]} />

            <orbitControls enableDamping target={[0, 1, 0]} />
        </canvas3D>
    )
}

export default Mirror