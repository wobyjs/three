/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import * as THREE from 'three'
import { XRButton } from 'three/examples/jsm/webxr/XRButton.js'

// Import wrappers for registration
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/materials/MeshBasicMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webxr_vr_panorama from Three.js examples.
 * VR panorama viewer - view 360-degree equirectangular images in VR.
 *
 * Source: https://threejs.org/examples/webxr_vr_panorama.html
 *
 * This example demonstrates:
 * - Loading equirectangular panorama texture
 * - Setting texture as scene background
 * - VR session for immersive panorama viewing
 * - Looking around the panorama in VR headset
 *
 * Note: The panorama texture is loaded from Three.js examples CDN.
 * In VR, users can look around the 360-degree image naturally.
 */

export const VRPanorama = () => {
    const rendererRef = $<THREE.WebGLRenderer>()
    const sceneRef = $<THREE.Scene>()
    const cameraRef = $<THREE.PerspectiveCamera>()
    const [xrSupported, setXRSupported] = $(false)
    const [checked, setChecked] = $(false)
    const [textureLoaded, setTextureLoaded] = $(false)
    const [loadError, setLoadError] = $(false)

    // Panorama texture URL from Three.js examples
    const panoramaUrl = 'https://threejs.org/examples/textures/2294472375_24a3b8ef46_o.jpg'

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

    // Load panorama texture
    useEffect(() => {
        const scene = $$(sceneRef)
        if (!scene) return

        const loader = new THREE.TextureLoader()

        loader.load(
            panoramaUrl,
            (texture) => {
                // Set equirectangular mapping for 360-degree viewing
                texture.mapping = THREE.EquirectangularReflectionMapping
                texture.colorSpace = THREE.SRGBColorSpace

                // Set as scene background
                scene.background = texture
                setTextureLoaded(true)
            },
            undefined,
            (error) => {
                console.error('Failed to load panorama texture:', error)
                setLoadError(true)
            }
        )

        return () => {
            // Cleanup texture on unmount
            if (scene.background instanceof THREE.Texture) {
                scene.background.dispose()
            }
        }
    })

    // Setup VR button
    useEffect(() => {
        const renderer = $$(rendererRef)
        if (!renderer || !$$(xrSupported)) return

        // Create VR button
        const vrButton = XRButton.createButton(renderer)
        document.body.appendChild(vrButton)

        return () => {
            vrButton.remove()
        }
    })

    useFrame((state) => {
        // In VR, the headset rotation automatically controls the view
        // No additional animation needed for panorama viewing
    })

    // Loading state
    if (!$$(checked)) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#1a1a2e', color: 'white' }}>
                <p>Checking WebXR support...</p>
            </div>
        )
    }

    // Texture loading state
    if (!$$(textureLoaded) && !$$(loadError)) {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#1a1a2e', color: 'white' }}>
                <p>Loading panorama...</p>
                <div style={{ width: '200px', height: '4px', background: '#333', marginTop: '20px', borderRadius: '2px' }}>
                    <div style={{ width: '50%', height: '100%', background: '#4ecdc4', borderRadius: '2px', animation: 'pulse 1s infinite' }} />
                </div>
            </div>
        )
    }

    // Error state
    if ($$(loadError)) {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#1a1a2e', color: 'white', textAlign: 'center', padding: '20px' }}>
                <h1>Failed to Load Panorama</h1>
                <p style={{ color: '#888', marginTop: '20px' }}>
                    Could not load the panorama texture. Please check your internet connection.
                </p>
            </div>
        )
    }

    // Fallback for non-XR browsers
    if (!$$(xrSupported)) {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#1a1a2e', color: 'white', textAlign: 'center', padding: '20px' }}>
                <h1>WebXR VR Not Available</h1>
                <p style={{ maxWidth: '600px', marginBottom: '20px' }}>
                    Panorama viewing in VR requires a VR headset.
                </p>
                <h3>VR Panorama enables:</h3>
                <ul style={{ textAlign: 'left', marginBottom: '20px' }}>
                    <li>Immersive 360-degree image viewing</li>
                    <li>Natural head movement for looking around</li>
                    <li>Full immersion in panoramic scenes</li>
                </ul>
                <p style={{ color: '#888' }}>
                    Showing fallback panorama view (use mouse to look around).
                </p>

                <div style={{ width: '100%', height: '500px', marginTop: '20px' }}>
                    <canvas3D>
                        <webGLRenderer ref={rendererRef} antialias setPixelRatio={[window.devicePixelRatio]} setSize={[800, 500]} />
                        <scene ref={sceneRef} />
                        <perspectiveCamera
                            ref={cameraRef}
                            fov={75}
                            aspect={800 / 500}
                            near={0.1}
                            far={1000}
                            position={[0, 0, 0.1]}
                        />
                        <orbitControls
                            enableDamping
                            enableZoom={false}
                            enablePan={false}
                            rotateSpeed={-0.5}
                        />
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
                far={1000}
                position={[0, 0, 0.1]}
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

export default VRPanorama
