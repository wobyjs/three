/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, WireframeGeometry2, LineMaterial } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/IcosahedronGeometry'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_lines_wireframe from Three.js examples.
 * Demonstrates wireframe rendering with wide lines.
 *
 * Source: https://threejs.org/examples/webgl_lines_wireframe.html
 *
 * Key features:
 * - WireframeGeometry2 for efficient wireframe
 * - LineMaterial for wide wireframe lines
 * - Animated geometry subdivision
 */

export const Wireframe = () => {
    const wireframeRef = $<THREE.LineSegments2>()
    const detail = $(1)

    useEffect(() => {
        const createWireframe = () => {
            const geometry = new THREE.IcosahedronGeometry(5, $$(detail))
            const wireframeGeometry = new WireframeGeometry2(geometry)

            const material = new LineMaterial({
                color: 0x4ecdc4,
                linewidth: 2,
                worldUnits: false
            })
            material.resolution.set(window.innerWidth, window.innerHeight)

            const wireframe = new THREE.LineSegments2(wireframeGeometry, material)
            wireframeRef(wireframe as unknown as THREE.LineSegments2)
        }

        createWireframe()

        const onResize = () => {
            const wireframe = $$(wireframeRef)
            if (wireframe && wireframe.material) {
                (wireframe.material as LineMaterial).resolution.set(window.innerWidth, window.innerHeight)
            }
        }
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    })

    useFrame((state) => {
        const wireframe = $$(wireframeRef)
        if (wireframe) {
            wireframe.rotation.x = (state.clock?.getElapsedTime() ?? 0) * 0.2
            wireframe.rotation.y = (state.clock?.getElapsedTime() ?? 0) * 0.3
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x111111)}>
                {/* Wireframe mesh */}
                {() => {
                    const wireframe = $$(wireframeRef)
                    if (!wireframe) return null
                    return <primitive object={wireframe} />
                }}
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 0, 15]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default Wireframe
