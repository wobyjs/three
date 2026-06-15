/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { Color } from 'three'

export const WebglMaterialsCubemapRefraction = () => {
    const meshRef = $<THREE.Mesh>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const mesh = $$(meshRef)
        if (mesh) {
            mesh.rotation.x = time * 0.2
            mesh.rotation.y = time * 0.3
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x0a0a0a)}>
                <ambientLight intensity={0.3} />
                <mesh ref={meshRef}>
                    <icosahedronGeometry args={[1.5, 1]} />
                    <meshPhysicalMaterial color={0xffffff} metalness={0} roughness={0} transmission={1} thickness={1.5} />
                </mesh>
            </scene>
            <perspectiveCamera fov={45} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 3, 8]} />
        </canvas3D>
    )
}

export default WebglMaterialsCubemapRefraction