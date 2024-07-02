declare global {
    interface Array<T> {
        distinct<K>(key?: (v: T) => K): Array<T>
    }
    interface ReadonlyArray<T> {
        toObject(): { [K in T extends string ? T : never]: K }
    }
}

export interface ReadonlyArray<T> {
    toObject(): { [K in T extends string ? T : never]: T }
}

// const keys = ['a', 'b', 'c', 'd'] as const


if (!Array.prototype.distinct)
    Array.prototype.distinct = function <T, K>(this: T[], key?: (v: T) => K): T[] {
        return [...new Set(this)]
    }

if (!(Array.prototype as any).toObject)
    (Array.prototype as any).toObject = function <T>(this: Array<T>): { [K in T extends string ? T : never]: K } {
        if (!this) return null
        return this.reduce((acc, key) => {
            (acc as any)[key] = key
            return acc
        }, {} as { [key: string]: string }) as { [K in T extends string ? T : never]: K }
    }


export { } 