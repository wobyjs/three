/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame, useThree, useRenderer } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, Mesh, BoxGeometry, SphereGeometry, PlaneGeometry, DirectionalLight, CameraHelper, WebGLRenderer } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/PlaneGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/helpers/CameraHelper'
import '@woby/three/src/helpers/DirectionalLightHelper'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_advanced_shadowmap_viewer from Three.js examples.
 * Demonstrates shadow map visualization.
 *
 * Source: https://threejs.org/examples/webgl_advanced_shadowmap_viewer.html
 *
 * Key features:
 * - Shadow map visualization
 * - Debug shadow rendering
 * - Shadow camera frustum display
 */

export const ShadowMapViewer = () => {
    const lightRef = $<DirectionalLight>()

    useFrame(({ clock }) => {
        const light = $$(lightRef)
        if (light) {
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

                {/* Light with shadow */}
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
                >
                    {/* Light helper */}
                    <directionalLightHelper args={[10]} />
                </directionalLight>

                {/* Shadow camera helper */}
                <cameraHelper>
                    <orthographicCamera
                        left={-10}
                        right={10}
                        top={10}
                        bottom={-10}
                        near={0.1}
                        far={50}
                        position={[5, 10, 5]}
                    />
                </cameraHelper>

                {/* Objects */}
                <mesh position={[0, 1, 0]} castShadow>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color={0xff6b6b} />
                </mesh>

                <mesh position={[2, 0.5, 0]} castShadow>
                    <sphereGeometry args={[0.5, 32, 32]} />
                    <meshStandardMaterial color={0x4ecdc4} />
                </mesh>

                {/* Floor */}
                <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                    <planeGeometry args={[20, 20]} />
                    <meshStandardMaterial color={0x333333} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[8, 8, 8]} />
            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default ShadowMapViewer