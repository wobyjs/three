/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { Color } from 'three'

export const WebglPanoramaEquirectangular = () => {
    const meshRef = $<THREE.Mesh>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const mesh = $$(meshRef)
        if (mesh) mesh.rotation.y = time * 0.05
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x87ceeb)}>
                <ambientLight intensity={0.8} />
                <directionalLight position={[5, 10, 7]} intensity={0.5} />
                <mesh ref={meshRef}>
                    <sphereGeometry args={[500, 60, 40]} />
                    <meshStandardMaterial color={0x87ceeb} side={-1} />
                </mesh>
            </scene>
            <perspectiveCamera fov={45} aspect={window.innerWidth / window.innerHeight} near={0.1} far={1000} position={[0, 0, 0.1]} />
        </canvas3D>
    )
}

export default WebglPanoramaEquirectangular