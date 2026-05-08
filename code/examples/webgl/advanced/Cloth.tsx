/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame, useThree, useRenderer } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, PlaneGeometry, SphereGeometry, BoxGeometry, Vector3, Matrix4, MeshStandardMaterial, WebGLRenderer } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/PlaneGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_advanced_cloth from Three.js examples.
 * Demonstrates cloth simulation with spring physics.
 *
 * Source: https://threejs.org/examples/webgl_advanced_cloth.html
 *
 * Key features:
 * - Cloth simulation with spring constraints
 * - Real-time physics simulation
 * - Wind force application
 */

const CLOTH_WIDTH = 10
const CLOTH_HEIGHT = 10
const CLOTH_SEGMENTS = 20
const DAMPING = 0.03
const MASS = 0.1
const TIME_STEP = 18 / 1000

// Particle class for cloth simulation
class Particle {
    position: Vector3
    previous: Vector3
    original: Vector3
    acceleration: Vector3
    mass: number
    invMass: number

    constructor(x: number, y: number, z: number) {
        this.position = new Vector3(x, y, z)
        this.previous = new Vector3(x, y, z)
        this.original = new Vector3(x, y, z)
        this.acceleration = new Vector3(0, 0, 0)
        this.mass = MASS
        this.invMass = 1 / MASS
    }

    addForce(force: Vector3) {
        this.acceleration.add(force.multiplyScalar(this.invMass))
    }

    integrate() {
        const newPos = this.position.clone()
        newPos.sub(this.previous)
        newPos.multiplyScalar(1 - DAMPING)
        newPos.add(this.position)
        newPos.add(this.acceleration.multiplyScalar(TIME_STEP * TIME_STEP))

        this.previous.copy(this.position)
        this.position.copy(newPos)
        this.acceleration.set(0, 0, 0)
    }
}

// Constraint class for cloth springs
class Constraint {
    p1: Particle
    p2: Particle
    distance: number

    constructor(p1: Particle, p2: Particle) {
        this.p1 = p1
        this.p2 = p2
        this.distance = p1.position.distanceTo(p2.position)
    }

    satisfy() {
        const diff = this.p2.position.clone().sub(this.p1.position)
        const currentDist = diff.length()
        if (currentDist === 0) return

        const correction = diff.multiplyScalar((currentDist - this.distance) / currentDist)
        const halfCorrection = correction.multiplyScalar(0.5)

        this.p1.position.add(halfCorrection)
        this.p2.position.sub(halfCorrection)
    }
}

// Create cloth particles and constraints
const particles: Particle[] = []
const constraints: Constraint[] = []

const clothGeometry = new PlaneGeometry(
    CLOTH_WIDTH,
    CLOTH_HEIGHT,
    CLOTH_SEGMENTS - 1,
    CLOTH_SEGMENTS - 1
)

const positions = clothGeometry.attributes.position

for (let i = 0; i < positions.count; i++) {
    const x = positions.getX(i)
    const y = positions.getY(i) + 5 // Start above ground
    const z = positions.getZ(i)
    particles.push(new Particle(x, y, z))
}

// Create constraints (horizontal and vertical springs)
for (let y = 0; y < CLOTH_SEGMENTS; y++) {
    for (let x = 0; x < CLOTH_SEGMENTS; x++) {
        const idx = y * CLOTH_SEGMENTS + x

        // Horizontal constraint
        if (x < CLOTH_SEGMENTS - 1) {
            constraints.push(new Constraint(particles[idx], particles[idx + 1]))
        }

        // Vertical constraint
        if (y < CLOTH_SEGMENTS - 1) {
            constraints.push(new Constraint(particles[idx], particles[idx + CLOTH_SEGMENTS]))
        }
    }
}

export const Cloth = () => {
    const clothMeshRef = $<THREE.Mesh>()
    const ballRef = $<THREE.Mesh>()
    const windStrength = $(0.5)

    useFrame(({ clock }) => {
        const clothMesh = $$(clothMeshRef)
        const ball = $$(ballRef)
        if (!clothMesh) return

        const time = clock.getElapsedTime()

        // Apply wind force
        const windForce = new Vector3(
            Math.sin(time * 2) * $$(windStrength),
            Math.cos(time * 1.5) * $$(windStrength) * 0.5,
            Math.sin(time * 3) * $$(windStrength) * 0.3
        )

        // Update particles
        for (const particle of particles) {
            // Add gravity
            particle.addForce(new Vector3(0, -9.8 * particle.mass, 0))

            // Add wind
            particle.addForce(windForce.clone().multiplyScalar(particle.mass))

            // Integrate
            particle.integrate()
        }

        // Satisfy constraints (multiple iterations for stability)
        for (let i = 0; i < 15; i++) {
            for (const constraint of constraints) {
                constraint.satisfy()
            }
        }

        // Pin top corners
        particles[0].position.copy(particles[0].original)
        particles[CLOTH_SEGMENTS - 1].position.copy(particles[CLOTH_SEGMENTS - 1].original)

        // Update geometry positions
        const geometry = clothMesh.geometry as PlaneGeometry
        const posAttr = geometry.attributes.position

        for (let i = 0; i < particles.length; i++) {
            posAttr.setXYZ(i, particles[i].position.x, particles[i].position.y, particles[i].position.z)
        }

        posAttr.needsUpdate = true
        geometry.computeVertexNormals()

        // Animate ball
        if (ball) {
            ball.position.x = Math.sin(time) * 3
            ball.position.y = 2 + Math.cos(time) * 1
            ball.position.z = Math.cos(time * 2) * 2

            // Ball collision with cloth
            const ballRadius = 1.2
            for (const particle of particles) {
                const dist = particle.position.distanceTo(ball.position)
                if (dist < ballRadius) {
                    const normal = particle.position.clone().sub(ball.position).normalize()
                    particle.position.copy(ball.position).add(normal.multiplyScalar(ballRadius))
                }
            }
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 10, 7]} intensity={1} castShadow />

                {/* Cloth mesh */}
                <mesh ref={clothMeshRef} castShadow receiveShadow>
                    <planeGeometry args={[CLOTH_WIDTH, CLOTH_HEIGHT, CLOTH_SEGMENTS - 1, CLOTH_SEGMENTS - 1]} />
                    <meshStandardMaterial color={0xff6b6b} side={THREE.DoubleSide} roughness={0.8} />
                </mesh>

                {/* Collision ball */}
                <mesh ref={ballRef} position={[0, 2, 0]}>
                    <sphereGeometry args={[1.2, 32, 32]} />
                    <meshStandardMaterial color={0x4ecdc4} metalness={0.5} roughness={0.3} />
                </mesh>

                {/* Floor */}
                <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                    <boxGeometry args={[20, 20, 0.1]} />
                    <meshStandardMaterial color={0x333333} />
                </mesh>

                {/* Poles */}
                <mesh position={[-CLOTH_WIDTH / 2, 3, 0]}>
                    <boxGeometry args={[0.2, 8, 0.2]} />
                    <meshStandardMaterial color={0x666666} />
                </mesh>
                <mesh position={[CLOTH_WIDTH / 2, 3, 0]}>
                    <boxGeometry args={[0.2, 8, 0.2]} />
                    <meshStandardMaterial color={0x666666} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 5, 15]} />
            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default Cloth