/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, AnimationMixer, AnimationClip, VectorKeyframeTrack, QuaternionKeyframeTrack, Vector3, Quaternion, Clock } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/CylinderGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/objects/Group'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_animation_multiple from Three.js examples.
 * Demonstrates multiple animation clips on a single model with blending.
 *
 * Source: https://threejs.org/examples/webgl_animation_multiple.html
 */

// Animated robot with multiple animation clips
const AnimatedRobot = () => {
    const groupRef = $<THREE.Group>()
    const mixerRef = $<AnimationMixer>()
    const clock = new Clock()

    // Animation state
    const activeClip = $('idle')
    const actionsRef = $<Record<string, THREE.AnimationAction>>({})

    useEffect(() => {
        const group = $$(groupRef)
        if (!group) return

        const mixer = new AnimationMixer(group)
        mixerRef(mixer)

        // Create multiple animation clips

        // 1. Idle animation (subtle breathing)
        const idleTimes = [0, 2, 4]
        const idleValues = [0, 0, 0, 0, 0.1, 0, 0, 0, 0, 0]
        const idleTrack = new VectorKeyframeTrack('.position', idleTimes, idleValues)
        const idleClip = new AnimationClip('idle', 4, [idleTrack])

        // 2. Walk animation (forward movement)
        const walkTimes = [0, 1, 2, 3]
        const walkValues = [0, 0, 0, 0, 0, 2, 0, 0, 4, 0, 0, 0]
        const walkTrack = new VectorKeyframeTrack('.position', walkTimes, walkValues)
        const walkClip = new AnimationClip('walk', 3, [walkTrack])

        // 3. Jump animation
        const jumpTimes = [0, 0.5, 1, 1.5]
        const jumpValues = [0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0]
        const jumpTrack = new VectorKeyframeTrack('.position', jumpTimes, jumpValues)
        const jumpClip = new AnimationClip('jump', 1.5, [jumpTrack])

        // 4. Spin animation
        const spinTimes = [0, 1, 2]
        const quat = new Quaternion()
        const spinValues: number[] = []
        for (let i = 0; i <= 2; i++) {
            quat.setFromAxisAngle(new Vector3(0, 1, 0), i * Math.PI)
            spinValues.push(quat.x, quat.y, quat.z, quat.w)
        }
        const spinTrack = new QuaternionKeyframeTrack('.quaternion', spinTimes, spinValues)
        const spinClip = new AnimationClip('spin', 2, [spinTrack])

        // Create actions for each clip
        const actions: Record<string, THREE.AnimationAction> = {
            idle: mixer.clipAction(idleClip),
            walk: mixer.clipAction(walkClip),
            jump: mixer.clipAction(jumpClip),
            spin: mixer.clipAction(spinClip),
        }

        // Set all actions to loop
        Object.values(actions).forEach(action => {
            action.setLoop(THREE.LoopRepeat, Infinity)
        })

        actionsRef(actions)

        // Start with idle
        actions.idle.play()

        return () => mixer.stopAllAction()
    })

    // Switch animation based on activeClip
    useEffect(() => {
        const actions = $$(actionsRef)
        const mixer = $$(mixerRef)
        const newClip = $$(activeClip)
        if (!actions || !mixer || !newClip) return

        // Crossfade to new animation
        const newAction = actions[newClip]
        if (!newAction) return

        // Stop all actions and play the new one
        Object.entries(actions).forEach(([name, action]) => {
            if (name === newClip) {
                action.reset().play()
            } else {
                action.fadeOut(0.5)
            }
        })
        newAction.fadeIn(0.5)
    })

    // Update mixer
    useFrame(() => {
        const mixer = $$(mixerRef)
        if (mixer) {
            mixer.update(clock.getDelta())
        }
    })

    return (
        <group ref={groupRef} position={[0, 0, 0]}>
            {/* Robot body */}
            <mesh position={[0, 0.5, 0]}>
                <boxGeometry args={[1, 1, 0.5]} />
                <meshStandardMaterial color={0x4a90d9} roughness={0.3} metalness={0.7} />
            </mesh>

            {/* Robot head */}
            <mesh position={[0, 1.25, 0]}>
                <sphereGeometry args={[0.3, 16, 16]} />
                <meshStandardMaterial color={0x4a90d9} roughness={0.3} metalness={0.7} />
            </mesh>

            {/* Robot legs */}
            <mesh position={[-0.3, -0.5, 0]}>
                <cylinderGeometry args={[0.15, 0.15, 1, 8]} />
                <meshStandardMaterial color={0x3a7bc8} roughness={0.4} metalness={0.6} />
            </mesh>
            <mesh position={[0.3, -0.5, 0]}>
                <cylinderGeometry args={[0.15, 0.15, 1, 8]} />
                <meshStandardMaterial color={0x3a7bc8} roughness={0.4} metalness={0.6} />
            </mesh>
        </group>
    )
}

// Animation control buttons
const AnimationControls = ({ setActiveClip }: { setActiveClip: (clip: string) => void }) => {
    return (
        <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '10px' }}>
            <button onClick={() => setActiveClip('idle')} style={{ padding: '10px 20px', background: '#4a90d9', color: 'white', border: 'none', borderRadius: '5px' }}>Idle</button>
            <button onClick={() => setActiveClip('walk')} style={{ padding: '10px 20px', background: '#4a90d9', color: 'white', border: 'none', borderRadius: '5px' }}>Walk</button>
            <button onClick={() => setActiveClip('jump')} style={{ padding: '10px 20px', background: '#4a90d9', color: 'white', border: 'none', borderRadius: '5px' }}>Jump</button>
            <button onClick={() => setActiveClip('spin')} style={{ padding: '10px 20px', background: '#4a90d9', color: 'white', border: 'none', borderRadius: '5px' }}>Spin</button>
        </div>
    )
}

export const Multiple = () => {
    const activeClip = $('idle')

    // Keyboard controls
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            switch (event.key.toLowerCase()) {
                case 'i':
                    activeClip('idle')
                    break
                case 'w':
                    activeClip('walk')
                    break
                case 'j':
                    activeClip('jump')
                    break
                case 's':
                    activeClip('spin')
                    break
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 10, 5]} intensity={1} />

                <AnimatedRobot />

                {/* Ground plane */}
                <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <boxGeometry args={[20, 0.1, 20]} />
                    <meshStandardMaterial color={0x2a2a4e} />
                </mesh>
            </scene>
            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[5, 3, 5]} />
            <orbitControls enableDamping target={[0, 0.5, 0]} />
        </canvas3D>
    )
}

export default Multiple