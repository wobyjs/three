/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_lights_rectarealight

import { $, $$, useFrame } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, RectAreaLightUniformsLib } from 'three'
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

// Initialize RectAreaLight uniforms
RectAreaLightUniformsLib.init()

/**
 * Port of webgl_lights_rectarealight from Three.js examples.
 * Demonstrates rectangular area lights for soft, realistic lighting.
 *
 * Source: https://threejs.org/examples/webgl_lights_rectarealight.html
 *
 * Key features:
 * - Multiple RectAreaLights for soft shadows
 * - PBR materials
 * - Animated light positions
 */

export const WebglLightsRectarealight = () => {
    const light1Ref = $<THREE.RectAreaLight>()
    const light2Ref = $<THREE.RectAreaLight>()
    const sphereRef = $<THREE.Mesh>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0

        const light1 = $$(light1Ref)
        const light2 = $$(light2Ref)
        const sphere = $$(sphereRef)

        if (light1 && light2) {
            light1.position.x = Math.sin(time * 0.5) * 3
            light1.position.z = Math.cos(time * 0.5) * 3
            light2.position.x = Math.sin(time * 0.5 + Math.PI) * 3
            light2.position.z = Math.cos(time * 0.5 + Math.PI) * 3
        }
        if (sphere) {
            sphere.rotation.y = time * 0.2
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x111111)}>
                <ambientLight intensity={0.1} />

                {/* RectAreaLight - warm */}
                <rectAreaLight
                    ref={light1Ref}
                    color={0xff8800}
                    intensity={5}
                    width={3}
                    height={3}
                    position={[-3, 5, -3]}
                    rotation={[-Math.PI / 3, Math.PI / 4, 0]}
                />

                {/* RectAreaLight - cool */}
                <rectAreaLight
                    ref={light2Ref}
                    color={0x0088ff}
                    intensity={5}
                    width={3}
                    height={3}
                    position={[3, 5, 3]}
                    rotation={[-Math.PI / 3, -Math.PI / 4, 0]}
                />

                {/* Central sphere */}
                <mesh ref={sphereRef} position={[0, 1, 0]}>
                    <sphereGeometry args={[1.5, 32, 32]} />
                    <meshStandardMaterial
                        color={0xffffff}
                        roughness={0.3}
                        metalness={0.7}
                    />
                </mesh>

                {/* Floor */}
                <mesh position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <planeGeometry args={[10, 10]} />
                    <meshStandardMaterial color={0x444444} roughness={0.8} />
                </mesh>
            </scene>

            <perspectiveCamera fov={50} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[5, 5, 5]} />
            <orbitControls enableDamping target={[0, 1, 0]} />
        </canvas3D>
    )
}

export default WebglLightsRectarealight