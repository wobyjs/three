/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, PCFSoftShadowMap, ACESFilmicToneMapping } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/PlaneGeometry'
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/materials/MeshPhongMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/PointLight'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_lights_physical from Three.js examples.
 * Demonstrates physically-based lighting with varying light properties.
 *
 * Source: https://threejs.org/examples/webgl_lights_physical.html
 *
 * Key features:
 * - Physical light attenuation (decay)
 * - Multiple colored point lights
 * - PBR materials with metalness/roughness
 * - Soft shadows
 */

export const Physical = () => {
    const light1Ref = $<THREE.PointLight>()
    const light2Ref = $<THREE.PointLight>()
    const light3Ref = $<THREE.PointLight>()

    // Animate lights in circular paths
    useFrame(({ clock }) => {
        const time = clock.getElapsedTime()

        const light1 = $$(light1Ref)
        const light2 = $$(light2Ref)
        const light3 = $$(light3Ref)

        if (light1) {
            light1.position.x = Math.sin(time * 0.7) * 3
            light1.position.z = Math.cos(time * 0.7) * 3
        }

        if (light2) {
            light2.position.x = Math.sin(time * 0.5 + 2) * 3
            light2.position.z = Math.cos(time * 0.5 + 2) * 3
        }

        if (light3) {
            light3.position.x = Math.sin(time * 0.3 + 4) * 3
            light3.position.z = Math.cos(time * 0.3 + 4) * 3
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
                shadowMap-type={PCFSoftShadowMap}
            />
            <scene background={new Color(0x1a1a2e)}>
                {/* Ambient for base illumination */}
                <ambientLight intensity={0.1} />

                {/* Orbiting point lights with physical decay */}
                <pointLight
                    ref={light1Ref}
                    color={0xff6b6b}
                    intensity={50}
                    distance={10}
                    decay={2}
                    position={[3, 2, 0]}
                    castShadow
                    shadow-mapSize-width={512}
                    shadow-mapSize-height={512}
                />

                <pointLight
                    ref={light2Ref}
                    color={0x4ecdc4}
                    intensity={50}
                    distance={10}
                    decay={2}
                    position={[-3, 2, 0]}
                    castShadow
                    shadow-mapSize-width={512}
                    shadow-mapSize-height={512}
                />

                <pointLight
                    ref={light3Ref}
                    color={0xffe66d}
                    intensity={50}
                    distance={10}
                    decay={2}
                    position={[0, 2, 3]}
                    castShadow
                    shadow-mapSize-width={512}
                    shadow-mapSize-height={512}
                />

                {/* Central sphere with PBR material */}
                <mesh position={[0, 0.5, 0]} castShadow receiveShadow>
                    <sphereGeometry args={[0.5, 64, 64]} />
                    <meshStandardMaterial
                        color={0xffffff}
                        roughness={0.2}
                        metalness={0.8}
                    />
                </mesh>

                {/* Ground plane */}
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
                    <planeGeometry args={[10, 10]} />
                    <meshStandardMaterial color={0x333344} roughness={0.8} />
                </mesh>

                {/* Additional objects for shadow demonstration */}
                <mesh position={[-1.5, 0, -1]} castShadow receiveShadow>
                    <boxGeometry args={[0.5, 0.5, 0.5]} />
                    <meshStandardMaterial color={0x888899} roughness={0.5} metalness={0.5} />
                </mesh>

                <mesh position={[1.5, 0, 1]} castShadow receiveShadow>
                    <sphereGeometry args={[0.3, 32, 32]} />
                    <meshStandardMaterial color={0x888899} roughness={0.3} metalness={0.7} />
                </mesh>
            </scene>

            <perspectiveCamera
                fov={50}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[5, 4, 5]}
            />
            <orbitControls
                target={[0, 0, 0]}
                enableDamping
                dampingFactor={0.05}
            />
        </canvas3D>
    )
}

export default Physical
