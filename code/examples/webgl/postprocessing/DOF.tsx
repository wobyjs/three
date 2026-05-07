/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, EffectComposer, RenderPass, BokehPass, OutputPass } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/ConeGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_postprocessing_dof from Three.js examples.
 * Depth of Field effect using BokehPass.
 *
 * Source: https://threejs.org/examples/webgl_postprocessing_dof.html
 *
 * DOF parameters:
 * - focus: Distance to focal plane (objects at this distance are sharp)
 * - aperture: Blur intensity (higher = more blur for out-of-focus objects)
 * - maxblur: Maximum blur amount
 *
 * Key pattern: BokehPass reads the depth buffer to determine blur amount per pixel.
 * Objects closer or further from the focal plane get progressively blurred.
 */

export const DOF = () => {
    const composerRef = $<EffectComposer>()
    const bokehPassRef = $<BokehPass>()
    const rendererRef = $<THREE.WebGLRenderer>()
    const sceneRef = $<THREE.Scene>()
    const cameraRef = $<THREE.PerspectiveCamera>()

    // Reactive DOF parameters
    const focus = $(3.0)
    const aperture = $(0.002)
    const maxblur = $(0.01)

    useEffect(() => {
        const renderer = $$(rendererRef)
        const scene = $$(sceneRef)
        const camera = $$(cameraRef)
        if (!renderer || !scene || !camera) return

        // Setup post-processing with DOF
        const composer = new EffectComposer(renderer)
        const renderPass = new RenderPass(scene, camera)
        composer.addPass(renderPass)

        // BokehPass - requires scene, camera, and params
        const bokehPass = new BokehPass(scene, camera, {
            focus: $$(focus),
            aperture: $$(aperture),
            maxblur: $$(maxblur)
        })
        composer.addPass(bokehPass)
        bokehPassRef(bokehPass)

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

    // Update DOF parameters reactively
    useEffect(() => {
        const pass = $$(bokehPassRef)
        if (pass && pass.uniforms) {
            pass.uniforms['focus'].value = $$(focus)
            pass.uniforms['aperture'].value = $$(aperture)
            pass.uniforms['maxblur'].value = $$(maxblur)
        }
    })

    useFrame(() => {
        const composer = $$(composerRef)
        if (composer) {
            composer.render()
        }
    })

    // Objects at varying depths for DOF demonstration
    // Near objects (z < 0)
    const nearObjects: { pos: [number, number, number]; color: number; scale?: [number, number, number] }[] = [
        { pos: [-1, 0.5, -3], color: 0xff6b6b, scale: [0.6, 0.6, 0.6] },
        { pos: [0, 0.3, -4], color: 0xff8e72, scale: [0.4, 0.4, 0.4] },
        { pos: [1, 0.4, -3.5], color: 0xffa07a, scale: [0.5, 0.5, 0.5] },
    ]

    // Mid objects (z around 0) - focal plane
    const midObjects: { pos: [number, number, number]; color: number; type?: string }[] = [
        { pos: [-2, 0.5, 0], color: 0x4ecdc4 },
        { pos: [0, 0.75, 0], color: 0x45b7d1 },
        { pos: [2, 0.5, 0], color: 0x96ceb4 },
    ]

    // Far objects (z > 0)
    const farObjects: { pos: [number, number, number]; color: number; scale?: [number, number, number] }[] = [
        { pos: [-1.5, 0.6, 3], color: 0x9b59b6, scale: [0.7, 0.7, 0.7] },
        { pos: [0, 0.5, 4], color: 0x8e44ad, scale: [0.6, 0.6, 0.6] },
        { pos: [1.5, 0.7, 5], color: 0x6c3483, scale: [0.8, 0.8, 0.8] },
    ]

    return (
        <canvas3D noRender>
            <webGLRenderer
                ref={rendererRef}
                antialias
                setPixelRatio={[window.devicePixelRatio]}
                setSize={[window.innerWidth, window.innerHeight]}
            />
            <scene ref={sceneRef} background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 10, 5]} intensity={0.8} />
                <directionalLight position={[-5, 5, -5]} intensity={0.3} />

                {/* Floor plane */}
                <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <boxGeometry args={[20, 20, 0.1]} />
                    <meshStandardMaterial color={0x2d3436} roughness={0.9} />
                </mesh>

                {/* Near objects - will be blurred when focus is on mid/far */}
                {nearObjects.map((obj, i) => (
                    <mesh key={`near-${i}`} position={obj.pos} scale={obj.scale || [1, 1, 1]}>
                        <sphereGeometry args={[1, 32, 32]} />
                        <meshStandardMaterial color={obj.color} roughness={0.3} metalness={0.5} />
                    </mesh>
                ))}

                {/* Mid objects - focal plane when focus=3 */}
                {midObjects.map((obj, i) => (
                    <mesh key={`mid-${i}`} position={obj.pos}>
                        <boxGeometry args={[1, 1, 1]} />
                        <meshStandardMaterial color={obj.color} roughness={0.3} metalness={0.5} />
                    </mesh>
                ))}

                {/* Far objects - will be blurred when focus is on near/mid */}
                {farObjects.map((obj, i) => (
                    <mesh key={`far-${i}`} position={obj.pos} scale={obj.scale || [1, 1, 1]}>
                        <coneGeometry args={[0.5, 1, 32]} />
                        <meshStandardMaterial color={obj.color} roughness={0.3} metalness={0.5} />
                    </mesh>
                ))}
            </scene>

            <perspectiveCamera
                ref={cameraRef}
                fov={50}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[0, 3, 8]}
            />
            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default DOF
