/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, EffectComposer, RenderPass, SMAAPass, OutputPass } from 'three'
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
 * Port of webgl_postprocessing_smaa from Three.js examples.
 * Subpixel Morphological Anti-Aliasing (SMAA) for high-quality edge smoothing.
 *
 * Source: https://threejs.org/examples/webgl_postprocessing_smaa.html
 *
 * SMAA is a post-processing anti-aliasing technique that:
 * - Detects edges in the rendered image
 * - Blends subpixel patterns to smooth jagged edges
 * - Higher quality than FXAA but slightly more expensive
 *
 * Key pattern: SMAAPass should be one of the last passes in the chain.
 * Unlike FXAA (which is a shader), SMAA uses edge detection textures.
 */

export const SMAA = () => {
    const composerRef = $<EffectComposer>()
    const rendererRef = $<THREE.WebGLRenderer>()
    const sceneRef = $<THREE.Scene>()
    const cameraRef = $<THREE.PerspectiveCamera>()
    const torusRef = $<THREE.Mesh>()

    useEffect(() => {
        const renderer = $$(rendererRef)
        const scene = $$(sceneRef)
        const camera = $$(cameraRef)
        if (!renderer || !scene || !camera) return

        // Setup post-processing with SMAA
        const composer = new EffectComposer(renderer)
        const renderPass = new RenderPass(scene, camera)
        composer.addPass(renderPass)

        // SMAAPass - width and height required for edge detection
        const smaaPass = new SMAAPass(window.innerWidth, window.innerHeight)
        composer.addPass(smaaPass)

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
                antialias={false}  // Disable native AA to see SMAA effect
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

export default SMAA
