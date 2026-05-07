/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, EffectComposer, RenderPass, GlitchPass, OutputPass } from 'three'
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
 * Port of webgl_postprocessing_glitch from Three.js examples.
 * Glitch/distortion effect using GlitchPass.
 *
 * Source: https://threejs.org/examples/webgl_postprocessing_glitch.html
 *
 * GlitchPass parameters:
 * - dt_size: Size of the displacement texture (default: 64)
 * - goWild: When true, continuous glitch effect; when false, random intervals
 *
 * Key pattern: GlitchPass creates random screen displacement and color separation.
 * The goWild property enables continuous glitch mode for dramatic effect.
 */

export const Glitch = () => {
    const composerRef = $<EffectComposer>()
    const glitchPassRef = $<GlitchPass>()
    const rendererRef = $<THREE.WebGLRenderer>()
    const sceneRef = $<THREE.Scene>()
    const cameraRef = $<THREE.PerspectiveCamera>()
    const knotRef = $<THREE.Mesh>()

    // Reactive glitch mode
    const goWild = $(false)

    useEffect(() => {
        const renderer = $$(rendererRef)
        const scene = $$(sceneRef)
        const camera = $$(cameraRef)
        if (!renderer || !scene || !camera) return

        // Setup post-processing with GlitchPass
        const composer = new EffectComposer(renderer)
        const renderPass = new RenderPass(scene, camera)
        composer.addPass(renderPass)

        // GlitchPass - optional dt_size parameter
        const glitchPass = new GlitchPass(64)
        glitchPass.goWild = $$(goWild)
        composer.addPass(glitchPass)
        glitchPassRef(glitchPass)

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

    // Update glitch mode reactively
    useEffect(() => {
        const pass = $$(glitchPassRef)
        if (pass) {
            pass.goWild = $$(goWild)
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
            <scene ref={sceneRef} background={new Color(0x0a0a0a)}>
                <ambientLight intensity={0.3} />
                <pointLight position={[5, 5, 5]} intensity={1} color={0xff0066} />
                <pointLight position={[-5, -5, 5]} intensity={0.8} color={0x00ffff} />

                {/* Central torus knot - interesting geometry for glitch effect */}
                <mesh ref={knotRef} position={[0, 0, 0]}>
                    <torusKnotGeometry args={[1, 0.3, 128, 32]} />
                    <meshStandardMaterial
                        color={0x8844ff}
                        emissive={0x220044}
                        emissiveIntensity={0.5}
                        roughness={0.3}
                        metalness={0.8}
                    />
                </mesh>

                {/* Orbiting spheres with contrasting colors */}
                <mesh position={[3, 0, 0]}>
                    <sphereGeometry args={[0.5, 32, 32]} />
                    <meshBasicMaterial color={0xff0066} />
                </mesh>

                <mesh position={[-3, 0, 0]}>
                    <sphereGeometry args={[0.5, 32, 32]} />
                    <meshBasicMaterial color={0x00ffff} />
                </mesh>

                <mesh position={[0, 3, 0]}>
                    <boxGeometry args={[0.8, 0.8, 0.8]} />
                    <meshBasicMaterial color={0xffff00} />
                </mesh>

                <mesh position={[0, -3, 0]}>
                    <boxGeometry args={[0.8, 0.8, 0.8]} />
                    <meshBasicMaterial color={0x00ff00} />
                </mesh>

                {/* Background grid for glitch distortion visibility */}
                <mesh position={[0, 0, -5]} rotation={[0, 0, 0]}>
                    <boxGeometry args={[15, 15, 0.1]} />
                    <meshStandardMaterial color={0x111111} wireframe />
                </mesh>
            </scene>

            <perspectiveCamera
                ref={cameraRef}
                fov={60}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[0, 0, 6]}
            />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default Glitch