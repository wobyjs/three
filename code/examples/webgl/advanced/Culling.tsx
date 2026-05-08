/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, Vector3, Sphere, Plane, Matrix4, MeshBasicMaterial, BackSide } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/materials/MeshBasicMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_culling from Three.js examples.
 * Demonstrates frustum culling and object visibility optimization.
 *
 * Source: https://threejs.org/examples/webgl_culling.html
 *
 * Key features:
 * - Frustum culling visualization
 * - Object visibility toggling
 * - Performance optimization demonstration
 */

export const Culling = () => {
    const meshes: THREE.Mesh[] = []
    const visibleCount = $(0)

    useFrame(() => {
        let visible = 0
        meshes.forEach(mesh => {
            // Check if mesh is in view (simplified check)
            if (mesh.position.length() < 15) {
                mesh.visible = true
                visible++
            } else {
                mesh.visible = false
            }
        })
        visibleCount(visible)
    })

    // Generate objects in a grid
    const objects: { position: [number, number, number]; color: number }[] = []
    for (let x = -10; x <= 10; x += 2) {
        for (let y = -10; y <= 10; y += 2) {
            for (let z = -10; z <= 10; z += 2) {
                objects.push({
                    position: [x, y, z],
                    color: new Color().setHSL((x + 10) / 20, 0.7, 0.5).getHex()
                })
            }
        }
    }

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x0a0a0a)}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 10, 5]} intensity={1} />

                {/* Grid of objects */}
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

                {/* Visibility indicator sphere */}
                <mesh position={[0, 0, 0]}>
                    <sphereGeometry args={[0.5, 16, 16]} />
                    <meshBasicMaterial color={0xff0000} wireframe />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 0, 20]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default Culling
