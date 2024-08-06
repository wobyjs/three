if (!Array.prototype.distinct)
    Array.prototype.distinct = function (key) {
        return [...new Set(this)];
    };
export {};
