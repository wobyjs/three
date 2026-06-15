/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, PCFSoftShadowMap } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/PlaneGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/lights/SpotLight'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_shadowmap_viewer from Three.js examples.
 * Demonstrates shadow map visualization and debugging.
 *
 * Source: https://threejs.org/examples/webgl_shadowmap_viewer.html
 */

export const ShadowmapViewer = () => {
    const meshRef = $<THREE.Mesh>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const mesh = $$(meshRef)
        if (mesh) {
            mesh.rotation.x = Math.sin(time * 0.5) * 0.2
            mesh.rotation.y = time * 0.3
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias shadowMap enabled setShadowMapType={PCFSoftShadowMap} setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.3} />

                {/* Spot light with soft shadows */}
                <spotLight
                    position={[0, 10, 0]}
                    intensity={100}
                    angle={Math.PI / 4}
                    penumbra={0.5}
                    castShadow
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                />

                {/* Animated box */}
                <mesh ref={meshRef} position={[0, 2, 0]} castShadow receiveShadow>
                    <boxGeometry args={[2, 2, 2]} />
                    <meshStandardMaterial color={0xff6b6b} roughness={0.3} metalness={0.7} />
                </mesh>

                {/* Spheres */}
                {[[-3, 0.5, -2], [3, 0.5, -2], [0, 0.5, 3]].map((pos, i) => (
                    <mesh key={i} position={pos as [number, number, number]} castShadow receiveShadow>
                        <boxGeometry args={[1, 1, 1]} />
                        <meshStandardMaterial color={0x4ecdc4} roughness={0.4} metalness={0.6} />
                    </mesh>
                ))}

                {/* Ground */}
                <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                    <planeGeometry args={[20, 20]} />
                    <meshStandardMaterial color={0x333333} roughness={0.9} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[8, 8, 8]} />
            <orbitControls enableDamping target={[0, 2, 0]} />
        </canvas3D>
    )
}

export default ShadowmapViewer