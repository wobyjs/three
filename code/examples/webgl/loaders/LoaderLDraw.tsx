/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import * as THREE from 'three'

import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_loader_ldraw from Three.js examples.
 * Demonstrates LDraw (LEGO) model loading.
 *
 * Source: https://threejs.org/examples/webgl_loader_ldraw.html
 */

export const LoaderLdraw = () => {
    const groupRef = $<THREE.Group>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const group = $$(groupRef)
        if (group) {
            group.rotation.y = time * 0.1
        }
    })

    // LEGO-like brick colors
    const colors = [0xff0000, 0x00ff00, 0x0000ff, 0xffff00, 0xff00ff]

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new THREE.Color(0xdeebed)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 5, 5]} intensity={1} />

                {/* LEGO bricks placeholder */}
                <group ref={groupRef}>
                    {Array.from({ length: 5 }, (_, y) =>
                        Array.from({ length: 5 }, (_, x) => (
                            <mesh
                                key={`${x}-${y}`}
                                position={[x - 2, y * 0.5, 0]}
                            >
                                <boxGeometry args={[1, 0.5, 1]} />
                                <meshStandardMaterial color={colors[(x + y) % colors.length]} />
                            </mesh>
                        ))
                    )}
                </group>
            </scene>

            <perspectiveCamera fov={45} aspect={window.innerWidth / window.innerHeight} near={1} far={10000} position={[150, 200, 250]} />
            <orbitControls />
        </canvas3D>
    )
}

export default LoaderLdraw