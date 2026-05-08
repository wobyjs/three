/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame, useThree, useCamera } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, PerspectiveCamera, Vector3, Spherical } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_advanced_camera_perspective from Three.js examples.
 * Demonstrates perspective camera controls and manipulation.
 *
 * Source: https://threejs.org/examples/webgl_advanced_camera_perspective.html
 *
 * Key features:
 * - Perspective camera with adjustable FOV
 * - Camera position manipulation
 * - LookAt controls
 */

export const CameraPerspective = () => {
    const cameraRef = $<PerspectiveCamera>()
    const fov = $(60)
    const targetPosition = new Vector3(0, 0, 0)

    useFrame(({ clock }) => {
        const camera = $$(cameraRef)
        if (!camera) return

        // Orbit camera around scene
        const time = clock.getElapsedTime()
        const spherical = new Spherical(10, Math.PI / 3, time * 0.5)
        camera.position.setFromSpherical(spherical)
        camera.lookAt(targetPosition)
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 10, 7]} intensity={1} />

                {/* Central object */}
                <mesh position={[0, 0.5, 0]}>
                    <sphereGeometry args={[1, 32, 32]} />
                    <meshStandardMaterial color={0x4ecdc4} metalness={0.5} roughness={0.3} />
                </mesh>

                {/* Surrounding objects */}
                {Array.from({ length: 8 }, (_, i) => {
                    const angle = (i / 8) * Math.PI * 2
                    const x = Math.cos(angle) * 4
                    const z = Math.sin(angle) * 4
                    return (
                        <mesh key={i} position={[x, 0.5, z]}>
                            <boxGeometry args={[0.5, 0.5, 0.5]} />
                            <meshStandardMaterial color={new Color().setHSL(i / 8, 0.7, 0.5)} />
                        </mesh>
                    )
                })}

                {/* Floor */}
                <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <boxGeometry args={[10, 10, 0.1]} />
                    <meshStandardMaterial color={0x333333} />
                </mesh>
            </scene>

            <perspectiveCamera
                ref={cameraRef}
                fov={() => $$(fov)}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[10, 5, 10]}
            />

            <orbitControls enableDamping target={[0, 0.5, 0]} />
        </canvas3D>
    )
}

export default CameraPerspective