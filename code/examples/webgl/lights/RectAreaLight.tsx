/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, RectAreaLightUniformsLib, RectAreaLightHelper } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/PlaneGeometry'
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/RectAreaLight'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_lights_rectarealight from Three.js examples.
 * Demonstrates rectangular area lights for soft, realistic lighting.
 *
 * Source: https://threejs.org/examples/webgl_lights_rectarealight.html
 *
 * Key features:
 * - RectAreaLight for soft shadows
 * - Light helper visualization
 * - PBR materials
 */

export const RectAreaLightExample = () => {
    const lightRef = $<THREE.RectAreaLight>()
    const helperRef = $<RectAreaLightHelper>()

    // Initialize RectAreaLightUniformsLib
    useFrame(() => {
        const light = $$(lightRef)
        const helper = $$(helperRef)
        if (helper && light) {
            helper.update()
        }
    })

    return (
        <canvas3D>
            <webGLRenderer
                antialias
                setPixelRatio={[window.devicePixelRatio]}
                setSize={[window.innerWidth, window.innerHeight]}
            />
            <scene background={new Color(0x111111)}>
                <ambientLight intensity={0.1} />

                {/* RectAreaLight - soft rectangular light source */}
                <rectAreaLight
                    ref={lightRef}
                    color={0xffffff}
                    intensity={5}
                    width={4}
                    height={4}
                    position={[0, 5, 0]}
                    lookAt={[0, 0, 0]}
                />

                {/* Central sphere */}
                <mesh position={[0, 1, 0]}>
                    <sphereGeometry args={[1, 64, 64]} />
                    <meshStandardMaterial color={0xffffff} roughness={0.3} metalness={0.5} />
                </mesh>

                {/* Ground plane */}
                <mesh rotation={[-Math.PI / 2, 0, 0]}>
                    <planeGeometry args={[20, 20]} />
                    <meshStandardMaterial color={0x333333} roughness={0.8} />
                </mesh>

                {/* Side walls for light bounce */}
                <mesh position={[0, 2, -5]}>
                    <boxGeometry args={[10, 4, 0.1]} />
                    <meshStandardMaterial color={0x444444} roughness={0.9} />
                </mesh>
            </scene>

            <perspectiveCamera
                fov={50}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[5, 5, 5]}
            />
            <orbitControls target={[0, 1, 0]} enableDamping />
        </canvas3D>
    )
}

export default RectAreaLightExample
