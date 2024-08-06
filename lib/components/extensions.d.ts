declare global {
    interface Array<T> {
        distinct<K>(key?: (v: T) => K): Array<T>;
    }
}
export {};
//# sourceMappingURL=extensions.d.ts.map