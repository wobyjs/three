/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, AudioListener, AudioContext } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webaudio_timing from Three.js examples.
 * Demonstrates audio timing and synchronization.
 *
 * Source: https://threejs.org/examples/webaudio_timing.html
 *
 * Key features:
 * - Precise audio timing
 * - Scheduled sound events
 * - Beat synchronization
 */

export const AudioTiming = () => {
    const listenerRef = $<AudioListener>()
    const beatMeshes: THREE.Mesh[] = []
    let audioContext: AudioContext | null = null
    let nextBeatTime = 0
    const bpm = 120
    const beatDuration = 60 / bpm

    useEffect(() => {
        const listener = new AudioListener()
        listenerRef(listener)
        audioContext = listener.context

        // Create beat indicator meshes
        for (let i = 0; i < 4; i++) {
            const mesh = new THREE.Mesh(
                new THREE.BoxGeometry(1, 1, 1),
                new THREE.MeshStandardMaterial({
                    color: new Color().setHSL(i / 4, 0.7, 0.5)
                })
            )
            mesh.position.set((i - 1.5) * 2, 0, 0)
            beatMeshes.push(mesh)
        }

        nextBeatTime = audioContext.currentTime
    })

    useFrame((state) => {
        if (!audioContext) return

        const currentTime = audioContext.currentTime

        // Schedule beats
        while (nextBeatTime < currentTime + 0.1) {
            const beatIndex = Math.floor(nextBeatTime / beatDuration) % 4

            // Create oscillator for this beat
            const oscillator = audioContext.createOscillator()
            const gainNode = audioContext.createGain()

            oscillator.type = beatIndex === 0 ? 'square' : 'sine'
            oscillator.frequency.setValueAtTime(
                beatIndex === 0 ? 880 : 440 + beatIndex * 55,
                nextBeatTime
            )

            gainNode.gain.setValueAtTime(0.3, nextBeatTime)
            gainNode.gain.exponentialRampToValueAtTime(0.001, nextBeatTime + 0.1)

            oscillator.connect(gainNode)
            gainNode.connect(audioContext.destination)

            oscillator.start(nextBeatTime)
            oscillator.stop(nextBeatTime + 0.1)

            // Visual feedback
            if (beatMeshes[beatIndex]) {
                beatMeshes[beatIndex].scale.setScalar(1.5)
            }

            nextBeatTime += beatDuration
        }

        // Reset beat mesh scales
        beatMeshes.forEach(mesh => {
            mesh.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1)
        })
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 10, 5]} intensity={1} />

                {/* Beat indicators */}
                {beatMeshes.map((mesh, i) => (
                    <primitive key={i} object={mesh} />
                ))}

                {/* Floor */}
                <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <boxGeometry args={[10, 10, 0.1]} />
                    <meshStandardMaterial color={0x222222} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 3, 8]}>
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

export default AudioTiming