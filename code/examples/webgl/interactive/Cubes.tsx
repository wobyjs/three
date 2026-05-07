/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { useThree } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, Raycaster, Vector2, Mesh } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/materials/MeshLambertMaterial'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/lights/PointLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_interactive_cubes from Three.js examples.
 * Demonstrates raycasting for hover detection and interaction.
 *
 * Source: https://threejs.org/examples/webgl_interactive_cubes.html
 *
 * Key features:
 * - Raycaster for intersection testing
 * - Hover effects with emissive highlighting
 * - CRITICAL: Use $$() for context arrays, never $()
 * - No `as any` casts
 */

export const Cubes = () => {
    const pointer = new Vector2()
    const raycaster = new Raycaster()
    const hoveredCube = $<THREE.Mesh | null>(null)
    const cubes: THREE.Mesh[] = []

    // Create cubes array for raycasting
    useEffect(() => {
        // Initialize pointer position
        const onPointerMove = (event: PointerEvent) => {
            pointer.x = (event.clientX / window.innerWidth) * 2 - 1
            pointer.y = -(event.clientY / window.innerHeight) * 2 + 1
        }

        window.addEventListener('pointermove', onPointerMove)
        return () => window.removeEventListener('pointermove', onPointerMove)
    })

    // Raycasting in animation loop
    useFrame(() => {
        const { scenes, cameras } = useThree()
        // CRITICAL: Use $$ for context arrays, never $
        const scene = $$(scenes)?.[0]
        const camera = $$(cameras)?.[0] as THREE.PerspectiveCamera
        if (!scene || !camera) return

        // Update raycaster
        raycaster.setFromCamera(pointer, camera)

        // Find intersections
        const intersects = raycaster.intersectObjects(scene.children, true)

        // Reset previous hover
        const prevHovered = $$(hoveredCube)
        if (prevHovered) {
            const material = prevHovered.material as THREE.MeshLambertMaterial
            material.emissive.setHex(0x000000)
        }

        // Set new hover
        if (intersects.length > 0) {
            const intersected = intersects[0].object as THREE.Mesh
            const material = intersected.material as THREE.MeshLambertMaterial
            material.emissive.setHex(0x444444)
            hoveredCube(intersected)
        } else {
            hoveredCube(null)
        }
    })

    // Generate cube positions
    const cubePositions: [number, number, number][] = []
    for (let i = 0; i < 100; i++) {
        cubePositions.push([
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 20
        ])
    }

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x222222)}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 10, 7]} intensity={1} />
                <pointLight position={[-5, 5, -5]} intensity={0.5} />

                {/* 100 interactive cubes */}
                {cubePositions.map((pos, i) => (
                    <mesh key={i} position={pos} rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}>
                        <boxGeometry args={[0.5, 0.5, 0.5]} />
                        <meshLambertMaterial color={new Color().setHSL(i / 100, 0.8, 0.5)} />
                    </mesh>
                ))}
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 0, 15]} />
            <orbitControls enableDamping autoRotate autoRotateSpeed={0.5} />
        </canvas3D>
    )
}

export default Cubes