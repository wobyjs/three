/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import * as THREE from 'three'

import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_loader_gltf_progressive_lod from Three.js examples.
 * Demonstrates progressive LOD loading with GLTF models.
 *
 * Source: https://threejs.org/examples/webgl_loader_gltf_progressive_lod.html
 */

export const LoaderGLTFProgressiveLOD = () => {
    const modelRef = $<THREE.LOD>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const lod = $$(modelRef)
        if (lod) {
            lod.position.set(Math.cos(time) * 5, 2, 20 + Math.sin(time) * 15)
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new THREE.Color(0x192022)}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 10, 7]} intensity={1} />

                {/* LOD object with multiple detail levels */}
                <lOD ref={modelRef}>
                    {/* High detail - green */}
                    <mesh>
                        <sphereGeometry args={[1, 64, 64]} />
                        <meshBasicMaterial color={0x00ff00} />
                    </mesh>
                    {/* Medium detail - yellow */}
                    <mesh>
                        <sphereGeometry args={[1, 32, 32]} />
                        <meshBasicMaterial color={0xffff00} />
                    </mesh>
                    {/* Low detail - orange */}
                    <mesh>
                        <sphereGeometry args={[1, 16, 16]} />
                        <meshBasicMaterial color={0xff8800} />
                    </mesh>
                    {/* Very low detail - red */}
                    <mesh>
                        <sphereGeometry args={[1, 8, 8]} />
                        <meshBasicMaterial color={0xff0000} />
                    </mesh>
                </lOD>
            </scene>

            <perspectiveCamera fov={40} aspect={window.innerWidth / window.innerHeight} near={0.1} far={40} position={[0, 2, 50]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default LoaderGLTFProgressiveLOD