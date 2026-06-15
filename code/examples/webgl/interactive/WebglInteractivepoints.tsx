/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { Color } from 'three'

export const WebglInteractivepoints = () => {
    const meshRef = $<THREE.Points>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const mesh = $$(meshRef)
        if (mesh) mesh.rotation.y = time * 0.3
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.5} />
                <points ref={meshRef}>
                    <bufferGeometry>
                        <bufferAttribute attach="attributes-position" args={[new Float32Array(Array.from({ length: 300 }, () => (Math.random() - 0.5) * 10)), 3]} />
                    </bufferGeometry>
                    <pointsMaterial color={0xe74c3c} size={0.1} />
                </points>
            </scene>
            <perspectiveCamera fov={45} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 3, 10]} />
        </canvas3D>
    )
}

export default WebglInteractivepoints