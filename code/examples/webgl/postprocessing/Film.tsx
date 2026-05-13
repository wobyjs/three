/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, EffectComposer, RenderPass, FilmPass, OutputPass } from 'three'
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
import '@woby/three/src/lights/PointLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_postprocessing_film from Three.js examples.
 * Film grain and scanline effect for vintage movie look.
 *
 * Source: https://threejs.org/examples/webgl_postprocessing_film.html
 *
 * FilmPass parameters (via uniforms):
 * - time: Animation time for noise
 * - noiseIntensity: Strength of film grain (0-1)
 * - scanlineIntensity: Strength of scanlines (0-1)
 * - scanlineCount: Number of scanlines
 * - grayscale: Convert to grayscale
 *
 * Key pattern: FilmPass adds animated noise and scanlines
 * for a retro film/cinema effect. The noise is animated via
 * the time uniform which must be updated each frame.
 */

export const Film = () => {
    const composerRef = $<EffectComposer>()
    const filmPassRef = $<FilmPass>()
    const rendererRef = $<THREE.WebGLRenderer>()
    const sceneRef = $<THREE.Scene>()
    const cameraRef = $<THREE.PerspectiveCamera>()
    const torusRef = $<THREE.Mesh>()

    // Reactive film parameters
    const noiseIntensity = $(0.35)
    const scanlineIntensity = $(0.5)
    const grayscale = $(false)

    useEffect(() => {
        const renderer = $$(rendererRef)
        const scene = $$(sceneRef)
        const camera = $$(cameraRef)
        if (!renderer || !scene || !camera) return

        // Setup post-processing with FilmPass
        const composer = new EffectComposer(renderer)
        const renderPass = new RenderPass(scene, camera)
        composer.addPass(renderPass)

        // FilmPass - noise, scanlines, grayscale
        const filmPass = new FilmPass(
            $$(noiseIntensity),
            $$(scanlineIntensity),
            2048,  // scanline count
            $$(grayscale)
        )
        composer.addPass(filmPass)
        filmPassRef(filmPass)

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

    // Update film parameters reactively
    useEffect(() => {
        const pass = $$(filmPassRef)
        if (pass && pass.uniforms) {
            pass.uniforms.nIntensity.value = $$(noiseIntensity)
            pass.uniforms.sIntensity.value = $$(scanlineIntensity)
            pass.uniforms.grayscale.value = $$(grayscale) ? 1 : 0
        }
    })

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const torus = $$(torusRef)
        if (torus) {
            torus.rotation.x = time * 0.3
            torus.rotation.y = time * 0.5
        }

        // Update film time for animated noise
        const pass = $$(filmPassRef)
        if (pass && pass.uniforms) {
            pass.uniforms.time.value = time
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
                <pointLight position={[5, 5, 5]} intensity={1} color={0xff6699} />
                <pointLight position={[-5, -5, 5]} intensity={0.8} color={0x66ccff} />

                {/* Central torus - shows film effect on curved surface */}
                <mesh ref={torusRef} position={[0, 0, 0]}>
                    <torusGeometry args={[1.5, 0.5, 32, 64]} />
                    <meshStandardMaterial
                        color={0xffffff}
                        roughness={0.2}
                        metalness={0.9}
                    />
                </mesh>

                {/* Colorful spheres for film grain visibility */}
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

export default Film
