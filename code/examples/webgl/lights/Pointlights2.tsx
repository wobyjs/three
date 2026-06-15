/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/materials/MeshBasicMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/PointLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_lights_pointlights2 from Three.js examples.
 * Demonstrates multiple colored point lights with different decay rates.
 *
 * Source: https://threejs.org/examples/webgl_lights_pointlights2.html
 */

export const Pointlights2 = () => {
    const groupRef = $<THREE.Group>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const group = $$(groupRef)
        if (group) group.rotation.y = time * 0.2
    })

    const colors = [0xff0000, 0x00ff00, 0x0000ff, 0xffff00, 0xff00ff, 0x00ffff]
    const positions: [number, number, number][] = [
        [-4, 2, 0], [4, 2, 0], [0, 4, 0], [-2, 0, 3], [2, 0, 3], [0, 2, -3]
    ]

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x0a0a0a)}>
                <ambientLight intensity={0.1} />

                {colors.map((color, i) => (
                    <pointLight
                        key={i}
                        position={positions[i]}
                        color={color}
                        intensity={50}
                        distance={10}
                        decay={2}
                    />
                ))}

                <group ref={groupRef}>
                    <mesh>
                        <sphereGeometry args={[1, 32, 32]} />
                        <meshStandardMaterial color={0xffffff} roughness={0.1} metalness={0.5} />
                    </mesh>

                    {colors.map((color, i) => {
                        const angle = (i / colors.length) * Math.PI * 2
                        return (
                            <mesh key={`sphere-${i}`} position={[Math.cos(angle) * 3, 0, Math.sin(angle) * 3]}>
                                <sphereGeometry args={[0.3, 16, 16]} />
                                <meshBasicMaterial color={color} />
                            </mesh>
                        )
                    })}
                </group>

                <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <boxGeometry args={[20, 20, 0.01]} />
                    <meshStandardMaterial color={0x111111} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 3, 10]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default Pointlights2