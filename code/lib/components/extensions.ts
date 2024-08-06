declare global {
    interface Array<T> {
        distinct<K>(key?: (v: T) => K): Array<T>
    }

}

if (!Array.prototype.distinct)
    Array.prototype.distinct = function <T, K>(this: T[], key?: (v: T) => K): T[] {
        return [...new Set(this)];
    }

export { }