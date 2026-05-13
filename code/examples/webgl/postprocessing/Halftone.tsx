/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, EffectComposer, RenderPass, HalftonePass, OutputPass, Vector2 } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/TorusGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/materials/MeshPhongMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/lights/PointLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_postprocessing_rgb_halftone from Three.js examples.
 * Halftone effect for print-style CMYK dot pattern.
 *
 * Source: https://threejs.org/examples/webgl_postprocessing_rgb_halftone.html
 *
 * HalftonePass parameters:
 * - shape: Dot shape (1=circle, 2=diamond, 3=square)
 * - radius: Dot radius in pixels (default: 4)
 * - rotateR/G/B: Rotation angles for each color channel
 * - scatter: Scatter amount (0-1)
 * - blending: Blend with original (0-1)
 * - greyscale: Convert to greyscale first
 *
 * Key pattern: HalftonePass simulates CMYK printing by creating
 * dot patterns for each color channel with configurable rotation.
 */

export const Halftone = () => {
    const composerRef = $<EffectComposer>()
    const halftonePassRef = $<HalftonePass>()
    const rendererRef = $<THREE.WebGLRenderer>()
    const sceneRef = $<THREE.Scene>()
    const cameraRef = $<THREE.PerspectiveCamera>()
    const torusRef = $<THREE.Mesh>()

    // Reactive halftone parameters
    const radius = $(4)
    const scatter = $(0)
    const blending = $(1)
    const greyscale = $(false)

    useEffect(() => {
        const renderer = $$(rendererRef)
        const scene = $$(sceneRef)
        const camera = $$(cameraRef)
        if (!renderer || !scene || !camera) return

        // Setup post-processing with HalftonePass
        const composer = new EffectComposer(renderer)
        const renderPass = new RenderPass(scene, camera)
        composer.addPass(renderPass)

        // HalftonePass - requires width, height, and params
        const params = {
            shape: 1,  // 1=circle
            radius: $$(radius),
            rotateR: Math.PI / 12,
            rotateG: Math.PI / 12 * 2,
            rotateB: Math.PI / 12 * 3,
            scatter: $$(scatter),
            blending: $$(blending),
            greyscale: $$(greyscale)
        }
        const halftonePass = new HalftonePass(window.innerWidth, window.innerHeight, params)
        composer.addPass(halftonePass)
        halftonePassRef(halftonePass)

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

    // Update halftone parameters reactively
    useEffect(() => {
        const pass = $$(halftonePassRef)
        if (pass) {
            pass.uniforms.radius.value = $$(radius)
            pass.uniforms.scatter.value = $$(scatter)
            pass.uniforms.blending.value = $$(blending)
            pass.uniforms.greyscale.value = $$(greyscale) ? 1 : 0
        }
    })

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const torus = $$(torusRef)
        if (torus) {
            torus.rotation.x = time * 0.3
            torus.rotation.y = time * 0.5
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
            <scene ref={sceneRef} background={new Color(0xffffff)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 10, 5]} intensity={0.8} />
                <pointLight position={[-5, 5, -5]} intensity={0.5} color={0x0088ff} />

                {/* Central torus - shows halftone on curved surface */}
                <mesh ref={torusRef} position={[0, 0, 0]}>
                    <torusGeometry args={[1.5, 0.5, 32, 64]} />
                    <meshPhongMaterial color={0xff4466} shininess={80} />
                </mesh>

                {/* Colorful spheres for CMYK demonstration */}
                <mesh position={[3, 0, 0]}>
                    <sphereGeometry args={[0.6, 32, 32]} />
                    <meshPhongMaterial color={0xff0066} shininess={60} />
                </mesh>

                <mesh position={[-3, 0, 0]}>
                    <sphereGeometry args={[0.6, 32, 32]} />
                    <meshPhongMaterial color={0x00ff66} shininess={60} />
                </mesh>

                <mesh position={[0, 3, 0]}>
                    <sphereGeometry args={[0.6, 32, 32]} />
                    <meshPhongMaterial color={0x0066ff} shininess={60} />
                </mesh>

                <mesh position={[0, -3, 0]}>
                    <sphereGeometry args={[0.6, 32, 32]} />
                    <meshPhongMaterial color={0xffff00} shininess={60} />
                </mesh>

                {/* Boxes for variety */}
                <mesh position={[2, 1.5, -2]}>
                    <boxGeometry args={[0.8, 0.8, 0.8]} />
                    <meshPhongMaterial color={0xff6600} shininess={100} />
                </mesh>

                <mesh position={[-2, -1.5, -2]}>
                    <boxGeometry args={[0.8, 0.8, 0.8]} />
                    <meshPhongMaterial color={0x6600ff} shininess={100} />
                </mesh>

                {/* Floor plane */}
                <mesh position={[0, -4, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <boxGeometry args={[15, 15, 0.1]} />
                    <meshStandardMaterial color={0xdddddd} roughness={0.9} />
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

export default Halftone
