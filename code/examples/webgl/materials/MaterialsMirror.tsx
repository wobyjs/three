/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from 'woby'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Reflector } from '@woby/three/examples/jsm/objects/Reflector'
import { Color } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/PlaneGeometry'
import '@woby/three/src/geometries/CircleGeometry'
import '@woby/three/src/geometries/CylinderGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/IcosahedronGeometry'
import '@woby/three/src/materials/MeshPhongMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/objects/Group'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/PointLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_mirror from Three.js examples.
 * Demonstrates real-time reflections using Reflector.
 *
 * Source: https://threejs.org/examples/webgl_mirror.html
 */

export const MaterialsMirror = () => {
    const sphereGroupRef = $<THREE.Group>()
    const smallSphereRef = $<THREE.Mesh>()
    const groundMirrorRef = $<THREE.Mesh>()
    const verticalMirrorRef = $<THREE.Mesh>()

    useFrame(() => {
        const timer = Date.now() * 0.01

        const sphereGroup = $$(sphereGroupRef)
        if (sphereGroup) sphereGroup.rotation.y -= 0.002

        const smallSphere = $$(smallSphereRef)
        if (smallSphere) {
            smallSphere.position.set(
                Math.cos(timer * 0.1) * 30,
                Math.abs(Math.cos(timer * 0.2)) * 20 + 5,
                Math.sin(timer * 0.1) * 30
            )
            smallSphere.rotation.y = (Math.PI / 2) - timer * 0.1
            smallSphere.rotation.z = timer * 0.8
        }
    })

    useEffect(() => {
        // Create mirrors after renderer is ready
        const size = new THREE.Vector2()
        const resolutionScale = 1

        // Ground mirror
        const groundGeometry = new THREE.CircleGeometry(40, 64)
        const groundMirror = new Reflector(groundGeometry, {
            clipBias: 0.003,
            textureWidth: window.innerWidth * window.devicePixelRatio * resolutionScale,
            textureHeight: window.innerHeight * window.devicePixelRatio * resolutionScale,
            color: 0xb5b5b5
        })
        groundMirror.position.y = 0.5
        groundMirror.rotation.x = -Math.PI / 2

        const groundMesh = $$(groundMirrorRef)
        if (groundMesh) {
            groundMesh.geometry = groundMirror.geometry
            groundMesh.material = groundMirror.material
            groundMesh.position.copy(groundMirror.position)
            groundMesh.rotation.copy(groundMirror.rotation)
        }

        // Vertical mirror
        const verticalGeometry = new THREE.PlaneGeometry(100, 100)
        const verticalMirror = new Reflector(verticalGeometry, {
            clipBias: 0.003,
            textureWidth: window.innerWidth * window.devicePixelRatio * resolutionScale,
            textureHeight: window.innerHeight * window.devicePixelRatio * resolutionScale,
            color: 0xc1cbcb
        })
        verticalMirror.position.y = 50
        verticalMirror.position.z = -50

        const verticalMesh = $$(verticalMirrorRef)
        if (verticalMesh) {
            verticalMesh.geometry = verticalMirror.geometry
            verticalMesh.material = verticalMirror.material
            verticalMesh.position.copy(verticalMirror.position)
            verticalMesh.rotation.copy(verticalMirror.rotation)
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x000000)}>
                <pointLight position={[0, 60, 0]} intensity={2.5} color={0xe7e7e7} />
                <pointLight position={[550, 50, 0]} intensity={0.5} color={0x00ff00} />
                <pointLight position={[-550, 50, 0]} intensity={0.5} color={0xff0000} />
                <pointLight position={[0, 50, 550]} intensity={0.5} color={0xbbbbfe} />

                {/* Ground mirror */}
                <mesh ref={groundMirrorRef} />

                {/* Vertical mirror */}
                <mesh ref={verticalMirrorRef} />

                {/* Sphere group */}
                <group ref={sphereGroupRef}>
                    <mesh position={[0, 15, 0]}>
                        <sphereGeometry args={[15, 24, 24]} />
                        <meshPhongMaterial color={0xffffff} emissive={0x8d8d8d} />
                    </mesh>
                </group>

                {/* Small sphere */}
                <mesh ref={smallSphereRef}>
                    <icosahedronGeometry args={[5, 0]} />
                    <meshPhongMaterial color={0xffffff} emissive={0x7b7b7b} flatShading />
                </mesh>

                {/* Walls */}
                <mesh position={[0, 100, 0]} rotation={[Math.PI / 2, 0, 0]}>
                    <planeGeometry args={[100.1, 100.1]} />
                    <meshPhongMaterial color={0xffffff} />
                </mesh>
                <mesh rotation={[-Math.PI / 2, 0, 0]}>
                    <planeGeometry args={[100.1, 100.1]} />
                    <meshPhongMaterial color={0xffffff} />
                </mesh>
                <mesh position={[0, 50, -50]} rotation={[0, Math.PI, 0]}>
                    <planeGeometry args={[100.1, 100.1]} />
                    <meshPhongMaterial color={0x7f7fff} />
                </mesh>
                <mesh position={[50, 50, 0]} rotation={[0, -Math.PI / 2, 0]}>
                    <planeGeometry args={[100.1, 100.1]} />
                    <meshPhongMaterial color={0x00ff00} />
                </mesh>
                <mesh position={[-50, 50, 0]} rotation={[0, Math.PI / 2, 0]}>
                    <planeGeometry args={[100.1, 100.1]} />
                    <meshPhongMaterial color={0xff0000} />
                </mesh>
            </scene>

            <perspectiveCamera fov={45} aspect={window.innerWidth / window.innerHeight} near={1} far={500} position={[0, 75, 160]} />
            <orbitControls target={[0, 40, 0]} maxDistance={400} minDistance={10} enableDamping />
        </canvas3D>
    )
}

export default MaterialsMirror