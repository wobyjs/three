/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, Vector3, Spherical, MeshBasicMaterial, DoubleSide } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/materials/MeshBasicMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_camera_cinematic from Three.js examples.
 * Demonstrates cinematic camera movement with depth of field.
 *
 * Source: https://threejs.org/examples/webgl_camera_cinematic.html
 *
 * Key features:
 * - Smooth camera path following spherical coordinates
 * - Focus point tracking
 * - Multiple objects for depth perception
 */

export const Cinematic = () => {
    const focusPoint = $<THREE.Mesh>()
    const time = $(0)
    const radius = 15

    useFrame((state) => {
        const t = state.clock?.getElapsedTime() ?? 0
        time(t)

        // Update focus point rotation
        const fp = $$(focusPoint)
        if (fp) {
            fp.rotation.y = t * 0.5
            fp.rotation.x = Math.sin(t * 0.3) * 0.2
        }
    })

    // Generate scene objects
    const objects: { position: [number, number, number]; color: number }[] = []
    for (let i = 0; i < 50; i++) {
        const theta = Math.random() * Math.PI * 2
        const phi = Math.acos(2 * Math.random() - 1)
        const r = 5 + Math.random() * 10
        objects.push({
            position: [
                r * Math.sin(phi) * Math.cos(theta),
                r * Math.sin(phi) * Math.sin(theta),
                r * Math.cos(phi)
            ],
            color: new Color().setHSL(Math.random(), 0.7, 0.5).getHex()
        })
    }

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x0a0a0a)}>
                <ambientLight intensity={0.2} />
                <directionalLight position={[10, 10, 10]} intensity={0.8} />

                {/* Focus point - central object */}
                <mesh ref={focusPoint} position={[0, 0, 0]}>
                    <boxGeometry args={[2, 2, 2]} />
                    <meshStandardMaterial color={0xff4444} metalness={0.8} roughness={0.2} />
                </mesh>

                {/* Surrounding objects */}
                {objects.map((obj, i) => (
                    <mesh key={i} position={obj.position}>
                        <sphereGeometry args={[0.3, 16, 16]} />
                        <meshStandardMaterial color={obj.color} metalness={0.5} roughness={0.3} />
                    </mesh>
                ))}

                {/* Floor grid */}
                <mesh position={[0, -5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <boxGeometry args={[30, 30, 0.1]} />
                    <meshStandardMaterial color={0x222222} />
                </mesh>
            </scene>

            {/* Camera follows spherical path */}
            <perspectiveCamera
                fov={50}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={() => {
                    const t = $$(time)
                    const theta = t * 0.3
                    const phi = Math.PI / 3 + Math.sin(t * 0.2) * 0.2
                    return [
                        radius * Math.sin(phi) * Math.cos(theta),
                        radius * Math.cos(phi),
                        radius * Math.sin(phi) * Math.sin(theta)
                    ]
                }}
            />
            <orbitControls enableDamping dampingFactor={0.05} target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default Cinematic
