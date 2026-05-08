/** @jsxImportSource @woby/three */

import { $, $$, useFrame, useEffect } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/CylinderGeometry'
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
 * Port of webgl_camera_orthographic2 from Three.js examples.
 * Advanced orthographic camera demo with multiple views and zoom controls.
 *
 * Source: https://threejs.org/examples/webgl_camera_orthographic2.html
 *
 * Features:
 * - 2D-style orthographic projection
 * - Zoom controls
 * - Multiple camera views
 */

export const CameraOrthographic2 = () => {
    const meshRef = $<THREE.Mesh>()
    const zoom = $(1)

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const mesh = $$(meshRef)
        if (mesh) {
            mesh.rotation.y = time * 0.2
        }
    })

    // Mouse wheel zoom
    useEffect(() => {
        const handleWheel = (event: WheelEvent) => {
            const currentZoom = $$(zoom)
            const newZoom = currentZoom + event.deltaY * 0.001
            zoom(Math.max(0.1, Math.min(5, newZoom)))
        }

        window.addEventListener('wheel', handleWheel)
        return () => window.removeEventListener('wheel', handleWheel)
    })

    const frustumSize = 10 / $$(zoom)

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x222222)}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 10, 7]} intensity={1} />

                {/* 3D scene rendered in orthographic projection */}
                <mesh ref={meshRef} position={[0, 0, 0]}>
                    <boxGeometry args={[2, 2, 2]} />
                    <meshStandardMaterial color={0xff6b6b} roughness={0.3} metalness={0.7} />
                </mesh>

                {/* Surrounding cylinders */}
                {Array.from({ length: 8 }).map((_, i) => {
                    const angle = (i / 8) * Math.PI * 2
                    const x = Math.cos(angle) * 4
                    const z = Math.sin(angle) * 4
                    return (
                        <mesh key={i} position={[x, 0, z]}>
                            <cylinderGeometry args={[0.3, 0.3, 3, 16]} />
                            <meshStandardMaterial color={0x4ecdc4} roughness={0.4} metalness={0.6} />
                        </mesh>
                    )
                })}

                {/* Spheres at different heights */}
                <mesh position={[0, 2, 0]}>
                    <sphereGeometry args={[0.5, 32, 32]} />
                    <meshStandardMaterial color={0xffe66d} roughness={0.2} metalness={0.8} />
                </mesh>
            </scene>

            {/* Orthographic camera with dynamic zoom */}
            <orthographicCamera
                left={-frustumSize * (window.innerWidth / window.innerHeight) / 2}
                right={frustumSize * (window.innerWidth / window.innerHeight) / 2}
                top={frustumSize / 2}
                bottom={-frustumSize / 2}
                near={0.1}
                far={100}
                position={[0, 10, 0]}
            />

            <orbitControls enableDamping enableRotate={false} target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default CameraOrthographic2