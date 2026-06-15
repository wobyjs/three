/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from 'woby'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { Color, TextureLoader, SRGBColorSpace, SphereGeometry, MathUtils } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/materials/MeshBasicMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_panorama_equirectangular from Three.js examples.
 * Demonstrates equirectangular panorama viewer with drag-to-rotate.
 *
 * Source: https://threejs.org/examples/webgl_panorama_equirectangular.html
 */

export const PanoramaEquirectangular = () => {
    const meshRef = $<THREE.Mesh>()
    let isUserInteracting = false
    let onPointerDownMouseX = 0
    let onPointerDownMouseY = 0
    let lon = 0
    let onPointerDownLon = 0
    let lat = 0
    let onPointerDownLat = 0
    let phi = 0
    let theta = 0

    useEffect(() => {
        // Load panorama texture
        const texture = new TextureLoader().load('textures/2294472375_24a3b8ef46_o.jpg')
        texture.colorSpace = SRGBColorSpace

        const mesh = $$(meshRef)
        if (mesh) {
            (mesh.material as THREE.MeshBasicMaterial).map = texture
        }
    })

    useFrame(() => {
        if (isUserInteracting === false) {
            lon += 0.1
        }

        lat = Math.max(-85, Math.min(85, lat))
        phi = MathUtils.degToRad(90 - lat)
        theta = MathUtils.degToRad(lon)

        const x = 500 * Math.sin(phi) * Math.cos(theta)
        const y = 500 * Math.cos(phi)
        const z = 500 * Math.sin(phi) * Math.sin(theta)
    })

    // Setup event handlers (would need DOM event integration)
    const handlePointerDown = (event: PointerEvent) => {
        if (event.isPrimary === false) return
        isUserInteracting = true
        onPointerDownMouseX = event.clientX
        onPointerDownMouseY = event.clientY
        onPointerDownLon = lon
        onPointerDownLat = lat
    }

    const handlePointerMove = (event: PointerEvent) => {
        if (event.isPrimary === false) return
        lon = (onPointerDownMouseX - event.clientX) * 0.1 + onPointerDownLon
        lat = (event.clientY - onPointerDownMouseY) * 0.1 + onPointerDownLat
    }

    const handlePointerUp = (event: PointerEvent) => {
        if (event.isPrimary === false) return
        isUserInteracting = false
    }

    const handleWheel = (event: WheelEvent) => {
        const fov = 75 + event.deltaY * 0.05
        // Would need to update camera fov
    }

    return (
        <canvas3D>
            <webGLRenderer setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene>
                <mesh ref={meshRef} scale={[-1, 1, 1]}>
                    <sphereGeometry args={[500, 60, 40]} />
                    <meshBasicMaterial />
                </mesh>
            </scene>
            <perspectiveCamera fov={75} aspect={window.innerWidth / window.innerHeight} near={1} far={1100} position={[0, 0, 0]} />
        </canvas3D>
    )
}

export default PanoramaEquirectangular