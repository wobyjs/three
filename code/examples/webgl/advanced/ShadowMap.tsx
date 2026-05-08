/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, Mesh, BoxGeometry, SphereGeometry, PlaneGeometry, DirectionalLight, CameraHelper } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/PlaneGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/materials/ShadowMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/helpers/CameraHelper'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_advanced_shadowmap from Three.js examples.
 * Demonstrates shadow mapping techniques.
 *
 * Source: https://threejs.org/examples/webgl_advanced_shadowmap.html
 *
 * Key features:
 * - Shadow map rendering
 * - Cast and receive shadows
 * - Shadow quality settings
 */

export const ShadowMap = () => {
    const lightRef = $<DirectionalLight>()

    useFrame(({ clock }) => {
        const light = $$(lightRef)
        if (light) {
            // Animate light position
            const time = clock.getElapsedTime()
            light.position.x = Math.sin(time * 0.5) * 5
            light.position.z = Math.cos(time * 0.5) * 5
        }
    })

    return (
        <canvas3D>
            <webGLRenderer
                antialias
                shadowMap-enabled
                shadowMap-type={THREE.PCFSoftShadowMap}
                setPixelRatio={[window.devicePixelRatio]}
                setSize={[window.innerWidth, window.innerHeight]}
            />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.3} />

                {/* Main directional light with shadows */}
                <directionalLight
                    ref={lightRef}
                    position={[5, 10, 5]}
                    intensity={1}
                    castShadow
                    shadow-camera-left={-10}
                    shadow-camera-right={10}
                    shadow-camera-top={10}
                    shadow-camera-bottom={-10}
                    shadow-camera-near={0.1}
                    shadow-camera-far={50}
                    shadow-mapSize-width={2048}
                    shadow-mapSize-height={2048}
                />

                {/* Objects casting shadows */}
                <mesh position={[0, 1, 0]} castShadow>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color={0xff6b6b} />
                </mesh>

                <mesh position={[2, 0.5, 0]} castShadow>
                    <sphereGeometry args={[0.5, 32, 32]} />
                    <meshStandardMaterial color={0x4ecdc4} />
                </mesh>

                <mesh position={[-2, 0.5, 0]} castShadow>
                    <sphereGeometry args={[0.5, 32, 32]} />
                    <meshStandardMaterial color={0x45b7d1} />
                </mesh>

                {/* Floor receiving shadows */}
                <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                    <planeGeometry args={[20, 20]} />
                    <meshStandardMaterial color={0x333333} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[5, 5, 5]} />
            <orbitControls enableDamping target={[0, 0.5, 0]} />
        </canvas3D>
    )
}

export default ShadowMap