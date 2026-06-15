/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/materials/MeshToonMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_materials_variations_toon from Three.js examples.
 * Demonstrates MeshToonMaterial with various color combinations.
 *
 * Source: https://threejs.org/examples/webgl_materials_variations_toon.html
 */

const materialVariations = [
    { name: 'Red', color: 0xff0000 },
    { name: 'Green', color: 0x00ff00 },
    { name: 'Blue', color: 0x0000ff },
    { name: 'Cyan', color: 0x00ffff },
    { name: 'Magenta', color: 0xff00ff },
    { name: 'Yellow', color: 0xffff00 },
    { name: 'Orange', color: 0xff8800 },
    { name: 'Purple', color: 0x8800ff },
    { name: 'White', color: 0xffffff },
]

export const MaterialsVariationsToon = () => {
    const meshes: THREE.Mesh[] = []

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        meshes.forEach((mesh, i) => {
            mesh.rotation.y = time * 0.5 + i * 0.2
        })
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 10, 5]} intensity={1} />
                <directionalLight position={[-5, 5, -5]} intensity={0.5} />

                {/* Material variations grid */}
                {materialVariations.map((mat, i) => {
                    const row = Math.floor(i / 3)
                    const col = i % 3
                    const x = (col - 1) * 3
                    const z = row * 3

                    return (
                        <mesh
                            key={i}
                            position={[x, 0, z]}
                            ref={(el: THREE.Mesh) => { if (el) meshes.push(el) }}
                        >
                            <sphereGeometry args={[1, 32, 32]} />
                            <meshToonMaterial color={mat.color} />
                        </mesh>
                    )
                })}
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 5, 12]} />
            <orbitControls enableDamping target={[0, 0, 3]} />
        </canvas3D>
    )
}

export default MaterialsVariationsToon
