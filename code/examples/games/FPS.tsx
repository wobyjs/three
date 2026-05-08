/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame, useRenderer, useCamera } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { Color, Vector3, Raycaster, Mesh, BoxGeometry, MeshStandardMaterial } from 'three'
import * as THREE from 'three'
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/CylinderGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/materials/MeshPhongMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/lights/PointLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of games_fps from Three.js examples.
 * First-person shooter mechanics with pointer lock and WASD movement.
 *
 * Source: https://threejs.org/examples/games_fps.html
 *
 * Key features:
 * - Pointer lock for mouse look
 * - WASD movement controls
 * - Shooting mechanics with raycasting
 * - Enemy targets that can be hit
 * - Score tracking
 */

export const FPS = () => {
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

    // Game state
    const score = $(0)
    const isLocked = $(false)
    const prevTime = $(performance.now())

    // Raycaster for shooting
    const raycaster = new Raycaster()

    // Enemy targets
    const enemies: THREE.Mesh[] = []

    // Create blocker/instructions UI
    useEffect(() => {
        const blocker = document.createElement('div')
        blocker.id = 'blocker'
        blocker.style.cssText = 'position:fixed;width:100%;height:100%;background:rgba(0,0,0,0.7);display:flex;justify-content:center;align-items:center;text-align:center;z-index:100;'
        blocker.innerHTML = `
            <div style="color:white;">
                <h1 style="font-size:48px;">FPS Game</h1>
                <p style="font-size:24px;">Click to play</p>
                <p style="font-size:16px;color:#888;">WASD = Move, MOUSE = Look, CLICK = Shoot</p>
                <p style="font-size:16px;color:#888;">ESC = Pause</p>
            </div>
        `
        document.body.appendChild(blocker)

        const scoreDisplay = document.createElement('div')
        scoreDisplay.id = 'score'
        scoreDisplay.style.cssText = 'position:fixed;top:20px;left:20px;color:white;font-size:24px;z-index:101;font-family:monospace;'
        scoreDisplay.textContent = 'Score: 0'
        document.body.appendChild(scoreDisplay)

        return () => {
            blocker.remove()
            scoreDisplay.remove()
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

    // Shooting
    useEffect(() => {
        const onShoot = (event: MouseEvent) => {
            if (!$$(isLocked)) return

            const camera = $$(cameraRef)
            const scene = $$(sceneRef)
            if (!camera || !scene) return

            // Raycast from camera center
            raycaster.setFromCamera(new THREE.Vector2(0, 0), camera)

            // Check for enemy hits
            const intersects = raycaster.intersectObjects(enemies)
            if (intersects.length > 0) {
                const hit = intersects[0].object as THREE.Mesh
                // Remove enemy
                scene.remove(hit)
                const idx = enemies.indexOf(hit)
                if (idx > -1) enemies.splice(idx, 1)

                // Update score
                score($$(score) + 10)
                const scoreDisplay = document.getElementById('score')
                if (scoreDisplay) scoreDisplay.textContent = `Score: ${$$(score)}`

                // Spawn new enemy
                spawnEnemy(scene)
            }
        }

        document.addEventListener('click', onShoot)
        return () => document.removeEventListener('click', onShoot)
    })

    // Spawn enemy function
    function spawnEnemy(scene: THREE.Scene) {
        const geometry = new BoxGeometry(1, 2, 1)
        const material = new MeshStandardMaterial({ color: 0xff4444 })
        const enemy = new Mesh(geometry, material)

        // Random position around the arena
        const angle = Math.random() * Math.PI * 2
        const distance = 15 + Math.random() * 10
        enemy.position.set(
            Math.cos(angle) * distance,
            1,
            Math.sin(angle) * distance
        )

        scene.add(enemy)
        enemies.push(enemy)
    }

    // Initial enemies
    useEffect(() => {
        const scene = $$(sceneRef)
        if (!scene) return

        // Spawn 10 initial enemies
        for (let i = 0; i < 10; i++) {
            spawnEnemy(scene)
        }
    })

    // Movement and animation
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
        if ($$(moveForward) || $$(moveBackward)) vel.z -= dir.z * 50.0 * delta
        if ($$(moveLeft) || $$(moveRight)) vel.x -= dir.x * 50.0 * delta

        // Move camera
        controls.moveRight(-vel.x * delta)
        controls.moveForward(-vel.z * delta)

        // Keep camera at walking height
        camera.position.y = 2

        // Animate enemies (rotate slowly)
        enemies.forEach(enemy => {
            enemy.rotation.y += 0.01
        })
    })

    // Create arena geometry
    const arenaSize = 40
    const wallHeight = 3

    return (
        <canvas3D>
            <webGLRenderer
                ref={rendererRef}
                antialias
                setPixelRatio={[window.devicePixelRatio]}
                setSize={[window.innerWidth, window.innerHeight]}
            />
            <scene ref={sceneRef} background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[10, 20, 10]} intensity={0.8} castShadow />
                <pointLight position={[0, 10, 0]} intensity={0.5} color={0x4a90d9} />

                {/* Floor */}
                <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                    <boxGeometry args={[arenaSize, arenaSize, 0.1]} />
                    <meshStandardMaterial color={0x2d2d44} />
                </mesh>

                {/* Walls */}
                <mesh position={[0, wallHeight / 2, arenaSize / 2]}>
                    <boxGeometry args={[arenaSize, wallHeight, 0.5]} />
                    <meshStandardMaterial color={0x3d3d5c} />
                </mesh>
                <mesh position={[0, wallHeight / 2, -arenaSize / 2]}>
                    <boxGeometry args={[arenaSize, wallHeight, 0.5]} />
                    <meshStandardMaterial color={0x3d3d5c} />
                </mesh>
                <mesh position={[arenaSize / 2, wallHeight / 2, 0]}>
                    <boxGeometry args={[0.5, wallHeight, arenaSize]} />
                    <meshStandardMaterial color={0x3d3d5c} />
                </mesh>
                <mesh position={[-arenaSize / 2, wallHeight / 2, 0]}>
                    <boxGeometry args={[0.5, wallHeight, arenaSize]} />
                    <meshStandardMaterial color={0x3d3d5c} />
                </mesh>

                {/* Pillars for cover */}
                {Array.from({ length: 8 }, (_, i) => {
                    const angle = (i / 8) * Math.PI * 2
                    const x = Math.cos(angle) * 10
                    const z = Math.sin(angle) * 10
                    return (
                        <mesh key={i} position={[x, 1.5, z]}>
                            <cylinderGeometry args={[0.5, 0.5, 3, 8]} />
                            <meshStandardMaterial color={0x4a4a6a} />
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

export default FPS