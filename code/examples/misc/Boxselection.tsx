/** @jsxImportSource @woby/three */

import { $, $$, useFrame, useRenderer, useCamera, useEffect } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, Vector3, Mesh } from 'three'
import * as THREE from 'three'
import { SelectionBox } from 'three/examples/jsm/interactive/SelectionBox.js'
import { SelectionHelper } from 'three/examples/jsm/interactive/SelectionHelper.js'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of misc_boxselection from Three.js examples.
 * Demonstrates box selection for multiple objects.
 *
 * Source: https://threejs.org/examples/misc_boxselection.html
 *
 * Key features:
 * - Click and drag to select multiple objects
 * - Visual selection box
 * - Multi-object selection
 */

export const Boxselection = () => {
    const cameraRef = useCamera<THREE.PerspectiveCamera>()
    const rendererRef = useRenderer<THREE.WebGLRenderer>()
    const sceneRef = $<THREE.Scene>()
    const controlsRef = $<OrbitControls>()

    const selectionBoxRef = $<SelectionBox>()
    const selectionHelperRef = $<SelectionHelper>()

    // Setup selection
    useEffect(() => {
        const renderer = $$(rendererRef)
        const camera = $$(cameraRef)
        const scene = $$(sceneRef)
        if (!renderer || !camera || !scene) return

        const selectionBox = new SelectionBox(camera, scene)
        selectionBoxRef(selectionBox)

        const helper = new SelectionHelper(renderer, 'selectBox')
        selectionHelperRef(helper)

        // Get selectable meshes
        const getSelectableMeshes = () => {
            const meshes: THREE.Mesh[] = []
            scene.traverse((child) => {
                if (child instanceof THREE.Mesh && child.name.startsWith('selectable-')) {
                    meshes.push(child)
                }
            })
            return meshes
        }

        // Handle selection start
        const onSelectStart = (event: PointerEvent) => {
            const controls = $$(controlsRef)
            if (controls) controls.enabled = false

            const meshes = getSelectableMeshes()
            selectionBox.collection = meshes

            selectionBox.startPoint.set(
                (event.clientX / window.innerWidth) * 2 - 1,
                -(event.clientY / window.innerHeight) * 2 + 1,
                0.5
            )
        }

        // Handle selection move
        const onSelectMove = (event: PointerEvent) => {
            selectionBox.endPoint.set(
                (event.clientX / window.innerWidth) * 2 - 1,
                -(event.clientY / window.innerHeight) * 2 + 1,
                0.5
            )

            const allSelected = selectionBox.select()
            const meshes = getSelectableMeshes()

            // Reset all colors
            meshes.forEach((mesh) => {
                if (mesh.material instanceof THREE.MeshStandardMaterial) {
                    mesh.material.emissive.setHex(0x000000)
                }
            })

            // Highlight selected
            allSelected.forEach((object) => {
                const mesh = object as THREE.Mesh
                if (mesh.material instanceof THREE.MeshStandardMaterial) {
                    mesh.material.emissive.setHex(0x444444)
                }
            })
        }

        // Handle selection end
        const onSelectEnd = () => {
            const controls = $$(controlsRef)
            if (controls) controls.enabled = true
        }

        renderer.domElement.addEventListener('pointerdown', onSelectStart)
        renderer.domElement.addEventListener('pointermove', onSelectMove)
        renderer.domElement.addEventListener('pointerup', onSelectEnd)

        return () => {
            renderer.domElement.removeEventListener('pointerdown', onSelectStart)
            renderer.domElement.removeEventListener('pointermove', onSelectMove)
            renderer.domElement.removeEventListener('pointerup', onSelectEnd)
        }
    })

    useFrame(() => {
        const controls = $$(controlsRef)
        if (controls) controls.update()
    })

    // Generate random cubes
    const cubes = Array.from({ length: 50 }, (_, i) => {
        const x = (Math.random() - 0.5) * 20
        const y = (Math.random() - 0.5) * 20
        const z = (Math.random() - 0.5) * 20
        return { position: [x, y, z] as [number, number, number], color: new Color().setHSL(Math.random(), 0.7, 0.5) }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene ref={sceneRef} background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 10, 5]} intensity={1} />

                {/* Selectable cubes */}
                {cubes.map((cube, i) => (
                    <mesh key={i} name={`selectable-${i}`} position={cube.position}>
                        <boxGeometry args={[1, 1, 1]} />
                        <meshStandardMaterial color={cube.color} />
                    </mesh>
                ))}
            </scene>

            <perspectiveCamera
                ref={cameraRef}
                fov={60}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[0, 0, 25]}
            />

            <orbitControls ref={controlsRef} enableDamping />
        </canvas3D>
    )
}

export default Boxselection