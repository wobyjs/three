/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_fog from Three.js examples.
 * Demonstrates fog effects.
 *
 * Source: https://threejs.org/examples/webgl_fog.html
 */

export const Fog = () => {
    const meshes: THREE.Mesh[] = []
    const refs = Array.from({ length: 50 }, () => $<THREE.Mesh>())

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        refs.forEach((ref, i) => {
            const mesh = $$(ref)
            if (mesh) {
                mesh.rotation.x = time * 0.1 * (i % 3 + 1)
                mesh.rotation.y = time * 0.1 * ((i + 1) % 3 + 1)
            }
        })
    })

    // Generate random positions for cubes
    const positions: [number, number, number][] = []
    for (let i = 0; i < 50; i++) {
        positions.push([
            (Math.random() - 0.5) * 30,
            (Math.random() - 0.5) * 30,
            (Math.random() - 0.5) * 30
        ])
    }

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene
                background={new Color(0x1a1a2e)}
                fog={new THREE.Fog(0x1a1a2e, 5, 25)}
            >
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 10, 5]} intensity={1} />

                {/* Random cubes affected by fog */}
                {positions.map((pos, i) => (
                    <mesh key={i} ref={refs[i]} position={pos}>
                        <boxGeometry args={[0.5, 0.5, 0.5]} />
                        <meshStandardMaterial
                            color={new Color().setHSL(i / 50, 0.7, 0.5)}
                            roughness={0.5}
                            metalness={0.5}
                        />
                    </mesh>
                ))}
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 0, 15]} />
            <orbitControls enableDamping autoRotate autoRotateSpeed={0.5} />
        </canvas3D>
    )
}

export default Fog