/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_animation_skinning_ik

import { $, $$, useEffect, useFrame } from "woby"
import { Color, AnimationMixer, Clock, FogExp2, WebGLCubeRenderTarget, CubeCamera } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { CCDIKSolver, CCDIKHelper } from 'three/examples/jsm/animation/CCDIKSolver.js'
import * as THREE from 'three'

// Import wrappers
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/scenes/Scene'
import '@woby/three/src/lights/AmbientLight'

/**
 * Port of webgl_animation_skinning_ik from Three.js examples.
 * Key features: IK solver, CCDIKHelper, skeletal animation
 * Source: https://threejs.org/examples/webgl_animation_skinning_ik.html
 */

export const AnimationSkinningIK = () => {
    const mixerRef = $<AnimationMixer>()
    const modelReady = $<boolean>(false)
    const clock = new Clock()
    const modelRef = $<THREE.Group>()
    const iksolverRef = $<CCDIKSolver>()
    const ikhelperRef = $<CCDIKHelper>()
    const sphereRef = $<THREE.Mesh>()
    const headRef = $<THREE.Object3D>()
    const lowerarmLRef = $<THREE.Object3D>()
    const upperarmLRef = $<THREE.Object3D>()
    const handLRef = $<THREE.Object3D>()
    const targetHandLRef = $<THREE.Object3D>()
    const kiraRef = $<THREE.Object3D>()
    const cubeRenderTargetRef = $<WebGLCubeRenderTarget>()
    const mirrorCameraRef = $<CubeCamera>()
    const confRef = $({ followSphere: false, turnHead: true, ik_solver: true })

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

                // Find named bones
                gltf.scene.traverse((n: any) => {
                    if (n.name === 'head') headRef(n)
                    if (n.name === 'lowerarm_l') lowerarmLRef(n)
                    if (n.name === 'Upperarm_l') upperarmLRef(n)
                    if (n.name === 'hand_l') handLRef(n)
                    if (n.name === 'target_hand_l') targetHandLRef(n)
                    if (n.name === 'boule') sphereRef(n)
                    if (n.name === 'Kira_Shirt_left') kiraRef(n)
                })

                // Setup IK
                const kira = $$(kiraRef)
                if (kira) {
                    const iks = [{
                        target: 22,
                        effector: 6,
                        links: [
                            { index: 5, rotationMin: new THREE.Vector3(1.2, -1.8, -0.4), rotationMax: new THREE.Vector3(1.7, -1.1, 0.3) },
                            { index: 4, rotationMin: new THREE.Vector3(0.1, -0.7, -1.8), rotationMax: new THREE.Vector3(1.1, 0, -1.4) },
                        ],
                    }]

                    const solver = new CCDIKSolver(kira, iks)
                    iksolverRef(solver)

                    const helper = new CCDIKHelper(kira, iks, 0.01)
                    ikhelperRef(helper)
                }

                // Setup mixer
                const mixer = new AnimationMixer(gltf.scene)
                mixerRef(mixer)
                gltf.animations.forEach(clip => mixer.clipAction(clip).play())

                // Setup mirror sphere
                const sphere = $$(sphereRef)
                const handL = $$(handLRef)
                if (sphere && handL) {
                    handL.attach(sphere)

                    const cubeRenderTarget = new WebGLCubeRenderTarget(1024)
                    const mirrorCamera = new CubeCamera(0.05, 50, cubeRenderTarget)
                    cubeRenderTargetRef(cubeRenderTarget)
                    mirrorCameraRef(mirrorCamera)

                    sphere.material = new THREE.MeshBasicMaterial({ envMap: cubeRenderTarget.texture })
                }
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
        const conf = $$(confRef)
        const sphere = $$(sphereRef)
        const mirrorCamera = $$(mirrorCameraRef)
        const head = $$(headRef)
        const iksolver = $$(iksolverRef)

        // Update IK
        if (conf.ik_solver && iksolver) {
            iksolver.update()
        }

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

export default AnimationSkinningIK