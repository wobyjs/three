/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, PCFSoftShadowMap } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/PlaneGeometry'
import '@woby/three/src/materials/MeshPhongMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/PointLight'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_lights_pointlights from Three.js examples.
 * Demonstrates multiple point lights with different colors and positions.
 *
 * Source: https://threejs.org/examples/webgl_lights_pointlights.html
 *
 * Key features:
 * - Multiple colored point lights
 * - Light animation
 * - Phong material for classic lighting
 */

// Light colors for the scene
const LIGHT_COLORS = [
    0xff0040,  // Red
    0x0040ff,  // Blue
    0x40ff00,  // Green
    0xffaa00,  // Orange
    0x00ffff,  // Cyan
    0xff00ff,  // Magenta
]

export const Pointlights = () => {
    const lightRefs = Array.from({ length: 6 }, () => $<THREE.PointLight>())
    const sphereRef = $<THREE.Mesh>()

    // Animate lights
    useFrame(({ clock }) => {
        const time = clock.getElapsedTime()

        lightRefs.forEach((lightRef, i) => {
            const light = $$(lightRef)
            if (light) {
                const angle = time * 0.5 + (i * Math.PI * 2) / 6
                const radius = 3 + Math.sin(time + i) * 0.5
                light.position.x = Math.cos(angle) * radius
                light.position.z = Math.sin(angle) * radius
                light.position.y = 1.5 + Math.sin(time * 2 + i) * 0.5
            }
        })

        const sphere = $$(sphereRef)
        if (sphere) {
            sphere.rotation.y += 0.005
        }
    })

    return (
        <canvas3D>
            <webGLRenderer
                antialias
                setPixelRatio={[window.devicePixelRatio]}
                setSize={[window.innerWidth, window.innerHeight]}
                shadowMap-enabled
                shadowMap-type={PCFSoftShadowMap}
            />
            <scene background={new Color(0x0a0a0a)}>
                <ambientLight intensity={0.05} />

                {/* Six orbiting point lights */}
                {LIGHT_COLORS.map((color, i) => (
                    <pointLight
                        key={i}
                        ref={lightRefs[i]}
                        color={color}
                        intensity={30}
                        distance={8}
                        decay={2}
                        castShadow
                        shadow-mapSize-width={256}
                        shadow-mapSize-height={256}
                    />
                ))}

                {/* Central sphere */}
                <mesh ref={sphereRef} position={[0, 1, 0]} castShadow receiveShadow>
                    <sphereGeometry args={[1, 64, 64]} />
                    <meshPhongMaterial color={0xffffff} shininess={100} />
                </mesh>

                {/* Ground plane */}
                <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                    <planeGeometry args={[20, 20]} />
                    <meshPhongMaterial color={0x222222} shininess={50} />
                </mesh>
            </scene>

            <perspectiveCamera
                fov={60}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[0, 5, 8]}
            />
            <orbitControls target={[0, 1, 0]} enableDamping />
        </canvas3D>
    )
}

export default Pointlights
