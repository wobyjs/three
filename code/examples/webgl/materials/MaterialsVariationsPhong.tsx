/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/materials/MeshPhongMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_materials_variations_phong from Three.js examples.
 * Demonstrates MeshPhongMaterial with shininess variations.
 *
 * Source: https://threejs.org/examples/webgl_materials_variations_phong.html
 */

const materialVariations = [
    { name: 'Matte', color: 0xff6b6b, shininess: 5 },
    { name: 'Semi-Gloss', color: 0x4ecdc4, shininess: 30 },
    { name: 'Glossy', color: 0xffd93d, shininess: 100 },
    { name: 'High Gloss', color: 0x6bcb77, shininess: 200 },
    { name: 'Shiny', color: 0xaaaaaa, shininess: 500 },
    { name: 'Mirror', color: 0xff9f43, shininess: 1000 },
    { name: 'Polished', color: 0xffd700, shininess: 300 },
    { name: 'Satin', color: 0xb87333, shininess: 50 },
    { name: 'Dull', color: 0xffffff, shininess: 10 },
]

export const MaterialsVariationsPhong = () => {
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
                            <meshPhongMaterial color={mat.color} shininess={mat.shininess} />
                        </mesh>
                    )
                })}
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 5, 12]} />
            <orbitControls enableDamping target={[0, 0, 3]} />
        </canvas3D>
    )
}

export default MaterialsVariationsPhong
