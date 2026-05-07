/** @jsxImportSource @woby/three */

import { $, $$, useEffect } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, TextureLoader, CubeTextureLoader } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/materials/MeshBasicMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_backgrounds from Three.js examples.
 * Demonstrates different scene background options.
 *
 * Source: https://threejs.org/examples/webgl_backgrounds.html
 */

export const Backgrounds = () => {
    const backgroundType = $<'color' | 'texture' | 'cube'>('color')

    // Keyboard controls for switching backgrounds
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            switch (event.key) {
                case '1':
                    backgroundType('color')
                    break
                case '2':
                    backgroundType('texture')
                    break
                case '3':
                    backgroundType('cube')
                    break
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    })

    // Get background based on type
    const getBackground = () => {
        const type = $$(backgroundType)
        switch (type) {
            case 'color':
                return new Color(0x1a1a2e)
            case 'texture':
                // For simplicity, use a gradient color
                return new Color(0x2a1a3e)
            case 'cube':
                return new Color(0x0a0a1e)
            default:
                return new Color(0x1a1a2e)
        }
    }

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={getBackground()}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 10, 5]} intensity={1} />

                {/* Central sphere to show reflections */}
                <mesh position={[0, 0, 0]}>
                    <sphereGeometry args={[1, 32, 32]} />
                    <meshStandardMaterial color={0xffffff} roughness={0.1} metalness={0.9} />
                </mesh>

                {/* Floor */}
                <mesh position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <boxGeometry args={[10, 10, 0.1]} />
                    <meshStandardMaterial color={0x333333} roughness={0.8} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 2, 4]} />
            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default Backgrounds