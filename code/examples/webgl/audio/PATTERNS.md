# Phase 10: WebAudio Patterns

**Purpose:** Document patterns for integrating Web Audio API with Three.js scenes using @woby/three JSX syntax.

---

## Pattern 1: AudioListener Attachment

**Vanilla Three.js:**
```javascript
const listener = new THREE.AudioListener()
camera.add(listener)
```

**@woby/three JSX:**
```tsx
const listenerRef = $<THREE.AudioListener>()

useEffect(() => {
    const listener = new THREE.AudioListener()
    listenerRef(listener)
})

return (
    <perspectiveCamera>
        {() => {
            const listener = $$(listenerRef)
            if (!listener) return null
            return <primitive object={listener} />
        }}
    </perspectiveCamera>
)
```

**Rule:** AudioListener must be attached to the camera for positional audio to work correctly. Use `primitive` to attach the listener object to the camera.

**Why:** The AudioListener represents the user's ears in the 3D scene. It must be attached to the camera so that audio panning follows the camera's orientation.

---

## Pattern 2: PositionalAudio for 3D Sound

**Vanilla Three.js:**
```javascript
const sound = new THREE.PositionalAudio(listener)
sound.setBuffer(audioBuffer)
sound.setRefDistance(20)
sound.setLoop(true)
mesh.add(sound)
sound.play()
```

**@woby/three JSX:**
```tsx
const soundRef = $<THREE.PositionalAudio>()

useEffect(() => {
    const sound = new THREE.PositionalAudio($$(listenerRef))
    sound.setBuffer(audioBuffer)
    sound.setRefDistance(20)
    sound.setLoop(true)
    soundRef(sound)
})

return (
    <mesh>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshStandardMaterial color="red" />
        {() => {
            const sound = $$(soundRef)
            if (!sound) return null
            return <primitive object={sound} />
        }}
    </mesh>
)
```

**Rule:** PositionalAudio is attached to mesh objects to make sound emit from specific locations in 3D space.

**Why:** PositionalAudio uses Web Audio API's PannerNode to create 3D spatial audio that changes based on the listener's position and orientation relative to the sound source.

---

## Pattern 3: Oscillator Sound Source (No External Files)

**Vanilla Three.js:**
```javascript
const oscillator = sound.context.createOscillator()
oscillator.type = 'sine'
oscillator.frequency.setValueAtTime(440, sound.context.currentTime)
sound.setNodeSource(oscillator)
oscillator.start()
```

**@woby/three JSX:**
```tsx
useEffect(() => {
    const sound = new THREE.PositionalAudio($$(listenerRef))
    const oscillator = sound.context.createOscillator()
    oscillator.type = 'sine'
    oscillator.frequency.setValueAtTime(440, sound.context.currentTime)
    sound.setNodeSource(oscillator)
    sound.setVolume(0.5)
    oscillator.start()
    soundRef(sound)
})
```

**Rule:** For demos without external audio files, use Web Audio API oscillators as sound sources.

**Why:** This allows testing audio functionality without needing to load external audio files, which simplifies examples and reduces dependencies.

---

## Pattern 4: AudioAnalyser for Frequency Data

**Vanilla Three.js:**
```javascript
const analyser = new THREE.AudioAnalyser(sound, 256)
const data = analyser.getFrequencyData()
// Use data for visualization
```

**@woby/three JSX:**
```tsx
const analyserRef = $<THREE.AudioAnalyser>()

useEffect(() => {
    const listener = new THREE.AudioListener()
    const sound = new THREE.Audio(listener)
    // ... setup sound
    const analyser = new THREE.AudioAnalyser(sound, 256)
    analyserRef(analyser)
})

useFrame(() => {
    const analyser = $$(analyserRef)
    if (!analyser) return

    const data = analyser.getFrequencyData()
    // Update visualization based on frequency data
    bars.forEach((bar, i) => {
        bar.scale.y = data[i] / 255
    })
})
```

**Rule:** AudioAnalyser provides frequency data for visualization. Use in `useFrame` for real-time updates.

