/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import * as THREE from 'three'

import '@woby/three/src/materials/MeshBasicMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/OrthographicCamera'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_loader_texture_exr from Three.js examples.
 * Demonstrates EXR (high dynamic range) texture loading.
 *
 * Source: https://threejs.org/examples/webgl_loader_texture_exr.html
 */

export const LoaderTextureExr = () => {
    const exposure = $(2.0)

    useFrame((state) => {
        const renderer = state.gl
        if (renderer) {
            renderer.toneMappingExposure = exposure()
        }
    })

    // Aspect ratio calculation
    const aspect = window.innerWidth / window.innerHeight

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} toneMapping={THREE.ReinhardToneMapping} />
            <scene>
                {/* EXR texture displayed on quad */}
                <mesh>
                    <planeGeometry args={[1.5 * aspect, 1.5]} />
                    <meshBasicMaterial color={0x888888} />
                </mesh>
            </scene>

            <orthographicCamera left={-aspect} right={aspect} top={1} bottom={-1} near={0} far={1} position={[0, 0, 1]} />
        </canvas3D>
    )
}

export default LoaderTextureExr