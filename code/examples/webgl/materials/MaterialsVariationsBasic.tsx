/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/TorusKnotGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/lights/PointLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_materials_variations_basic from Three.js examples.
 * Demonstrates basic material variations.
 *
 * Source: https://threejs.org/examples/webgl_materials_variations_basic.html
 */

export const MaterialsVariationsBasic = () => {
    const meshRefs = Array.from({ length: 8 }, () => $<THREE.Mesh>())

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        
        meshRefs.forEach((ref, i) => {
            const mesh = $$(ref)
            if (mesh) {
                mesh.position.y = Math.sin(time * 2 + i * 0.5) * 0.5
            }
        })
    })

    const materials = [
        { color: 0xff0000, wireframe: false, flatShading: false },
        { color: 0x00ff00, wireframe: false, flatShading: true },
        { color: 0x0000ff, wireframe: true, flatShading: false },
        { color: 0xffff00, wireframe: false, flatShading: false },
        { color: 0xff00ff, wireframe: false, flatShading: true },
        { color: 0x00ffff, wireframe: true, flatShading: false },
        { color: 0xff8800, wireframe: false, flatShading: false },
        { color: 0x8800ff, wireframe: false, flatShading: true },
    ]

    const geometries = ['box', 'sphere', 'torusKnot']

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 10, 7]} intensity={1} />

                {meshRefs.map((ref, i) => {
                    const row = Math.floor(i / 4)
                    const col = i % 4
                    const x = (col - 1.5) * 2.5
                    const y = (1 - row) * 2.5
                    const geo = geometries[i % 3]
                    const mat = materials[i]

                    const GeometryComponent = geo === 'box' ? 'boxGeometry' : geo === 'sphere' ? 'sphereGeometry' : 'torusKnotGeometry'
                    const geoArgs = geo === 'box' ? [0.8, 0.8, 0.8] : geo === 'sphere' ? [0.5, 16, 16] : [0.5, 0.2, 64, 8]

                    return (
                        <mesh key={i} ref={ref} position={[x, y, 0]}>
                            {geo === 'box' && <boxGeometry args={geoArgs} />}
                            {geo === 'sphere' && <sphereGeometry args={geoArgs} />}
                            {geo === 'torusKnot' && <torusKnotGeometry args={geoArgs} />}
                            <meshStandardMaterial {...mat} />
                        </mesh>
                    )
                })}
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 0, 8]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default MaterialsVariationsBasic