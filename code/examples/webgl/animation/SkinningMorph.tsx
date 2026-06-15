/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Color, AnimationMixer, Clock, Fog } from 'three'
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
 * Port of webgl_animation_skinning_morph from Three.js examples.
 * Key features: morph targets, animation clips, skeleton visualization
 * Source: https://threejs.org/examples/webgl_animation_skinning_morph.html
 */

export const SkinningMorph = () => {
    const mixerRef = $<AnimationMixer>()
    const actionsRef = $<Record<string, THREE.AnimationAction>>({})
    const currentState = $('Walking')
    const modelReady = $<boolean>(false)
    const clock = new Clock()
    const modelRef = $<THREE.Group>()

    useEffect(() => {
        const loader = new GLTFLoader()

        loader.load(
            'https://threejs.org/examples/models/gltf/RobotExpressive/RobotExpressive.glb',
            (gltf) => {
                modelRef(gltf.scene)
                modelReady(true)

                const mixer = new AnimationMixer(gltf.scene)
                mixerRef(mixer)

                const actions: Record<string, THREE.AnimationAction> = {}
                const STATES = ['Idle', 'Walking', 'Running', 'Dance', 'Death', 'Sitting', 'Standing']
                const EMOTES = ['Jump', 'Yes', 'No', 'Wave', 'Punch', 'ThumbsUp']

                for (const clip of gltf.animations) {
                    const action = mixer.clipAction(clip)
                    actions[clip.name] = action
                    if (EMOTES.includes(clip.name) || STATES.indexOf(clip.name) >= 4) {
                        action.clampWhenFinished = true
                        action.loop = THREE.LoopOnce
                    }
                }
                actionsRef(actions)
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

    useFrame(() => {
        const mixer = $$(mixerRef)
        if (mixer) mixer.update(clock.getDelta())
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0xe0e0e0)}>
                <fog args={[0xe0e0e0, 20, 100]} />
                <hemisphereLight args={[0xffffff, 0x8d8d8d, 3]} position={[0, 20, 0]} />
                <directionalLight position={[0, 20, 10]} intensity={3} />

                <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <planeGeometry args={[2000, 2000]} />
                    <meshStandardMaterial color={0xcbcbcb} depthWrite={false} />
                </mesh>
                <gridHelper args={[200, 40, 0x000000, 0x000000]} />

                {() => {
                    const model = $$(modelRef)
                    return model ? <primitive object={model} /> : null
                }}
            </scene>
            <perspectiveCamera fov={45} aspect={window.innerWidth / window.innerHeight} near={0.25} far={100} position={[-5, 3, 10]} />
            <orbitControls enableDamping target={[0, 2, 0]} />
        </canvas3D>
    )
}

import '@woby/three/src/geometries/PlaneGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/helpers/GridHelper'

export default SkinningMorph