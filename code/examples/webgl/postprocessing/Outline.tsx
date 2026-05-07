/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, EffectComposer, RenderPass, OutlinePass, OutputPass, Vector2, Raycaster, Mesh } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/ConeGeometry'
import '@woby/three/src/geometries/CylinderGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_postprocessing_outline from Three.js examples.
 * Outline effect with object selection using OutlinePass.
 *
 * Source: https://threejs.org/examples/webgl_postprocessing_outline.html
 *
 * OutlinePass parameters:
 * - resolution: Vector2 for render target size
 * - scene: The scene to render
 * - camera: The camera to use
 * - selectedObjects: Array of objects to outline
 *
 * Outline properties:
 * - edgeStrength: Intensity of the outline (default: 3)
 * - edgeGlow: Glow effect intensity (default: 0)
 * - edgeThickness: Outline thickness (default: 1)
 * - pulsePeriod: Pulsing animation period (default: 0)
 * - visibleEdgeColor: Color of visible edges (default: white)
 * - hiddenEdgeColor: Color of hidden edges (default: white)
 *
 * Key pattern: OutlinePass.selectedObjects array controls which objects
 * get the outline effect. Use raycasting to select objects on click.
 */

export const Outline = () => {
    const composerRef = $<EffectComposer>()
    const outlinePassRef = $<OutlinePass>()
    const rendererRef = $<THREE.WebGLRenderer>()
    const sceneRef = $<THREE.Scene>()
    const cameraRef = $<THREE.PerspectiveCamera>()

    // Reactive state
    const selectedObjects = $<THREE.Object3D[]>([])
    const edgeStrength = $(3)
    const edgeGlow = $(0.5)
    const pulsePeriod = $(0)

    // Store selectable meshes for raycasting
    const selectableMeshes = $<THREE.Mesh[]>([])

    useEffect(() => {
        const renderer = $$(rendererRef)
        const scene = $$(sceneRef)
        const camera = $$(cameraRef)
        if (!renderer || !scene || !camera) return

        // Setup post-processing with OutlinePass
        const composer = new EffectComposer(renderer)
        const renderPass = new RenderPass(scene, camera)
        composer.addPass(renderPass)

        // OutlinePass - requires resolution, scene, camera
        const outlinePass = new OutlinePass(
            new Vector2(window.innerWidth, window.innerHeight),
            scene,
            camera,
            []
        )
        outlinePass.edgeStrength = $$(edgeStrength)
        outlinePass.edgeGlow = $$(edgeGlow)
        outlinePass.pulsePeriod = $$(pulsePeriod)
        outlinePass.visibleEdgeColor.set(0xffff00)
        outlinePass.hiddenEdgeColor.set(0x220000)
        composer.addPass(outlinePass)
        outlinePassRef(outlinePass)

        const outputPass = new OutputPass()
        composer.addPass(outputPass)

        composerRef(composer)

        // Handle resize
        const onResize = () => {
            composer.setSize(window.innerWidth, window.innerHeight)
            outlinePass.resolution.set(window.innerWidth, window.innerHeight)
        }
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    })

    // Update outline parameters reactively
    useEffect(() => {
        const pass = $$(outlinePassRef)
        if (pass) {
            pass.edgeStrength = $$(edgeStrength)
            pass.edgeGlow = $$(edgeGlow)
            pass.pulsePeriod = $$(pulsePeriod)
            pass.selectedObjects = $$(selectedObjects)
        }
    })

    // Handle click for object selection
    useEffect(() => {
        const canvas = document.querySelector('canvas')
        if (!canvas) return

        const raycaster = new Raycaster()
        const mouse = new THREE.Vector2()

        const onClick = (event: MouseEvent) => {
            const meshes = $$(selectableMeshes)
            if (meshes.length === 0) return

            mouse.x = (event.clientX / window.innerWidth) * 2 - 1
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1

            raycaster.setFromCamera(mouse, $$(cameraRef)!)
            const intersects = raycaster.intersectObjects(meshes, false)

            if (intersects.length > 0) {
                const selected = intersects[0].object
                // Validate selected object is in scene
                if ($$(sceneRef)?.children.includes(selected)) {
                    selectedObjects([selected])
                }
            } else {
                selectedObjects([])
            }
        }

        canvas.addEventListener('click', onClick)
        return () => canvas.removeEventListener('click', onClick)
    })

    useFrame(() => {
        const composer = $$(composerRef)
        if (composer) {
            composer.render()
        }
    })

    // Selectable objects configuration
    const objects: { pos: [number, number, number]; color: number; type: string }[] = [
        { pos: [0, 0.5, 0], color: 0xff6b6b, type: 'box' },
        { pos: [-2, 0.5, -2], color: 0x4ecdc4, type: 'sphere' },
        { pos: [2, 0.5, -2], color: 0xffe66d, type: 'cone' },
        { pos: [-2, 0.5, 2], color: 0x95e1d3, type: 'cylinder' },
        { pos: [2, 0.5, 2], color: 0xf38181, type: 'box' },
        { pos: [0, 0.5, -3], color: 0xaa96da, type: 'sphere' },
        { pos: [0, 0.5, 3], color: 0xfcbad3, type: 'cone' },
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
                    <boxGeometry args={[15, 15, 0.1]} />
                    <meshStandardMaterial color={0x2d3436} roughness={0.9} />
                </mesh>

                {/* Selectable objects */}
                {objects.map((obj, i) => (
                    <mesh
                        key={i}
                        position={obj.pos}
                        ref={(el: THREE.Mesh) => {
                            if (el) {
                                const meshes = $$(selectableMeshes) || []
                                if (!meshes.includes(el)) {
                                    selectableMeshes([...meshes, el])
                                }
                            }
                        }}
                    >
                        {obj.type === 'box' && <boxGeometry args={[1, 1, 1]} />}
                        {obj.type === 'sphere' && <sphereGeometry args={[0.5, 32, 32]} />}
                        {obj.type === 'cone' && <coneGeometry args={[0.5, 1, 32]} />}
                        {obj.type === 'cylinder' && <cylinderGeometry args={[0.5, 0.5, 1, 32]} />}
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
                position={[5, 5, 8]}
            />
            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default Outline