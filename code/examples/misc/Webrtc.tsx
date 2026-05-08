/** @jsxImportSource @woby/three */

import { $, $$, useFrame, useRenderer, useCamera, useEffect } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of misc_webrtc from Three.js examples.
 * Demonstrates WebRTC integration for peer-to-peer video.
 *
 * Source: https://threejs.org/examples/misc_webrtc.html
 *
 * Key features:
 * - WebRTC video streaming
 * - Video texture mapping
 * - Peer-to-peer communication
 *
 * Note: This is a simplified demo showing video texture mapping.
 * Full WebRTC requires signaling server.
 */

export const Webrtc = () => {
    const videoRef = $<HTMLVideoElement>()
    const meshRef = $<THREE.Mesh>()

    // Setup video texture
    useEffect(() => {
        const initVideo = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true })
                const video = document.createElement('video')
                video.srcObject = stream
                video.play()
                videoRef(video)

                // Create video texture
                const texture = new THREE.VideoTexture(video)
                texture.minFilter = THREE.LinearFilter
                texture.magFilter = THREE.LinearFilter

                const mesh = $$(meshRef)
                if (mesh && mesh.material instanceof THREE.MeshStandardMaterial) {
                    mesh.material.map = texture
                    mesh.material.needsUpdate = true
                }
            } catch (error) {
                console.log('WebRTC not available, showing placeholder')
                // Create placeholder texture
                const canvas = document.createElement('canvas')
                canvas.width = 512
                canvas.height = 512
                const ctx = canvas.getContext('2d')!
                ctx.fillStyle = '#1a1a2e'
                ctx.fillRect(0, 0, 512, 512)
                ctx.fillStyle = 'white'
                ctx.font = '24px sans-serif'
                ctx.textAlign = 'center'
                ctx.fillText('Camera not available', 256, 256)
                ctx.fillText('Click to enable', 256, 300)

                const texture = new THREE.CanvasTexture(canvas)
                const mesh = $$(meshRef)
                if (mesh && mesh.material instanceof THREE.MeshStandardMaterial) {
                    mesh.material.map = texture
                    mesh.material.needsUpdate = true
                }
            }
        }

        initVideo()

        return () => {
            const video = $$(videoRef)
            if (video && video.srcObject) {
                const tracks = (video.srcObject as MediaStream).getTracks()
                tracks.forEach(track => track.stop())
            }
        }
    })

    useFrame(() => {
        // Video texture updates automatically
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 10, 5]} intensity={1} />

                {/* Video screen */}
                <mesh ref={meshRef} position={[0, 0, 0]}>
                    <boxGeometry args={[4, 3, 0.1]} />
                    <meshStandardMaterial color={0xffffff} />
                </mesh>

                {/* Frame */}
                <mesh position={[0, 0, -0.1]}>
                    <boxGeometry args={[4.2, 3.2, 0.1]} />
                    <meshStandardMaterial color={0x2d2d44} />
                </mesh>
            </scene>

            <perspectiveCamera
                fov={60}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[0, 0, 5]}
            />

            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default Webrtc