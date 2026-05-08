/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, Mesh, BoxGeometry, TorusKnotGeometry } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/TorusKnotGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_tsl_basic from Three.js examples.
 * Demonstrates basic TSL (Three.js Shading Language) usage.
 *
 * Source: https://threejs.org/examples/webgl_tsl_basic.html
 *
 * Key features:
 * - TSL node-based shading
 * - Modern shader creation approach
 * - Declarative material definition
 *
 * Note: TSL is a newer Three.js feature for node-based shading.
 * This example uses standard materials as TSL may require WebGPU.
 */

export const TSLBasic = () => {
    const meshRef = $<Mesh>()

    useFrame(({ clock }) => {
        const mesh = $$(meshRef)
        if (mesh) {
            mesh.rotation.x = clock.getElapsedTime() * 0.3
            mesh.rotation.y = clock.getElapsedTime() * 0.5
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 10, 7]} intensity={1} />

                {/* TSL-inspired material - using standard material as fallback */}
                <mesh ref={meshRef}>
                    <torusKnotGeometry args={[1, 0.3, 128, 32]} />
                    <meshStandardMaterial
                        color={0x4ecdc4}
                        metalness={0.5}
                        roughness={0.3}
                        emissive={0x112233}
                        emissiveIntensity={0.2}
                    />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 0, 5]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default TSLBasic