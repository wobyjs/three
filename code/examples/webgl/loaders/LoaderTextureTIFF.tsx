/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_loader_texture_tiff

import { $, $$ } from "woby"
import { useFrame } from '@woby/three'
import { TIFFLoader } from 'three/examples/jsm/loaders/TIFFLoader'
import * as THREE from 'three'

export const LoaderTextureTIFF = () => {
    const mesh1Ref = $<THREE.Mesh>()
    const mesh2Ref = $<THREE.Mesh>()
    const mesh3Ref = $<THREE.Mesh>()

    useFrame((state) => {
        // Animation frame handler
    })

    const loader = new TIFFLoader()
    const geometry = new THREE.PlaneGeometry(1, 1)

    // uncompressed
    const texture1 = loader.load('textures/tiff/crate_uncompressed.tif')
    texture1.colorSpace = THREE.SRGBColorSpace

    // LZW
    const texture2 = loader.load('textures/tiff/crate_lzw.tif')
    texture2.colorSpace = THREE.SRGBColorSpace

    // JPEG
    const texture3 = loader.load('textures/tiff/crate_jpeg.tif')
    texture3.colorSpace = THREE.SRGBColorSpace

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene>
                <mesh ref={mesh1Ref} position={[-1.5, 0, 0]}>
                    <planeGeometry args={[1, 1]} />
                    <meshBasicMaterial map={texture1} />
                </mesh>

                <mesh ref={mesh2Ref} position={[0, 0, 0]}>
                    <planeGeometry args={[1, 1]} />
                    <meshBasicMaterial map={texture2} />
                </mesh>

                <mesh ref={mesh3Ref} position={[1.5, 0, 0]}>
                    <planeGeometry args={[1, 1]} />
                    <meshBasicMaterial map={texture3} />
                </mesh>
            </scene>

            <perspectiveCamera fov={45} aspect={window.innerWidth / window.innerHeight} near={0.01} far={10} position={[0, 0, 4]} />
        </canvas3D>
    )
}