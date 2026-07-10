/**
 * @deprecated Array.prototype polyfills.
 *
 * Kept as backwards-compatibility shim for files that import this module.
 * New code should use the standalone `distinct()` function from `../utils` instead.
 *
 * These polyfills will be removed in v2.0.
 */

declare global {
    interface Array<T> {
        /** @deprecated Use `distinct(arr)` from `@woby/three/lib/utils` */
        distinct<K>(key?: (v: T) => K): ReadonlyArray<T>
    }
    interface ReadonlyArray<T> {
        /** @deprecated Use `distinct(arr)` from `@woby/three/lib/utils` */
        distinct<K>(key?: (v: T) => K): ReadonlyArray<T>
    }
}

if (!Array.prototype.distinct) {
    Array.prototype.distinct = function <T, K>(this: T[], key?: (v: T) => K): T[] {
        const distinctValues = key
            ? [...new Set(this.map(item => key(item)))]
            : [...new Set(this)]

        return distinctValues as T[]
    }
}
export { }