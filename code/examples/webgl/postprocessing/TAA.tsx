/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, EffectComposer, TAARenderPass, OutputPass } from 'three'
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
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_postprocessing_taa from Three.js examples.
 * Temporal Anti-Aliasing (TAA) for high-quality motion-based smoothing.
 *
 * Source: https://threejs.org/examples/webgl_postprocessing_taa.html
 *
 * TAA is an advanced anti-aliasing technique that:
 * - Uses temporal accumulation across frames
 * - Jitters the camera slightly each frame
 * - Requires camera movement to see full effect
 * - Higher quality than SMAA/FXAA but needs motion
 *
 * Key pattern: TAARenderPass replaces RenderPass (not added after).
 * The sampleLevel controls quality (higher = more samples).
 * accumulate=true enables continuous temporal accumulation.
 */

export const TAA = () => {
    const composerRef = $<EffectComposer>()
    const taaPassRef = $<TAARenderPass>()
    const rendererRef = $<THREE.WebGLRenderer>()
    const sceneRef = $<THREE.Scene>()
    const cameraRef = $<THREE.PerspectiveCamera>()
    const torusRef = $<THREE.Mesh>()

    // Reactive TAA parameters
    const sampleLevel = $(2)  // 0-5, higher = better quality but slower
    const accumulate = $(true)

    useEffect(() => {
        const renderer = $$(rendererRef)
        const scene = $$(sceneRef)
        const camera = $$(cameraRef)
        if (!renderer || !scene || !camera) return

        // Setup post-processing with TAA
        const composer = new EffectComposer(renderer)

        // TAARenderPass replaces RenderPass - it handles scene rendering with jitter
        const taaPass = new TAARenderPass(scene, camera)
        taaPass.sampleLevel = $$(sampleLevel)
        taaPass.accumulate = $$(accumulate)
        composer.addPass(taaPass)
        taaPassRef(taaPass)

        const outputPass = new OutputPass()
        composer.addPass(outputPass)

        composerRef(composer)

        // Handle resize
        const onResize = () => {
            composer.setSize(window.innerWidth, window.innerHeight)
        }
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    })

    // Update TAA parameters reactively
    useEffect(() => {
        const pass = $$(taaPassRef)
        if (pass) {
            pass.sampleLevel = $$(sampleLevel)
            pass.accumulate = $$(accumulate)
        }
    })

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const torus = $$(torusRef)
        if (torus) {
            torus.rotation.x = time * 0.15
            torus.rotation.y = time * 0.25
        }

        const composer = $$(composerRef)
        if (composer) {
            composer.render()
        }
    })

    // Create complex geometry with fine details for TAA demonstration
    const objects: { pos: [number, number, number]; rot?: [number, number, number]; color: number }[] = [
        { pos: [2.5, 0, 0], color: 0xff6b6b },
        { pos: [-2.5, 0, 0], color: 0x4ecdc4 },
        { pos: [0, 2.5, 0], color: 0xffe66d },
        { pos: [0, -2.5, 0], color: 0x95e1d3 },
        { pos: [0, 0, 2.5], color: 0xf38181 },
        { pos: [0, 0, -2.5], color: 0xaa96da },
    ]

    return (
        <canvas3D noRender>
            <webGLRenderer
                ref={rendererRef}
                antialias={false}  // TAA handles anti-aliasing
                setPixelRatio={[window.devicePixelRatio]}
                setSize={[window.innerWidth, window.innerHeight]}
            />
            <scene ref={sceneRef} background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 10, 7]} intensity={1} />
                <directionalLight position={[-5, -5, 5]} intensity={0.5} color={0x6699ff} />

                {/* Central torus with fine geometry for TAA */}
                <mesh ref={torusRef} position={[0, 0, 0]}>
                    <torusGeometry args={[1.8, 0.6, 48, 100]} />
                    <meshStandardMaterial
                        color={0xffffff}
                        roughness={0.2}
                        metalness={0.9}
                    />
                </mesh>

                {/* Surrounding spheres with contrasting colors */}
                {objects.map((obj, i) => (
                    <mesh key={i} position={obj.pos} rotation={obj.rot || [0, 0, 0]}>
                        <sphereGeometry args={[0.4, 32, 32]} />
                        <meshStandardMaterial
                            color={obj.color}
                            roughness={0.3}
                            metalness={0.7}
                        />
                    </mesh>
                ))}

                {/* Fine-detail grid for TAA testing */}
                <mesh position={[0, 0, -6]} rotation={[0, 0, 0]}>
                    <boxGeometry args={[30, 30, 0.1]} />
                    <meshStandardMaterial color={0x2a2a3e} wireframe />
                </mesh>

                {/* Floor plane */}
                <mesh position={[0, -4, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <boxGeometry args={[20, 20, 0.1]} />
                    <meshStandardMaterial color={0x333344} />
                </mesh>
            </scene>

            <perspectiveCamera
                ref={cameraRef}
                fov={50}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[0, 3, 10]}
            />
            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default TAA
