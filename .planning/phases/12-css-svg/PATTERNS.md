# Phase 12: CSS & SVG Rendering Patterns

**Purpose:** Document patterns for CSS2D, CSS3D, and SVG rendering in @woby/three.

---

## Pattern 1: CSS2D Labels

CSS2DRenderer creates 2D labels that follow 3D objects.

### Setup

```tsx
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer'

// Create CSS2D renderer
const labelRenderer = new CSS2DRenderer()
labelRenderer.setSize(window.innerWidth, window.innerHeight)
labelRenderer.domElement.style.position = 'absolute'
labelRenderer.domElement.style.top = '0px'
document.body.appendChild(labelRenderer.domElement)

// Create label
const div = document.createElement('div')
div.textContent = 'Label Text'
div.style.color = 'white'
div.style.backgroundColor = 'rgba(0,0,0,0.5)'

const label = new CSS2DObject(div)
label.position.set(0, 1, 0)
mesh.add(label)

// Render in animation loop
labelRenderer.render(scene, camera)
```

### Key Points

- CSS2D labels are HTML elements positioned in screen space
- Labels always face the camera
- Use `label.center` to adjust anchor point (default: 0.5, 0.5)
- z-index is automatically managed based on distance to camera

---

## Pattern 2: CSS3D Objects

CSS3DRenderer creates 3D CSS elements that transform in 3D space.

### Setup

```tsx
import { CSS3DRenderer, CSS3DObject, CSS3DSprite } from 'three/examples/jsm/renderers/CSS3DRenderer'

// Create CSS3D renderer
const css3dRenderer = new CSS3DRenderer()
css3dRenderer.setSize(window.innerWidth, window.innerHeight)
css3dRenderer.domElement.style.position = 'absolute'
css3dRenderer.domElement.style.top = '0px'
document.body.appendChild(css3dRenderer.domElement)

// Create CSS3D object
const element = document.createElement('div')
element.style.width = '100px'
element.style.height = '100px'
element.style.background = 'red'

const object = new CSS3DObject(element)
object.position.set(0, 0, 0)
object.rotation.set(0, 0, 0)
scene.add(object)

// Render in animation loop
css3dRenderer.render(scene, camera)
```

### CSS3DSprite

CSS3DSprite always faces the camera (billboard behavior):

```tsx
const sprite = new CSS3DSprite(element)
sprite.rotation2D = Math.PI / 4 // Optional 2D rotation
scene.add(sprite)
```

### Key Points

- CSS3D objects use CSS 3D transforms
- Objects can be rotated in 3D space
- CSS3DSprite for billboard behavior
- Pointer events work on CSS3D elements

---

## Pattern 3: Mixed WebGL and CSS3D

Combine WebGL and CSS3D rendering for hybrid scenes.

### Pattern

```tsx
// WebGL renderer for 3D geometry
<webGLRenderer antialias />

// CSS3D renderer for HTML overlays
const css3dRenderer = new CSS3DRenderer()
css3dRenderer.domElement.style.pointerEvents = 'none' // Let clicks pass through

// Render both in useFrame
useFrame(() => {
    webglRenderer.render(scene, camera)
    css3dRenderer.render(scene, camera)
})
```

### Layer Management

```tsx
// Use layers to control visibility
const css3dLayer = 1
css3dObject.layers.set(css3dLayer)
camera.layers.enable(css3dLayer)
```

---

## Pattern 4: SVG Rendering

SVGRenderer produces vector graphics output.

### Setup

```tsx
import { SVGRenderer } from 'three/examples/jsm/renderers/SVGRenderer'

const svgRenderer = new SVGRenderer()
svgRenderer.setSize(window.innerWidth, window.innerHeight)
svgRenderer.setQuality('high') // 'high' or 'low'
document.body.appendChild(svgRenderer.domElement)

// Render
svgRenderer.render(scene, camera)
```

### SVG-Specific Considerations

```tsx
// Use MeshBasicMaterial for solid fills
<meshBasicMaterial color={0xff0000} />

// Use wireframe for outlines
<meshBasicMaterial color={0x00ff00} wireframe />

// LineBasicMaterial for lines
<lineBasicMaterial color={0x0000ff} linewidth={2} />
```

### Limitations

- No textures (use vertex colors)
- No complex shaders
- Limited material support (Basic, Lambert, Phong, Standard, Normal)
- Performance limited for complex scenes

### Use Cases

- Print-quality output
- Scalable diagrams
- Vector graphics
- Line art

---

## Pattern 5: Resize Handling

Both CSS and SVG renderers need resize handling.

```tsx
useEffect(() => {
    const handleResize = () => {
        const width = window.innerWidth
        const height = window.innerHeight

        // WebGL renderer
        webglRenderer.setSize(width, height)
        camera.aspect = width / height
        camera.updateProjectionMatrix()

        // CSS/SVG renderer
        cssRenderer.setSize(width, height)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
}, [])
```

---

## Pattern 6: Cleanup

Properly clean up DOM elements when unmounting.

```tsx
useEffect(() => {
    const container = document.createElement('div')
    document.body.appendChild(container)

    const renderer = new CSS3DRenderer()
    container.appendChild(renderer.domElement)

    return () => {
        // Remove renderer DOM element
        renderer.domElement.remove()
        // Remove container
        container.remove()
    }
}, [])

// For CSS3DObjects
useEffect(() => {
    const objects: CSS3DObject[] = []

    // Create objects...

    return () => {
        objects.forEach(obj => {
            if (obj.element.parentNode) {
                obj.element.remove()
            }
        })
    }
}, [])
```

---

## Quick Reference

| Renderer | Output | Use Case |
|----------|--------|----------|
| CSS2DRenderer | 2D HTML labels | UI labels, annotations |
| CSS3DRenderer | 3D CSS elements | Interactive panels, 3D UI |
| SVGRenderer | SVG vector graphics | Print, scalable diagrams |

---

## Import Paths

```tsx
// CSS2D
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer'

// CSS3D
import { CSS3DRenderer, CSS3DObject, CSS3DSprite } from 'three/examples/jsm/renderers/CSS3DRenderer'

// SVG
import { SVGRenderer, SVGObject } from 'three/examples/jsm/renderers/SVGRenderer'
```
