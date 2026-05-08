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
 * Port of webgl_materials_physical_iridescence from Three.js examples.
 * Demonstrates iridescence effect for thin-film interference.
 *
 * Source: https://threejs.org/examples/webgl_materials_physical_iridescence.html
 *
 * Key features:
 * - Iridescence for soap bubble/CD effect
 * - Iridescence IOR control
 * - Thickness-based color variation
 */

export const PhysicalIridescence = () => {
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
            <scene background={new Color(0x111122)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 10, 5]} intensity={2} />
                <directionalLight position={[-5, 5, -5]} intensity={1} color={0xff8888} />

                {/* Sphere with low iridescence thickness */}
                <mesh ref={sphere1Ref} position={[-2, 0, 0]}>
                    <sphereGeometry args={[0.8, 64, 64]} />
                    <meshPhysicalMaterial
                        color={0x111111}
                        roughness={0}
                        metalness={1}
                        iridescence={1}
                        iridescenceIOR={1.3}
                        iridescenceThicknessRange={[100, 400]}
                    />
                </mesh>

                {/* Sphere with medium iridescence thickness */}
                <mesh ref={sphere2Ref} position={[0, 0, 0]}>
                    <sphereGeometry args={[0.8, 64, 64]} />
                    <meshPhysicalMaterial
                        color={0x111111}
                        roughness={0}
                        metalness={1}
                        iridescence={1}
                        iridescenceIOR={1.5}
                        iridescenceThicknessRange={[200, 800]}
                    />
                </mesh>

                {/* Sphere with high iridescence thickness */}
                <mesh ref={sphere3Ref} position={[2, 0, 0]}>
                    <sphereGeometry args={[0.8, 64, 64]} />
                    <meshPhysicalMaterial
                        color={0x111111}
                        roughness={0}
                        metalness={1}
                        iridescence={1}
                        iridescenceIOR={2}
                        iridescenceThicknessRange={[400, 1200]}
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

export default PhysicalIridescence
