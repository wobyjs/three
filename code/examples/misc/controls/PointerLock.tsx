/** @jsxImportSource @woby/three */

import { $, $$, useFrame, useRenderer, useCamera, useEffect } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { Color, Vector3 } from 'three'
import * as THREE from 'three'
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js'

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
 * Port of misc_controls_pointerlock from Three.js examples.
 * Demonstrates PointerLockControls for first-person mouse look.
 *
 * Source: https://threejs.org/examples/misc_controls_pointerlock.html
 *
 * Key features:
 * - Click to lock pointer
 * - WASD movement
 * - Mouse look
 * - ESC to unlock
 */

export const PointerLock = () => {
    const cameraRef = $<THREE.PerspectiveCamera>()
    const sceneRef = $<THREE.Scene>()
    const rendererRef = useRenderer<THREE.WebGLRenderer>()
    const controlsRef = $<PointerLockControls>()

    // Movement state
    const moveForward = $(false)
    const moveBackward = $(false)
    const moveLeft = $(false)
    const moveRight = $(false)
    const velocity = $(new Vector3())
    const direction = $(new Vector3())
    const isLocked = $(false)
    const prevTime = $(performance.now())

    // Create instructions UI
    useEffect(() => {
        const blocker = document.createElement('div')
        blocker.id = 'blocker'
        blocker.style.cssText = 'position:fixed;width:100%;height:100%;background:rgba(0,0,0,0.5);display:flex;justify-content:center;align-items:center;text-align:center;z-index:100;'
        blocker.innerHTML = `
            <div style="color:white;">
                <h1 style="font-size:36px;">Pointer Lock Controls</h1>
                <p style="font-size:18px;">Click to play</p>
                <p style="font-size:14px;color:#888;">WASD = Move, MOUSE = Look, ESC = Exit</p>
            </div>
        `
        document.body.appendChild(blocker)

        return () => {
            blocker.remove()
        }
    })

    // Setup pointer lock controls
    useEffect(() => {
        const renderer = $$(rendererRef)
        const camera = $$(cameraRef)
        if (!renderer || !camera) return

        const controls = new PointerLockControls(camera, renderer.domElement)
        controlsRef(controls)

        const blocker = document.getElementById('blocker')
        const onClick = () => {
            controls.lock()
        }

        if (blocker) {
            blocker.addEventListener('click', onClick)
        }

        controls.addEventListener('lock', () => {
            isLocked(true)
            if (blocker) blocker.style.display = 'none'
        })

        controls.addEventListener('unlock', () => {
            isLocked(false)
            if (blocker) blocker.style.display = 'flex'
        })

        return () => {
            if (blocker) blocker.removeEventListener('click', onClick)
            controls.dispose()
        }
    })

    // Keyboard controls
    useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
            switch (event.code) {
                case 'KeyW': moveForward(true); break
                case 'KeyS': moveBackward(true); break
                case 'KeyA': moveLeft(true); break
                case 'KeyD': moveRight(true); break
            }
        }

        const onKeyUp = (event: KeyboardEvent) => {
            switch (event.code) {
                case 'KeyW': moveForward(false); break
                case 'KeyS': moveBackward(false); break
                case 'KeyA': moveLeft(false); break
                case 'KeyD': moveRight(false); break
            }
        }

        document.addEventListener('keydown', onKeyDown)
        document.addEventListener('keyup', onKeyUp)

        return () => {
            document.removeEventListener('keydown', onKeyDown)
            document.removeEventListener('keyup', onKeyUp)
        }
    })

    // Movement
    useFrame(() => {
        if (!$$(isLocked)) return

        const time = performance.now()
        const delta = (time - $$(prevTime)) / 1000
        prevTime(time)

        const controls = $$(controlsRef)
        const camera = $$(cameraRef)
        if (!controls || !camera) return

        // Apply friction
        const vel = $$(velocity)
        vel.x -= vel.x * 10.0 * delta
        vel.z -= vel.z * 10.0 * delta

        // Get movement direction
        const dir = $$(direction)
        dir.z = Number($$(moveForward)) - Number($$(moveBackward))
        dir.x = Number($$(moveRight)) - Number($$(moveLeft))
        dir.normalize()

        // Apply movement
        if ($$(moveForward) || $$(moveBackward)) vel.z -= dir.z * 25.0 * delta
        if ($$(moveLeft) || $$(moveRight)) vel.x -= dir.x * 25.0 * delta

        // Move camera
        controls.moveRight(-vel.x * delta)
        controls.moveForward(-vel.z * delta)

        // Keep camera at walking height
        camera.position.y = 2
    })

    return (
        <canvas3D>
            <webGLRenderer
                ref={rendererRef}
                antialias
                setPixelRatio={[window.devicePixelRatio]}
                setSize={[window.innerWidth, window.innerHeight]}
            />
            <scene ref={sceneRef} background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[10, 20, 10]} intensity={0.8} />

                {/* Floor */}
                <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                    <boxGeometry args={[200, 200, 0.1]} />
                    <meshStandardMaterial color={0x2d2d44} />
                </mesh>

                {/* Random objects */}
                {Array.from({ length: 50 }, (_, i) => {
                    const x = (Math.random() - 0.5) * 100
                    const z = (Math.random() - 0.5) * 100
                    const size = 1 + Math.random() * 2
                    return (
                        <mesh key={i} position={[x, size / 2, z]}>
                            <boxGeometry args={[size, size, size]} />
                            <meshStandardMaterial color={new Color().setHSL(Math.random(), 0.7, 0.5)} />
                        </mesh>
                    )
                })}
            </scene>

            <perspectiveCamera
                ref={cameraRef}
                fov={75}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={1000}
                position={[0, 2, 0]}
            />
        </canvas3D>
    )
}

export default PointerLock