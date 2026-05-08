/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, Mesh, SphereGeometry, MeshBasicMaterial, Vector3 } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/materials/MeshBasicMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_advanced_sorted_draw from Three.js examples.
 * Demonstrates sorted draw order for transparency.
 *
 * Source: https://threejs.org/examples/webgl_advanced_sorted_draw.html
 *
 * Key features:
 * - Sorted rendering for transparent objects
 * - Depth sorting algorithm
 * - Proper transparency rendering
 */

const SPHERE_COUNT = 20

export const SortedDraw = () => {
    const spheresRef = $<THREE.Mesh[]>([])

    useFrame(({ clock }) => {
        const spheres = $$(spheresRef)
        if (!spheres) return

        const camera = new Vector3(0, 0, 5)

        // Sort spheres by distance to camera (back to front for transparency)
        const sortedSpheres = spheres
            .filter(s => s)
            .map((sphere, i) => ({
                sphere,
                distance: sphere.position.distanceTo(camera)
            }))
            .sort((a, b) => b.distance - a.distance)

        // Update render order
        sortedSpheres.forEach((item, i) => {
            item.sphere.renderOrder = i
        })

        // Animate spheres
        const time = clock.getElapsedTime()
        spheres.forEach((sphere, i) => {
            if (sphere) {
                sphere.position.x = Math.sin(time + i * 0.5) * 3
                sphere.position.y = Math.cos(time * 0.7 + i * 0.3) * 2
                sphere.position.z = Math.sin(time * 0.5 + i * 0.2) * 3
            }
        })
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x111111)}>
                {/* Transparent spheres - need sorted rendering */}
                {Array.from({ length: SPHERE_COUNT }, (_, i) => (
                    <mesh
                        key={i}
                        ref={(el: THREE.Mesh) => {
                            const spheres = $$(spheresRef) || []
                            spheres[i] = el
                            spheresRef(spheres)
                        }}
                        position={[
                            (Math.random() - 0.5) * 6,
                            (Math.random() - 0.5) * 4,
                            (Math.random() - 0.5) * 6
                        ]}
                    >
                        <sphereGeometry args={[0.5, 32, 32]} />
                        <meshBasicMaterial
                            color={new Color().setHSL(i / SPHERE_COUNT, 0.7, 0.5)}
                            transparent
                            opacity={0.6}
                        />
                    </mesh>
                ))}
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 0, 5]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default SortedDraw