/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/CylinderGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/materials/MeshPhysicalMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_materials_car from Three.js examples.
 * Demonstrates car paint material with clearcoat.
 *
 * Source: https://threejs.org/examples/webgl_materials_car.html
 *
 * Features:
 * - Clearcoat material
 * - Metallic car paint
 * - Physical material properties
 */

export const MaterialsCar = () => {
    const bodyRef = $<THREE.Mesh>()
    const wheelRefs = [$<THREE.Mesh>(), $<THREE.Mesh>(), $<THREE.Mesh>(), $<THREE.Mesh>()]

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const body = $$(bodyRef)
        if (body) {
            body.position.y = Math.sin(time * 2) * 0.05
        }

        // Rotate wheels
        wheelRefs.forEach(ref => {
            const wheel = $$(ref)
            if (wheel) {
                wheel.rotation.x = time * 3
            }
        })
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 10, 7]} intensity={1} />
                <directionalLight position={[-5, 5, -5]} intensity={0.5} />

                {/* Car body */}
                <mesh ref={bodyRef} position={[0, 0.5, 0]}>
                    <boxGeometry args={[3, 0.8, 1.5]} />
                    <meshPhysicalMaterial
                        color={0xff0000}
                        roughness={0.1}
                        metalness={0.8}
                        clearcoat={1}
                        clearcoatRoughness={0.1}
                    />
                </mesh>

                {/* Car roof */}
                <mesh position={[0, 1.1, 0]}>
                    <boxGeometry args={[1.5, 0.6, 1.3]} />
                    <meshPhysicalMaterial
                        color={0xff0000}
                        roughness={0.1}
                        metalness={0.8}
                        clearcoat={1}
                        clearcoatRoughness={0.1}
                    />
                </mesh>

                {/* Wheels */}
                {[
                    [-1, 0, 0.8],
                    [1, 0, 0.8],
                    [-1, 0, -0.8],
                    [1, 0, -0.8]
                ].map((pos, i) => (
                    <mesh key={i} ref={wheelRefs[i]} position={pos as [number, number, number]} rotation={[Math.PI / 2, 0, 0]}>
                        <cylinderGeometry args={[0.3, 0.3, 0.2, 32]} />
                        <meshStandardMaterial color={0x222222} roughness={0.9} metalness={0.1} />
                    </mesh>
                ))}

                {/* Ground */}
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.3, 0]}>
                    <planeGeometry args={[20, 20]} />
                    <meshStandardMaterial color={0x333333} roughness={0.8} metalness={0.2} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[5, 3, 5]} />

            <orbitControls enableDamping target={[0, 0.5, 0]} />
        </canvas3D>
    )
}

export default MaterialsCar