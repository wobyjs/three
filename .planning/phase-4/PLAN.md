---
phase: 04-core-webgl-part3
plan: 01
type: execute
wave: 1
depends_on: [03-core-webgl-part2]
files_modified: []
autonomous: true
requirements: [PHASE4-01, PHASE4-02, PHASE4-03, PHASE4-04]
user_setup: []

must_haves:
  truths:
    - "Advanced material examples demonstrate PBR rendering"
    - "Animation examples show skeletal and morph target animation"
    - "Particle examples render large numbers of particles efficiently"
    - "Physics examples integrate with physics engines"
  artifacts:
    - path: "code/examples/webgl/materials/*.tsx"
      provides: "Advanced material examples"
    - path: "code/examples/webgl/animation/*.tsx"
      provides: "Animation system examples"
    - path: "code/examples/webgl/particles/*.tsx"
      provides: "Particle system examples"
    - path: "code/examples/webgl/physics/*.tsx"
      provides: "Physics integration examples"
  key_links:
    - from: "code/examples/webgl/physics/*"
      to: "physics libraries"
      via: "external dependencies"
      pattern: "import * from 'ammo' | 'rapier' | 'jolt'"
---

# Phase 4: Core WebGL - Part 3

**Duration**: 4-6 weeks
**Goal**: Port ~65 advanced webgl examples covering advanced materials, animation systems, particles, and physics integration.

## Overview

This phase completes the core WebGL port with advanced examples. These examples demonstrate sophisticated Three.js features including physically-based rendering, complex animation systems, particle effects, and physics engine integration.

## Dependencies

- Phase 3 complete (lights, textures, shaders, loaders)
- Physics engine libraries available (optional)
- Animation data and skeleton files accessible

## Categories

### Category 1: Advanced Materials (~20 examples)
Physically-based rendering and advanced material effects.

**Examples:**
- `webgl_materials_physical` - Physical material properties
- `webgl_materials_physical_clearcoat` - Clearcoat layer
- `webgl_materials_physical_transmission` - Glass transmission
- `webgl_materials_physical_transmission_alpha` - Alpha transmission
- `webgl_materials_physical_transmission_refraction` - Refraction
- `webgl_materials_physical_sheen` - Sheen (fabric)
- `webgl_materials_physical_iridescence` - Iridescence effect
- `webgl_materials_physical_anisotropy` - Anisotropic highlights
- `webgl_materials_envmaps` - Environment mapping
- `webgl_materials_envmaps_exr` - EXR environment maps
- `webgl_materials_envmaps_groundprojected` - Ground-projected env maps
- `webgl_materials_bumpmap` - Bump mapping
- `webgl_materials_bumpmap_skin` - Skin bump mapping
- `webgl_materials_subsurface` - Subsurface scattering
- `webgl_materials_translucency` - Translucency
- `webgl_materials_toon` - Toon/cel shading
- `webgl_materials_reflectivity` - Reflectivity control
- `webgl_materials_sss` - Screen-space subsurface
- `webgl_materials_volume` - Volumetric rendering
- `webgl_materials_pbr` - PBR workflow

### Category 2: Animation Systems (~15 examples)
Skeletal animation, morph targets, and animation blending.

**Examples:**
- `webgl_animation_keyframes` - Keyframe animation (DONE in Phase 1)
- `webgl_animation_multiple` - Multiple clips (DONE in Phase 1)
- `webgl_animation_skinning` - Skeletal animation
- `webgl_animation_skinning_additive` - Additive animation
- `webgl_animation_skinning_blending` - Animation blending
- `webgl_animation_skinning_morph` - Morph targets with skinning
- `webgl_animation_skeleton` - Skeleton visualization
- `webgl_animation_bones` - Bone manipulation
- `webgl_animation_expression` - Facial expression
- `webgl_animation_ik` - Inverse kinematics
- `webgl_animation_walk` - Walk cycle
- `webgl_animation_playground` - Animation playground
- `webgl_animation_gpgpu` - GPU animation
- `webgl_animation_instancing` - Instanced animation
- `webgl_animation_retargeting` - Animation retargeting

### Category 3: Particles (~15 examples)
Particle systems and point cloud rendering.

**Examples:**
- `webgl_points` - Basic points
- `webgl_points_billboards` - Billboard particles
- `webgl_points_custom` - Custom point shaders
- `webgl_points_dynamic` - Dynamic particles
- `webgl_points_sprites` - Sprite particles
- `webgl_points_waves` - Wave particles
- `webgl_points_material` - Point material
- `webgl_gpu_particle` - GPU particles
- `webgl_gpu_particle_smooth` - Smooth GPU particles
- `webgl_procedural` - Procedural generation
- `webgl_particles` - Particle overview
- `webgl_particles_arrows` - Arrow particles
- `webgl_particles_random` - Random particles
- `webgl_particles_sprites` - Sprite system
- `webgl_instancing_scatter` - Scatter instancing

### Category 4: Physics Integration (~15 examples)
Integration with physics engines (Ammo.js, Rapier, Jolt).

