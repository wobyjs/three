/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, VSMShadowMap, ACESFilmicToneMapping } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/PlaneGeometry'
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/lights/SpotLight'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_shadowmap_vsm from Three.js examples.
 * Demonstrates Variance Shadow Maps for soft, high-quality shadows.
 *
 * Source: https://threejs.org/examples/webgl_shadowmap_vsm.html
 *
 * Key features:
 * - VSM (Variance Shadow Maps)
 * - Soft shadow edges
 * - Reduced shadow acne
 * - Higher quality shadows
 */

export const ShadowmapVSM = () => {
    const spotLightRef = $<THREE.SpotLight>()

    // Animate spotlight
    useFrame(({ clock }) => {
        const time = clock.getElapsedTime()
        const light = $$(spotLightRef)

        if (light) {
            light.position.x = Math.sin(time * 0.7) * 3
            light.position.z = Math.cos(time * 0.7) * 3
        }
    })

    return (
        <canvas3D>
            <webGLRenderer
                antialias
                setPixelRatio={[window.devicePixelRatio]}
                setSize={[window.innerWidth, window.innerHeight]}
                toneMapping={ACESFilmicToneMapping}
                toneMappingExposure={1}
                shadowMap-enabled
                shadowMap-type={VSMShadowMap}
            />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.15} />

                {/* Spotlight with VSM shadows */}
                <spotLight
                    ref={spotLightRef}
                    color={0xffffff}
                    intensity={100}
                    position={[0, 8, 0]}
                    angle={Math.PI / 6}
                    penumbra={0.3}
                    decay={2}
                    distance={30}
                    castShadow
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                    shadow-camera-near={1}
                    shadow-camera-far={30}
                    shadow-bias={-0.0001}
                />

                {/* Ground plane */}
                <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                    <planeGeometry args={[30, 30]} />
                    <meshStandardMaterial color={0x333344} roughness={0.9} />
                </mesh>

                {/* Central object */}
                <mesh position={[0, 1, 0]} castShadow receiveShadow>
                    <sphereGeometry args={[1, 64, 64]} />
                    <meshStandardMaterial color={0xff6b6b} roughness={0.2} metalness={0.8} />
                </mesh>

                {/* Additional objects */}
                <mesh position={[-3, 0.5, -2]} castShadow receiveShadow>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color={0x4ecdc4} roughness={0.3} metalness={0.6} />
                </mesh>

                <mesh position={[3, 0.75, 2]} castShadow receiveShadow>
                    <boxGeometry args={[1.5, 1.5, 1.5]} />
                    <meshStandardMaterial color={0xffe66d} roughness={0.4} metalness={0.5} />
                </mesh>

                <mesh position={[-1, 0.3, 3]} castShadow receiveShadow>
                    <sphereGeometry args={[0.3, 32, 32]} />
                    <meshStandardMaterial color={0x9b59b6} roughness={0.1} metalness={0.9} />
                </mesh>
            </scene>

            <perspectiveCamera
                fov={50}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[8, 6, 8]}
            />
            <orbitControls target={[0, 0, 0]} enableDamping />
        </canvas3D>
    )
}

export default ShadowmapVSM
