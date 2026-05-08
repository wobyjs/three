/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, ACESFilmicToneMapping, RGBELoader, EquirectangularReflectionMapping } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/materials/MeshPhysicalMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_materials_physical_clearcoat from Three.js examples.
 * Demonstrates clearcoat layer on MeshPhysicalMaterial.
 *
 * Source: https://threejs.org/examples/webgl_materials_physical_clearcoat.html
 *
 * Key features:
 * - Clearcoat layer for car paint effect
 * - Clearcoat roughness
 * - Environment reflections
 */

export const PhysicalClearcoat = () => {
    const envMapRef = $<THREE.Texture>()
    const sphere1Ref = $<THREE.Mesh>()
    const sphere2Ref = $<THREE.Mesh>()
    const sphere3Ref = $<THREE.Mesh>()

    useFrame(({ clock }) => {
        const time = clock.getElapsedTime()
        const spheres = [$$(sphere1Ref), $$(sphere2Ref), $$(sphere3Ref)]

        spheres.forEach((sphere, i) => {
            if (sphere) {
                sphere.rotation.y = time * 0.2 + i
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
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 10, 5]} intensity={2} />

                {/* Sphere with high clearcoat (car paint) */}
                <mesh ref={sphere1Ref} position={[-2, 0, 0]}>
                    <sphereGeometry args={[0.8, 64, 64]} />
                    <meshPhysicalMaterial
                        color={0xff0000}
                        roughness={0.1}
                        metalness={0.2}
                        clearcoat={1}
                        clearcoatRoughness={0.1}
                    />
                </mesh>

                {/* Sphere with medium clearcoat */}
                <mesh ref={sphere2Ref} position={[0, 0, 0]}>
                    <sphereGeometry args={[0.8, 64, 64]} />
                    <meshPhysicalMaterial
                        color={0x0088ff}
                        roughness={0.3}
                        metalness={0.5}
                        clearcoat={0.5}
                        clearcoatRoughness={0.3}
                    />
                </mesh>

                {/* Sphere with low clearcoat */}
                <mesh ref={sphere3Ref} position={[2, 0, 0]}>
                    <sphereGeometry args={[0.8, 64, 64]} />
                    <meshPhysicalMaterial
                        color={0x00ff88}
                        roughness={0.5}
                        metalness={0.8}
                        clearcoat={0.2}
                        clearcoatRoughness={0.5}
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

export default PhysicalClearcoat
