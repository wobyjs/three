/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_loader_texture_tga

import { $, $$ } from "woby"
import { useFrame } from '@woby/three'
import { TGALoader } from 'three/examples/jsm/loaders/TGALoader'
import * as THREE from 'three'

export const LoaderTextureTGA = () => {
    const mesh1Ref = $<THREE.Mesh>()
    const mesh2Ref = $<THREE.Mesh>()

    useFrame((state) => {
        const mesh1 = $$(mesh1Ref)
        const mesh2 = $$(mesh2Ref)
        if (mesh1 && mesh2) {
            // Add rotation if needed
        }
    })

    const loader = new TGALoader()

    // add box 1 - grey8 texture
    const texture1 = loader.load('textures/crate_grey8.tga')
    texture1.colorSpace = THREE.SRGBColorSpace

    // add box 2 - tga texture
    const texture2 = loader.load('textures/crate_color8.tga')
    texture2.colorSpace = THREE.SRGBColorSpace

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene>
                <mesh ref={mesh1Ref} position={[-1, 0, 0]}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshPhongMaterial color={0xffffff} map={texture1} />
                </mesh>

                <mesh ref={mesh2Ref} position={[1, 0, 0]}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshPhongMaterial color={0xffffff} map={texture2} />
                </mesh>

                <ambientLight intensity={1.5} />
                <directionalLight position={[1, 1, 1]} intensity={2.5} />
            </scene>

            <perspectiveCamera fov={45} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 1, 5]} />
            <orbitControls enableZoom={false} />
        </canvas3D>
    )
}