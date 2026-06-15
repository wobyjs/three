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
 * Port of webgl_multiple_geometries from Three.js examples.
 * Multiple geometries in one scene.
 *
 * Source: https://threejs.org/examples/webgl_multiple_geometries.html
 */

export const MultipleGeometries = () => {
    const groupRef = $<THREE.Group>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const group = $$(groupRef)
        if (group) {
            group.rotation.y = time * 0.2
        }
    })

    const geometries = [
        { Component: 'boxGeometry', args: [0.8, 0.8, 0.8], pos: [-3, 0, 0] },
        { Component: 'sphereGeometry', args: [0.5, 32, 32], pos: [-1.5, 0, 0] },
        { Component: 'cylinderGeometry', args: [0.4, 0.4, 1, 32], pos: [0, 0, 0] },
        { Component: 'coneGeometry', args: [0.5, 1, 32], pos: [1.5, 0, 0] },
        { Component: 'torusGeometry', args: [0.4, 0.15, 16, 50], pos: [3, 0, 0] },
    ]

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 10, 7]} intensity={1} />

                <group ref={groupRef}>
                    {geometries.map((geo, i) => (
                        <mesh key={i} position={geo.pos as [number, number, number]}>
                            {geo.Component === 'boxGeometry' && <boxGeometry args={geo.args} />}
                            {geo.Component === 'sphereGeometry' && <sphereGeometry args={geo.args} />}
                            {geo.Component === 'cylinderGeometry' && <cylinderGeometry args={geo.args} />}
                            {geo.Component === 'coneGeometry' && <coneGeometry args={geo.args} />}
                            {geo.Component === 'torusGeometry' && <torusGeometry args={geo.args} />}
                            <meshStandardMaterial color={new Color().setHSL(i / 5, 0.7, 0.5)} />
                        </mesh>
                    ))}
                </group>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 2, 8]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default MultipleGeometries