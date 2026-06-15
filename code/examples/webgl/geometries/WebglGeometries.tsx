/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from "@woby/three"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/CylinderGeometry'
import '@woby/three/src/geometries/ConeGeometry'
import '@woby/three/src/geometries/OctahedronGeometry'
import '@woby/three/src/geometries/TetrahedronGeometry'
import '@woby/three/src/geometries/IcosahedronGeometry'
import '@woby/three/src/geometries/TorusGeometry'
import '@woby/three/src/geometries/TorusKnotGeometry'
import '@woby/three/src/geometries/DodecahedronGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_geometries from Three.js examples.
 * Shows various geometry types.
 *
 * Source: https://threejs.org/examples/webgl_geometries.html
 */

export const WebglGeometries = () => {
    const groupRef = $<THREE.Group>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0

        const group = $$(groupRef)
        if (group) {
            group.rotation.y = time * 0.2
        }
    })

    const geometries = [
        { Component: 'boxGeometry', args: [1, 1, 1], name: 'Box' },
        { Component: 'sphereGeometry', args: [0.7, 32, 32], name: 'Sphere' },
        { Component: 'cylinderGeometry', args: [0.5, 0.5, 1, 32], name: 'Cylinder' },
        { Component: 'coneGeometry', args: [0.7, 1, 32], name: 'Cone' },
        { Component: 'octahedronGeometry', args: [0.7], name: 'Octahedron' },
        { Component: 'tetrahedronGeometry', args: [0.7], name: 'Tetrahedron' },
        { Component: 'icosahedronGeometry', args: [0.7], name: 'Icosahedron' },
        { Component: 'torusGeometry', args: [0.5, 0.2, 16, 50], name: 'Torus' },
        { Component: 'torusKnotGeometry', args: [0.5, 0.2, 64, 8], name: 'TorusKnot' },
        { Component: 'dodecahedronGeometry', args: [0.7], name: 'Dodecahedron' },
    ]

    const createGeometries = () => {
        return geometries.map((geo, i) => {
            const row = Math.floor(i / 5)
            const col = i % 5
            const x = (col - 2) * 3
            const y = (1 - row) * 3
            const color = new Color().setHSL(i / geometries.length, 0.7, 0.5)

            return (
                <mesh key={i} position={[x, y, 0]}>
                    {geo.Component === 'boxGeometry' && <boxGeometry args={geo.args} />}
                    {geo.Component === 'sphereGeometry' && <sphereGeometry args={geo.args} />}
                    {geo.Component === 'cylinderGeometry' && <cylinderGeometry args={geo.args} />}
                    {geo.Component === 'coneGeometry' && <coneGeometry args={geo.args} />}
                    {geo.Component === 'octahedronGeometry' && <octahedronGeometry args={geo.args} />}
                    {geo.Component === 'tetrahedronGeometry' && <tetrahedronGeometry args={geo.args} />}
                    {geo.Component === 'icosahedronGeometry' && <icosahedronGeometry args={geo.args} />}
                    {geo.Component === 'torusGeometry' && <torusGeometry args={geo.args} />}
                    {geo.Component === 'torusKnotGeometry' && <torusKnotGeometry args={geo.args} />}
                    {geo.Component === 'dodecahedronGeometry' && <dodecahedronGeometry args={geo.args} />}
                    <meshStandardMaterial color={color} roughness={0.3} metalness={0.6} />
                </mesh>
            )
        })
    }

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 10, 7]} intensity={1} />

                <group ref={groupRef}>
                    {createGeometries()}
                </group>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 0, 15]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default WebglGeometries