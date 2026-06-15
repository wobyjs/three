/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, HemisphereLightProbe } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/HemisphereLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_lights_hemisphere from Three.js examples.
 * Demonstrates hemisphere lighting.
 *
 * Source: https://threejs.org/examples/webgl_lights_hemisphere.html
 */

export const LightsHemisphere = () => {
    const meshRef = $<THREE.Mesh>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        
        const mesh = $$(meshRef)
        if (mesh) {
            mesh.rotation.y = time * 0.5
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                {/* Hemisphere light - sky color and ground color */}
                <hemisphereLight
                    skyColor={0xffffbb}
                    groundColor={0x080820}
                    intensity={1}
                    position={[0, 50, 0]}
                />

                {/* Central sphere */}
                <mesh ref={meshRef} position={[0, 0, 0]}>
                    <sphereGeometry args={[1, 32, 32]} />
                    <meshStandardMaterial color={0xffffff} roughness={0.5} metalness={0.5} />
                </mesh>

                {/* Floor */}
                <mesh position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <boxGeometry args={[10, 10, 0.1]} />
                    <meshStandardMaterial color={0x333333} roughness={0.8} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 2, 4]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default LightsHemisphere