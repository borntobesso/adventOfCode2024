"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
console.log('Hello, world!');
var input = fs.readFileSync('/mnt/nfs/homes/sojung/Documents/projets/adventOfCode2024/day03/input.txt', 'utf8');
console.log("read ".concat(input.length, " characters"));
var elements = [];
var doIt = true;
console.log("first dont: ", input.indexOf("don't()"));
console.log("first do: ", input.indexOf("do()"));
console.log("first mul: ", input.indexOf("mul("));
for (var i = 0; i < input.length;) {
    var doFlag = input.slice(i).indexOf("do()");
    ;
    var dontFlag = input.slice(i).indexOf("don't()");
    var nextMulSub = input.slice(i).indexOf("mul(");
    if (nextMulSub === -1)
        break;
    if ((doFlag !== -1 && doFlag < nextMulSub) || (dontFlag !== -1 && dontFlag < nextMulSub)) {
        if (doFlag < nextMulSub && dontFlag < nextMulSub) {
            if (doFlag < dontFlag)
                doIt = false;
            else
                doIt = true;
        }
        else if (doFlag < nextMulSub && dontFlag > nextMulSub)
            doIt = true;
        else if (doFlag > nextMulSub && dontFlag < nextMulSub)
            doIt = false;
    }
    // if (doFlag !== -1 && doFlag < nextMulSub)
    // 	if (dontFlag == -1)
    // 		doIt = true;
    // 	else if (dontFlag < nextMulSub && dontFlag < doFlag)
    // 		doIt = true;
    // 	else if (dontFlag < nextMulSub && dontFlag > doFlag)
    // 		doIt = false;
    // if (dontFlag !== -1 && dontFlag < nextMulSub)
    // 	if (doFlag == -1)
    // 		doIt = false;
    // 	else if (doFlag < nextMulSub && doFlag < dontFlag)
    // 		doIt = false;
    // 	else if (doFlag < nextMulSub && doFlag > dontFlag)
    // 		doIt = true;
    getMulElems(input.slice(i + nextMulSub + 4), doIt);
    i += nextMulSub + 4;
}
var sum = 0;
for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
    var elem = elements_1[_i];
    sum += elem[0] * elem[1];
}
console.log("elements: ", elements);
console.log("total: ", sum);
function getMulElems(str, doIt) {
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
    // console.log(`firstNumStr: ${firstNumStr}, num: ${firstNum}`);
    // console.log(`secondNumStr: ${secondNumStr}, num: ${sencondNum}`);
    // console.log("doit?", doIt);
    if (doIt === true)
        elements.push([firstNum, sencondNum]);
}
