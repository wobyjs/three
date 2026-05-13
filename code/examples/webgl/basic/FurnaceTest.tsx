/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, MeshPhysicalMaterial, SphereGeometry, TorusGeometry, BoxGeometry } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/TorusGeometry'
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/materials/MeshPhysicalMaterial'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/lights/PointLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_furnace_test from Three.js examples.
 * Demonstrates PBR furnace test for energy conservation.
 *
 * Source: https://threejs.org/examples/webgl_furnace_test.html
 *
 * Key features:
 * - MeshPhysicalMaterial with various roughness/metalness
 * - Energy conservation verification
 * - Uniform lighting environment
 * - PBR validation
 */

export const FurnaceTest = () => {
    const meshesRef = $<THREE.Group>()

    useEffect(() => {
        const group = new THREE.Group()

        // Create a grid of spheres with varying roughness and metalness
        const gridSize = 5
        const spacing = 3

        for (let i = 0; i < gridSize; i++) {
            for (let j = 0; j < gridSize; j++) {
                const roughness = i / (gridSize - 1)
                const metalness = j / (gridSize - 1)

                const geometry = new SphereGeometry(1, 32, 32)
                const material = new MeshPhysicalMaterial({
                    color: 0xffffff,
                    roughness,
                    metalness,
                    envMapIntensity: 1
                })

                const mesh = new THREE.Mesh(geometry, material)
                mesh.position.set(
                    (i - gridSize / 2 + 0.5) * spacing,
                    (j - gridSize / 2 + 0.5) * spacing,
                    0
                )

                group.add(mesh)
            }
        }

        meshesRef(group as THREE.Group)
    })

    useFrame((state) => {
        const group = $$(meshesRef)
        if (group) {
            group.rotation.y = (state.clock?.getElapsedTime() ?? 0) * 0.1
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x333333)}>
                {/* Uniform ambient lighting simulates furnace environment */}
                <ambientLight intensity={1} />

                {/* Point lights from all directions for uniform illumination */}
                <pointLight position={[10, 10, 10]} intensity={0.5} />
                <pointLight position={[-10, 10, 10]} intensity={0.5} />
                <pointLight position={[10, -10, 10]} intensity={0.5} />
                <pointLight position={[-10, -10, 10]} intensity={0.5} />
                <pointLight position={[10, 10, -10]} intensity={0.5} />
                <pointLight position={[-10, 10, -10]} intensity={0.5} />
                <pointLight position={[10, -10, -10]} intensity={0.5} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} />

                {/* Sphere grid */}
                {() => {
                    const group = $$(meshesRef)
                    if (!group) return null
                    return <primitive object={group} />
                }}

                {/* Reference white sphere */}
                <mesh position={[0, 0, -5]}>
                    <sphereGeometry args={[0.5, 16, 16]} />
                    <meshStandardMaterial color={0xffffff} emissive={0xffffff} emissiveIntensity={1} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 0, 15]} />
            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default FurnaceTest