**Examples:**
- `physics_ammo_break` - Fracture physics
- `physics_ammo_cloth` - Cloth simulation
- `physics_ammo_instancing` - Instanced physics
- `physics_ammo_rope` - Rope simulation
- `physics_ammo_terrain` - Terrain physics
- `physics_ammo_volume` - Volume physics
- `physics_jolt_drive` - Jolt driving
- `physics_jolt_instancing` - Jolt instances
- `physics_jolt_vehicle` - Vehicle physics
- `physics_rapier_basic` - Basic Rapier
- `physics_rapier_instancing` - Rapier instances
- `physics_rapier_joints` - Joint physics
- `physics_rapier_terrain` - Rapier terrain
- `webgl_interactive_cubes` - Interactive physics (DONE in Phase 1)
- `webgl_interactive_points` - Point interaction

## Task Breakdown

### Wave 1: Advanced Materials (Week 1-2)

#### Task 1.1: Port Physical Material Examples
**Files**: `code/examples/webgl/materials/`
**Action**: Port MeshPhysicalMaterial examples with all features.
- Clearcoat layer setup
- Transmission (glass) with refraction
- Sheen for fabric materials
- Iridescence for thin-film effects

**Verification**:
```bash
tsx test/webgl-examples.test.ts
```

**Done**: Physical material examples render PBR correctly.

#### Task 1.2: Port Environment Map Examples
**Files**: `code/examples/webgl/materials/`
**Action**: Port environment mapping examples.
- HDR environment loading
- Ground-projected environment
- Dynamic environment updates
- Prefiltered environment maps

**Verification**:
```bash
tsx test/webgl-examples.test.ts
```

**Done**: Environment map examples reflect correctly.

#### Task 1.3: Port Special Material Examples
**Files**: `code/examples/webgl/materials/`
**Action**: Port specialized material types.
- Toon/cel shading
- Subsurface scattering approximation
- Volumetric materials
- Bump mapping variations

**Verification**:
```bash
tsx test/webgl-examples.test.ts
```

**Done**: Special materials render with correct effects.

### Wave 2: Animation Systems (Week 2-3)

#### Task 2.1: Port Skeletal Animation Examples
**Files**: `code/examples/webgl/animation/`
**Action**: Port skeletal animation examples.
- Bone hierarchy setup
- SkinnedMesh with skeleton
- Animation mixer integration
- Animation blending

**Verification**:
```bash
tsx test/webgl-examples.test.ts
```

**Done**: Skeletal animations play correctly.

#### Task 2.2: Port Morph Target Examples
**Files**: `code/examples/webgl/animation/`
**Action**: Port morph target animation examples.
- Morph target setup
- Morph target influences
- Morph animation with keyframes
- Morph + skeletal combination

**Verification**:
```bash
tsx test/webgl-examples.test.ts
```

**Done**: Morph targets animate smoothly.

#### Task 2.3: Port Advanced Animation Examples
**Files**: `code/examples/webgl/animation/`
**Action**: Port advanced animation techniques.
- Inverse kinematics
- Animation retargeting
- GPU-based animation
- Instanced animation

**Verification**:
```bash
tsx test/webgl-examples.test.ts
```

**Done**: Advanced animations work correctly.

### Wave 3: Particles (Week 3-4)

#### Task 3.1: Port Basic Particle Examples
**Files**: `code/examples/webgl/particles/`
**Action**: Port basic point and particle examples.
- Points geometry setup
- PointsMaterial configuration
- Custom point sizes
- Point colors and attributes

**Verification**:
```bash
tsx test/webgl-examples.test.ts
```

**Done**: Basic particles render correctly.

#### Task 3.2: Port GPU Particle Examples
**Files**: `code/examples/webgl/particles/`
**Action**: Port GPU-accelerated particle systems.
- GPU compute particles
- Instanced particle rendering
- Particle motion and forces
- Particle lifetime management

**Verification**:
```bash
tsx test/webgl-examples.test.ts
```

**Done**: GPU particles perform efficiently.

#### Task 3.3: Port Sprite Particle Examples
**Files**: `code/examples/webgl/particles/`
**Action**: Port sprite-based particle examples.
- Sprite texture setup
- Billboard behavior
- Sprite animation
- Large sprite counts

**Verification**:
```bash
tsx test/webgl-examples.test.ts
```

**Done**: Sprite particles render and animate.

### Wave 4: Physics Integration (Week 4-6)

#### Task 4.1: Port Ammo.js Physics Examples
**Files**: `code/examples/webgl/physics/`
**Action**: Port Ammo.js physics examples.
- Ammo.js initialization
- Rigid body setup
- Collision detection
- Cloth and rope simulation

**Verification**:
```bash
tsx test/webgl-examples.test.ts
```

**Done**: Ammo.js physics simulate correctly.

#### Task 4.2: Port Rapier Physics Examples
**Files**: `code/examples/webgl/physics/`
**Action**: Port Rapier physics examples.
- Rapier-wasm initialization
- Rigid body dynamics
- Joint constraints
- Character controllers

**Verification**:
```bash
tsx test/webgl-examples.test.ts
```

**Done**: Rapier physics simulate correctly.

