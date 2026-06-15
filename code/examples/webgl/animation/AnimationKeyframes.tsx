/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_animation_keyframes

import { $, $$, useEffect } from "woby"
import { useFrame } from "@woby/three"
import { Color, AnimationMixer, AnimationClip, VectorKeyframeTrack, QuaternionKeyframeTrack, Clock } from 'three'
import { Sky } from 'three/examples/jsm/objects/Sky.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import * as THREE from 'three'

// Import wrappers
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/scenes/Scene'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/lights/HemisphereLight'
import '@woby/three/src/objects/Group'

/**
 * Port of webgl_animation_keyframes from Three.js examples.
 * Key features: GLTF model loading, animation mixer, keyframe tracks
 * Source: https://threejs.org/examples/webgl_animation_keyframes.html
 */

export const AnimationKeyframes = () => {
    const mixerRef = $<AnimationMixer>()
    const modelReady = $<boolean>(false)
    const clock = new Clock()
    const modelRef = $<THREE.Group>()

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
                model.scale.set(0.01, 0.01, 0.01)
                modelRef(model)
                modelReady(true)

                const mixer = new AnimationMixer(model)
                mixerRef(mixer)
                mixer.clipAction(gltf.animations[0]).play()
            },
            undefined,
            (e) => console.error(e)
        )

        return () => {
            const mixer = $$(mixerRef)
            if (mixer) mixer.stopAllAction()
        }
    })

    useFrame(() => {
        const mixer = $$(mixerRef)
        if (mixer) mixer.update(clock.getDelta())
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} toneMapping={THREE.ACESFilmicToneMapping} />
            <scene background={new Color(0x87ceeb)}>
                <directionalLight position={[-0.8, 0.19, 0.56]} intensity={1} />
                <hemisphereLight args={[0xffffff, 0x8d8d8d, 3]} position={[0, 20, 0]} />

                {() => {
                    const model = $$(modelRef)
                    return model ? <primitive object={model} /> : null
                }}
            </scene>
            <perspectiveCamera fov={40} aspect={window.innerWidth / window.innerHeight} near={1} far={100} position={[5, 2, 8]} />
            <orbitControls enableDamping target={[0, 0.7, 0]} />
        </canvas3D>
    )
}

export default AnimationKeyframes