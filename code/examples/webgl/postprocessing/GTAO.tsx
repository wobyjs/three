/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, EffectComposer, RenderPass, GTAOPass, OutputPass, Vector2 } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/CylinderGeometry'
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
 * Port of webgl_postprocessing_gtao from Three.js examples.
 * Ground Truth Ambient Occlusion for high-quality contact shadows.
 *
 * Source: https://threejs.org/examples/webgl_postprocessing_gtao.html
 *
 * GTAOPass parameters (via passes[0]):
 * - intensity: Strength of the occlusion effect
 * - radius: Radius of the occlusion sampling
 * - bias: Bias for occlusion calculation
 * - scale: Scale factor for the effect
 *
 * Key pattern: GTAOPass provides higher quality ambient occlusion
 * than SSAO with better performance characteristics. It requires
 * scene, camera, width, and height in the constructor.
 */

export const GTAO = () => {
    const composerRef = $<EffectComposer>()
    const gtaoPassRef = $<GTAOPass>()
    const rendererRef = $<THREE.WebGLRenderer>()
    const sceneRef = $<THREE.Scene>()
    const cameraRef = $<THREE.PerspectiveCamera>()

    // Reactive GTAO parameters
    const intensity = $(1)
    const radius = $(0.25)

    useEffect(() => {
        const renderer = $$(rendererRef)
        const scene = $$(sceneRef)
        const camera = $$(cameraRef)
        if (!renderer || !scene || !camera) return

        // Setup post-processing with GTAOPass
        const composer = new EffectComposer(renderer)
        const renderPass = new RenderPass(scene, camera)
        composer.addPass(renderPass)

        // GTAOPass - requires scene, camera, width, height
        const gtaoPass = new GTAOPass(
            scene,
            camera,
            window.innerWidth,
            window.innerHeight
        )
        gtaoPass.params.intensity = $$(intensity)
        gtaoPass.params.radius = $$(radius)
        composer.addPass(gtaoPass)
        gtaoPassRef(gtaoPass)

        const outputPass = new OutputPass()
        composer.addPass(outputPass)

        composerRef(composer)

        // Handle resize
        const onResize = () => {
            composer.setSize(window.innerWidth, window.innerHeight)
            gtaoPass.setSize(window.innerWidth, window.innerHeight)
        }
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    })

    // Update GTAO parameters reactively
    useEffect(() => {
        const pass = $$(gtaoPassRef)
        if (pass) {
            pass.params.intensity = $$(intensity)
            pass.params.radius = $$(radius)
        }
    })

    useFrame(() => {
        const composer = $$(composerRef)
        if (composer) {
            composer.render()
        }
    })

    // Complex geometry for GTAO demonstration
    const objects: { pos: [number, number, number]; color: number; type: string; scale?: [number, number, number] }[] = [
        // Central structure
        { pos: [0, 1, 0], color: 0x888888, type: 'cylinder', scale: [0.5, 2, 0.5] },
        // Surrounding boxes
        { pos: [2, 0.5, 0], color: 0x666666, type: 'box' },
        { pos: [-2, 0.5, 0], color: 0x666666, type: 'box' },
        { pos: [0, 0.5, 2], color: 0x666666, type: 'box' },
        { pos: [0, 0.5, -2], color: 0x666666, type: 'box' },
        // Spheres
        { pos: [1.5, 0.5, 1.5], color: 0x999999, type: 'sphere', scale: [0.5, 0.5, 0.5] },
        { pos: [-1.5, 0.5, 1.5], color: 0x999999, type: 'sphere', scale: [0.5, 0.5, 0.5] },
        { pos: [1.5, 0.5, -1.5], color: 0x999999, type: 'sphere', scale: [0.5, 0.5, 0.5] },
        { pos: [-1.5, 0.5, -1.5], color: 0x999999, type: 'sphere', scale: [0.5, 0.5, 0.5] },
        // Stacked boxes
        { pos: [3, 0.25, 3], color: 0x777777, type: 'box', scale: [0.5, 0.5, 0.5] },
        { pos: [3, 0.75, 3], color: 0x777777, type: 'box', scale: [0.5, 0.5, 0.5] },
        { pos: [3, 1.25, 3], color: 0x777777, type: 'box', scale: [0.5, 0.5, 0.5] },
        // Torus
        { pos: [0, 2, 0], color: 0xaaaaaa, type: 'torus', scale: [1, 1, 1] },
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

                {/* Complex geometry for GTAO */}
                {objects.map((obj, i) => (
                    <mesh key={i} position={obj.pos} scale={obj.scale || [1, 1, 1]}>
                        {obj.type === 'box' && <boxGeometry args={[1, 1, 1]} />}
                        {obj.type === 'sphere' && <sphereGeometry args={[1, 16, 16]} />}
                        {obj.type === 'cylinder' && <cylinderGeometry args={[1, 1, 1, 32]} />}
                        {obj.type === 'torus' && <torusGeometry args={[0.8, 0.3, 16, 32]} />}
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

export default GTAO
