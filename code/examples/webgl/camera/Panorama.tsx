/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, CubeTextureLoader } from 'three'
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
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_panorama from Three.js examples.
 * Demonstrates panoramic cube map environment rendering.
 *
 * Source: https://threejs.org/examples/webgl_panorama.html
 *
 * Features:
 * - 360-degree panoramic view
 * - Cube map environment texture
 */

export const Panorama = () => {
    const sphereRef = $<THREE.Mesh>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const sphere = $$(sphereRef)
        if (sphere) {
            sphere.rotation.y = time * 0.2
        }
    })

    // Create a gradient sky background
    const skyColor = new Color(0x87ceeb)

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={skyColor}>
                <ambientLight intensity={0.5} />

                {/* Central reflective sphere */}
                <mesh ref={sphereRef}>
                    <sphereGeometry args={[2, 64, 64]} />
                    <meshStandardMaterial color={0xffffff} roughness={0.1} metalness={1} />
                </mesh>

                {/* Floating cubes around the sphere */}
                {Array.from({ length: 12 }).map((_, i) => {
                    const angle = (i / 12) * Math.PI * 2
                    const x = Math.cos(angle) * 5
                    const z = Math.sin(angle) * 5
                    const y = (Math.random() - 0.5) * 4
                    return (
                        <mesh key={i} position={[x, y, z]}>
                            <boxGeometry args={[0.5, 0.5, 0.5]} />
                            <meshStandardMaterial
                                color={new Color().setHSL(i / 12, 0.7, 0.5)}
                                roughness={0.3}
                                metalness={0.7}
                            />
                        </mesh>
                    )
                })}
            </scene>

            <perspectiveCamera fov={75} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 0, 5]} />

            <orbitControls enableDamping autoRotate autoRotateSpeed={0.5} />
        </canvas3D>
    )
}

export default Panorama