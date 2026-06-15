/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_framebuffer_texture

import { $, $$, useFrame, useEffect } from '@woby/three'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BufferGeometry'
import '@woby/three/src/materials/LineBasicMaterial'
import '@woby/three/src/objects/Line'
import '@woby/three/src/objects/Sprite'
import '@woby/three/src/materials/SpriteMaterial'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/cameras/OrthographicCamera'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_framebuffer_texture from Three.js examples.
 * Demonstrates framebuffer texture for rendering scene to texture.
 *
 * Source: https://threejs.org/examples/webgl_framebuffer_texture.html
 *
 * Key features:
 * - FramebufferTexture for copying framebuffer to texture
 * - Gosper curve geometry with animated colors
 * - Dual scene rendering (3D + orthographic overlay)
 * - Sprite displaying captured framebuffer
 */

export const WebglFramebufferTexture = () => {
    const lineRef = $<THREE.Line>()
    const textureRef = $<THREE.FramebufferTexture>()
    const spriteRef = $<THREE.Sprite>()
    const rendererRef = $<THREE.WebGLRenderer>()
    const sceneRef = $<THREE.Scene>()
    const sceneOrthoRef = $<THREE.Scene>()
    const cameraRef = $<THREE.PerspectiveCamera>()
    const cameraOrthoRef = $<THREE.OrthographicCamera>()

    const dpr = window.devicePixelRatio
    const textureSize = 128 * dpr
    const vector = new THREE.Vector2()
    const color = new THREE.Color()
    let offset = 0

    useEffect(() => {
        // Create framebuffer texture
        const texture = new THREE.FramebufferTexture(textureSize, textureSize)
        textureRef(texture)

        // Handle window resize
        const handleResize = () => {
            const renderer = $$(rendererRef)
            const camera = $$(cameraRef)
            const cameraOrtho = $$(cameraOrthoRef)
            const sprite = $$(spriteRef)

            if (renderer && camera && cameraOrtho && sprite) {
                const width = window.innerWidth
                const height = window.innerHeight

                camera.aspect = width / height
                camera.updateProjectionMatrix()

                cameraOrtho.left = -width / 2
                cameraOrtho.right = width / 2
                cameraOrtho.top = height / 2
                cameraOrtho.bottom = -height / 2
                cameraOrtho.updateProjectionMatrix()

                renderer.setSize(width, height)

                // Update sprite position
                const halfWidth = width / 2
                const halfHeight = height / 2
                const halfImageWidth = textureSize / 2
                const halfImageHeight = textureSize / 2
                sprite.position.set(-halfWidth + halfImageWidth, halfHeight - halfImageHeight, 1)
            }
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    })

    useFrame(() => {
        const renderer = $$(rendererRef)
        const scene = $$(sceneRef)
        const sceneOrtho = $$(sceneOrthoRef)
        const camera = $$(cameraRef)
        const cameraOrtho = $$(cameraOrthoRef)
        const line = $$(lineRef)
        const texture = $$(textureRef)

        if (renderer && scene && sceneOrtho && camera && cameraOrtho && line && texture) {
            // Update line colors
            const colorAttribute = line.geometry.getAttribute('color')
            const l = colorAttribute.count

            for (let i = 0; i < l; i++) {
                const h = ((offset + i) % l) / l
                color.setHSL(h, 1, 0.5)
                colorAttribute.setX(i, color.r)
                colorAttribute.setY(i, color.g)
                colorAttribute.setZ(i, color.b)
            }

            colorAttribute.needsUpdate = true
            offset -= 25

            // Scene rendering
            renderer.clear()
            renderer.render(scene, camera)

            // Calculate start position for copying data
            vector.x = (window.innerWidth * dpr / 2) - (textureSize / 2)
            vector.y = (window.innerHeight * dpr / 2) - (textureSize / 2)

            renderer.copyFramebufferToTexture(texture, vector)

            renderer.clearDepth()
            renderer.render(sceneOrtho, cameraOrtho)
        }
    })

    // Create gosper curve (simplified for this example)
    const points: number[] = []
    const count = 10000
    for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 20
        const r = i / count * 10
        points.push(Math.cos(angle) * r, Math.sin(angle) * r, 0)
    }

    const geometry = new THREE.BufferGeometry()
    const positionAttribute = new THREE.Float32BufferAttribute(points, 3)
    geometry.setAttribute('position', positionAttribute)
    geometry.center()

    const colorAttribute = new THREE.BufferAttribute(new Float32Array(positionAttribute.array.length), 3)
    colorAttribute.setUsage(THREE.DynamicDrawUsage)
    geometry.setAttribute('color', colorAttribute)

    const material = new THREE.LineBasicMaterial({ vertexColors: true })

    // Create sprite with framebuffer texture
    const spriteMaterial = new THREE.SpriteMaterial({ map: $$(textureRef) })
    const sprite = new THREE.Sprite(spriteMaterial)
    sprite.scale.set(textureSize, textureSize, 1)
    spriteRef(sprite)

    return (
        <>
            <webGLRenderer ref={rendererRef} antialias setPixelRatio={[window.devicePixelRatio]} autoClear={false} />
            <scene ref={sceneRef} background={new Color(0x0a0a0a)}>
                <line ref={lineRef} geometry={geometry} material={material} scale={[0.05, 0.05, 0.05]} />
            </scene>

            <scene ref={sceneOrthoRef}>
                <primitive object={sprite} />
            </scene>

            <perspectiveCamera
                ref={cameraRef}
                fov={70}
                aspect={window.innerWidth / window.innerHeight}
                near={1}
                far={1000}
                position={[0, 0, 20]}
            />

            <orthographicCamera
                ref={cameraOrthoRef}
                left={-window.innerWidth / 2}
                right={window.innerWidth / 2}
                top={window.innerHeight / 2}
                bottom={-window.innerHeight / 2}
                near={1}
                far={10}
                position={[0, 0, 10]}
            />

            <orbitControls enablePan={false} />
        </>
    )
}

export default WebglFramebufferTexture
