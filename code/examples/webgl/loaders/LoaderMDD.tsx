/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import * as THREE from 'three'

import '@woby/three/src/materials/MeshNormalMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_loader_mdd from Three.js examples.
 * Demonstrates MDD (Motion Designer Document) morph target animation.
 *
 * Source: https://threejs.org/examples/webgl_loader_mdd.html
 */

export const LoaderMDD = () => {
    const meshRef = $<THREE.Mesh>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const mesh = $$(meshRef)
        if (mesh && mesh.morphTargetInfluences) {
            // Animate morph targets
            mesh.morphTargetInfluences[0] = Math.sin(time) * 0.5 + 0.5
            mesh.morphTargetInfluences[1] = Math.cos(time) * 0.5 + 0.5
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene>
                {/* MDD morph target animation placeholder */}
                <mesh ref={meshRef} position={[0, 0, 0]}>
                    <boxGeometry args={[2, 2, 2, 32, 32, 32]} />
                    <meshNormalMaterial morphTargets />
                </mesh>
            </scene>

            <perspectiveCamera fov={35} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[8, 8, 8]} />
            <orbitControls target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default LoaderMDD