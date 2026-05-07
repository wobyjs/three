/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'
import * as THREE from 'three'
import WebGPU from 'three/examples/jsm/capabilities/WebGPU.js'

// Import geometry wrappers for registration
import '@woby/three/src/geometries/SphereGeometry'

// Import material wrappers for registration
import '@woby/three/src/materials/MeshBasicMaterial'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/materials/MeshPhongMaterial'
import '@woby/three/src/materials/MeshPhysicalMaterial'
import '@woby/three/src/materials/MeshLambertMaterial'

// Import other wrappers
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/lights/PointLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgpu_materials - Material variations using WebGPU renderer.
 *
 * Source: https://threejs.org/examples/webgpu_materials.html (conceptual)
 *
 * Demonstrates various material types working with WebGPU rendering pipeline.
 *
 * WebGPU Material Support Notes:
 * - MeshBasicMaterial: Fully supported
 * - MeshStandardMaterial: Fully supported
 * - MeshPhongMaterial: Fully supported
 * - MeshLambertMaterial: Fully supported
 * - MeshPhysicalMaterial: Supported, but some advanced features may have limitations
 *
 * Note: This example uses WebGLRenderer as fallback since WebGPURenderer
 * wrapper is still experimental. The material rendering patterns are identical.
 */

// Material sphere component with rotation animation
const MaterialSphere = ({
    position,
    material,
    color,
    roughness,
    metalness,
    label
}: {
    position: [number, number, number]
    material: 'basic' | 'standard' | 'phong' | 'lambert' | 'physical'
    color: number
    roughness?: number
    metalness?: number
    label: string
}) => {
    const ref = $<THREE.Mesh>()

    useFrame(() => {
        const mesh = $$(ref)
        if (mesh) {
            mesh.rotation.y += 0.005
        }
    })

    // Material selection based on type
    const MaterialElement = () => {
        switch (material) {
            case 'basic':
                return <meshBasicMaterial color={color} />
            case 'standard':
                return <meshStandardMaterial color={color} roughness={roughness ?? 0.5} metalness={metalness ?? 0.5} />
            case 'phong':
                return <meshPhongMaterial color={color} shininess={100} />
            case 'lambert':
                return <meshLambertMaterial color={color} />
            case 'physical':
                return <meshPhysicalMaterial color={color} roughness={roughness ?? 0.3} metalness={metalness ?? 0.7} clearcoat={0.5} clearcoatRoughness={0.3} />
            default:
                return <meshStandardMaterial color={color} />
        }
    }

    return (
        <mesh ref={ref} position={position}>
            <sphereGeometry args={[0.6, 32, 32]} />
            <MaterialElement />
        </mesh>
    )
}

// Roughness/Metalness variation sphere
const VariationSphere = ({
    position,
    roughness,
    metalness,
    color
}: {
    position: [number, number, number]
    roughness: number
    metalness: number
    color: number
}) => {
    const ref = $<THREE.Mesh>()

    useFrame(() => {
        const mesh = $$(ref)
        if (mesh) {
            mesh.rotation.y += 0.003
        }
    })

    return (
        <mesh ref={ref} position={position}>
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshStandardMaterial color={color} roughness={roughness} metalness={metalness} />
        </mesh>
    )
}

export const Materials = () => {
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

    // Material types to display
    const materialTypes = [
        { material: 'basic' as const, color: 0xff6b6b, label: 'Basic', pos: [-3, 1.5, 0] as [number, number, number] },
        { material: 'lambert' as const, color: 0x4ecdc4, label: 'Lambert', pos: [-1, 1.5, 0] as [number, number, number] },
        { material: 'phong' as const, color: 0xffe66d, label: 'Phong', pos: [1, 1.5, 0] as [number, number, number] },
        { material: 'standard' as const, color: 0xa8e6cf, label: 'Standard', pos: [3, 1.5, 0] as [number, number, number] },
    ]

    // Roughness variations (row 2)
    const roughnessVariations = [
        { roughness: 0, metalness: 0.5, color: 0xff8b94, pos: [-2.5, -0.5, 0] as [number, number, number] },
        { roughness: 0.25, metalness: 0.5, color: 0xff8b94, pos: [-0.8, -0.5, 0] as [number, number, number] },
        { roughness: 0.5, metalness: 0.5, color: 0xff8b94, pos: [0.8, -0.5, 0] as [number, number, number] },
        { roughness: 0.75, metalness: 0.5, color: 0xff8b94, pos: [2.5, -0.5, 0] as [number, number, number] },
    ]

    // Metalness variations (row 3)
    const metalnessVariations = [
        { roughness: 0.3, metalness: 0, color: 0x7c3aed, pos: [-2.5, -2.5, 0] as [number, number, number] },
        { roughness: 0.3, metalness: 0.3, color: 0x7c3aed, pos: [-0.8, -2.5, 0] as [number, number, number] },
        { roughness: 0.3, metalness: 0.7, color: 0x7c3aed, pos: [0.8, -2.5, 0] as [number, number, number] },
        { roughness: 0.3, metalness: 1, color: 0x7c3aed, pos: [2.5, -2.5, 0] as [number, number, number] },
    ]

    // Loading state
    if (!$$(checked)) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#1a1a2e', color: 'white' }}>
                <p>Checking WebGPU support...</p>
            </div>
        )
    }

    // Fallback UI
    if (!$$(supported)) {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#1a1a2e', color: 'white', textAlign: 'center', padding: '20px' }}>
                <h1>WebGPU Not Available</h1>
                <p>Please use Chrome 113+ or Edge 113+ for WebGPU support.</p>
                <p style={{ color: '#888', marginTop: '20px' }}>
                    This example demonstrates material rendering. Using WebGL fallback.
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
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 10, 7]} intensity={1} />
                <pointLight position={[-5, 5, 5]} intensity={0.5} />
                <pointLight position={[5, -5, -5]} intensity={0.3} color={0x4ecdc4} />

                {/* Row 1: Material types */}
                {materialTypes.map((item, i) => (
                    <MaterialSphere
                        key={`mat-${i}`}
                        position={item.pos}
                        material={item.material}
                        color={item.color}
                        label={item.label}
                    />
                ))}

                {/* Row 2: Roughness variations (r=0, 0.25, 0.5, 0.75) */}
                {roughnessVariations.map((item, i) => (
                    <VariationSphere
                        key={`rough-${i}`}
                        position={item.pos}
                        roughness={item.roughness}
                        metalness={item.metalness}
                        color={item.color}
                    />
                ))}

                {/* Row 3: Metalness variations (m=0, 0.3, 0.7, 1) */}
                {metalnessVariations.map((item, i) => (
                    <VariationSphere
                        key={`metal-${i}`}
                        position={item.pos}
                        roughness={item.roughness}
                        metalness={item.metalness}
                        color={item.color}
                    />
                ))}
            </scene>

            <perspectiveCamera
                fov={60}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[0, -0.5, 10]}
            />
            <orbitControls enableDamping autoRotate autoRotateSpeed={0.3} />
        </canvas3D>
    )
}

export default Materials
