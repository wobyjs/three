/** @jsxImportSource @woby/three */
import { $, $$, useEffect } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/lib/examples/jsm/controls/OrbitControls'
import { ParametricGeometry } from '@woby/three/src/geometries/ParametricGeometry'
import { plane, klein, mobius } from '@woby/three/src/geometries/ParametricFunctions'
import '@woby/three/src/materials/MeshPhongMaterial'

export default function Geometries() {
  const time = $(0)

  useEffect(() => {
    const interval = setInterval(() => {
      time(t => t + 0.0001)
    }, 16)
    return () => clearInterval(interval)
  })

  return (
    <Canvas3D camera={{ type: 'perspective', fov: 45, near: 1, far: 2000, position: [0, 500, 0] }}>
      <ambientLight intensity={1.5} />
      <pointLight intensity={2.5} position={[0, 500, 0]} />

      {/* Sphere */}
      <mesh position={[-300, 0, 300]}>
        <sphereGeometry args={[75, 20, 10]} />
        <meshPhongMaterial />
      </mesh>

      {/* Icosahedron */}
      <mesh position={[-100, 0, 300]}>
        <icosahedronGeometry args={[75]} />
        <meshPhongMaterial />
      </mesh>

      {/* Octahedron */}
      <mesh position={[100, 0, 300]}>
        <octahedronGeometry args={[75]} />
        <meshPhongMaterial />
      </mesh>

      {/* Tetrahedron */}
      <mesh position={[300, 0, 300]}>
        <tetrahedronGeometry args={[75]} />
        <meshPhongMaterial />
      </mesh>

      {/* Plane */}
      <mesh position={[-300, 0, 100]}>
        <planeGeometry args={[100, 100, 4, 4]} />
        <meshPhongMaterial side={2} />
      </mesh>

      {/* Box */}
      <mesh position={[-100, 0, 100]}>
        <boxGeometry args={[100, 100, 100, 4, 4, 4]} />
        <meshPhongMaterial />
      </mesh>

      {/* Circle */}
      <mesh position={[100, 0, 100]}>
        <circleGeometry args={[50, 20, 0, Math.PI * 2]} />
        <meshPhongMaterial side={2} />
      </mesh>

      {/* Ring */}
      <mesh position={[300, 0, 100]}>
        <ringGeometry args={[10, 50, 20, 5, 0, Math.PI * 2]} />
        <meshPhongMaterial side={2} />
      </mesh>

      {/* Cylinder */}
      <mesh position={[-300, 0, -100]}>
        <cylinderGeometry args={[25, 75, 100, 40, 5]} />
        <meshPhongMaterial />
      </mesh>

      {/* Lathe */}
      <mesh position={[-100, 0, -100]}>
        <latheGeometry args={[() => {
          const points = []
          for (let i = 0; i < 50; i++) {
            points.push(new THREE.Vector2(
              Math.sin(i * 0.2) * Math.sin(i * 0.1) * 15 + 50,
              (i - 5) * 2
            ))
          }
          return points
        }, 20]} />
        <meshPhongMaterial />
      </mesh>

      {/* Torus */}
      <mesh position={[100, 0, -100]}>
        <torusGeometry args={[50, 20, 20, 20]} />
        <meshPhongMaterial />
      </mesh>

      {/* TorusKnot */}
      <mesh position={[300, 0, -100]}>
        <torusKnotGeometry args={[50, 10, 50, 20]} />
        <meshPhongMaterial />
      </mesh>

      {/* Capsule */}
      <mesh position={[-300, 0, -300]}>
        <capsuleGeometry args={[20, 50]} />
        <meshPhongMaterial />
      </mesh>

      {/* Parametric Plane */}
      <mesh position={[-100, 0, -300]}>
        <ParametricGeometry args={[plane, 10, 10]} scale={[100, 100, 100]} />
        <meshPhongMaterial side={2} />
      </mesh>

      {/* Parametric Klein */}
      <mesh position={[100, 0, -300]} scale={5}>
        <ParametricGeometry args={[klein, 20, 20]} />
        <meshPhongMaterial side={2} />
      </mesh>

      {/* Parametric Mobius */}
      <mesh position={[300, 0, -300]} scale={30}>
        <ParametricGeometry args={[mobius, 20, 20]} />
        <meshPhongMaterial side={2} />
      </mesh>

      <OrbitControls />
    </Canvas3D>
  )
}
