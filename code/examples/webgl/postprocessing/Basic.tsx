/** @jsxImportSource @woby/three */

import { $, $$, useFrame, useRenderer, useCamera, useEffect } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { EffectComposer } from '@woby/three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from '@woby/three/examples/jsm/postprocessing/RenderPass'
import { UnrealBloomPass } from '@woby/three/examples/jsm/postprocessing/UnrealBloomPass'
import { Color, Vector2 } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/PointLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_postprocessing from Three.js examples.
 * Basic postprocessing example demonstrating EffectComposer with bloom effect.
 *
 * Source: https://threejs.org/examples/webgl_postprocessing.html
 *
 * Key pattern: EffectComposer replaces default renderer.render() call.
 * The composer.addPass() chain determines render order:
 * 1. RenderPass - renders the scene to a texture
 * 2. UnrealBloomPass - applies bloom effect to bright areas
 */

export const Basic = () => {
    const composerRef = $<THREE.EffectComposer>()
    const cubeRef = $<THREE.Mesh>()
    const rendererRef = useRenderer<THREE.WebGLRenderer>()
    const cameraRef = useCamera<THREE.PerspectiveCamera>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const cube = $$(cubeRef)
        if (cube) {
            cube.rotation.x = time * 0.5
            cube.rotation.y = time * 0.3
        }

        // Render via composer instead of default render
        const composer = $$(composerRef)
        if (composer) {
            composer.render()
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x000000)}>
                <ambientLight intensity={0.1} />
                <pointLight position={[5, 5, 5]} intensity={1} color={0xffffff} />

                {/* Central rotating cube with emissive material for bloom */}
                <mesh ref={cubeRef} position={[0, 0, 0]}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial
                        color={0xff6b6b}
                        emissive={0xff6b6b}
                        emissiveIntensity={0.5}
                        roughness={0.3}
                        metalness={0.7}
                    />
                </mesh>

                {/* Surrounding spheres with emissive materials */}
                <mesh position={[2, 0, 0]}>
                    <sphereGeometry args={[0.3, 32, 32]} />
                    <meshStandardMaterial
                        color={0x4ecdc4}
                        emissive={0x4ecdc4}
                        emissiveIntensity={0.8}
                    />
                </mesh>

                <mesh position={[-2, 0, 0]}>
                    <sphereGeometry args={[0.3, 32, 32]} />
                    <meshStandardMaterial
                        color={0xffe66d}
                        emissive={0xffe66d}
                        emissiveIntensity={0.8}
                    />
                </mesh>
            </scene>

            <perspectiveCamera
                ref={cameraRef}
                fov={60}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[0, 2, 5]}
            />

            {/* Postprocessing setup */}
            <effectComposer
                ref={composerRef}
                args={[$$(rendererRef)]}
            >
                {/* RenderPass renders the scene to a texture */}
                <renderPass
                    args={[$$(rendererRef)?.scenes?.[0] ?? new THREE.Scene(), $$(cameraRef) ?? new THREE.PerspectiveCamera()]}
                />
                {/* UnrealBloomPass adds bloom to bright areas */}
                <unrealBloomPass
                    args={[new Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85]}
                />
            </effectComposer>

            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default Basic
