/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, AnimationMixer, AnimationClip, VectorKeyframeTrack, QuaternionKeyframeTrack, Vector3, Quaternion, Clock } from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_animation_keyframes from Three.js examples.
 * Demonstrates keyframe animation using AnimationMixer.
 *
 * Source: https://threejs.org/examples/webgl_animation_keyframes.html
 */

// Animated box with position and rotation keyframes
const AnimatedBox = () => {
    const meshRef = $<THREE.Mesh>()
    const mixerRef = $<AnimationMixer>()
    const clock = new Clock()

    useEffect(() => {
        const mesh = $$(meshRef)
        if (!mesh) return

        // Create animation mixer
        const mixer = new AnimationMixer(mesh)
        mixerRef(mixer)

        // Create position track (moving up and down)
        const times = [0, 1, 2, 3, 4]
        const positionValues = [
            0, 0, 0,    // start
            0, 2, 0,    // up
            0, 0, 0,    // down
            0, 2, 0,    // up again
            0, 0, 0,    // back to start
        ]
        const positionTrack = new VectorKeyframeTrack('.position', times, positionValues)

        // Create rotation track (spinning)
        const quat = new Quaternion()
        const rotationValues: number[] = []
        for (let i = 0; i <= 4; i++) {
            quat.setFromAxisAngle(new Vector3(0, 1, 0), i * Math.PI / 2)
            rotationValues.push(quat.x, quat.y, quat.z, quat.w)
        }
        const rotationTrack = new QuaternionKeyframeTrack('.quaternion', times, rotationValues)

        // Create animation clip
        const clip = new AnimationClip('dance', 4, [positionTrack, rotationTrack])

        // Create and play action
        const action = mixer.clipAction(clip)
        action.setLoop(THREE.LoopRepeat, Infinity)
        action.play()

        return () => {
            mixer.stopAllAction()
        }
    })

    // Update mixer in animation loop
    useFrame(() => {
        const mixer = $$(mixerRef)
        if (mixer) {
            mixer.update(clock.getDelta())
        }
    })

    return (
        <mesh ref={meshRef} position={[0, 0, 0]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={0xff6b6b} roughness={0.3} metalness={0.7} />
        </mesh>
    )
}

// Bouncing ball animation
const BouncingBall = () => {
    const meshRef = $<THREE.Mesh>()
    const mixerRef = $<AnimationMixer>()
    const clock = new Clock()

    useEffect(() => {
        const mesh = $$(meshRef)
        if (!mesh) return

        const mixer = new AnimationMixer(mesh)
        mixerRef(mixer)

        // Create bounce animation
        const times = [0, 0.5, 1, 1.5, 2]
        const values = [
            0, -1, 0,   // start at bottom
            0, 2, 0,    // bounce up
            0, -1, 0,   // back to bottom
            0, 1.5, 0,  // smaller bounce
            0, -1, 0,   // back to bottom
        ]

        const track = new VectorKeyframeTrack('.position', times, values)
        const clip = new AnimationClip('bounce', 2, [track])
        const action = mixer.clipAction(clip)
        action.setLoop(THREE.LoopRepeat, Infinity)
        action.play()

        return () => mixer.stopAllAction()
    })

    useFrame(() => {
        const mixer = $$(mixerRef)
        if (mixer) {
            mixer.update(clock.getDelta())
        }
    })

    return (
        <mesh ref={meshRef} position={[-2, 0, 0]}>
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshStandardMaterial color={0x4ecdc4} roughness={0.2} metalness={0.8} />
        </mesh>
    )
}

// Import THREE for LoopRepeat constant
import * as THREE from 'three'

export const Keyframes = () => {
    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 10, 5]} intensity={1} />

                <AnimatedBox />
                <BouncingBall />

                {/* Ground plane */}
                <mesh position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <boxGeometry args={[10, 0.1, 10]} />
                    <meshStandardMaterial color={0x16213e} />
                </mesh>
            </scene>
            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[5, 3, 5]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default Keyframes
