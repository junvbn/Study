const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let inputData = [];
rl.on('line', function (line) {
	inputData.push(line.split(' ').map((x) => parseInt(x)));
}).on('close', function () {
	let [[size, count], array] = inputData;
	let changeCount = 0;
	let result = [];
	for (let i = 0; i < size - 1; i++) {
		for (let j = 0; j < size - i - 1; j++) {
			if (array[j] > array[j + 1]) {
				let memory = array[j];
				array[j] = array[j + 1];
				array[j + 1] = memory;
				changeCount++;
				if (changeCount == count) {
					count = 0;
					result.push(array[j]);
					result.push(array[j + 1]);
				}
			}
		}
	}

	if (changeCount >= count) {
		console.log(result[0], result[1]);
	} else {
		console.log(-1);
	}
	process.exit();
});
