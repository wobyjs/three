/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, ConvexGeometry } from 'three'
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
 * Port of webgl_geometry_convex from Three.js examples.
 * Demonstrates convex hull geometry from a set of points.
 *
 * Source: https://threejs.org/examples/webgl_geometry_convex.html
 *
 * Features:
 * - Convex hull computation
 * - Dynamic point cloud visualization
 */

export const GeometryConvex = () => {
    const meshRef = $<THREE.Mesh>()
    const pointsRef = $<THREE.Points>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const mesh = $$(meshRef)
        if (mesh) {
            mesh.rotation.x = time * 0.3
            mesh.rotation.y = time * 0.5
        }
    })

    // Generate random points for convex hull
    const points: THREE.Vector3[] = []
    for (let i = 0; i < 30; i++) {
        const x = (Math.random() - 0.5) * 4
        const y = (Math.random() - 0.5) * 4
        const z = (Math.random() - 0.5) * 4
        points.push(new THREE.Vector3(x, y, z))
    }

    // Create convex geometry from points
    const geometry = new THREE.ConvexGeometry(points)

    // Create points geometry for visualization
    const pointsGeometry = new THREE.BufferGeometry()
    const positions = new Float32Array(points.length * 3)
    points.forEach((p, i) => {
        positions[i * 3] = p.x
        positions[i * 3 + 1] = p.y
        positions[i * 3 + 2] = p.z
    })
    pointsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 10, 7]} intensity={1} />

                {/* Convex hull mesh */}
                <mesh ref={meshRef} geometry={geometry}>
                    <meshStandardMaterial color={0xff6b6b} roughness={0.3} metalness={0.7} side={THREE.DoubleSide} />
                </mesh>

                {/* Point cloud visualization */}
                <points ref={pointsRef} geometry={pointsGeometry}>
                    <pointsMaterial color={0x4ecdc4} size={0.15} />
                </points>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 0, 8]} />

            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default GeometryConvex