/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/materials/MeshDoubleSide'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_performance_doublesided from Three.js examples.
 * Demonstrates double-sided rendering performance.
 *
 * Source: https://threejs.org/examples/webgl_performance_doublesided.html
 */

export const PerformanceDoublesided = () => {
    const groupRef = $<THREE.Group>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const group = $$(groupRef)
        if (group) {
            group.rotation.y = time * 0.1
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 10, 7]} intensity={0.8} />

                <group ref={groupRef}>
                    {/* Planes with double-sided material */}
                    {Array.from({ length: 50 }).map((_, i) => {
                        const x = ((i % 10) - 5) * 2.5
                        const y = (Math.floor(i / 10) - 2.5) * 2.5
                        const rotY = Math.random() * Math.PI
                        const rotX = Math.random() * 0.5 - 0.25
                        return (
                            <mesh key={i} position={[x, y, 0]} rotation={[rotX, rotY, 0]}>
                                <planeGeometry args={[2, 2]} />
                                <meshStandardMaterial color={i % 2 === 0 ? 0x3498db : 0xe74c3c} side={2} />
                            </mesh>
                        )
                    })}
                </group>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 0, 15]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default PerformanceDoublesided