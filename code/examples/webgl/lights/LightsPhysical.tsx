/** @jsxImportSource @woby/three */

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
import '@woby/three/src/lights/PointLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_lights_physical from Three.js examples.
 * Demonstrates physically based lights.
 *
 * Source: https://threejs.org/examples/webgl_lights_physical.html
 */

export const LightsPhysical = () => {
    const lightRef = $<THREE.PointLight>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        
        const light = $$(lightRef)
        if (light) {
            light.position.x = Math.sin(time) * 3
            light.position.z = Math.cos(time) * 3
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias shadowMap physicallyCorrectLights setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x0a0a0a)}>
                {/* Physically correct point light */}
                <pointLight
                    ref={lightRef}
                    position={[3, 2, 0]}
                    intensity={50}
                    distance={10}
                    decay={2}
                    castShadow
                />

                {/* Central sphere */}
                <mesh position={[0, 0, 0]} castShadow>
                    <sphereGeometry args={[1, 32, 32]} />
                    <meshStandardMaterial color={0xffffff} roughness={0.2} metalness={0.8} />
                </mesh>

                {/* Floor */}
                <mesh position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                    <boxGeometry args={[10, 10, 0.1]} />
                    <meshStandardMaterial color={0x333333} roughness={0.8} />
                </mesh>

                {/* Surrounding spheres */}
                {[-2, 0, 2].map((x, i) =>
                    [-2, 0, 2].map((z, j) => (
                        x !== 0 || z !== 0 ? (
                            <mesh key={`${i}-${j}`} position={[x, 0, z]} castShadow>
                                <sphereGeometry args={[0.3, 16, 16]} />
                                <meshStandardMaterial color={new Color().setHSL((i * 3 + j) / 9, 0.7, 0.5)} roughness={0.5} />
                            </mesh>
                        ) : null
                    ))
                )}
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[5, 5, 5]} />
            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default LightsPhysical