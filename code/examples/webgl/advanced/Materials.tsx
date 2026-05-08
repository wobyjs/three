/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, MeshStandardMaterial, SphereGeometry, BoxGeometry } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/materials/MeshBasicMaterial'
import '@woby/three/src/materials/MeshNormalMaterial'
import '@woby/three/src/materials/MeshPhongMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/lights/PointLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_advanced_materials from Three.js examples.
 * Demonstrates various material types and their properties.
 *
 * Source: https://threejs.org/examples/webgl_advanced_materials.html
 *
 * Key features:
 * - Multiple material types showcase
 * - Material property variations
 * - Interactive material switching
 */

const materialTypes = [
    { name: 'Basic', color: 0xff6b6b },
    { name: 'Lambert', color: 0x4ecdc4 },
    { name: 'Phong', color: 0x45b7d1 },
    { name: 'Standard', color: 0x96ceb4 },
    { name: 'Normal', color: 0xffffff },
    { name: 'Toon', color: 0xffeaa7 }
]

export const Materials = () => {
    const meshRefs = $<THREE.Mesh[]>([])

    useFrame(({ clock }) => {
        const meshes = $$(meshRefs)
        if (!meshes) return

        meshes.forEach((mesh, i) => {
            if (mesh) {
                mesh.rotation.x = clock.getElapsedTime() * 0.3
                mesh.rotation.y = clock.getElapsedTime() * 0.5
            }
        })
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 10, 7]} intensity={1} />
                <pointLight position={[-5, 5, 5]} intensity={0.5} />

                {/* Material showcase spheres */}
                {materialTypes.map((mat, i) => {
                    const x = (i % 3 - 1) * 3
                    const z = Math.floor(i / 3) * 3 - 1.5

                    return (
                        <mesh
                            key={mat.name}
                            ref={(el: THREE.Mesh) => {
                                const meshes = $$(meshRefs) || []
                                meshes[i] = el
                                meshRefs(meshes)
                            }}
                            position={[x, 0, z]}
                        >
                            <sphereGeometry args={[1, 32, 32]} />
                            {mat.name === 'Basic' && <meshBasicMaterial color={mat.color} />}
                            {mat.name === 'Lambert' && <meshLambertMaterial color={mat.color} />}
                            {mat.name === 'Phong' && <meshPhongMaterial color={mat.color} shininess={100} />}
                            {mat.name === 'Standard' && <meshStandardMaterial color={mat.color} metalness={0.5} roughness={0.3} />}
                            {mat.name === 'Normal' && <meshNormalMaterial />}
                            {mat.name === 'Toon' && <meshToonMaterial color={mat.color} />}
                        </mesh>
                    )
                })}
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 5, 10]} />
            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default Materials