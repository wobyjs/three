/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import * as THREE from 'three'

import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_loader_ifc from Three.js examples.
 * Demonstrates IFC (BIM) building model loading.
 *
 * Source: https://threejs.org/examples/webgl_loader_ifc.html
 */

export const LoaderIFC = () => {
    const buildingRef = $<THREE.Group>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const building = $$(buildingRef)
        if (building) {
            building.rotation.y = time * 0.1
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new THREE.Color(0x8cc7de)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 10, 5]} intensity={1} />

                {/* IFC building placeholder */}
                <group ref={buildingRef}>
                    {/* Back wall */}
                    <mesh position={[0, 2.5, -3]}>
                        <boxGeometry args={[10, 5, 0.2]} />
                        <meshStandardMaterial color={0xdddddd} />
                    </mesh>

                    {/* Floor */}
                    <mesh position={[0, 0, 0]}>
                        <boxGeometry args={[10, 0.2, 6]} />
                        <meshStandardMaterial color={0x886644} />
                    </mesh>

                    {/* Columns */}
                    {[-4, 0, 4].map(x =>
                        [-2, 2].map(z =>
                            <mesh key={`${x}-${z}`} position={[x, 2.5, z]}>
                                <cylinderGeometry args={[0.2, 0.2, 5, 16]} />
                                <meshStandardMaterial color={0xaaaaaa} />
                            </mesh>
                        )
                    )}
                </group>
            </scene>

            <perspectiveCamera fov={45} aspect={window.innerWidth / window.innerHeight} near={0.1} far={1000} position={[90, 25, -70]} />
            <orbitControls />
        </canvas3D>
    )
}

export default LoaderIFC