/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'

// Import geometry wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/CapsuleGeometry'
import '@woby/three/src/geometries/ConeGeometry'
import '@woby/three/src/geometries/CylinderGeometry'
import '@woby/three/src/geometries/DodecahedronGeometry'
import '@woby/three/src/geometries/IcosahedronGeometry'
import '@woby/three/src/geometries/OctahedronGeometry'
import '@woby/three/src/geometries/PlaneGeometry'
import '@woby/three/src/geometries/RingGeometry'
import '@woby/three/src/geometries/TetrahedronGeometry'
import '@woby/three/src/geometries/TorusGeometry'
import '@woby/three/src/geometries/TorusKnotGeometry'
import '@woby/three/src/geometries/LatheGeometry'
import '@woby/three/src/geometries/CircleGeometry'

// Import material and object wrappers
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/materials/MeshPhongMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/lights/PointLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_geometries from Three.js examples.
 * Showcases 14+ geometry types in a 4x5 grid layout.
 *
 * Source: https://threejs.org/examples/webgl_geometries.html
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
            case 'capsuleGeometry':
                return <capsuleGeometry args={props.args} />
            case 'coneGeometry':
                return <coneGeometry args={props.args} />
            case 'cylinderGeometry':
                return <cylinderGeometry args={props.args} />
            case 'dodecahedronGeometry':
                return <dodecahedronGeometry args={props.args} />
            case 'icosahedronGeometry':
                return <icosahedronGeometry args={props.args} />
            case 'octahedronGeometry':
                return <octahedronGeometry args={props.args} />
            case 'planeGeometry':
                return <planeGeometry args={props.args} />
            case 'ringGeometry':
                return <ringGeometry args={props.args} />
            case 'tetrahedronGeometry':
                return <tetrahedronGeometry args={props.args} />
            case 'torusGeometry':
                return <torusGeometry args={props.args} />
            case 'torusKnotGeometry':
                return <torusKnotGeometry args={props.args} />
            case 'circleGeometry':
                return <circleGeometry args={props.args} />
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
    // 4x5 grid of geometries (20 total)
    const geometries = [
        // Row 1 (y=3)
        { name: 'Box', geometry: 'boxGeometry', args: [1, 1, 1], pos: [-4.5, 3, 0] as [number, number, number], color: 0xff6b6b },
        { name: 'Sphere', geometry: 'sphereGeometry', args: [0.6, 32, 32], pos: [-1.5, 3, 0] as [number, number, number], color: 0x4ecdc4 },
        { name: 'Capsule', geometry: 'capsuleGeometry', args: [0.4, 0.6, 8, 16], pos: [1.5, 3, 0] as [number, number, number], color: 0xffe66d },
        { name: 'Cone', geometry: 'coneGeometry', args: [0.5, 1.2, 32], pos: [4.5, 3, 0] as [number, number, number], color: 0xa8e6cf },

        // Row 2 (y=1)
        { name: 'Cylinder', geometry: 'cylinderGeometry', args: [0.5, 0.5, 1.2, 32], pos: [-4.5, 1, 0] as [number, number, number], color: 0xff8b94 },
        { name: 'Dodecahedron', geometry: 'dodecahedronGeometry', args: [0.6], pos: [-1.5, 1, 0] as [number, number, number], color: 0x7c3aed },
        { name: 'Icosahedron', geometry: 'icosahedronGeometry', args: [0.6], pos: [1.5, 1, 0] as [number, number, number], color: 0x06b6d4 },
        { name: 'Octahedron', geometry: 'octahedronGeometry', args: [0.6], pos: [4.5, 1, 0] as [number, number, number], color: 0x10b981 },

        // Row 3 (y=-1)
        { name: 'Tetrahedron', geometry: 'tetrahedronGeometry', args: [0.6], pos: [-4.5, -1, 0] as [number, number, number], color: 0xf59e0b },
        { name: 'Torus', geometry: 'torusGeometry', args: [0.5, 0.2, 16, 32], pos: [-1.5, -1, 0] as [number, number, number], color: 0xec4899 },
        { name: 'TorusKnot', geometry: 'torusKnotGeometry', args: [0.4, 0.15, 64, 16], pos: [1.5, -1, 0] as [number, number, number], color: 0x8b5cf6 },
        { name: 'Ring', geometry: 'ringGeometry', args: [0.4, 0.6, 32], pos: [4.5, -1, 0] as [number, number, number], color: 0x14b8a6 },

        // Row 4 (y=-3)
        { name: 'Circle', geometry: 'circleGeometry', args: [0.6, 32], pos: [-4.5, -3, 0] as [number, number, number], color: 0x3b82f6 },
        { name: 'Plane', geometry: 'planeGeometry', args: [1, 1], pos: [-1.5, -3, 0] as [number, number, number], color: 0x84cc16 },
    ]

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
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
            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 0, 10]} />
            <orbitControls enableDamping autoRotate autoRotateSpeed={0.5} />
        </canvas3D>
    )
}

export default Geometries
