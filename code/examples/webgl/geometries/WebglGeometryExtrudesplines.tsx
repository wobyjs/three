/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from "@woby/three"
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
 * Port of webgl_geometry_extrude_splines from Three.js examples.
 * Demonstrates extruding along spline curves to create tubes.
 *
 * Source: https://threejs.org/examples/webgl_geometry_extrude_splines.html
 *
 * Features:
 * - Spline curve creation
 * - Tube geometry along curves
 * - Animated camera following spline
 */

export const WebglGeometryExtrudesplines = () => {
    const tubeRef = $<THREE.Mesh>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const tube = $$(tubeRef)
        if (tube) {
            tube.rotation.y = time * 0.1
        }
    })

    // Create a 3D spline curve
    const points = []
    for (let i = 0; i < 10; i++) {
        const t = i / 9
        points.push(new THREE.Vector3(
            Math.sin(t * Math.PI * 4) * 3,
            Math.cos(t * Math.PI * 2) * 2,
            t * 8 - 4
        ))
    }

    const curve = new THREE.CatmullRomCurve3(points)
    const tubeGeometry = new THREE.TubeGeometry(curve, 100, 0.3, 16, false)

    // Create a helix curve
    const helixPoints = []
    for (let i = 0; i < 100; i++) {
        const t = i / 99
        helixPoints.push(new THREE.Vector3(
            Math.cos(t * Math.PI * 8) * 2,
            t * 6 - 3,
            Math.sin(t * Math.PI * 8) * 2
        ))
    }

    const helixCurve = new THREE.CatmullRomCurve3(helixPoints)
    const helixGeometry = new THREE.TubeGeometry(helixCurve, 200, 0.1, 8, false)

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x0a0a0a)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 10, 7]} intensity={1} />

                {/* Main tube along spline */}
                <mesh ref={tubeRef} geometry={tubeGeometry} position={[-3, 0, 0]}>
                    <meshStandardMaterial color={0xff6b6b} roughness={0.3} metalness={0.7} />
                </mesh>

                {/* Helix tube */}
                <mesh geometry={helixGeometry} position={[3, 0, 0]}>
                    <meshStandardMaterial color={0x4ecdc4} roughness={0.3} metalness={0.7} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 5, 15]} />

            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default WebglGeometryExtrudesplines