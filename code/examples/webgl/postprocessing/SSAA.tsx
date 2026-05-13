/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, EffectComposer, RenderPass, SSAARenderPass, OutputPass } from 'three'
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
 * Port of webgl_postprocessing_ssaa from Three.js examples.
 * Supersample Anti-Aliasing for high-quality edge smoothing.
 *
 * Source: https://threejs.org/examples/webgl_postprocessing_ssaa.html
 *
 * SSAARenderPass parameters:
 * - sampleLevel: Quality level (0-5, higher = more samples)
 *   - 0: 1 sample (no AA)
 *   - 1: 2 samples
 *   - 2: 4 samples
 *   - 3: 8 samples
 *   - 4: 16 samples
 *   - 5: 32 samples
 * - unbiased: Use random jittering for better results
 *
 * Key pattern: SSAARenderPass replaces RenderPass (not added after).
 * It renders the scene multiple times with slight offsets and averages
 * the results. Higher sample levels = better quality but slower.
 */

export const SSAA = () => {
    const composerRef = $<EffectComposer>()
    const ssaaPassRef = $<SSAARenderPass>()
    const rendererRef = $<THREE.WebGLRenderer>()
    const sceneRef = $<THREE.Scene>()
    const cameraRef = $<THREE.PerspectiveCamera>()
    const torusRef = $<THREE.Mesh>()

    // Reactive SSAA parameters
    const sampleLevel = $(2)  // 0-5
    const unbiased = $(true)

    useEffect(() => {
        const renderer = $$(rendererRef)
        const scene = $$(sceneRef)
        const camera = $$(cameraRef)
        if (!renderer || !scene || !camera) return

        // Setup post-processing with SSAA
        const composer = new EffectComposer(renderer)

        // SSAARenderPass replaces RenderPass
        const ssaaPass = new SSAARenderPass(scene, camera)
        ssaaPass.sampleLevel = $$(sampleLevel)
        ssaaPass.unbiased = $$(unbiased)
        composer.addPass(ssaaPass)
        ssaaPassRef(ssaaPass)

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

    // Update SSAA parameters reactively
    useEffect(() => {
        const pass = $$(ssaaPassRef)
        if (pass) {
            pass.sampleLevel = $$(sampleLevel)
            pass.unbiased = $$(unbiased)
        }
    })

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const torus = $$(torusRef)
        if (torus) {
            torus.rotation.x = time * 0.2
            torus.rotation.y = time * 0.3
        }

        const composer = $$(composerRef)
        if (composer) {
            composer.render()
        }
    })

    // Create high-contrast objects to demonstrate anti-aliasing
    const objects: { pos: [number, number, number]; color: number; scale?: [number, number, number] }[] = [
        { pos: [0, 0, 0], color: 0xff6b6b },
        { pos: [2, 0, 0], color: 0x4ecdc4 },
        { pos: [-2, 0, 0], color: 0xffe66d },
        { pos: [0, 2, 0], color: 0x95e1d3 },
        { pos: [0, -2, 0], color: 0xf38181 },
    ]

    return (
        <canvas3D noRender>
            <webGLRenderer
                ref={rendererRef}
                antialias={false}  // SSAA handles anti-aliasing
                setPixelRatio={[window.devicePixelRatio]}
                setSize={[window.innerWidth, window.innerHeight]}
            />
            <scene ref={sceneRef} background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 10, 5]} intensity={1} />

                {/* Central torus with high-contrast edges */}
                <mesh ref={torusRef} position={[0, 0, 0]}>
                    <torusGeometry args={[1.5, 0.5, 32, 64]} />
                    <meshStandardMaterial
                        color={0xffffff}
                        roughness={0.3}
                        metalness={0.7}
                    />
                </mesh>

                {/* Surrounding spheres with contrasting colors */}
                {objects.map((obj, i) => (
                    <mesh key={i} position={obj.pos} scale={obj.scale || [0.5, 0.5, 0.5]}>
                        <sphereGeometry args={[1, 32, 32]} />
                        <meshStandardMaterial
                            color={obj.color}
                            roughness={0.4}
                            metalness={0.6}
                        />
                    </mesh>
                ))}

                {/* Grid floor for edge testing */}
                <mesh position={[0, -3, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <boxGeometry args={[20, 20, 0.1]} />
                    <meshStandardMaterial color={0x333344} wireframe />
                </mesh>
            </scene>

            <perspectiveCamera
                ref={cameraRef}
                fov={50}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[0, 2, 8]}
            />
            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default SSAA
