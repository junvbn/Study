const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let inputData = [];
rl.on('line', function (line) {
	inputData.push(line.split(' ').map((n) => parseInt(n)));
}).on('close', function () {
	let [sizeCard, arrayCard, sizeWant, arrayWant] = inputData;
	let result = [];
	// arrayCard.sort(function (a, b) {
	// 	return a - b;
	// });
	let cardAlign = arrayCard.reduce((accu, curr) => {
		accu.set(curr, (accu.get(curr) || 0) + 1);
		return accu;
	}, new Map());
	for (let i = 0; i < sizeWant; i++) {
		if (arrayWant[i] == d) {
		}
	}

	// arrayWant.sort(function (a, b) {
	// 	return a - b;
	// });
	// let Wantalign = arrayWant.reduce((accu, curr) => {
	// 	accu.set(curr, (accu.get(curr) || 0) + 1);
	// 	return accu;
	// }, new Map());

	// console.log(result.join(' '));
	process.exit();
});
