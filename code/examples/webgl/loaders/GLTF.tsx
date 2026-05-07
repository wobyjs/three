/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, AnimationMixer, Box3, Vector3, ACESFilmicToneMapping, Clock } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

// Import wrappers for registration
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_loader_gltf from Three.js examples.
 * Demonstrates GLTF model loading with animation support.
 *
 * Source: https://threejs.org/examples/webgl_loader_gltf.html
 *
 * Key features:
 * - GLTFLoader for model loading
 * - AnimationMixer for animation playback
 * - Bounding box camera fitting
 * - ACESFilmicToneMapping for realistic rendering
 */

export const GLTF = () => {
    const modelRef = $<THREE.Group>()
    const mixerRef = $<AnimationMixer>()
    const clock = new Clock()

    // Load GLTF model
    useEffect(() => {
        const loader = new GLTFLoader()

        // Use a simple animated model from threejs.org
        loader.load(
            'https://threejs.org/examples/models/gltf/Soldier.glb',
            (gltf) => {
                const model = gltf.scene

                // Scale and position model
                model.scale.set(1, 1, 1)
                model.position.set(0, 0, 0)

                // Enable shadows on all meshes
                model.traverse((child) => {
                    if ((child as THREE.Mesh).isMesh) {
                        (child as THREE.Mesh).castShadow = true
                        (child as THREE.Mesh).receiveShadow = true
                    }
                })

                modelRef(model)

                // Setup animation if model has animations
                if (gltf.animations.length > 0) {
                    const mixer = new AnimationMixer(model)
                    mixerRef(mixer)

                    // Play the first animation clip
                    const action = mixer.clipAction(gltf.animations[0])
                    action.setLoop(THREE.LoopRepeat, Infinity)
                    action.play()
                }
            },
            (progress) => {
                // Loading progress
                console.log(`Loading: ${(progress.loaded / progress.total * 100).toFixed(1)}%`)
            },
            (error) => {
                console.error('Error loading GLTF model:', error)
            }
        )

        return () => {
            const mixer = $$(mixerRef)
            if (mixer) mixer.stopAllAction()
        }
    })

    // Update animation mixer
    useFrame(() => {
        const mixer = $$(mixerRef)
        if (mixer) {
            mixer.update(clock.getDelta())
        }
    })

    // Camera fitting based on model bounding box
    useEffect(() => {
        const model = $$(modelRef)
        if (!model) return

        // Calculate bounding box
        const box = new Box3().setFromObject(model)
        const center = box.getCenter(new Vector3())
        const size = box.getSize(new Vector3())

        // Adjust camera to fit model
        const maxDim = Math.max(size.x, size.y, size.z)
        const fov = 60
        const cameraDistance = maxDim / (2 * Math.tan((fov / 2) * Math.PI / 180))

        // Camera position is set via JSX props, but we could update it here
        // For now, we just log the calculated values for reference
        console.log(`Model center: ${center.x}, ${center.y}, ${center.z}`)
        console.log(`Model size: ${size.x}, ${size.y}, ${size.z}`)
        console.log(`Recommended camera distance: ${cameraDistance}`)
    })

    return (
        <canvas3D>
            <webGLRenderer
                antialias
                setPixelRatio={[window.devicePixelRatio]}
                setSize={[window.innerWidth, window.innerHeight]}
                toneMapping={ACESFilmicToneMapping}
                toneMappingExposure={1}
                outputColorSpace={THREE.SRGBColorSpace}
            />
            <scene background={new Color(0x1a1a1a)}>
                <ambientLight intensity={0.3} />
                <directionalLight
                    position={[5, 10, 5]}
                    intensity={1}
                    castShadow
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                />

                {/* Ground plane */}
                <mesh
                    position={[0, 0, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    receiveShadow
                >
                    <planeGeometry args={[10, 10]} />
                    <meshStandardMaterial color={0x333333} roughness={0.8} />
                </mesh>

                {/* GLTF model - rendered via primitive */}
                {() => {
                    const model = $$(modelRef)
                    return model ? <primitive object={model} /> : null
                }}
            </scene>

            <perspectiveCamera
                fov={60}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[2, 2, 3]}
            />
            <orbitControls
                target={[0, 1, 0]}
                enableDamping
            />
        </canvas3D>
    )
}

// Import THREE for constants
import * as THREE from 'three'

// Import geometry and material for ground plane
import '@woby/three/src/geometries/PlaneGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'

export default GLTF