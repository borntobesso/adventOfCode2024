import * as fs from 'fs';

const input = fs.readFileSync('/mnt/nfs/homes/sojung/Documents/projets/adventOfCode2024/day03/input.txt', 'utf8');

const elements: number[][] = [];
let doIt: boolean = true;

for (let i = 0; i < input.length;) {
	const doFlag = input.slice(i).indexOf("do()");;
	const dontFlag = input.slice(i).indexOf("don't()");
	const nextMulSub = input.slice(i).indexOf("mul(");
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

	getMulElems(input.slice(i + nextMulSub + 4), doIt);
	i += nextMulSub + 4;
}

let sum = 0;
for (const elem of elements) {
	sum += elem[0] * elem[1];
}
console.log("elements: ", elements);
console.log("total: ", sum);

function getMulElems(str: string, doIt: boolean) {
	let nextComma = str.indexOf(",");
	let nextParen = str.indexOf(")");
	if (nextComma > 3 || nextComma < 1 || nextParen <= nextComma || nextParen < 1 || nextParen > 7)
		return ;
	if (nextParen - nextComma <= 1 || nextParen - nextComma > 4)
		return ;
	for (let i = 0; i < nextComma; i++)
		if (str[i] < '0' || str[i] > '9')
			return ;
	for (let i = nextComma + 1; i < nextParen; i++)
		if (str[i] < '0' || str[i] > '9')
			return ;
	const firstNumStr = str.slice(0, nextComma);
	const secondNumStr = str.slice(nextComma + 1, nextParen);
	const firstNum = parseInt(firstNumStr);
	const sencondNum = parseInt(secondNumStr);

	if (doIt === true)
		elements.push([firstNum, sencondNum]);
}