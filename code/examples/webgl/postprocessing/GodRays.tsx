/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, EffectComposer, RenderPass, SAOPass, OutputPass, Vector2 } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/CylinderGeometry'
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
 * Port of webgl_postprocessing_sao from Three.js examples.
 * Scalable Ambient Occlusion for efficient contact shadows.
 *
 * Source: https://threejs.org/examples/webgl_postprocessing_sao.html
 *
 * Note: Three.js jsm does not have a dedicated GodRaysPass.
 * This example demonstrates SAO (Scalable Ambient Occlusion) as an alternative
 * advanced postprocessing effect. SAO provides efficient ambient occlusion
 * with better performance than SSAO for complex scenes.
 *
 * SAOPass parameters:
 * - saoIntensity: Strength of the occlusion effect (default: 0.02)
 * - saoScale: Scale of the occlusion (default: 1)
 * - saoKernelRadius: Radius of the occlusion kernel (default: 100)
 * - saoMinResolution: Minimum resolution for occlusion (default: 0)
 * - saoBlur: Whether to blur the occlusion (default: true)
 *
 * Key pattern: SAOPass requires scene, camera, and optional resolution.
 * It's more efficient than SSAO for large scenes.
 */

export const GodRays = () => {
    const composerRef = $<EffectComposer>()
    const saoPassRef = $<SAOPass>()
    const rendererRef = $<THREE.WebGLRenderer>()
    const sceneRef = $<THREE.Scene>()
    const cameraRef = $<THREE.PerspectiveCamera>()
    const lightRef = $<THREE.Mesh>()

    // Reactive SAO parameters
    const saoIntensity = $(0.02)
    const saoScale = $(1)
    const saoKernelRadius = $(100)
    const saoBlur = $(true)

    useEffect(() => {
        const renderer = $$(rendererRef)
        const scene = $$(sceneRef)
        const camera = $$(cameraRef)
        if (!renderer || !scene || !camera) return

        // Setup post-processing with SAO
        const composer = new EffectComposer(renderer)
        const renderPass = new RenderPass(scene, camera)
        composer.addPass(renderPass)

        // SAOPass - requires scene, camera, resolution
        const saoPass = new SAOPass(scene, camera, new Vector2(window.innerWidth, window.innerHeight))
        saoPass.params.saoIntensity = $$(saoIntensity)
        saoPass.params.saoScale = $$(saoScale)
        saoPass.params.saoKernelRadius = $$(saoKernelRadius)
        saoPass.params.saoBlur = $$(saoBlur)
        composer.addPass(saoPass)
        saoPassRef(saoPass)

        const outputPass = new OutputPass()
        composer.addPass(outputPass)

        composerRef(composer)

        // Handle resize
        const onResize = () => {
            composer.setSize(window.innerWidth, window.innerHeight)
            saoPass.setSize(window.innerWidth, window.innerHeight)
        }
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    })

    // Update SAO parameters reactively
    useEffect(() => {
        const pass = $$(saoPassRef)
        if (pass) {
            pass.params.saoIntensity = $$(saoIntensity)
            pass.params.saoScale = $$(saoScale)
            pass.params.saoKernelRadius = $$(saoKernelRadius)
            pass.params.saoBlur = $$(saoBlur)
        }
    })

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const light = $$(lightRef)
        if (light) {
            light.position.y = 3 + Math.sin(time) * 0.5
        }

        const composer = $$(composerRef)
        if (composer) {
            composer.render()
        }
    })

    // Occluding objects - columns and structures
    const columns: { pos: [number, number, number]; height: number }[] = [
        { pos: [-4, 0, -4], height: 4 },
        { pos: [4, 0, -4], height: 4 },
        { pos: [-4, 0, 4], height: 4 },
        { pos: [4, 0, 4], height: 4 },
        { pos: [-2, 0, -6], height: 3 },
        { pos: [2, 0, -6], height: 3 },
        { pos: [0, 0, -8], height: 5 },
    ]

    return (
        <canvas3D noRender>
            <webGLRenderer
                ref={rendererRef}
                antialias
                setPixelRatio={[window.devicePixelRatio]}
                setSize={[window.innerWidth, window.innerHeight]}
            />
            <scene ref={sceneRef} background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.2} />
                <directionalLight position={[5, 10, 5]} intensity={0.5} />

                {/* Bright light source - emissive sphere */}
                <mesh ref={lightRef} position={[0, 3, 0]}>
                    <sphereGeometry args={[0.5, 32, 32]} />
                    <meshBasicMaterial color={0xffff88} />
                </mesh>

                {/* Point light at the same position */}
                <pointLight position={[0, 3, 0]} intensity={2} color={0xffff88} />

                {/* Occluding columns */}
                {columns.map((col, i) => (
                    <mesh key={`col-${i}`} position={col.pos}>
                        <cylinderGeometry args={[0.3, 0.3, col.height, 16]} />
                        <meshStandardMaterial color={0x444466} roughness={0.8} />
                    </mesh>
                ))}

                {/* Floor plane */}
                <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <boxGeometry args={[20, 20, 0.1]} />
                    <meshStandardMaterial color={0x2d3436} roughness={0.9} />
                </mesh>

                {/* Additional occluding structures */}
                <mesh position={[-6, 1.5, 0]}>
                    <boxGeometry args={[1, 3, 1]} />
                    <meshStandardMaterial color={0x555577} roughness={0.7} />
                </mesh>

                <mesh position={[6, 1.5, 0]}>
                    <boxGeometry args={[1, 3, 1]} />
                    <meshStandardMaterial color={0x555577} roughness={0.7} />
                </mesh>

                {/* Torus for variety */}
                <mesh position={[0, 1, -2]}>
                    <torusGeometry args={[0.8, 0.3, 16, 32]} />
                    <meshStandardMaterial color={0x8866aa} roughness={0.6} />
                </mesh>
            </scene>

            <perspectiveCamera
                ref={cameraRef}
                fov={50}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[8, 6, 12]}
            />
            <orbitControls enableDamping target={[0, 1, 0]} />
        </canvas3D>
    )
}

export default GodRays