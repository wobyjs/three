declare global {
    interface Array<T> {
        distinct<K>(key?: (v: T) => K): Array<T>;
    }
    interface ReadonlyArray<T> {
        toObject(): {
            [K in T extends string ? T : never]: K;
        };
    }
}
export interface ReadonlyArray<T> {
    toObject(): {
        [K in T extends string ? T : never]: T;
    };
}
export {};
//# sourceMappingURL=extensions.d.ts.map