**Why:** The AudioAnalyser wraps Web Audio API's AnalyserNode to provide frequency and time-domain data for audio visualization.

---

## Pattern 5: Beat-Scheduled Audio Timing

**Vanilla Three.js:**
```javascript
const bpm = 120
const beatDuration = 60 / bpm
let nextBeatTime = audioContext.currentTime

function scheduler() {
    while (nextBeatTime < audioContext.currentTime + 0.1) {
        // Schedule notes
        oscillator.start(nextBeatTime)
        nextBeatTime += beatDuration
    }
}
```

**@woby/three JSX:**
```tsx
const bpm = 120
const beatDuration = 60 / bpm
let nextBeatTime = 0

useEffect(() => {
    const listener = new THREE.AudioListener()
    nextBeatTime = listener.context.currentTime
})

useFrame(() => {
    const ctx = $$(listenerRef)?.context
    if (!ctx) return

    const currentTime = ctx.currentTime

    while (nextBeatTime < currentTime + 0.1) {
        const oscillator = ctx.createOscillator()
        const gainNode = ctx.createGain()

        oscillator.connect(gainNode)
        gainNode.connect(ctx.destination)

        gainNode.gain.setValueAtTime(0.3, nextBeatTime)
        gainNode.gain.exponentialRampToValueAtTime(0.001, nextBeatTime + 0.1)

        oscillator.start(nextBeatTime)
        oscillator.stop(nextBeatTime + 0.1)

        nextBeatTime += beatDuration
    }
})
```

**Rule:** Use Web Audio API's precise timing for beat-synchronized audio. Schedule ahead of time to avoid jitter.

**Why:** Web Audio API's timing is sample-accurate and independent of the main thread, enabling precise audio scheduling even when the render loop has variable frame rates.

---

## Pattern 6: User Interaction Required for Audio

**Vanilla Three.js:**
```javascript
// Audio requires user interaction to start in modern browsers
document.addEventListener('click', () => {
    if (audioContext.state === 'suspended') {
        audioContext.resume()
    }
    sound.play()
})
```

**@woby/three JSX:**
```tsx
const started = $<boolean>(false)

const startAudio = () => {
    const listener = $$(listenerRef)
    if (listener?.context.state === 'suspended') {
        listener.context.resume()
    }
    started(true)
    // Start sounds
}

return (
    <div>
        {!$$started && (
            <button onClick={startAudio}>Start Audio</button>
        )}
        <canvas3D>
            {/* ... scene content */}
        </canvas3D>
    </div>
)
```

**Rule:** Modern browsers require user interaction before audio can play. Add a "Start Audio" button or trigger audio on user click.

**Why:** This is a browser security feature to prevent auto-playing audio that could annoy users. The AudioContext starts in 'suspended' state and must be resumed after user interaction.

---

## Pattern 7: Multiple Sound Sources

**Vanilla Three.js:**
```javascript
const sources = []
frequencies.forEach((freq, i) => {
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set((i - 1.5) * 3, 0, 0)

    const sound = new THREE.PositionalAudio(listener)
    const oscillator = sound.context.createOscillator()
    oscillator.frequency.setValueAtTime(freq, sound.context.currentTime)
    sound.setNodeSource(oscillator)

    mesh.add(sound)
    sources.push({ mesh, sound })
})
```

**@woby/three JSX:**
```tsx
interface AudioSource {
    mesh: THREE.Mesh
    sound: THREE.PositionalAudio
    frequency: number
}

const sources: AudioSource[] = []

useEffect(() => {
    const listener = new THREE.AudioListener()
    const frequencies = [261.63, 329.63, 392.00, 523.25]

    frequencies.forEach((freq, i) => {
        const mesh = new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.MeshStandardMaterial({ color: new THREE.Color().setHSL(i / frequencies.length, 0.7, 0.5) })
        )
        mesh.position.set((i - 1.5) * 3, 0, 0)

        const sound = new THREE.PositionalAudio(listener)
        const oscillator = sound.context.createOscillator()
        oscillator.frequency.setValueAtTime(freq, sound.context.currentTime)
        sound.setNodeSource(oscillator)
        oscillator.start()

        sources.push({ mesh, sound, frequency: freq })
    })
})

return (
    <scene>
        {sources.map((source, i) => (
            <primitive key={i} object={source.mesh}>
                <primitive object={source.sound} />
            </primitive>
        ))}
    </scene>
)
```

