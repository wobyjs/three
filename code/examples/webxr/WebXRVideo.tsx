/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'
import * as THREE from 'three'
import { XRButton } from 'three/examples/jsm/webxr/XRButton.js'
import { ARButton } from 'three/examples/jsm/webxr/ARButton.js'

// Import wrappers for registration
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/PlaneGeometry'
import '@woby/three/src/materials/MeshBasicMaterial'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webxr_video from Three.js examples.
 * WebXR video player supporting both VR and AR modes.
 *
 * Source: https://threejs.org/examples/webxr_video.html
 *
 * This example demonstrates:
 * - Video playback in WebXR
 * - VR 360-degree video viewing
 * - AR video overlay
 * - Video texture mapping
 *
 * Device requirements:
 * - VR headset OR AR-capable device
 */

export const WebXRVideo = () => {
    const rendererRef = $<THREE.WebGLRenderer>()
    const sceneRef = $<THREE.Scene>()
    const cameraRef = $<THREE.PerspectiveCamera>()
    const [vrSupported, setVRSupported] = $(false)
    const [arSupported, setARSupported] = $(false)
    const [checked, setChecked] = $(false)
    const [videoReady, setVideoReady] = $(false)
    const [mode, setMode] = $('vr')

    // Video element and texture
    let video: HTMLVideoElement | null = null
    let videoTexture: THREE.VideoTexture | null = null

    // Check WebXR support
    useEffect(() => {
        const checkXR = async () => {
            if ('xr' in navigator) {
                try {
                    const vr = await navigator.xr.isSessionSupported('immersive-vr')
                    const ar = await navigator.xr.isSessionSupported('immersive-ar')
                    setVRSupported(vr)
                    setARSupported(ar)

                    if (vr) setMode('vr')
                    else if (ar) setMode('ar')
                } catch (e) {
                    console.warn('WebXR check failed:', e)
                }
            }
            setChecked(true)
        }
        checkXR()
    })

    // Setup video and XR
    useEffect(() => {
        const renderer = $$(rendererRef)
        const scene = $$(sceneRef)
        if (!renderer || !scene) return

        const hasXR = $$(vrSupported) || $$(arSupported)
        if (!hasXR) return

        // Create video element
        video = document.createElement('video')
        video.loop = true
        video.muted = true
        video.playsInline = true
        video.crossOrigin = 'anonymous'

        // Sample video URL
        video.src = 'https://threejs.org/examples/textures/sintel.ogv'

        video.addEventListener('canplaythrough', () => {
            setVideoReady(true)
        })

        // Create video texture
        videoTexture = new THREE.VideoTexture(video!)
        videoTexture.colorSpace = THREE.SRGBColorSpace

        // Create video display based on mode
        if ($$(mode) === 'vr') {
            // VR: Create 360-degree sphere
            const geometry = new THREE.SphereGeometry(50, 32, 32)
            geometry.scale(-1, 1, 1)

            const material = new THREE.MeshBasicMaterial({
                map: videoTexture
            })

            const videoSphere = new THREE.Mesh(geometry, material)
            videoSphere.name = 'videoSphere'
            scene.add(videoSphere)

            // VR button
            const vrButton = XRButton.createButton(renderer)
            document.body.appendChild(vrButton)

            return () => {
                vrButton.remove()
            }
        } else {
            // AR: Create flat video screen
            const geometry = new THREE.PlaneGeometry(1.6, 0.9)
            const material = new THREE.MeshBasicMaterial({
                map: videoTexture
            })

            const videoPlane = new THREE.Mesh(geometry, material)
            videoPlane.name = 'videoPlane'
            videoPlane.position.set(0, 1.5, -2)
            scene.add(videoPlane)

            // AR button
            const arButton = ARButton.createButton(renderer, {
                optionalFeatures: ['dom-overlay'],
                domOverlay: { root: document.body }
            })
            document.body.appendChild(arButton)

            return () => {
                arButton.remove()
            }
        }
    })

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

    const hasXR = $$(vrSupported) || $$(arSupported)

    // Fallback for non-XR browsers
    if (!hasXR) {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#0a0a1a', color: 'white', textAlign: 'center', padding: '20px' }}>
                <h1>WebXR Not Available</h1>
                <p style={{ maxWidth: '600px', marginBottom: '20px' }}>
                    WebXR Video requires a VR headset or AR-capable device.
                </p>
                <h3>WebXR Video enables:</h3>
                <ul style={{ textAlign: 'left', marginBottom: '20px' }}>
                    <li>VR: 360-degree immersive video</li>
                    <li>AR: Video overlay in real world</li>
                    <li>Interactive video playback</li>
                </ul>
                <p style={{ color: '#888' }}>
                    Showing fallback scene without XR.
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
                            {/* Play indicator */}
                            <mesh position={[0, 1, -1.9]}>
                                <sphereGeometry args={[0.08, 16, 16]} />
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
                alpha={$$(mode) === 'ar'}
            />
            <scene ref={sceneRef} background={$$(mode) === 'ar' ? null as unknown as THREE.Color : new Color(0x0a0a1a)}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 10, 5]} intensity={1} />
            </scene>

            <perspectiveCamera
                ref={cameraRef}
                fov={$$(mode) === 'vr' ? 75 : 60}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[0, 0, $$(mode) === 'vr' ? 0 : 2]}
            />
            <orbitControls
                enableDamping
                enableZoom={$$(mode) !== 'vr'}
                enablePan={$$(mode) !== 'vr'}
                rotateSpeed={-0.5}
            />
        </canvas3D>
    )
}

export default WebXRVideo
