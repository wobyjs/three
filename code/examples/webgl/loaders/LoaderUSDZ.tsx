/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_loader_usdz

import { $, $$ } from "woby"
import { useFrame } from '@woby/three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { HDRLoader } from 'three/examples/jsm/loaders/HDRLoader'
import { USDLoader } from 'three/examples/jsm/loaders/USDZLoader'
import * as THREE from 'three'

export const LoaderUSDZ = () => {
    const modelRef = $<THREE.Group>()
    const rendererRef = $<THREE.WebGLRenderer>()

    useFrame((state) => {
        // Rendering is handled by the renderer
    })

    const hdrLoader = new HDRLoader().setPath('textures/equirectangular/')
    const usdzLoader = new USDLoader().setPath('models/usdz/')

    const texture = hdrLoader.load('venice_sunset_1k.hdr')
    const model = usdzLoader.load('saeukkang.usdz')

    texture.mapping = THREE.EquirectangularReflectionMapping

    return (
        <canvas3D>
            <webGLRenderer ref={rendererRef} antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} toneMapping={THREE.ACESFilmicToneMapping} toneMappingExposure={2.0} />
            <scene background={texture} environment={texture}>
                <group ref={modelRef} position={[0, 0.25, -0.25]}>
                    {/* Model loaded from usdz file */}
                </group>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 0.75, -1.5]} />
            <orbitControls minDistance={1} maxDistance={8} />
        </canvas3D>
    )
}