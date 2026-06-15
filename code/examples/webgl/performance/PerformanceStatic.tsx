/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/CylinderGeometry'
import '@woby/three/src/geometries/PlaneGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/materials/MeshPhysicalMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/lights/PointLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_performance_static from Three.js examples.
 * Demonstrates static performance optimizations.
 *
 * Source: https://threejs.org/examples/webgl_performance_static.html
 */

export const PerformanceStatic = () => {
    const groupRef = $<THREE.Group>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const group = $$(groupRef)
        if (group) {
            group.rotation.y = time * 0.05
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[10, 10, 10]} intensity={0.8} />
                <pointLight position={[-10, 5, -10]} intensity={0.5} color={0x3498db} />

                <group ref={groupRef}>
                    {/* Static scene with many objects */}
                    {Array.from({ length: 100 }).map((_, i) => {
                        const x = ((i % 10) - 5) * 2
                        const z = (Math.floor(i / 10) - 5) * 2
                        const y = Math.random() * 0.5
                        const size = 0.3 + Math.random() * 0.4
                        return (
                            <mesh key={i} position={[x, y, z]}>
                                <boxGeometry args={[size, size, size]} />
                                <meshStandardMaterial color={i % 2 === 0 ? 0xe74c3c : 0x3498db} />
                            </mesh>
                        )
                    })}
                </group>

                {/* Ground */}
                <mesh position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <planeGeometry args={[30, 30]} />
                    <meshStandardMaterial color={0x222222} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 10, 20]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default PerformanceStatic