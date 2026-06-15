/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import * as THREE from 'three'

import '@woby/three/src/materials/MeshBasicMaterial'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_loader_svg from Three.js examples.
 * Demonstrates SVG loading and conversion to 3D shapes.
 *
 * Source: https://threejs.org/examples/webgl_loader_svg.html
 */

export const LoaderSVG = () => {
    const groupRef = $<THREE.Group>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const group = $$(groupRef)
        if (group) {
            group.rotation.z = time * 0.2
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new THREE.Color(0xb0b0b0)}>
                {/* Grid helper */}
                <gridHelper args={[160, 10, 0x8d8d8d, 0xc1c1c1]} position={[0, 70, 0]} rotation={[Math.PI / 2, 0, 0]} />

                {/* SVG shapes placeholder */}
                <group ref={groupRef} scale={0.25} position={[-70, 70, 0]}>
                    {/* Triangle */}
                    <mesh position={[0, 0, 0]}>
                        <shapeGeometry args={[new THREE.Shape().moveTo(-2, 0).lineTo(2, 0).lineTo(0, 3).closePath()]} />
                        <meshBasicMaterial color={0xff0000} side={THREE.DoubleSide} />
                    </mesh>

                    {/* Circle */}
                    <mesh position={[4, 0, 0.1]}>
                        <circleGeometry args={[1, 32]} />
                        <meshBasicMaterial color={0x00ff00} side={THREE.DoubleSide} />
                    </mesh>

                    {/* Star */}
                    <mesh position={[8, 0, 0.2]}>
                        <sphereGeometry args={[0.5, 16, 16]} />
                        <meshBasicMaterial color={0x0000ff} side={THREE.DoubleSide} />
                    </mesh>
                </group>
            </scene>

            <perspectiveCamera fov={50} aspect={window.innerWidth / window.innerHeight} near={1} far={1000} position={[0, 0, 200]} />
            <orbitControls screenSpacePanning />
        </canvas3D>
    )
}

export default LoaderSVG