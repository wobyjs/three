/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import * as THREE from 'three'

import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/HemisphereLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_loader_ply from Three.js examples.
 * Demonstrates PLY (Polygon File Format) model loading.
 *
 * Source: https://threejs.org/examples/webgl_loader_ply.html
 */

export const LoaderPly = () => {
    const modelRef = $<THREE.Mesh>()
    const cameraTarget = new THREE.Vector3(0, -0.1, 0)

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const camera = state.camera
        if (camera) {
            camera.position.x = Math.sin(time * 0.0005) * 2.5
            camera.position.z = Math.cos(time * 0.0005) * 2.5
            camera.lookAt(cameraTarget)
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new THREE.Color(0x72645b)} fog={new THREE.Fog(0x72645b, 2, 15)}>
                <hemisphereLight color={0x8d7c7c} groundColor={0x494966} intensity={3} />
                <directionalLight color={0xffffff} intensity={3.5} position={[1, 1, 1]} />
                <directionalLight color={0xffd500} intensity={3} position={[0.5, 1, -1]} />

                {/* Ground plane */}
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
                    <planeGeometry args={[40, 40]} />
                    <meshPhongMaterial color={0xcbcbcb} specular={0x474747} />
                </mesh>

                {/* PLY model placeholder - dolphin shape */}
                <mesh ref={modelRef} position={[0, -0.2, 0.3]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.001, 0.001, 0.001]} castShadow receiveShadow>
                    <sphereGeometry args={[200, 64, 64]} />
                    <meshStandardMaterial color={0x009cff} flatShading />
                </mesh>
            </scene>

            <perspectiveCamera fov={35} aspect={window.innerWidth / window.innerHeight} near={1} far={15} position={[3, 0.15, 3]} />
            <orbitControls />
        </canvas3D>
    )
}

export default LoaderPly
