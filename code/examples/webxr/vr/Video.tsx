/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, Vector3 } from 'three'
import * as THREE from 'three'
import { XRButton } from 'three/examples/jsm/webxr/XRButton.js'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/PlaneGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/materials/MeshBasicMaterial'
import '@woby/three/src/materials/MeshNormalMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/lights/PointLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webxr_vr_video from Three.js examples.
 * VR video player for watching 360-degree videos.
 *
 * Source: https://threejs.org/examples/webxr_vr_video.html
 *
 * This example demonstrates:
 * - 360-degree video playback in VR
 * - Video texture on sphere
 * - VR video controls
 * - Immersive video viewing
 *
 * Device requirements:
 * - VR headset (Quest, Vive, etc.)
 * - Video file or stream URL
 */

export const VRVideo = () => {
    const rendererRef = $<THREE.WebGLRenderer>()
    const sceneRef = $<THREE.Scene>()
    const cameraRef = $<THREE.PerspectiveCamera>()
    const [xrSupported, setXRSupported] = $(false)
    const [checked, setChecked] = $(false)
    const [videoReady, setVideoReady] = $(false)
    const [isPlaying, setIsPlaying] = $(false)

    // Video element and texture
    let video: HTMLVideoElement | null = null
    let videoTexture: THREE.VideoTexture | null = null

    // Check WebXR support
    useEffect(() => {
        const checkXR = async () => {
            if ('xr' in navigator) {
                try {
                    const supported = await navigator.xr.isSessionSupported('immersive-vr')
                    setXRSupported(supported)
                } catch (e) {
                    console.warn('WebXR check failed:', e)
                }
            }
            setChecked(true)
        }
        checkXR()
    })

    // Setup video and VR
    useEffect(() => {
        const renderer = $$(rendererRef)
        const scene = $$(sceneRef)
        if (!renderer || !$$(xrSupported) || !scene) return

        // Create video element
        video = document.createElement('video')
        video.loop = true
        video.muted = true
        video.playsInline = true
        video.crossOrigin = 'anonymous'

        // Use a sample 360 video URL (replace with actual video)
        // For demo, we'll create a procedural video-like texture
        video.src = 'https://threejs.org/examples/textures/sintel.ogv'

        video.addEventListener('canplaythrough', () => {
            setVideoReady(true)
        })

        video.addEventListener('play', () => setIsPlaying(true))
        video.addEventListener('pause', () => setIsPlaying(false))

        // Create video texture
        videoTexture = new THREE.VideoTexture(video!)
        videoTexture.colorSpace = THREE.SRGBColorSpace

        // Create video sphere
        const geometry = new THREE.SphereGeometry(50, 32, 32)
        geometry.scale(-1, 1, 1) // Invert so video is on inside

        const material = new THREE.MeshBasicMaterial({
            map: videoTexture
        })

        const videoSphere = new THREE.Mesh(geometry, material)
        videoSphere.name = 'videoSphere'
        scene.add(videoSphere)

        // Create VR button
        const vrButton = XRButton.createButton(renderer)
        document.body.appendChild(vrButton)

        return () => {
            vrButton.remove()
            if (video) {
                video.pause()
                video.src = ''
            }
            if (videoTexture) {
                videoTexture.dispose()
            }
            const sphere = scene.getObjectByName('videoSphere')
            if (sphere) {
                scene.remove(sphere)
                ;(sphere as THREE.Mesh).geometry.dispose()
                ;((sphere as THREE.Mesh).material as THREE.Material).dispose()
            }
        }
    })

    // Toggle video playback
    const togglePlay = () => {
        if (!video) return

        if (video.paused) {
            video.play()
        } else {
            video.pause()
        }
    }

    useFrame(() => {
        if (videoTexture && video && !video.paused) {
            videoTexture.needsUpdate = true
        }
    })

    // Loading state
    if (!$$(checked)) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#0a0a1a', color: 'white' }}>
                <p>Checking WebXR support...</p>
            </div>
        )
    }

    // Fallback for non-XR browsers
    if (!$$(xrSupported)) {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#0a0a1a', color: 'white', textAlign: 'center', padding: '20px' }}>
                <h1>WebXR VR Not Available</h1>
                <p style={{ maxWidth: '600px', marginBottom: '20px' }}>
                    VR Video requires a VR headset for immersive viewing.
                </p>
                <h3>VR Video enables:</h3>
                <ul style={{ textAlign: 'left', marginBottom: '20px' }}>
                    <li>360-degree video playback</li>
                    <li>Immersive video experience</li>
                    <li>Natural head movement for viewing</li>
                </ul>
                <p style={{ color: '#888' }}>
                    Showing fallback scene without VR.
                </p>

                <div style={{ width: '100%', height: '400px', marginTop: '20px' }}>
                    <canvas3D>
                        <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[600, 400]} />
                        <scene background={new Color(0x0a0a1a)}>
                            <ambientLight intensity={0.3} />
                            <directionalLight position={[5, 10, 5]} intensity={1} />
                            {/* Demo video screen */}
                            <mesh position={[0, 1, -2]}>
                                <planeGeometry args={[2, 1.125]} />
                                <meshBasicMaterial color={0x333344} />
                            </mesh>
                            {/* Play button indicator */}
                            <mesh position={[0, 1, -1.9]}>
                                <sphereGeometry args={[0.1, 16, 16]} />
                                <meshBasicMaterial color={0x4ecdc4} />
                            </mesh>
                        </scene>
                        <perspectiveCamera fov={60} aspect={600 / 400} near={0.1} far={100} position={[0, 1, 2]} />
                        <orbitControls enableDamping />
                    </canvas3D>
                </div>
            </div>
        )
    }

    return (
        <canvas3D>
            <webGLRenderer
                ref={rendererRef}
                antialias
                setPixelRatio={[window.devicePixelRatio]}
                setSize={[window.innerWidth, window.innerHeight]}
                xr-enabled
            />
            <scene ref={sceneRef} />

            <perspectiveCamera
                ref={cameraRef}
                fov={75}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[0, 0, 0]}
            />
            <orbitControls
                enableDamping
                enableZoom={false}
                enablePan={false}
                rotateSpeed={-0.5}
            />
        </canvas3D>
    )
}

export default VRVideo
