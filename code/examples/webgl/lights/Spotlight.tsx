/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, SpotLightHelper, PCFShadowMap, NeutralToneMapping } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/PlaneGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/materials/MeshLambertMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/SpotLight'
import '@woby/three/src/lights/HemisphereLight'
import '@woby/three/src/helpers/SpotLightHelper'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_lights_spotlight from Three.js examples.
 * Demonstrates spotlight with shadow mapping and orbiting animation.
 *
 * Source: https://threejs.org/examples/webgl_lights_spotlight.html
 *
 * Key features:
 * - SpotLight with shadow mapping
 * - Orbiting light animation
 * - SpotLightHelper for visualization
 * - Kebab-case shadow properties
 */

export const Spotlight = () => {
    const spotLight_ref = $<THREE.SpotLight>()
    const helper_ref = $<SpotLightHelper>()

    // Orbiting light animation
    useFrame(() => {
        const spotLight = $$(spot_light_ref)
        const helper = $$(helper_ref)
        if (!spotLight || !helper) return

        const time = performance.now() / 3000
        spotLight.position.x = Math.cos(time) * 2.5
        spotLight.position.z = Math.sin(time) * 2.5
        helper.update()
    })

    return (
        <canvas3D>
            <webGLRenderer
                antialias
                setPixelRatio={[window.devicePixelRatio]}
                setSize={[window.innerWidth, window.innerHeight]}
                toneMapping={NeutralToneMapping}
                toneMappingExposure={1}
                shadowMap-enabled={true}
                shadowMap-type={PCFShadowMap}
            />
            <scene background={new Color(0x222222)}>
                {/* Hemisphere light for ambient fill */}
                <hemisphereLight intensity={0.25} />

                {/* Orbiting spotlight with shadows */}
                <spotLight
                    ref={spot_light_ref}
                    color={0xffffff}
                    intensity={100}
                    position={[2.5, 5, 2.5]}
                    angle={Math.PI / 6}
                    penumbra={1}
                    decay={2}
                    distance={0}
                    castShadow
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                    shadow-camera-near={2}
                    shadow-camera-far={10}
                    shadow-focus={1}
                    shadow-bias={-0.003}
                />

                {/* Light helper for visualization */}
                <spotLightHelper ref={helper_ref} light={spot_light_ref} />

                {/* Ground plane receiving shadows */}
                <mesh
                    position={[0, -1, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    receiveShadow
                >
                    <planeGeometry args={[10, 10]} />
                    <meshLambertMaterial color={0xbcbcbc} />
                </mesh>

                {/* Central sphere casting shadow */}
                <mesh
                    position={[0, 0.5, 0]}
                    castShadow
                    receiveShadow
                >
                    <sphereGeometry args={[0.5, 32, 32]} />
                    <meshStandardMaterial color={0xff6b6b} roughness={0.3} metalness={0.7} />
                </mesh>

                {/* Additional objects for shadow demonstration */}
                <mesh position={[-1.5, -0.5, 1]} castShadow receiveShadow>
                    <sphereGeometry args={[0.3, 16, 16]} />
                    <meshStandardMaterial color={0x4ecdc4} roughness={0.4} metalness={0.6} />
                </mesh>

                <mesh position={[1.5, -0.3, -1]} castShadow receiveShadow>
                    <sphereGeometry args={[0.4, 16, 16]} />
                    <meshStandardMaterial color={0xffe66d} roughness={0.5} metalness={0.5} />
                </mesh>
            </scene>

            <perspectiveCamera
                fov={40}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[7, 4, 1]}
            />
            <orbitControls
                minDistance={2}
                maxDistance={10}
                maxPolarAngle={Math.PI / 2}
                target={[0, 0, 0]}
            />
        </canvas3D>
    )
}

export default Spotlight
