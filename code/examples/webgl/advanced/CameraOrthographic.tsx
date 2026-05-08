/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, OrthographicCamera, Mesh, Group } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/ConeGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/OrthographicCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_advanced_camera_orthographic from Three.js examples.
 * Demonstrates orthographic camera projection.
 *
 * Source: https://threejs.org/examples/webgl_advanced_camera_orthographic.html
 *
 * Key features:
 * - Orthographic projection (no perspective)
 * - Zoom controls
 * - Isometric-like view
 */

const frustumSize = 10

export const CameraOrthographic = () => {
    const aspect = window.innerWidth / window.innerHeight

    useFrame(({ clock }) => {
        // Animation could go here
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x333333)}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 10, 7]} intensity={1} />

                {/* Grid of objects */}
                {Array.from({ length: 5 }, (_, i) =>
                    Array.from({ length: 5 }, (_, j) => (
                        <mesh
                            key={`${i}-${j}`}
                            position={[(i - 2) * 2, 0.5, (j - 2) * 2]}
                        >
                            <boxGeometry args={[1, 1, 1]} />
                            <meshStandardMaterial
                                color={new Color().setHSL((i * 5 + j) / 25, 0.7, 0.5)}
                            />
                        </mesh>
                    ))
                )}

                {/* Floor grid */}
                <gridHelper args={[20, 20, 0x666666, 0x444444]} />
            </scene>

            <orthographicCamera
                left={frustumSize * aspect / -2}
                right={frustumSize * aspect / 2}
                top={frustumSize / 2}
                bottom={frustumSize / -2}
                near={0.1}
                far={100}
                position={[10, 10, 10]}
            />

            <orbitControls enableDamping enableRotate />
        </canvas3D>
    )
}

export default CameraOrthographic