**Rule:** For multiple sound sources, create an array of source objects and render them with `primitive`.

**Why:** Each PositionalAudio creates its own PannerNode, allowing multiple independent 3D sound sources in the scene.

---

## Pattern 8: InstancedMesh for Audio Visualization

**Vanilla Three.js:**
```javascript
const bars = new THREE.InstancedMesh(geometry, material, 64)
const dummy = new THREE.Object3D()

function updateBars(data) {
    for (let i = 0; i < 64; i++) {
        const height = data[i] / 255
        dummy.position.set((i - 32) * 0.3, height / 2, 0)
        dummy.scale.set(0.25, height, 0.25)
        dummy.updateMatrix()
        bars.setMatrixAt(i, dummy.matrix)
    }
    bars.instanceMatrix.needsUpdate = true
}
```

**@woby/three JSX:**
```tsx
const barsRef = $<THREE.InstancedMesh>()
const dummy = new THREE.Object3D()
const BAR_COUNT = 64

useFrame(() => {
    const analyser = $$(analyserRef)
    const bars = $$(barsRef)
    if (!analyser || !bars) return

    const data = analyser.getFrequencyData()

    for (let i = 0; i < BAR_COUNT; i++) {
        const height = (data[i] || 0) / 255 * 5 + 0.1
        dummy.position.set((i - BAR_COUNT / 2) * 0.3, height / 2, 0)
        dummy.scale.set(0.25, height, 0.25)
        dummy.updateMatrix()
        bars.setMatrixAt(i, dummy.matrix)
    }
    bars.instanceMatrix.needsUpdate = true
})

return (
    <instancedMesh ref={barsRef} args={[undefined, undefined, BAR_COUNT]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={0x4ecdc4} />
    </instancedMesh>
)
```

**Rule:** Use InstancedMesh for efficient rendering of many audio visualization bars.

**Why:** InstancedMesh renders thousands of instances with a single draw call, making it ideal for frequency bar visualizations that update every frame.

---

## Quick Reference

| Vanilla Three.js | @woby/three JSX |
|------------------|-----------------|
| `camera.add(listener)` | `<perspectiveCamera><primitive object={listener} /></perspectiveCamera>` |
| `mesh.add(sound)` | `<mesh><primitive object={sound} /></mesh>` |
| `new THREE.AudioAnalyser(sound, 256)` | `const analyser = new THREE.AudioAnalyser(sound, 256)` |
| `analyser.getFrequencyData()` | Use in `useFrame()` for real-time updates |
| `oscillator.start(time)` | Schedule ahead with `currentTime + 0.1` buffer |
| AudioContext resume | Add "Start Audio" button for user interaction |

---

## Audio API Types

| Type | Purpose |
|------|---------|
| `AudioListener` | Represents user's ears, attached to camera |
| `Audio` | Non-spatial audio (plays everywhere) |
| `PositionalAudio` | 3D spatial audio attached to objects |
| `AudioAnalyser` | Frequency/time-domain analysis for visualization |
| `AudioLoader` | Loads audio files (MP3, WAV, OGG) |

---

## Common Audio Parameters

| Parameter | Description | Typical Value |
|-----------|-------------|---------------|
| `refDistance` | Distance where volume starts reducing | 20 |
| `maxDistance` | Distance where volume stops reducing | 100 |
| `rolloffFactor` | How fast volume reduces with distance | 1 |
| `distanceModel` | Algorithm for distance attenuation | 'linear', 'inverse', 'exponential' |
| `panningModel` | Spatialization algorithm | 'HRTF', 'equalpower' |