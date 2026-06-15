/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'
import * as THREE from 'three'

import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webxr_ar_cones from Three.js examples.
 * AR cone visualization.
 *
 * Source: https://threejs.org/examples/webxr_ar_cones.html
 */

export const ArCones = () => {
    const groupRef = $<THREE.Group>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const group = $$(groupRef)
        if (group) {
            group.rotation.y = time * 0.3
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 10, 7]} intensity={1} />

                <group ref={groupRef}>
                    <mesh position={[0, 0, 0]}>
                        <coneGeometry args={[0.5, 1, 32]} />
                        <meshStandardMaterial color={0xff6b6b} />
                    </mesh>
                    <mesh position={[1, 0, 0]}>
                        <coneGeometry args={[0.5, 1, 32]} />
                        <meshStandardMaterial color={0x4ecdc4} />
                    </mesh>
                    <mesh position={[-1, 0, 0]}>
                        <coneGeometry args={[0.5, 1, 32]} />
                        <meshStandardMaterial color={0xffd93d} />
                    </mesh>
                </group>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 1, 3]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default ArCones