/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'
import * as THREE from 'three'
import WebGPU from 'three/examples/jsm/capabilities/WebGPU.js'

// Import wrappers for registration
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/lights/PointLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgpu_morphtargets - Morph Target Animation demonstration.
 *
 * Source: https://threejs.org/examples/webgpu_morphtargets.html (conceptual)
 *
 * Morph Targets (also called Blend Shapes) enable smooth transitions between
 * different mesh shapes. Essential for facial animation and shape interpolation.
 *
 * Morph Target Use Cases:
 * 1. Facial animation - Smile, blink, mouth shapes
 * 2. Character customization - Body shape variations
 * 3. Destruction effects - Building collapse, deformation
 * 4. Procedural animation - Organic movement
 *
 * WebGPU Morph Target Advantages:
 * - GPU-accelerated morph target interpolation
 * - More morph targets supported simultaneously
 * - Better performance with complex meshes
 * - Can combine with compute shaders for procedural morphs
 *
 * Three.js Morph Target API:
 * - geometry.morphAttributes.position: Array of target positions
 * - mesh.morphTargetInfluences: Array of weights (0-1)
 * - mesh.morphTargetDictionary: Name to index mapping
 */

// Create morph target geometry
const createMorphGeometry = () => {
    const geometry = new THREE.SphereGeometry(1, 64, 64)

    // Morph target 1: Elongated (stretched sphere)
    const elongated = new THREE.SphereGeometry(1, 64, 64)
    const elongatedPositions = elongated.attributes.position.array.slice()
    for (let i = 0; i < elongatedPositions.length; i += 3) {
        elongatedPositions[i] *= 1.5  // X stretch
        elongatedPositions[i + 2] *= 0.7  // Z compress
    }

    // Morph target 2: Squashed (flattened sphere)
    const squashed = new THREE.SphereGeometry(1, 64, 64)
    const squashedPositions = squashed.attributes.position.array.slice()
    for (let i = 0; i < squashedPositions.length; i += 3) {
        squashedPositions[i + 1] *= 0.5  // Y compress
        squashedPositions[i] *= 1.3  // X stretch
        squashedPositions[i + 2] *= 1.3  // Z stretch
    }

    // Morph target 3: Twisted
    const twisted = new THREE.SphereGeometry(1, 64, 64)
    const twistedPositions = twisted.attributes.position.array.slice()
    for (let i = 0; i < twistedPositions.length; i += 3) {
        const y = twistedPositions[i + 1]
        const angle = y * Math.PI * 0.5
        const x = twistedPositions[i]
        const z = twistedPositions[i + 2]
        twistedPositions[i] = x * Math.cos(angle) - z * Math.sin(angle)
        twistedPositions[i + 2] = x * Math.sin(angle) + z * Math.cos(angle)
    }

    // Morph target 4: Spiky
    const spiky = new THREE.SphereGeometry(1, 64, 64)
    const spikyPositions = spiky.attributes.position.array.slice()
    for (let i = 0; i < spikyPositions.length; i += 3) {
        const x = spikyPositions[i]
        const y = spikyPositions[i + 1]
        const z = spikyPositions[i + 2]
        const noise = Math.sin(x * 5) * Math.cos(y * 5) * Math.sin(z * 5) * 0.3
        const len = Math.sqrt(x * x + y * y + z * z)
        const factor = 1 + noise
        spikyPositions[i] = (x / len) * factor
        spikyPositions[i + 1] = (y / len) * factor
        spikyPositions[i + 2] = (z / len) * factor
    }

    // Store morph targets
    geometry.morphAttributes.position = [
        new THREE.Float32BufferAttribute(elongatedPositions, 3),
        new THREE.Float32BufferAttribute(squashedPositions, 3),
        new THREE.Float32BufferAttribute(twistedPositions, 3),
        new THREE.Float32BufferAttribute(spikyPositions, 3)
    ]

    return geometry
}

// Morphing sphere component
const MorphingSphere = ({ position, morphIndex }: { position: [number, number, number], morphIndex: number }) => {
    const meshRef = $<THREE.Mesh>()
    const geometryRef = $<THREE.BufferGeometry>()

    useEffect(() => {
        const geometry = createMorphGeometry()
        geometryRef(geometry)
        const mesh = $$(meshRef)
        if (mesh) {
            mesh.geometry = geometry
            mesh.morphTargetInfluences = [0, 0, 0, 0]
        }
    })

    useFrame(({ clock }) => {
        const mesh = $$(meshRef)
        if (!mesh || !mesh.morphTargetInfluences) return

        const time = clock.getElapsedTime()

        // Animate specific morph target
        const influences = mesh.morphTargetInfluences
        for (let i = 0; i < 4; i++) {
            influences[i] = i === morphIndex ? (Math.sin(time * 2) + 1) / 2 : 0
        }

        // Subtle rotation
        mesh.rotation.y = time * 0.3
    })

    return (
        <mesh ref={meshRef} position={position}>
            <sphereGeometry args={[1, 64, 64]} />
            <meshStandardMaterial color={0x4ecdc4} roughness={0.3} metalness={0.7} />
        </mesh>
    )
}

