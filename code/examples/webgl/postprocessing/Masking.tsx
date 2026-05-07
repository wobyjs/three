/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, EffectComposer, RenderPass, MaskPass, ClearMaskPass, UnrealBloomPass, OutputPass, Vector2, Layers } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/TorusGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/materials/MeshBasicMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/lights/PointLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_postprocessing_masking from Three.js examples.
 * Demonstrates selective effect application using layer masking.
 *
 * Source: https://threejs.org/examples/webgl_postprocessing.html (masking variant)
 *
 * Layer masking pattern:
 * - Layer 0: Default layer (all objects start here)
 * - Layer 1: Objects that receive bloom effect
 *
 * MaskPass workflow:
 * 1. RenderPass - renders all layers to the buffer
 * 2. MaskPass - enables stencil mask for layer 1
 * 3. UnrealBloomPass - applies bloom (only affects masked pixels)
 * 4. ClearMaskPass - clears the stencil mask
 * 5. OutputPass - final output
 *
 * Key pattern: Use object.layers.set(1) to assign objects to the bloom layer.
 * The MaskPass reads from scene.layers to determine which objects to mask.
 */

export const Masking = () => {
    const composerRef = $<EffectComposer>()
    const rendererRef = $<THREE.WebGLRenderer>()
    const sceneRef = $<THREE.Scene>()
    const cameraRef = $<THREE.PerspectiveCamera>()
    const torusRef = $<THREE.Mesh>()

    // Bloom parameters for the masked layer
    const bloomStrength = $(1.5)
    const bloomRadius = $(0.4)
    const bloomThreshold = $(0.6)

    useEffect(() => {
        const renderer = $$(rendererRef)
        const scene = $$(sceneRef)
        const camera = $$(cameraRef)
        if (!renderer || !scene || !camera) return

        // Setup post-processing with layer masking
        const composer = new EffectComposer(renderer)

        // 1. RenderPass - renders all layers
        const renderPass = new RenderPass(scene, camera)
        composer.addPass(renderPass)

        // 2. MaskPass - enables mask for layer 1 (bloom layer)
        const maskPass = new MaskPass(scene, camera)
        // Create a scene with only layer 1 objects for masking
        maskPass.clear = true
        composer.addPass(maskPass)

        // 3. UnrealBloomPass - applies bloom to masked pixels only
        const bloomPass = new UnrealBloomPass(
            new Vector2(window.innerWidth, window.innerHeight),
            $$(bloomStrength),
            $$(bloomRadius),
            $$(bloomThreshold)
        )
        composer.addPass(bloomPass)

        // 4. ClearMaskPass - clears the stencil mask
        const clearMaskPass = new ClearMaskPass()
        composer.addPass(clearMaskPass)

        // 5. OutputPass - final output
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
        const composer = $$(composerRef)
        if (composer) {
            // Find bloom pass in the pass chain
            const passes = composer.passes
            for (const pass of passes) {
                if (pass instanceof UnrealBloomPass) {
                    pass.strength = $$(bloomStrength)
                    pass.radius = $$(bloomRadius)
                    pass.threshold = $$(bloomThreshold)
                }
            }
        }
    })

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const torus = $$(torusRef)
        if (torus) {
            torus.rotation.x = time * 0.5
            torus.rotation.y = time * 0.3
        }

        const composer = $$(composerRef)
        if (composer) {
            composer.render()
        }
    })

    // Bloom layer objects (layer 1) - will receive bloom effect
    const bloomObjects: { pos: [number, number, number]; color: number; type: string; scale?: [number, number, number] }[] = [
        { pos: [0, 1, 0], color: 0xff4444, type: 'torus', scale: [1.5, 1.5, 1.5] },
        { pos: [-2, 0.5, 0], color: 0x00ffff, type: 'sphere', scale: [0.6, 0.6, 0.6] },
        { pos: [2, 0.5, 0], color: 0xffff00, type: 'sphere', scale: [0.6, 0.6, 0.6] },
        { pos: [0, 0.5, -2], color: 0xff00ff, type: 'sphere', scale: [0.6, 0.6, 0.6] },
        { pos: [0, 0.5, 2], color: 0x00ff00, type: 'sphere', scale: [0.6, 0.6, 0.6] },
    ]

    // Default layer objects (layer 0) - no bloom effect
    const defaultObjects: { pos: [number, number, number]; color: number; type: string; scale?: [number, number, number] }[] = [
        { pos: [-3, 0.5, -3], color: 0x888888, type: 'box' },
        { pos: [3, 0.5, -3], color: 0x888888, type: 'box' },
        { pos: [-3, 0.5, 3], color: 0x888888, type: 'box' },
        { pos: [3, 0.5, 3], color: 0x888888, type: 'box' },
        { pos: [-4, 0.3, 0], color: 0x666666, type: 'box', scale: [0.5, 0.6, 0.5] },
        { pos: [4, 0.3, 0], color: 0x666666, type: 'box', scale: [0.5, 0.6, 0.5] },
    ]

    return (
        <canvas3D noRender>
            <webGLRenderer
                ref={rendererRef}
                antialias
                setPixelRatio={[window.devicePixelRatio]}
                setSize={[window.innerWidth, window.innerHeight]}
            />
            <scene ref={sceneRef} background={new Color(0x111122)}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 10, 5]} intensity={0.6} />
                <pointLight position={[-5, 5, -5]} intensity={0.3} color={0x4488ff} />

                {/* Floor plane - layer 0 (no bloom) */}
                <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <boxGeometry args={[15, 15, 0.1]} />
                    <meshStandardMaterial color={0x222233} roughness={0.9} />
                </mesh>

                {/* Bloom layer objects (layer 1) - emissive materials */}
                {bloomObjects.map((obj, i) => (
                    <mesh
                        key={`bloom-${i}`}
                        ref={obj.type === 'torus' ? torusRef : undefined}
                        position={obj.pos}
                        scale={obj.scale || [1, 1, 1]}
                        layers-set={[1]}
                    >
                        {obj.type === 'sphere' && <sphereGeometry args={[1, 32, 32]} />}
                        {obj.type === 'torus' && <torusGeometry args={[1, 0.4, 32, 64]} />}
                        {obj.type === 'box' && <boxGeometry args={[1, 1, 1]} />}
                        <meshBasicMaterial color={obj.color} />
                    </mesh>
                ))}

                {/* Default layer objects (layer 0) - standard materials */}
                {defaultObjects.map((obj, i) => (
                    <mesh
                        key={`default-${i}`}
                        position={obj.pos}
                        scale={obj.scale || [1, 1, 1]}
                    >
                        {obj.type === 'box' && <boxGeometry args={[1, 1, 1]} />}
                        {obj.type === 'sphere' && <sphereGeometry args={[1, 32, 32]} />}
                        <meshStandardMaterial color={obj.color} roughness={0.5} metalness={0.3} />
                    </mesh>
                ))}
            </scene>

            <perspectiveCamera
                ref={cameraRef}
                fov={50}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[5, 4, 8]}
            />
            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default Masking