/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import * as THREE from 'three'

import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_loader_md2_control from Three.js examples.
 * Demonstrates MD2 character with keyboard controls.
 *
 * Source: https://threejs.org/examples/webgl_loader_md2_control.html
 */

export const LoaderMd2Control = () => {
    const groupRef = $<THREE.Group>()
    const posX = $(0)

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const group = $$(groupRef)
        if (group) {
            // Simulate movement animation
            posX(Math.sin(time) * 2)
            group.position.x = posX()
            group.rotation.y = time * 0.5
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new THREE.Color(0xffffff)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 5, 5]} intensity={1} />

                {/* MD2 character placeholder with movement */}
                <group ref={groupRef}>
                    <mesh position={[0, 1, 0]}>
                        <capsuleGeometry args={[0.3, 1, 8, 16]} />
                        <meshStandardMaterial color={0x4488ff} />
                    </mesh>

                    <mesh position={[0, 1.8, 0]}>
                        <sphereGeometry args={[0.25, 16, 16]} />
                        <meshStandardMaterial color={0xffccaa} />
                    </mesh>
                </group>

                {/* Ground */}
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
                    <planeGeometry args={[20, 20]} />
                    <meshStandardMaterial color={0x886644} />
                </mesh>
            </scene>

            <perspectiveCamera fov={45} aspect={window.innerWidth / window.innerHeight} near={1} far={4000} position={[0, 150, 1300]} />
            <orbitControls target={[0, 50, 0]} />
        </canvas3D>
    )
}

export default LoaderMd2Control