# Phase 9: Physics Patterns

**Purpose:** Document patterns for physics integration in @woby/three JSX.

---

## Pattern 1: Physics World Initialization

**Note:** All physics examples in this phase use simplified physics simulation without actual physics engine integration. For production use, integrate with Ammo.js, Jolt.js, or Rapier.

**Simplified Physics World:**
```tsx
interface PhysicsBody {
    mesh: THREE.Mesh
    position: Vector3
    velocity: Vector3
    rotation: THREE.Euler
    angularVelocity: Vector3
    mass: number
}

const bodies: PhysicsBody[] = []
const gravity = new Vector3(0, -9.81, 0)
```

**With Real Physics Engine (Ammo.js):**
```tsx
// Load Ammo.js
await Ammo()

// Create physics world
const collisionConfig = new Ammo.btDefaultCollisionConfiguration()
const dispatcher = new Ammo.btCollisionDispatcher(collisionConfig)
const broadphase = new Ammo.btDbvtBroadphase()
const solver = new Ammo.btSequentialImpulseConstraintSolver()
const world = new Ammo.btDiscreteDynamicsWorld(dispatcher, broadphase, solver, collisionConfig)
world.setGravity(new Ammo.btVector3(0, -9.81, 0))
```

---

## Pattern 2: Physics Step in useFrame

**Simplified:**
```tsx
useFrame((state) => {
    const delta = Math.min(state.clock?.getDelta() ?? 0.016, 0.033)

    bodies.forEach(body => {
        // Apply gravity
        body.velocity.add(gravity.clone().multiplyScalar(delta))

        // Update position
        body.position.add(body.velocity.clone().multiplyScalar(delta))

        // Update rotation
        body.mesh.rotation.x += body.angularVelocity.x * delta

        // Collision detection
        if (body.mesh.position.y < groundY) {
            body.mesh.position.y = groundY
            body.velocity.y *= -0.5  // Bounce
        }
    })
})
```

**With Physics Engine:**
```tsx
useFrame(() => {
    world.step()

    bodies.forEach(({ mesh, body }) => {
        const ms = body.getMotionState()
        if (ms) {
            ms.getWorldTransform(transform)
            const p = transform.getOrigin()
            mesh.position.set(p.x(), p.y(), p.z())
        }
    })
})
```

---

## Pattern 3: Instanced Physics

**Key:** Use InstancedMesh for efficient rendering of many physics objects.

```tsx
const INSTANCE_COUNT = 500
const dummy = new Object3D()

const meshRef = $<InstancedMesh>()
const bodies: PhysicsBody[] = []

useFrame(() => {
    const mesh = $$(meshRef)
    if (!mesh) return

    bodies.forEach((body, i) => {
        // Physics update...

        // Update instance matrix
        dummy.position.copy(body.position)
        dummy.rotation.copy(body.rotation)
        dummy.scale.setScalar(body.scale)
        dummy.updateMatrix()
        mesh.setMatrixAt(i, dummy.matrix)
    })

    mesh.instanceMatrix.needsUpdate = true
})

return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, INSTANCE_COUNT]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={0x4ecdc4} />
    </instancedMesh>
)
```

---

## Pattern 4: Soft Body Physics (Cloth)

**Verlet Integration:**
```tsx
interface ClothNode {
    position: Vector3
    previous: Vector3
    acceleration: Vector3
    pinned: boolean
}

const nodes: ClothNode[] = []

useFrame((state) => {
    const delta = state.clock?.getDelta() ?? 0.016

    nodes.forEach(node => {
        if (node.pinned) return

        // Verlet integration
        const velocity = node.position.clone().sub(node.previous)
        velocity.multiplyScalar(1 - DAMPING)

        node.previous.copy(node.position)
        node.position.add(velocity)
        node.position.add(node.acceleration.multiplyScalar(delta * delta))
    })

    // Constraint satisfaction
    satisfyConstraints()

    // Update geometry
    const positions = geometry.attributes.position.array
    nodes.forEach((node, i) => {
        positions[i * 3] = node.position.x
        positions[i * 3 + 1] = node.position.y
        positions[i * 3 + 2] = node.position.z
    })
    geometry.attributes.position.needsUpdate = true
})
```

---

## Pattern 5: Joint Constraints

