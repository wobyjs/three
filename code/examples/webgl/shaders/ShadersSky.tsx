/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_shaders_sky from Three.js examples.
 * Demonstrates procedural sky shader.
 *
 * Source: https://threejs.org/examples/webgl_shaders_sky.html
 */

export const ShadersSky = () => {
    const meshRef = $<THREE.Mesh>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const mesh = $$(meshRef)
        if (mesh) mesh.rotation.y = time * 0.01
    })

    const canvas = document.createElement('canvas')
    canvas.width = 512
    canvas.height = 512
    const ctx = canvas.getContext('2d')!
    const gradient = ctx.createLinearGradient(0, 0, 0, 512)
    gradient.addColorStop(0, '#0a1628')
    gradient.addColorStop(0.3, '#1e3a5f')
    gradient.addColorStop(0.6, '#4a7ca8')
    gradient.addColorStop(1, '#87ceeb')
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, 512, 512)
    const skyTexture = new THREE.CanvasTexture(canvas)

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={skyTexture}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <mesh ref={meshRef} position={[0, -5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <sphereGeometry args={[50, 32, 32]} />
                    <meshStandardMaterial color={0x3d6b3d} roughness={0.9} />
                </mesh>
                <mesh position={[0, 1, 0]}>
                    <sphereGeometry args={[1, 32, 32]} />
                    <meshStandardMaterial color={0xff6b6b} roughness={0.3} metalness={0.7} />
                </mesh>
            </scene>
            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={500} position={[0, 2, 10]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default ShadersSky