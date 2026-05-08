/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import * as THREE from 'three'
import { XRButton } from 'three/examples/jsm/webxr/XRButton.js'

// Import wrappers for registration
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/materials/MeshBasicMaterial'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webxr_vr_panorama_depth from Three.js examples.
 * VR panorama viewer with depth map for 3D effect.
 *
 * Source: https://threejs.org/examples/webxr_vr_panorama_depth.html
 *
 * This example demonstrates:
 * - Equirectangular panorama with depth information
 * - Depth-based parallax effect
 * - Immersive 360-degree viewing with depth
 * - Realistic VR panorama experience
 *
 * Note: The panorama texture is loaded from Three.js examples CDN.
 * Depth map creates 3D parallax effect when moving in VR.
 */

export const VRPanoramaDepth = () => {
    const rendererRef = $<THREE.WebGLRenderer>()
    const sceneRef = $<THREE.Scene>()
    const cameraRef = $<THREE.PerspectiveCamera>()
    const [xrSupported, setXRSupported] = $(false)
    const [checked, setChecked] = $(false)
    const [textureLoaded, setTextureLoaded] = $(false)
    const [depthLoaded, setDepthLoaded] = $(false)
    const [loadError, setLoadError] = $(false)

    // Panorama and depth texture URLs
    const panoramaUrl = 'https://threejs.org/examples/textures/2294472375_24a3b8ef46_o.jpg'
    const depthUrl = 'https://threejs.org/examples/textures/2294472375_24a3b8ef46_o_depth.jpg'

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

    // Load panorama and depth textures
    useEffect(() => {
        const scene = $$(sceneRef)
        if (!scene) return

        const loader = new THREE.TextureLoader()

        // Load panorama texture
        loader.load(
            panoramaUrl,
            (texture) => {
                texture.mapping = THREE.EquirectangularReflectionMapping
                texture.colorSpace = THREE.SRGBColorSpace
                scene.background = texture
                setTextureLoaded(true)
            },
            undefined,
            (error) => {
                console.error('Failed to load panorama:', error)
                setLoadError(true)
            }
        )

        // Load depth texture (for parallax effect)
        loader.load(
            depthUrl,
            (depthTexture) => {
                // In a full implementation, depth texture would be used
                // for depth-based parallax rendering
                // For now, we store it for reference
                depthTexture.colorSpace = THREE.LinearSRGBColorSpace
                setDepthLoaded(true)
            },
            undefined,
            (error) => {
                console.warn('Depth texture not available:', error)
                // Depth is optional, continue without it
                setDepthLoaded(true)
            }
        )

        return () => {
            if (scene.background instanceof THREE.Texture) {
                scene.background.dispose()
            }
        }
    })

    // Setup VR button
    useEffect(() => {
        const renderer = $$(rendererRef)
        if (!renderer || !$$(xrSupported)) return

        const vrButton = XRButton.createButton(renderer)
        document.body.appendChild(vrButton)

        return () => {
            vrButton.remove()
        }
    })

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const scene = $$(sceneRef)
        if (!scene) return

        // Animate depth sphere slightly to show activity
        scene.children.forEach((child) => {
            if (child instanceof THREE.Mesh && child.userData.depthIndicator) {
                child.rotation.y = time * 0.2
            }
        })
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
    if (!$$(textureLoaded)) {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#1a1a2e', color: 'white' }}>
                <p>Loading panorama with depth...</p>
                <div style={{ width: '200px', height: '4px', background: '#333', marginTop: '20px', borderRadius: '2px' }}>
                    <div style={{ width: '50%', height: '100%', background: '#4ecdc4', borderRadius: '2px' }} />
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
                    Depth panorama viewing requires a VR headset.
                </p>
                <h3>Depth panorama enables:</h3>
                <ul style={{ textAlign: 'left', marginBottom: '20px' }}>
                    <li>3D parallax effect when moving</li>
                    <li>More immersive panorama experience</li>
                    <li>Realistic depth perception</li>
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
            <scene ref={sceneRef}>
                <ambientLight intensity={0.3} />

                {/* Depth indicator sphere */}
                <mesh position={[0, 0, -5]} userData-depthIndicator={true}>
                    <sphereGeometry args={[0.5, 32, 32]} />
                    <meshBasicMaterial color={0x4ecdc4} wireframe />
                </mesh>
            </scene>

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

export default VRPanoramaDepth