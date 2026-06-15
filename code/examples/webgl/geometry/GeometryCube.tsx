/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_geometry_cube

import { $, $$, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'

export const GeometryCube = () => {
  const meshRef = $<THREE.Mesh>()

  useFrame(() => {
    const mesh = $$(meshRef)
    if (mesh) {
      mesh.rotation.x += 0.005
      mesh.rotation.y += 0.01
    }
  })

  return (
    <Canvas3D>
      <perspectiveCamera fov={70} near={0.1} far={100} position={[0, 0, 2]} />
      <scene>
        <mesh ref={meshRef}>
          <boxGeometry />
          <meshBasicMaterial>
            <textureLoader args={['textures/crate.gif']} />
          </meshBasicMaterial>
        </mesh>
      </scene>
    </Canvas3D>
  )
}

export default GeometryCube
