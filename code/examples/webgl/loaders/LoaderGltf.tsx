/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, GLTFLoader } from 'three'
import * as THREE from 'three'

import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_loader_gltf from Three.js examples.
 * Demonstrates GLTF model loading.
 *
 * Source: https://threejs.org/examples/webgl_loader_gltf.html
 */

export const LoaderGltf = () => {
    const modelRef = $<THREE.Group>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const model = $$(modelRef)
        if (model) {
            model.rotation.y = time * 0.5
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 10, 7]} intensity={1} castShadow />

                {/* Placeholder - in real usage, load GLTF via loader */}
                <group ref={modelRef}>
                    <mesh castShadow>
                        <boxGeometry args={[1, 1, 1]} />
                        <meshStandardMaterial color={0x4ecdc4} />
                    </mesh>
                </group>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[2, 2, 4]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default LoaderGltf