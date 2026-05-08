/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, Vector3, CatmullRomCurve3, Line, BufferGeometry, Float32BufferAttribute, LineBasicMaterial } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/materials/MeshPhongMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_misc_rollercoaster from Three.js examples.
 * Demonstrates procedural geometry generation for a roller coaster track.
 *
 * Source: https://threejs.org/examples/misc_rollercoaster.html
 *
 * Key features:
 * - CatmullRomCurve3 for smooth track path
 * - Procedural track geometry
 * - Animated camera following track
 */

// Generate control points for the track
function generateTrackPoints(): Vector3[] {
    const points: Vector3[] = []
    for (let i = 0; i < 20; i++) {
        const t = i / 20
        const x = (t - 0.5) * 40
        const y = Math.sin(t * Math.PI * 4) * 5 + 5
        const z = Math.cos(t * Math.PI * 2) * 10
        points.push(new Vector3(x, y, z))
    }
    return points
}

export const RollerCoaster = () => {
    const trackRef = $<THREE.Line>()
    const cartRef = $<THREE.Mesh>()
    const progress = $(0)
    const curve = new CatmullRomCurve3(generateTrackPoints(), true)

    useFrame((state) => {
        const delta = state.clock?.getDelta() ?? 0.016
        progress(($$(progress) + delta * 0.05) % 1)

        // Update cart position along curve
        const cart = $$(cartRef)
        if (cart) {
            const t = $$(progress)
            const position = curve.getPointAt(t)
            const tangent = curve.getTangentAt(t)

            cart.position.copy(position)
            cart.lookAt(position.clone().add(tangent))
        }
    })

    // Create track geometry
    const trackPoints = curve.getPoints(200)
    const trackGeometry = new BufferGeometry().setFromPoints(trackPoints)

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x87ceeb)}>
                <ambientLight intensity={0.6} />
                <directionalLight position={[10, 20, 10]} intensity={1} castShadow />

                {/* Track */}
                <line ref={trackRef}>
                    <bufferGeometry args={[trackGeometry]} />
                    <lineBasicMaterial color={0x333333} linewidth={2} />
                </line>

                {/* Cart */}
                <mesh ref={cartRef} position={[0, 5, 0]}>
                    <boxGeometry args={[1, 0.5, 2]} />
                    <meshStandardMaterial color={0xff0000} />
                </mesh>

                {/* Ground */}
                <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                    <boxGeometry args={[100, 100, 0.1]} />
                    <meshPhongMaterial color={0x228b22} />
                </mesh>

                {/* Support pillars */}
                {Array.from({ length: 10 }, (_, i) => {
                    const t = i / 10
                    const pos = curve.getPointAt(t)
                    return (
                        <mesh key={i} position={[pos.x, pos.y / 2, pos.z]}>
                            <boxGeometry args={[0.3, pos.y, 0.3]} />
                            <meshStandardMaterial color={0x666666} />
                        </mesh>
                    )
                })}
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={1000} position={[0, 15, 30]} />
            <orbitControls enableDamping target={[0, 5, 0]} />
        </canvas3D>
    )
}

export default RollerCoaster
