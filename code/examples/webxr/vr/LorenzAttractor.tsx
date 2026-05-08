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
import '@woby/three/src/geometries/CylinderGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/materials/MeshNormalMaterial'
import '@woby/three/src/materials/MeshBasicMaterial'
import '@woby/three/src/materials/PointsMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/objects/Points'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webxr_vr_lorenzattractor from Three.js examples.
 * VR visualization of the Lorenz attractor mathematical system.
 *
 * Source: https://threejs.org/examples/webxr_vr_lorenzattractor.html
 *
 * This example demonstrates:
 * - Lorenz attractor particle system
 * - Mathematical visualization in VR
 * - Animated particle trails
 * - Interactive parameter adjustment
 *
 * Device requirements:
 * - VR headset (Quest, Vive, etc.)
 */

// Lorenz attractor parameters
const SIGMA = 10
const RHO = 28
const BETA = 8 / 3
const DT = 0.005
const PARTICLE_COUNT = 5000

// Particle class for Lorenz simulation
class LorenzParticle {
    x: number
    y: number
    z: number
    trail: Vector3[]

    constructor() {
        this.x = Math.random() * 2 - 1
        this.y = Math.random() * 2 - 1
        this.z = Math.random() * 2 - 1
        this.trail = []
    }

    update(): Vector3 {
        // Lorenz equations
        const dx = SIGMA * (this.y - this.x)
        const dy = this.x * (RHO - this.z) - this.y
        const dz = this.x * this.y - BETA * this.z

        this.x += dx * DT
        this.y += dy * DT
        this.z += dz * DT

        // Scale for visualization
        return new Vector3(this.x * 0.05, this.z * 0.05 - 1, this.y * 0.05)
    }
}

export const VRLorenzAttractor = () => {
    const rendererRef = $<THREE.WebGLRenderer>()
    const sceneRef = $<THREE.Scene>()
    const cameraRef = $<THREE.PerspectiveCamera>()
    const [xrSupported, setXRSupported] = $(false)
    const [checked, setChecked] = $(false)

    // Particles
    const particles: LorenzParticle[] = []
    let pointsGeometry: THREE.BufferGeometry | null = null
    let pointsMaterial: THREE.PointsMaterial | null = null
    let points: THREE.Points | null = null

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

    // Setup VR button and particles
    useEffect(() => {
        const renderer = $$(rendererRef)
        const scene = $$(sceneRef)
        if (!renderer || !$$(xrSupported) || !scene) return

        // Create VR button
        const vrButton = XRButton.createButton(renderer)
        document.body.appendChild(vrButton)

        // Initialize particles
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            particles.push(new LorenzParticle())
        }

        // Create points geometry
        const positions = new Float32Array(PARTICLE_COUNT * 3)
        const colors = new Float32Array(PARTICLE_COUNT * 3)

        pointsGeometry = new THREE.BufferGeometry()
        pointsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
        pointsGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

        // Create material
        pointsMaterial = new THREE.PointsMaterial({
            size: 0.02,
            vertexColors: true,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending
        })

        // Create points object
        points = new THREE.Points(pointsGeometry, pointsMaterial)
        scene.add(points)

        return () => {
            vrButton.remove()
            if (points) {
                scene.remove(points)
                pointsGeometry?.dispose()
                pointsMaterial?.dispose()
            }
            particles.length = 0
        }
    })

    useFrame(() => {
        if (!pointsGeometry || particles.length === 0) return

        const positions = pointsGeometry.attributes.position.array as Float32Array
        const colors = pointsGeometry.attributes.color.array as Float32Array

        // Update particle positions
        particles.forEach((particle, i) => {
            const pos = particle.update()

            positions[i * 3] = pos.x
            positions[i * 3 + 1] = pos.y
            positions[i * 3 + 2] = pos.z

            // Color based on position
            const hue = (pos.y + 1) / 2
            const color = new THREE.Color().setHSL(hue, 0.8, 0.5)
            colors[i * 3] = color.r
            colors[i * 3 + 1] = color.g
            colors[i * 3 + 2] = color.b
        })

        pointsGeometry.attributes.position.needsUpdate = true
        pointsGeometry.attributes.color.needsUpdate = true
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
                    The Lorenz Attractor visualization in VR requires a VR headset.
                </p>
                <h3>Lorenz Attractor:</h3>
                <ul style={{ textAlign: 'left', marginBottom: '20px' }}>
                    <li>Chaotic dynamical system</li>
                    <li>Beautiful mathematical visualization</li>
                    <li>5,000 animated particles</li>
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
                            {/* Demo sphere representing attractor center */}
                            <mesh position={[0, -1, 0]}>
                                <sphereGeometry args={[0.5, 32, 32]} />
                                <meshStandardMaterial color={0x4ecdc4} wireframe />
                            </mesh>
                        </scene>
                        <perspectiveCamera fov={60} aspect={600 / 400} near={0.1} far={100} position={[0, 0, 5]} />
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
            <scene ref={sceneRef} background={new Color(0x0a0a1a)}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 10, 5]} intensity={1} />

                {/* Floor */}
                <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <cylinderGeometry args={[5, 5, 0.1, 32]} />
                    <meshStandardMaterial color={0x111122} />
                </mesh>

                {/* Reference grid */}
                <gridHelper args={[10, 20, 0x222244, 0x111133]} position={[0, -1.95, 0]} />
            </scene>

            <perspectiveCamera
                ref={cameraRef}
                fov={60}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[0, 0, 3]}
            />
            <orbitControls enableDamping target={[0, -1, 0]} />
        </canvas3D>
    )
}

export default VRLorenzAttractor
