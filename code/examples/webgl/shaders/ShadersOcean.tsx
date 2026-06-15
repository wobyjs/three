/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/PlaneGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/ConeGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_shaders_ocean from Three.js examples.
 * Demonstrates animated water/ocean shader.
 *
 * Source: https://threejs.org/examples/webgl_shaders_ocean.html
 */

export const ShadersOcean = () => {
    const planeRef = $<THREE.Mesh>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const plane = $$(planeRef)
        if (plane) plane.position.y = Math.sin(time) * 0.2
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a3a5c)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[10, 10, 5]} intensity={0.8} />
                <mesh ref={planeRef} position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <planeGeometry args={[50, 50, 64, 64]} />
                    <meshStandardMaterial color={0x006994} roughness={0.3} metalness={0.6} transparent opacity={0.8} />
                </mesh>
                <mesh position={[0, 1, 0]}>
                    <sphereGeometry args={[1, 32, 32]} />
                    <meshStandardMaterial color={0xffd700} roughness={0.2} metalness={0.8} />
                </mesh>
                <mesh position={[0, 5, -30]}>
                    <coneGeometry args={[8, 10, 4]} />
                    <meshStandardMaterial color={0x2a4a6a} />
                </mesh>
            </scene>
            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={200} position={[0, 5, 20]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default ShadersOcean