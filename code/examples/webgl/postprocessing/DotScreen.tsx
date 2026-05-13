/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, EffectComposer, RenderPass, DotScreenPass, OutputPass, Vector2 } from 'three'
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
 * Port of webgl_postprocessing_dotscreen from Three.js examples.
 * Dot screen pattern effect for retro/comic book style.
 *
 * Source: https://threejs.org/examples/webgl_postprocessing_dotscreen.html
 *
 * DotScreenPass parameters (via uniforms):
 * - center: Center point of the dot pattern (default: [0.5, 0.5])
 * - angle: Rotation angle of the dot grid (default: 1.57)
 * - scale: Size of the dots (default: 1)
 *
 * Key pattern: DotScreenPass creates a halftone-like effect with
 * uniform dot patterns. Unlike HalftonePass which separates RGB channels,
 * this creates a single dot pattern overlay.
 */

export const DotScreen = () => {
    const composerRef = $<EffectComposer>()
    const dotScreenPassRef = $<DotScreenPass>()
    const rendererRef = $<THREE.WebGLRenderer>()
    const sceneRef = $<THREE.Scene>()
    const cameraRef = $<THREE.PerspectiveCamera>()
    const knotRef = $<THREE.Mesh>()

    // Reactive dot screen parameters
    const scale = $(1)
    const angle = $(Math.PI / 2)

    useEffect(() => {
        const renderer = $$(rendererRef)
        const scene = $$(sceneRef)
        const camera = $$(cameraRef)
        if (!renderer || !scene || !camera) return

        // Setup post-processing with DotScreenPass
        const composer = new EffectComposer(renderer)
        const renderPass = new RenderPass(scene, camera)
        composer.addPass(renderPass)

        // DotScreenPass - center, angle, scale
        const dotScreenPass = new DotScreenPass(
            new Vector2(0.5, 0.5),  // center
            $$(angle),
            $$(scale)
        )
        composer.addPass(dotScreenPass)
        dotScreenPassRef(dotScreenPass)

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

    // Update dot screen parameters reactively
    useEffect(() => {
        const pass = $$(dotScreenPassRef)
        if (pass && pass.uniforms) {
            pass.uniforms.scale.value = $$(scale)
            pass.uniforms.angle.value = $$(angle)
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

                {/* Central torus knot - interesting geometry for dot pattern */}
                <mesh ref={knotRef} position={[0, 0, 0]}>
                    <torusKnotGeometry args={[1, 0.3, 128, 32]} />
                    <meshStandardMaterial
                        color={0xffffff}
                        roughness={0.2}
                        metalness={0.9}
                    />
                </mesh>

                {/* Surrounding spheres with contrasting colors */}
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

                {/* Background grid for dot pattern visibility */}
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

export default DotScreen
