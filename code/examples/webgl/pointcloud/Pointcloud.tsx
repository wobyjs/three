/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { Color, BufferGeometry, Float32BufferAttribute, PointsMaterial } from 'three'

export const WebglPointcloud = () => {
    const pointsRef = $<THREE.Points>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const points = $$(pointsRef)
        if (points) {
            points.rotation.y = time * 0.2
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x0a0a0a)}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 10, 7]} intensity={0.8} />
                <points ref={pointsRef}>
                    <bufferGeometry>
                        <float32BufferAttribute args={[Array.from({ length: 3000 }).flatMap(() => [
                            (Math.random() - 0.5) * 10,
                            (Math.random() - 0.5) * 10,
                            (Math.random() - 0.5) * 10
                        ]), 3]} name="position" />
                    </bufferGeometry>
                    <pointsMaterial args={[{ color: 0x3498db, size: 0.1 }]} />
                </points>
            </scene>
            <perspectiveCamera fov={45} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 3, 10]} />
        </canvas3D>
    )
}

export default WebglPointcloud