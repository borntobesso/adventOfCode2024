"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
console.log('Hello, world!');
var input = fs.readFileSync('/mnt/nfs/homes/sojung/Documents/projets/adventOfCode2024/day03/input.txt', 'utf8');
console.log("read ".concat(input.length, " characters"));
var elements = [];
for (var i = 0; i < input.length;) {
    var nextMulSub = input.slice(i).indexOf("mul(");
    if (nextMulSub === -1)
        break;
    getMulElems(input.slice(i + nextMulSub + 4));
    i += nextMulSub + 4;
}
var sum = 0;
for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
    var elem = elements_1[_i];
    sum += elem[0] * elem[1];
}
console.log("elements: ", elements);
console.log("total: ", sum);
function getMulElems(str) {
    var nextComma = str.indexOf(",");
    var nextParen = str.indexOf(")");
    if (nextComma > 3 || nextComma < 1 || nextParen <= nextComma || nextParen < 1 || nextParen > 7)
        return;
    if (nextParen - nextComma <= 1 || nextParen - nextComma > 4)
        return;
    for (var i = 0; i < nextComma; i++)
        if (str[i] < '0' || str[i] > '9')
            return;
    for (var i = nextComma + 1; i < nextParen; i++)
        if (str[i] < '0' || str[i] > '9')
            return;
    var firstNumStr = str.slice(0, nextComma);
    var secondNumStr = str.slice(nextComma + 1, nextParen);
    var firstNum = parseInt(firstNumStr);
    var sencondNum = parseInt(secondNumStr);
    console.log("firstNumStr: ".concat(firstNumStr, ", num: ").concat(firstNum));
    console.log("secondNumStr: ".concat(secondNumStr, ", num: ").concat(sencondNum));
    elements.push([firstNum, sencondNum]);
}
