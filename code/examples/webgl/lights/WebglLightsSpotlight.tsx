/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_lights_spotlight

import { $, $$, useFrame } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/SpotLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_lights_spotlight from Three.js examples.
 * Demonstrates spotlight with shadows and moving target.
 *
 * Source: https://threejs.org/examples/webgl_lights_spotlight.html
 */

export const WebglLightsSpotlight = () => {
    const meshRef = $<THREE.Mesh>()
    const spotRef = $<THREE.SpotLight>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0

        const mesh = $$(meshRef)
        const spot = $$(spotRef)
        if (mesh) {
            mesh.position.x = Math.sin(time) * 3
            mesh.position.z = Math.cos(time) * 3
        }
        if (spot) {
            spot.target.position.x = Math.sin(time) * 3
            spot.target.position.z = Math.cos(time) * 3
            spot.target.updateMatrixWorld()
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias shadowMap setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                {/* Spotlight with shadow */}
                <spotLight
                    ref={spotRef}
                    position={[0, 5, 0]}
                    angle={Math.PI / 6}
                    penumbra={0.3}
                    intensity={2}
                    color={0xffffff}
                    castShadow
                    shadow-camera-near={0.1}
                    shadow-camera-far={20}
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                />

                {/* Moving sphere */}
                <mesh ref={meshRef} position={[3, 0, 0]} castShadow>
                    <sphereGeometry args={[0.5, 32, 32]} />
                    <meshStandardMaterial color={0x4ecdc4} />
                </mesh>

                {/* Ground */}
                <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                    <boxGeometry args={[10, 10, 0.1]} />
                    <meshStandardMaterial color={0x333333} />
                </mesh>

                {/* Static spheres */}
                <mesh position={[-3, 0, 0]} castShadow>
                    <sphereGeometry args={[0.5, 32, 32]} />
                    <meshStandardMaterial color={0xff6b6b} />
                </mesh>

                <mesh position={[0, 0, -3]} castShadow>
                    <sphereGeometry args={[0.5, 32, 32]} />
                    <meshStandardMaterial color={0xffd93d} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[5, 5, 5]} />
            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default WebglLightsSpotlight