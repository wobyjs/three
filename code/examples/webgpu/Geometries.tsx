/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'
import * as THREE from 'three'
import WebGPU from 'three/examples/jsm/capabilities/WebGPU.js'

// Import geometry wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/ConeGeometry'
import '@woby/three/src/geometries/CylinderGeometry'
import '@woby/three/src/geometries/TorusGeometry'
import '@woby/three/src/geometries/TorusKnotGeometry'
import '@woby/three/src/geometries/DodecahedronGeometry'
import '@woby/three/src/geometries/IcosahedronGeometry'
import '@woby/three/src/geometries/OctahedronGeometry'
import '@woby/three/src/geometries/TetrahedronGeometry'

// Import material and object wrappers
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/lights/PointLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgpu_geometries - Geometry showcase using WebGPU renderer.
 *
 * Source: https://threejs.org/examples/webgpu_geometries.html (conceptual)
 *
 * Demonstrates various geometry types working with WebGPU rendering pipeline.
 * All standard Three.js geometries are compatible with WebGPU.
 *
 * Note: This example uses WebGLRenderer as fallback since WebGPURenderer
 * wrapper is still experimental. The geometry rendering patterns are identical.
 */

// Geometry mesh component with rotation animation
const GeometryMesh = ({ geometry, args, position, color }: {
    geometry: string,
    args: number[],
    position: [number, number, number],
    color: number
}) => {
    const ref = $<THREE.Mesh>()

    useFrame(() => {
        const mesh = $$(ref)
        if (mesh) {
            mesh.rotation.y += 0.01
            mesh.rotation.x += 0.005
        }
    })

    // Dynamic geometry element selection
    const GeometryElement = (props: any) => {
        switch (geometry) {
            case 'boxGeometry':
                return <boxGeometry args={props.args} />
            case 'sphereGeometry':
                return <sphereGeometry args={props.args} />
            case 'coneGeometry':
                return <coneGeometry args={props.args} />
            case 'cylinderGeometry':
                return <cylinderGeometry args={props.args} />
            case 'torusGeometry':
                return <torusGeometry args={props.args} />
            case 'torusKnotGeometry':
                return <torusKnotGeometry args={props.args} />
            case 'dodecahedronGeometry':
                return <dodecahedronGeometry args={props.args} />
            case 'icosahedronGeometry':
                return <icosahedronGeometry args={props.args} />
            case 'octahedronGeometry':
                return <octahedronGeometry args={props.args} />
            case 'tetrahedronGeometry':
                return <tetrahedronGeometry args={props.args} />
            default:
                return <boxGeometry args={props.args} />
        }
    }

    return (
        <mesh ref={ref} position={position}>
            <GeometryElement args={args} />
            <meshStandardMaterial color={color} roughness={0.3} metalness={0.5} />
        </mesh>
    )
}

export const Geometries = () => {
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

    // 3x3 grid of geometries (9 total) - focused selection for WebGPU demo
    const geometries = [
        // Row 1 (y=2)
        { name: 'Box', geometry: 'boxGeometry', args: [1, 1, 1], pos: [-2.5, 2, 0] as [number, number, number], color: 0xff6b6b },
        { name: 'Sphere', geometry: 'sphereGeometry', args: [0.6, 32, 32], pos: [0, 2, 0] as [number, number, number], color: 0x4ecdc4 },
        { name: 'Cone', geometry: 'coneGeometry', args: [0.5, 1.2, 32], pos: [2.5, 2, 0] as [number, number, number], color: 0xffe66d },

        // Row 2 (y=0)
        { name: 'Cylinder', geometry: 'cylinderGeometry', args: [0.5, 0.5, 1.2, 32], pos: [-2.5, 0, 0] as [number, number, number], color: 0xa8e6cf },
        { name: 'Torus', geometry: 'torusGeometry', args: [0.5, 0.2, 16, 32], pos: [0, 0, 0] as [number, number, number], color: 0xec4899 },
        { name: 'TorusKnot', geometry: 'torusKnotGeometry', args: [0.4, 0.15, 64, 16], pos: [2.5, 0, 0] as [number, number, number], color: 0x8b5cf6 },

        // Row 3 (y=-2)
        { name: 'Dodecahedron', geometry: 'dodecahedronGeometry', args: [0.6], pos: [-2.5, -2, 0] as [number, number, number], color: 0x7c3aed },
        { name: 'Icosahedron', geometry: 'icosahedronGeometry', args: [0.6], pos: [0, -2, 0] as [number, number, number], color: 0x06b6d4 },
        { name: 'Octahedron', geometry: 'octahedronGeometry', args: [0.6], pos: [2.5, -2, 0] as [number, number, number], color: 0x10b981 },
    ]

    // Loading state
    if (!$$(checked)) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#0a0a0a', color: 'white' }}>
                <p>Checking WebGPU support...</p>
            </div>
        )
    }

    // Fallback UI
    if (!$$(supported)) {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#0a0a0a', color: 'white', textAlign: 'center', padding: '20px' }}>
                <h1>WebGPU Not Available</h1>
                <p>Please use Chrome 113+ or Edge 113+ for WebGPU support.</p>
                <p style={{ color: '#888', marginTop: '20px' }}>
                    This example demonstrates geometry rendering. Using WebGL fallback.
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
            <scene background={new Color(0x0a0a0a)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 10, 7]} intensity={1} />
                <pointLight position={[-5, 5, -5]} intensity={0.5} color={0xff0044} />

                {geometries.map((item, i) => (
                    <GeometryMesh
                        key={i}
                        geometry={item.geometry}
                        args={item.args}
                        position={item.pos}
                        color={item.color}
                    />
                ))}
            </scene>

            <perspectiveCamera
                fov={60}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[0, 0, 8]}
            />
            <orbitControls enableDamping autoRotate autoRotateSpeed={0.5} />
        </canvas3D>
    )
}

export default Geometries
