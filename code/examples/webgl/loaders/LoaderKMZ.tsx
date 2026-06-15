/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import * as THREE from 'three'

import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_loader_kmz from Three.js examples.
 * Demonstrates KMZ (Google Earth) model loading.
 *
 * Source: https://threejs.org/examples/webgl_loader_kmz.html
 */

export const LoaderKMZ = () => {
    const groupRef = $<THREE.Group>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const group = $$(groupRef)
        if (group) {
            group.rotation.y = time * 0.2
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new THREE.Color(0x999999)}>
                <directionalLight color={0xffffff} intensity={3} position={[0.5, 1.0, 0.5]} />

                <group ref={groupRef} position={[0, 0.5, 0]}>
                    {/* Grid */}
                    <gridHelper args={[50, 50, 0xffffff, 0x7b7b7b]} />

                    {/* KMZ model placeholder - marker/pin */}
                    <mesh position={[0, 1.5, 0]}>
                        <coneGeometry args={[0.5, 2, 8]} />
                        <meshStandardMaterial color={0xff0000} />
                    </mesh>
                    <mesh position={[0, 2.5, 0]}>
                        <sphereGeometry args={[0.5, 16, 16]} />
                        <meshStandardMaterial color={0xff0000} />
                    </mesh>
                </group>
            </scene>

            <perspectiveCamera fov={35} aspect={window.innerWidth / window.innerHeight} near={1} far={500} position={[0, 5, 10]} />
            <orbitControls />
        </canvas3D>
    )
}

export default LoaderKMZ