/**
 * Physics examples index
 * Exports all physics example components organized by physics engine
 */

// Ammo.js physics examples
export { Break } from './ammo/Break'
export { Cloth } from './ammo/Cloth'
export { Instancing as AmmoInstancing } from './ammo/Instancing'
export { Rope } from './ammo/Rope'
export { Terrain as AmmoTerrain } from './ammo/Terrain'
export { Volume } from './ammo/Volume'

// Jolt physics examples
export { Drive } from './jolt/Drive'
export { Instancing as JoltInstancing } from './jolt/Instancing'
export { Vehicle } from './jolt/Vehicle'

// Rapier physics examples
export { Basic } from './rapier/Basic'
export { Instancing as RapierInstancing } from './rapier/Instancing'
export { Joints } from './rapier/Joints'
export { Terrain as RapierTerrain } from './rapier/Terrain'

// Category metadata
export const physicsExamples = {
    ammo: {
        name: 'Ammo.js Physics',
        description: 'Physics simulation using Ammo.js (Bullet Physics port)',
        examples: [
            { name: 'Break', component: 'Break', description: 'Breakable objects with fracture simulation' },
            { name: 'Cloth', component: 'Cloth', description: 'Cloth simulation using soft body physics' },
            { name: 'Instancing', component: 'AmmoInstancing', description: 'Instanced rigid bodies' },
            { name: 'Rope', component: 'Rope', description: 'Rope/chain simulation' },
            { name: 'Terrain', component: 'AmmoTerrain', description: 'Terrain collision with heightfield' },
            { name: 'Volume', component: 'Volume', description: 'Soft body volume physics' }
        ]
    },
    jolt: {
        name: 'Jolt Physics',
        description: 'Physics simulation using Jolt.js (modern physics engine)',
        examples: [
            { name: 'Drive', component: 'Drive', description: 'Vehicle driving simulation' },
            { name: 'Instancing', component: 'JoltInstancing', description: 'Instanced physics with sleep optimization' },
            { name: 'Vehicle', component: 'Vehicle', description: 'Vehicle physics with wheel suspension' }
        ]
    },
    rapier: {
        name: 'Rapier Physics',
        description: 'Physics simulation using Rapier (Rust-based physics engine)',
        examples: [
            { name: 'Basic', component: 'Basic', description: 'Basic rigid body simulation' },
            { name: 'Instancing', component: 'RapierInstancing', description: 'High-performance instanced physics' },
            { name: 'Joints', component: 'Joints', description: 'Joint constraints with chains and pendulums' },
            { name: 'Terrain', component: 'RapierTerrain', description: 'Heightfield terrain collision' }
        ]
    }
}

export const allPhysicsExamples = [
    ...physicsExamples.ammo.examples,
    ...physicsExamples.jolt.examples,
    ...physicsExamples.rapier.examples
]