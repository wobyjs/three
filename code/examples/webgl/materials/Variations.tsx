/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/materials/MeshPhysicalMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/lights/PointLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_materials_variations from Three.js examples.
 * Demonstrates various material property settings side-by-side.
 *
 * Source: https://threejs.org/examples/webgl_materials_variations.html
 *
 * Shows how roughness and metalness affect the appearance of materials.
 */

// Material sphere component
const MaterialSphere = ({
    position,
    roughness,
    metalness,
    color,
    label
}: {
    position: [number, number, number]
    roughness: number
    metalness: number
    color: number
    label: string
}) => {
    const ref = $<THREE.Mesh>()

    useFrame(() => {
        const mesh = $$(ref)
        if (mesh) {
            mesh.rotation.y += 0.005
        }
    })

    return (
        <mesh ref={ref} position={position}>
            <sphereGeometry args={[0.7, 32, 32]} />
            <meshStandardMaterial
                color={color}
                roughness={roughness}
                metalness={metalness}
            />
        </mesh>
    )
}

export const Variations = () => {
    // Material variations grid
    // Rows: roughness (0.0, 0.25, 0.5, 0.75, 1.0)
    // Columns: metalness (0.0, 0.5, 1.0)

    const baseColor = 0xff6b6b

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a1a)}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 10, 7]} intensity={1} />
                <pointLight position={[-5, 5, 5]} intensity={0.5} />

                {/* Row 1: roughness 0.0 */}
                <MaterialSphere position={[-2, 2, 0]} roughness={0} metalness={0} color={baseColor} label="r0_m0" />
                <MaterialSphere position={[0, 2, 0]} roughness={0} metalness={0.5} color={baseColor} label="r0_m0.5" />
                <MaterialSphere position={[2, 2, 0]} roughness={0} metalness={1} color={baseColor} label="r0_m1" />

                {/* Row 2: roughness 0.25 */}
                <MaterialSphere position={[-2, 0.5, 0]} roughness={0.25} metalness={0} color={baseColor} label="r0.25_m0" />
                <MaterialSphere position={[0, 0.5, 0]} roughness={0.25} metalness={0.5} color={baseColor} label="r0.25_m0.5" />
                <MaterialSphere position={[2, 0.5, 0]} roughness={0.25} metalness={1} color={baseColor} label="r0.25_m1" />

                {/* Row 3: roughness 0.5 */}
                <MaterialSphere position={[-2, -1, 0]} roughness={0.5} metalness={0} color={baseColor} label="r0.5_m0" />
                <MaterialSphere position={[0, -1, 0]} roughness={0.5} metalness={0.5} color={baseColor} label="r0.5_m0.5" />
                <MaterialSphere position={[2, -1, 0]} roughness={0.5} metalness={1} color={baseColor} label="r0.5_m1" />

                {/* Row 4: roughness 0.75 */}
                <MaterialSphere position={[-2, -2.5, 0]} roughness={0.75} metalness={0} color={baseColor} label="r0.75_m0" />
                <MaterialSphere position={[0, -2.5, 0]} roughness={0.75} metalness={0.5} color={baseColor} label="r0.75_m0.5" />
                <MaterialSphere position={[2, -2.5, 0]} roughness={0.75} metalness={1} color={baseColor} label="r0.75_m1" />

                {/* Row 5: roughness 1.0 */}
                <MaterialSphere position={[-2, -4, 0]} roughness={1} metalness={0} color={baseColor} label="r1_m0" />
                <MaterialSphere position={[0, -4, 0]} roughness={1} metalness={0.5} color={baseColor} label="r1_m0.5" />
                <MaterialSphere position={[2, -4, 0]} roughness={1} metalness={1} color={baseColor} label="r1_m1" />
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, -1, 10]} />
            <orbitControls enableDamping autoRotate autoRotateSpeed={0.3} />
        </canvas3D>
    )
}

export default Variations
