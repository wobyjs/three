/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_lights_spotlights

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
 * Port of webgl_lights_spotlights from Three.js examples.
 * Multiple spotlights in a row.
 *
 * Source: https://threejs.org/examples/webgl_lights_spotlights.html
 */

export const WebglLightsSpotlights = () => {
    const groupRef = $<THREE.Group>()
    const spotRefs = [$<THREE.SpotLight>(), $<THREE.SpotLight>(), $<THREE.SpotLight>()]

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const group = $$(groupRef)
        if (group) group.rotation.y = time * 0.2

        // Animate spotlight angles
        spotRefs.forEach((ref, i) => {
            const spot = $$(ref)
            if (spot) {
                spot.angle = Math.PI / 4 + Math.sin(time * 2 + i) * 0.1
            }
        })
    })

    return (
        <canvas3D>
            <webGLRenderer antialias shadowMap setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                {/* Multiple spotlights */}
                <spotLight
                    ref={spotRefs[0]}
                    position={[0, 5, 0]}
                    angle={Math.PI / 4}
                    penumbra={0.5}
                    intensity={1}
                    color={0xe74c3c}
                    castShadow
                />
                <spotLight
                    ref={spotRefs[1]}
                    position={[5, 5, 0]}
                    angle={Math.PI / 4}
                    penumbra={0.5}
                    intensity={1}
                    color={0x3498db}
                />
                <spotLight
                    ref={spotRefs[2]}
                    position={[-5, 5, 0]}
                    angle={Math.PI / 4}
                    penumbra={0.5}
                    intensity={1}
                    color={0x2ecc71}
                />

                <group ref={groupRef}>
                    <mesh position={[-2, 0, 0]}>
                        <sphereGeometry args={[0.8, 32, 32]} />
                        <meshStandardMaterial color={0xffffff} roughness={0.2} metalness={0.5} />
                    </mesh>
                    <mesh position={[0, 0, 0]}>
                        <sphereGeometry args={[0.8, 32, 32]} />
                        <meshStandardMaterial color={0xffffff} roughness={0.2} metalness={0.5} />
                    </mesh>
                    <mesh position={[2, 0, 0]}>
                        <sphereGeometry args={[0.8, 32, 32]} />
                        <meshStandardMaterial color={0xffffff} roughness={0.2} metalness={0.5} />
                    </mesh>
                </group>

                {/* Floor */}
                <mesh position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                    <boxGeometry args={[20, 20, 0.1]} />
                    <meshStandardMaterial color={0x333333} roughness={0.8} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 5, 12]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default WebglLightsSpotlights