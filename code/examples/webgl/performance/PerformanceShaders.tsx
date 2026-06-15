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
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_performance_shaders from Three.js examples.
 * Demonstrates shader performance optimization.
 *
 * Source: https://threejs.org/examples/webgl_performance_shaders.html
 */

export const PerformanceShaders = () => {
    const meshRef = $<THREE.Mesh>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const mesh = $$(meshRef)
        if (mesh) {
            mesh.rotation.y = time * 0.2
            mesh.rotation.x = Math.sin(time * 0.3) * 0.1
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x000000)}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 10, 7]} intensity={0.8} />

                <mesh ref={meshRef} position={[0, 0, 0]}>
                    <torusKnotGeometry args={[1.5, 0.5, 128, 32]} />
                    <meshStandardMaterial color={0x3498db} roughness={0.3} metalness={0.8} />
                </mesh>

                {/* Surrounding shader balls */}
                {Array.from({ length: 30 }).map((_, i) => {
                    const theta = (i / 30) * Math.PI * 2
                    const phi = Math.random() * Math.PI
                    const radius = 4
                    return (
                        <mesh key={i} position={[
                            Math.sin(phi) * Math.cos(theta) * radius,
                            Math.cos(phi) * radius * 0.5,
                            Math.sin(phi) * Math.sin(theta) * radius
                        ]}>
                            <sphereGeometry args={[0.15, 16, 16]} />
                            <meshStandardMaterial
                                color={i % 3 === 0 ? 0xff6b6b : i % 3 === 1 ? 0x2ecc71 : 0xf1c40f}
                            />
                        </mesh>
                    )
                })}
            </scene>

            <perspectiveCamera fov={45} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 2, 8]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default PerformanceShaders