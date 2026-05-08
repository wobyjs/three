/** @jsxImportSource @woby/three */

import { $, $$, useFrame, useRenderer, useCamera, useEffect } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, Vector3, Object3D, Mesh, BoxGeometry, MeshStandardMaterial } from 'three'
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
 * Port of misc_animation_keys from Three.js examples.
 * Demonstrates animation key editing and playback.
 *
 * Source: https://threejs.org/examples/misc_animation_keys.html
 *
 * Key features:
 * - Animation keyframe visualization
 * - Key editing controls
 * - Timeline scrubbing
 */

export const Keys = () => {
    const mixerRef = $<THREE.AnimationMixer>()
    const actionRef = $<THREE.AnimationAction>()
    const meshRef = $<THREE.Mesh>()
    const timeRef = $(0)
    const playingRef = $(true)

    useEffect(() => {
        const mesh = $$(meshRef)
        if (!mesh) return

        // Create simple animation
        const times = [0, 1, 2, 3, 4]
        const values = [
            0, 0, 0,    // start
            2, 1, 0,    // move right and up
            0, 2, 2,    // move center and forward
            -2, 1, 0,   // move left and up
            0, 0, 0     // back to start
        ]

        const positionTrack = new THREE.VectorKeyframeTrack(
            '.position',
            times,
            values,
            THREE.InterpolateSmooth
        )

        // Rotation track
        const rotationValues = [
            0, 0, 0,
            0, Math.PI, 0,
            0, Math.PI * 2, 0,
            0, Math.PI * 3, 0,
            0, Math.PI * 4, 0
        ]

        const rotationTrack = new THREE.VectorKeyframeTrack(
            '.rotation',
            times,
            rotationValues,
            THREE.InterpolateSmooth
        )

        const clip = new THREE.AnimationClip('animation', 4, [positionTrack, rotationTrack])

        const mixer = new THREE.AnimationMixer(mesh)
        const action = mixer.clipAction(clip)
        action.play()

        mixerRef(mixer)
        actionRef(action)
    })

    // Create timeline UI
    useEffect(() => {
        const ui = document.createElement('div')
        ui.style.cssText = 'position:fixed;bottom:20px;left:50%;transform:translateX(-50%);z-index:100;background:rgba(0,0,0,0.7);padding:15px;border-radius:10px;color:white;font-family:monospace;'
        ui.innerHTML = `
            <div style="display:flex;gap:10px;align-items:center;">
                <button id="play-pause" style="padding:10px;background:#4a90d9;color:white;border:none;border-radius:5px;cursor:pointer;">Pause</button>
                <input type="range" id="timeline" min="0" max="4" step="0.01" value="0" style="width:300px;">
                <span id="time-display">0.00s</span>
            </div>
        `
        document.body.appendChild(ui)

        const playPauseBtn = document.getElementById('play-pause')
        const timeline = document.getElementById('timeline') as HTMLInputElement
        const timeDisplay = document.getElementById('time-display')

        if (playPauseBtn) {
            playPauseBtn.addEventListener('click', () => {
                playingRef(!$$(playingRef))
                playPauseBtn.textContent = $$(playingRef) ? 'Pause' : 'Play'
            })
        }

        if (timeline && timeDisplay) {
            timeline.addEventListener('input', () => {
                const time = parseFloat(timeline.value)
                timeRef(time)
                timeDisplay.textContent = `${time.toFixed(2)}s`

                const action = $$(actionRef)
                if (action) {
                    action.time = time
                }
            })
        }

        return () => {
            ui.remove()
        }
    })

    useFrame((state) => {
        const delta = state.clock?.getDelta() ?? 0.016
        const mixer = $$(mixerRef)
        const playing = $$(playingRef)

        if (mixer && playing) {
            mixer.update(delta)

            // Update timeline
            const action = $$(actionRef)
            if (action) {
                const timeline = document.getElementById('timeline') as HTMLInputElement
                const timeDisplay = document.getElementById('time-display')
                if (timeline) {
                    timeline.value = action.time.toString()
                }
                if (timeDisplay) {
                    timeDisplay.textContent = `${action.time.toFixed(2)}s`
                }
            }
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 10, 5]} intensity={1} />

                {/* Animated mesh */}
                <mesh ref={meshRef} position={[0, 0, 0]}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color={0x4a90d9} roughness={0.3} metalness={0.7} />
                </mesh>

                {/* Grid */}
                <gridHelper args={[10, 10, 0x444444, 0x222222]} />
            </scene>

            <perspectiveCamera
                fov={60}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[5, 5, 5]}
            />

            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default Keys