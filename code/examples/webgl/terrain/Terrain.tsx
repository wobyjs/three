/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'
import * as THREE from 'three'

import '@woby/three/src/geometries/PlaneGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_terrain from Three.js examples.
 * Demonstrates terrain generation.
 *
 * Source: https://threejs.org/examples/webgl_terrain.html
 */

export const Terrain = () => {
    const terrainRef = $<THREE.Mesh>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const terrain = $$(terrainRef)
        if (terrain) {
            terrain.rotation.y = time * 0.1
        }
    })

    // Generate terrain height
    const generateTerrain = () => {
        const geometry = new THREE.PlaneGeometry(20, 20, 64, 64)
        const positions = geometry.attributes.position.array as Float32Array
        
        for (let i = 0; i < positions.length; i += 3) {
            const x = positions[i]
            const y = positions[i + 1]
            positions[i + 2] = Math.sin(x * 0.5) * Math.cos(y * 0.5) * 2
        }
        
        geometry.computeVertexNormals()
        return geometry
    }

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x87ceeb)}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 20, 10]} intensity={1} castShadow />

                <mesh ref={terrainRef} geometry={generateTerrain()} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                    <meshStandardMaterial color={0x3d9140} flatShading />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 10, 15]} />
            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default Terrain