/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, SphereGeometry, MeshBasicMaterial, MeshStandardMaterial, Vector3 } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/materials/MeshBasicMaterial'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/objects/Group'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/PointLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_drawcalls from Three.js examples.
 * Demonstrates draw call optimization and rendering performance.
 *
 * Source: https://threejs.org/examples/webgl_drawcalls.html
 *
 * Key features:
 * - Multiple objects with different materials
 * - Draw call counting
 * - Performance visualization
 * - Geometry merging demonstration
 */

const SPHERE_COUNT = 500

export const Drawcalls = () => {
    const groupRef = $<THREE.Group>()
    const mergedMeshRef = $<THREE.Mesh>()

    useEffect(() => {
        const group = new THREE.Group()

        // Create many individual spheres (high draw call count)
        const geometry = new SphereGeometry(0.5, 16, 16)

        for (let i = 0; i < SPHERE_COUNT; i++) {
            const material = new MeshStandardMaterial({
                color: new Color().setHSL(Math.random(), 0.7, 0.5),
                roughness: 0.5 + Math.random() * 0.5,
                metalness: Math.random() * 0.5
            })

            const mesh = new THREE.Mesh(geometry, material)

            // Random positions in a sphere
            const radius = 5 + Math.random() * 5
            const theta = Math.random() * Math.PI * 2
            const phi = Math.acos(2 * Math.random() - 1)

            mesh.position.set(
                radius * Math.sin(phi) * Math.cos(theta),
                radius * Math.sin(phi) * Math.sin(theta),
                radius * Math.cos(phi)
            )

            mesh.rotation.set(
                Math.random() * Math.PI,
                Math.random() * Math.PI,
                Math.random() * Math.PI
            )

            group.add(mesh)
        }

        groupRef(group as THREE.Group)

        // Create merged geometry (single draw call)
        const mergedGeometry = new THREE.BufferGeometry()
        const positions: number[] = []
        const normals: number[] = []
        const colors: number[] = []

        const sphereGeo = new SphereGeometry(0.5, 8, 8)
        const posAttr = sphereGeo.attributes.position
        const normAttr = sphereGeo.attributes.normal

        for (let i = 0; i < 100; i++) {
            const radius = 5 + Math.random() * 5
            const theta = Math.random() * Math.PI * 2
            const phi = Math.acos(2 * Math.random() - 1)

            const x = radius * Math.sin(phi) * Math.cos(theta)
            const y = radius * Math.sin(phi) * Math.sin(theta)
            const z = radius * Math.cos(phi)

            const color = new Color().setHSL(Math.random(), 0.7, 0.5)

            for (let j = 0; j < posAttr.count; j++) {
                const px = posAttr.getX(j)
                const py = posAttr.getY(j)
                const pz = posAttr.getZ(j)

                positions.push(px + x, py + y, pz + z)
                normals.push(normAttr.getX(j), normAttr.getY(j), normAttr.getZ(j))
                colors.push(color.r, color.g, color.b)
            }
        }

        mergedGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
        mergedGeometry.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3))
        mergedGeometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))

        const mergedMaterial = new MeshStandardMaterial({
            vertexColors: true,
            roughness: 0.5,
            metalness: 0.3
        })

        const mergedMesh = new THREE.Mesh(mergedGeometry, mergedMaterial)
        mergedMeshRef(mergedMesh)
    })

    useFrame((state) => {
        const group = $$(groupRef)
        const merged = $$(mergedMeshRef)

        const time = state.clock?.getElapsedTime() ?? 0

        if (group) {
            group.rotation.y = time * 0.1
        }

        if (merged) {
            merged.rotation.y = -time * 0.1
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.3} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} />

                {/* Individual spheres (many draw calls) */}
                <group ref={groupRef} position={[-8, 0, 0]}>
                    {/* Spheres added in useEffect */}
                </group>

                {/* Merged geometry (single draw call) */}
                {() => {
                    const merged = $$(mergedMeshRef)
                    if (!merged) return null
                    return <primitive object={merged} position={[8, 0, 0]} />
                }}

                {/* Labels */}
                <mesh position={[-8, 8, 0]}>
                    <sphereGeometry args={[0]} />
                    <meshBasicMaterial color={0xff6b6b} />
                </mesh>

                {/* Info text would be added via HTML overlay */}
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 5, 20]} />
            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default Drawcalls