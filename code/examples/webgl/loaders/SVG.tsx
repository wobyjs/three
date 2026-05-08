/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, SVGLoader, ACESFilmicToneMapping, Box3, Vector3, ShapeGeometry, MeshBasicMaterial, DoubleSide } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/materials/MeshBasicMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_loader_svg from Three.js examples.
 * Demonstrates SVG vector graphics loading.
 *
 * Source: https://threejs.org/examples/webgl_loader_svg.html
 *
 * Key features:
 * - SVGLoader for SVG files
 * - ShapeGeometry from SVG paths
 * - Vector graphics in 3D
 */

export const SVG = () => {
    const groupRef = $<THREE.Group>()

    useEffect(() => {
        const loader = new SVGLoader()

        loader.load(
            'https://threejs.org/examples/models/svg/hexagon.svg',
            (data) => {
                const group = new THREE.Group()
                group.scale.multiplyScalar(0.01)
                group.position.x = -50
                group.position.y = -50

                const paths = data.paths

                paths.forEach((path) => {
                    const shapes = SVGLoader.createShapes(path)

                    shapes.forEach((shape) => {
                        const geometry = new ShapeGeometry(shape)
                        const material = new MeshBasicMaterial({
                            color: path.userData?.style?.fill || 0xffffff,
                            side: DoubleSide,
                            transparent: true,
                            opacity: path.userData?.style?.fillOpacity || 1
                        })

                        const mesh = new THREE.Mesh(geometry, material)
                        group.add(mesh)
                    })
                })

                // Center the group
                const box = new Box3().setFromObject(group)
                const center = box.getCenter(new Vector3())
                group.position.sub(center)

                groupRef(group)
            },
            (progress) => {
                console.log(`Loading: ${(progress.loaded / progress.total * 100).toFixed(1)}%`)
            },
            (error) => {
                console.error('Error loading SVG:', error)
            }
        )
    })

    useFrame(() => {
        const group = $$(groupRef)
        if (group) {
            group.rotation.y += 0.005
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
            <scene background={new Color(0x1a1a2e)}>
                {/* SVG model */}
                {() => {
                    const group = $$(groupRef)
                    return group ? <primitive object={group} /> : null
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

export default SVG
