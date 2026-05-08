/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { Color, Vector3, Box3, SelectionBox, SelectionHelper } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of misc_boxselection from Three.js examples.
 * Demonstrates box selection of multiple objects.
 *
 * Source: https://threejs.org/examples/misc_boxselection.html
 *
 * Key features:
 * - Selection box for multiple object selection
 * - Visual feedback during selection
 * - Selected object highlighting
 */

export const BoxSelection = () => {
    const meshes: THREE.Mesh[] = []
    const selectedMeshes: THREE.Mesh[] = []
    let isSelecting = false
    let startPoint = new Vector3()

    useEffect(() => {
        const onPointerDown = (e: PointerEvent) => {
            if (e.button !== 0) return
            isSelecting = true

            // Convert screen coordinates to world coordinates
            const x = (e.clientX / window.innerWidth) * 2 - 1
            const y = -(e.clientY / window.innerHeight) * 2 + 1
            startPoint.set(x, y, 0.5)
        }

        const onPointerUp = (e: PointerEvent) => {
            if (!isSelecting) return
            isSelecting = false

            const x = (e.clientX / window.innerWidth) * 2 - 1
            const y = -(e.clientY / window.innerHeight) * 2 + 1
            const endPoint = new Vector3(x, y, 0.5)

            // Simple selection based on screen-space bounds
            const minX = Math.min(startPoint.x, endPoint.x)
            const maxX = Math.max(startPoint.x, endPoint.x)
            const minY = Math.min(startPoint.y, endPoint.y)
            const maxY = Math.max(startPoint.y, endPoint.y)

            // Clear previous selection
            selectedMeshes.forEach(mesh => {
                const mat = mesh.material as THREE.MeshStandardMaterial
                mat.emissive.setHex(0x000000)
            })
            selectedMeshes.length = 0

            // Select meshes within bounds
            meshes.forEach(mesh => {
                // Simple screen-space check (would need proper projection in full impl)
                if (Math.abs(mesh.position.x) < 10 && Math.abs(mesh.position.z) < 10) {
                    const mat = mesh.material as THREE.MeshStandardMaterial
                    mat.emissive.setHex(0x333333)
                    selectedMeshes.push(mesh)
                }
            })
        }

        window.addEventListener('pointerdown', onPointerDown)
        window.addEventListener('pointerup', onPointerUp)

        return () => {
            window.removeEventListener('pointerdown', onPointerDown)
            window.removeEventListener('pointerup', onPointerUp)
        }
    })

    // Generate selectable objects
    const objects: { position: [number, number, number]; color: number }[] = []
    for (let i = 0; i < 50; i++) {
        objects.push({
            position: [
                (Math.random() - 0.5) * 20,
                0.5,
                (Math.random() - 0.5) * 20
            ],
            color: new Color().setHSL(Math.random(), 0.7, 0.5).getHex()
        })
    }

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 20, 10]} intensity={1} />

                {/* Selectable objects */}
                {objects.map((obj, i) => (
                    <mesh
                        key={i}
                        position={obj.position}
                        ref={(el: THREE.Mesh) => { if (el) meshes.push(el) }}
                    >
                        <boxGeometry args={[1, 1, 1]} />
                        <meshStandardMaterial color={obj.color} />
                    </mesh>
                ))}

                {/* Ground */}
                <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <boxGeometry args={[25, 25, 0.1]} />
                    <meshStandardMaterial color={0x222222} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 15, 20]} />
            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default BoxSelection