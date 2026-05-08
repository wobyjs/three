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
import '@woby/three/src/objects/Group'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/cameras/ArrayCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_camera_array from Three.js examples.
 * Demonstrates using ArrayCamera for multi-view rendering (like a 2x2 grid of cameras).
 *
 * Source: https://threejs.org/examples/webgl_camera_array.html
 *
 * Each quadrant shows the scene from a different camera perspective.
 */

export const CameraArray = () => {
    const meshRef = $<THREE.Mesh>()
    const { cameras } = useThree()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const mesh = $$(meshRef)
        if (mesh) {
            mesh.rotation.x = time * 0.25
            mesh.rotation.y = time * 0.5
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 10, 7]} intensity={1} />

                {/* Central animated sphere */}
                <mesh ref={meshRef}>
                    <sphereGeometry args={[2, 32, 32]} />
                    <meshStandardMaterial color={0xff6b6b} roughness={0.3} metalness={0.7} />
                </mesh>

                {/* Small orbiting cubes */}
                {Array.from({ length: 8 }).map((_, i) => {
                    const angle = (i / 8) * Math.PI * 2
                    const x = Math.cos(angle) * 4
                    const z = Math.sin(angle) * 4
                    return (
                        <mesh key={i} position={[x, 0, z]}>
                            <boxGeometry args={[0.5, 0.5, 0.5]} />
                            <meshStandardMaterial color={0x4ecdc4} roughness={0.4} metalness={0.6} />
                        </mesh>
                    )
                })}
            </scene>

            {/* ArrayCamera with 4 sub-cameras for split-screen view */}
            <arrayCamera>
                {/* Top-left camera */}
                <perspectiveCamera fov={50} aspect={(window.innerWidth / 2) / (window.innerHeight / 2)} near={0.1} far={100} position={[0, 0, 10]} />
                {/* Top-right camera */}
                <perspectiveCamera fov={50} aspect={(window.innerWidth / 2) / (window.innerHeight / 2)} near={0.1} far={100} position={[10, 0, 0]} />
                {/* Bottom-left camera */}
                <perspectiveCamera fov={50} aspect={(window.innerWidth / 2) / (window.innerHeight / 2)} near={0.1} far={100} position={[0, 10, 0]} />
                {/* Bottom-right camera */}
                <perspectiveCamera fov={50} aspect={(window.innerWidth / 2) / (window.innerHeight / 2)} near={0.1} far={100} position={[5, 5, 5]} />
            </arrayCamera>

            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default CameraArray
