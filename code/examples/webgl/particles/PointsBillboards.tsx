/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'
import * as THREE from 'three'

import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_points_billboards from Three.js examples.
 * Demonstrates point sprites with billboard effect.
 *
 * Source: https://threejs.org/examples/webgl_points_billboards.html
 */

export const PointsBillboards = () => {
    const pointsRef = $<THREE.Points>()
    const count = 1000

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const points = $$(pointsRef)
        
        if (points) {
            const positions = points.geometry.attributes.position.array as Float32Array
            for (let i = 0; i < count; i++) {
                const i3 = i * 3
                positions[i3 + 1] = Math.sin(time + i * 0.1) * 2
            }
            points.geometry.attributes.position.needsUpdate = true
        }
    })

    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 10
        positions[i * 3 + 1] = Math.random() * 5
        positions[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x0a0a0a)}>
                <points ref={pointsRef} geometry={geometry}>
                    <pointsMaterial color={0x4ecdc4} size={0.1} sizeAttenuation />
                </points>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 5, 10]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default PointsBillboards