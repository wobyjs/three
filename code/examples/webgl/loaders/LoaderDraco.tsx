/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_loader_draco

import { $, $$ } from "woby"
import { useFrame } from '@woby/three'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Color } from 'three'
import * as THREE from 'three'

export const LoaderDraco = () => {
    const modelRef = $<THREE.Group>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const model = $$(modelRef)
        if (model) {
            model.rotation.y = time * 0.3
        }
    })

    // Draco compressed model loader
    // Draco is a Google compression format for meshes and point clouds
    const dracoLoader = new DRACOLoader()
    // dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/')

    const gltfLoader = new GLTFLoader()
    gltfLoader.setDRACOLoader(dracoLoader)

    // Example loading Draco-compressed GLTF:
    // gltfLoader.load('model.glb', (gltf) => {
    //     scene.add(gltf.scene)
    // })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 10, 7]} intensity={1} />

                {/* Placeholder - in real usage, load Draco model via loader */}
                <group ref={modelRef}>
                    <mesh>
                        <torusKnotGeometry args={[1, 0.3, 100, 16]} />
                        <meshStandardMaterial color={0x4ecdc4} />
                    </mesh>
                </group>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 0, 5]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default LoaderDraco