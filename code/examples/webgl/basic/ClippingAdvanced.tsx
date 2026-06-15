/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, Plane, Vector3 } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/CylinderGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/materials/MeshPhongMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_clipping_advanced from Three.js examples.
 * Demonstrates advanced clipping with multiple planes and intersection.
 *
 * Source: https://threejs.org/examples/webgl_clipping_advanced.html
 */

export const ClippingAdvanced = () => {
    // Create multiple clipping planes
    const clipPlanes = [
        new Plane(new Vector3(1, 0, 0), 0),
        new Plane(new Vector3(0, 1, 0), 0),
        new Plane(new Vector3(0, 0, 1), 0)
    ]

    const meshRef = $<THREE.Mesh>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        // Animate clip planes
        clipPlanes[0].constant = Math.sin(time) * 0.5
        clipPlanes[1].constant = Math.sin(time * 0.8) * 0.5
        clipPlanes[2].constant = Math.sin(time * 0.6) * 0.5
    })

    return (
        <canvas3D>
            <webGLRenderer
                antialias
                setPixelRatio={[window.devicePixelRatio]}
                setSize={[window.innerWidth, window.innerHeight]}
                localClippingEnabled={true}
            />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 10, 7]} intensity={1} castShadow />

                {/* Clipped sphere with multiple planes */}
                <mesh ref={meshRef} position={[0, 0, 0]}>
                    <sphereGeometry args={[1.5, 32, 32]} />
                    <meshPhongMaterial
                        color={0x4ecdc4}
                        clippingPlanes={clipPlanes}
                        clipShadows
                        side={THREE.DoubleSide}
                    />
                </mesh>

                {/* Helper boxes to show clip plane positions */}
                <mesh position={[0, 0, 0]}>
                    <boxGeometry args={[3, 3, 3]} />
                    <meshStandardMaterial
                        color={0x333333}
                        wireframe
                        transparent
                        opacity={0.3}
                    />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[3, 3, 3]} />
            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default ClippingAdvanced
