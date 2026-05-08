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
 * Port of webgl_advanced_sandbox from Three.js examples.
 * Demonstrates sandbox environment for testing.
 *
 * Source: https://threejs.org/examples/webgl_advanced_sandbox.html
 *
 * Key features:
 * - Interactive sandbox environment
 * - Multiple object types
 * - Testing and experimentation
 */

export const Sandbox = () => {
    const groupRef = $<THREE.Group>()

    useFrame(({ clock }) => {
        const group = $$(groupRef)
        if (group) {
            group.rotation.y = clock.getElapsedTime() * 0.1
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 10, 7]} intensity={1} castShadow />
                <pointLight position={[-5, 5, 5]} intensity={0.5} color={0xff9999} />

                {/* Object group */}
                <group ref={groupRef}>
                    {/* Central object */}
                    <mesh position={[0, 0.5, 0]} castShadow>
                        <boxGeometry args={[1, 1, 1]} />
                        <meshStandardMaterial color={0x4ecdc4} metalness={0.5} roughness={0.3} />
                    </mesh>

                    {/* Surrounding objects */}
                    {Array.from({ length: 12 }, (_, i) => {
                        const angle = (i / 12) * Math.PI * 2
                        const radius = 3
                        const x = Math.cos(angle) * radius
                        const z = Math.sin(angle) * radius
                        const hue = i / 12

                        return (
                            <mesh key={i} position={[x, 0.3, z]} castShadow>
                                <sphereGeometry args={[0.3, 16, 16]} />
                                <meshStandardMaterial color={new Color().setHSL(hue, 0.7, 0.5)} />
                            </mesh>
                        )
                    })}

                    {/* Floor */}
                    <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                        <boxGeometry args={[10, 10, 0.1]} />
                        <meshStandardMaterial color={0x333333} />
                    </mesh>
                </group>

                {/* Grid helper */}
                <gridHelper args={[20, 20, 0x666666, 0x444444]} />
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[5, 5, 5]} />
            <orbitControls enableDamping target={[0, 0.5, 0]} />
        </canvas3D>
    )
}

export default Sandbox