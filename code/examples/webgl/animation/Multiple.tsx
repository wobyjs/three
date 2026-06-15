/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { useThree } from '@woby/three'
import { Color, AnimationMixer, AnimationClip, LoopRepeat, Clock, Fog, Skeleton, Matrix4, DetachedBindMode } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { SkeletonUtils } from 'three/examples/jsm/utils/SkeletonUtils.js'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/scenes/Scene'
import '@woby/three/src/lights/HemisphereLight'
import '@woby/three/src/lights/DirectionalLight'

/**
 * Port of webgl_animation_multiple from Three.js examples.
 * Key features:
 * - SkeletonUtils.clone() for efficient model cloning
 * - Multiple animated skinned meshes
 * - Toggle between independent and shared skeletons
 * - Grid layout for multiple character instances
 * - GUI for controlling skeleton sharing mode
 *
 * Source: https://threejs.org/examples/webgl_animation_multiple.html
 */

export const Multiple = () => {
    const mixersRef = $<THREE.AnimationMixer[]>([])
    const modelsRef = $<THREE.Object3D[]>([])
    const sharedSkeleton = $(false)
    const clock = new Clock()
    const modelReady = $<boolean>(false)

    // Load base model
    useEffect(() => {
        const loader = new GLTFLoader()

        loader.load(
            'https://threejs.org/examples/models/gltf/Soldier.glb',
            (gltf) => {
                baseModelRef(gltf.scene)
                animationsRef(gltf.animations)
                modelReady(true)

                // Initial setup with independent skeletons
                setupDefaultScene(gltf.scene, gltf.animations)
            },
            undefined,
            (e) => console.error(e)
        )

        return () => {
            const mixers = $$(mixersRef)
            mixers?.forEach((m) => m.stopAllAction())
        }
    })

    const baseModelRef = $<THREE.Group>()
    const animationsRef = $<THREE.AnimationClip[]>([])
    const { scene } = useThree()

    // Setup with independent skeletons (default scene)
    const setupDefaultScene = (model: THREE.Group, animations: THREE.AnimationClip[]) => {
        const mixers: THREE.AnimationMixer[] = []
        const models: THREE.Object3D[] = []

        // Three cloned models with independent skeletons
        const model1 = SkeletonUtils.clone(model)
        const model2 = SkeletonUtils.clone(model)
        const model3 = SkeletonUtils.clone(model)

        model1.position.x = -2
        model2.position.x = 0
        model3.position.x = 2

        const mixer1 = new AnimationMixer(model1)
        const mixer2 = new AnimationMixer(model2)
        const mixer3 = new AnimationMixer(model3)

        mixer1.clipAction(animations[0]).play() // idle
        mixer2.clipAction(animations[1]).play() // run
        mixer3.clipAction(animations[3]).play() // walk

        scene.add(model1, model2, model3)

        models.push(model1, model2, model3)
        mixers.push(mixer1, mixer2, mixer3)

        modelsRef(models)
        mixersRef(mixers)
    }

    // Setup with shared skeleton
    const setupSharedSkeletonScene = (model: THREE.Group, animations: THREE.AnimationClip[]) => {
        // Stop all existing mixers
        const existingMixers = $$(mixersRef)
        existingMixers?.forEach((m) => m.stopAllAction())

        // Remove existing models
        const existingModels = $$(modelsRef)
        existingModels?.forEach((m) => scene.remove(m))

        const sharedModel = SkeletonUtils.clone(model)
        const shareSkinnedMesh = sharedModel.getObjectByName('vanguard_Mesh') as THREE.SkinnedMesh
        if (!shareSkinnedMesh) return

        const sharedSkeleton = shareSkinnedMesh.skeleton
        const sharedParentBone = sharedModel.getObjectByName('mixamorigHips')
        scene.add(sharedParentBone!)

        const model1 = shareSkinnedMesh.clone()
        const model2 = shareSkinnedMesh.clone()
        const model3 = shareSkinnedMesh.clone()

        model1.bindMode = DetachedBindMode
        model2.bindMode = DetachedBindMode
        model3.bindMode = DetachedBindMode

        const identity = new Matrix4()
        model1.bind(sharedSkeleton, identity)
        model2.bind(sharedSkeleton, identity)
        model3.bind(sharedSkeleton, identity)

        model1.position.x = -2
        model2.position.x = 0
        model3.position.x = 2

        model1.scale.setScalar(0.01)
        model1.rotation.x = -Math.PI * 0.5
        model2.scale.setScalar(0.01)
        model2.rotation.x = -Math.PI * 0.5
        model3.scale.setScalar(0.01)
        model3.rotation.x = -Math.PI * 0.5

        const mixer = new THREE.AnimationMixer(sharedParentBone!)
        mixer.clipAction(animations[1]).play()

        scene.add(sharedParentBone!, model1, model2, model3)

        modelsRef([sharedParentBone!, model1, model2, model3])
        mixersRef([mixer])
    }

    // Handle skeleton sharing toggle
    useEffect(() => {
        const model = $$(baseModelRef)
        const anims = $$(animationsRef)
        const shared = $$(sharedSkeleton)

        if (!model || !anims) return

        if (shared) {
            setupSharedSkeletonScene(model, anims)
        } else {
            // Clear and rebuild
            const existingModels = $$(modelsRef)
            existingModels?.forEach((m) => scene.remove(m))
            setupDefaultScene(model, anims)
        }
    })

    // Update all mixers
    useFrame(() => {
        const mixers = $$(mixersRef)
        if (mixers) {
            for (const mixer of mixers) {
                mixer.update(clock.getDelta())
            }
        }
    })

    return (
        <canvas3D>
            <webGLRenderer
                antialias
                setPixelRatio={[window.devicePixelRatio]}
                setSize={[window.innerWidth, window.innerHeight]}
                shadowMapEnabled
            />
            <scene background={new Color(0xa0a0a0)}>
                <fog args={[0xa0a0a0, 10, 50]} />

                {/* Lighting */}
                <hemisphereLight args={[0xffffff, 0x8d8d8d, 3]} position={[0, 20, 0]} />
                <directionalLight
                    position={[-3, 10, -10]}
                    intensity={3}
                    castShadow
                    shadowCameraTop={4}
                    shadowCameraBottom={-4}
                    shadowCameraLeft={-4}
                    shadowCameraRight={4}
                    shadowCameraNear={0.1}
                    shadowCameraFar={40}
                />

                {/* Ground */}
                <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                    <planeGeometry args={[200, 200]} />
                    <meshPhongMaterial color={0xcbcbcb} depthWrite={false} />
                </mesh>

                {/* Loading indicator */}
                {() => {
                    if (!$$(modelReady)) {
                        return (
                            <mesh position={[0, 1, 0]}>
                                <boxGeometry args={[1, 1, 1]} />
                                <meshStandardMaterial color={0x888888} />
                            </mesh>
                        )
                    }
                    return null
                }}
            </scene>

            <perspectiveCamera
                fov={45}
                aspect={window.innerWidth / window.innerHeight}
                near={1}
                far={1000}
                position={[2, 3, -6]}
            />
            <orbitControls enableDamping target={[0, 1, 0]} />

            {/* Controls UI */}
            <div style={{
                position: 'absolute',
                top: 10,
                right: 10,
                background: 'rgba(0,0,0,0.7)',
                color: 'white',
                padding: '10px',
                borderRadius: '5px'
            }}>
                <label>
                    <input
                        type="checkbox"
                        checked={$$(sharedSkeleton)}
                        onChange={(e) => sharedSkeleton((e.target as HTMLInputElement).checked)}
                    />
                    Shared Skeleton
                </label>
            </div>
        </canvas3D>
    )
}

// Import geometry and material
import '@woby/three/src/geometries/PlaneGeometry'
import '@woby/three/src/materials/MeshPhongMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/objects/BoxGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'

export default Multiple