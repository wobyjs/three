# Phase 7: WebXR Patterns

**Purpose:** Document all patterns for porting WebXR examples from vanilla JavaScript to @woby/three JSX syntax.

---

## Pattern 1: WebXR Support Detection

**Vanilla Three.js:**
```javascript
if ('xr' in navigator) {
    const supported = await navigator.xr.isSessionSupported('immersive-vr')
    if (supported) {
        // VR is available
    }
}
```

**@woby/three JSX:**
```tsx
import { $, $$, useEffect } from "woby"

const [xrSupported, setXRSupported] = $(false)
const [checked, setChecked] = $(false)

useEffect(() => {
    const checkXR = async () => {
        if ('xr' in navigator) {
            try {
                const supported = await navigator.xr.isSessionSupported('immersive-vr')
                setXRSupported(supported)
            } catch (e) {
                console.warn('WebXR check failed:', e)
            }
        }
        setChecked(true)
    }
    checkXR()
})

// Loading state
if (!$$(checked)) {
    return <div>Checking WebXR support...</div>
}

// Fallback for non-XR browsers
if (!$$(xrSupported)) {
    return <div>WebXR Not Available</div>
}
```

**Rule:** Always check WebXR support before attempting to create XR sessions. Use reactive state to handle the async check and provide loading/fallback UI.

---

## Pattern 2: VRButton/ARButton Setup

**Vanilla Three.js:**
```javascript
import { VRButton } from 'three/examples/jsm/webxr/VRButton.js'
import { ARButton } from 'three/examples/jsm/webxr/ARButton.js'

// VR Button
document.body.appendChild(VRButton.createButton(renderer))

// AR Button with features
document.body.appendChild(ARButton.createButton(renderer, {
    requiredFeatures: ['hit-test'],
    optionalFeatures: ['dom-overlay']
}))
```

**@woby/three JSX:**
```tsx
import { XRButton } from 'three/examples/jsm/webxr/XRButton.js'
import { ARButton } from 'three/examples/jsm/webxr/ARButton.js'

// Setup VR button when renderer is ready
useEffect(() => {
    const renderer = $$(rendererRef)
    if (!renderer || !$$(xrSupported)) return

    // Create VR button
    const vrButton = XRButton.createButton(renderer)
    document.body.appendChild(vrButton)

    return () => {
        vrButton.remove()
    }
})

// AR Button with hit-test feature
useEffect(() => {
    const renderer = $$(rendererRef)
    if (!renderer || !$$(arSupported)) return

    const arButton = ARButton.createButton(renderer, {
        requiredFeatures: ['hit-test'],
        optionalFeatures: ['dom-overlay', 'local-floor'],
        domOverlay: { root: document.body }
    })
    document.body.appendChild(arButton)

    return () => {
        arButton.remove()
    }
})
```

**Rule:** Create buttons inside useEffect after renderer is available. Always clean up by removing the button in the cleanup function.

---

## Pattern 3: XRController Event Handling

**Vanilla Three.js:**
```javascript
const controller = renderer.xr.getController(0)
controller.addEventListener('selectstart', onSelectStart)
controller.addEventListener('selectend', onSelectEnd)
scene.add(controller)

function onSelectStart(event) {
    const controller = event.target
    // Handle selection
}
```

**@woby/three JSX:**
```tsx
const controllers: THREE.XRTargetRaySpace[] = []

useEffect(() => {
    const renderer = $$(rendererRef)
    const scene = $$(sceneRef)
    if (!renderer || !$$(xrSupported) || !scene) return

    // Setup controllers
    for (let i = 0; i < 2; i++) {
        const controller = renderer.xr.getController(i)
        controllers.push(controller)

        // Add visual ray line
        const geometry = new THREE.BufferGeometry().setFromPoints([
            new THREE.Vector3(0, 0, 0),
            new THREE.Vector3(0, 0, -1)
        ])
        const material = new THREE.LineBasicMaterial({ color: 0xffffff })
        const line = new THREE.Line(geometry, material)
        line.scale.z = 5
        controller.add(line)

        // Setup select events
        controller.addEventListener('selectstart', onSelectStart)
        controller.addEventListener('selectend', onSelectEnd)

        scene.add(controller)
    }

    return () => {
        controllers.length = 0
    }
})

function onSelectStart(event: THREE.Event) {
    const controller = event.target as THREE.XRTargetRaySpace
    // Handle selection
}
```

