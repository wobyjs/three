/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/materials/MeshBasicMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_framebuffer_texture from Three.js examples.
 * Demonstrates rendering to framebuffer textures.
 *
 * Source: https://threejs.org/examples/webgl_framebuffer_texture.html
 */

export const FramebufferTexture = () => {
    const meshRef = $<THREE.Mesh>()
    const cubeRef = $<THREE.Mesh>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        
        const mesh = $$(meshRef)
        if (mesh) {
            mesh.rotation.x = time * 0.5
            mesh.rotation.y = time * 0.5
        }

        const cube = $$(cubeRef)
        if (cube) {
            cube.rotation.x = time * 0.3
            cube.rotation.y = time * 0.4
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
                {/* Scene rendered to texture */}
                <mesh ref={meshRef} position={[0, 0, 0]}>
                    <boxGeometry args={[2, 2, 2]} />
                    <meshBasicMaterial color={0x4ecdc4} wireframe />
                </mesh>
            </scene>

            {/* Fullscreen quad to display texture */}
            <mesh position={[0, 0, -5]}>
                <planeGeometry args={[10, 10]} />
                <meshBasicMaterial color={0x333333} />
            </mesh>

            {/* Rotating cube */}
            <mesh ref={cubeRef} position={[3, 0, 0]}>
                <boxGeometry args={[1, 1, 1]} />
                <meshBasicMaterial color={0xff6b6b} />
            </mesh>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 0, 5]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default FramebufferTexture