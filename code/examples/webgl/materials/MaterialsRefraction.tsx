/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from 'woby'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Refractor } from '@woby/three/examples/jsm/objects/Refractor'
import { WaterRefractionShader } from '@woby/three/examples/jsm/shaders/WaterRefractionShader'
import { Color, TextureLoader, RepeatWrapping } from 'three'
import * as THREE from 'three'
import { Timer } from 'three/examples/jsm/misc/Timer.js'

// Import wrappers for registration
import '@woby/three/src/geometries/PlaneGeometry'
import '@woby/three/src/geometries/IcosahedronGeometry'
import '@woby/three/src/materials/MeshPhongMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/PointLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_refraction from Three.js examples.
 * Demonstrates water refraction using Refractor.
 *
 * Source: https://threejs.org/examples/webgl_refraction.html
 */

export const MaterialsRefraction = () => {
    const refractorRef = $<THREE.Mesh>()
    const smallSphereRef = $<THREE.Mesh>()
    const timer = new Timer()

    useEffect(() => {
        timer.connect(document)

        // Create refractor
        const refractorGeometry = new THREE.PlaneGeometry(90, 90)
        const refractor = new Refractor(refractorGeometry, {
            color: 0xcbcbcb,
            textureWidth: 1024,
            textureHeight: 1024,
            shader: WaterRefractionShader
        })
        refractor.position.set(0, 50, 0)

        const refractorMesh = $$(refractorRef)
        if (refractorMesh) {
            refractorMesh.geometry = refractor.geometry
            refractorMesh.material = refractor.material
            refractorMesh.position.copy(refractor.position)
        }

        // Load dudv texture
        const loader = new TextureLoader()
        loader.load('textures/waterdudv.jpg', (dudvMap) => {
            dudvMap.wrapS = dudvMap.wrapT = RepeatWrapping
            if (refractorMesh && refractorMesh.material) {
                (refractorMesh.material as any).uniforms.tDudv.value = dudvMap
            }
        })
    })

    useFrame(() => {
        timer.update()
        const time = timer.getElapsed()

        const refractorMesh = $$(refractorRef)
        if (refractorMesh && refractorMesh.material) {
            (refractorMesh.material as any).uniforms.time.value = time
        }

        const smallSphere = $$(smallSphereRef)
        if (smallSphere) {
            smallSphere.position.set(
                Math.cos(time) * 30,
                Math.abs(Math.cos(time * 2)) * 20 + 5,
                Math.sin(time) * 30
            )
            smallSphere.rotation.y = (Math.PI / 2) - time
            smallSphere.rotation.z = time * 8
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

                {/* Refractor */}
                <mesh ref={refractorRef} />

                {/* Small sphere */}
                <mesh ref={smallSphereRef}>
                    <icosahedronGeometry args={[5, 0]} />
                    <meshPhongMaterial color={0xffffff} emissive={0x333333} flatShading />
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
                <mesh position={[0, 50, -50]}>
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

export default MaterialsRefraction