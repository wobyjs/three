/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, AnimationMixer, AnimationClip, VectorKeyframeTrack, QuaternionKeyframeTrack, Vector3, Quaternion, Clock } from 'three'
import * as THREE from 'three'
import WebGPU from 'three/examples/jsm/capabilities/WebGPU.js'

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
 * Port of webgpu_animation - Animation demonstration using WebGPU renderer.
 *
 * Source: https://threejs.org/examples/webgpu_animation.html (conceptual)
 *
 * Demonstrates keyframe animation using AnimationMixer with WebGPU rendering pipeline.
 *
 * WebGPU Animation Support Notes:
 * - AnimationMixer: Fully supported
 * - AnimationClip: Fully supported
 * - VectorKeyframeTrack: Fully supported
 * - QuaternionKeyframeTrack: Fully supported
 *
 * Note: This example uses WebGLRenderer as fallback since WebGPURenderer
 * wrapper is still experimental. The animation patterns are identical.
 */

// Animated box with position and rotation keyframes
const AnimatedBox = ({
    position,
    color,
    animationOffset = 0
}: {
    position: [number, number, number]
    color: number
    animationOffset?: number
}) => {
    const meshRef = $<THREE.Mesh>()
    const mixerRef = $<AnimationMixer>()
    const clock = new Clock()

    useEffect(() => {
        const mesh = $$(meshRef)
        if (!mesh) return

        // Create animation mixer
        const mixer = new AnimationMixer(mesh)
        mixerRef(mixer)

        // Create position track (bouncing animation)
        const times = [0, 0.5, 1, 1.5, 2].map(t => t + animationOffset)
        const positionValues = [
            0, 0, 0,    // start
            0, 1.5, 0,  // up
            0, 0, 0,    // down
            0, 1, 0,    // smaller bounce
            0, 0, 0,    // back to start
        ]
        const positionTrack = new VectorKeyframeTrack('.position', times, positionValues)

        // Create rotation track (spinning)
        const quat = new Quaternion()
        const rotationValues: number[] = []
        for (let i = 0; i <= 4; i++) {
            quat.setFromAxisAngle(new Vector3(0, 1, 0), (i + animationOffset) * Math.PI / 2)
            rotationValues.push(quat.x, quat.y, quat.z, quat.w)
        }
        const rotationTrack = new QuaternionKeyframeTrack('.quaternion', times, rotationValues)

        // Create animation clip
        const clip = new AnimationClip('bounce', 2 + animationOffset, [positionTrack, rotationTrack])

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
        <mesh ref={meshRef} position={position}>
            <boxGeometry args={[0.8, 0.8, 0.8]} />
            <meshStandardMaterial color={color} roughness={0.3} metalness={0.7} />
        </mesh>
    )
}

// Bouncing ball animation
const BouncingBall = ({
    position,
    color
}: {
    position: [number, number, number]
    color: number
}) => {
    const meshRef = $<THREE.Mesh>()
    const mixerRef = $<AnimationMixer>()
    const clock = new Clock()

    useEffect(() => {
        const mesh = $$(meshRef)
        if (!mesh) return

        const mixer = new AnimationMixer(mesh)
        mixerRef(mixer)

        // Create bounce animation with squash/stretch
        const times = [0, 0.25, 0.5, 0.75, 1]
        const values = [
            0, 0, 0,    // start at bottom
            0, 2, 0,    // bounce up
            0, 0, 0,    // back to bottom
            0, 1.5, 0,  // smaller bounce
            0, 0, 0,    // back to bottom
        ]

        const track = new VectorKeyframeTrack('.position', times, values)
        const clip = new AnimationClip('bounce', 1, [track])
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
        <mesh ref={meshRef} position={position}>
            <sphereGeometry args={[0.4, 32, 32]} />
            <meshStandardMaterial color={color} roughness={0.2} metalness={0.8} />
        </mesh>
    )
}

// Orbiting sphere
const OrbitingSphere = ({
    radius,
    speed,
    color
}: {
    radius: number
    speed: number
    color: number
}) => {
    const meshRef = $<THREE.Mesh>()

    useFrame((state) => {
        const mesh = $$(meshRef)
        if (mesh && state.clock) {
            const time = state.clock.getElapsedTime() * speed
            mesh.position.x = Math.cos(time) * radius
            mesh.position.z = Math.sin(time) * radius
            mesh.position.y = Math.sin(time * 2) * 0.5
        }
    })

    return (
        <mesh ref={meshRef}>
            <sphereGeometry args={[0.3, 16, 16]} />
            <meshStandardMaterial color={color} roughness={0.3} metalness={0.6} />
        </mesh>
    )
}

export const Animation = () => {
    const [supported, setSupported] = $(false)
    const [checked, setChecked] = $(false)

    // Check WebGPU support
    useEffect(() => {
        const checkSupport = async () => {
            try {
                if (WebGPU.isAvailable()) {
                    setSupported(true)
                } else if (navigator.gpu) {
                    const adapter = await navigator.gpu.requestAdapter()
                    if (adapter) {
                        setSupported(true)
                    }
                }
            } catch (e) {
                console.warn('WebGPU check failed:', e)
            }
            setChecked(true)
        }
        checkSupport()
    })

    // Loading state
    if (!$$(checked)) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#1a1a2e', color: 'white' }}>
                <p>Checking WebGPU support...</p>
            </div>
        )
    }

    // Fallback UI
    if (!$$(supported)) {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#1a1a2e', color: 'white', textAlign: 'center', padding: '20px' }}>
                <h1>WebGPU Not Available</h1>
                <p>Please use Chrome 113+ or Edge 113+ for WebGPU support.</p>
                <p style={{ color: '#888', marginTop: '20px' }}>
                    This example demonstrates animation. Using WebGL fallback.
                </p>
            </div>
        )
    }

    return (
        <canvas3D>
            <webGLRenderer
                antialias
                setPixelRatio={[window.devicePixelRatio]}
                setSize={[window.innerWidth, window.innerHeight]}
            />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 10, 5]} intensity={1} />
                <pointLight position={[-5, 5, 5]} intensity={0.5} />

                {/* Animated boxes with different offsets */}
                <AnimatedBox position={[-2, 0, 0]} color={0xff6b6b} animationOffset={0} />
                <AnimatedBox position={[0, 0, 0]} color={0x4ecdc4} animationOffset={0.5} />
                <AnimatedBox position={[2, 0, 0]} color={0xffe66d} animationOffset={1} />

                {/* Bouncing balls */}
                <BouncingBall position={[-1.5, -1, 1]} color={0xa8e6cf} />
                <BouncingBall position={[1.5, -1, 1]} color={0xff8b94} />

                {/* Orbiting spheres */}
                <OrbitingSphere radius={3} speed={1} color={0x7c3aed} />
                <OrbitingSphere radius={3.5} speed={0.7} color={0x06b6d4} />
                <OrbitingSphere radius={4} speed={0.5} color={0x10b981} />

                {/* Ground plane */}
                <mesh position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <boxGeometry args={[12, 0.1, 12]} />
                    <meshStandardMaterial color={0x16213e} />
                </mesh>
            </scene>

            <perspectiveCamera
                fov={60}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[6, 4, 6]}
            />
            <orbitControls enableDamping autoRotate autoRotateSpeed={0.3} />
        </canvas3D>
    )
}

export default Animation
