/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import * as THREE from 'three'

import '@woby/three/src/materials/MeshBasicMaterial'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/PointLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_loader_texture_ktx from Three.js examples.
 * Demonstrates KTX (Khronos Texture) compressed texture loading.
 *
 * Source: https://threejs.org/examples/webgl_loader_texture_ktx.html
 */

export const LoaderTextureKtx = () => {
    const meshesRef = $([] as THREE.Mesh[])

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const meshes = meshesRef()
        meshes.forEach((mesh, i) => {
            mesh.rotation.x = time
            mesh.rotation.y = time
        })
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene>
                <ambientLight color={0xffffff} intensity={0.02} />
                <pointLight color={0xffffff} intensity={2} position={[0, 0, 300]} />

                {/* KTX compressed texture placeholders */}
                {[-300, 0, 300].map((x, i) => (
                    <mesh key={i} position={[x, 150, 0]} ref={(el) => { if (el) meshesRef()[i] = el }}>
                        <boxGeometry args={[200, 200, 200]} />
                        <meshBasicMaterial color={0x4488ff} />
                    </mesh>
                ))}

                {/* Normal map placeholder */}
                <mesh position={[300, -150, 0]}>
                    <boxGeometry args={[200, 200, 200]} />
                    <meshStandardMaterial color={0xffffff} />
                </mesh>
            </scene>

            <perspectiveCamera fov={50} aspect={window.innerWidth / window.innerHeight} near={1} far={2000} position={[0, 0, 1000]} />
            <orbitControls />
        </canvas3D>
    )
}

export default LoaderTextureKtx