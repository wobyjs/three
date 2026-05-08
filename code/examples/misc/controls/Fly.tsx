/** @jsxImportSource @woby/three */

import { $, $$, useFrame, useRenderer, useCamera, useEffect } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { Color } from 'three'
import * as THREE from 'three'
import { FlyControls } from 'three/examples/jsm/controls/FlyControls.js'

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
 * Port of misc_controls_fly from Three.js examples.
 * Demonstrates FlyControls for first-person flight navigation.
 *
 * Source: https://threejs.org/examples/misc_controls_fly.html
 *
 * Key features:
 * - WASD for movement
 * - Mouse for looking
 * - Q/E for roll
 * - Space to go up, Shift to go down
 */

export const Fly = () => {
    const cameraRef = useCamera<THREE.PerspectiveCamera>()
    const rendererRef = useRenderer<THREE.WebGLRenderer>()
    const controlsRef = $<FlyControls>()
    const clockRef = $(new THREE.Clock())

    useEffect(() => {
        const renderer = $$(rendererRef)
        const camera = $$(cameraRef)
        if (!renderer || !camera) return

        const controls = new FlyControls(camera, renderer.domElement)
        controls.movementSpeed = 1
        controls.rollSpeed = 0.005
        controls.dragToLook = true
        controlsRef(controls)

        return () => {
            controls.dispose()
        }
    })

    useFrame(() => {
        const controls = $$(controlsRef)
        if (controls) {
            const delta = $$(clockRef).getDelta()
            controls.update(delta)
        }
    })

    // Generate random spheres for visual reference
    const spheres = Array.from({ length: 100 }, (_, i) => {
        const x = (Math.random() - 0.5) * 100
        const y = (Math.random() - 0.5) * 100
        const z = (Math.random() - 0.5) * 100
        return { position: [x, y, z] as [number, number, number], color: new Color().setHSL(Math.random(), 0.7, 0.5) }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[50, 50, 50]} intensity={0.8} />

                {/* Random spheres as visual reference */}
                {spheres.map((sphere, i) => (
                    <mesh key={i} position={sphere.position}>
                        <sphereGeometry args={[1, 16, 16]} />
                        <meshStandardMaterial color={sphere.color} />
                    </mesh>
                ))}

                {/* Grid floor reference */}
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -20, 0]}>
                    <boxGeometry args={[200, 200, 0.1]} />
                    <meshStandardMaterial color={0x2d2d44} />
                </mesh>
            </scene>

            <perspectiveCamera
                ref={cameraRef}
                fov={75}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={500}
                position={[0, 0, 20]}
            />
        </canvas3D>
    )
}

export default Fly