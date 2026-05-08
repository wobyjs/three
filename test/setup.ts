// Must be the first import in any test file.
// Sets up globals before woby/three modules load (they read window at module init time).

;(globalThis as any).isDeno = true
;(globalThis as any).window = globalThis

if (!globalThis.location)
    Object.defineProperty(globalThis, 'location', {
        value: { href: 'http://localhost', origin: 'http://localhost' },
        writable: true,
        configurable: true,
    })

// Timing shims required by woby effects
;(globalThis as any).requestAnimationFrame ??= (cb: Function) => setTimeout(cb, 0)
;(globalThis as any).cancelAnimationFrame ??= clearTimeout
;(globalThis as any).dispatchEvent ??= () => true

// Three.js source files check instanceof HTMLElement — provide a minimal stub
if (typeof HTMLElement === 'undefined')
    (globalThis as any).HTMLElement = class HTMLElement {}
