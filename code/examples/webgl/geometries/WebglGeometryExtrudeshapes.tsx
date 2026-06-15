/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from "@woby/three"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, Shape, ExtrudeGeometry } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_geometry_extrude_shapes from Three.js examples.
 * Demonstrates extruding 2D shapes into 3D geometry.
 *
 * Source: https://threejs.org/examples/webgl_geometry_extrude_shapes.html
 *
 * Features:
 * - Shape definition
 * - Extrusion with bevel
 * - Multiple extruded shapes
 */

export const WebglGeometryExtrudeshapes = () => {
    const meshRef = $<THREE.Mesh>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const mesh = $$(meshRef)
        if (mesh) {
            mesh.rotation.y = time * 0.3
        }
    })

    // Create a heart shape
    const heartShape = new THREE.Shape()
    const x = 0, y = 0
    heartShape.moveTo(x + 0.5, y + 0.5)
    heartShape.bezierCurveTo(x + 0.5, y + 0.5, x + 0.4, y, x, y)
    heartShape.bezierCurveTo(x - 0.6, y, x - 0.6, y + 0.7, x - 0.6, y + 0.7)
    heartShape.bezierCurveTo(x - 0.6, y + 1.1, x - 0.35, y + 1.54, x + 0.5, y + 1.9)
    heartShape.bezierCurveTo(x + 1.35, y + 1.54, x + 1.6, y + 1.1, x + 1.6, y + 0.7)
    heartShape.bezierCurveTo(x + 1.6, y + 0.7, x + 1.6, y, x + 1, y)
    heartShape.bezierCurveTo(x + 0.7, y, x + 0.5, y + 0.5, x + 0.5, y + 0.5)

    const extrudeSettings = {
        depth: 0.4,
        bevelEnabled: true,
        bevelSegments: 2,
        steps: 2,
        bevelSize: 0.1,
        bevelThickness: 0.1
    }

    const geometry = new THREE.ExtrudeGeometry(heartShape, extrudeSettings)
    geometry.center()

    // Create a star shape
    const starShape = new THREE.Shape()
    const outerRadius = 1
    const innerRadius = 0.4
    const points = 5

    for (let i = 0; i < points * 2; i++) {
        const radius = i % 2 === 0 ? outerRadius : innerRadius
        const angle = (i / (points * 2)) * Math.PI * 2 - Math.PI / 2
        const px = Math.cos(angle) * radius
        const py = Math.sin(angle) * radius

        if (i === 0) {
            starShape.moveTo(px, py)
        } else {
            starShape.lineTo(px, py)
        }
    }
    starShape.closePath()

    const starGeometry = new THREE.ExtrudeGeometry(starShape, { depth: 0.3, bevelEnabled: true, bevelSize: 0.05, bevelThickness: 0.05 })
    starGeometry.center()

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 10, 7]} intensity={1} />

                {/* Heart shape */}
                <mesh ref={meshRef} geometry={geometry} position={[-2, 0, 0]} scale={[1.5, 1.5, 1.5]}>
                    <meshStandardMaterial color={0xff6b6b} roughness={0.3} metalness={0.5} />
                </mesh>

                {/* Star shape */}
                <mesh geometry={starGeometry} position={[2, 0, 0]} scale={[1.5, 1.5, 1.5]}>
                    <meshStandardMaterial color={0xffe66d} roughness={0.3} metalness={0.5} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 0, 8]} />

            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default WebglGeometryExtrudeshapes