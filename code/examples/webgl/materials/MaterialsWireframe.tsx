/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/PlaneGeometry'
import '@woby/three/src/geometries/TorusGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_materials_wireframe from Three.js examples.
 * Demonstrates wireframe rendering on various materials.
 *
 * Source: https://threejs.org/examples/webgl_materials_wireframe.html
 */

export const MaterialsWireframe = () => {
    const groupRef = $<THREE.Group>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const group = $$(groupRef)
        if (group) group.rotation.y = time * 0.3
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[10, 10, 10]} intensity={0.8} />

                <group ref={groupRef}>
                    <mesh position={[-3, 1, 0]}>
                        <boxGeometry args={[1.5, 1.5, 1.5]} />
                        <meshStandardMaterial color={0xff6b6b} wireframe roughness={0.3} />
                    </mesh>
                    <mesh position={[0, 1, 0]}>
                        <sphereGeometry args={[0.8, 16, 12]} />
                        <meshStandardMaterial color={0x4ecdc4} wireframe roughness={0.4} />
                    </mesh>
                    <mesh position={[3, 1, 0]}>
                        <torusGeometry args={[0.7, 0.3, 12, 24]} />
                        <meshStandardMaterial color={0xffe66d} wireframe roughness={0.5} />
                    </mesh>
                    <mesh position={[-1.5, -1, 0]}>
                        <sphereGeometry args={[0.7, 32, 32]} />
                        <meshStandardMaterial color={0x9b59b6} roughness={0.2} metalness={0.8} />
                    </mesh>
                    <mesh position={[1.5, -1, 0]}>
                        <planeGeometry args={[1.5, 1.5, 4, 4]} />
                        <meshStandardMaterial color={0x2ecc71} wireframe />
                    </mesh>
                </group>

                <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <planeGeometry args={[20, 20, 20, 20]} />
                    <meshStandardMaterial color={0x222222} wireframe transparent opacity={0.3} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 3, 8]} />
            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default MaterialsWireframe