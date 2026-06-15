/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, Vector3, TextureLoader } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/PlaneGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/materials/MeshBasicMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/objects/Sprite'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/scenes/Scene'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'

/**
 * Port of webgl_lensflares from Three.js examples.
 * Demonstrates lens flare effects.
 *
 * Source: https://threejs.org/examples/webgl_lensflares.html
 */

export const Lensflares = () => {
    const lightRef = $<THREE.PointLight>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        
        const light = $$(lightRef)
        if (light) {
            light.position.x = Math.sin(time * 0.7) * 3
            light.position.y = Math.cos(time * 0.5) * 3
            light.position.z = Math.cos(time * 0.3) * 3
        }
    })

    return (
        <canvas3D>
            <webGLRenderer
                antialias
                setPixelRatio={[window.devicePixelRatio]}
                setSize={[window.innerWidth, window.innerHeight]}
            />
            <scene background={new Color(0x000011)}>
                <ambientLight intensity={0.2} />
                
                {/* Light source with flare */}
                <pointLight ref={lightRef} position={[0, 0, 0]} intensity={2} color={0xffffff} />

                {/* Background sphere */}
                <mesh position={[0, 0, -10]}>
                    <sphereGeometry args={[50, 32, 32]} />
                    <meshBasicMaterial color={0x0a0a1a} side={THREE.BackSide} />
                </mesh>

                {/* Central object */}
                <mesh position={[0, 0, 0]}>
                    <sphereGeometry args={[0.5, 32, 32]} />
                    <meshBasicMaterial color={0xffff00} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 0, 5]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default Lensflares