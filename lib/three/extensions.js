// const keys = ['a', 'b', 'c', 'd'] as const
if (!Array.prototype.distinct)
    Array.prototype.distinct = function (key) {
        return [...new Set(this)];
    };
if (!Array.prototype.toObject)
    Array.prototype.toObject = function () {
        if (!this)
            return null;
        return this.reduce((acc, key) => {
            acc[key] = key;
            return acc;
        }, {});
    };
export {};
