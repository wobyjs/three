/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_loader_texture_pvrtc

import { $, $$ } from "woby"
import { useFrame } from '@woby/three'
import { PVRLoader } from 'three/examples/jsm/loaders/PVRLoader'
import * as THREE from 'three'

export const LoaderTexturePVRTC = () => {
    const meshesRef = $<THREE.Mesh[]>([])

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const meshes = $$(meshesRef)
        meshes.forEach(mesh => {
            mesh.rotation.x = time
            mesh.rotation.y = time
        })
    })

    const loader = new PVRLoader()

    const disturb_4bpp_rgb = loader.load('textures/compressed/disturb_4bpp_rgb.pvr')
    const disturb_4bpp_rgb_v3 = loader.load('textures/compressed/disturb_4bpp_rgb_v3.pvr')
    const disturb_4bpp_rgb_mips = loader.load('textures/compressed/disturb_4bpp_rgb_mips.pvr')
    const disturb_2bpp_rgb = loader.load('textures/compressed/disturb_2bpp_rgb.pvr')
    const flare_4bpp_rgba = loader.load('textures/compressed/flare_4bpp_rgba.pvr')
    const flare_2bpp_rgba = loader.load('textures/compressed/flare_2bpp_rgba.pvr')

    const park3_cube_nomip_4bpp_rgb = loader.load('textures/compressed/park3_cube_nomip_4bpp_rgb.pvr', (texture) => {
        texture.magFilter = THREE.LinearFilter
        texture.minFilter = THREE.LinearFilter
        texture.mapping = THREE.CubeReflectionMapping
        texture.colorSpace = THREE.SRGBColorSpace
    })

    const park3_cube_mip_2bpp_rgb_v3 = loader.load('textures/compressed/park3_cube_mip_2bpp_rgb_v3.pvr', (texture) => {
        texture.magFilter = THREE.LinearFilter
        texture.minFilter = THREE.LinearFilter
        texture.mapping = THREE.CubeReflectionMapping
        texture.colorSpace = THREE.SRGBColorSpace
    })

    disturb_2bpp_rgb.minFilter = disturb_2bpp_rgb.magFilter = flare_4bpp_rgba.minFilter =
    flare_4bpp_rgba.magFilter = disturb_4bpp_rgb.minFilter = disturb_4bpp_rgb.magFilter =
    disturb_4bpp_rgb_v3.minFilter = disturb_4bpp_rgb_v3.magFilter = flare_2bpp_rgba.minFilter =
    flare_2bpp_rgba.magFilter = THREE.LinearFilter

    disturb_2bpp_rgb.colorSpace = flare_4bpp_rgba.colorSpace = disturb_4bpp_rgb.colorSpace =
    disturb_4bpp_rgb_v3.colorSpace = flare_2bpp_rgba.colorSpace = THREE.SRGBColorSpace

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene>
                {/* Row 1 */}
                <mesh ref={$$(meshesRef)[0] as any} position={[-500, 200, 0]}>
                    <boxGeometry args={[200, 200, 200]} />
                    <meshBasicMaterial map={disturb_4bpp_rgb} />
                </mesh>

                <mesh ref={$$(meshesRef)[1] as any} position={[-166, 200, 0]}>
                    <boxGeometry args={[200, 200, 200]} />
                    <meshBasicMaterial map={disturb_4bpp_rgb_mips} />
                </mesh>

                <mesh ref={$$(meshesRef)[2] as any} position={[166, 200, 0]}>
                    <boxGeometry args={[200, 200, 200]} />
                    <meshBasicMaterial map={disturb_2bpp_rgb} />
                </mesh>

                <mesh ref={$$(meshesRef)[3] as any} position={[500, 200, 0]}>
                    <boxGeometry args={[200, 200, 200]} />
                    <meshBasicMaterial map={disturb_4bpp_rgb_v3} />
                </mesh>

                {/* Row 2 */}
                <mesh ref={$$(meshesRef)[4] as any} position={[-500, -200, 0]}>
                    <boxGeometry args={[200, 200, 200]} />
                    <meshBasicMaterial map={flare_4bpp_rgba} side={THREE.DoubleSide} depthTest={false} transparent />
                </mesh>

                <mesh ref={$$(meshesRef)[5] as any} position={[-166, -200, 0]}>
                    <boxGeometry args={[200, 200, 200]} />
                    <meshBasicMaterial map={flare_2bpp_rgba} side={THREE.DoubleSide} depthTest={false} transparent />
                </mesh>

                <mesh ref={$$(meshesRef)[6] as any} position={[166, -200, 0]}>
                    <torusGeometry args={[100, 50, 32, 24]} />
                    <meshBasicMaterial envMap={park3_cube_nomip_4bpp_rgb} />
                </mesh>

                <mesh ref={$$(meshesRef)[7] as any} position={[500, -200, 0]}>
                    <torusGeometry args={[100, 50, 32, 24]} />
                    <meshBasicMaterial envMap={park3_cube_mip_2bpp_rgb_v3} />
                </mesh>
            </scene>

            <perspectiveCamera fov={50} aspect={window.innerWidth / window.innerHeight} near={1} far={2000} position={[0, 0, 1000]} />
        </canvas3D>
    )
}