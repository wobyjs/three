/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_geometry_colors

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import * as THREE from 'three'

export const GeometryColors = () => {
  const groupRef = $<THREE.Group>()
  const cameraRef = $<THREE.PerspectiveCamera>()
  const mouseX = $(0)
  const mouseY = $(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX(e.clientX - window.innerWidth / 2)
      mouseY(e.clientY - window.innerHeight / 2)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  })

  useFrame(() => {
    const camera = $$(cameraRef)
    if (camera) {
      camera.position.x += (mouseX() - camera.position.x) * 0.05
      camera.position.y += (-mouseY() - camera.position.y) * 0.05
      camera.lookAt(0, 0, 0)
    }
  })

  return (
    <Canvas3D>
      <perspectiveCamera ref={cameraRef} fov={20} near={1} far={10000} position={[0, 0, 1800]} />
      <scene background={0xffffff}>
        <directionalLight intensity={3} position={[0, 0, 1]} />

        {/* Shadow meshes */}
        <mesh position={[0, -250, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[300, 300]} />
          <meshBasicMaterial>
            <canvasTexture args={[() => {
              const canvas = document.createElement('canvas')
              canvas.width = 128
              canvas.height = 128
              const ctx = canvas.getContext('2d')!
              const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64)
              gradient.addColorStop(0.1, 'rgba(210,210,210,1)')
              gradient.addColorStop(1, 'rgba(255,255,255,1)')
              ctx.fillStyle = gradient
              ctx.fillRect(0, 0, 128, 128)
              return canvas
            }]} />
          </meshBasicMaterial>
        </mesh>

        <mesh position={[-400, -250, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[300, 300]} />
          <meshBasicMaterial>
            <canvasTexture args={[() => {
              const canvas = document.createElement('canvas')
              canvas.width = 128
              canvas.height = 128
              const ctx = canvas.getContext('2d')!
              const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64)
              gradient.addColorStop(0.1, 'rgba(210,210,210,1)')
              gradient.addColorStop(1, 'rgba(255,255,255,1)')
              ctx.fillStyle = gradient
              ctx.fillRect(0, 0, 128, 128)
              return canvas
            }]} />
          </meshBasicMaterial>
        </mesh>

        <mesh position={[400, -250, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[300, 300]} />
          <meshBasicMaterial>
            <canvasTexture args={[() => {
              const canvas = document.createElement('canvas')
              canvas.width = 128
              canvas.height = 128
              const ctx = canvas.getContext('2d')!
              const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64)
              gradient.addColorStop(0.1, 'rgba(210,210,210,1)')
              gradient.addColorStop(1, 'rgba(255,255,255,1)')
              ctx.fillStyle = gradient
              ctx.fillRect(0, 0, 128, 128)
              return canvas
            }]} />
          </meshBasicMaterial>
        </mesh>

        <group ref={groupRef}>
          {/* Colored icosahedrons will be added via useEffect */}
        </group>
      </scene>
    </Canvas3D>
  )
}

export default GeometryColors
