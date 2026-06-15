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
import '@woby/three/src/lights/PointLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_lights_spotlights from Three.js examples.
 * Multiple spotlights.
 *
 * Source: https://threejs.org/examples/webgl_lights_spotlights.html
 */

export const LightsSpotlights = () => {
    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
    })

    return (
        <canvas3D>
            <webGLRenderer antialias shadowMap setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <spotLight position={[0, 5, 0]} angle={Math.PI / 4} penumbra={0.5} intensity={1} castShadow />
                <spotLight position={[5, 5, 0]} angle={Math.PI / 4} penumbra={0.5} intensity={1} />
                <spotLight position={[-5, 5, 0]} angle={Math.PI / 4} penumbra={0.5} intensity={1} />

                <mesh position={[0, 0, 0]}>
                    <boxGeometry args={[2, 2, 2]} />
                    <meshStandardMaterial color={0x4ecdc4} />
                </mesh>

                <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <planeGeometry args={[10, 10]} />
                    <meshStandardMaterial color={0x333333} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 3, 5]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default LightsSpotlights