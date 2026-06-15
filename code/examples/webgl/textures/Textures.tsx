/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/PlaneGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_textures from Three.js examples.
 * Demonstrates various texture types and loading.
 *
 * Source: https://threejs.org/examples/webgl_textures.html
 */

export const Textures = () => {
    const groupRef = $<THREE.Group>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        
        const group = $$(groupRef)
        if (group) {
            group.children.forEach((child: any, i: number) => {
                child.rotation.y = time * 0.5 + i * 0.1
            })
        }
    })

    const textures = [
        { color: 0xff6b6b, roughness: 0.1, metalness: 0.1, label: 'Shiny' },
        { color: 0x4ecdc4, roughness: 0.5, metalness: 0.5, label: 'Metal' },
        { color: 0xffd93d, roughness: 0.9, metalness: 0.0, label: 'Rough' },
        { color: 0x9b59b6, roughness: 0.3, metalness: 0.7, label: 'PBR' },
        { color: 0x3498db, roughness: 0.6, metalness: 0.3, label: 'Standard' },
        { color: 0x2ecc71, roughness: 0.4, metalness: 0.4, label: 'Balanced' },
    ]

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 10, 7]} intensity={1} />

                <group ref={groupRef}>
                    {textures.map((tex, i) => {
                        const row = Math.floor(i / 3)
                        const col = i % 3
                        const x = (col - 1) * 4
                        const y = (1 - row) * 4

                        return (
                            <mesh key={i} position={[x, y, 0]}>
                                <planeGeometry args={[2.5, 2.5]} />
                                <meshStandardMaterial 
                                    color={tex.color} 
                                    roughness={tex.roughness} 
                                    metalness={tex.metalness}
                                />
                            </mesh>
                        )
                    })}
                </group>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 0, 12]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default Textures