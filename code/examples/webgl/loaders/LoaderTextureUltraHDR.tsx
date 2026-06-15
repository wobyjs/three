/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_loader_texture_ultrahdr

import { $, $$ } from "woby"
import { useFrame, useThree } from '@woby/three'
import { UltraHDRLoader } from 'three/examples/jsm/loaders/UltraHDRLoader'
import * as THREE from 'three'

export const LoaderTextureUltrahdr = () => {
    const torusMeshRef = $<THREE.Mesh>()
    const params = {
        autoRotate: true,
        metalness: 1.0,
        roughness: 0.0,
        exposure: 1.0,
        resolution: '2k',
        type: 'HalfFloatType'
    }

    useFrame((state) => {
        const torusMesh = $$(torusMeshRef)
        if (torusMesh) {
            torusMesh.material.roughness = params.roughness
            torusMesh.material.metalness = params.metalness

            if (params.autoRotate) {
                torusMesh.rotation.y += 0.005
            }
        }
    })

    const { scene } = useThree()
    const loader = new UltraHDRLoader()
    loader.setDataType(THREE.FloatType)

    // Load environment
    loader.load(`textures/equirectangular/spruit_sunrise_${params.resolution}.hdr.jpg`, (texture) => {
        texture.mapping = THREE.EquirectangularReflectionMapping
        texture.needsUpdate = true

        scene.background = texture
        scene.environment = texture
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} toneMapping={THREE.ACESFilmicToneMapping} toneMappingExposure={params.exposure} />
            <scene>
                <mesh ref={torusMeshRef}>
                    <torusKnotGeometry args={[1, 0.4, 128, 128, 1, 3]} />
                    <meshStandardMaterial roughness={params.roughness} metalness={params.metalness} />
                </mesh>
            </scene>

            <perspectiveCamera fov={50} aspect={window.innerWidth / window.innerHeight} near={1} far={500} position={[0, 0, -6]} />
            <orbitControls />
        </canvas3D>
    )
}