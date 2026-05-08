/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, Mesh, BoxGeometry, SphereGeometry, PlaneGeometry, DirectionalLight } from 'three'
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
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_advanced_shadowmap_performance from Three.js examples.
 * Demonstrates shadow map performance optimization.
 *
 * Source: https://threejs.org/examples/webgl_advanced_shadowmap_performance.html
 *
 * Key features:
 * - Shadow map optimization techniques
 * - Multiple shadow-casting objects
 * - Performance vs quality tradeoffs
 */

const OBJECT_COUNT = 50

export const ShadowMapPerformance = () => {
    const lightRef = $<DirectionalLight>()
    const meshesRef = $<THREE.Mesh[]>([])

    useFrame(({ clock }) => {
        const meshes = $$(meshesRef)
        if (!meshes) return

        const time = clock.getElapsedTime()

        // Animate objects
        meshes.forEach((mesh, i) => {
            if (mesh) {
                mesh.position.y = 0.5 + Math.sin(time * 2 + i * 0.5) * 0.3
                mesh.rotation.y = time + i * 0.1
            }
        })

        // Animate light
        const light = $$(lightRef)
        if (light) {
            light.position.x = Math.sin(time * 0.3) * 10
            light.position.z = Math.cos(time * 0.3) * 10
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
            <scene background={new Color(0x111111)}>
                <ambientLight intensity={0.2} />

                {/* Optimized shadow light */}
                <directionalLight
                    ref={lightRef}
                    position={[5, 15, 5]}
                    intensity={1}
                    castShadow
                    shadow-camera-left={-15}
                    shadow-camera-right={15}
                    shadow-camera-top={15}
                    shadow-camera-bottom={-15}
                    shadow-camera-near={0.1}
                    shadow-camera-far={50}
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                />

                {/* Multiple shadow-casting objects */}
                {Array.from({ length: OBJECT_COUNT }, (_, i) => {
                    const x = (Math.random() - 0.5) * 20
                    const z = (Math.random() - 0.5) * 20
                    const scale = 0.3 + Math.random() * 0.5

                    return (
                        <mesh
                            key={i}
                            ref={(el: THREE.Mesh) => {
                                const meshes = $$(meshesRef) || []
                                meshes[i] = el
                                meshesRef(meshes)
                            }}
                            position={[x, 0.5, z]}
                            scale={[scale, scale, scale]}
                            castShadow
                        >
                            <boxGeometry args={[1, 1, 1]} />
                            <meshStandardMaterial color={new Color().setHSL(Math.random(), 0.7, 0.5)} />
                        </mesh>
                    )
                })}

                {/* Floor */}
                <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                    <planeGeometry args={[30, 30]} />
                    <meshStandardMaterial color={0x333333} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[10, 10, 10]} />
            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default ShadowMapPerformance