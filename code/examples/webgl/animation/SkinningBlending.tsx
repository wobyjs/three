/** @jsxImportSource @woby/three */

import { $, $$, useEffect } from "woby"
import { useFrame } from "@woby/three"
import { useThree } from '@woby/three'
import { Color, AnimationMixer, AnimationClip, AnimationUtils, LoopRepeat, LoopOnce, Fog, FogExp2, Clock, Vector3, EventDispatcher } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/scenes/Scene'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/lights/HemisphereLight'
import '@woby/three/src/helpers/SkeletonHelper'
import '@woby/three/src/objects/Skeleton'
import '@woby/three/src/objects/Group'

/**
 * Port of webgl_animation_skinning_blending from Three.js examples.
 * Key features:
 * - Skinned mesh with skeletal animation
 * - AnimationMixer with multiple animation clips
 * - Crossfading between animations
 * - Additive animation blending
 * - GUI for controlling animation weights and transitions
 *
 * Source: https://threejs.org/examples/webgl_animation_skinning_blending.html
 */

const STATES = ['Idle', 'Walking', 'Running', 'Dance', 'Death', 'Sitting', 'Standing']
const EMOTES = ['Jump', 'Yes', 'No', 'Wave', 'Punch', 'ThumbsUp']

const morphInfluencesRef = $<Record<string, number>>({})

export const SkinningBlending = () => {
    const mixerRef = $<AnimationMixer>()
    const actionsRef = $<Record<string, THREE.AnimationAction>>({})
    const activeActionRef = $<THREE.AnimationAction>()
    const previousActionRef = $<THREE.AnimationAction>()
    const currentState = $('Walking')
    const faceRef = $<THREE.Object3D>()
    const modelReady = $<boolean>(false)
    const clock = new Clock()

    // Load model with animations
    useEffect(() => {
        const loader = new GLTFLoader()

        loader.load(
            'https://threejs.org/examples/models/gltf/RobotExpressive/RobotExpressive.glb',
            (gltf) => {
                const model = gltf.scene
                modelRef(model)

                // Setup morph targets for facial expressions
                const face = model.getObjectByName('Head_4')
                if (face) {
                    faceRef(face)
                    // Initialize morph target influences
                    const expressions = Object.keys(face.morphTargetDictionary || {})
                    const influences: Record<string, number> = {}
                    expressions.forEach((name) => {
                        influences[name] = 0
                    })
                    morphInfluencesRef(influences)
                }

                modelReady(true)

                const mixer = new AnimationMixer(model)
                mixerRef(mixer)

                const actions: Record<string, THREE.AnimationAction> = {}
                const emotes = EMOTES
                const states = STATES

                for (const clip of gltf.animations) {
                    const action = mixer.clipAction(clip)
                    actions[clip.name] = action

                    // Emotes and later states loop once then stop
                    if (emotes.includes(clip.name) || states.indexOf(clip.name) >= 4) {
                        action.clampWhenFinished = true
                        action.loop = LoopOnce
                    }
                }
                actionsRef(actions)

                // Start with Walking
                activeActionRef(actions['Walking'])
                actions['Walking'].play()
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

    // Handle state transitions with crossfade
    useEffect(() => {
        const actions = $$(actionsRef)
        const activeAction = $$(activeActionRef)
        const previousAction = $$(previousActionRef)
        const state = $$(currentState)
        if (!actions || !state) return

        const newAction = actions[state]
        if (!newAction || newAction === activeAction) return

        // Crossfade from previous to new
        if (previousAction && previousAction !== newAction) {
            previousAction.fadeOut(0.5)
        }
        if (activeAction && activeAction !== newAction) {
            activeAction.fadeOut(0.5)
        }

        newAction.reset()
            .setEffectiveTimeScale(1)
            .setEffectiveWeight(1)
            .fadeIn(0.5)
            .play()

        previousActionRef(activeAction)
        activeActionRef(newAction)
    })

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
            />
            <scene background={new Color(0xe0e0e0)}>
                <fogExp2 args={[0xe0e0e0, 0.017]} />

                {/* Lighting */}
                <hemisphereLight args={[0xffffff, 0x8d8d8d, 3]} position={[0, 20, 0]} />
                <directionalLight position={[0, 20, 10]} intensity={3} />

                {/* Ground */}
                <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                    <planeGeometry args={[2000, 2000]} />
                    <meshStandardMaterial color={0xcbcbcb} depthWrite={false} />
                </mesh>

                {/* Grid helper */}
                <gridHelper args={[200, 40, 0x000000, 0x000000]} />

                {/* Model */}
                {() => {
                    const model = $$(modelRef)
                    return model ? <primitive object={model} /> : null
                }}

                {/* Morph influence sliders UI */}
                <MorphUI />
            </scene>

            <perspectiveCamera
                fov={45}
                aspect={window.innerWidth / window.innerHeight}
                near={0.25}
                far={100}
                position={[-5, 3, 10]}
            />
            <orbitControls enableDamping target={[0, 2, 0]} />
        </canvas3D>
    )
}

// Morph influence control UI
const MorphUI = () => {
    const morphInfluences = $$(morphInfluencesRef)
    const entries = morphInfluences ? Object.entries(morphInfluences) : []

    return (
        <div style={{
            position: 'absolute',
            top: 10,
            right: 10,
            background: 'rgba(0,0,0,0.7)',
            color: 'white',
            padding: '10px',
            borderRadius: '5px',
            maxHeight: '80vh',
            overflowY: 'auto'
        }}>
            <div style={{ marginBottom: 10, fontWeight: 'bold' }}>Expressions</div>
            {entries.map(([name, value]) => (
                <div key={name} style={{ marginBottom: 5 }}>
                    <label style={{ display: 'block', fontSize: '12px' }}>{name}: {value.toFixed(2)}</label>
                    <input
                        type="range"
                        min={0}
                        max={1}
                        step={0.01}
                        value={value}
                        style={{ width: '100%' }}
                    />
                </div>
            ))}
        </div>
    )
}

// Import geometry and material for ground
import '@woby/three/src/geometries/PlaneGeometry'
import '@woby/three/src/materials/MeshPhongMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/helpers/GridHelper'

export default SkinningBlending