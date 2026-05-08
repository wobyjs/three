/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, SphereGeometry, TextureLoader } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/materials/MeshBasicMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_panorama_equirectangular from Three.js examples.
 * Demonstrates equirectangular (spherical) panoramic environment mapping.
 *
 * Source: https://threejs.org/examples/webgl_panorama_equirectangular.html
 *
 * Features:
 * - Equirectangular panorama projection
 * - 360-degree immersive environment
 * - Single texture for entire panorama
 */

export const PanoramaEquirectangular = () => {
    // Create a gradient sky sphere for the panorama
    const skyGeometry = new THREE.SphereGeometry(500, 60, 40)
    // Invert the geometry so we see the inside
    skyGeometry.scale(-1, 1, 1)

    useFrame(() => {
        // The panorama sphere rotates slowly
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene>
                {/* Sky sphere - panorama background */}
                <mesh>
                    <sphereGeometry args={[500, 60, 40]} />
                    <meshBasicMaterial color={0x87ceeb} side={THREE.BackSide} />
                </mesh>

                {/* Ground sphere */}
                <mesh position={[0, -10, 0]}>
                    <sphereGeometry args={[10, 32, 32]} />
                    <meshBasicMaterial color={0x228b22} />
                </mesh>

                {/* Floating markers */}
                {Array.from({ length: 20 }).map((_, i) => {
                    const phi = Math.acos(-1 + (2 * i) / 20)
                    const theta = Math.sqrt(20 * Math.PI) * phi
                    const x = 400 * Math.cos(theta) * Math.sin(phi)
                    const y = 400 * Math.sin(theta) * Math.sin(phi)
                    const z = 400 * Math.cos(phi)
                    return (
                        <mesh key={i} position={[x, y, z]}>
                            <sphereGeometry args={[5, 16, 16]} />
                            <meshBasicMaterial color={new Color().setHSL(i / 20, 0.8, 0.5)} />
                        </mesh>
                    )
                })}
            </scene>

            <perspectiveCamera fov={75} aspect={window.innerWidth / window.innerHeight} near={1} far={1000} position={[0, 0, 0]} />

            <orbitControls enableDamping enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </canvas3D>
    )
}

export default PanoramaEquirectangular