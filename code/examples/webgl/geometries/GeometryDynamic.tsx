/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/PlaneGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_geometry_dynamic from Three.js examples.
 * Demonstrates dynamic geometry manipulation with vertex animation.
 *
 * Source: https://threejs.org/examples/webgl_geometry_dynamic.html
 *
 * Features:
 * - Real-time vertex position updates
 * - Wave animation on geometry
 */

export const GeometryDynamic = () => {
    const meshRef = $<THREE.Mesh>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const mesh = $$(meshRef)
        if (mesh) {
            const geometry = mesh.geometry as THREE.PlaneGeometry
            const position = geometry.attributes.position

            for (let i = 0; i < position.count; i++) {
                const x = position.getX(i)
                const y = position.getY(i)

                // Create wave effect
                const wave = Math.sin(x * 2 + time * 2) * 0.5 +
                    Math.cos(y * 2 + time * 3) * 0.5

                position.setZ(i, wave)
            }

            position.needsUpdate = true
            geometry.computeVertexNormals()
        }
    })

    // Create plane with subdivisions for wave effect
    const geometry = new THREE.PlaneGeometry(10, 10, 50, 50)

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x0a0a0a)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 10, 7]} intensity={1} />

                <mesh ref={meshRef} geometry={geometry} rotation={[-Math.PI / 3, 0, 0]}>
                    <meshStandardMaterial color={0x4ecdc4} roughness={0.3} metalness={0.5} side={THREE.DoubleSide} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 5, 8]} />

            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default GeometryDynamic