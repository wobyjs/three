/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { useThree } from '@woby/three'
import { Color, AnimationMixer, AnimationClip, AnimationUtils, LoopRepeat, Clock, Fog } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/scenes/Scene'
import '@woby/three/src/lights/HemisphereLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/helpers/SkeletonHelper'

/**
 * Port of webgl_animation_skinning_additive_blending from Three.js examples.
 * Key features:
 * - AnimationMixer with base and additive animations
 * - Base animations: idle, walk, run (replacement blending)
 * - Additive animations: sneak_pose, sad_pose, agree, headShake
 * - makeClipAdditive() for creating additive clips
 * - GUI for controlling blend weights
 *
 * Source: https://threejs.org/examples/webgl_animation_skinning_additive_blending.html
 */

interface ActionConfig {
    weight: number
    action?: THREE.AnimationAction
}

export const SkinningAdditiveBlending = () => {
    const mixerRef = $<AnimationMixer>()
    const baseActionsRef = $<Record<string, ActionConfig>>({
        idle: { weight: 1 },
        walk: { weight: 0 },
        run: { weight: 0 },
    })
    const additiveActionsRef = $<Record<string, ActionConfig>>({
        sneak_pose: { weight: 0 },
        sad_pose: { weight: 0 },
        agree: { weight: 0 },
        headShake: { weight: 0 },
    })
    const currentBaseAction = $('idle')
    const timeScale = $(1.0)
    const modelReady = $<boolean>(false)
    const clock = new Clock()

    // Load model
    useEffect(() => {
        const loader = new GLTFLoader()

        loader.load(
            'https://threejs.org/examples/models/gltf/Xbot.glb',
            (gltf) => {
                const model = gltf.scene
                modelRef(model)

                model.traverse((obj) => {
                    if ((obj as THREE.Mesh).isMesh) {
                        (obj as THREE.Mesh).castShadow = true
                    }
                })

                modelReady(true)

                const mixer = new AnimationMixer(model)
                mixerRef(mixer)

                const baseActions: Record<string, ActionConfig> = {}
                const addActions: Record<string, ActionConfig> = {}

                for (const clip of gltf.animations) {
                    const name = clip.name
                    let action: THREE.AnimationAction

                    if ((baseActionsRef as any)[name]) {
                        // Base action
                        action = mixer.clipAction(clip)
                        baseActions[name] = { weight: 1, action }
                        activateAction(action, 1)
                    } else if ((additiveActionsRef as any)[name]) {
                        // Make additive
                        AnimationUtils.makeClipAdditive(clip)

                        if (clip.name.endsWith('_pose')) {
                            clip = AnimationUtils.subclip(clip, clip.name, 2, 3, 30) as AnimationClip
                        }

                        action = mixer.clipAction(clip)
                        addActions[name] = { weight: 0, action }
                        activateAction(action, 0)
                    }
                }

                baseActionsRef(baseActions)
                additiveActionsRef(addActions)
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

    // Update mixer and time scale
    useFrame(() => {
        const mixer = $$(mixerRef)
        const ts = $$(timeScale)
        if (mixer) {
            mixer.timeScale = ts
            mixer.update(clock.getDelta())
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
                    position={[3, 10, 10]}
                    intensity={3}
                    castShadow
                    shadowCameraTop={2}
                    shadowCameraBottom={-2}
                    shadowCameraLeft={-2}
                    shadowCameraRight={2}
                    shadowCameraNear={0.1}
                    shadowCameraFar={40}
                />

                {/* Ground */}
                <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                    <planeGeometry args={[100, 100]} />
                    <meshPhongMaterial color={0xcbcbcb} depthWrite={false} />
                </mesh>

                {/* Model */}
                {() => {
                    const model = $$(modelRef)
                    return model ? <primitive object={model} /> : null
                }}

                {/* Weight sliders */}
                <AdditiveUI
                    baseActions={baseActionsRef}
                    additiveActions={additiveActionsRef}
                    currentBase={currentBaseAction}
                    timeScale={timeScale}
                />
            </scene>

            <perspectiveCamera
                fov={45}
                aspect={window.innerWidth / window.innerHeight}
                near={1}
                far={100}
                position={[-1, 2, 3]}
            />
            <orbitControls enableDamping target={[0, 1, 0]} />
        </canvas3D>
    )
}

// Additive blending control UI
const AdditiveUI = (props: {
    baseActions: ReturnType<typeof $>
    additiveActions: ReturnType<typeof $>
    currentBase: ReturnType<typeof $>
    timeScale: ReturnType<typeof $>
}) => {
    return (
        <div style={{
            position: 'absolute',
            top: 10,
            right: 10,
            background: 'rgba(0,0,0,0.7)',
            color: 'white',
            padding: '10px',
            borderRadius: '5px',
            minWidth: 200
        }}>
            <div style={{ marginBottom: 10, fontWeight: 'bold' }}>Base Actions</div>
            {['idle', 'walk', 'run'].map((name) => (
                <button
                    key={name}
                    onClick={() => props.currentBase(name)}
                    style={{
                        display: 'block',
                        marginBottom: 5,
                        padding: '5px 10px',
                        cursor: 'pointer'
                    }}
                >
                    {name}
                </button>
            ))}
            <div style={{ marginBottom: 10, marginTop: 15, fontWeight: 'bold' }}>Additive Weights</div>
            {['sneak_pose', 'sad_pose', 'agree', 'headShake'].map((name) => (
                <div key={name} style={{ marginBottom: 5 }}>
                    <label style={{ fontSize: '12px' }}>{name}</label>
                    <input
                        type="range"
                        min={0}
                        max={1}
                        step={0.01}
                        defaultValue={0}
                        style={{ width: '100%', display: 'block' }}
                    />
                </div>
            ))}
            <div style={{ marginTop: 15 }}>
                <label style={{ fontSize: '12px' }}>Time Scale</label>
                <input
                    type="range"
                    min={0}
                    max={1.5}
                    step={0.01}
                    value={$$(props.timeScale)}
                    onInput={(e) => props.timeScale(parseFloat((e.target as HTMLInputElement).value))}
                    style={{ width: '100%' }}
                />
            </div>
        </div>
    )
}

function activateAction(action: THREE.AnimationAction, weight: number) {
    action.enabled = true
    action.setEffectiveTimeScale(1)
    action.setEffectiveWeight(weight)
    action.play()
}


// Import geometry and material
import '@woby/three/src/geometries/PlaneGeometry'
import '@woby/three/src/materials/MeshPhongMaterial'
import '@woby/three/src/objects/Mesh'

export default SkinningAdditiveBlending