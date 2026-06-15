/** @jsxImportSource @woby/three */

import { $, $$, useEffect } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, Vector2 } from 'three'
import * as THREE from 'three'
import { WebGLRenderTarget, DepthTexture } from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/PlaneGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_depth_texture from Three.js examples.
 * Demonstrates depth texture rendering.
 *
 * Source: https://threejs.org/examples/webgl_depth_texture.html
 */

export const DepthTexture = () => {
    const meshRef = $<THREE.Mesh>()
    const renderTargetRef = $<WebGLRenderTarget>()

    useEffect(() => {
        // Create render target with depth texture
        const renderTarget = new WebGLRenderTarget(
            window.innerWidth * window.devicePixelRatio,
            window.innerHeight * window.devicePixelRatio
        )
        renderTarget.texture.format = THREE.RGBAFormat
        renderTarget.depthTexture = new DepthTexture()
        renderTarget.depthTexture.format = THREE.DepthFormat
        renderTarget.depthTexture.type = THREE.UnsignedIntType

        renderTargetRef(renderTarget)

        return () => {
            renderTarget.dispose()
        }
    })

    return (
        <canvas3D>
            <webGLRenderer
                antialias
                setPixelRatio={[window.devicePixelRatio]}
                setSize={[window.innerWidth, window.innerHeight]}
            />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 10, 7]} intensity={1} castShadow />

                {/* Scene mesh */}
                <mesh ref={meshRef} position={[0, 0, 0]}>
                    <boxGeometry args={[1.5, 1.5, 1.5]} />
                    <meshStandardMaterial color={0x4ecdc4} />
                </mesh>

                {/* Floor */}
                <mesh position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <planeGeometry args={[10, 10]} />
                    <meshStandardMaterial color={0x333333} roughness={0.8} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[3, 3, 3]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default DepthTexture