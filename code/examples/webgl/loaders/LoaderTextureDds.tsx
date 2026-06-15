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
 * Port of webgl_loader_texture_dds from Three.js examples.
 * Demonstrates DDS (S3TC compressed texture) loading.
 *
 * Source: https://threejs.org/examples/webgl_loader_texture_dds.html
 */

export const LoaderTextureDds = () => {
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
            <scene background={new THREE.Color(0x000000)}>
                {/* DDS compressed texture placeholders */}
                <mesh position={[-10, -2, 0]}>
                    <torusGeometry args={[1, 0.4, 16, 32]} />
                    <meshBasicMaterial color={0x4488ff} />
                </mesh>

                <mesh position={[-6, -2, 0]}>
                    <boxGeometry />
                    <meshBasicMaterial color={0x88ff88} />
                </mesh>

                <mesh position={[-6, 2, 0]}>
                    <boxGeometry />
                    <meshBasicMaterial color={0xff8888} alphaTest={0.5} side={THREE.DoubleSide} />
                </mesh>

                <mesh position={[-10, 2, 0]}>
                    <boxGeometry />
                    <meshBasicMaterial color={0xffd500} blending={THREE.AdditiveBlending} depthTest={false} transparent side={THREE.DoubleSide} />
                </mesh>

                <mesh position={[2, 2, 0]}>
                    <boxGeometry />
                    <meshBasicMaterial color={0x88ff88} />
                </mesh>

                <mesh position={[6, -2, 0]}>
                    <boxGeometry />
                    <meshBasicMaterial color={0x009cff} />
                </mesh>

                <mesh position={[10, 2, 0]}>
                    <boxGeometry />
                    <meshBasicMaterial color={0xff88ff} />
                </mesh>
            </scene>

            <perspectiveCamera fov={50} aspect={window.innerWidth / window.innerHeight} near={1} far={100} position={[0, -2, 16]} />
            <orbitControls />
        </canvas3D>
    )
}

export default LoaderTextureDds