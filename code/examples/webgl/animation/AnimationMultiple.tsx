/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_animation_multiple

import { $, $$, useEffect, useFrame } from "woby"
import { Color, AnimationMixer, Clock, Fog } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import * as THREE from 'three'
import * as SkeletonUtils from 'three/examples/jsm/utils/SkeletonUtils.js'

// Import wrappers
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/scenes/Scene'
import '@woby/three/src/lights/HemisphereLight'
import '@woby/three/src/lights/DirectionalLight'

/**
 * Port of webgl_animation_multiple from Three.js examples.
 * Key features: multiple animated models, shared skeleton mode, SkeletonUtils
 * Source: https://threejs.org/examples/webgl_animation_multiple.html
 */

export const AnimationMultiple = () => {
    const mixersRef = $<AnimationMixer[]>([])
    const sharedMode = $('clone')
    const modelRef = $<THREE.Group | null>(null)
    const modelReady = $<boolean>(false)
    const clock = new Clock()
    const objectsRef = $<THREE.Object3D[]>([])
    const mixersListRef = $<AnimationMixer[]>([])

    useEffect(() => {
        const gltfLoader = new GLTFLoader()

        gltfLoader.load(
            'https://threejs.org/examples/models/gltf/Soldier.glb',
            (gltf) => {
                modelRef(gltf.scene)
                modelReady(true)
            },
            undefined,
            (e) => console.error(e)
        )

        return () => {
            const mixers = $$(mixersListRef) || []
            mixers.forEach(m => m.stopAllAction())
        }
    }, [])

    // Set up scene when model is ready
    useEffect(() => {
        if (!$$(modelReady)) return

        const model = $$(modelRef)
        if (!model) return

        const animations = (model as any).animations || []
        const mixers: AnimationMixer[] = []
        const objects: THREE.Object3D[] = []

        const setupCloneScene = () => {
            // Clean up existing
            const existingMixers = $$(mixersListRef) || []
            existingMixers.forEach(m => m.stopAllAction())

            const model1 = SkeletonUtils.clone(model)
            const model2 = SkeletonUtils.clone(model)
            const model3 = SkeletonUtils.clone(model)

            model1.position.x = -2
            model2.position.x = 0
            model3.position.x = 2

            model1.traverse((o: any) => { if (o.isMesh) o.castShadow = true })
            model2.traverse((o: any) => { if (o.isMesh) o.castShadow = true })
            model3.traverse((o: any) => { if (o.isMesh) o.castShadow = true })

            const mixer1 = new AnimationMixer(model1)
            const mixer2 = new AnimationMixer(model2)
            const mixer3 = new AnimationMixer(model3)

            mixer1.clipAction(animations[0]).play() // idle
            mixer2.clipAction(animations[1]).play() // run
            mixer3.clipAction(animations[3]).play() // walk

            mixers.push(mixer1, mixer2, mixer3)
            objects.push(model1, model2, model3)

            mixersListRef(mixers)
        }

        setupCloneScene()

        return () => {
            const objs = $$(objectsRef) || []
            objs.forEach(o => {
                if (o.isSkinnedMesh) (o as THREE.SkinnedMesh).skeleton?.dispose()
            })
        }
    }, [modelReady])

    useFrame(() => {
        const mixers = $$(mixersListRef) || []
        mixers.forEach(m => m.update(clock.getDelta()))
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} shadowMapEnabled />
            <scene background={new Color(0xa0a0a0)}>
                <fog args={[0xa0a0a0, 10, 50]} />
                <hemisphereLight args={[0xffffff, 0x8d8d8d, 3]} position={[0, 20, 0]} />
                <directionalLight position={[-3, 10, -10]} intensity={3} castShadow
                    shadowCameraTop={4} shadowCameraBottom={-4}
                    shadowCameraLeft={-4} shadowCameraRight={4}
                    shadowCameraNear={0.1} shadowCameraFar={40} />

                <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                    <planeGeometry args={[200, 200]} />
                    <meshStandardMaterial color={0xcbcbcb} depthWrite={false} />
                </mesh>
            </scene>
            <perspectiveCamera fov={45} aspect={window.innerWidth / window.innerHeight} near={1} far={1000} position={[2, 3, -6]} />
            <orbitControls enableDamping target={[0, 1, 0]} />
        </canvas3D>
    )
}

import '@woby/three/src/geometries/PlaneGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/helpers/Fog'
import '@woby/three/src/objects/Mesh'

export default AnimationMultiple