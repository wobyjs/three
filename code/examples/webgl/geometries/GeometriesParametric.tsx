/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, ParametricGeometry, ParametricGeometries } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/TorusGeometry'
import '@woby/three/src/geometries/TorusKnotGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_geometries_parametric from Three.js examples.
 * Demonstrates parametric geometry generation (Klein bottle, Mobius strip, etc).
 *
 * Source: https://threejs.org/examples/webgl_geometries_parametric.html
 *
 * Features:
 * - Mathematical surface generation
 * - Klein bottle, Mobius strip, Torus knot
 */

// Parametric functions
const klein = (u: number, v: number, target: THREE.Vector3) => {
    u *= Math.PI
    v *= 2 * Math.PI

    u = u * 2
    let x, y, z
    if (u < Math.PI) {
        x = 3 * Math.cos(u) * (1 + Math.sin(u)) + (2 * (1 - Math.cos(u) / 2)) * Math.cos(u) * Math.cos(v)
        z = -8 * Math.sin(u) - 2 * (1 - Math.cos(u) / 2) * Math.sin(u) * Math.cos(v)
    } else {
        x = 3 * Math.cos(u) * (1 + Math.sin(u)) + (2 * (1 - Math.cos(u) / 2)) * Math.cos(v + Math.PI)
        z = -8 * Math.sin(u)
    }
    y = -2 * (1 - Math.cos(u) / 2) * Math.sin(v)

    target.set(x, y, z).multiplyScalar(0.1)
}

const mobius = (u: number, v: number, target: THREE.Vector3) => {
    // flat mobius strip
    // http://www.wolframalpha.com/input/?i=Mobius+strip+parametric+equations&lk=1
    u = u - 0.5
    v = v * 2 * Math.PI

    const x = Math.cos(v) * (1 + u * Math.cos(v / 2))
    const y = Math.sin(v) * (1 + u * Math.cos(v / 2))
    const z = u * Math.sin(v / 2)

    target.set(x, y, z).multiplyScalar(2)
}

const torusKnot = (u: number, v: number, target: THREE.Vector3) => {
    u = u * 2 * Math.PI
    v = v * 2 * Math.PI

    const p = 3
    const q = 2
    const r = 2

    const x = (2 + Math.cos(q * u / p)) * Math.cos(u) + r * Math.cos(q * u + v)
    const y = (2 + Math.cos(q * u / p)) * Math.sin(u) + r * Math.sin(q * u + v)
    const z = Math.sin(q * u / p) + r * Math.sin(v)

    target.set(x, y, z).multiplyScalar(0.5)
}

export const GeometriesParametric = () => {
    const kleinRef = $<THREE.Mesh>()
    const mobiusRef = $<THREE.Mesh>()
    const torusKnotRef = $<THREE.Mesh>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0

        const klein = $$(kleinRef)
        const mobius = $$(mobiusRef)
        const torusKnot = $$(torusKnotRef)

        if (klein) {
            klein.rotation.y = time * 0.3
            klein.rotation.x = time * 0.1
        }
        if (mobius) {
            mobius.rotation.y = time * 0.3
            mobius.rotation.x = time * 0.1
        }
        if (torusKnot) {
            torusKnot.rotation.y = time * 0.3
            torusKnot.rotation.x = time * 0.1
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x0a0a0a)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 10, 7]} intensity={1} />

                {/* Klein bottle */}
                <mesh ref={kleinRef} position={[-4, 0, 0]}>
                    <parametricGeometry args={[klein, 50, 50]} />
                    <meshStandardMaterial color={0xff6b6b} roughness={0.3} metalness={0.7} side={THREE.DoubleSide} />
                </mesh>

                {/* Mobius strip */}
                <mesh ref={mobiusRef} position={[0, 0, 0]}>
                    <parametricGeometry args={[mobius, 50, 50]} />
                    <meshStandardMaterial color={0x4ecdc4} roughness={0.3} metalness={0.7} side={THREE.DoubleSide} />
                </mesh>

                {/* Torus knot */}
                <mesh ref={torusKnotRef} position={[4, 0, 0]}>
                    <parametricGeometry args={[torusKnot, 100, 20]} />
                    <meshStandardMaterial color={0xffe66d} roughness={0.3} metalness={0.7} side={THREE.DoubleSide} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 0, 10]} />

            <orbitControls enableDamping autoRotate autoRotateSpeed={0.5} />
        </canvas3D>
    )
}

export default GeometriesParametric