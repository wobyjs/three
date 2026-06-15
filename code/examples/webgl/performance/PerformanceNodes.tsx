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
 * Port of webgl_performance_nodes from Three.js examples.
 * Demonstrates node-based performance optimizations.
 *
 * Source: https://threejs.org/examples/webgl_performance_nodes.html
 */

export const PerformanceNodes = () => {
    const meshRef = $<THREE.Mesh>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const mesh = $$(meshRef)
        if (mesh) {
            mesh.rotation.y = time * 0.3
            mesh.rotation.x = time * 0.1
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x0a0a0a)}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[10, 10, 10]} intensity={0.8} />

                <mesh ref={meshRef} position={[0, 0, 0]}>
                    <icosahedronGeometry args={[2, 2]} />
                    <meshStandardMaterial color={0x2ecc71} flatShading />
                </mesh>

                {/* Node-like spheres */}
                {Array.from({ length: 40 }).map((_, i) => {
                    const theta = (i / 40) * Math.PI * 2
                    const phi = (i / 40) * Math.PI
                    const radius = 4 + Math.sin(i * 0.5) * 1
                    return (
                        <mesh key={i} position={[
                            Math.sin(phi) * Math.cos(theta) * radius,
                            Math.cos(phi) * radius * 0.6,
                            Math.sin(phi) * Math.sin(theta) * radius
                        ]}>
                            <sphereGeometry args={[0.12, 8, 8]} />
                            <meshStandardMaterial color={0xf1c40f} />
                        </mesh>
                    )
                })}
            </scene>

            <perspectiveCamera fov={45} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 3, 10]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default PerformanceNodes