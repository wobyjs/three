/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, EffectComposer, RenderPass, SSAOPass, OutputPass } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/CylinderGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_postprocessing_ssao from Three.js examples.
 * Screen Space Ambient Occlusion for realistic contact shadows.
 *
 * Source: https://threejs.org/examples/webgl_postprocessing_ssao.html
 *
 * SSAO parameters:
 * - kernelRadius: Size of the occlusion kernel (default: 8)
 * - minDistance: Minimum distance for occlusion (default: 0.005)
 * - maxDistance: Maximum distance for occlusion (default: 0.05)
 *
 * Key pattern: SSAOPass requires scene and camera in constructor,
 * and needs depth texture from the renderer.
 */

export const SSAO = () => {
    const composerRef = $<EffectComposer>()
    const ssaoPassRef = $<SSAOPass>()
    const rendererRef = $<THREE.WebGLRenderer>()
    const sceneRef = $<THREE.Scene>()
    const cameraRef = $<THREE.PerspectiveCamera>()

    // Reactive SSAO parameters
    const kernelRadius = $(8)
    const minDistance = $(0.005)
    const maxDistance = $(0.05)

    useEffect(() => {
        const renderer = $$(rendererRef)
        const scene = $$(sceneRef)
        const camera = $$(cameraRef)
        if (!renderer || !scene || !camera) return

        // Setup post-processing with SSAO
        const composer = new EffectComposer(renderer)
        const renderPass = new RenderPass(scene, camera)
        composer.addPass(renderPass)

        // SSAO pass - requires scene, camera, width, height
        const ssaoPass = new SSAOPass(scene, camera, window.innerWidth, window.innerHeight)
        ssaoPass.kernelRadius = $$(kernelRadius)
        ssaoPass.minDistance = $$(minDistance)
        ssaoPass.maxDistance = $$(maxDistance)
        composer.addPass(ssaoPass)
        ssaoPassRef(ssaoPass)

        const outputPass = new OutputPass()
        composer.addPass(outputPass)

        composerRef(composer)

        // Handle resize
        const onResize = () => {
            composer.setSize(window.innerWidth, window.innerHeight)
            ssaoPass.setSize(window.innerWidth, window.innerHeight)
        }
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    })

    // Update SSAO parameters reactively
    useEffect(() => {
        const pass = $$(ssaoPassRef)
        if (pass) {
            pass.kernelRadius = $$(kernelRadius)
            pass.minDistance = $$(minDistance)
            pass.maxDistance = $$(maxDistance)
        }
    })

    useFrame(() => {
        const composer = $$(composerRef)
        if (composer) {
            composer.render()
        }
    })

    // Generate complex geometry for SSAO demonstration
    const objects: { type: string; pos: [number, number, number]; scale?: [number, number, number]; color?: number }[] = [
        // Central tower
        { type: 'cylinder', pos: [0, 1, 0], scale: [0.5, 2, 0.5], color: 0x888888 },
        // Surrounding boxes
        { type: 'box', pos: [2, 0.5, 0], scale: [1, 1, 1], color: 0x666666 },
        { type: 'box', pos: [-2, 0.5, 0], scale: [1, 1, 1], color: 0x666666 },
        { type: 'box', pos: [0, 0.5, 2], scale: [1, 1, 1], color: 0x666666 },
        { type: 'box', pos: [0, 0.5, -2], scale: [1, 1, 1], color: 0x666666 },
        // Spheres
        { type: 'sphere', pos: [1.5, 0.5, 1.5], scale: [0.5, 0.5, 0.5], color: 0x999999 },
        { type: 'sphere', pos: [-1.5, 0.5, 1.5], scale: [0.5, 0.5, 0.5], color: 0x999999 },
        { type: 'sphere', pos: [1.5, 0.5, -1.5], scale: [0.5, 0.5, 0.5], color: 0x999999 },
        { type: 'sphere', pos: [-1.5, 0.5, -1.5], scale: [0.5, 0.5, 0.5], color: 0x999999 },
        // Stacked boxes
        { type: 'box', pos: [3, 0.25, 3], scale: [0.5, 0.5, 0.5], color: 0x777777 },
        { type: 'box', pos: [3, 0.75, 3], scale: [0.5, 0.5, 0.5], color: 0x777777 },
        { type: 'box', pos: [3, 1.25, 3], scale: [0.5, 0.5, 0.5], color: 0x777777 },
    ]

    return (
        <canvas3D noRender>
            <webGLRenderer
                ref={rendererRef}
                antialias
                setPixelRatio={[window.devicePixelRatio]}
                setSize={[window.innerWidth, window.innerHeight]}
            />
            <scene ref={sceneRef} background={new Color(0x1a1a1a)}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 10, 5]} intensity={0.8} />

                {/* Floor plane - shows contact shadows */}
                <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <boxGeometry args={[15, 15, 0.1]} />
                    <meshStandardMaterial color={0x444444} />
                </mesh>

                {/* Complex geometry for SSAO */}
                {objects.map((obj, i) => (
                    <mesh key={i} position={obj.pos} scale={obj.scale || [1, 1, 1]}>
                        {obj.type === 'box' && <boxGeometry args={[1, 1, 1]} />}
                        {obj.type === 'sphere' && <sphereGeometry args={[1, 16, 16]} />}
                        {obj.type === 'cylinder' && <cylinderGeometry args={[1, 1, 1, 32]} />}
                        <meshStandardMaterial color={obj.color || 0x888888} roughness={0.8} />
                    </mesh>
                ))}
            </scene>

            <perspectiveCamera
                ref={cameraRef}
                fov={50}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[5, 5, 5]}
            />
            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default SSAO
