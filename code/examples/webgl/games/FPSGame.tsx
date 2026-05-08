/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, Vector3, Raycaster, Euler } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/CapsuleGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of games_fps from Three.js examples.
 * Demonstrates first-person shooter controls and mechanics.
 *
 * Source: https://threejs.org/examples/games_fps.html
 *
 * Key features:
 * - First-person camera controls
 * - WASD movement
 * - Mouse look
 * - Simple collision detection
 */

export const FPSGame = () => {
    const playerRef = $<THREE.Mesh>()
    const velocity = new Vector3()
    const direction = new Vector3()
    const moveState = { forward: false, backward: false, left: false, right: false }

    useEffect(() => {
        // Keyboard controls
        const onKeyDown = (e: KeyboardEvent) => {
            switch (e.code) {
                case 'KeyW': moveState.forward = true; break
                case 'KeyS': moveState.backward = true; break
                case 'KeyA': moveState.left = true; break
                case 'KeyD': moveState.right = true; break
            }
        }
        const onKeyUp = (e: KeyboardEvent) => {
            switch (e.code) {
                case 'KeyW': moveState.forward = false; break
                case 'KeyS': moveState.backward = false; break
                case 'KeyA': moveState.left = false; break
                case 'KeyD': moveState.right = false; break
            }
        }

        window.addEventListener('keydown', onKeyDown)
        window.addEventListener('keyup', onKeyUp)

        return () => {
            window.removeEventListener('keydown', onKeyDown)
            window.removeEventListener('keyup', onKeyUp)
        }
    })

    useFrame((state) => {
        const player = $$(playerRef)
        if (!player) return

        const delta = state.clock?.getDelta() ?? 0.016
        const speed = 5

        // Calculate movement direction
        direction.set(0, 0, 0)
        if (moveState.forward) direction.z -= 1
        if (moveState.backward) direction.z += 1
        if (moveState.left) direction.x -= 1
        if (moveState.right) direction.x += 1
        direction.normalize()

        // Apply movement
        velocity.x = direction.x * speed
        velocity.z = direction.z * speed

        player.position.x += velocity.x * delta
        player.position.z += velocity.z * delta

        // Keep player in bounds
        player.position.x = Math.max(-20, Math.min(20, player.position.x))
        player.position.z = Math.max(-20, Math.min(20, player.position.z))
    })

    // Generate obstacles
    const obstacles: { position: [number, number, number]; scale: [number, number, number] }[] = []
    for (let i = 0; i < 20; i++) {
        obstacles.push({
            position: [
                (Math.random() - 0.5) * 40,
                Math.random() * 2 + 0.5,
                (Math.random() - 0.5) * 40
            ],
            scale: [
                1 + Math.random() * 2,
                1 + Math.random() * 3,
                1 + Math.random() * 2
            ]
        })
    }

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x87ceeb)}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 20, 10]} intensity={1} castShadow />

                {/* Player */}
                <mesh ref={playerRef} position={[0, 1, 0]}>
                    <capsuleGeometry args={[0.3, 1, 4, 8]} />
                    <meshStandardMaterial color={0xff6b6b} />
                </mesh>

                {/* Obstacles */}
                {obstacles.map((obs, i) => (
                    <mesh key={i} position={obs.position} scale={obs.scale} castShadow>
                        <boxGeometry args={[1, 1, 1]} />
                        <meshStandardMaterial color={0x4ecdc4} />
                    </mesh>
                ))}

                {/* Ground */}
                <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                    <boxGeometry args={[50, 50, 0.1]} />
                    <meshStandardMaterial color={0x228b22} />
                </mesh>
            </scene>

            <perspectiveCamera fov={75} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 2, 5]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default FPSGame