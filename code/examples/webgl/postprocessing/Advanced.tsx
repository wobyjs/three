/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, EffectComposer, RenderPass, SSAOPass, UnrealBloomPass, SMAAPass, OutputPass, Vector2 } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/CylinderGeometry'
import '@woby/three/src/geometries/TorusGeometry'
import '@woby/three/src/geometries/TorusKnotGeometry'
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
 * Port of webgl_postprocessing_advanced from Three.js examples.
 * Demonstrates multiple postprocessing effects chained together.
 *
 * Source: https://threejs.org/examples/webgl_postprocessing.html
 *
 * Pass order matters:
 * 1. RenderPass - renders the scene to a texture
 * 2. SSAOPass - adds ambient occlusion for depth
 * 3. UnrealBloomPass - adds bloom to bright areas
 * 4. SMAAPass - anti-aliasing (should be last before OutputPass)
 * 5. OutputPass - final color correction and output
 *
 * Key pattern: Each pass can be enabled/disabled via the .enabled property.
 * This allows for runtime toggling of effects.
 */

export const Advanced = () => {
    const composerRef = $<EffectComposer>()
    const ssaoPassRef = $<SSAOPass>()
    const bloomPassRef = $<UnrealBloomPass>()
    const smaaPassRef = $<SMAAPass>()
    const rendererRef = $<THREE.WebGLRenderer>()
    const sceneRef = $<THREE.Scene>()
    const cameraRef = $<THREE.PerspectiveCamera>()
    const knotRef = $<THREE.Mesh>()

    // Effect enable/disable toggles
    const ssaoEnabled = $(true)
    const bloomEnabled = $(true)
    const smaaEnabled = $(true)

    // SSAO parameters
    const ssaoKernelRadius = $(8)
    const ssaoMinDistance = $(0.005)
    const ssaoMaxDistance = $(0.05)

    // Bloom parameters
    const bloomStrength = $(1.5)
    const bloomRadius = $(0.4)
    const bloomThreshold = $(0.85)

    useEffect(() => {
        const renderer = $$(rendererRef)
        const scene = $$(sceneRef)
        const camera = $$(cameraRef)
        if (!renderer || !scene || !camera) return

        // Setup post-processing chain
        const composer = new EffectComposer(renderer)

        // 1. RenderPass - renders the scene
        const renderPass = new RenderPass(scene, camera)
        composer.addPass(renderPass)

        // 2. SSAOPass - ambient occlusion for depth
        const ssaoPass = new SSAOPass(scene, camera, window.innerWidth, window.innerHeight)
        ssaoPass.kernelRadius = $$(ssaoKernelRadius)
        ssaoPass.minDistance = $$(ssaoMinDistance)
        ssaoPass.maxDistance = $$(ssaoMaxDistance)
        ssaoPass.enabled = $$(ssaoEnabled)
        composer.addPass(ssaoPass)
        ssaoPassRef(ssaoPass)

        // 3. UnrealBloomPass - bloom on bright areas
        const bloomPass = new UnrealBloomPass(
            new Vector2(window.innerWidth, window.innerHeight),
            $$(bloomStrength),
            $$(bloomRadius),
            $$(bloomThreshold)
        )
        bloomPass.enabled = $$(bloomEnabled)
        composer.addPass(bloomPass)
        bloomPassRef(bloomPass)

        // 4. SMAAPass - anti-aliasing (should be near the end)
        const smaaPass = new SMAAPass(window.innerWidth, window.innerHeight)
        smaaPass.enabled = $$(smaaEnabled)
        composer.addPass(smaaPass)
        smaaPassRef(smaaPass)

        // 5. OutputPass - final color correction
        const outputPass = new OutputPass()
        composer.addPass(outputPass)

        composerRef(composer)

        // Handle resize
        const onResize = () => {
            composer.setSize(window.innerWidth, window.innerHeight)
            ssaoPass.setSize(window.innerWidth, window.innerHeight)
            bloomPass.setSize(window.innerWidth, window.innerHeight)
            smaaPass.setSize(window.innerWidth, window.innerHeight)
        }
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    })

    // Update effect parameters reactively
    useEffect(() => {
        const ssaoPass = $$(ssaoPassRef)
        if (ssaoPass) {
            ssaoPass.enabled = $$(ssaoEnabled)
            ssaoPass.kernelRadius = $$(ssaoKernelRadius)
            ssaoPass.minDistance = $$(ssaoMinDistance)
            ssaoPass.maxDistance = $$(ssaoMaxDistance)
        }
    })

    useEffect(() => {
        const bloomPass = $$(bloomPassRef)
        if (bloomPass) {
            bloomPass.enabled = $$(bloomEnabled)
            bloomPass.strength = $$(bloomStrength)
            bloomPass.radius = $$(bloomRadius)
            bloomPass.threshold = $$(bloomThreshold)
        }
    })

    useEffect(() => {
        const smaaPass = $$(smaaPassRef)
        if (smaaPass) {
            smaaPass.enabled = $$(smaaEnabled)
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

    // Rich scene objects with varied materials
    const objects: { pos: [number, number, number]; color: number; emissive?: number; type: string; scale?: [number, number, number] }[] = [
        // Central emissive objects (will bloom)
        { pos: [0, 1, 0], color: 0xff4444, emissive: 0xff4444, type: 'torusKnot' },
        // Surrounding objects
        { pos: [-3, 0.5, 0], color: 0x44ff88, type: 'box' },
        { pos: [3, 0.5, 0], color: 0x4488ff, type: 'box' },
        { pos: [0, 0.5, -3], color: 0xff8844, type: 'sphere' },
        { pos: [0, 0.5, 3], color: 0x8844ff, type: 'sphere' },
        // Emissive spheres for bloom
        { pos: [-2, 2, -2], color: 0x00ffff, emissive: 0x00ffff, type: 'sphere', scale: [0.5, 0.5, 0.5] },
        { pos: [2, 2, -2], color: 0xffff00, emissive: 0xffff00, type: 'sphere', scale: [0.5, 0.5, 0.5] },
        { pos: [-2, 2, 2], color: 0xff00ff, emissive: 0xff00ff, type: 'sphere', scale: [0.5, 0.5, 0.5] },
        { pos: [2, 2, 2], color: 0x00ff00, emissive: 0x00ff00, type: 'sphere', scale: [0.5, 0.5, 0.5] },
        // Cylinders for variety
        { pos: [-4, 1, -4], color: 0x666688, type: 'cylinder' },
        { pos: [4, 1, -4], color: 0x886666, type: 'cylinder' },
        { pos: [-4, 1, 4], color: 0x668866, type: 'cylinder' },
        { pos: [4, 1, 4], color: 0x888866, type: 'cylinder' },
    ]

    return (
        <canvas3D noRender>
            <webGLRenderer
                ref={rendererRef}
                antialias
                setPixelRatio={[window.devicePixelRatio]}
                setSize={[window.innerWidth, window.innerHeight]}
            />
            <scene ref={sceneRef} background={new Color(0x0a0a0f)}>
                <ambientLight intensity={0.2} />
                <directionalLight position={[5, 10, 5]} intensity={0.6} />
                <pointLight position={[-5, 5, -5]} intensity={0.4} color={0x0088ff} />
                <pointLight position={[5, 5, -5]} intensity={0.4} color={0xff8800} />

                {/* Floor plane - shows SSAO contact shadows */}
                <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <boxGeometry args={[20, 20, 0.1]} />
                    <meshStandardMaterial color={0x222233} roughness={0.9} />
                </mesh>

                {/* Scene objects */}
                {objects.map((obj, i) => (
                    <mesh
                        key={i}
                        position={obj.pos}
                        ref={obj.type === 'torusKnot' ? knotRef : undefined}
                        scale={obj.scale || [1, 1, 1]}
                    >
                        {obj.type === 'box' && <boxGeometry args={[1, 1, 1]} />}
                        {obj.type === 'sphere' && <sphereGeometry args={[0.5, 32, 32]} />}
                        {obj.type === 'cylinder' && <cylinderGeometry args={[0.4, 0.4, 2, 32]} />}
                        {obj.type === 'torusKnot' && <torusKnotGeometry args={[0.8, 0.25, 128, 32]} />}
                        {obj.type === 'torus' && <torusGeometry args={[0.5, 0.2, 16, 32]} />}
                        <meshStandardMaterial
                            color={obj.color}
                            emissive={obj.emissive || 0x000000}
                            emissiveIntensity={obj.emissive ? 0.8 : 0}
                            roughness={obj.emissive ? 0.2 : 0.5}
                            metalness={obj.emissive ? 0.8 : 0.3}
                        />
                    </mesh>
                ))}
            </scene>

            <perspectiveCamera
                ref={cameraRef}
                fov={50}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[6, 5, 8]}
            />
            <orbitControls enableDamping target={[0, 1, 0]} />
        </canvas3D>
    )
}

export default Advanced