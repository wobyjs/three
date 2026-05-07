/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, EffectComposer, RenderPass, SSRPass, OutputPass, Vector2 } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/CylinderGeometry'
import '@woby/three/src/geometries/PlaneGeometry'
import '@woby/three/src/geometries/TorusGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/materials/MeshBasicMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/lights/PointLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_postprocessing_ssr from Three.js examples.
 * Screen Space Reflections for realistic mirror-like surfaces.
 *
 * Source: https://threejs.org/examples/webgl_postprocessing_ssr.html
 *
 * SSRPass parameters:
 * - intensity: Strength of reflections (default: 0.5)
 * - maxDistance: Maximum ray march distance (default: 0.1)
 * - thickness: Object thickness for ray marching (default: 0.1)
 *
 * Performance Warning: SSR is computationally expensive.
 * It performs ray marching in screen space which can be GPU intensive.
 * Consider reducing resolution or limiting usage in production.
 *
 * Key pattern: SSRPass requires renderer, scene, and camera in constructor.
 * Objects need metalness > 0 for visible reflections.
 */

export const SSR = () => {
    const composerRef = $<EffectComposer>()
    const ssrPassRef = $<SSRPass>()
    const rendererRef = $<THREE.WebGLRenderer>()
    const sceneRef = $<THREE.Scene>()
    const cameraRef = $<THREE.PerspectiveCamera>()
    const torusRef = $<THREE.Mesh>()

    // Reactive SSR parameters
    const intensity = $(0.5)
    const maxDistance = $(0.1)
    const thickness = $(0.02)

    useEffect(() => {
        const renderer = $$(rendererRef)
        const scene = $$(sceneRef)
        const camera = $$(cameraRef)
        if (!renderer || !scene || !camera) return

        // Setup post-processing with SSR
        const composer = new EffectComposer(renderer)
        const renderPass = new RenderPass(scene, camera)
        composer.addPass(renderPass)

        // SSRPass - requires renderer, scene, camera
        const ssrPass = new SSRPass({
            renderer,
            scene,
            camera,
            width: window.innerWidth,
            height: window.innerHeight,
        })
        ssrPass.intensity = $$(intensity)
        ssrPass.maxDistance = $$(maxDistance)
        ssrPass.thickness = $$(thickness)
        composer.addPass(ssrPass)
        ssrPassRef(ssrPass)

        const outputPass = new OutputPass()
        composer.addPass(outputPass)

        composerRef(composer)

        // Handle resize
        const onResize = () => {
            composer.setSize(window.innerWidth, window.innerHeight)
            ssrPass.setSize(window.innerWidth, window.innerHeight)
        }
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    })

    // Update SSR parameters reactively
    useEffect(() => {
        const pass = $$(ssrPassRef)
        if (pass) {
            pass.intensity = $$(intensity)
            pass.maxDistance = $$(maxDistance)
            pass.thickness = $$(thickness)
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
            <scene ref={sceneRef} background={new Color(0x111111)}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 10, 5]} intensity={0.8} />
                <pointLight position={[-5, 5, -5]} intensity={0.5} color={0x0088ff} />

                {/* Reflective floor - key for SSR effect */}
                <mesh position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <planeGeometry args={[20, 20]} />
                    <meshStandardMaterial
                        color={0x333333}
                        metalness={0.9}
                        roughness={0.1}
                    />
                </mesh>

                {/* Central rotating torus - shows reflections on curved surface */}
                <mesh ref={torusRef} position={[0, 1, 0]}>
                    <torusGeometry args={[1, 0.4, 32, 64]} />
                    <meshStandardMaterial
                        color={0x8844ff}
                        metalness={0.9}
                        roughness={0.1}
                    />
                </mesh>

                {/* Reflective spheres at various positions */}
                <mesh position={[-3, 0.75, -2]}>
                    <sphereGeometry args={[0.75, 32, 32]} />
                    <meshStandardMaterial
                        color={0xff4444}
                        metalness={0.95}
                        roughness={0.05}
                    />
                </mesh>

                <mesh position={[3, 0.75, -2]}>
                    <sphereGeometry args={[0.75, 32, 32]} />
                    <meshStandardMaterial
                        color={0x44ff44}
                        metalness={0.95}
                        roughness={0.05}
                    />
                </mesh>

                <mesh position={[0, 0.5, 3]}>
                    <sphereGeometry args={[0.5, 32, 32]} />
                    <meshStandardMaterial
                        color={0x4444ff}
                        metalness={0.95}
                        roughness={0.05}
                    />
                </mesh>

                {/* Reflective boxes */}
                <mesh position={[-2, 0.5, 2]}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial
                        color={0xffff44}
                        metalness={0.8}
                        roughness={0.2}
                    />
                </mesh>

                <mesh position={[2, 0.5, 2]}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial
                        color={0xff44ff}
                        metalness={0.8}
                        roughness={0.2}
                    />
                </mesh>

                {/* Cylinder for variety */}
                <mesh position={[0, 0.75, -3]}>
                    <cylinderGeometry args={[0.5, 0.5, 1.5, 32]} />
                    <meshStandardMaterial
                        color={0x44ffff}
                        metalness={0.9}
                        roughness={0.1}
                    />
                </mesh>
            </scene>

            <perspectiveCamera
                ref={cameraRef}
                fov={50}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[5, 4, 8]}
            />
            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default SSR