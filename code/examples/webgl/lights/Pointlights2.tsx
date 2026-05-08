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
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/PointLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_lights_pointlights2 from Three.js examples.
 * Demonstrates point light variations with different intensities and colors.
 *
 * Source: https://threejs.org/examples/webgl_lights_pointlights2.html
 *
 * Key features:
 * - Multiple point lights with varying properties
 * - Light color mixing
 * - Shadow casting from multiple sources
 */

export const Pointlights2 = () => {
    const light1Ref = $<THREE.PointLight>()
    const light2Ref = $<THREE.PointLight>()
    const light3Ref = $<THREE.PointLight>()
    const light4Ref = $<THREE.PointLight>()

    // Animate lights
    useFrame(({ clock }) => {
        const time = clock.getElapsedTime()

        const lights = [$$(light1Ref), $$(light2Ref), $$(light3Ref), $$(light4Ref)]

        lights.forEach((light, i) => {
            if (light) {
                const angle = time * 0.3 + (i * Math.PI) / 2
                const radius = 4
                light.position.x = Math.cos(angle) * radius
                light.position.z = Math.sin(angle) * radius
                light.position.y = 2 + Math.sin(time * 2 + i) * 0.5
            }
        })
    })

    return (
        <canvas3D>
            <webGLRenderer
                antialias
                setPixelRatio={[window.devicePixelRatio]}
                setSize={[window.innerWidth, window.innerHeight]}
                toneMapping={ACESFilmicToneMapping}
                toneMappingExposure={0.8}
                shadowMap-enabled
                shadowMap-type={PCFSoftShadowMap}
            />
            <scene background={new Color(0x0a0a0f)}>
                <ambientLight intensity={0.05} />

                {/* Four colored point lights */}
                <pointLight
                    ref={light1Ref}
                    color={0xff4444}
                    intensity={80}
                    distance={12}
                    decay={2}
                    castShadow
                    shadow-mapSize-width={512}
                    shadow-mapSize-height={512}
                />

                <pointLight
                    ref={light2Ref}
                    color={0x44ff44}
                    intensity={80}
                    distance={12}
                    decay={2}
                    castShadow
                    shadow-mapSize-width={512}
                    shadow-mapSize-height={512}
                />

                <pointLight
                    ref={light3Ref}
                    color={0x4444ff}
                    intensity={80}
                    distance={12}
                    decay={2}
                    castShadow
                    shadow-mapSize-width={512}
                    shadow-mapSize-height={512}
                />

                <pointLight
                    ref={light4Ref}
                    color={0xffff44}
                    intensity={80}
                    distance={12}
                    decay={2}
                    castShadow
                    shadow-mapSize-width={512}
                    shadow-mapSize-height={512}
                />

                {/* Central sphere */}
                <mesh position={[0, 1, 0]} castShadow receiveShadow>
                    <sphereGeometry args={[1, 64, 64]} />
                    <meshStandardMaterial color={0xffffff} roughness={0.1} metalness={0.9} />
                </mesh>

                {/* Ground plane */}
                <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                    <planeGeometry args={[20, 20]} />
                    <meshStandardMaterial color={0x222233} roughness={0.9} />
                </mesh>

                {/* Additional objects */}
                <mesh position={[-2, 0.5, -2]} castShadow receiveShadow>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color={0x888899} roughness={0.4} metalness={0.6} />
                </mesh>

                <mesh position={[2, 0.5, 2]} castShadow receiveShadow>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color={0x888899} roughness={0.4} metalness={0.6} />
                </mesh>
            </scene>

            <perspectiveCamera
                fov={50}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[8, 6, 8]}
            />
            <orbitControls target={[0, 1, 0]} enableDamping />
        </canvas3D>
    )
}

export default Pointlights2
