/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, LOD } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/objects/LOD'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_lod from Three.js examples.
 * Demonstrates Level of Detail (LOD) for performance optimization.
 *
 * Source: https://threejs.org/examples/webgl_lod.html
 */

export const LOD = () => {
    const lodRef = $<THREE.LOD>()

    // Create LOD levels
    useEffect(() => {
        const lod = new THREE.LOD()

        // High detail sphere (close)
        const highDetail = new THREE.Mesh(
            new THREE.SphereGeometry(1, 32, 32),
            new THREE.MeshStandardMaterial({ color: 0xff6b6b, roughness: 0.3, metalness: 0.7 })
        )
        lod.addLevel(highDetail, 0)

        // Medium detail sphere (medium distance)
        const mediumDetail = new THREE.Mesh(
            new THREE.SphereGeometry(1, 16, 16),
            new THREE.MeshStandardMaterial({ color: 0xff6b6b, roughness: 0.3, metalness: 0.7 })
        )
        lod.addLevel(mediumDetail, 5)

        // Low detail sphere (far distance)
        const lowDetail = new THREE.Mesh(
            new THREE.SphereGeometry(1, 8, 8),
            new THREE.MeshStandardMaterial({ color: 0xff6b6b, roughness: 0.3, metalness: 0.7 })
        )
        lod.addLevel(lowDetail, 10)

        lodRef(lod)
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 10, 5]} intensity={1} />

                {/* LOD object */}
                {() => {
                    const lod = $$(lodRef)
                    return lod ? <primitive object={lod} /> : null
                }}

                {/* Floor */}
                <mesh position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <boxGeometry args={[20, 20, 0.1]} />
                    <meshStandardMaterial color={0x333333} roughness={0.8} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 2, 15]} />
            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default LOD