**Distance Constraint (Chain):**
```tsx
const satisfyConstraints = () => {
    for (let iteration = 0; iteration < 10; iteration++) {
        for (let i = 0; i < chainLength - 1; i++) {
            const nodeA = chainNodes[i]
            const nodeB = chainNodes[i + 1]

            const diff = nodeB.position.clone().sub(nodeA.position)
            const distance = diff.length()
            const correction = diff.normalize().multiplyScalar(
                (distance - restLength) * stiffness * 0.5
            )

            if (!nodeA.pinned) nodeA.position.add(correction)
            if (!nodeB.pinned) nodeB.position.sub(correction)
        }
    }
}
```

---

## Pattern 6: Terrain Collision

**Heightfield:**
```tsx
const getTerrainHeight = (x: number, z: number): number => {
    const i = Math.floor((x / TERRAIN_SIZE + 0.5) * TERRAIN_SEGMENTS)
    const j = Math.floor((z / TERRAIN_SIZE + 0.5) * TERRAIN_SEGMENTS)

    // Bilinear interpolation
    const fi = (x / TERRAIN_SIZE + 0.5) * TERRAIN_SEGMENTS - i
    const fj = (z / TERRAIN_SIZE + 0.5) * TERRAIN_SEGMENTS - j

    return h00 * (1 - fi) * (1 - fj) +
        h10 * fi * (1 - fj) +
        h01 * (1 - fi) * fj +
        h11 * fi * fj
}

const getTerrainNormal = (x: number, z: number): Vector3 => {
    const eps = 0.1
    const hL = getTerrainHeight(x - eps, z)
    const hR = getTerrainHeight(x + eps, z)
    const hD = getTerrainHeight(x, z - eps)
    const hU = getTerrainHeight(x, z + eps)

    return new Vector3(hL - hR, 2 * eps, hD - hU).normalize()
}
```

---

## Pattern 7: Vehicle Physics

**Keyboard Controls:**
```tsx
const keys: { [key: string]: boolean } = {}

useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
        keys[e.key.toLowerCase()] = true
    }
    const handleKeyUp = (e: KeyboardEvent) => {
        keys[e.key.toLowerCase()] = false
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    return () => {
        window.removeEventListener('keydown', handleKeyDown)
        window.removeEventListener('keyup', handleKeyUp)
    }
})

useFrame(() => {
    if (keys['w']) throttle = 20
    if (keys['s']) throttle = -15
    if (keys['a']) steering = 0.4
    if (keys['d']) steering = -0.4
    if (keys[' ']) brake = true
})
```

---

## Pattern 8: Sleep Optimization

**For performance with many physics objects:**
```tsx
interface PhysicsBody {
    sleepTimer: number
    isSleeping: boolean
}

useFrame(() => {
    bodies.forEach(body => {
        if (body.isSleeping) {
            // Skip physics update for sleeping bodies
            return
        }

        // Physics update...

        // Check for sleep
        const speed = body.velocity.length()
        if (speed < 0.1 && body.position.y < groundThreshold) {
            body.sleepTimer += delta
            if (body.sleepTimer > 2) {
                body.isSleeping = true
            }
        } else {
            body.sleepTimer = 0
        }
    })
})
```

---

## Physics Engine Comparison

| Feature | Ammo.js | Jolt | Rapier |
|---------|---------|------|--------|
| Soft bodies | Yes | Limited | No |
| Vehicles | Manual | Built-in | Manual |
| Sleep | Manual | Built-in | Built-in |
| Joints | Yes | Yes | Yes |
| Terrain | Heightfield | Heightfield | Heightfield |
| Performance | Good | Excellent | Excellent |
| API Style | C++ style | Modern | Modern |

---

## Quick Reference

| Physics Feature | Implementation |
|-----------------|----------------|
| Gravity | `velocity.add(gravity.clone().multiplyScalar(delta))` |
| Collision | `if (position.y < ground) velocity.y *= -restitution` |
| Bounce | `velocity.multiplyScalar(-restitution)` |
| Damping | `velocity.multiplyScalar(0.99)` |
| Instancing | `mesh.setMatrixAt(i, dummy.matrix)` |
| Cloth | Verlet integration + constraints |
| Joints | Distance constraints with iterations |
| Vehicle | Steering + throttle + wheel rotation |