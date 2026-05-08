/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, CatmullRomCurve3, TubeGeometry } from 'three'
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
 * Port of webgl_geometry_spline_editor from Three.js examples.
 * Demonstrates spline curve editing and visualization.
 *
 * Source: https://threejs.org/examples/webgl_geometry_spline_editor.html
 *
 * Features:
 * - Interactive spline curves
 * - Control point visualization
 * - Tube geometry along spline
 */

export const GeometrySplineEditor = () => {
    const tubeRef = $<THREE.Mesh>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const tube = $$(tubeRef)
        if (tube) {
            tube.rotation.y = time * 0.1
        }
    })

    // Define control points for the spline
    const controlPoints = [
        new THREE.Vector3(-5, 0, 0),
        new THREE.Vector3(-3, 2, 2),
        new THREE.Vector3(0, -1, 3),
        new THREE.Vector3(2, 3, 1),
        new THREE.Vector3(4, 0, -1),
        new THREE.Vector3(5, 1, 0)
    ]

    const curve = new THREE.CatmullRomCurve3(controlPoints)
    const tubeGeometry = new THREE.TubeGeometry(curve, 100, 0.2, 16, false)

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 10, 7]} intensity={1} />

                {/* Spline tube */}
                <mesh ref={tubeRef} geometry={tubeGeometry}>
                    <meshStandardMaterial color={0xff6b6b} roughness={0.3} metalness={0.7} />
                </mesh>

                {/* Control points */}
                {controlPoints.map((point, i) => (
                    <mesh key={i} position={[point.x, point.y, point.z]}>
                        <sphereGeometry args={[0.2, 16, 16]} />
                        <meshStandardMaterial
                            color={i === 0 || i === controlPoints.length - 1 ? 0x4ecdc4 : 0xffe66d}
                            roughness={0.3}
                            metalness={0.5}
                        />
                    </mesh>
                ))}

                {/* Lines connecting control points */}
                {controlPoints.slice(0, -1).map((point, i) => {
                    const next = controlPoints[i + 1]
                    const geometry = new THREE.BufferGeometry().setFromPoints([point, next])
                    return (
                        <line key={i} geometry={geometry}>
                            <lineBasicMaterial color={0x666666} />
                        </line>
                    )
                })}
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 5, 15]} />

            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default GeometrySplineEditor