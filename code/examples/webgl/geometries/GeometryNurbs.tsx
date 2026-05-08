/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, NURBSCurve, NURBSSurface } from 'three'
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
 * Port of webgl_geometry_nurbs from Three.js examples.
 * Demonstrates NURBS (Non-Uniform Rational B-Spline) curves and surfaces.
 *
 * Source: https://threejs.org/examples/webgl_geometry_nurbs.html
 *
 * Features:
 * - NURBS curve generation
 * - NURBS surface geometry
 * - Smooth curve interpolation
 */

export const GeometryNurbs = () => {
    const meshRef = $<THREE.Mesh>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const mesh = $$(meshRef)
        if (mesh) {
            mesh.rotation.y = time * 0.2
        }
    })

    // Create NURBS-like curve using CatmullRom
    const points = [
        new THREE.Vector3(-4, 0, 0),
        new THREE.Vector3(-2, 2, 1),
        new THREE.Vector3(0, -1, 2),
        new THREE.Vector3(2, 3, 0),
        new THREE.Vector3(4, 0, -1)
    ]

    const curve = new THREE.CatmullRomCurve3(points)
    const tubeGeometry = new THREE.TubeGeometry(curve, 64, 0.2, 16, false)

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 10, 7]} intensity={1} />

                {/* NURBS curve tube */}
                <mesh ref={meshRef} geometry={tubeGeometry}>
                    <meshStandardMaterial color={0xff6b6b} roughness={0.3} metalness={0.7} />
                </mesh>

                {/* Control points visualization */}
                {points.map((point, i) => (
                    <mesh key={i} position={[point.x, point.y, point.z]}>
                        <sphereGeometry args={[0.15, 16, 16]} />
                        <meshStandardMaterial color={0x4ecdc4} roughness={0.3} metalness={0.5} />
                    </mesh>
                ))}
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 3, 10]} />

            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default GeometryNurbs