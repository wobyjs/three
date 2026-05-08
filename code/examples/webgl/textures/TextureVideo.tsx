/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, VideoTexture, ACESFilmicToneMapping, SRGBColorSpace } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/PlaneGeometry'
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_texture_video from Three.js examples.
 * Demonstrates video texture for dynamic content.
 *
 * Source: https://threejs.org/examples/webgl_texture_video.html
 *
 * Key features:
 * - VideoTexture for video content
 * - Video element integration
 * - Real-time texture updates
 */

export const TextureVideo = () => {
    const textureRef = $<THREE.VideoTexture>()
    const videoRef = $<HTMLVideoElement>()
    const meshRef = $<THREE.Mesh>()

    useEffect(() => {
        // Create video element
        const video = document.createElement('video')
        video.src = 'https://threejs.org/examples/textures/sintel.ogv'
        video.crossOrigin = 'anonymous'
        video.loop = true
        video.muted = true
        video.playsInline = true
        videoRef(video)

        // Create video texture
        const texture = new VideoTexture(video)
        texture.colorSpace = SRGBColorSpace
        textureRef(texture)

        // Start video playback
        video.play().catch((e) => {
            console.log('Video autoplay blocked, user interaction required')
        })

        return () => {
            video.pause()
            video.src = ''
        }
    })

    useFrame(() => {
        const texture = $$(textureRef)
        if (texture) {
            texture.needsUpdate = true
        }
    })

    return (
        <canvas3D>
            <webGLRenderer
                antialias
                setPixelRatio={[window.devicePixelRatio]}
                setSize={[window.innerWidth, window.innerHeight]}
                toneMapping={ACESFilmicToneMapping}
            />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 10, 5]} intensity={1} />

                {/* Plane with video texture */}
                <mesh ref={meshRef} position={[0, 0, 0]}>
                    <planeGeometry args={[4, 2.25]} />
                    <meshStandardMaterial
                        map={$$(textureRef)}
                        side={THREE.DoubleSide}
                    />
                </mesh>
            </scene>

            <perspectiveCamera
                fov={50}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[0, 0, 5]}
            />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default TextureVideo
