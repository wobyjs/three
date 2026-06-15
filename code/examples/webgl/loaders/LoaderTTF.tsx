/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_loader_ttf

import { $, $$ } from "woby"
import { useFrame } from '@woby/three'
import { TTFLoader } from 'three/examples/jsm/loaders/TTFLoader'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import * as THREE from 'three'

export const LoaderTTF = () => {
    const groupRef = $<THREE.Group>()

    useFrame((state) => {
        const group = $$(groupRef)
        if (group) {
            // Target rotation logic handled by pointer events
        }
    })

    const depth = 20
    const size = 70
    const hover = 30
    const curveSegments = 4
    const bevelThickness = 2
    const bevelSize = 1.5

    const text = 'three.js'
    const material = new THREE.MeshPhongMaterial({ color: 0xffffff, flatShading: true })

    const loader = new TTFLoader()
    const font = loader.load('fonts/ttf/kenpixel.ttf')

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new THREE.Color(0x000000)} fog={new THREE.Fog(0x000000, 250, 1400)}>
                <directionalLight intensity={0.4} position={[0, 0, 1].normalize()} />
                <directionalLight intensity={2} position={[0, hover, 10]} color={new THREE.Color().setHSL(Math.random(), 1, 0.5)} />

                <group ref={groupRef} position={[0, 100, 0]}>
                    {/* Text mesh would be created from loaded font */}
                    <mesh position={[0, hover, 0]}>
                        <textGeometry args={[text, {
                            font,
                            size,
                            depth,
                            curveSegments,
                            bevelThickness,
                            bevelSize,
                            bevelEnabled: true
                        }]} />
                        <meshPhongMaterial color={0xffffff} flatShading />
                    </mesh>
                </group>

                {/* Ground plane */}
                <mesh position={[0, 100, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <planeGeometry args={[10000, 10000]} />
                    <meshBasicMaterial color={0xffffff} opacity={0.5} transparent />
                </mesh>
            </scene>

            <perspectiveCamera fov={30} aspect={window.innerWidth / window.innerHeight} near={1} far={1500} position={[0, 400, 700]} />
            <orbitControls />
        </canvas3D>
    )
}