/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame, useThree } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, PerspectiveCamera, Vector3, CameraHelper } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/helpers/CameraHelper'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_advanced_camera_viewpoints from Three.js examples.
 * Demonstrates multiple camera viewpoints.
 *
 * Source: https://threejs.org/examples/webgl_advanced_camera_viewpoints.html
 *
 * Key features:
 * - Multiple predefined viewpoints
 * - Camera switching
 * - Smooth transitions between viewpoints
 */

const viewpoints = [
    { name: 'Front', position: new Vector3(0, 2, 10), target: new Vector3(0, 0, 0) },
    { name: 'Side', position: new Vector3(10, 2, 0), target: new Vector3(0, 0, 0) },
    { name: 'Top', position: new Vector3(0, 10, 0), target: new Vector3(0, 0, 0) },
    { name: 'Corner', position: new Vector3(8, 8, 8), target: new Vector3(0, 0, 0) },
    { name: 'Close-up', position: new Vector3(2, 2, 3), target: new Vector3(0, 0.5, 0) }
]

export const CameraViewpoints = () => {
    const cameraRef = $<PerspectiveCamera>()
    const viewpointIndex = $(0)
    const transitioning = $(false)

    useFrame(() => {
        const camera = $$(cameraRef)
        if (!camera) return

        const idx = $$(viewpointIndex)
        const vp = viewpoints[idx]
        const isTransitioning = $$(transitioning)

        if (isTransitioning) {
            // Smooth transition
            const targetPos = vp.position
            const currentPos = camera.position

            const speed = 0.05
            camera.position.x += (targetPos.x - currentPos.x) * speed
            camera.position.y += (targetPos.y - currentPos.y) * speed
            camera.position.z += (targetPos.z - currentPos.z) * speed

            // Check if transition complete
            if (currentPos.distanceTo(targetPos) < 0.1) {
                transitioning(false)
            }
        }

        camera.lookAt(vp.target)
    })

    const switchViewpoint = (index: number) => {
        viewpointIndex(index)
        transitioning(true)
    }

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x222222)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 10, 7]} intensity={1} />

                {/* Main object */}
                <mesh position={[0, 0.5, 0]}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color={0x00ff88} metalness={0.5} roughness={0.3} />
                </mesh>

                {/* Surrounding spheres */}
                {Array.from({ length: 6 }, (_, i) => {
                    const angle = (i / 6) * Math.PI * 2
                    return (
                        <mesh key={i} position={[Math.cos(angle) * 3, 0.3, Math.sin(angle) * 3]}>
                            <sphereGeometry args={[0.3, 16, 16]} />
                            <meshStandardMaterial color={new Color().setHSL(i / 6, 0.7, 0.5)} />
                        </mesh>
                    )
                })}

                {/* Floor */}
                <gridHelper args={[20, 20, 0x666666, 0x444444]} />

                {/* Camera helpers for each viewpoint */}
                {viewpoints.map((vp, i) => (
                    <cameraHelper key={i}>
                        <perspectiveCamera
                            fov={60}
                            aspect={window.innerWidth / window.innerHeight}
                            near={0.1}
                            far={100}
                            position={vp.position}
                        />
                    </cameraHelper>
                ))}
            </scene>

            <perspectiveCamera
                ref={cameraRef}
                fov={60}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[0, 2, 10]}
            />

            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default CameraViewpoints