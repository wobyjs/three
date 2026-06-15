/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import * as THREE from 'three'

import '@woby/three/src/materials/MeshPhysicalMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_loader_gltf_sheen from Three.js examples.
 * Demonstrates sheen material (velvet/silk effect) on models.
 *
 * Source: https://threejs.org/examples/webgl_loader_gltf_sheen.html
 */

export const LoaderGLTFSheen = () => {
    const modelRef = $<THREE.Mesh>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const model = $$(modelRef)
        if (model) {
            model.rotation.x = time * 0.2
            model.rotation.y = time * 0.3
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new THREE.Color(0xbbbbbb)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 5, 5]} intensity={1} />

                {/* Sheen material demonstration */}
                <mesh ref={modelRef}>
                    <torusKnotGeometry args={[1, 0.3, 128, 32]} />
                    <meshPhysicalMaterial
                        color={0xff6600}
                        sheen={1}
                        sheenRoughness={0.5}
                        sheenColor={new THREE.Color(0xff0000)}
                        metalness={0}
                        roughness={0.8}
                    />
                </mesh>
            </scene>

            <perspectiveCamera fov={45} aspect={window.innerWidth / window.innerHeight} near={0.1} far={20} position={[-0.75, 0.7, 1.25]} />
            <orbitControls target={[0, 0.35, 0]} enableDamping />
        </canvas3D>
    )
}

export default LoaderGLTFSheen