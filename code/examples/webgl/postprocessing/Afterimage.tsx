/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, EffectComposer, RenderPass, AfterimagePass, OutputPass, Vector2 } from 'three'
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
 * Port of webgl_postprocessing_afterimage from Three.js examples.
 * Motion trail/ghost effect using AfterimagePass.
 *
 * Source: https://threejs.org/examples/webgl_postprocessing_afterimage.html
 *
 * AfterimagePass parameters:
 * - damp: Fade factor for previous frames (0-1, default: 0.96)
 *   - Higher values = longer trails
 *   - Lower values = faster fade
 *
 * Key pattern: AfterimagePass blends previous frames with current frame,
 * creating motion blur/trail effects. It stores a history buffer and
 * lerps between current and previous frames.
 */

export const Afterimage = () => {
    const composerRef = $<EffectComposer>()
    const afterimagePassRef = $<AfterimagePass>()
    const rendererRef = $<THREE.WebGLRenderer>()
    const sceneRef = $<THREE.Scene>()
    const cameraRef = $<THREE.PerspectiveCamera>()
    const knotRef = $<THREE.Mesh>()

    // Reactive afterimage parameters
    const damp = $(0.96)

    useEffect(() => {
        const renderer = $$(rendererRef)
        const scene = $$(sceneRef)
        const camera = $$(cameraRef)
        if (!renderer || !scene || !camera) return

        // Setup post-processing with AfterimagePass
        const composer = new EffectComposer(renderer)
        const renderPass = new RenderPass(scene, camera)
        composer.addPass(renderPass)

        // AfterimagePass - creates motion trails
        const afterimagePass = new AfterimagePass($$(damp))
        composer.addPass(afterimagePass)
        afterimagePassRef(afterimagePass)

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

    // Update afterimage parameters reactively
    useEffect(() => {
        const pass = $$(afterimagePassRef)
        if (pass && pass.uniforms) {
            pass.uniforms.damp.value = $$(damp)
        }
    })

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const knot = $$(knotRef)
        if (knot) {
            // Fast rotation for visible trails
            knot.rotation.x = time * 1.5
            knot.rotation.y = time * 2.0
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

                {/* Central torus knot - fast rotation shows trails */}
                <mesh ref={knotRef} position={[0, 0, 0]}>
                    <torusKnotGeometry args={[1, 0.3, 128, 32]} />
                    <meshStandardMaterial
                        color={0xffffff}
                        emissive={0x4444ff}
                        emissiveIntensity={0.5}
                        roughness={0.2}
                        metalness={0.9}
                    />
                </mesh>

                {/* Orbiting spheres for additional trail effects */}
                <mesh position={[3, 0, 0]}>
                    <sphereGeometry args={[0.4, 32, 32]} />
                    <meshBasicMaterial color={0xff3366} />
                </mesh>

                <mesh position={[-3, 0, 0]}>
                    <sphereGeometry args={[0.4, 32, 32]} />
                    <meshBasicMaterial color={0x33ff99} />
                </mesh>

                <mesh position={[0, 3, 0]}>
                    <boxGeometry args={[0.6, 0.6, 0.6]} />
                    <meshBasicMaterial color={0xffcc33} />
                </mesh>

                <mesh position={[0, -3, 0]}>
                    <boxGeometry args={[0.6, 0.6, 0.6]} />
                    <meshBasicMaterial color={0x33ccff} />
                </mesh>

                {/* Background grid */}
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

export default Afterimage