**Controller Events:**
| Event | Description |
|-------|-------------|
| `selectstart` | Trigger/button pressed |
| `selectend` | Trigger/button released |
| `select` | Complete select action |
| `squeezestart` | Grip button pressed |
| `squeezeend` | Grip button released |
| `squeeze` | Complete squeeze action |
| `connected` | Controller connected |
| `disconnected` | Controller disconnected |

---

## Pattern 4: Hit-Test for AR Surface Detection

**Vanilla Three.js:**
```javascript
let hitTestSource = null

session.requestReferenceSpace('viewer').then((refSpace) => {
    session.requestHitTestSource({ space: refSpace }).then((source) => {
        hitTestSource = source
    })
})

// In render loop
const results = frame.getHitTestResults(hitTestSource)
if (results.length > 0) {
    const hit = results[0]
    const pose = hit.getPose(referenceSpace)
    reticle.matrix.fromArray(pose.transform.matrix)
}
```

**@woby/three JSX:**
```tsx
let hitTestSource: XRHitTestSource | null = null
let hitTestSourceRequested = false

const reticle = new THREE.Mesh(
    new THREE.RingGeometry(0.15, 0.2, 32).rotateX(-Math.PI / 2),
    new THREE.MeshBasicMaterial({ color: 0xffffff, opacity: 0.5, transparent: true })
)
reticle.matrixAutoUpdate = false
reticle.visible = false

useEffect(() => {
    const renderer = $$(rendererRef)
    const scene = $$(sceneRef)
    if (!renderer || !$$(arSupported) || !scene) return

    scene.add(reticle)

    // Request hit test source on session start
    renderer.xr.addEventListener('sessionstart', () => {
        const session = renderer.xr.getSession()
        if (session) {
            session.requestReferenceSpace('viewer').then((refSpace) => {
                session.requestHitTestSource({ space: refSpace }).then((source) => {
                    hitTestSource = source
                    hitTestSourceRequested = true
                })
            })
        }
    })

    renderer.xr.addEventListener('sessionend', () => {
        hitTestSource = null
        hitTestSourceRequested = false
        reticle.visible = false
    })
})

useFrame((state) => {
    const renderer = $$(rendererRef)
    if (!renderer || !hitTestSource) return

    const frame = state.gl?.xr?.getFrame?.()
    if (!frame) return

    const referenceSpace = renderer.xr.getReferenceSpace()
    if (!referenceSpace) return

    const results = frame.getHitTestResults(hitTestSource)
    if (results.length > 0) {
        const hit = results[0]
        const pose = hit.getPose(referenceSpace)
        if (pose) {
            reticle.visible = true
            reticle.matrix.fromArray(pose.transform.matrix)
        }
    } else {
        reticle.visible = false
    }
})
```

---

## Pattern 5: Hand Tracking Setup

**Vanilla Three.js:**
```javascript
const session = renderer.xr.getSession()
const hand1 = renderer.xr.getHand(0)
const hand2 = renderer.xr.getHand(1)
scene.add(hand1, hand2)
```

**@woby/three JSX:**
```tsx
const [handTrackingSupported, setHandTrackingSupported] = $(false)
const handModels: THREE.Group[] = []

// Check hand tracking support
useEffect(() => {
    const checkXR = async () => {
        if ('xr' in navigator) {
            const vrSupported = await navigator.xr.isSessionSupported('immersive-vr')
            setXRSupported(vrSupported)

            if (vrSupported && 'getHandTrackingSupport' in navigator.xr) {
                const handSupport = await (navigator.xr as any).getHandTrackingSupport?.()
                setHandTrackingSupported(handSupport === 'supported')
            }
        }
        setChecked(true)
    }
    checkXR()
})

// Setup hands when session starts
useEffect(() => {
    const renderer = $$(rendererRef)
    const scene = $$(sceneRef)
    if (!renderer || !$$(xrSupported) || !scene) return

    const vrButton = XRButton.createButton(renderer, {
        optionalFeatures: ['hand-tracking']
    })
    document.body.appendChild(vrButton)

    renderer.xr.addEventListener('sessionstart', () => {
        const session = renderer.xr.getSession()
        if (!session) return

        const hand1 = renderer.xr.getHand(0)
        const hand2 = renderer.xr.getHand(1)
        scene.add(hand1, hand2)
        handModels.push(hand1, hand2)
    })

    renderer.xr.addEventListener('sessionend', () => {
        handModels.length = 0
    })
})
```

---

## Pattern 6: Haptics Usage

**Vanilla Three.js:**
```javascript
const session = renderer.xr.getSession()
const inputSource = session.inputSources[0]
if (inputSource.gamepad.hapticActuators) {
    inputSource.gamepad.hapticActuators[0].pulse(1.0, 100)
}
```

