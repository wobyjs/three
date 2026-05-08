/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, PCFSoftShadowMap, ACESFilmicToneMapping, NoToneMapping, LinearToneMapping, ReinhardToneMapping, CineonToneMapping } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/PlaneGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_lights_tonemapping from Three.js examples.
 * Demonstrates different tone mapping options for HDR rendering.
 *
 * Source: https://threejs.org/examples/webgl_lights_tonemapping.html
 *
 * Key features:
 * - Multiple tone mapping modes
 * - Exposure control
 * - HDR-like rendering
 */

const TONE_MAPPING_OPTIONS = [
    { name: 'NoToneMapping', value: NoToneMapping },
    { name: 'LinearToneMapping', value: LinearToneMapping },
    { name: 'ReinhardToneMapping', value: ReinhardToneMapping },
    { name: 'CineonToneMapping', value: CineonToneMapping },
    { name: 'ACESFilmicToneMapping', value: ACESFilmicToneMapping },
]

export const ToneMapping = () => {
    const rendererRef = $<THREE.WebGLRenderer>()

    // Animation for demonstration
    useFrame(({ clock }) => {
        // Could add UI controls here for tone mapping selection
    })

    return (
        <canvas3D>
            <webGLRenderer
                ref={rendererRef}
                antialias
                setPixelRatio={[window.devicePixelRatio]}
                setSize={[window.innerWidth, window.innerHeight]}
                toneMapping={ACESFilmicToneMapping}
                toneMappingExposure={1.2}
                outputColorSpace={THREE.SRGBColorSpace}
            />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.3} />
                <directionalLight
                    position={[5, 10, 5]}
                    intensity={2}
                    castShadow
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                />

                {/* Central sphere with bright material */}
                <mesh position={[0, 0.5, 0]} castShadow receiveShadow>
                    <sphereGeometry args={[0.5, 64, 64]} />
                    <meshStandardMaterial
                        color={0xffffff}
                        emissive={0x444444}
                        roughness={0.2}
                        metalness={0.8}
                    />
                </mesh>

                {/* Ground plane */}
                <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                    <planeGeometry args={[10, 10]} />
                    <meshStandardMaterial color={0x333344} roughness={0.8} />
                </mesh>

                {/* Additional spheres with varying brightness */}
                <mesh position={[-2, 0.3, 0]} castShadow receiveShadow>
                    <sphereGeometry args={[0.3, 32, 32]} />
                    <meshStandardMaterial color={0xffffff} emissive={0x111111} roughness={0.5} metalness={0.5} />
                </mesh>

                <mesh position={[2, 0.3, 0]} castShadow receiveShadow>
                    <sphereGeometry args={[0.3, 32, 32]} />
                    <meshStandardMaterial color={0xffffff} emissive={0x333333} roughness={0.5} metalness={0.5} />
                </mesh>
            </scene>

            <perspectiveCamera
                fov={50}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[3, 3, 5]}
            />
            <orbitControls target={[0, 0.5, 0]} enableDamping />
        </canvas3D>
    )
}

export default ToneMapping
