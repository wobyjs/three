/** @jsxImportSource @woby/three */

import { $, $$, useFrame, useEffect } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/PlaneGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/materials/MeshBasicMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/cameras/OrthographicCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_camera_orthographic from Three.js examples.
 * Demonstrates orthographic camera projection with no perspective distortion.
 *
 * Source: https://threejs.org/examples/webgl_camera_orthographic.html
 *
 * Controls:
 * - Press 'O' for Orthographic camera
 * - Press 'P' for Perspective camera
 */

export const CameraOrthographic = () => {
    const meshRef = $<THREE.Mesh>()
    const cameraType = $<'perspective' | 'orthographic'>('orthographic')

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const mesh = $$(meshRef)
        if (mesh) {
            mesh.rotation.x = time * 0.5
            mesh.rotation.y = time * 0.3
        }
    })

    // Keyboard controls
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key.toLowerCase() === 'o') {
                cameraType('orthographic')
            } else if (event.key.toLowerCase() === 'p') {
                cameraType('perspective')
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 10, 7]} intensity={1} />

                {/* Central cube - note how orthographic shows no perspective */}
                <mesh ref={meshRef}>
                    <boxGeometry args={[2, 2, 2]} />
                    <meshStandardMaterial color={0xff6b6b} roughness={0.3} metalness={0.7} />
                </mesh>

                {/* Grid of spheres to demonstrate orthographic projection */}
                {Array.from({ length: 5 }).map((_, i) => (
                    Array.from({ length: 5 }).map((_, j) => (
                        <mesh key={`${i}-${j}`} position={[(i - 2) * 3, 0, (j - 2) * 3]}>
                            <sphereGeometry args={[0.5, 16, 16]} />
                            <meshStandardMaterial color={0x4ecdc4} roughness={0.4} metalness={0.6} />
                        </mesh>
                    ))
                ))}

                {/* Ground plane */}
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]}>
                    <planeGeometry args={[20, 20]} />
                    <meshStandardMaterial color={0x333344} />
                </mesh>
            </scene>

            {/* Orthographic camera */}
            <orthographicCamera
                left={-10}
                right={10}
                top={10}
                bottom={-10}
                near={0.1}
                far={100}
                position={[5, 5, 5]}
            />

            {/* Perspective camera for comparison */}
            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[5, 5, 5]} />

            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default CameraOrthographic
