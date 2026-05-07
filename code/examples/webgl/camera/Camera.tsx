/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { useThree, useRenderer, useCamera } from '@woby/three'
import { Color, PerspectiveCamera, OrthographicCamera, CameraHelper, Group } from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/PlaneGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/materials/MeshBasicMaterial'
import '@woby/three/src/materials/PointsMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/objects/Points'
import '@woby/three/src/objects/Group'
import '@woby/three/src/core/BufferGeometry'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/cameras/OrthographicCamera'
import '@woby/three/src/helpers/CameraHelper'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_camera from Three.js examples.
 * Demonstrates camera switching (Perspective/Orthographic) and split-screen rendering.
 *
 * Source: https://threejs.org/examples/webgl_camera.html
 *
 * Controls:
 * - Press 'O' for Orthographic camera
 * - Press 'P' for Perspective camera
 */

// Particle system component
const ParticleSystem = () => {
    const ref = $<THREE.Points>()

    // Create particle geometry with random positions
    const positions = new Float32Array(10000 * 3)
    for (let i = 0; i < 10000; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 20
        positions[i * 3 + 1] = (Math.random() - 0.5) * 20
        positions[i * 3 + 2] = (Math.random() - 0.5) * 20
    }

    useFrame(() => {
        const points = $$(ref)
        if (points) {
            points.rotation.y += 0.001
        }
    })

    return (
        <points ref={ref}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    array={positions}
                    count={10000}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial color={0x888888} size={0.05} />
        </points>
    )
}

// Main scene content
const SceneContent = () => {
    const meshRef = $<THREE.Mesh>()

    useFrame(() => {
        const mesh = $$(meshRef)
        if (mesh) {
            mesh.rotation.x += 0.005
            mesh.rotation.y += 0.01
        }
    })

    return (
        <>
            {/* Center cube */}
            <mesh ref={meshRef} position={[0, 0, 0]}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color={0x00ff00} />
            </mesh>

            {/* Ground plane */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
                <planeGeometry args={[20, 20]} />
                <meshStandardMaterial color={0x444444} side={2} />
            </mesh>

            {/* Particle system */}
            <ParticleSystem />
        </>
    )
}

export const Camera = () => {
    const activeCamera = $<'perspective' | 'orthographic'>('perspective')
    const renderer = useRenderer<THREE.WebGLRenderer>()
    const { scenes, cameras } = useThree()

    // Keyboard event handling for camera switching
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key.toLowerCase() === 'o') {
                activeCamera('orthographic')
            } else if (event.key.toLowerCase() === 'p') {
                activeCamera('perspective')
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    })

    // Custom render with split-screen viewports
    useFrame(() => {
        const rend = $$(renderer)
        const scene = $$(scenes)?.[0]
        const cams = $$(cameras)
        if (!rend || !scene || !cams) return

        const width = window.innerWidth
        const height = window.innerHeight

        // Clear the entire canvas
        rend.setClearColor(0x222222, 1)
        rend.clear()

        // Left viewport - main camera view
        rend.setViewport(0, 0, width / 2, height)
        rend.setScissor(0, 0, width / 2, height)
        rend.setScissorTest(true)

        const mainCam = $$(activeCamera) === 'perspective' ? cams[0] : cams[1]
        if (mainCam) {
            rend.render(scene, mainCam)
        }

        // Right viewport - camera helper view (always perspective)
        rend.setViewport(width / 2, 0, width / 2, height)
        rend.setScissor(width / 2, 0, width / 2, height)

        // Use a fixed perspective camera for the helper view
        const helperCam = cams[0]
        if (helperCam) {
            rend.render(scene, helperCam)
        }

        // CRITICAL: Reset viewport after custom rendering
        rend.setViewport(0, 0, width, height)
        rend.setScissorTest(false)
    })

    return (
        <canvas3D noRender>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x222222)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 10, 7]} intensity={1} />
                <SceneContent />
            </scene>

            {/* Perspective camera */}
            <perspectiveCamera fov={60} aspect={(window.innerWidth / 2) / window.innerHeight} near={0.1} far={100} position={[5, 5, 5]} />

            {/* Orthographic camera */}
            <orthographicCamera
                left={-5}
                right={5}
                top={5}
                bottom={-5}
                near={0.1}
                far={100}
                position={[5, 5, 5]}
            />
        </canvas3D>
    )
}

export default Camera
