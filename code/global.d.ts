/**
 * Global type declarations for Array.prototype.distinct() and toObject().
 *
 * These are used by `code/src/` registration files (e.g. `consParams`, `objProps` tuples)
 * which call `.distinct()` and `.toObject()` on const arrays.
 *
 * Runtime polyfills are in `code/lib/three/extensions.ts` and `code/lib/components/extensions.ts`.
 * These type declarations are needed here (inside tsc's `include` path) so the declaration
 * emit step can type-check the `code/src/` files.
 *
 * @deprecated Use standalone `distinct(arr)` and `toObject(arr)` from `@woby/three/lib/utils` instead.
 */

declare global {
    interface Array<T> {
        /** @deprecated Use `distinct(arr)` from `@woby/three/lib/utils` */
        distinct<K>(key?: (v: T) => K): Array<T>
    }
    interface ReadonlyArray<T> {
        /** @deprecated Use `distinct(arr)` from `@woby/three/lib/utils` */
        distinct<K>(key?: (v: T) => K): ReadonlyArray<T>
        /** @deprecated Use `toObject(arr)` from `@woby/three/lib/utils` */
        toObject(): { [K in T extends string ? T : never]: K }
    }
}

export { }