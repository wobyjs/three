/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/PlaneGeometry'
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_framebuffer_texture from Three.js examples.
 * Demonstrates framebuffer texture rendering.
 *
 * Source: https://threejs.org/examples/webgl_framebuffer_texture.html
 */

export const FramebufferTexture = () => {
    const meshRef = $<THREE.Mesh>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const mesh = $$(meshRef)
        if (mesh) {
            mesh.rotation.y = time * 0.3
            mesh.rotation.x = Math.sin(time * 0.5) * 0.2
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 10, 7]} intensity={0.8} />

                {/* Main object with framebuffer texture */}
                <mesh ref={meshRef} position={[0, 0, 0]}>
                    <boxGeometry args={[3, 2, 1.5]} />
                    <meshStandardMaterial color={0x3498db} roughness={0.3} metalness={0.7} />
                </mesh>

                {/* Reference objects */}
                <mesh position={[-4, 0, 0]}>
                    <sphereGeometry args={[1, 32, 32]} />
                    <meshStandardMaterial color={0xe74c3c} />
                </mesh>

                <mesh position={[4, 0, 0]}>
                    <cylinderGeometry args={[0.8, 0.8, 2, 16]} />
                    <meshStandardMaterial color={0x2ecc71} />
                </mesh>

                {/* Ground plane */}
                <mesh position={[0, -2.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <planeGeometry args={[20, 20]} />
                    <meshStandardMaterial color={0x222222} roughness={0.9} />
                </mesh>
            </scene>

            <perspectiveCamera fov={45} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[6, 4, 8]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default FramebufferTexture