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
 * Port of webgl_loader_lwo from Three.js examples.
 * Demonstrates LWO (LightWave) model loading.
 *
 * Source: https://threejs.org/examples/webgl_loader_lwo.html
 */

export const LoaderLWO = () => {
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
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} toneMapping={THREE.ACESFilmicToneMapping} />
            <scene background={new THREE.Color(0xa0a0a0)}>
                <ambientLight color={0xbbbbbb} />
                <directionalLight color={0xc1c1c1} intensity={3} position={[0, 200, -100]} />

                {/* Grid */}
                <gridHelper args={[200, 20, 0x000000, 0x000000]} material-opacity={0.3} material-transparent />

                {/* LWO model placeholder */}
                <group ref={groupRef}>
                    {/* Body */}
                    <mesh position={[0, 12, 0]}>
                        <capsuleGeometry args={[1, 2, 8, 16]} />
                        <meshStandardMaterial color={0x4488ff} />
                    </mesh>

                    {/* Head */}
                    <mesh position={[0, 14, 0]}>
                        <sphereGeometry args={[0.6, 16, 16]} />
                        <meshStandardMaterial color={0xffcc88} />
                    </mesh>
                </group>
            </scene>

            <perspectiveCamera fov={45} aspect={window.innerWidth / window.innerHeight} near={1} far={200} position={[0.7, 14.6, -43.2]} />
            <orbitControls target={[-1.33, 10, 6.7]} />
        </canvas3D>
    )
}

export default LoaderLWO