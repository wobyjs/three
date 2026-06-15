/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { Color } from 'three'

export const WebglGeometrySplineeditor = () => {
    const groupRef = $<THREE.Group>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const group = $$(groupRef)
        if (group) group.rotation.y = time * 0.1
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 10, 7]} intensity={0.8} />
                <group ref={groupRef}>
                    <mesh>
                        <tubeGeometry args={[new (require('three').CatmullRomCurve3)([new (require('three').Vector3)(-2, 0, 0), new (require('three').Vector3)(-1, 1, 0), new (require('three').Vector3)(0, 0, 0), new (require('three').Vector3)(1, 1, 0), new (require('three').Vector3)(2, 0, 0)]), 32, 0.2, 8, false]} />
                        <meshStandardMaterial color={0x9b59b6} />
                    </mesh>
                </group>
            </scene>
            <perspectiveCamera fov={45} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 3, 8]} />
        </canvas3D>
    )
}

export default WebglGeometrySplineeditor