**@woby/three JSX:**
```tsx
function triggerHaptics(controller: THREE.XRTargetRaySpace, intensity = 1.0, duration = 100) {
    const renderer = $$(rendererRef)
    if (!renderer) return

    const session = renderer.xr.getSession()
    if (!session) return

    const inputSource = controller.userData.inputSource

    if (inputSource?.gamepad?.hapticActuators && inputSource.gamepad.hapticActuators.length > 0) {
        inputSource.gamepad.hapticActuators[0].pulse(intensity, duration)
    }
}

// Store input source when controller connects
controller.addEventListener('connected', (event: THREE.Event) => {
    controller.userData.inputSource = event.data
})

// Trigger on select
controller.addEventListener('selectstart', (event: THREE.Event) => {
    const controller = event.target as THREE.XRTargetRaySpace
    triggerHaptics(controller, 0.5, 100)
})
```

---

## Device Requirements Table

| Feature | Device Required | Browser Support |
|---------|-----------------|-----------------|
| Basic VR | VR headset (Quest, Vive, Windows MR) | Chrome, Edge, Firefox Reality |
| Basic AR | AR-capable mobile or headset | Chrome (Android), Safari (iOS) |
| Hand tracking | Quest, Quest 2, Quest Pro | Oculus Browser, Chrome |
| Hit-test | AR with surface detection | ARCore (Android), ARKit (iOS) |
| Haptics | Controllers with vibration | All VR controllers |
| Light estimation | AR with light probe | ARCore 1.19+ (Android) |
| DOM Overlay | AR with DOM support | ARCore, ARKit |

---

## Browser Compatibility Notes

### VR Support
- **Chrome 79+**: Full WebXR VR support
- **Edge 79+**: Full WebXR VR support
- **Firefox Reality**: VR support on standalone headsets
- **Oculus Browser**: VR support on Quest devices
- **Safari**: Limited VR support (WebXR API not fully implemented)

### AR Support
- **Chrome 79+ (Android)**: Full WebXR AR support with ARCore
- **Safari (iOS)**: WebXR AR support via ARKit (iOS 15+)
- **Samsung Internet**: AR support on Samsung devices

### Required Features
- **HTTPS**: WebXR requires secure context
- **localhost**: Works without HTTPS for development
- **User gesture**: XR sessions must be initiated by user action

---

## Fallback UI Patterns

### Basic Fallback
```tsx
if (!$$(xrSupported)) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            background: '#1a1a2e',
            color: 'white',
            textAlign: 'center',
            padding: '20px'
        }}>
            <h1>WebXR Not Available</h1>
            <p>A VR/AR capable device is required.</p>
            <div style={{ width: '100%', height: '400px', marginTop: '20px' }}>
                <canvas3D>
                    {/* Fallback 3D scene */}
                </canvas3D>
            </div>
        </div>
    )
}
```

### Device-Specific Messages
```tsx
// VR fallback
<p>A VR headset (Oculus, Vive, etc.) is required for VR experiences.</p>

// AR fallback
<p>An AR-capable device with ARCore (Android) or ARKit (iOS) is required.</p>

// Hand tracking fallback
<p>Hand tracking requires a Quest, Quest 2, or similar device with hand tracking enabled.</p>
```

---

## Quick Reference

| Vanilla Three.js | @woby/three JSX |
|------------------|-----------------|
| `navigator.xr.isSessionSupported('immersive-vr')` | `useEffect` with reactive state |
| `VRButton.createButton(renderer)` | `XRButton.createButton(renderer)` in `useEffect` |
| `renderer.xr.getController(i)` | Store in array, add event listeners |
| `controller.addEventListener('selectstart', fn)` | Same, with TypeScript types |
| `session.requestHitTestSource({ space })` | In `sessionstart` event handler |
| `frame.getHitTestResults(source)` | In `useFrame` callback |
| `gamepad.hapticActuators[0].pulse()` | Via `controller.userData.inputSource` |

---

## Common Issues

### Issue: WebXR not working on localhost
**Solution:** WebXR requires HTTPS, but `localhost` is treated as secure. Use `localhost` not `127.0.0.1`.

### Issue: Controllers not appearing
**Solution:** Controllers only appear during an active XR session. Check that the session has started.

### Issue: Hit-test not working
**Solution:** Hit-test requires the `hit-test` feature to be requested in `ARButton.createButton` options.

### Issue: Hand tracking not detected
**Solution:** Hand tracking must be requested as an optional feature and the device must support it.

### Issue: Haptics not working
**Solution:** Store the `inputSource` from the `connected` event to access `gamepad.hapticActuators`.
