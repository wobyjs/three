/** @jsxImportSource @woby/three */

import { $, $$, useFrame, useEffect } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_shadowmesh from Three.js examples.
 * Demonstrates shadow mesh projection techniques.
 *
 * Source: https://threejs.org/examples/webgl_shadowmesh.html
 */

export const ShadowMesh = () => {
    const meshRef = $<THREE.Mesh>()
    const shadowMeshRef = $<THREE.Mesh>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const mesh = $$(meshRef)
        const shadow = $$(shadowMeshRef)

        if (mesh) {
            mesh.position.x = Math.sin(time) * 2
            mesh.position.y = Math.abs(Math.sin(time * 2)) + 0.5
        }
        if (shadow) {
            shadow.position.x = mesh?.position.x ?? 0
            shadow.position.y = 0.01
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias shadowMap enabled setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.3} />
                <directionalLight
                    position={[5, 10, 5]}
                    intensity={1}
                    castShadow
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                />

                {/* Shadow receiver plane */}
                <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                    <boxGeometry args={[10, 10, 0.01]} />
                    <meshStandardMaterial color={0x333333} roughness={0.8} />
                </mesh>

                {/* Main mesh with shadow */}
                <mesh ref={meshRef} position={[0, 1, 0]} castShadow>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color={0xff6b6b} roughness={0.3} metalness={0.7} />
                </mesh>

                {/* Fake shadow (alternative to real shadow) */}
                <mesh ref={shadowMeshRef} position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <planeGeometry args={[1.2, 1.2]} />
                    <meshBasicMaterial color={0x000000} transparent opacity={0.3} depthWrite={false} />
                </mesh>

                {/* Back wall */}
                <mesh position={[0, 2, -3]} receiveShadow>
                    <boxGeometry args={[10, 5, 0.1]} />
                    <meshStandardMaterial color={0x222233} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 3, 8]} />
            <orbitControls enableDamping target={[0, 1, 0]} />
        </canvas3D>
    )
}

export default ShadowMesh