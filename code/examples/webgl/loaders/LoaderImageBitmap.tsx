/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import * as THREE from 'three'

import '@woby/three/src/materials/MeshBasicMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_loader_imagebitmap from Three.js examples.
 * Demonstrates ImageBitmap loading for textures.
 *
 * Source: https://threejs.org/examples/webgl_loader_imagebitmap.html
 */

export const LoaderImagebitmap = () => {
    const groupRef = $<THREE.Group>()
    const cubesRef = $<THREE.Group>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const group = $$(groupRef)
        if (group) {
            group.rotation.y = time * 0.3
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene>
                <group ref={groupRef}>
                    {/* Grid helper */}
                    <gridHelper args={[4, 12, 0x888888, 0x444444]} />

                    {/* Cubes group */}
                    <group ref={cubesRef}>
                        {/* Placeholder cubes - in real usage would load textures */}
                        {[...Array(6)].map((_, i) => (
                            <mesh
                                key={i}
                                position={[
                                    Math.random() * 2 - 1,
                                    Math.random() * 2 - 1,
                                    Math.random() * 2 - 1
                                ]}
                                rotation={[
                                    Math.random() * Math.PI * 2,
                                    Math.random() * Math.PI * 2,
                                    Math.random() * Math.PI * 2
                                ]}
                            >
                                <boxGeometry />
                                <meshBasicMaterial color={i < 3 ? 0xff8888 : 0x88ff88} />
                            </mesh>
                        ))}
                    </group>
                </group>
            </scene>

            <perspectiveCamera fov={30} aspect={window.innerWidth / window.innerHeight} near={1} far={1500} position={[0, 4, 7]} />
            <orbitControls target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default LoaderImagebitmap