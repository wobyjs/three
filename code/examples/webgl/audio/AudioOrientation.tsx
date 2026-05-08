/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, PositionalAudio, AudioListener, AudioLoader } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/PointLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webaudio_orientation from Three.js examples.
 * Demonstrates positional audio with orientation-based panning.
 *
 * Source: https://threejs.org/examples/webaudio_orientation.html
 *
 * Key features:
 * - PositionalAudio for 3D sound
 * - AudioListener attached to camera
 * - Sound source orientation
 */

export const AudioOrientation = () => {
    const listenerRef = $<AudioListener>()
    const soundRef = $<PositionalAudio>()
    const sourceRef = $<THREE.Mesh>()

    useEffect(() => {
        // Create audio listener
        const listener = new AudioListener()
        listenerRef(listener)

        // Create positional audio
        const sound = new PositionalAudio(listener)
        sound.setVolume(0.5)
        sound.setLoop(true)

        // Load a simple oscillator sound (no external file needed)
        const oscillator = sound.context.createOscillator()
        oscillator.type = 'sine'
        oscillator.frequency.setValueAtTime(440, sound.context.currentTime)

        // Connect oscillator to sound
        sound.setNodeSource(oscillator)
        oscillator.start()

        soundRef(sound)
    })

    useFrame((state) => {
        const source = $$(sourceRef)
        const time = state.clock?.getElapsedTime() ?? 0

        if (source) {
            // Rotate sound source
            source.rotation.y = time * 0.5
            source.position.x = Math.cos(time) * 5
            source.position.z = Math.sin(time) * 5
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.3} />
                <pointLight position={[5, 5, 5]} intensity={1} />

                {/* Sound source */}
                <mesh ref={sourceRef} position={[5, 0, 0]}>
                    <sphereGeometry args={[0.5, 16, 16]} />
                    <meshStandardMaterial color={0xff6b6b} emissive={0xff6b6b} emissiveIntensity={0.3} />
                    {() => {
                        const sound = $$(soundRef)
                        if (!sound) return null
                        return <primitive object={sound} />
                    }}
                </mesh>

                {/* Visual indicator of sound direction */}
                <mesh position={[0, 0, 0]}>
                    <boxGeometry args={[0.2, 0.2, 2]} />
                    <meshStandardMaterial color={0x4ecdc4} />
                </mesh>

                {/* Floor */}
                <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <boxGeometry args={[20, 20, 0.1]} />
                    <meshStandardMaterial color={0x222222} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 3, 10]}>
                {() => {
                    const listener = $$(listenerRef)
                    if (!listener) return null
                    return <primitive object={listener} />
                }}
            </perspectiveCamera>
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default AudioOrientation