/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/CylinderGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_geometry_dynamic from Three.js examples.
 * Demonstrates dynamic geometry updates.
 *
 * Source: https://threejs.org/examples/webgl_geometry_dynamic.html
 */

export const GeometryDynamic = () => {
    const meshRef = $<THREE.Mesh>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const mesh = $$(meshRef)
        if (mesh && mesh.geometry instanceof THREE.BoxGeometry) {
            const pos = mesh.geometry.attributes.position
            const count = pos.count

            for (let i = 0; i < count; i++) {
                const x = pos.getX(i)
                const y = pos.getY(i)
                const z = pos.getZ(i)
                const scale = 1 + Math.sin(time * 3 + x * 5) * 0.1
                pos.setXYZ(i, x * scale, y * scale, z * scale)
            }
            pos.needsUpdate = true
            mesh.geometry.computeVertexNormals()
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 10, 5]} intensity={1} />

                <mesh ref={meshRef} position={[0, 0, 0]}>
                    <boxGeometry args={[2, 2, 2, 8, 8, 8]} />
                    <meshStandardMaterial color={0xff6b6b} roughness={0.3} metalness={0.7} />
                </mesh>

                <mesh position={[-3, 0, 0]}>
                    <cylinderGeometry args={[0.5, 0.5, 2, 16]} />
                    <meshStandardMaterial color={0x4ecdc4} />
                </mesh>

                <mesh position={[3, 0, 0]}>
                    <sphereGeometry args={[0.8, 16, 16]} />
                    <meshStandardMaterial color={0xffe66d} />
                </mesh>

                <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <boxGeometry args={[15, 15, 0.01]} />
                    <meshStandardMaterial color={0x222222} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 3, 8]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default GeometryDynamic