/** @jsxImportSource @woby/three */

import { $, $$, useFrame, useRenderer, useCamera } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, Vector3 } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/TorusGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/materials/MeshNormalMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of misc_controls_orbit from Three.js examples.
 * Demonstrates OrbitControls with damping for smooth camera movement.
 *
 * Source: https://threejs.org/examples/misc_controls_orbit.html
 *
 * Key pattern: OrbitControls with enableDamping requires update() in useFrame.
 */

export const Orbit = () => {
    const controlsRef = $<OrbitControls>()
    const meshRef = $<THREE.Mesh>()

    useFrame(() => {
        const controls = $$(controlsRef)
        if (controls) controls.update()

        // Rotate mesh
        const mesh = $$(meshRef)
        if (mesh) {
            mesh.rotation.x += 0.005
            mesh.rotation.y += 0.01
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x000000)}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 10, 5]} intensity={1} castShadow />

                {/* Central object */}
                <mesh ref={meshRef} position={[0, 0, 0]}>
                    <torusGeometry args={[1, 0.4, 16, 100]} />
                    <meshNormalMaterial />
                </mesh>

                {/* Grid of cubes */}
                {Array.from({ length: 25 }, (_, i) => {
                    const x = (i % 5 - 2) * 4
                    const z = (Math.floor(i / 5) - 2) * 4
                    return (
                        <mesh key={i} position={[x, -0.5, z]}>
                            <boxGeometry args={[1, 1, 1]} />
                            <meshStandardMaterial color={new Color().setHSL(i / 25, 0.7, 0.5)} />
                        </mesh>
                    )
                })}
            </scene>

            <perspectiveCamera
                fov={60}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[5, 5, 10]}
            />

            <orbitControls
                ref={controlsRef}
                enableDamping
                dampingFactor={0.05}
                screenSpacePanning
                minDistance={2}
                maxDistance={50}
                maxPolarAngle={Math.PI / 2}
            />
        </canvas3D>
    )
}

export default Orbit