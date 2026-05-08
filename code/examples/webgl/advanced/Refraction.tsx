/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, Refractor, Vector2 } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/PlaneGeometry'
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
 * Port of webgl_refraction from Three.js examples.
 * Demonstrates real-time planar refraction using Refractor.
 *
 * Source: https://threejs.org/examples/webgl_refraction.html
 *
 * Key features:
 * - Refractor for refractive surface
 * - Real-time refraction rendering
 * - Glass-like material effect
 */

export const Refraction = () => {
    const refractorRef = $<Refractor>()

    useEffect(() => {
        const geometry = new THREE.PlaneGeometry(10, 10)
        const refractor = new Refractor(geometry, {
            clipBias: 0.003,
            textureWidth: window.innerWidth * window.devicePixelRatio,
            textureHeight: window.innerHeight * window.devicePixelRatio,
            color: 0x889999
        })
        refractorRef(refractor as unknown as Refractor)
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x111111)}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 10, 5]} intensity={1} />

                {/* Refractive panel */}
                {() => {
                    const refractor = $$(refractorRef)
                    if (!refractor) return null
                    refractor.position.z = -2
                    return <primitive object={refractor} />
                }}

                {/* Objects behind refractor */}
                <mesh position={[-2, 0, -5]}>
                    <sphereGeometry args={[1, 32, 32]} />
                    <meshStandardMaterial color={0xff6b6b} metalness={0.5} roughness={0.3} />
                </mesh>

                <mesh position={[2, 0, -5]}>
                    <sphereGeometry args={[1, 32, 32]} />
                    <meshStandardMaterial color={0x4ecdc4} metalness={0.5} roughness={0.3} />
                </mesh>

                <mesh position={[0, 0, -8]}>
                    <boxGeometry args={[2, 2, 2]} />
                    <meshStandardMaterial color={0x45b7d1} metalness={0.5} roughness={0.3} />
                </mesh>

                {/* Floor */}
                <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <boxGeometry args={[20, 20, 0.1]} />
                    <meshStandardMaterial color={0x333333} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 2, 5]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default Refraction
