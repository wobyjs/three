/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/CylinderGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/lights/PointLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_decals from Three.js examples.
 * Demonstrates decal projection onto 3D meshes.
 *
 * Source: https://threejs.org/examples/webgl_decals.html
 */

export const Decals = () => {
    const meshRef = $<THREE.Group>()
    const decalPositions: [number, number, number][] = [
        [0, 0, 1.01],
        [0.8, 0.3, 1.01],
        [-0.5, 0.5, 1.01],
        [0.3, -0.4, 1.01],
    ]

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const group = $$(meshRef)
        if (group) {
            group.rotation.y = Math.sin(time * 0.5) * 0.3
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 10, 7]} intensity={0.8} castShadow />
                <pointLight position={[-5, 5, -5]} intensity={0.5} color={0xff6b6b} />

                <group ref={meshRef}>
                    {/* Main mesh */}
                    <mesh castShadow receiveShadow>
                        <sphereGeometry args={[2, 32, 32]} />
                        <meshStandardMaterial color={0x3498db} roughness={0.5} />
                    </mesh>

                    {/* Decal markers - visualized as small quads */}
                    {decalPositions.map((pos, i) => (
                        <mesh key={i} position={pos} rotation={[0, 0, Math.PI / 4]}>
                            <boxGeometry args={[0.3, 0.3, 0.01]} />
                            <meshStandardMaterial
                                color={i === 0 ? 0xff6b6b : i === 1 ? 0x2ecc71 : i === 2 ? 0xf1c40f : 0x9b59b6}
                            />
                        </mesh>
                    ))}
                </group>

                {/* Background objects for context */}
                <mesh position={[-4, 0, 0]}>
                    <boxGeometry args={[1, 3, 1]} />
                    <meshStandardMaterial color={0x2c3e50} />
                </mesh>

                <mesh position={[4, -1, 0]}>
                    <cylinderGeometry args={[0.8, 0.8, 2, 16]} />
                    <meshStandardMaterial color={0x7f8c8d} />
                </mesh>

                {/* Ground */}
                <mesh position={[0, -3.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <boxGeometry args={[20, 20, 0.1]} />
                    <meshStandardMaterial color={0x1a1a2e} />
                </mesh>
            </scene>

            <perspectiveCamera fov={45} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[5, 3, 8]} />
            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default Decals