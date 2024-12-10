"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
console.log('Hello, world!');
var input = fs.readFileSync('/mnt/nfs/homes/sojung/Documents/projets/adventOfCode2024/day03/input.txt', 'utf8');
console.log("read ".concat(input.length, " characters"));
console.log(input);
