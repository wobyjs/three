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
 * Port of webgl_loader_gltf_transmission from Three.js examples.
 * Demonstrates transmission material (glass/transparent effect) on GLTF models.
 *
 * Source: https://threejs.org/examples/webgl_loader_gltf_transmission.html
 */

export const LoaderGLTFTransmission = () => {
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
            <scene background={new THREE.Color(0x222222)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 5, 5]} intensity={1} />

                {/* Transmission material demonstration */}
                <mesh ref={modelRef} position={[0, 0.4, 0]}>
                    <torusKnotGeometry args={[1, 0.3, 128, 32]} />
                    <meshPhysicalMaterial
                        color={0xffffff}
                        metalness={0}
                        roughness={0}
                        transmission={1}
                        thickness={2}
                        ior={1.5}
                    />
                </mesh>

                {/* Background cubes to show refraction */}
                <mesh position={[-2, 0, -5]}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshBasicMaterial color={0xff0000} />
                </mesh>
                <mesh position={[0, 0, -5]}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshBasicMaterial color={0x00ff00} />
                </mesh>
                <mesh position={[2, 0, -5]}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshBasicMaterial color={0x0000ff} />
                </mesh>
            </scene>

            <perspectiveCamera fov={45} aspect={window.innerWidth / window.innerHeight} near={0.25} far={20} position={[0, 0.4, 0.7]} />
            <orbitControls target={[0, 0.1, 0]} autoRotate autoRotateSpeed={-0.75} enableDamping />
        </canvas3D>
    )
}

export default LoaderGLTFTransmission