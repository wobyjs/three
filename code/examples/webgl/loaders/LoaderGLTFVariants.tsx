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
 * Port of webgl_loader_gltf_variants from Three.js examples.
 * Demonstrates material variants switching on GLTF models.
 *
 * Source: https://threejs.org/examples/webgl_loader_gltf_variants.html
 */

export const LoaderGLTFVariants = () => {
    const modelRef = $<THREE.Mesh>()
    const variantIndex = $(0)
    const colors = [0xff0000, 0x00ff00, 0x0000ff, 0xffff00]

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const model = $$(modelRef)
        if (model) {
            model.rotation.y = time * 0.3
        }

        // Switch variants every 2 seconds
        const newVariant = Math.floor(time / 2) % 4
        if (newVariant !== variantIndex()) {
            variantIndex(newVariant)
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new THREE.Color(0x333333)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 5, 5]} intensity={1} />

                {/* Model with material variants */}
                <mesh ref={modelRef} scale={[10, 10, 10]}>
                    <sphereGeometry args={[0.15, 32, 32]} />
                    <meshStandardMaterial
                        color={colors[variantIndex()]}
                        metalness={variantIndex() === 1 ? 1 : variantIndex() === 2 ? 0.5 : 0}
                        roughness={variantIndex() === 1 ? 0 : variantIndex() === 2 ? 0.5 : 1}
                    />
                </mesh>
            </scene>

            <perspectiveCamera fov={45} aspect={window.innerWidth / window.innerHeight} near={0.25} far={20} position={[2.5, 1.5, 3.0]} />
            <orbitControls target={[0, 0.5, -0.2]} enableDamping minDistance={2} maxDistance={10} />
        </canvas3D>
    )
}

export default LoaderGLTFVariants