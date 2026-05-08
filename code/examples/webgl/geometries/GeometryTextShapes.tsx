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
 * Port of webgl_geometry_text_shapes from Three.js examples.
 * Demonstrates text created from 2D shapes.
 *
 * Source: https://threejs.org/examples/webgl_geometry_text_shapes.html
 *
 * Features:
 * - Text from shapes
 * - Multiple shape-based letters
 */

export const GeometryTextShapes = () => {
    const groupRef = $<THREE.Group>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const group = $$(groupRef)
        if (group) {
            group.rotation.y = time * 0.2
        }
    })

    // Create letter shapes
    const createLetterA = () => {
        const shape = new THREE.Shape()
        shape.moveTo(0, 0)
        shape.lineTo(0.3, 1)
        shape.lineTo(0.6, 0)
        shape.lineTo(0.45, 0)
        shape.lineTo(0.4, 0.2)
        shape.lineTo(0.2, 0.2)
        shape.lineTo(0.15, 0)
        shape.closePath()
        return shape
    }

    const createLetterB = () => {
        const shape = new THREE.Shape()
        shape.moveTo(0, 0)
        shape.lineTo(0, 1)
        shape.lineTo(0.5, 1)
        shape.quadraticCurveTo(0.7, 1, 0.7, 0.75)
        shape.quadraticCurveTo(0.7, 0.5, 0.5, 0.5)
        shape.quadraticCurveTo(0.7, 0.5, 0.7, 0.25)
        shape.quadraticCurveTo(0.7, 0, 0.5, 0)
        shape.closePath()
        return shape
    }

    const createLetterC = () => {
        const shape = new THREE.Shape()
        shape.moveTo(0.6, 0.2)
        shape.quadraticCurveTo(0.6, 0, 0.4, 0)
        shape.quadraticCurveTo(0, 0, 0, 0.5)
        shape.quadraticCurveTo(0, 1, 0.4, 1)
        shape.quadraticCurveTo(0.6, 1, 0.6, 0.8)
        shape.lineTo(0.4, 0.8)
        shape.quadraticCurveTo(0.2, 0.8, 0.2, 0.5)
        shape.quadraticCurveTo(0.2, 0.2, 0.4, 0.2)
        shape.closePath()
        return shape
    }

    const extrudeSettings = {
        depth: 0.2,
        bevelEnabled: true,
        bevelSize: 0.02,
        bevelThickness: 0.02
    }

    const letterA = new THREE.ExtrudeGeometry(createLetterA(), extrudeSettings)
    const letterB = new THREE.ExtrudeGeometry(createLetterB(), extrudeSettings)
    const letterC = new THREE.ExtrudeGeometry(createLetterC(), extrudeSettings)

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x0a0a0a)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 10, 7]} intensity={1} />

                <group ref={groupRef}>
                    {/* Letter A */}
                    <mesh geometry={letterA} position={[-1.5, -0.5, 0]} scale={[2, 2, 2]}>
                        <meshStandardMaterial color={0xff6b6b} roughness={0.3} metalness={0.7} />
                    </mesh>

                    {/* Letter B */}
                    <mesh geometry={letterB} position={[-0.3, -0.5, 0]} scale={[2, 2, 2]}>
                        <meshStandardMaterial color={0x4ecdc4} roughness={0.3} metalness={0.7} />
                    </mesh>

                    {/* Letter C */}
                    <mesh geometry={letterC} position={[0.9, -0.5, 0]} scale={[2, 2, 2]}>
                        <meshStandardMaterial color={0xffe66d} roughness={0.3} metalness={0.7} />
                    </mesh>
                </group>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 0, 6]} />

            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default GeometryTextShapes