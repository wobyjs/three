/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from "woby"
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
 * Port of webgl_materials_blending from Three.js examples.
 * Demonstrates various blending modes for materials.
 *
 * Source: https://threejs.org/examples/webgl_materials_blending.html
 *
 * Features:
 * - Normal blending
 * - Additive blending
 * - Subtractive blending
 * - Multiply blending
 */

export const MaterialsBlending = () => {
    const groupRef = $<THREE.Group>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const group = $$(groupRef)
        if (group) {
            group.rotation.y = time * 0.2
        }
    })

    const blendingModes = [
        { mode: THREE.NormalBlending, name: 'Normal', pos: [-3, 2, 0] as [number, number, number] },
        { mode: THREE.AdditiveBlending, name: 'Additive', pos: [0, 2, 0] as [number, number, number] },
        { mode: THREE.SubtractiveBlending, name: 'Subtractive', pos: [3, 2, 0] as [number, number, number] },
        { mode: THREE.MultiplyBlending, name: 'Multiply', pos: [-1.5, -1, 0] as [number, number, number] },
    ]

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a1a)}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 10, 7]} intensity={0.5} />

                <group ref={groupRef}>
                    {blendingModes.map((item, i) => (
                        <mesh key={i} position={item.pos}>
                            <sphereGeometry args={[1, 32, 32]} />
                            <meshBasicMaterial color={0xff6b6b} transparent opacity={0.7} blending={item.mode} />
                        </mesh>
                    ))}

                    {/* Background sphere for blending demonstration */}
                    <mesh position={[0, 0, -2]}>
                        <sphereGeometry args={[2, 32, 32]} />
                        <meshBasicMaterial color={0x4ecdc4} transparent opacity={0.5} />
                    </mesh>
                </group>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 0, 8]} />

            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default MaterialsBlending