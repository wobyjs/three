/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, EffectComposer, RenderPass, ShaderPass, OutputPass, Vector2 } from 'three'
import { SobelOperatorShader } from 'three/examples/jsm/shaders/SobelOperatorShader.js'
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
 * Port of webgl_postprocessing_sobel from Three.js examples.
 * Edge detection using Sobel operator for sketch/cartoon effect.
 *
 * Source: https://threejs.org/examples/webgl_postprocessing_sobel.html
 *
 * SobelOperatorShader parameters (via uniforms):
 * - tDiffuse: Input texture (set automatically)
 * - resolution: Resolution for edge calculation
 *
 * Key pattern: Sobel edge detection highlights areas of high
 * color/depth contrast, creating an outline effect. Often combined
 * with other passes for cartoon/toon rendering.
 */

export const Sobel = () => {
    const composerRef = $<EffectComposer>()
    const sobelPassRef = $<ShaderPass>()
    const rendererRef = $<THREE.WebGLRenderer>()
    const sceneRef = $<THREE.Scene>()
    const cameraRef = $<THREE.PerspectiveCamera>()
    const knotRef = $<THREE.Mesh>()

    useEffect(() => {
        const renderer = $$(rendererRef)
        const scene = $$(sceneRef)
        const camera = $$(cameraRef)
        if (!renderer || !scene || !camera) return

        // Setup post-processing with Sobel edge detection
        const composer = new EffectComposer(renderer)
        const renderPass = new RenderPass(scene, camera)
        composer.addPass(renderPass)

        // Sobel edge detection via ShaderPass
        const sobelPass = new ShaderPass(SobelOperatorShader)
        sobelPass.uniforms.resolution.value.set(
            1 / window.innerWidth,
            1 / window.innerHeight
        )
        composer.addPass(sobelPass)
        sobelPassRef(sobelPass)

        const outputPass = new OutputPass()
        composer.addPass(outputPass)

        composerRef(composer)

        // Handle resize
        const onResize = () => {
            composer.setSize(window.innerWidth, window.innerHeight)
            const pass = $$(sobelPassRef)
            if (pass) {
                pass.uniforms.resolution.value.set(
                    1 / window.innerWidth,
                    1 / window.innerHeight
                )
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
                antialias
                setPixelRatio={[window.devicePixelRatio]}
                setSize={[window.innerWidth, window.innerHeight]}
            />
            <scene ref={sceneRef} background={new Color(0xffffff)}>
                <ambientLight intensity={0.4} />
                <pointLight position={[5, 5, 5]} intensity={1} color={0xff6699} />
                <pointLight position={[-5, -5, 5]} intensity={0.8} color={0x66ccff} />

                {/* Central torus knot - shows edge detection on complex geometry */}
                <mesh ref={knotRef} position={[0, 0, 0]}>
                    <torusKnotGeometry args={[1, 0.3, 128, 32]} />
                    <meshStandardMaterial
                        color={0xffffff}
                        roughness={0.2}
                        metalness={0.9}
                    />
                </mesh>

                {/* Spheres for edge detection */}
                <mesh position={[3, 0, 0]}>
                    <sphereGeometry args={[0.5, 32, 32]} />
                    <meshStandardMaterial color={0x888888} roughness={0.3} metalness={0.7} />
                </mesh>

                <mesh position={[-3, 0, 0]}>
                    <sphereGeometry args={[0.5, 32, 32]} />
                    <meshStandardMaterial color={0x888888} roughness={0.3} metalness={0.7} />
                </mesh>

                <mesh position={[0, 3, 0]}>
                    <boxGeometry args={[0.8, 0.8, 0.8]} />
                    <meshStandardMaterial color={0x888888} roughness={0.3} metalness={0.7} />
                </mesh>

                <mesh position={[0, -3, 0]}>
                    <boxGeometry args={[0.8, 0.8, 0.8]} />
                    <meshStandardMaterial color={0x888888} roughness={0.3} metalness={0.7} />
                </mesh>

                {/* Floor plane */}
                <mesh position={[0, -4, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <boxGeometry args={[15, 15, 0.1]} />
                    <meshStandardMaterial color={0xdddddd} />
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

export default Sobel
