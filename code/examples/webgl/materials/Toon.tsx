/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, ACESFilmicToneMapping } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/PlaneGeometry'
import '@woby/three/src/materials/MeshToonMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_materials_toon from Three.js examples.
 * Demonstrates toon/cel shading for cartoon-like rendering.
 *
 * Source: https://threejs.org/examples/webgl_materials_toon.html
 *
 * Key features:
 * - MeshToonMaterial for cel shading
 * - Gradient map for color bands
 * - Cartoon-style lighting
 */

export const Toon = () => {
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
            />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 10, 5]} intensity={2} />

                {/* Toon sphere with red */}
                <mesh ref={sphere1Ref} position={[-2, 0, 0]}>
                    <sphereGeometry args={[0.8, 32, 32]} />
                    <meshToonMaterial color={0xff4444} />
                </mesh>

                {/* Toon sphere with green */}
                <mesh ref={sphere2Ref} position={[0, 0, 0]}>
                    <sphereGeometry args={[0.8, 32, 32]} />
                    <meshToonMaterial color={0x44ff44} />
                </mesh>

                {/* Toon sphere with blue */}
                <mesh ref={sphere3Ref} position={[2, 0, 0]}>
                    <sphereGeometry args={[0.8, 32, 32]} />
                    <meshToonMaterial color={0x4444ff} />
                </mesh>

                {/* Ground plane */}
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
                    <planeGeometry args={[10, 10]} />
                    <meshToonMaterial color={0x333344} />
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

export default Toon
