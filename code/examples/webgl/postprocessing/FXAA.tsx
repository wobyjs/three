/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, EffectComposer, RenderPass, ShaderPass, OutputPass } from 'three'
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader.js'
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
 * Port of webgl_postprocessing_fxaa from Three.js examples.
 * Fast Approximate Anti-Aliasing (FXAA) for quick edge smoothing.
 *
 * Source: https://threejs.org/examples/webgl_postprocessing_fxaa.html
 *
 * FXAA is a fast, single-pass anti-aliasing technique that:
 * - Detects edges based on luminance contrast
 * - Blends pixels along edges for smoothing
 * - Lower quality than SMAA but significantly faster
 *
 * Key pattern: FXAA uses ShaderPass with the FXAAShader.
 * The resolution uniform must be set for correct calculation.
 */

export const FXAA = () => {
    const composerRef = $<EffectComposer>()
    const fxaaPassRef = $<ShaderPass>()
    const rendererRef = $<THREE.WebGLRenderer>()
    const sceneRef = $<THREE.Scene>()
    const cameraRef = $<THREE.PerspectiveCamera>()
    const knotRef = $<THREE.Mesh>()

    useEffect(() => {
        const renderer = $$(rendererRef)
        const scene = $$(sceneRef)
        const camera = $$(cameraRef)
        if (!renderer || !scene || !camera) return

        // Setup post-processing with FXAA
        const composer = new EffectComposer(renderer)
        const renderPass = new RenderPass(scene, camera)
        composer.addPass(renderPass)

        // FXAA via ShaderPass with FXAAShader
        const fxaaPass = new ShaderPass(FXAAShader)
        // Set resolution uniform for FXAA calculation
        fxaaPass.uniforms['resolution'].value.x = 1 / (window.innerWidth * window.devicePixelRatio)
        fxaaPass.uniforms['resolution'].value.y = 1 / (window.innerHeight * window.devicePixelRatio)
        composer.addPass(fxaaPass)
        fxaaPassRef(fxaaPass)

        const outputPass = new OutputPass()
        composer.addPass(outputPass)

        composerRef(composer)

        // Handle resize - update FXAA resolution uniform
        const onResize = () => {
            composer.setSize(window.innerWidth, window.innerHeight)
            const pass = $$(fxaaPassRef)
            if (pass) {
                pass.uniforms['resolution'].value.x = 1 / (window.innerWidth * window.devicePixelRatio)
                pass.uniforms['resolution'].value.y = 1 / (window.innerHeight * window.devicePixelRatio)
            }
        }
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
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
                antialias={false}  // Disable native AA to see FXAA effect
                setPixelRatio={[window.devicePixelRatio]}
                setSize={[window.innerWidth, window.innerHeight]}
            />
            <scene ref={sceneRef} background={new Color(0x0f0f1a)}>
                <ambientLight intensity={0.3} />
                <pointLight position={[5, 5, 5]} intensity={1} color={0xff6699} />
                <pointLight position={[-5, -5, 5]} intensity={0.8} color={0x66ccff} />

                {/* Central torus knot with high-contrast edges */}
                <mesh ref={knotRef} position={[0, 0, 0]}>
                    <torusKnotGeometry args={[1.2, 0.4, 128, 32]} />
                    <meshStandardMaterial
                        color={0xffffff}
                        roughness={0.2}
                        metalness={0.9}
                    />
                </mesh>

                {/* Surrounding objects for edge contrast */}
                <mesh position={[3, 0, 0]}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color={0xff3366} roughness={0.3} metalness={0.7} />
                </mesh>

                <mesh position={[-3, 0, 0]}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color={0x33ff99} roughness={0.3} metalness={0.7} />
                </mesh>

                <mesh position={[0, 3, 0]}>
                    <sphereGeometry args={[0.6, 32, 32]} />
                    <meshStandardMaterial color={0xffcc33} roughness={0.3} metalness={0.7} />
                </mesh>

                <mesh position={[0, -3, 0]}>
                    <sphereGeometry args={[0.6, 32, 32]} />
                    <meshStandardMaterial color={0x33ccff} roughness={0.3} metalness={0.7} />
                </mesh>

                {/* Background grid for edge detection */}
                <mesh position={[0, 0, -8]}>
                    <boxGeometry args={[25, 25, 0.1]} />
                    <meshBasicMaterial color={0x222233} wireframe />
                </mesh>
            </scene>

            <perspectiveCamera
                ref={cameraRef}
                fov={60}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[0, 0, 8]}
            />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default FXAA
