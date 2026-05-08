/** @jsxImportSource @woby/three */

import { $, $$, useFrame, useEffect } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, LightProbe, LightProbeHelper, SphericalHarmonics3, Vector3 } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/LightProbe'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_lightprobe from Three.js examples.
 * Demonstrates light probes for environment lighting.
 *
 * Source: https://threejs.org/examples/webgl_lightprobe.html
 *
 * Key features:
 * - LightProbe for ambient lighting
 * - Spherical harmonics coefficients
 * - Environment-based lighting
 */

export const LightProbeExample = () => {
    const lightProbeRef = $<THREE.LightProbe>()

    useEffect(() => {
        // Create light probe with spherical harmonics
        const lightProbe = new LightProbe(new SphericalHarmonics3())

        // Simple ambient coefficients (would normally come from environment map)
        const sh = lightProbe.sh.coefficients
        sh[0].set(0.5, 0.5, 0.5)
        sh[1].set(0.3, 0.3, 0.35)
        sh[2].set(0.2, 0.2, 0.25)

        lightProbeRef(lightProbe)
    })

    return (
        <canvas3D>
            <webGLRenderer
                antialias
                setPixelRatio={[window.devicePixelRatio]}
                setSize={[window.innerWidth, window.innerHeight]}
            />
            <scene background={new Color(0x1a1a2e)}>
                {/* Light probe for environment lighting */}
                <lightProbe ref={lightProbeRef} intensity={1} />

                {/* Central sphere */}
                <mesh position={[0, 0, 0]}>
                    <sphereGeometry args={[1, 64, 64]} />
                    <meshStandardMaterial color={0xffffff} roughness={0.3} metalness={0.7} />
                </mesh>
            </scene>

            <perspectiveCamera
                fov={50}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[0, 0, 4]}
            />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default LightProbeExample
