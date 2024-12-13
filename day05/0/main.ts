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
let isValid = true;
let sum = 0;

for (const ticket of tickets.split('\n')) {
	const ticketValues = ticket.split(',').map(Number);
	for (const [index, value] of ticketValues.entries()) {
		const existingRule = ruleMap.get(String(value));
		if (existingRule) {
			for (let next = index + 1;next < ticketValues.length; next++) {
				if (!existingRule.includes(ticketValues[next])) {
					isValid = false;
					break;
				}
			}
			if (!isValid)  {
				break;
			}
		}
	}
	if (!isValid) {
		isValid = true;
		continue;
	} else {
		console.log("index?", Math.floor(ticketValues.length / 2));
		console.log("middle value?", ticketValues[Math.floor(ticketValues.length / 2)]);
		sum += ticketValues[Math.floor(ticketValues.length / 2)];
	}
}

console.log("Total sum : ", sum);