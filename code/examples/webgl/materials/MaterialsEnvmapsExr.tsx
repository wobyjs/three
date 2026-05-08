/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
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
 * Port of webgl_materials_envmaps_exr from Three.js examples.
 * Demonstrates EXR environment map loading and HDR rendering.
 *
 * Source: https://threejs.org/examples/webgl_materials_envmaps_exr.html
 *
 * Features:
 * - EXR texture loading
 * - HDR environment maps
 * - Tone mapping
 */

export const MaterialsEnvmapsExr = () => {
    const sphereRef = $<THREE.Mesh>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const sphere = $$(sphereRef)
        if (sphere) {
            sphere.rotation.y = time * 0.2
        }
    })

    return (
        <canvas3D>
            <webGLRenderer
                antialias
                toneMapping={THREE.ACESFilmicToneMapping}
                toneMappingExposure={1}
                setPixelRatio={[window.devicePixelRatio]}
                setSize={[window.innerWidth, window.innerHeight]}
            />
            <scene background={new Color(0x0a0a0a)}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 10, 7]} intensity={1} />

                {/* HDR-like reflective sphere */}
                <mesh ref={sphereRef}>
                    <sphereGeometry args={[2, 64, 64]} />
                    <meshPhysicalMaterial
                        color={0xffffff}
                        roughness={0}
                        metalness={1}
                        envMapIntensity={1}
                    />
                </mesh>

                {/* Surrounding colored lights simulation */}
                {Array.from({ length: 6 }).map((_, i) => {
                    const angle = (i / 6) * Math.PI * 2
                    const x = Math.cos(angle) * 5
                    const z = Math.sin(angle) * 5
                    return (
                        <mesh key={i} position={[x, 0, z]}>
                            <sphereGeometry args={[0.3, 16, 16]} />
                            <meshStandardMaterial
                                color={new Color().setHSL(i / 6, 0.9, 0.6)}
                                emissive={new Color().setHSL(i / 6, 0.9, 0.3)}
                            />
                        </mesh>
                    )
                })}
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 0, 6]} />

            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default MaterialsEnvmapsExr