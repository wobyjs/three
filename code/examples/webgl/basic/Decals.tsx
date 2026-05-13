/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, DecalGeometry, TextureLoader, Vector3, Euler } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/TorusKnotGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/materials/MeshBasicMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_decals from Three.js examples.
 * Demonstrates decal projection onto 3D surfaces.
 *
 * Source: https://threejs.org/examples/webgl_decals.html
 *
 * Key features:
 * - DecalGeometry for projecting textures onto surfaces
 * - Raycasting for decal placement
 * - Multiple decals on complex geometry
 */

// Create a simple checker texture
function createCheckerTexture(): THREE.Texture {
    const canvas = document.createElement('canvas')
    canvas.width = 128
    canvas.height = 128
    const ctx = canvas.getContext('2d')!

    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, 128, 128)

    ctx.fillStyle = '#ff6b6b'
    const size = 16
    for (let y = 0; y < 8; y++) {
        for (let x = 0; x < 8; x++) {
            if ((x + y) % 2 === 0) {
                ctx.fillRect(x * size, y * size, size, size)
            }
        }
    }

    const texture = new THREE.CanvasTexture(canvas)
    texture.wrapS = THREE.RepeatWrapping
    texture.wrapT = THREE.RepeatWrapping
    return texture
}

export const Decals = () => {
    const sceneRef = $<THREE.Scene>()
    const decalsRef = $<THREE.Group>()
    const meshRef = $<THREE.Mesh>()

    useEffect(() => {
        const scene = $$(sceneRef)
        const decals = $$(decalsRef)
        const mesh = $$(meshRef)
        if (!scene || !decals || !mesh) return

        const texture = createCheckerTexture()
        const raycaster = new THREE.Raycaster()
        const mouse = new THREE.Vector2()

        const onClick = (event: MouseEvent) => {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1

            raycaster.setFromCamera(mouse, scene.userData.camera as THREE.Camera)
            const intersects = raycaster.intersectObject(mesh)

            if (intersects.length > 0) {
                const intersection = intersects[0]

                // Create decal at intersection point
                const position = intersection.point
                const normal = intersection.face?.normal.clone() || new Vector3(0, 1, 0)
                normal.transformDirection(mesh.matrixWorld)

                // Random rotation
                const rotation = new Euler(
                    0,
                    0,
                    Math.random() * Math.PI * 2
                )

                const decalGeometry = new DecalGeometry(
                    mesh,
                    position,
                    rotation,
                    new Vector3(1, 1, 1)
                )

                const decalMaterial = new THREE.MeshStandardMaterial({
                    color: new Color().setHSL(Math.random(), 0.7, 0.5),
                    map: texture,
                    transparent: true,
                    depthTest: true,
                    depthWrite: false,
                    polygonOffset: true,
                    polygonOffsetFactor: -4,
                    side: THREE.DoubleSide
                })

                const decal = new THREE.Mesh(decalGeometry, decalMaterial)
                decals.add(decal)
            }
        }

        window.addEventListener('click', onClick)
        return () => window.removeEventListener('click', onClick)
    })

    useFrame((state) => {
        const mesh = $$(meshRef)
        if (mesh) {
            mesh.rotation.y = (state.clock?.getElapsedTime() ?? 0) * 0.2
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene
                ref={sceneRef}
                background={new Color(0x1a1a2e)}
                userData={(scene: THREE.Scene) => {
                    // Store camera reference for raycasting
                }}
            >
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 10, 5]} intensity={1} />
                <directionalLight position={[-5, -10, -5]} intensity={0.5} />

                {/* Target mesh for decals */}
                <mesh ref={meshRef} position={[0, 0, 0]}>
                    <torusKnotGeometry args={[2, 0.6, 100, 16]} />
                    <meshStandardMaterial color={0x4a90d9} roughness={0.3} metalness={0.5} />
                </mesh>

                {/* Decals group */}
                <group ref={decalsRef} />

                {/* Floor */}
                <mesh position={[0, -4, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <boxGeometry args={[20, 20, 0.1]} />
                    <meshStandardMaterial color={0x333344} roughness={0.8} />
                </mesh>
            </scene>

            <perspectiveCamera
                fov={60}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[0, 2, 8]}
                ref={(cam: THREE.PerspectiveCamera) => {
                    const scene = $$(sceneRef)
                    if (scene) {
                        scene.userData.camera = cam
                    }
                }}
            />
            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default Decals