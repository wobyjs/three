/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_lights_physical

import { $, $$, useFrame } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/materials/MeshPhysicalMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/PointLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_lights_physical from Three.js examples.
 * Demonstrates physically correct lighting with PBR materials.
 *
 * Source: https://threejs.org/examples/webgl_lights_physical.html
 */

export const WebglLightsPhysical = () => {
    const lightRef = $<THREE.PointLight>()
    const sphereRef = $<THREE.Mesh>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0

        const light = $$(lightRef)
        const sphere = $$(sphereRef)
        if (light) {
            light.position.x = Math.sin(time) * 3
            light.position.z = Math.cos(time) * 3
        }
        if (sphere) {
            sphere.rotation.y = time * 0.3
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias physicallyCorrectLights shadowMap setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x0a0a0a)}>
                {/* Moving point light with physically correct intensity */}
                <pointLight
                    ref={lightRef}
                    position={[3, 2, 0]}
                    intensity={50}
                    distance={10}
                    decay={2}
                    castShadow
                />

                {/* Ambient for fill */}
                <ambientLight intensity={0.1} />

                {/* Central sphere with physical material */}
                <mesh ref={sphereRef} position={[0, 0, 0]} castShadow>
                    <sphereGeometry args={[1.5, 64, 64]} />
                    <meshPhysicalMaterial
                        color={0x3498db}
                        metalness={0.9}
                        roughness={0.1}
                        clearcoat={0.5}
                        clearcoatRoughness={0.1}
                    />
                </mesh>

                {/* Surrounding spheres */}
                {[-2, 0, 2].map((x, i) =>
                    [-2, 0, 2].map((z, j) => (
                        x !== 0 || z !== 0 ? (
                            <mesh key={`sphere-${i}-${j}`} position={[x, 0, z]} castShadow>
                                <sphereGeometry args={[0.3, 16, 16]} />
                                <meshPhysicalMaterial color={new Color().setHSL((i * 3 + j) / 9, 0.7, 0.5)} roughness={0.5} metalness={0.3} />
                            </mesh>
                        ) : null
                    ))
                )}

                {/* Floor */}
                <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                    <boxGeometry args={[10, 10, 0.1]} />
                    <meshStandardMaterial color={0x333333} roughness={0.8} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[5, 5, 5]} />
            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default WebglLightsPhysical