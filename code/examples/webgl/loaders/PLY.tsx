/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, PLYLoader, ACESFilmicToneMapping, Box3, Vector3 } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_loader_ply from Three.js examples.
 * Demonstrates PLY point cloud and mesh loading.
 *
 * Source: https://threejs.org/examples/webgl_loader_ply.html
 *
 * Key features:
 * - PLYLoader for Stanford PLY format
 * - Point cloud rendering
 * - Vertex color support
 */

export const PLY = () => {
    const meshRef = $<THREE.Mesh>()

    useEffect(() => {
        const loader = new PLYLoader()

        loader.load(
            'https://threejs.org/examples/models/ply/ascii/dolphins.ply',
            (geometry) => {
                // Center geometry
                geometry.computeBoundingBox()
                geometry.computeVertexNormals()

                const box = geometry.boundingBox
                if (box) {
                    const center = box.getCenter(new Vector3())
                    geometry.translate(-center.x, -center.y, -center.z)
                }

                // Scale to fit
                const scale = 0.01
                geometry.scale(scale, scale, scale)

                // Create mesh
                const material = new THREE.MeshStandardMaterial({
                    color: 0x4ecdc4,
                    roughness: 0.5,
                    metalness: 0.3,
                    flatShading: true
                })

                const mesh = new THREE.Mesh(geometry, material)
                meshRef(mesh)
            },
            (progress) => {
                console.log(`Loading: ${(progress.loaded / progress.total * 100).toFixed(1)}%`)
            },
            (error) => {
                console.error('Error loading PLY:', error)
            }
        )
    })

    useFrame(() => {
        const mesh = $$(meshRef)
        if (mesh) {
            mesh.rotation.y += 0.005
        }
    })

    return (
        <canvas3D>
            <webGLRenderer
                antialias
                setPixelRatio={[window.devicePixelRatio]}
                setSize={[window.innerWidth, window.innerHeight]}
                toneMapping={ACESFilmicToneMapping}
                toneMappingExposure={1}
            />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 10, 5]} intensity={1.5} />
                <directionalLight position={[-5, 5, -5]} intensity={0.5} />

                {/* PLY model */}
                {() => {
                    const mesh = $$(meshRef)
                    return mesh ? <primitive object={mesh} /> : null
                }}
            </scene>

            <perspectiveCamera
                fov={50}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[0, 0, 5]}
            />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default PLY