#### Task 4.3: Port Jolt Physics Examples
**Files**: `code/examples/webgl/physics/`
**Action**: Port Jolt physics examples.
- Jolt.js initialization
- Vehicle simulation
- Large-scale instancing
- Terrain collision

**Verification**:
```bash
tsx test/webgl-examples.test.ts
```

**Done**: Jolt physics simulate correctly.

#### Task 4.4: Port Interactive Physics Examples
**Files**: `code/examples/webgl/interactive/`
**Action**: Port interaction + physics examples.
- Mouse picking with physics
- Drag and throw
- Force application
- Constraint interaction

**Verification**:
```bash
tsx test/webgl-examples.test.ts
```

**Done**: Interactive physics respond to input.

## File Structure

```
code/examples/webgl/
├── materials/
│   ├── Variations.tsx        # DONE in Phase 1
│   ├── Physical.tsx
│   ├── PhysicalClearcoat.tsx
│   ├── PhysicalTransmission.tsx
│   ├── PhysicalTransmissionAlpha.tsx
│   ├── PhysicalTransmissionRefraction.tsx
│   ├── PhysicalSheen.tsx
│   ├── PhysicalIridescence.tsx
│   ├── PhysicalAnisotropy.tsx
│   ├── Envmaps.tsx
│   ├── EnvmapsEXR.tsx
│   ├── EnvmapsGroundProjected.tsx
│   ├── Bumpmap.tsx
│   ├── BumpmapSkin.tsx
│   ├── Subsurface.tsx
│   ├── Translucency.tsx
│   ├── Toon.tsx
│   ├── Reflectivity.tsx
│   ├── SSS.tsx
│   ├── Volume.tsx
│   └── PBR.tsx
├── animation/
│   ├── Keyframes.tsx         # DONE in Phase 1
│   ├── Multiple.tsx          # DONE in Phase 1
│   ├── Skinning.tsx
│   ├── SkinningAdditive.tsx
│   ├── SkinningBlending.tsx
│   ├── SkinningMorph.tsx
│   ├── Skeleton.tsx
│   ├── Bones.tsx
│   ├── Expression.tsx
│   ├── IK.tsx
│   ├── Walk.tsx
│   ├── Playground.tsx
│   ├── GPGPU.tsx
│   ├── Instancing.tsx
│   └── Retargeting.tsx
├── particles/
│   ├── Points.tsx
│   ├── PointsBillboards.tsx
│   ├── PointsCustom.tsx
│   ├── PointsDynamic.tsx
│   ├── PointsSprites.tsx
│   ├── PointsWaves.tsx
│   ├── PointsMaterial.tsx
│   ├── GPUParticle.tsx
│   ├── GPUParticleSmooth.tsx
│   ├── Procedural.tsx
│   ├── Particles.tsx
│   ├── ParticlesArrows.tsx
│   ├── ParticlesRandom.tsx
│   ├── ParticlesSprites.tsx
│   └── InstancingScatter.tsx
├── physics/
│   ├── AmmoBreak.tsx
│   ├── AmmoCloth.tsx
│   ├── AmmoInstancing.tsx
│   ├── AmmoRope.tsx
│   ├── AmmoTerrain.tsx
│   ├── AmmoVolume.tsx
│   ├── JoltDrive.tsx
│   ├── JoltInstancing.tsx
│   ├── JoltVehicle.tsx
│   ├── RapierBasic.tsx
│   ├── RapierInstancing.tsx
│   ├── RapierJoints.tsx
│   └── RapierTerrain.tsx
└── interactive/
    ├── Cubes.tsx             # DONE in Phase 1
    └── Points.tsx
```

## Verification Criteria

### Automated Tests
1. All examples compile without TypeScript errors
2. Physics library imports resolve (if available)
3. Animation clips load and play
4. Test suite passes: `tsx test/webgl-examples.test.ts`

### Manual Verification
1. Physical materials render with correct PBR appearance
2. Animations play smoothly without jitter
3. Particles render at target frame rate
4. Physics simulations are stable and realistic

### Code Quality
1. No `as any` type casts
2. Proper cleanup of physics resources
3. Animation mixer cleanup on unmount
4. Efficient particle buffer management

## Success Criteria

- [ ] ~65 examples ported and working
- [ ] All automated tests pass
- [ ] Visual verification complete for all examples
- [ ] No TypeScript errors
- [ ] Code review approved
- [ ] Documentation updated

## Dependencies

- Phase 3 complete
- Physics libraries installed (optional):
  - `ammo.js` or `@enable3d/ammo-physics`
  - `@dimforge/rapier3d`
  - `jolt-physics`
- Animation data files accessible

## Risks and Mitigations

| Risk | Mitigation |
|------|------------|
| Physics library availability | Make physics examples optional |
| Animation data loading | Use threejs.org hosted assets |
| Performance with many particles | Add LOD and culling |
| Physics simulation stability | Use fixed timestep |

## Output

After completion, create `.planning/phase-4/04-01-SUMMARY.md` with:
- List of all ported examples
- Physics library compatibility notes
- Animation patterns discovered
- Performance benchmarks
- Recommendations for Phase 5
