/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, ColladaLoader, ACESFilmicToneMapping, Box3, Vector3 } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_loader_collada from Three.js examples.
 * Demonstrates Collada DAE model loading.
 *
 * Source: https://threejs.org/examples/webgl_loader_collada.html
 *
 * Key features:
 * - ColladaLoader for .dae format
 * - Animation support
 * - Model centering and scaling
 */

export const Collada = () => {
    const modelRef = $<THREE.Object3D>()

    useEffect(() => {
        const loader = new ColladaLoader()

        loader.load(
            'https://threejs.org/examples/models/collada/elf/elf.dae',
            (collada) => {
                const model = collada.scene

                // Center and scale model
                const box = new Box3().setFromObject(model)
                const center = box.getCenter(new Vector3())
                const size = box.getSize(new Vector3())

                const maxDim = Math.max(size.x, size.y, size.z)
                const scale = 2 / maxDim

                model.position.sub(center)
                model.scale.setScalar(scale)

                // Enable shadows
                model.traverse((child) => {
                    if ((child as THREE.Mesh).isMesh) {
                        (child as THREE.Mesh).castShadow = true
                        (child as THREE.Mesh).receiveShadow = true
                    }
                })

                modelRef(model)
            },
            (progress) => {
                console.log(`Loading: ${(progress.loaded / progress.total * 100).toFixed(1)}%`)
            },
            (error) => {
                console.error('Error loading Collada:', error)
            }
        )
    })

    useFrame(() => {
        const model = $$(modelRef)
        if (model) {
            model.rotation.y += 0.005
        }
    })

    return (
        <canvas3D>
            <webGLRenderer
                antialias
                setPixelRatio={[window.devicePixelRatio]}
                setSize={[window.innerWidth, window.innerHeight]}
                toneMapping={ACESFilmicToneMapping}
                toneMappingExposure={1}
            />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 10, 5]} intensity={1.5} />
                <directionalLight position={[-5, 5, -5]} intensity={0.5} />

                {/* Collada model */}
                {() => {
                    const model = $$(modelRef)
                    return model ? <primitive object={model} /> : null
                }}
            </scene>

            <perspectiveCamera
                fov={50}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[0, 1, 4]}
            />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default Collada
