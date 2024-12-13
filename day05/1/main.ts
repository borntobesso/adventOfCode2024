import * as fs from 'fs';

const input = fs.readFileSync('/mnt/nfs/homes/sojung/Documents/projets/adventOfCode2024/day05/input.txt', 'utf8');

const rules = input.split('\n\n')[0];
const tickets = input.split('\n\n')[1];
const ruleMap = new Map<string, number[]>();

for (const rule of rules.split('\n')) {
	let existingRule = ruleMap.get(rule.split("|")[0]);
	if (!existingRule) existingRule = [];
	existingRule.push(Number(rule.split("|")[1]));
	ruleMap.set(rule.split("|")[0], existingRule);
}

console.log(ruleMap);
let sum = 0;

for (const ticket of tickets.split('\n')) {
	const ticketValues = ticket.split(',').map(Number);
	for (const [index, value] of ticketValues.entries()) {
		let existingRule = ruleMap.get(String(value));
		if (existingRule) {
			sum += compareAndFixElements(ticketValues, index, existingRule);
		}
	}
}

console.log("Total sum : ", sum);

function compareAndFixElements(comparingElements: number[], index: number, existingRule: number[]): number {
	let isValid = true;
	for (let next = index + 1; next < comparingElements.length; next++) {
		if (!existingRule.includes(comparingElements[next])) {
			isValid = false;
			const temp = comparingElements[index];
			comparingElements[index] = comparingElements[next];
			comparingElements[next] = temp;
			existingRule = ruleMap.get(String(comparingElements[index]));
			if (existingRule)
				compareAndFixElements(comparingElements, index, existingRule);
			else break;
		}
	}
	if (index === comparingElements.length - 1) {
		if (!isValid)
			return comparingElements[Math.floor(comparingElements.length / 2)];
		else return 0;
	}
	return 0;
}