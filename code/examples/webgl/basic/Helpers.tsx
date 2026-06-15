/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/CylinderGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'
import '@woby/three/src/helpers/AxesHelper'
import '@woby/three/src/helpers/GridHelper'
import '@woby/three/src/helpers/ArrowHelper'

/**
 * Port of webgl_helpers from Three.js examples.
 * Demonstrates various scene helpers like AxesHelper, GridHelper, ArrowHelper.
 *
 * Source: https://threejs.org/examples/webgl_helpers.html
 */

export const Helpers = () => {
    const groupRef = $<THREE.Group>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const group = $$(groupRef)
        if (group) {
            group.rotation.y = time * 0.3
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[10, 10, 10]} intensity={1} castShadow />

                {/* Axes helper - shows XYZ axes */}
                <axesHelper args={[5]} />

                {/* Grid helper */}
                <gridHelper args={[20, 20, 0x444444, 0x222222]} position={[0, -2, 0]} />

                {/* Group with objects */}
                <group ref={groupRef} position={[0, 0, 0]}>
                    {/* Box with arrow showing its forward direction */}
                    <mesh position={[0, 1, 0]}>
                        <boxGeometry args={[1, 1, 1]} />
                        <meshStandardMaterial color={0xff6b6b} roughness={0.3} metalness={0.7} />
                    </mesh>
                    <arrowHelper args={[new THREE.Vector3(0, 0, 1), new THREE.Vector3(0, 1, 0), 1.5, 0xffff00]} />

                    {/* Cylinder */}
                    <mesh position={[3, 0, 0]}>
                        <cylinderGeometry args={[0.5, 0.5, 2, 16]} />
                        <meshStandardMaterial color={0x4ecdc4} roughness={0.4} metalness={0.6} />
                    </mesh>

                    {/* Sphere */}
                    <mesh position={[-3, 0, 0]}>
                        <sphereGeometry args={[0.7, 32, 32]} />
                        <meshStandardMaterial color={0xffe66d} roughness={0.2} metalness={0.8} />
                    </mesh>
                </group>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={200} position={[10, 10, 10]} />
            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default Helpers