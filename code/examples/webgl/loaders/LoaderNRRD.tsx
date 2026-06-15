/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { TrackballControls } from '@woby/three/examples/jsm/controls/TrackballControls'
import * as THREE from 'three'

import '@woby/three/src/materials/MeshBasicMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/HemisphereLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_loader_nrrd from Three.js examples.
 * Demonstrates NRRD (medical imaging) volumetric data loading.
 *
 * Source: https://threejs.org/examples/webgl_loader_nrrd.html
 */

export const LoaderNRRD = () => {
    const volumeRef = $<THREE.Mesh>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const volume = $$(volumeRef)
        if (volume) {
            volume.rotation.y = time * 0.2
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene>
                <hemisphereLight color={0xffffff} groundColor={0x000000} intensity={3} />
                <directionalLight color={0xffffff} intensity={1.5} position={[200, 200, 200]} />

                {/* NRRD volumetric data placeholder */}
                <mesh ref={volumeRef}>
                    <sphereGeometry args={[100, 32, 32]} />
                    <meshBasicMaterial color={0x00ff00} transparent opacity={0.7} side={THREE.DoubleSide} />
                </mesh>

                {/* Volume bounding box */}
                <boxHelper args={[$$(volumeRef), 0x00ff00]} />
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.01} far={1e10} position={[0, 0, 300]} />
            <trackballControls minDistance={100} maxDistance={500} rotateSpeed={5.0} zoomSpeed={5} panSpeed={2} />
        </canvas3D>
    )
}

export default LoaderNRRD