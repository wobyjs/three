/**
 * @deprecated Array.prototype polyfills.
 *
 * These are kept as backwards-compatibility shims for `code/src/` files
 * that import `../../lib/three/extensions` and call `.distinct()` / `.toObject()`
 * on arrays. New code should use the standalone `distinct()` and `toObject()`
 * functions from `../utils` instead.
 *
 * These polyfills will be removed in v2.0. Do NOT add new usages.
 *
 * NOTE: Standalone functions are defined inline here (not imported from utils)
 * to avoid a circular dependency: utils.ts imports code/src/ files which import
 * this module.
 */

declare global {
    interface Array<T> {
        /** @deprecated Use `distinct(arr)` from `@woby/three/lib/utils` */
        distinct<K>(key?: (v: T) => K): Array<T>
    }
    interface ReadonlyArray<T> {
        /** @deprecated Use `toObject(arr)` from `@woby/three/lib/utils` */
        toObject(): { [K in T extends string ? T : never]: K }
    }
}

if (!Array.prototype.distinct)
    Array.prototype.distinct = function <T, K>(this: T[], key?: (v: T) => K): T[] {
        return [...new Set(this)]
    }

if (!(Array.prototype as any).toObject)
    (Array.prototype as any).toObject = function <T extends string>(this: readonly T[]): { [K in T]: K } {
        if (!this) return null as any
        return this.reduce((acc, key) => {
            (acc as any)[key] = key
            return acc
        }, {} as { [key: string]: string }) as any
    }

export { }