/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_animation_skinning_additive_blending

import { $, $$, useEffect, useFrame } from "woby"
import { Color, AnimationMixer, AnimationUtils, Clock, Fog } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import * as THREE from 'three'

// Import wrappers
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/scenes/Scene'
import '@woby/three/src/lights/HemisphereLight'
import '@woby/three/src/lights/DirectionalLight'

/**
 * Port of webgl_animation_skinning_additive_blending from Three.js examples.
 * Key features: additive animation blending, base actions, additive poses
 * Source: https://threejs.org/examples/webgl_animation_skinning_additive_blending.html
 */

export const AnimationSkinningAdditiveBlending = () => {
    const mixerRef = $<AnimationMixer>()
    const modelReady = $<boolean>(false)
    const clock = new Clock()
    const modelRef = $<THREE.Group>()

    useEffect(() => {
        const gltfLoader = new GLTFLoader()

        gltfLoader.load(
            'https://threejs.org/examples/models/gltf/Xbot.glb',
            (gltf) => {
                modelRef(gltf.scene)
                modelReady(true)

                const mixer = new AnimationMixer(gltf.scene)
                mixerRef(mixer)

                // Activate base actions
                const idleAction = mixer.clipAction(gltf.animations[0])
                idleAction.play()
                idleAction.setEffectiveWeight(1)

                const walkAction = mixer.clipAction(gltf.animations[3])
                walkAction.play()
                walkAction.setEffectiveWeight(0)

                const runAction = mixer.clipAction(gltf.animations[1])
                runAction.play()
                runAction.setEffectiveWeight(0)
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
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} shadowMapEnabled />
            <scene background={new Color(0xa0a0a0)}>
                <fog args={[0xa0a0a0, 10, 50]} />
                <hemisphereLight args={[0xffffff, 0x8d8d8d, 3]} position={[0, 20, 0]} />
                <directionalLight position={[3, 10, 10]} intensity={3} castShadow
                    shadowCameraTop={2} shadowCameraBottom={-2}
                    shadowCameraLeft={-2} shadowCameraRight={2}
                    shadowCameraNear={0.1} shadowCameraFar={40} />

                <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                    <planeGeometry args={[100, 100]} />
                    <meshStandardMaterial color={0xcbcbcb} depthWrite={false} />
                </mesh>

                {() => {
                    const model = $$(modelRef)
                    return model ? <primitive object={model} /> : null
                }}
            </scene>
            <perspectiveCamera fov={45} aspect={window.innerWidth / window.innerHeight} near={1} far={100} position={[-1, 2, 3]} />
            <orbitControls enableDamping target={[0, 1, 0]} />
        </canvas3D>
    )
}

import '@woby/three/src/geometries/PlaneGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'

export default AnimationSkinningAdditiveBlending