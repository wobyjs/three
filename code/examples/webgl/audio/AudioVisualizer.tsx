/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, AudioListener, AudioAnalyser, InstancedMesh, Object3D, BufferAttribute } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webaudio_visualizer from Three.js examples.
 * Demonstrates audio visualization using frequency data.
 *
 * Source: https://threejs.org/examples/webaudio_visualizer.html
 *
 * Key features:
 * - AudioAnalyser for frequency extraction
 * - Real-time visualization
 * - Frequency bar display
 */

const BAR_COUNT = 64
const dummy = new Object3D()

export const AudioVisualizer = () => {
    const listenerRef = $<AudioListener>()
    const analyserRef = $<AudioAnalyser>()
    const barsRef = $<InstancedMesh>()
    let oscillator: OscillatorNode | null = null

    useEffect(() => {
        const listener = new AudioListener()
        listenerRef(listener)

        // Create audio analyser
        const analyser = new AudioAnalyser(listener, 256)
        analyserRef(analyser)

        // Create oscillator for demo
        oscillator = listener.context.createOscillator()
        oscillator.type = 'sawtooth'
        oscillator.frequency.setValueAtTime(220, listener.context.currentTime)

        // Add LFO for frequency modulation
        const lfo = listener.context.createOscillator()
        lfo.type = 'sine'
        lfo.frequency.setValueAtTime(2, listener.context.currentTime)

        const lfoGain = listener.context.createGain()
        lfoGain.gain.setValueAtTime(100, listener.context.currentTime)

        lfo.connect(lfoGain)
        lfoGain.connect(oscillator.frequency)

        const gainNode = listener.context.createGain()
        gainNode.gain.setValueAtTime(0.3, listener.context.currentTime)

        oscillator.connect(gainNode)
        gainNode.connect(listener.context.destination)

        oscillator.start()
        lfo.start()
    })

    useFrame(() => {
        const analyser = $$(analyserRef)
        const bars = $$(barsRef)

        if (!analyser || !bars) return

        // Get frequency data
        const data = analyser.getFrequencyData()

        // Update bar heights based on frequency
        for (let i = 0; i < BAR_COUNT; i++) {
            const value = data[i] || 0
            const height = (value / 255) * 5 + 0.1

            dummy.position.set(
                (i - BAR_COUNT / 2) * 0.3,
                height / 2,
                0
            )
            dummy.scale.set(0.25, height, 0.25)
            dummy.updateMatrix()
            bars.setMatrixAt(i, dummy.matrix)
        }

        bars.instanceMatrix.needsUpdate = true
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x111111)}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[10, 10, 10]} intensity={1} />

                {/* Frequency bars */}
                <instancedMesh ref={barsRef} args={[undefined, undefined, BAR_COUNT]}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color={0x4ecdc4} metalness={0.5} roughness={0.3} />
                </instancedMesh>

                {/* Floor */}
                <mesh position={[0, -0.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <boxGeometry args={[20, 10, 0.1]} />
                    <meshStandardMaterial color={0x222222} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 5, 15]}>
                {() => {
                    const listener = $$(listenerRef)
                    if (!listener) return null
                    return <primitive object={listener} />
                }}
            </perspectiveCamera>
            <orbitControls enableDamping target={[0, 2, 0]} />
        </canvas3D>
    )
}

export default AudioVisualizer