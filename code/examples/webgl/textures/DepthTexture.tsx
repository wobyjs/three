/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/materials/MeshDepthMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_depth_texture from Three.js examples.
 * Demonstrates depth texture rendering.
 *
 * Source: https://threejs.org/examples/webgl_depth_texture.html
 */

export const DepthTexture = () => {
    const meshRef = $<THREE.Mesh>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const mesh = $$(meshRef)
        if (mesh) {
            mesh.rotation.x = time * 0.3
            mesh.rotation.y = time * 0.4
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 10, 7]} intensity={0.8} castShadow />

                {/* Main object with depth material */}
                <mesh ref={meshRef} position={[0, 0, 0]} castShadow>
                    <boxGeometry args={[2, 2, 2]} />
                    <meshDepthMaterial />
                </mesh>

                {/* Additional objects */}
                <mesh position={[-3, 0, 0]} castShadow>
                    <sphereGeometry args={[1, 16, 16]} />
                    <meshStandardMaterial color={0x3498db} />
                </mesh>

                <mesh position={[3, 0, 0]} castShadow>
                    <cylinderGeometry args={[0.8, 0.8, 2, 16]} />
                    <meshStandardMaterial color={0xe74c3c} />
                </mesh>

                {/* Ground */}
                <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                    <boxGeometry args={[15, 15, 0.1]} />
                    <meshStandardMaterial color={0x222222} />
                </mesh>
            </scene>

            <perspectiveCamera fov={45} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[5, 4, 8]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default DepthTexture