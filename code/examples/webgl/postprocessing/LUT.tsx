/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, EffectComposer, RenderPass, ShaderPass, OutputPass, DataTexture, RedFormat } from 'three'
import { LUTShader } from 'three/examples/jsm/shaders/LUTShader.js'
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
 * Port of webgl_postprocessing_lut from Three.js examples.
 * Color grading using 3D Look-Up Tables (LUT).
 *
 * Source: https://threejs.org/examples/webgl_postprocessing_lut.html
 *
 * LUTPass parameters (via ShaderPass with LUTShader):
 * - lut: The 3D texture containing color mapping
 * - intensity: Blend factor (0 = original, 1 = full LUT)
 *
 * Key pattern: LUTs allow complex color grading by mapping input colors
 * to output colors through a 3D texture. Common for film looks,
 * vintage effects, and color correction.
 */

export const LUT = () => {
    const composerRef = $<EffectComposer>()
    const lutPassRef = $<ShaderPass>()
    const rendererRef = $<THREE.WebGLRenderer>()
    const sceneRef = $<THREE.Scene>()
    const cameraRef = $<THREE.PerspectiveCamera>()
    const knotRef = $<THREE.Mesh>()

    // Reactive LUT parameters
    const intensity = $(1)

    useEffect(() => {
        const renderer = $$(rendererRef)
        const scene = $$(sceneRef)
        const camera = $$(cameraRef)
        if (!renderer || !scene || !camera) return

        // Setup post-processing with LUT
        const composer = new EffectComposer(renderer)
        const renderPass = new RenderPass(scene, camera)
        composer.addPass(renderPass)

        // Create a simple identity LUT (neutral color mapping)
        // In production, you'd load a .cube file or PNG LUT
        const size = 64
        const data = new Uint8Array(size * size * size)
        for (let r = 0; r < size; r++) {
            for (let g = 0; g < size; g++) {
                for (let b = 0; b < size; b++) {
                    const i = r + g * size + b * size * size
                    // Warm tint LUT - shift colors towards orange/yellow
                    const warmR = Math.min(255, r * 4 + 20)
                    const warmG = Math.min(255, g * 4 - 10)
                    const warmB = Math.max(0, b * 4 - 30)
                    data[i] = warmR
                }
            }
        }

        const lutTexture = new DataTexture(data, size, size * size, RedFormat)
        lutTexture.needsUpdate = true

        // LUTPass via ShaderPass with LUTShader
        const lutPass = new ShaderPass(LUTShader)
        lutPass.uniforms.lut.value = lutTexture
        lutPass.uniforms.intensity.value = $$(intensity)
        composer.addPass(lutPass)
        lutPassRef(lutPass)

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

    // Update LUT parameters reactively
    useEffect(() => {
        const pass = $$(lutPassRef)
        if (pass && pass.uniforms) {
            pass.uniforms.intensity.value = $$(intensity)
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
            <scene ref={sceneRef} background={new Color(0x111111)}>
                <ambientLight intensity={0.3} />
                <pointLight position={[5, 5, 5]} intensity={1} color={0xff6699} />
                <pointLight position={[-5, -5, 5]} intensity={0.8} color={0x66ccff} />

                {/* Central torus knot - shows color grading effect */}
                <mesh ref={knotRef} position={[0, 0, 0]}>
                    <torusKnotGeometry args={[1, 0.3, 128, 32]} />
                    <meshStandardMaterial
                        color={0xffffff}
                        roughness={0.2}
                        metalness={0.9}
                    />
                </mesh>

                {/* Colorful spheres for LUT demonstration */}
                <mesh position={[3, 0, 0]}>
                    <sphereGeometry args={[0.5, 32, 32]} />
                    <meshBasicMaterial color={0xff3366} />
                </mesh>

                <mesh position={[-3, 0, 0]}>
                    <sphereGeometry args={[0.5, 32, 32]} />
                    <meshBasicMaterial color={0x33ff99} />
                </mesh>

                <mesh position={[0, 3, 0]}>
                    <boxGeometry args={[0.8, 0.8, 0.8]} />
                    <meshBasicMaterial color={0xffcc33} />
                </mesh>

                <mesh position={[0, -3, 0]}>
                    <boxGeometry args={[0.8, 0.8, 0.8]} />
                    <meshBasicMaterial color={0x33ccff} />
                </mesh>

                {/* Floor plane */}
                <mesh position={[0, -4, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <boxGeometry args={[15, 15, 0.1]} />
                    <meshStandardMaterial color={0x222233} />
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

export default LUT
