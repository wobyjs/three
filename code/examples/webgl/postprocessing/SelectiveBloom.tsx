/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, EffectComposer, RenderPass, UnrealBloomPass, OutputPass, Vector2 } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/TorusKnotGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/materials/MeshBasicMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/PointLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_postprocessing_unreal_bloom_selective from Three.js examples.
 * Selective bloom effect using layer masking.
 *
 * Source: https://threejs.org/examples/webgl_postprocessing_unreal_bloom_selective.html
 *
 * Selective bloom pattern:
 * - Use Layers to separate bloom and non-bloom objects
 * - Layer 0: Default layer (no bloom)
 * - Layer 1: Bloom layer (receives bloom effect)
 *
 * UnrealBloomPass parameters:
 * - strength: Bloom intensity (default: 1.5)
 * - radius: Bloom spread (default: 0.4)
 * - threshold: Brightness threshold for bloom (default: 0.85)
 *
 * Key pattern: Objects on layer 1 will bloom while objects on layer 0
 * will not. Use mesh.layers.enable(1) or mesh.layers.set(1) to add
 * objects to the bloom layer.
 */

export const SelectiveBloom = () => {
    const composerRef = $<EffectComposer>()
    const bloomPassRef = $<UnrealBloomPass>()
    const rendererRef = $<THREE.WebGLRenderer>()
    const sceneRef = $<THREE.Scene>()
    const cameraRef = $<THREE.PerspectiveCamera>()
    const knotRef = $<THREE.Mesh>()

    // Reactive bloom parameters
    const strength = $(1.5)
    const radius = $(0.4)
    const threshold = $(0.6)

    useEffect(() => {
        const renderer = $$(rendererRef)
        const scene = $$(sceneRef)
        const camera = $$(cameraRef)
        if (!renderer || !scene || !camera) return

        // Setup post-processing with selective bloom
        const composer = new EffectComposer(renderer)
        const renderPass = new RenderPass(scene, camera)
        composer.addPass(renderPass)

        // UnrealBloomPass for selective bloom
        const bloomPass = new UnrealBloomPass(
            new Vector2(window.innerWidth, window.innerHeight),
            $$(strength),
            $$(radius),
            $$(threshold)
        )
        composer.addPass(bloomPass)
        bloomPassRef(bloomPass)

        const outputPass = new OutputPass()
        composer.addPass(outputPass)

        composerRef(composer)

        // Handle resize
        const onResize = () => {
            composer.setSize(window.innerWidth, window.innerHeight)
            bloomPass.setSize(window.innerWidth, window.innerHeight)
        }
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    })

    // Update bloom parameters reactively
    useEffect(() => {
        const pass = $$(bloomPassRef)
        if (pass) {
            pass.strength = $$(strength)
            pass.radius = $$(radius)
            pass.threshold = $$(threshold)
        }
    })

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const knot = $$(knotRef)
        if (knot) {
            knot.rotation.x = time * 0.3
            knot.rotation.y = time * 0.5
        }

        const composer = $$(composerRef)
        if (composer) {
            composer.render()
        }
    })

    return (
        <canvas3D noRender>
            <webGLRenderer
                ref={rendererRef}
                antialias
                setPixelRatio={[window.devicePixelRatio]}
                setSize={[window.innerWidth, window.innerHeight]}
            />
            <scene ref={sceneRef} background={new Color(0x000000)}>
                <ambientLight intensity={0.1} />
                <pointLight position={[5, 5, 5]} intensity={0.5} />

                {/* Bloom layer objects (layer 1) - emissive materials */}
                <mesh ref={knotRef} position={[0, 0, 0]} layers-set={[1]}>
                    <torusKnotGeometry args={[1, 0.3, 128, 32]} />
                    <meshBasicMaterial color={0xff0088} />
                </mesh>

                <mesh position={[3, 0, 0]} layers-set={[1]}>
                    <sphereGeometry args={[0.5, 32, 32]} />
                    <meshBasicMaterial color={0x00ffff} />
                </mesh>

                <mesh position={[-3, 0, 0]} layers-set={[1]}>
                    <sphereGeometry args={[0.5, 32, 32]} />
                    <meshBasicMaterial color={0xffff00} />
                </mesh>

                <mesh position={[0, 3, 0]} layers-set={[1]}>
                    <boxGeometry args={[0.8, 0.8, 0.8]} />
                    <meshBasicMaterial color={0x00ff00} />
                </mesh>

                {/* Non-bloom layer objects (layer 0) - standard materials */}
                <mesh position={[0, -3, 0]}>
                    <boxGeometry args={[0.8, 0.8, 0.8]} />
                    <meshStandardMaterial color={0x888888} roughness={0.5} metalness={0.3} />
                </mesh>

                <mesh position={[4, 0, -3]}>
                    <sphereGeometry args={[0.4, 32, 32]} />
                    <meshStandardMaterial color={0x666666} roughness={0.5} metalness={0.3} />
                </mesh>

                <mesh position={[-4, 0, -3]}>
                    <sphereGeometry args={[0.4, 32, 32]} />
                    <meshStandardMaterial color={0x666666} roughness={0.5} metalness={0.3} />
                </mesh>

                {/* Floor plane - no bloom */}
                <mesh position={[0, -4, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <boxGeometry args={[15, 15, 0.1]} />
                    <meshStandardMaterial color={0x222233} roughness={0.9} />
                </mesh>
            </scene>

            <perspectiveCamera
                ref={cameraRef}
                fov={60}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[0, 2, 8]}
            />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default SelectiveBloom
