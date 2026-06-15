/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_animation_skinning_blending

import { $, $$, useEffect, useFrame } from "woby"
import { Color, AnimationMixer, Clock, Fog, SkeletonHelper } from 'three'
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
 * Port of webgl_animation_skinning_blending from Three.js examples.
 * Key features: animation crossfading, blend weights, skeleton visualization
 * Source: https://threejs.org/examples/webgl_animation_skinning_blending.html
 */

export const AnimationSkinningBlending = () => {
    const mixerRef = $<AnimationMixer>()
    const modelReady = $<boolean>(false)
    const clock = new Clock()
    const modelRef = $<THREE.Group>()
    const skeletonRef = $<SkeletonHelper>()
    const showSkeleton = $<boolean>(false)

    useEffect(() => {
        const gltfLoader = new GLTFLoader()

        gltfLoader.load(
            'https://threejs.org/examples/models/gltf/Soldier.glb',
            (gltf) => {
                const model = gltf.scene
                modelRef(model)
                modelReady(true)

                model.traverse((o: any) => {
                    if (o.isMesh) o.castShadow = true
                })

                const skeleton = new SkeletonHelper(model)
                skeleton.visible = false
                skeletonRef(skeleton)

                const mixer = new AnimationMixer(model)
                mixerRef(mixer)

                const idleAction = mixer.clipAction(gltf.animations[0])
                const walkAction = mixer.clipAction(gltf.animations[3])
                const runAction = mixer.clipAction(gltf.animations[1])

                idleAction.play()
                walkAction.play()
                runAction.play()

                // Start with walk active
                idleAction.setEffectiveWeight(0)
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

    // Toggle skeleton visibility
    useEffect(() => {
        const skeleton = $$(skeletonRef)
        if (skeleton) skeleton.visible = $$(showSkeleton)
    }, [showSkeleton])

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
                <directionalLight position={[-3, 10, -10]} intensity={3} castShadow
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
                {() => {
                    const skeleton = $$(skeletonRef)
                    return skeleton ? <primitive object={skeleton} /> : null
                }}
            </scene>
            <perspectiveCamera fov={45} aspect={window.innerWidth / window.innerHeight} near={1} far={100} position={[1, 2, -3]} />
            <orbitControls enableDamping target={[0, 1, 0]} />

            <div style={{ position: 'absolute', bottom: 10, left: 10, background: 'rgba(0,0,0,0.7)', color: 'white', padding: '10px', borderRadius: '5px' }}>
                <div>Crossfade: Walk | Idle | Run</div>
                <div>Toggle: S - Skeleton</div>
            </div>
        </canvas3D>
    )
}

import '@woby/three/src/geometries/PlaneGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'

export default AnimationSkinningBlending