"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var e_1, _a, e_2, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var input = fs.readFileSync('/mnt/nfs/homes/sojung/Documents/projets/adventOfCode2024/day04/input.txt', 'utf8');
console.log("read ".concat(input.length, " characters"));
var lines = input.split("\n");
var lineNum = lines.length;
var columnNum = lines[0].length;
var count = 0;
try {
    for (var _c = __values(lines.entries()), _d = _c.next(); !_d.done; _d = _c.next()) {
        var _e = __read(_d.value, 2), lineIndex = _e[0], line = _e[1];
        try {
            for (var _f = (e_2 = void 0, __values(line.split("").entries())), _g = _f.next(); !_g.done; _g = _f.next()) {
                var _h = __read(_g.value, 2), columnIndex = _h[0], char = _h[1];
                if (char === "A") {
                    // look the first diagonal
                    if (lineIndex > 0 && lineIndex < lineNum - 1
                        && columnIndex > 0 && columnIndex < columnNum - 1)
                        if (isMandS(lines[lineIndex - 1][columnIndex - 1], lines[lineIndex + 1][columnIndex + 1])
                            && isMandS(lines[lineIndex - 1][columnIndex + 1], lines[lineIndex + 1][columnIndex - 1]))
                            count++;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
            }
            finally { if (e_2) throw e_2.error; }
        }
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
    }
    finally { if (e_1) throw e_1.error; }
}
function isMandS(c1, c2) {
    return (c1 === "M" && c2 === "S") || (c1 === "S" && c2 === "M");
}
console.log("count: ", count);
