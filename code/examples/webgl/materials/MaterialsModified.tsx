/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/CylinderGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/TorusKnotGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/materials/MeshNormalMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_materials_modified from Three.js examples.
 * Demonstrates modified/extended materials with custom behaviors.
 *
 * Source: https://threejs.org/examples/webgl_materials_modified.html
 */

export const MaterialsModified = () => {
    const mesh1Ref = $<THREE.Mesh>()
    const mesh2Ref = $<THREE.Mesh>()
    const mesh3Ref = $<THREE.Mesh>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0

        const m1 = $$(mesh1Ref)
        const m2 = $$(mesh2Ref)
        const m3 = $$(mesh3Ref)

        if (m1) m1.rotation.y = time * 0.5
        if (m2) m2.rotation.x = time * 0.3
        if (m3) m3.rotation.z = time * 0.4
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 10, 5]} intensity={1} />

                {/* Standard material with wireframe overlay */}
                <mesh ref={mesh1Ref} position={[-3, 0, 0]}>
                    <sphereGeometry args={[1, 32, 32]} />
                    <meshStandardMaterial
                        color={0xff6b6b}
                        roughness={0.2}
                        metalness={0.8}
                        wireframe={false}
                    />
                </mesh>

                {/* Normal material - shows surface normals as colors */}
                <mesh ref={mesh2Ref} position={[0, 0, 0]}>
                    <torusKnotGeometry args={[0.7, 0.2, 100, 16]} />
                    <meshNormalMaterial />
                </mesh>

                {/* Wireframe material */}
                <mesh ref={mesh3Ref} position={[3, 0, 0]}>
                    <sphereGeometry args={[1, 16, 16]} />
                    <meshStandardMaterial color={0x4ecdc4} wireframe roughness={0.5} />
                </mesh>

                {/* Floor */}
                <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <boxGeometry args={[15, 15, 0.1]} />
                    <meshStandardMaterial color={0x222222} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 3, 8]} />
            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default MaterialsModified