/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, Water, TextureLoader, Vector3, Clock } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/PlaneGeometry'
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'
import '@woby/three/src/objects/Sky'

/**
 * Port of webgl_water from Three.js examples.
 * Demonstrates realistic water surface with reflections and refractions.
 *
 * Source: https://threejs.org/examples/webgl_water.html
 *
 * Key features:
 * - Water shader with animated waves
 * - Sky environment reflection
 * - Sun position affecting water color
 */

export const WaterExample = () => {
    const waterRef = $<Water>()
    const sun = new Vector3()

    useFrame((state) => {
        const water = $$(waterRef)
        if (water) {
            const time = state.clock?.getElapsedTime() ?? 0
            // Update sun position for water reflection
            sun.set(
                Math.sin(time * 0.1) * 100,
                50,
                Math.cos(time * 0.1) * 100
            )
            water.material.uniforms['sunDirection'].value.copy(sun).normalize()
        }
    })

    useEffect(() => {
        const geometry = new THREE.PlaneGeometry(10000, 10000)
        const water = new Water(geometry, {
            textureWidth: 512,
            textureHeight: 512,
            waterNormals: new TextureLoader().load(
                'https://threejs.org/examples/textures/waternormals.jpg',
                (texture) => {
                    texture.wrapS = texture.wrapT = THREE.RepeatWrapping
                }
            ),
            sunDirection: new Vector3(),
            sunColor: 0xffffff,
            waterColor: 0x001e0f,
            distortionScale: 3.7,
            fog: false
        })
        water.rotation.x = -Math.PI / 2
        waterRef(water as unknown as Water)
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x87ceeb)}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[100, 100, 50]} intensity={1} castShadow />

                {/* Water surface */}
                {() => {
                    const water = $$(waterRef)
                    if (!water) return null
                    return <primitive object={water} />
                }}

                {/* Floating objects */}
                <mesh position={[0, 1, 0]} castShadow>
                    <boxGeometry args={[2, 2, 2]} />
                    <meshStandardMaterial color={0xff6b6b} metalness={0.5} roughness={0.3} />
                </mesh>

                <mesh position={[10, 0.5, -10]} castShadow>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color={0x4ecdc4} metalness={0.5} roughness={0.3} />
                </mesh>

                <mesh position={[-10, 0.5, 10]} castShadow>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color={0x45b7d1} metalness={0.5} roughness={0.3} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={1} far={20000} position={[30, 30, 100]} />
            <orbitControls enableDamping maxPolarAngle={Math.PI * 0.495} target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default WaterExample
