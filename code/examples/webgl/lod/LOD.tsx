/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { FlyControls } from '@woby/three/examples/jsm/controls/FlyControls'
import { Color } from 'three'
import * as THREE from 'three'

import '@woby/three/src/geometries/IcosahedronGeometry'
import '@woby/three/src/materials/MeshLambertMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/objects/LOD'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/PointLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_lod from Three.js examples.
 * Demonstrates Level of Detail (LOD) rendering with 1000 LOD objects using FlyControls.
 *
 * Source: https://threejs.org/examples/webgl_lod.html
 */

export const LOD = () => {
    const cameraRef = $<THREE.PerspectiveCamera>(null)
    const timerRef = $(0)

    useFrame((state) => {
        const camera = $$(cameraRef)
        if (camera) {
            const time = performance.now() * 0.001
            timerRef(time)
        }
    })

    // Create LOD levels array
    const geometryLevels = [
        { detail: 16, distance: 50 },
        { detail: 8, distance: 300 },
        { detail: 4, distance: 1000 },
        { detail: 2, distance: 2000 },
        { detail: 1, distance: 8000 },
    ]

    // Create 1000 LOD objects with randomized positions
    const lodObjects: JSX.Element[] = []
    for (let j = 0; j < 1000; j++) {
        const lodKey = `lod-${j}`
        const positions = {
            x: 10000 * (0.5 - Math.random()),
            y: 7500 * (0.5 - Math.random()),
            z: 10000 * (0.5 - Math.random()),
        }

        lodObjects.push(
            <LOD key={lodKey} position={[positions.x, positions.y, positions.z]}>
                {geometryLevels.map((level, i) => (
                    <mesh key={`lod-${j}-level-${i}`} scale={[1.5, 1.5, 1.5]}>
                        <icosahedronGeometry args={[100, level.detail]} />
                        <meshLambertMaterial color={0xffffff} wireframe />
                    </mesh>
                ))}
            </LOD>
        )
    }

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x000000)} fog={new THREE.Fog(0x000000, 1, 15000)}>
                <pointLight color={0xff2200} intensity={3} position={[0, 0, 0]} />
                <directionalLight color={0xffffff} intensity={3} position={[0, 0, 1]} />
                {lodObjects}
            </scene>

            <perspectiveCamera
                ref={cameraRef}
                fov={45}
                aspect={window.innerWidth / window.innerHeight}
                near={1}
                far={15000}
                position={[0, 0, 1000]}
            >
                <FlyControls movementSpeed={1000} rollSpeed={Math.PI / 10} />
            </perspectiveCamera>
        </canvas3D>
    )
}

export default LOD
