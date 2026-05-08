/** @jsxImportSource @woby/three */

import { $, $$, useFrame, useRenderer, useCamera, useEffect } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { Color, Vector3 } from 'three'
import * as THREE from 'three'
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/TorusKnotGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/materials/MeshNormalMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of misc_controls_trackball from Three.js examples.
 * Demonstrates TrackballControls for free-form 3D rotation.
 *
 * Source: https://threejs.org/examples/misc_controls_trackball.html
 *
 * Key features:
 * - Free rotation in any direction
 * - Zoom with scroll wheel
 * - Pan with right mouse button
 * - Dynamic damping for smooth motion
 */

export const Trackball = () => {
    const cameraRef = useCamera<THREE.PerspectiveCamera>()
    const rendererRef = useRenderer<THREE.WebGLRenderer>()
    const controlsRef = $<TrackballControls>()
    const meshRef = $<THREE.Mesh>()

    useEffect(() => {
        const renderer = $$(rendererRef)
        const camera = $$(cameraRef)
        if (!renderer || !camera) return

        const controls = new TrackballControls(camera, renderer.domElement)
        controls.rotateSpeed = 1.0
        controls.zoomSpeed = 1.2
        controls.panSpeed = 0.8
        controls.noZoom = false
        controls.noPan = false
        controls.staticMoving = false
        controls.dynamicDampingFactor = 0.3
        controlsRef(controls)

        return () => {
            controls.dispose()
        }
    })

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
                <directionalLight position={[5, 10, 5]} intensity={1} />

                {/* Central torus knot */}
                <mesh ref={meshRef} position={[0, 0, 0]}>
                    <torusKnotGeometry args={[2, 0.6, 100, 16]} />
                    <meshNormalMaterial />
                </mesh>

                {/* Reference spheres */}
                {Array.from({ length: 8 }, (_, i) => {
                    const angle = (i / 8) * Math.PI * 2
                    const x = Math.cos(angle) * 5
                    const z = Math.sin(angle) * 5
                    return (
                        <mesh key={i} position={[x, 0, z]}>
                            <sphereGeometry args={[0.5, 16, 16]} />
                            <meshStandardMaterial color={new Color().setHSL(i / 8, 0.7, 0.5)} />
                        </mesh>
                    )
                })}
            </scene>

            <perspectiveCamera
                ref={cameraRef}
                fov={60}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[0, 0, 10]}
            />
        </canvas3D>
    )
}

export default Trackball