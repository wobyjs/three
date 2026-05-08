/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, PCFSoftShadowMap, DirectionalLightHelper } from 'three'
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
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/helpers/DirectionalLightHelper'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_shadowmap from Three.js examples.
 * Demonstrates basic shadow mapping with directional light.
 *
 * Source: https://threejs.org/examples/webgl_shadowmap.html
 *
 * Key features:
 * - Directional light shadows
 * - Shadow camera frustum
 * - PCF soft shadows
 */

export const Shadowmap = () => {
    const lightRef = $<THREE.DirectionalLight>()
    const helperRef = $<DirectionalLightHelper>()

    // Animate light position
    useFrame(({ clock }) => {
        const time = clock.getElapsedTime()
        const light = $$(lightRef)
        const helper = $$(helperRef)

        if (light) {
            light.position.x = Math.cos(time * 0.5) * 5
            light.position.z = Math.sin(time * 0.5) * 5
        }

        if (helper) {
            helper.update()
        }
    })

    return (
        <canvas3D>
            <webGLRenderer
                antialias
                setPixelRatio={[window.devicePixelRatio]}
                setSize={[window.innerWidth, window.innerHeight]}
                shadowMap-enabled
                shadowMap-type={PCFSoftShadowMap}
            />
            <scene background={new Color(0x222233)}>
                <ambientLight intensity={0.2} />

                {/* Directional light with shadows */}
                <directionalLight
                    ref={lightRef}
                    color={0xffffff}
                    intensity={1.5}
                    position={[5, 10, 5]}
                    castShadow
                    shadow-mapSize-width={2048}
                    shadow-mapSize-height={2048}
                    shadow-camera-left={-10}
                    shadow-camera-right={10}
                    shadow-camera-top={10}
                    shadow-camera-bottom={-10}
                    shadow-camera-near={0.1}
                    shadow-camera-far={50}
                />

                {/* Light helper */}
                <directionalLightHelper ref={helperRef} light={lightRef} size={1} />

                {/* Ground plane receiving shadows */}
                <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                    <planeGeometry args={[20, 20]} />
                    <meshStandardMaterial color={0x444455} roughness={0.8} />
                </mesh>

                {/* Objects casting shadows */}
                <mesh position={[0, 1, 0]} castShadow receiveShadow>
                    <boxGeometry args={[1, 2, 1]} />
                    <meshStandardMaterial color={0xff6b6b} roughness={0.4} metalness={0.3} />
                </mesh>

                <mesh position={[-2, 0.5, -2]} castShadow receiveShadow>
                    <sphereGeometry args={[0.5, 32, 32]} />
                    <meshStandardMaterial color={0x4ecdc4} roughness={0.3} metalness={0.5} />
                </mesh>

                <mesh position={[2, 0.75, 1]} castShadow receiveShadow>
                    <boxGeometry args={[1.5, 1.5, 1.5]} />
                    <meshStandardMaterial color={0xffe66d} roughness={0.5} metalness={0.2} />
                </mesh>

                <mesh position={[-1, 0.4, 2]} castShadow receiveShadow>
                    <sphereGeometry args={[0.4, 32, 32]} />
                    <meshStandardMaterial color={0x9b59b6} roughness={0.2} metalness={0.7} />
                </mesh>
            </scene>

            <perspectiveCamera
                fov={50}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[8, 8, 8]}
            />
            <orbitControls target={[0, 1, 0]} enableDamping />
        </canvas3D>
    )
}

export default Shadowmap
