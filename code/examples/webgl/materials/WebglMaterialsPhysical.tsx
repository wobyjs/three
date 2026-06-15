/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { Color } from 'three'

export const WebglMaterialsPhysical = () => {
    const meshRef = $<THREE.Mesh>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const mesh = $$(meshRef)
        if (mesh) mesh.rotation.y = time * 0.3
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x0a0a0a)}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 10, 7]} intensity={0.8} />
                <mesh ref={meshRef}>
                    <sphereGeometry args={[1.5, 64, 64]} />
                    <meshPhysicalMaterial color={0x3498db} metalness={0.9} roughness={0.1} clearcoat={1} />
                </mesh>
            </scene>
            <perspectiveCamera fov={45} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 3, 8]} />
        </canvas3D>
    )
}

export default WebglMaterialsPhysical