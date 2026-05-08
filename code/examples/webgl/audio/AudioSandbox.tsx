/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, PositionalAudio, AudioListener, AudioAnalyser } from 'three'
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
 * Port of webaudio_sandbox from Three.js examples.
 * Demonstrates multiple positional audio sources in a scene.
 *
 * Source: https://threejs.org/examples/webaudio_sandbox.html
 *
 * Key features:
 * - Multiple PositionalAudio sources
 * - Different sound types
 * - Spatial audio mixing
 */

interface AudioSource {
    mesh: THREE.Mesh
    sound: PositionalAudio
    frequency: number
}

export const AudioSandbox = () => {
    const listenerRef = $<AudioListener>()
    const sources: AudioSource[] = []

    useEffect(() => {
        const listener = new AudioListener()
        listenerRef(listener)

        // Create multiple sound sources
        const frequencies = [261.63, 329.63, 392.00, 523.25] // C, E, G, C5

        frequencies.forEach((freq, i) => {
            const mesh = new THREE.Mesh(
                new THREE.BoxGeometry(1, 1, 1),
                new THREE.MeshStandardMaterial({
                    color: new Color().setHSL(i / frequencies.length, 0.7, 0.5)
                })
            )
            mesh.position.set(
                (i - 1.5) * 3,
                0,
                0
            )

            const sound = new PositionalAudio(listener)
            const oscillator = sound.context.createOscillator()
            oscillator.type = i % 2 === 0 ? 'sine' : 'triangle'
            oscillator.frequency.setValueAtTime(freq, sound.context.currentTime)

            sound.setNodeSource(oscillator)
            sound.setVolume(0.3)
            sound.setLoop(true)
            oscillator.start()

            sources.push({ mesh, sound, frequency: freq })
        })
    })

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0

        sources.forEach((source, i) => {
            // Animate sources
            source.mesh.position.y = Math.sin(time + i * 0.5) * 2
            source.mesh.rotation.x = time * 0.5
            source.mesh.rotation.y = time * 0.3

            // Modulate frequency slightly
            if (source.sound.source) {
                const oscillator = source.sound.source as OscillatorNode
                oscillator.frequency.setValueAtTime(
                    source.frequency + Math.sin(time * 2) * 10,
                    source.sound.context.currentTime
                )
            }
        })
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x111111)}>
                <ambientLight intensity={0.3} />
                <pointLight position={[5, 5, 5]} intensity={1} />

                {/* Sound sources */}
                {sources.map((source, i) => (
                    <primitive key={i} object={source.mesh}>
                        <primitive object={source.sound} />
                    </primitive>
                ))}

                {/* Floor */}
                <mesh position={[0, -3, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <boxGeometry args={[20, 20, 0.1]} />
                    <meshStandardMaterial color={0x222222} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 5, 10]}>
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

export default AudioSandbox