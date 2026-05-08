/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, PCDLoader, ACESFilmicToneMapping, Box3, Vector3 } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/materials/PointsMaterial'
import '@woby/three/src/objects/Points'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_loader_pcd from Three.js examples.
 * Demonstrates PCD point cloud loading.
 *
 * Source: https://threejs.org/examples/webgl_loader_pcd.html
 *
 * Key features:
 * - PCDLoader for point cloud data
 * - Points rendering
 * - Point cloud visualization
 */

export const PCD = () => {
    const pointsRef = $<THREE.Points>()

    useEffect(() => {
        const loader = new PCDLoader()

        loader.load(
            'https://threejs.org/examples/models/pcd/binary/Zaghetto.pcd',
            (points) => {
                // Center the point cloud
                const box = new Box3().setFromObject(points)
                const center = box.getCenter(new Vector3())
                points.position.sub(center)

                // Scale if needed
                const size = box.getSize(new Vector3())
                const maxDim = Math.max(size.x, size.y, size.z)
                const scale = 2 / maxDim
                points.scale.setScalar(scale)

                pointsRef(points)
            },
            (progress) => {
                console.log(`Loading: ${(progress.loaded / progress.total * 100).toFixed(1)}%`)
            },
            (error) => {
                console.error('Error loading PCD:', error)
            }
        )
    })

    useFrame(() => {
        const points = $$(pointsRef)
        if (points) {
            points.rotation.y += 0.003
        }
    })

    return (
        <canvas3D>
            <webGLRenderer
                antialias
                setPixelRatio={[window.devicePixelRatio]}
                setSize={[window.innerWidth, window.innerHeight]}
                toneMapping={ACESFilmicToneMapping}
            />
            <scene background={new Color(0x000000)}>
                {/* PCD point cloud */}
                {() => {
                    const points = $$(pointsRef)
                    return points ? <primitive object={points} /> : null
                }}
            </scene>

            <perspectiveCamera
                fov={50}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[0, 0, 4]}
            />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default PCD
