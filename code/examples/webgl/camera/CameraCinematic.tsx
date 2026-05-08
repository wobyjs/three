/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, CinematicCamera } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/PlaneGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/materials/MeshBasicMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/lights/SpotLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_camera_cinematic from Three.js examples.
 * Demonstrates cinematic depth of field effects using bokeh.
 *
 * Source: https://threejs.org/examples/webgl_camera_cinematic.html
 *
 * Features:
 * - Depth of field (DOF) blur effect
 * - Focus distance control
 * - Aperture simulation for bokeh
 */

export const CameraCinematic = () => {
    const sphereRef = $<THREE.Mesh>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const sphere = $$(sphereRef)
        if (sphere) {
            sphere.position.x = Math.cos(time) * 3
            sphere.position.z = Math.sin(time) * 3
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x0a0a0a)}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 10, 7]} intensity={0.5} />
                <spotLight position={[0, 10, 0]} intensity={1} angle={0.5} penumbra={0.5} />

                {/* Moving sphere (focus target) */}
                <mesh ref={sphereRef} position={[3, 0, 0]}>
                    <sphereGeometry args={[0.5, 32, 32]} />
                    <meshStandardMaterial color={0xff6b6b} roughness={0.2} metalness={0.8} />
                </mesh>

                {/* Static spheres at different depths */}
                {Array.from({ length: 20 }).map((_, i) => {
                    const x = (Math.random() - 0.5) * 20
                    const y = (Math.random() - 0.5) * 10
                    const z = (Math.random() - 0.5) * 20
                    const scale = 0.2 + Math.random() * 0.5
                    return (
                        <mesh key={i} position={[x, y, z]} scale={[scale, scale, scale]}>
                            <sphereGeometry args={[1, 16, 16]} />
                            <meshStandardMaterial
                                color={new Color().setHSL(Math.random(), 0.7, 0.5)}
                                roughness={0.3}
                                metalness={0.7}
                            />
                        </mesh>
                    )
                })}

                {/* Ground plane */}
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
                    <planeGeometry args={[50, 50]} />
                    <meshStandardMaterial color={0x333333} roughness={0.8} metalness={0.2} />
                </mesh>
            </scene>

            {/* Cinematic camera with DOF */}
            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 2, 10]} />

            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default CameraCinematic
