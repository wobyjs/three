/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, ACESFilmicToneMapping } from 'three'
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
 * Port of webgl_materials_physical_sheen from Three.js examples.
 * Demonstrates sheen effect for fabric materials.
 *
 * Source: https://threejs.org/examples/webgl_materials_physical_sheen.html
 *
 * Key features:
 * - Sheen color for fabric-like appearance
 * - Sheen roughness control
 * - Velvet/cloth simulation
 */

export const PhysicalSheen = () => {
    const sphere1Ref = $<THREE.Mesh>()
    const sphere2Ref = $<THREE.Mesh>()
    const sphere3Ref = $<THREE.Mesh>()

    useFrame(({ clock }) => {
        const time = clock.getElapsedTime()
        const spheres = [$$(sphere1Ref), $$(sphere2Ref), $$(sphere3Ref)]

        spheres.forEach((sphere, i) => {
            if (sphere) {
                sphere.rotation.y = time * 0.2 + i * 0.3
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
                <directionalLight position={[-5, 5, -5]} intensity={1} color={0x8888ff} />

                {/* Velvet sphere with blue sheen */}
                <mesh ref={sphere1Ref} position={[-2, 0, 0]}>
                    <sphereGeometry args={[0.8, 64, 64]} />
                    <meshPhysicalMaterial
                        color={0x330011}
                        roughness={0.8}
                        metalness={0}
                        sheenColor={0x0044ff}
                        sheenRoughness={0.5}
                    />
                </mesh>

                {/* Velvet sphere with gold sheen */}
                <mesh ref={sphere2Ref} position={[0, 0, 0]}>
                    <sphereGeometry args={[0.8, 64, 64]} />
                    <meshPhysicalMaterial
                        color={0x111133}
                        roughness={0.8}
                        metalness={0}
                        sheenColor={0xffcc00}
                        sheenRoughness={0.3}
                    />
                </mesh>

                {/* Velvet sphere with white sheen */}
                <mesh ref={sphere3Ref} position={[2, 0, 0]}>
                    <sphereGeometry args={[0.8, 64, 64]} />
                    <meshPhysicalMaterial
                        color={0x001122}
                        roughness={0.8}
                        metalness={0}
                        sheenColor={0xffffff}
                        sheenRoughness={0.2}
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

export default PhysicalSheen
