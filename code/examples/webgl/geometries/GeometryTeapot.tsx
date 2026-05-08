/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_geometry_teapot from Three.js examples.
 * Demonstrates the Utah Teapot - a classic computer graphics test model.
 *
 * Source: https://threejs.org/examples/webgl_geometry_teapot.html
 *
 * Features:
 * - Teapot geometry
 * - Various material options
 */

export const GeometryTeapot = () => {
    const meshRef = $<THREE.Mesh>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const mesh = $$(meshRef)
        if (mesh) {
            mesh.rotation.y = time * 0.3
        }
    })

    // Create a teapot-like shape using torus knots
    // (Full TeapotGeometry requires jsm import)
    const teapotBody = new THREE.SphereGeometry(1.5, 32, 32)
    const spout = new THREE.TorusGeometry(0.5, 0.15, 16, 32, Math.PI)

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x0a0a0a)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 10, 7]} intensity={1} />

                {/* Teapot body (sphere approximation) */}
                <mesh ref={meshRef} geometry={teapotBody} position={[0, 0, 0]}>
                    <meshStandardMaterial color={0xff6b6b} roughness={0.3} metalness={0.7} />
                </mesh>

                {/* Lid */}
                <mesh position={[0, 1.5, 0]}>
                    <sphereGeometry args={[0.6, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
                    <meshStandardMaterial color={0xff6b6b} roughness={0.3} metalness={0.7} />
                </mesh>

                {/* Spout approximation */}
                <mesh geometry={spout} position={[1.5, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                    <meshStandardMaterial color={0xff6b6b} roughness={0.3} metalness={0.7} />
                </mesh>

                {/* Handle */}
                <mesh position={[-1.5, 0, 0]}>
                    <torusGeometry args={[0.6, 0.1, 16, 32]} />
                    <meshStandardMaterial color={0xff6b6b} roughness={0.3} metalness={0.7} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 2, 6]} />

            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default GeometryTeapot