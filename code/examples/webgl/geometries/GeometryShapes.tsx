/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, Shape, ShapeGeometry, ExtrudeGeometry } from 'three'
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
 * Port of webgl_geometry_shapes from Three.js examples.
 * Demonstrates 2D shape geometry creation.
 *
 * Source: https://threejs.org/examples/webgl_geometry_shapes.html
 *
 * Features:
 * - Various 2D shapes
 * - Shape geometry and extrusion
 * - Rounded rectangles, circles, etc.
 */

export const GeometryShapes = () => {
    const meshRef = $<THREE.Mesh>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const mesh = $$(meshRef)
        if (mesh) {
            mesh.rotation.y = time * 0.3
        }
    })

    // Create rounded rectangle shape
    const roundedRect = (width: number, height: number, radius: number) => {
        const shape = new THREE.Shape()
        const x = -width / 2
        const y = -height / 2

        shape.moveTo(x + radius, y)
        shape.lineTo(x + width - radius, y)
        shape.quadraticCurveTo(x + width, y, x + width, y + radius)
        shape.lineTo(x + width, y + height - radius)
        shape.quadraticCurveTo(x + width, y + height, x + width - radius, y + height)
        shape.lineTo(x + radius, y + height)
        shape.quadraticCurveTo(x, y + height, x, y + height - radius)
        shape.lineTo(x, y + radius)
        shape.quadraticCurveTo(x, y, x + radius, y)

        return shape
    }

    // Create arrow shape
    const arrowShape = new THREE.Shape()
    arrowShape.moveTo(0, 1)
    arrowShape.lineTo(0.5, 0)
    arrowShape.lineTo(0.2, 0)
    arrowShape.lineTo(0.2, -1)
    arrowShape.lineTo(-0.2, -1)
    arrowShape.lineTo(-0.2, 0)
    arrowShape.lineTo(-0.5, 0)
    arrowShape.closePath()

    const roundedRectShape = roundedRect(2, 1.5, 0.3)
    const circleShape = new THREE.Shape()
    circleShape.absarc(0, 0, 1, 0, Math.PI * 2, false)

    const extrudeSettings = { depth: 0.3, bevelEnabled: true, bevelSize: 0.05, bevelThickness: 0.05 }

    const roundedRectGeometry = new THREE.ExtrudeGeometry(roundedRectShape, extrudeSettings)
    const circleGeometry = new THREE.ExtrudeGeometry(circleShape, { depth: 0.3, bevelEnabled: true, bevelSize: 0.05, bevelThickness: 0.05 })
    const arrowGeometry = new THREE.ExtrudeGeometry(arrowShape, { depth: 0.2, bevelEnabled: true, bevelSize: 0.02, bevelThickness: 0.02 })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x0a0a0a)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 10, 7]} intensity={1} />

                {/* Rounded rectangle */}
                <mesh ref={meshRef} geometry={roundedRectGeometry} position={[-3, 0, 0]}>
                    <meshStandardMaterial color={0xff6b6b} roughness={0.3} metalness={0.5} />
                </mesh>

                {/* Circle */}
                <mesh geometry={circleGeometry} position={[0, 0, 0]}>
                    <meshStandardMaterial color={0x4ecdc4} roughness={0.3} metalness={0.5} />
                </mesh>

                {/* Arrow */}
                <mesh geometry={arrowGeometry} position={[3, 0, 0]} scale={[1.5, 1.5, 1.5]}>
                    <meshStandardMaterial color={0xffe66d} roughness={0.3} metalness={0.5} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 0, 8]} />

            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default GeometryShapes