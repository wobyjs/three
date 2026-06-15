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
import '@woby/three/src/lights/SpotLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_loader_md2 from Three.js examples.
 * Demonstrates MD2 (Quake 2) character model loading.
 *
 * Source: https://threejs.org/examples/webgl_loader_md2.html
 */

export const LoaderMD2 = () => {
    const groupRef = $<THREE.Group>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const group = $$(groupRef)
        if (group) {
            group.rotation.y = time * 0.5
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} shadowMap-enabled />
            <scene background={new THREE.Color(0x050505)} fog={new THREE.Fog(0x050505, 2.5, 10)}>
                <ambientLight color={0x666666} />
                <spotLight color={0xffffff} intensity={150} position={[2, 5, 10]} angle={0.5} penumbra={0.5} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
                <spotLight color={0xffffff} intensity={150} position={[-1, 3.5, 3.5]} angle={0.5} penumbra={0.5} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />

                {/* Ground */}
                <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                    <planeGeometry args={[20, 20]} />
                    <meshPhongMaterial color={0xffffff} />
                </mesh>

                {/* MD2 character placeholder */}
                <group ref={groupRef} scale={[0.03, 0.03, 0.03]} position={[0, 0, 0]}>
                    {/* Body */}
                    <mesh position={[0, 50, 0]} castShadow>
                        <capsuleGeometry args={[13, 33, 8, 16]} />
                        <meshStandardMaterial color={0x4488ff} />
                    </mesh>

                    {/* Head */}
                    <mesh position={[0, 83, 0]} castShadow>
                        <sphereGeometry args={[12, 16, 16]} />
                        <meshStandardMaterial color={0xffcc88} />
                    </mesh>

                    {/* Arms */}
                    <mesh position={[-20, 50, 0]} rotation={[0, 0, 0.3]} castShadow>
                        <capsuleGeometry args={[3, 20, 4, 8]} />
                        <meshStandardMaterial color={0x4488ff} />
                    </mesh>
                    <mesh position={[20, 50, 0]} rotation={[0, 0, -0.3]} castShadow>
                        <capsuleGeometry args={[3, 20, 4, 8]} />
                        <meshStandardMaterial color={0x4488ff} />
                    </mesh>

                    {/* Legs */}
                    <mesh position={[-7, 13, 0]} castShadow>
                        <capsuleGeometry args={[4, 27, 4, 8]} />
                        <meshStandardMaterial color={0x333366} />
                    </mesh>
                    <mesh position={[7, 13, 0]} castShadow>
                        <capsuleGeometry args={[4, 27, 4, 8]} />
                        <meshStandardMaterial color={0x333366} />
                    </mesh>
                </group>
            </scene>

            <perspectiveCamera fov={40} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 2, 4]} />
            <orbitControls target={[0, 0.5, 0]} />
        </canvas3D>
    )
}

export default LoaderMD2