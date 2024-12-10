import * as fs from 'fs';

const input = fs.readFileSync('/mnt/nfs/homes/sojung/Documents/projets/adventOfCode2024/day04/input.txt', 'utf8');
console.log(`read ${input.length} characters`);
const lines = input.split("\n");
const lineNum = lines.length;
const columnNum = lines[0].length;

let count = 0;

for (const [lineIndex, line] of lines.entries()) {
	for (const [columnIndex, char] of line.split("").entries()) {
		if (char === "X") {
			// look above the current line
			if (lineIndex > 2) {
				// count vertical
				if (isMas(lines[lineIndex - 1][columnIndex], lines[lineIndex - 2][columnIndex], lines[lineIndex - 3][columnIndex])) 
					count++;
				// count vertical sides
				if (columnIndex > 2) {
					if (isMas(lines[lineIndex - 1][columnIndex - 1], lines[lineIndex - 2][columnIndex - 2], lines[lineIndex - 3][columnIndex - 3]))
						count++;
				}
				if (columnIndex < columnNum - 3) {
					if (isMas(lines[lineIndex - 1][columnIndex + 1], lines[lineIndex - 2][columnIndex + 2], lines[lineIndex - 3][columnIndex + 3]))
						count++;
				}
			}
			// look below the current line
			if (lineIndex < lineNum - 3) {
				// count vertical
				if (isMas(lines[lineIndex + 1][columnIndex], lines[lineIndex + 2][columnIndex], lines[lineIndex + 3][columnIndex]))
					count++;
				// count vertical sides
				if (columnIndex > 2) {
					if (isMas(lines[lineIndex + 1][columnIndex - 1], lines[lineIndex + 2][columnIndex - 2], lines[lineIndex + 3][columnIndex - 3]))
						count++;
				}
				if (columnIndex < columnNum - 3) {
					if (isMas(lines[lineIndex + 1][columnIndex + 1], lines[lineIndex + 2][columnIndex + 2], lines[lineIndex + 3][columnIndex + 3]))
						count++;
				}
			}
			// look in the same line
			if (columnIndex > 2) {
				if (isMas(line[columnIndex - 1], line[columnIndex - 2], line[columnIndex - 3]))
					count++;
			}
			if (columnIndex < columnNum - 3) {
				if (isMas(line[columnIndex + 1], line[columnIndex + 2], line[columnIndex + 3]))
					count++;
			}
		}
	}
}

function isMas(c1: string, c2: string, c3: string): boolean {
	return c1 === "M" && c2 === "A" && c3 === "S";
}

console.log("count: ", count);
