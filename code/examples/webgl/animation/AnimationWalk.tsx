/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_animation_walk

import { $, $$, useEffect, useFrame } from "woby"
import { Color, AnimationMixer, Clock, Vector3, Quaternion, ACESFilmicToneMapping, PCFShadowMap } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import * as THREE from 'three'

// Import wrappers
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/scenes/Scene'
import '@woby/three/src/lights/DirectionalLight'

/**
 * Port of webgl_animation_walk from Three.js examples.
 * Key features: keyboard control, animation blending, character movement
 * Source: https://threejs.org/examples/webgl_animation_walk.html
 */

const PI = Math.PI
const PI90 = PI / 2

export const AnimationWalk = () => {
    const mixerRef = $<AnimationMixer>()
    const actionsRef = $<Record<string, THREE.AnimationAction>>({})
    const groupRef = $<THREE.Group>()
    const keyState = $({ forward: 0, right: 0, shift: 0 })
    const currentAnim = $('Idle')
    const modelReady = $<boolean>(false)
    const clock = new Clock()
    const positionRef = new Vector3()
    const easeRef = new Vector3()
    const rotateRef = new Quaternion()
    const upRef = new Vector3(0, 1, 0)
    const floorRef = $<THREE.Mesh>()

    // Keyboard handlers
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const key = keyState()
            switch (e.code) {
                case 'ArrowUp': case 'KeyW': case 'KeyZ': key.forward = -1; break
                case 'ArrowDown': case 'KeyS': key.forward = 1; break
                case 'ArrowLeft': case 'KeyA': case 'KeyQ': key.right = -1; break
                case 'ArrowRight': case 'KeyD': key.right = 1; break
                case 'ShiftLeft': case 'ShiftRight': key.shift = 1; break
            }
            keyState({ ...key })
        }

        const handleKeyUp = (e: KeyboardEvent) => {
            const key = keyState()
            switch (e.code) {
                case 'ArrowUp': case 'KeyW': case 'KeyZ': key.forward = key.forward < 0 ? 0 : key.forward; break
                case 'ArrowDown': case 'KeyS': key.forward = key.forward > 0 ? 0 : key.forward; break
                case 'ArrowLeft': case 'KeyA': case 'KeyQ': key.right = key.right < 0 ? 0 : key.right; break
                case 'ArrowRight': case 'KeyD': key.right = key.right > 0 ? 0 : key.right; break
                case 'ShiftLeft': case 'ShiftRight': key.shift = 0; break
            }
            keyState({ ...key })
        }

        window.addEventListener('keydown', handleKeyDown)
        window.addEventListener('keyup', handleKeyUp)
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
            window.removeEventListener('keyup', handleKeyUp)
        }
    })

    // Load model
    useEffect(() => {
        const loader = new GLTFLoader()

        loader.load(
            'https://threejs.org/examples/models/gltf/Soldier.glb',
            (gltf) => {
                const model = gltf.scene
                model.rotation.y = PI
                groupRef(model)

                model.traverse((obj) => {
                    if ((obj as THREE.Mesh).isMesh) {
                        if (obj.name === 'vanguard_Mesh') {
                            (obj as THREE.Mesh).castShadow = true
                            ;(obj as THREE.Mesh).receiveShadow = true
                        }
                    }
                })

                modelReady(true)

                const mixer = new AnimationMixer(model)
                mixerRef(mixer)

                const actions = {
                    Idle: mixer.clipAction(gltf.animations[0]),
                    Walk: mixer.clipAction(gltf.animations[3]),
                    Run: mixer.clipAction(gltf.animations[1]),
                }

                for (const m in actions) {
                    actions[m].enabled = true
                    actions[m].setEffectiveTimeScale(1)
                    if (m !== 'Idle') actions[m].setEffectiveWeight(0)
                }

                actions.Idle.play()
                actionsRef(actions)
            },
            undefined,
            (e) => console.error(e)
        )

        return () => {
            const mixer = $$(mixerRef)
            if (mixer) mixer.stopAllAction()
        }
    })

    // Update character
    useFrame((_, delta) => {
        const mixer = $$(mixerRef)
        const actions = $$(actionsRef)
        const group = $$(groupRef)
        const keys = $$(keyState)

        if (!mixer || !actions || !group) return

        const fade = 0.5
        const active = keys.forward === 0 && keys.right === 0 ? false : true
        const play = active ? (keys.shift ? 'Run' : 'Walk') : 'Idle'

        // Change animation
        if (play !== $$(currentAnim)) {
            const current = actions[play]
            const old = actions[$$(currentAnim)]
            currentAnim(play)

            current.reset()
            current.weight = 1.0
            old._scheduleFading(fade, old.getEffectiveWeight(), 0)
            current._scheduleFading(fade, current.getEffectiveWeight(), 1)
            current.play()
        }

        // Move character
        if (play !== 'Idle') {
            const velocity = play === 'Run' ? 5 : 1.8
            easeRef.set(keys.right, 0, keys.forward).multiplyScalar(velocity * delta)
            positionRef.add(easeRef)
            group.position.copy(positionRef)

            const angle = Math.atan2(easeRef.x, easeRef.z)
            rotateRef.setFromAxisAngle(upRef, angle)
            group.quaternion.rotateTowards(rotateRef, 0.05)
        }

        mixer.update(delta)
    })

    return (
        <canvas3D>
            <webGLRenderer
                antialias
                setPixelRatio={[window.devicePixelRatio]}
                setSize={[window.innerWidth, window.innerHeight]}
                toneMapping={ACESFilmicToneMapping}
                toneMappingExposure={0.5}
                shadowMapEnabled
                shadowMapType={PCFShadowMap}
            />
            <scene background={new Color(0x5e5d5d)}>
                <directionalLight
                    position={[-2, 5, -3]}
                    intensity={5}
                    castShadow
                    shadowCameraTop={2}
                    shadowCameraRight={2}
                    shadowCameraBottom={-2}
                    shadowCameraLeft={-2}
                    shadowCameraNear={3}
                    shadowCameraFar={8}
                />

                {() => {
                    const model = $$(groupRef)
                    return model ? <primitive object={model} /> : null
                }}
            </scene>

            <perspectiveCamera fov={45} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 2, -5]} />
            <orbitControls enableDamping enablePan={false} maxPolarAngle={PI90 - 0.05} target={[0, 1, 0]} />

            <mesh position={[0, 0, 0]} rotation={[-PI90, 0, 0]} receiveShadow>
                <planeGeometry args={[50, 50]} />
                <meshStandardMaterial color={0x404040} roughness={0.85} />
            </mesh>

            <div style={{ position: 'absolute', bottom: 10, left: 10, background: 'rgba(0,0,0,0.7)', color: 'white', padding: '10px', borderRadius: '5px' }}>
                <div>WASD / Arrow Keys - Move</div>
                <div>Shift - Run</div>
            </div>
        </canvas3D>
    )
}

import '@woby/three/src/geometries/PlaneGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'

export default AnimationWalk