/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame, useThree, useCamera } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, PerspectiveCamera, OrthographicCamera, CameraHelper } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/cameras/OrthographicCamera'
import '@woby/three/src/helpers/CameraHelper'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_advanced_camera from Three.js examples.
 * Demonstrates advanced camera techniques.
 *
 * Source: https://threejs.org/examples/webgl_advanced_camera.html
 *
 * Key features:
 * - Multiple camera types
 * - Camera switching
 * - Camera helper visualization
 */

export const CameraAdvanced = () => {
    const perspectiveRef = $<PerspectiveCamera>()
    const orthoRef = $<OrthographicCamera>()
    const activeCamera = $<'perspective' | 'ortho'>('perspective')

    useFrame(({ clock }) => {
        const persp = $$(perspectiveRef)
        const ortho = $$(orthoRef)

        if (persp) {
            persp.position.x = Math.sin(clock.getElapsedTime() * 0.5) * 10
            persp.position.z = Math.cos(clock.getElapsedTime() * 0.5) * 10
            persp.lookAt(0, 0, 0)
        }

        if (ortho) {
            ortho.position.y = 15
            ortho.lookAt(0, 0, 0)
        }
    })

    // Toggle camera on click
    const toggleCamera = () => {
        const current = $$(activeCamera)
        activeCamera(current === 'perspective' ? 'ortho' : 'perspective')
    }

    return (
        <canvas3D onClick={toggleCamera}>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x222222)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 10, 7]} intensity={1} />

                {/* Main scene objects */}
                <mesh position={[0, 0.5, 0]}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color={0x00ff00} />
                </mesh>

                <mesh position={[2, 0.5, 0]}>
                    <sphereGeometry args={[0.5, 32, 32]} />
                    <meshStandardMaterial color={0xff0000} />
                </mesh>

                <mesh position={[-2, 0.5, 0]}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color={0x0000ff} />
                </mesh>

                {/* Floor */}
                <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <boxGeometry args={[10, 10, 0.1]} />
                    <meshStandardMaterial color={0x444444} />
                </mesh>

                {/* Perspective camera with helper */}
                <cameraHelper>
                    <perspectiveCamera
                        ref={perspectiveRef}
                        fov={60}
                        aspect={window.innerWidth / window.innerHeight}
                        near={0.1}
                        far={100}
                        position={[5, 5, 5]}
                    />
                </cameraHelper>

                {/* Orthographic camera */}
                <orthographicCamera
                    ref={orthoRef}
                    left={-10}
                    right={10}
                    top={10}
                    bottom={-10}
                    near={0.1}
                    far={100}
                    position={[0, 15, 0]}
                />
            </scene>

            {/* Active camera selection */}
            {() => $$(activeCamera) === 'perspective' ? (
                <perspectiveCamera
                    fov={60}
                    aspect={window.innerWidth / window.innerHeight}
                    near={0.1}
                    far={100}
                    position={[5, 5, 5]}
                />
            ) : (
                <orthographicCamera
                    left={-10}
                    right={10}
                    top={10 / (window.innerWidth / window.innerHeight)}
                    bottom={-10 / (window.innerWidth / window.innerHeight)}
                    near={0.1}
                    far={100}
                    position={[0, 15, 0]}
                />
            )}

            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default CameraAdvanced