// Multi-morph sphere - blends all morphs
const MultiMorphSphere = () => {
    const meshRef = $<THREE.Mesh>()

    useEffect(() => {
        const mesh = $$(meshRef)
        if (mesh) {
            const geometry = createMorphGeometry()
            mesh.geometry = geometry
            mesh.morphTargetInfluences = [0, 0, 0, 0]
        }
    })

    useFrame(({ clock }) => {
        const mesh = $$(meshRef)
        if (!mesh || !mesh.morphTargetInfluences) return

        const time = clock.getElapsedTime()

        // Blend all morph targets in sequence
        const influences = mesh.morphTargetInfluences
        for (let i = 0; i < 4; i++) {
            const phase = (time + i * Math.PI / 2) % (Math.PI * 2)
            influences[i] = Math.max(0, Math.sin(phase))
        }

        mesh.rotation.y = time * 0.2
        mesh.rotation.x = Math.sin(time * 0.5) * 0.1
    })

    return (
        <mesh ref={meshRef} position={[0, 0, 0]}>
            <sphereGeometry args={[1.5, 64, 64]} />
            <meshStandardMaterial color={0xff6b6b} roughness={0.2} metalness={0.8} />
        </mesh>
    )
}

// Label component
const Label = ({ text, position }: { text: string, position: [number, number, number] }) => {
    // Using a simple box as label placeholder
    return (
        <mesh position={position}>
            <boxGeometry args={[0.1, 0.1, 0.1]} />
            <meshStandardMaterial color={0x333344} />
        </mesh>
    )
}

export const MorphTargets = () => {
    const [supported, setSupported] = $(false)
    const [checked, setChecked] = $(false)

    // Check WebGPU support
    useEffect(() => {
        const checkSupport = async () => {
            try {
                if (WebGPU.isAvailable()) {
                    setSupported(true)
                } else if (navigator.gpu) {
                    const adapter = await navigator.gpu.requestAdapter()
                    if (adapter) {
                        setSupported(true)
                    }
                }
            } catch (e) {
                console.warn('WebGPU check failed:', e)
            }
            setChecked(true)
        }
        checkSupport()
    })

    // Loading state
    if (!$$(checked)) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#0a0a1a', color: 'white' }}>
                <p>Checking WebGPU support...</p>
            </div>
        )
    }

    // Fallback UI
    if (!$$(supported)) {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#0a0a1a', color: 'white', textAlign: 'center', padding: '20px' }}>
                <h1>WebGPU Not Available</h1>
                <p>Please use Chrome 113+ or Edge 113+ for WebGPU support.</p>
                <p style={{ color: '#888', marginTop: '20px' }}>
                    This example demonstrates morph target animation for shape interpolation.
                    Using WebGL fallback.
                </p>
            </div>
        )
    }

    return (
        <canvas3D>
            <webGLRenderer
                antialias
                setPixelRatio={[window.devicePixelRatio]}
                setSize={[window.innerWidth, window.innerHeight]}
            />
            <scene background={new Color(0x0a0a1a)}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 10, 5]} intensity={1} />
                <pointLight position={[-5, 5, 5]} intensity={0.5} color={0xff6b6b} />
                <pointLight position={[5, 5, -5]} intensity={0.5} color={0x4ecdc4} />

                {/* Central multi-morph sphere */}
                <MultiMorphSphere />

                {/* Individual morph demonstrations */}
                <MorphingSphere position={[-4, 0, 0]} morphIndex={0} />
                <MorphingSphere position={[4, 0, 0]} morphIndex={1} />
                <MorphingSphere position={[-4, -3, 0]} morphIndex={2} />
                <MorphingSphere position={[4, -3, 0]} morphIndex={3} />

                {/* Ground */}
                <mesh position={[0, -5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <boxGeometry args={[20, 20, 0.1]} />
                    <meshStandardMaterial color={0x1a1a2e} roughness={0.9} />
                </mesh>
            </scene>

            <perspectiveCamera
                fov={60}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[0, 2, 12]}
            />
            <orbitControls enableDamping autoRotate autoRotateSpeed={0.3} />
        </canvas3D>
    )
}

export default MorphTargets
