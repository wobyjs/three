declare global {
    interface Array<T> {
        distinct<K>(key?: (v: T) => K): ReadonlyArray<T>
    }
    interface ReadonlyArray<T> {
        distinct<K>(key?: (v: T) => K): ReadonlyArray<T>
    }

}

if (!Array.prototype.distinct) {
    Array.prototype.distinct = function <T, K>(this: T[], key?: (v: T) => K): T[] {
        // Create a new Set for distinct values
        const distinctValues = key
            ? [...new Set(this.map(item => key(item)))]
            : [...new Set(this)];

        // If you want to return the result as a literal type, 
        // you can return it directly as distinctValues.
        return distinctValues as T[]; // Return type is still T[] to maintain type safety
    }
}
export { }
