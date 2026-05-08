/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, ACESFilmicToneMapping } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/materials/MeshPhysicalMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_materials_physical_transmission from Three.js examples.
 * Demonstrates glass transmission on MeshPhysicalMaterial.
 *
 * Source: https://threejs.org/examples/webgl_materials_physical_transmission.html
 *
 * Key features:
 * - Transmission for glass-like materials
 * - Thickness for volume absorption
 * - IOR (Index of Refraction)
 */

export const PhysicalTransmission = () => {
    const sphere1Ref = $<THREE.Mesh>()
    const sphere2Ref = $<THREE.Mesh>()
    const sphere3Ref = $<THREE.Mesh>()

    useFrame(({ clock }) => {
        const time = clock.getElapsedTime()
        const spheres = [$$(sphere1Ref), $$(sphere2Ref), $$(sphere3Ref)]

        spheres.forEach((sphere, i) => {
            if (sphere) {
                sphere.rotation.y = time * 0.3 + i * 0.5
            }
        })
    })

    return (
        <canvas3D>
            <webGLRenderer
                antialias
                setPixelRatio={[window.devicePixelRatio]}
                setSize={[window.innerWidth, window.innerHeight]}
                toneMapping={ACESFilmicToneMapping}
                toneMappingExposure={1}
            />
            <scene background={new Color(0x222233)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 10, 5]} intensity={3} />
                <directionalLight position={[-5, 5, -5]} intensity={1} color={0x8888ff} />

                {/* Background objects for refraction visibility */}
                <mesh position={[0, -1.5, 0]}>
                    <boxGeometry args={[10, 0.1, 10]} />
                    <meshPhysicalMaterial color={0x444466} roughness={0.8} />
                </mesh>

                <mesh position={[-3, 0, -2]}>
                    <sphereGeometry args={[0.5, 32, 32]} />
                    <meshPhysicalMaterial color={0xff4444} roughness={0.3} metalness={0.5} />
                </mesh>

                <mesh position={[3, 0, -2]}>
                    <sphereGeometry args={[0.5, 32, 32]} />
                    <meshPhysicalMaterial color={0x44ff44} roughness={0.3} metalness={0.5} />
                </mesh>

                {/* Glass sphere with high transmission */}
                <mesh ref={sphere1Ref} position={[-2, 0, 0]}>
                    <sphereGeometry args={[0.8, 64, 64]} />
                    <meshPhysicalMaterial
                        color={0xffffff}
                        roughness={0}
                        metalness={0}
                        transmission={0.95}
                        thickness={0.5}
                        ior={1.5}
                    />
                </mesh>

                {/* Glass sphere with colored transmission */}
                <mesh ref={sphere2Ref} position={[0, 0, 0]}>
                    <sphereGeometry args={[0.8, 64, 64]} />
                    <meshPhysicalMaterial
                        color={0x88ccff}
                        roughness={0}
                        metalness={0}
                        transmission={0.9}
                        thickness={1}
                        ior={1.5}
                    />
                </mesh>

                {/* Glass sphere with high IOR */}
                <mesh ref={sphere3Ref} position={[2, 0, 0]}>
                    <sphereGeometry args={[0.8, 64, 64]} />
                    <meshPhysicalMaterial
                        color={0xffffff}
                        roughness={0}
                        metalness={0}
                        transmission={0.9}
                        thickness={0.5}
                        ior={2.4}
                    />
                </mesh>
            </scene>

            <perspectiveCamera
                fov={50}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[0, 0, 5]}
            />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default PhysicalTransmission
