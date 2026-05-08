/** @jsxImportSource @woby/three */

import { $, $$, useFrame, useRenderer, useCamera, useEffect } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { Color } from 'three'
import * as THREE from 'three'
import { MapControls } from 'three/examples/jsm/controls/MapControls.js'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/cameras/OrthographicCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of misc_controls_map from Three.js examples.
 * Demonstrates MapControls for 2D map-style navigation.
 *
 * Source: https://threejs.org/examples/misc_controls_map.html
 *
 * Key features:
 * - Pan with right mouse button
 * - Zoom with scroll wheel
 * - Orthographic camera for 2D view
 */

export const Map = () => {
    const cameraRef = $<THREE.OrthographicCamera>()
    const rendererRef = useRenderer<THREE.WebGLRenderer>()
    const controlsRef = $<MapControls>()

    useEffect(() => {
        const renderer = $$(rendererRef)
        const camera = $$(cameraRef)
        if (!renderer || !camera) return

        const controls = new MapControls(camera, renderer.domElement)
        controls.enableDamping = true
        controls.dampingFactor = 0.05
        controls.screenSpacePanning = false
        controls.minDistance = 10
        controls.maxDistance = 200
        controls.maxPolarAngle = Math.PI / 2
        controlsRef(controls)

        return () => {
            controls.dispose()
        }
    })

    useFrame(() => {
        const controls = $$(controlsRef)
        if (controls) controls.update()
    })

    // Calculate orthographic camera bounds
    const aspect = window.innerWidth / window.innerHeight
    const frustumSize = 50

    // Generate grid of buildings
    const buildings = Array.from({ length: 100 }, (_, i) => {
        const x = (i % 10 - 5) * 10
        const z = (Math.floor(i / 10) - 5) * 10
        const height = 2 + Math.random() * 8
        return { position: [x, height / 2, z] as [number, number, number], height, color: new Color().setHSL(0.6, 0.3, 0.4 + Math.random() * 0.2) }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[50, 100, 50]} intensity={0.8} castShadow />

                {/* Ground */}
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
                    <boxGeometry args={[100, 100, 0.1]} />
                    <meshStandardMaterial color={0x2d2d44} />
                </mesh>

                {/* Buildings */}
                {buildings.map((building, i) => (
                    <mesh key={i} position={building.position}>
                        <boxGeometry args={[5, building.height, 5]} />
                        <meshStandardMaterial color={building.color} />
                    </mesh>
                ))}
            </scene>

            <orthographicCamera
                ref={cameraRef}
                left={frustumSize * aspect / -2}
                right={frustumSize * aspect / 2}
                top={frustumSize / 2}
                bottom={frustumSize / -2}
                near={0.1}
                far={500}
                position={[50, 50, 50]}
                onUpdate={(self) => self.lookAt(0, 0, 0)}
            />
        </canvas3D>
    )
}

export default Map