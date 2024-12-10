import * as fs from 'fs';

const input = fs.readFileSync('/mnt/nfs/homes/sojung/Documents/projets/adventOfCode2024/day04/input.txt', 'utf8');
console.log(`read ${input.length} characters`);
const lines = input.split("\n");
const lineNum = lines.length;
const columnNum = lines[0].length;

let count = 0;

for (const [lineIndex, line] of lines.entries()) {
	for (const [columnIndex, char] of line.split("").entries()) {
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

function isMandS(c1: string, c2: string): boolean {
	return (c1 === "M" && c2 === "S") || (c1 === "S" && c2 === "M");
}

console.log("count: ", count);
