/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, ACESFilmicToneMapping } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/CylinderGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/materials/MeshPhysicalMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_materials_car from Three.js examples.
 * Demonstrates car paint material with clearcoat.
 *
 * Source: https://threejs.org/examples/webgl_materials_car.html
 */

export const MaterialsCar = () => {
    const carRef = $<THREE.Group>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const car = $$(carRef)
        if (car) car.rotation.y = time * 0.2
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} toneMapping={ACESFilmicToneMapping} />
            <scene background={new Color(0x1a1a1a)}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
                <directionalLight position={[-5, 5, -5]} intensity={0.5} />

                <group ref={carRef}>
                    <mesh position={[0, 0.5, 0]} castShadow>
                        <boxGeometry args={[3, 0.8, 1.5]} />
                        <meshPhysicalMaterial color={0xff0000} metalness={0.9} roughness={0.1} clearcoat={1} clearcoatRoughness={0.05} />
                    </mesh>
                    <mesh position={[0, 1, 0]} castShadow>
                        <boxGeometry args={[1.5, 0.5, 1.3]} />
                        <meshPhysicalMaterial color={0xff0000} metalness={0.9} roughness={0.1} clearcoat={1} clearcoatRoughness={0.05} />
                    </mesh>
                    {[[-1, 0, 0.8], [1, 0, 0.8], [-1, 0, -0.8], [1, 0, -0.8]].map((pos, i) => (
                        <mesh key={i} position={pos as [number, number, number]} rotation={[0, 0, Math.PI / 2]}>
                            <cylinderGeometry args={[0.3, 0.3, 0.2, 16]} />
                            <meshStandardMaterial color={0x111111} roughness={0.8} />
                        </mesh>
                    ))}
                    <mesh position={[-1.4, 0.5, 0.5]}>
                        <sphereGeometry args={[0.15, 8, 8]} />
                        <meshBasicMaterial color={0xffffcc} />
                    </mesh>
                    <mesh position={[-1.4, 0.5, -0.5]}>
                        <sphereGeometry args={[0.15, 8, 8]} />
                        <meshBasicMaterial color={0xffffcc} />
                    </mesh>
                </group>

                <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                    <planeGeometry args={[30, 30]} />
                    <meshStandardMaterial color={0x222222} roughness={0.9} />
                </mesh>
            </scene>

            <perspectiveCamera fov={45} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[6, 4, 10]} />
            <orbitControls enableDamping target={[0, 0.5, 0]} />
        </canvas3D>
    )
}

export default MaterialsCar