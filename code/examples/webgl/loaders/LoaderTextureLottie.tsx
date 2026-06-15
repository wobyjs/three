/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { RoomEnvironment } from '@woby/three/examples/jsm/environments/RoomEnvironment'
import * as THREE from 'three'

import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/scenes/Scene'

/**
 * Port of webgl_loader_texture_lottie from Three.js examples.
 * Demonstrates Lottie animation as texture loading.
 *
 * Source: https://threejs.org/examples/webgl_loader_texture_lottie.html
 */

export const LoaderTextureLottie = () => {
    const meshRef = $<THREE.Mesh>()

    useFrame((state) => {
        const controls = $$(meshRef)
        if (controls) {
            controls.rotation.z = state.clock?.getElapsedTime() ?? 0
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} toneMapping={THREE.ACESFilmicToneMapping} />
            <scene background={new THREE.Color(0x111111)}>
                <RoomEnvironment />

                {/* Lottie animation texture placeholder */}
                <mesh ref={meshRef} position={[0, 0, 0]} autoRotate>
                    <roundedBoxGeometry args={[1, 1, 1, 7, 0.1]} />
                    <meshStandardMaterial color={0xffffff} roughness={0} />
                </mesh>
            </scene>

            <perspectiveCamera fov={50} aspect={window.innerWidth / window.innerHeight} near={0.1} far={10} position={[0, 0, 2.5]} />
            <orbitControls autoRotate />
        </canvas3D>
    )
}

export default LoaderTextureLottie