/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Color, AnimationMixer, Clock, Vector3, FogExp2 } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import * as THREE from 'three'

// Import wrappers
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/scenes/Scene'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/objects/Group'

/**
 * Port of webgl_animation_skinning_ik from Three.js examples.
 * Key features: IK solver, interactive controls, skeletal animation
 * Source: https://threejs.org/examples/webgl_animation_skinning_ik.html
 */

export const SkinningIK = () => {
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
            'https://threejs.org/examples/models/gltf/kira.glb',
            (gltf) => {
                modelRef(gltf.scene)
                modelReady(true)

                const mixer = new AnimationMixer(gltf.scene)
                mixerRef(mixer)
                gltf.animations.forEach(clip => mixer.clipAction(clip).play())
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
            <scene background={new Color(0xffffff)}>
                <fogExp2 args={[0xffffff, 0.17]} />
                <ambientLight intensity={8} />
                {() => {
                    const model = $$(modelRef)
                    return model ? <primitive object={model} /> : null
                }}
            </scene>
            <perspectiveCamera fov={55} aspect={window.innerWidth / window.innerHeight} near={0.001} far={5000} position={[0.97, 1.10, 0.73]} />
            <orbitControls enableDamping minDistance={0.2} maxDistance={1.5} target={[0, 1, 0]} />
        </canvas3D>
    )
}

export default SkinningIK