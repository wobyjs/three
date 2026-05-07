/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/PlaneGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/lights/HemisphereLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_lights_hemisphere from Three.js examples.
 * Demonstrates hemisphere light for outdoor lighting effects.
 *
 * Source: https://threejs.org/examples/webgl_lights_hemisphere.html
 *
 * HemisphereLight simulates outdoor lighting with:
 * - Sky color (light from above)
 * - Ground color (light reflected from below)
 * - Creates natural ambient lighting for outdoor scenes
 */

export const Hemisphere = () => {
    const sphereRef = $<THREE.Mesh>()

    useFrame(() => {
        const sphere = $$(sphereRef)
        if (sphere) {
            sphere.rotation.y += 0.002
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x87CEEB)}>
                {/* Hemisphere light for outdoor lighting */}
                {/* skyColor: light blue, groundColor: brown/tan, intensity: 1 */}
                <hemisphereLight
                    color={0x87CEEB}
                    groundColor={0x8B4513}
                    intensity={1}
                    position={[0, 50, 0]}
                />

                {/* Additional directional light for shadows/highlights */}
                <directionalLight position={[5, 10, 7]} intensity={0.5} />

                {/* Main sphere to demonstrate lighting */}
                <mesh ref={sphereRef} position={[0, 0, 0]}>
                    <sphereGeometry args={[2, 32, 32]} />
                    <meshStandardMaterial color={0xffffff} roughness={0.5} metalness={0.1} />
                </mesh>

                {/* Ground plane */}
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
                    <planeGeometry args={[20, 20]} />
                    <meshStandardMaterial color={0x3d5c3d} roughness={0.8} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 3, 8]} />
            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default Hemisphere
