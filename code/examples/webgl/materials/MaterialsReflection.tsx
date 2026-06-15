/** @jsxImportSource @woby/three */

import { $, $$, useFrame, useEffect } from 'woby'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, CubeTextureLoader, CubeRefractionMapping } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/materials/MeshPhongMaterial'
import '@woby/three/src/materials/MeshLambertMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/PointLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_reflection from Three.js examples.
 * Demonstrates cube map reflections.
 *
 * Source: https://threejs.org/examples/webgl_reflection.html
 */

export const MaterialsReflection = () => {
    const mesh1Ref = $<THREE.Mesh>()
    const mesh2Ref = $<THREE.Mesh>()
    const mesh3Ref = $<THREE.Mesh>()

    useEffect(() => {
        const path = 'textures/cube/SwedishRoyalCastle/'
        const format = '.jpg'
        const urls = [
            path + 'px' + format, path + 'nx' + format,
            path + 'py' + format, path + 'ny' + format,
            path + 'pz' + format, path + 'nz' + format
        ]

        const reflectionCube = new CubeTextureLoader().load(urls)
        const refractionCube = new CubeTextureLoader().load(urls)
        refractionCube.mapping = CubeRefractionMapping

        // Update materials with cube maps
        const mesh1 = $$(mesh1Ref)
        if (mesh1) {
            (mesh1.material as THREE.MeshLambertMaterial).envMap = reflectionCube
        }

        const mesh2 = $$(mesh2Ref)
        if (mesh2) {
            (mesh2.material as THREE.MeshLambertMaterial).envMap = refractionCube
            (mesh2.material as THREE.MeshLambertMaterial).refractionRatio = 0.95
        }

        const mesh3 = $$(mesh3Ref)
        if (mesh3) {
            (mesh3.material as THREE.MeshLambertMaterial).envMap = reflectionCube
            (mesh3.material as THREE.MeshLambertMaterial).combine = THREE.MixOperation
            (mesh3.material as THREE.MeshLambertMaterial).reflectivity = 0.3
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x000000)}>
                <ambientLight intensity={3} color={0xffffff} />
                <pointLight intensity={200} color={0xffffff} />

                {/* Reflection head */}
                <mesh ref={mesh1Ref} position={[0, -3, 0]} scale={0.1}>
                    <sphereGeometry args={[100, 32, 32]} />
                    <meshLambertMaterial color={0xffffff} />
                </mesh>

                {/* Refraction head */}
                <mesh ref={mesh2Ref} position={[-6, -3, 0]} scale={0.1}>
                    <sphereGeometry args={[100, 32, 32]} />
                    <meshLambertMaterial color={0xfff700} />
                </mesh>

                {/* Mixed reflection/refraction head */}
                <mesh ref={mesh3Ref} position={[6, -3, 0]} scale={0.1}>
                    <sphereGeometry args={[100, 32, 32]} />
                    <meshLambertMaterial color={0xffaa00} />
                </mesh>
            </scene>

            <perspectiveCamera fov={50} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 0, 13]} />
            <orbitControls enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 4} maxPolarAngle={Math.PI / 1.5} />
        </canvas3D>
    )
}

export default MaterialsReflection