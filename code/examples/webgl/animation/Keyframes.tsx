/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { useThree, useRenderer } from '@woby/three'
import { Color, AnimationMixer, AnimationClip, Clock, PMREMGenerator, ACESFilmicToneMapping } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/scenes/Scene'
import '@woby/three/src/objects/Group'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/objects/Sky'
import '@woby/three/src/renderers/WebGLRenderTarget'
import '@woby/three/src/cameras/CubeCamera'

/**
 * Port of webgl_animation_keyframes from Three.js examples.
 * Key features:
 * - GLTFLoader with Draco compression support
 * - AnimationMixer for playing animation clips
 * - PMREMGenerator for environment mapping from Sky
 * - ACESFilmicToneMapping for realistic rendering
 *
 * Source: https://threejs.org/examples/webgl_animation_keyframes.html
 */

export const Keyframes = () => {
    const mixerRef = $<AnimationMixer>()
    const clock = new Clock()
    const modelReady = $<boolean>(false)

    // Load and setup the animated model
    useEffect(() => {
        const dracoLoader = new DRACOLoader()
        dracoLoader.setDecoderPath('https://threejs.org/examples/jsm/libs/draco/gltf/')

        const gltfLoader = new GLTFLoader()
        gltfLoader.setDRACOLoader(dracoLoader)

        gltfLoader.load(
            'https://threejs.org/examples/models/gltf/LittlestTokyo.glb',
            (gltf) => {
                const model = gltf.scene
                model.position.set(1, 1, 0)
                model.scale.setScalar(0.01)
                modelRef(model)

                const mixer = new AnimationMixer(model)
                mixerRef(mixer)
                mixer.clipAction(gltf.animations[0]).play()

                modelReady(true)
            },
            undefined,
            (e) => console.error(e)
        )

        return () => {
            const mixer = $$(mixerRef)
            if (mixer) mixer.stopAllAction()
        }
    })

    const modelRef = $<THREE.Group>()

    // Update animation mixer
    useFrame(() => {
        const mixer = $$(mixerRef)
        if (mixer) {
            mixer.update(clock.getDelta())
        }
    })

    return (
        <canvas3D>
            <webGLRenderer
                antialias
                setPixelRatio={[window.devicePixelRatio]}
                setSize={[window.innerWidth, window.innerHeight]}
                toneMapping={ACESFilmicToneMapping}
            />
            <scene>
                {/* Sky environment */}
                <sky scale={[10000, 10000, 10000]} />
                {/* Reflected sky environment */}
                {() => {
                    const renderer = useRenderer<THREE.WebGLRenderer>()
                    if (!$$(renderer)) return null
                    const pmrem = new PMREMGenerator($$(renderer))
                    const skyTex = pmrem.fromScene(new THREE.Sky()).texture
                    return <primitive object={skyTex} />
                }}

                {/* Lighting */}
                <ambientLight intensity={0.5} />
                <directionalLight position={[-0.8, 0.19, 0.56]} intensity={1} />

                {/* Ground plane */}
                <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                    <planeGeometry args={[100, 100]} />
                    <meshStandardMaterial color={0x808080} roughness={0.8} />
                </mesh>

                {/* Animated GLTF model */}
                {() => {
                    const model = $$(modelRef)
                    return model ? <primitive object={model} /> : null
                }}
            </scene>

            <perspectiveCamera
                fov={40}
                aspect={window.innerWidth / window.innerHeight}
                near={1}
                far={100}
                position={[5, 2, 8]}
            />
            <orbitControls enableDamping target={[0, 0.7, 0]} />
        </canvas3D>
    )
}

// Import geometry and material for ground plane
import '@woby/three/src/geometries/PlaneGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'

export default Keyframes