/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, EffectComposer, RenderPixelatedPass, OutputPass } from 'three'
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
 * Port of webgl_postprocessing_pixel from Three.js examples.
 * Pixelation effect using RenderPixelatedPass.
 *
 * Source: https://threejs.org/examples/webgl_postprocessing_pixel.html
 *
 * RenderPixelatedPass parameters:
 * - pixelSize: Size of each pixel block (1-16, default: 4)
 * - normalEdgeStrength: Edge highlighting from normal differences (0-2)
 * - depthEdgeStrength: Edge highlighting from depth differences (0-2)
 *
 * Key pattern: RenderPixelatedPass replaces RenderPass - it renders directly
 * to a pixelated buffer. Unlike other passes, it handles the scene rendering
 * itself with pixelation applied.
 */

export const Pixel = () => {
    const composerRef = $<EffectComposer>()
    const pixelPassRef = $<RenderPixelatedPass>()
    const rendererRef = $<THREE.WebGLRenderer>()
    const sceneRef = $<THREE.Scene>()
    const cameraRef = $<THREE.PerspectiveCamera>()
    const torusRef = $<THREE.Mesh>()

    // Reactive pixelation parameters
    const pixelSize = $(4)

    useEffect(() => {
        const renderer = $$(rendererRef)
        const scene = $$(sceneRef)
        const camera = $$(cameraRef)
        if (!renderer || !scene || !camera) return

        // Setup post-processing with RenderPixelatedPass
        const composer = new EffectComposer(renderer)

        // RenderPixelatedPass replaces RenderPass - renders scene with pixelation
        const pixelPass = new RenderPixelatedPass($$(pixelSize), scene, camera)
        pixelPass.normalEdgeStrength = 0.5
        pixelPass.depthEdgeStrength = 0.5
        composer.addPass(pixelPass)
        pixelPassRef(pixelPass)

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

    // Update pixel size reactively
    useEffect(() => {
        const pass = $$(pixelPassRef)
        if (pass) {
            pass.pixelSize = $$(pixelSize)
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

    return (
        <canvas3D noRender>
            <webGLRenderer
                ref={rendererRef}
                antialias
                setPixelRatio={[window.devicePixelRatio]}
                setSize={[window.innerWidth, window.innerHeight]}
            />
            <scene ref={sceneRef} background={new Color(0x151515)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 10, 5]} intensity={0.8} />
                <pointLight position={[-5, 5, -5]} intensity={0.5} color={0x0088ff} />

                {/* Central rotating torus - shows pixelation on curved surface */}
                <mesh ref={torusRef} position={[0, 0, 0]}>
                    <torusGeometry args={[1.5, 0.5, 16, 32]} />
                    <meshPhongMaterial color={0xff8844} shininess={80} />
                </mesh>

                {/* Surrounding boxes - distinct shapes for pixelation */}
                <mesh position={[3, 0, 0]}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshPhongMaterial color={0x44ff88} shininess={60} />
                </mesh>

                <mesh position={[-3, 0, 0]}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshPhongMaterial color={0x8844ff} shininess={60} />
                </mesh>

                {/* Spheres at different heights */}
                <mesh position={[0, 2, 0]}>
                    <sphereGeometry args={[0.6, 16, 16]} />
                    <meshPhongMaterial color={0xff4444} shininess={100} />
                </mesh>

                <mesh position={[0, -2, 0]}>
                    <sphereGeometry args={[0.6, 16, 16]} />
                    <meshPhongMaterial color={0x44ff44} shininess={100} />
                </mesh>

                {/* Floor plane */}
                <mesh position={[0, -3, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <boxGeometry args={[12, 12, 0.2]} />
                    <meshStandardMaterial color={0x222222} roughness={0.9} />
                </mesh>
            </scene>

            <perspectiveCamera
                ref={cameraRef}
                fov={50}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[0, 2, 6]}
            />
            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default Pixel