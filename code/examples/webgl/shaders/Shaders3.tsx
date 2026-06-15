/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'
import * as THREE from 'three'

import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/PlaneGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_shaders3 from Three.js examples.
 * Demonstrates more shader techniques.
 *
 * Source: https://threejs.org/examples/webgl_shaders3.html
 */

export const Shaders3 = () => {
    const meshRef = $<THREE.Mesh>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const mesh = $$(meshRef)
        if (mesh) {
            mesh.rotation.y = time * 0.5
            mesh.rotation.x = time * 0.3
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 10, 7]} intensity={1} />

                <mesh ref={meshRef}>
                    <sphereGeometry args={[1.5, 64, 64]} />
                    <shaderMaterial 
                        vertexShader={`
                            varying vec3 vNormal;
                            varying vec3 vPosition;
                            void main() {
                                vNormal = normalize(normalMatrix * normal);
                                vPosition = position;
                                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                            }
                        `}
                        fragmentShader={`
                            varying vec3 vNormal;
                            varying vec3 vPosition;
                            void main() {
                                vec3 light = normalize(vec3(1.0, 1.0, 1.0));
                                float diff = max(dot(vNormal, light), 0.0);
                                vec3 color = vec3(0.3, 0.5, 0.9) * (0.3 + 0.7 * diff);
                                gl_FragColor = vec4(color, 1.0);
                            }
                        `}
                    />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 0, 5]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default Shaders3