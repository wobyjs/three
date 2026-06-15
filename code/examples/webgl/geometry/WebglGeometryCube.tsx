/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_geometry_cube

import { $, $$, useFrame } from '@woby/three'
import * as THREE from 'three'

export const WebglGeometryCube = () => {
    const meshRef = $<THREE.Mesh>()

    useFrame(() => {
        const mesh = $$(meshRef)
        if (mesh) {
            mesh.rotation.x += 0.005
            mesh.rotation.y += 0.01
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene>
                <mesh ref={meshRef}>
                    <boxGeometry />
                    <meshBasicMaterial color={0xffffff}>
                        <textureLoader args={['textures/crate.gif']} colorSpace={THREE.SRGBColorSpace} />
                    </meshBasicMaterial>
                </mesh>
            </scene>
            <perspectiveCamera fov={70} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 0, 2]} />
        </canvas3D>
    )
}

export default WebglGeometryCube